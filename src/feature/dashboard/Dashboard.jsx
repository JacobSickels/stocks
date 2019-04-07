import * as React from "react";
import { connect } from "react-redux";
import { signOut } from "../../core/auth/actions";

const Dashboard = ({ signOut }) => (
  <>
    <p>Dashboard</p>
    <button onClick={signOut}>Sign out</button>
  </>
);

const mapDispatchToProps = { signOut };

export default connect(
  undefined,
  mapDispatchToProps
)(Dashboard);
