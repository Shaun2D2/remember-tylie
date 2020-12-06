import React from 'react';

import { Navbar, Nav, Button } from 'react-bootstrap';

const { Brand, Toggle, Collapse } = Navbar;
const { Link } = Nav;

const Navigation = () => {
  const handleClick = () => {
    window.open('./tylie-memorial.pdf');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Brand href="#home">Tylie Sanders</Brand>
      <Toggle aria-controls="basic-navbar-nav" />
      <Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="#eulogy">Eulogy</Link>
          <Link href="#photos">Photos</Link>
          <Link href="#memories">Memories</Link>
        </Nav>
        <Nav inline>
          <Button onClick={handleClick}>Memorial</Button>
        </Nav>
      </Collapse>
    </Navbar>
  )
};

export default Navigation;
