import React, { useEffect } from "react";
import { getStock, getStockSeries } from "../../core/api/actions";
import { connect } from "react-redux";
import { Async } from "../_shared/Async";
import { Image, Label, Button, Divider, Grid } from "semantic-ui-react";
import styled from "styled-components";
import { Percent } from "../_shared/Percent";
import { Line } from "react-chartjs-2";

const StyledLabel = styled(Label)`
  padding: 0.35rem !important;
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 1rem;
`;

export const Content = styled.div`
  margin-left: 2rem;
  display: inline-block;
`;

const LabelContainer = styled.div`
  margin-top: 2.3rem;
  margin-left: 2rem;
  position: absolute;
  display: inline-block;
`;

const H1 = styled.h1`
  font-size: 64px;
  margin-top: 0;
  line-height: 50px;
`;

export const P = styled.p`
  margin: 0;
  padding-bottom: 0.5rem;
  font-size: 16px;
`;

const Graph = styled.div`
  margin: 2rem;
  margin-top: 5rem;
`;

const Stock = ({ stock, stockId, logo, getStock, getStockSeries, series }) => {
  useEffect(() => {
    getStock(stockId);
    getStockSeries(stockId);
  }, []);

  return (
    <Async hasData={stock && logo}>
      <Content>
        <StyledImage size="tiny" src={logo} />

        <h1 as="a" style={{ display: "inline-block" }}>
          {stock && stock.companyName}
        </h1>
        <LabelContainer>
          <StyledLabel>{stock && stock.sector}</StyledLabel>
        </LabelContainer>
      </Content>

      <Button floated="right" primary>
        Add
      </Button>

      <Divider />

      <Grid stackable padded columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Content>
              <P>Price</P>
              <H1>${stock && parseFloat(stock.latestPrice).toFixed(2)}</H1>
            </Content>
          </Grid.Column>
          <Grid.Column />
          <Grid.Column>
            <Content>
              <Percent amount={stock && stock.changePercent * 100} />
            </Content>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Graph>
        <Line
          width={700}
          height={300}
          options={{ aspectRatio: 3, maintainAspectRatio: true }}
          data={{
            labels: series && series.map(stamp => stamp.label),
            datasets: [
              {
                label: "High",
                backgroundColor: "rgba(0,0,0,0.05)",
                borderColor: "rgba(4,0,255, 0.5)",
                data: series && series.map(stamp => stamp.high)
              },
              {
                label: "Close",
                backgroundColor: "rgba(0,0,0,0.05)",
                borderColor: "rgba(255, 207, 16,0.5)",
                data: series && series.map(stamp => stamp.close)
              },
              {
                label: "Low",
                backgroundColor: "rgba(0,0,0,0.05)",
                borderColor: "rgba(246,0,18,0.5)",
                data: series && series.map(stamp => stamp.low)
              }
            ]
          }}
        />
      </Graph>
    </Async>
  );
};

const mapStateToProps = (state, props) => ({
  stockId: props.match.params.id,
  stock: state.stocks[props.match.params.id],
  logo: state.stocks.logo,
  series: state.stocks.series
});

const mapDispatchToProps = { getStock, getStockSeries };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stock);
