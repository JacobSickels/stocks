import React, { useState } from "react";
import styled from "styled-components";
import { Button, Transition } from "semantic-ui-react";
import { connect } from "react-redux";
import Chip from "./Chip";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 10rem;
  background-color: #eaeaea;
  overflow: hidden;
`;

const FAB = styled(Button)`
  position: fixed;
  right: 1rem;
  padding: 3rem;
`;

const CollectionBtn = styled(Button)`
  position: absolute;
  right: 3rem;
  top: 3.5rem;
`;

const Stocks = styled.div`
  padding: 3rem;
`;

const Collection = ({ collection }) => {
  const [visible, setVisibility] = useState(false);

  const toggleVisibility = () => setVisibility(!visible);

  return (
    <Transition.Group animation={"slide up"} duration={500}>
      <FAB
        circular
        style={{ bottom: visible ? "11rem" : "1rem" }}
        icon="sliders horizontal"
        primary
        size="large"
        onClick={toggleVisibility}
      />
      {visible && (
        <Container>
          <Transition.Group animation={"slide up"} duration={500}>
            <Stocks>
              {collection.map((stock, index) => {
                console.log(stock);
                return <Chip key={index} stock={stock} />;
              })}
            </Stocks>
          </Transition.Group>
          <Link to="/collection/create">
            <CollectionBtn primary>Create Collection</CollectionBtn>
          </Link>
        </Container>
      )}
    </Transition.Group>
  );
};

const mapStateToProps = state => ({
  collection: state.collection.stocks
});

export default connect(mapStateToProps)(Collection);
