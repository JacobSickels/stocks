import * as React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const NavContainer = styled.div`
  height: 100vh;
  width: 18rem;
  float: left;
  background-color: #fafafa;
`;

const ComponentContainer = styled.div`
  float: left;
  height: 100vh;
  width: calc(100vw - 18rem);
  padding: 1.75rem;
`;

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <AppContainer>
          <NavContainer>
            <Navigation />
          </NavContainer>
          <ComponentContainer>
            <Component {...props} />{" "}
          </ComponentContainer>
        </AppContainer>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
