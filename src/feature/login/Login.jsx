import * as React from "react";
import { connect } from "react-redux";
import { signIn } from "../../core/auth/actions";

const Login = ({ signIn }) => <button onClick={signIn}> Login </button>;

const mapDispatchToProps = { signIn };

export default connect(
  undefined,
  mapDispatchToProps
)(Login);
