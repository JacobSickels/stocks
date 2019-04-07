import * as React from "react";
import { connect } from "react-redux";
import { getStock } from "../../core/api/actions";
import { Button } from "semantic-ui-react";

const Dashboard = ({ getStock }) => (
  <>
    <p>Dashboard</p>
    <Button onClick={() => getStock("AAPL")}> Get Stock </Button>
  </>
);

const mapDispatchToProps = { getStock };

export default connect(
  undefined,
  mapDispatchToProps
)(Dashboard);
