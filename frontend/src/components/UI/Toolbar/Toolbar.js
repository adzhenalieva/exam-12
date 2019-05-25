import React from 'react';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink
} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";
import UserMenu from "./Menus/UserMenu";
import AnonimousMenu from "./Menus/AnonimousMenu";

const Toolbar = ({user, logout}) => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand tag={RouterNavLink} to="/">Photo Gallery</NavbarBrand>
            <Nav className="ml-auto" navbar>
                {user ?
                    <NavItem className="pt-3">
                        <NavLink tag={RouterNavLink} to="/photos/new" exact>Add new photo</NavLink>
                    </NavItem> : null
                }
                {user ? <UserMenu user={user} logout={logout}/> : <AnonimousMenu/>}

            </Nav>
        </Navbar>
    );
};

export default Toolbar;