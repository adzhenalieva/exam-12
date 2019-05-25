import React from 'react';
import {apiURL} from "../../../../constants";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import './Menu.css';

const UserMenu = ({user, logout}) => (
    <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
            {user.facebookId ?
                <img className="Image" src={user.avatar} alt="icon"/>
                : <img className="Image" src={apiURL + '/uploads/users/' + user.avatar} alt="icon"/>
            }
            Hello, {user.displayName}
        </DropdownToggle>
        <DropdownMenu right>
            <DropdownItem className="ml-2" onClick={logout}>
                Log out
            </DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
);

export default UserMenu;