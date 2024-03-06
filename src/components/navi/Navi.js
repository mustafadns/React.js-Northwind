import React, { Component } from "react";
import "./Navi.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    // NavLink,
    // NavItem,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";

export default class Navi extends Component {
    state = {};
    render() {
        return (
        <div>
            <Navbar color="light" light expand={true}>
            <NavbarBrand href="/">NORTHWİND-REDUX</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
                <Nav className="navbar_main" navbar >
                    {/* <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                        GitHub
                        </NavLink>
                    </NavItem> */}
                    <CartSummary />
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}
