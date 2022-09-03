import React from "react";
import {
  Navbar,
  Collapse,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
} from "reactstrap";

export default function Navb() {
  return (
    <div className="d-flex justify-content-around navba row fixed-top">
      <Navbar expand="md" fixed="">
        <div>
          <NavbarBrand href="/" className="navbar-brand">
            React Toys Store
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
        </div>
        <div>
          <Collapse navbar>
            <NavbarText>Movie</NavbarText>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}
