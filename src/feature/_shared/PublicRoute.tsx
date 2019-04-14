import * as React from "react";
import { connect } from "react-redux";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { RootState } from "../../core/RootReducer";

interface ExternalProps extends RouteProps {
  component: React.ComponentType;
}

type PublicRouteProps = ExternalProps & ReturnType<typeof mapStateToProps>;

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}: PublicRouteProps) => (
  <Route
    {...rest}
    component={(props: any) =>
      isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
