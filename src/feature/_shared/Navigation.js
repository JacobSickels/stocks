import * as React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { signOut } from "../../core/auth/actions";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MenuContainer = styled.div`
  margin-top: 1.75rem;
  margin-left: 1.75rem;
`;

const Navigation = ({ signOut }) => {
  return (
    <MenuContainer>
      <Menu secondary vertical>
        <Menu.Item as={NavLink} to="/dashboard" name="Dashboard" />

        <Dropdown item text="My Account">
          <Dropdown.Menu>
            <Dropdown.Item>Account</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item onClick={signOut}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </MenuContainer>
  );
};

const mapDispatchToProps = { signOut };

export default connect(
  undefined,
  mapDispatchToProps
)(Navigation);
