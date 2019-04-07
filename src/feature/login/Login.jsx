import * as React from "react";
import { connect } from "react-redux";
import { signIn } from "../../core/auth/actions";
import { Button } from "semantic-ui-react";

const Login = ({ signIn }) => <Button onClick={signIn}>Login</Button>;

const mapDispatchToProps = { signIn };

export default connect(
  undefined,
  mapDispatchToProps
)(Login);
