import React from 'react';
import {apiURL} from "../../../../constants";
import {DropdownItem, DropdownMenu, DropdownToggle, NavLink, UncontrolledDropdown} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const UserMenu = ({user, logout}) => (
    <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
            {user.facebookId ?
                <img src={user.avatar} alt="icon" style={{width: "60px", marginRight: 10,  marginLeft: 20}}/>
                : <img src={apiURL + '/uploads/users/' + user.avatar} alt="icon" style={{width: "60px", marginRight: 10,  marginLeft: 20}}/>
            }
            Hello, {user.displayName}
        </DropdownToggle>
        <DropdownMenu right>

            {/*<DropdownItem>*/}
            {/*    <NavLink tag={RouterNavLink} to="/tracks/new" exact>Add new track</NavLink>*/}
            {/*</DropdownItem>*/}

            <DropdownItem divider/>
            <DropdownItem className="ml-2" onClick={logout}>
                Log out
            </DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
);

export default UserMenu;