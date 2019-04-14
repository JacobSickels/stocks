import * as React from "react";
import { connect } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";
import Navigation from "./Navigation";
import styled from "styled-components";
import { RootState } from "../../core/RootReducer";

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
  height: 100vh;
  width: calc(100vw - 18rem);
  padding: 1.5rem;
  position: absolute;
  left: 18rem;
`;

interface ExternalProps extends RouteProps {
  component: React.ComponentType<any>;
}

type PrivateRouteProps = ExternalProps & ReturnType<typeof mapStateToProps>;

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}: PrivateRouteProps) => (
  <Route
    {...rest}
    component={(props: any) =>
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

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
