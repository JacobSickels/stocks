import React, { useEffect } from "react";
import { getStock, getStockSeries } from "../../core/api/actions";
import { connect } from "react-redux";
import { Async } from "../_shared/Async";
import { Label, Button, Divider, Grid, Header } from "semantic-ui-react";
import styled from "styled-components";
import { Percent } from "../_shared/Percent";
import { Line } from "react-chartjs-2";
import { getRecentStock } from "../../core/collection/actions";
import Browse from "./Browse";
import { RootState } from "../../core/RootReducer";
import { RouteComponentProps } from "react-router";

const StyledImage = styled.img`
  position: absolute;
  margin-top: 1rem;
  height: 3rem;
  width: auto;
`;

export const Content = styled.div`
  height: 2rem;
  margin-top: 4rem;
  display: inline-block;
  width: 100%;
`;

const LabelContainer = styled.div`
  display: inline-block;
  margin: 0.5rem;
  padding-top: -5rem !important;
`;

const H1 = styled.h1`
  font-size: 64px;
  line-height: 50px;
`;

export const P = styled.p`
  margin: 0;
  padding-bottom: 0.5rem;
  font-size: 16px;
`;

const Graph = styled.div`
  margin-top: 5rem;
`;

type StockProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

const Stock = ({
  stock,
  stockId,
  logo,
  getStock,
  getStockSeries,
  series,
  getRecentStock
}: StockProps) => {
  useEffect(() => {
    getStock(stockId);
    getStockSeries(stockId);
  }, []);

  const addStockToCollection = () => getRecentStock(stockId);

  return (
    <>
      <Browse />
      <Async hasData={stock && logo}>
        <StyledImage src={logo} />
        <Content>
          <Header
            size="huge"
            style={{ display: "inline-block", marginTop: "1rem" }}
          >
            {stock && stock.companyName}
            <LabelContainer>
              <Label>{stock && stock.sector}</Label>
            </LabelContainer>
          </Header>

          <Button primary floated="right" onClick={addStockToCollection}>
            Add
          </Button>
        </Content>

        <Divider />

        <Grid stackable padded columns={3}>
          <Grid.Row>
            <Grid.Column>
              <P>Price</P>
              <H1>${stock && parseFloat(stock.latestPrice).toFixed(2)}</H1>
            </Grid.Column>
            <Grid.Column />
            <Grid.Column>
              <Percent amount={stock && stock.changePercent * 100} />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Graph>
          <Line
            width={600}
            height={200}
            options={{ aspectRatio: 3, maintainAspectRatio: true }}
            data={{
              labels: series && series.map((stamp: any) => stamp.label),
              datasets: [
                {
                  label: "High",
                  backgroundColor: "rgba(0,0,0,0.05)",
                  borderColor: "rgba(4,0,255, 0.5)",
                  data: series && series.map((stamp: any) => stamp.high)
                },
                {
                  label: "Close",
                  backgroundColor: "rgba(0,0,0,0.05)",
                  borderColor: "rgba(255, 207, 16,0.5)",
                  data: series && series.map((stamp: any) => stamp.close)
                },
                {
                  label: "Low",
                  backgroundColor: "rgba(0,0,0,0.05)",
                  borderColor: "rgba(246,0,18,0.5)",
                  data: series && series.map((stamp: any) => stamp.low)
                }
              ]
            }}
          />
        </Graph>
      </Async>
    </>
  );
};

const mapStateToProps = (
  state: RootState,
  props: RouteComponentProps<{ id: string }>
) => {
  const id = props.match.params.id;
  return {
    stockId: id,
    stock: state.stocks[id],
    logo: state.stocks.logo,
    series: state.stocks.series
  };
};

const mapDispatchToProps = { getStock, getStockSeries, getRecentStock };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stock);
