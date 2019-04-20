import * as React from "react";
import { connect } from "react-redux";
import { getStock } from "../../core/api/actions";
import { Button } from "semantic-ui-react";
import Snacks from "../_shared/Snacks";
import { addSnackbar } from "../../core/network/actions";
import { Snackbar } from "@material-ui/core";

type DashboardProps = typeof mapDispatchToProps;

const Dashboard = ({ getStock, addSnackbar }: DashboardProps) => (
  <>
    <p>Dashboard</p>
    <Button onClick={() => getStock("AAPL")}> Get Stock </Button>
    <Button
      onClick={() =>
        addSnackbar({
          message: "Failed fetching data.",
          options: {
            variant: "warning"
          }
        })
      }
    >
      add snack
    </Button>
    <Snacks />
  </>
);

const mapDispatchToProps = { getStock, addSnackbar };

export default connect(
  undefined,
  mapDispatchToProps
)(Dashboard);
