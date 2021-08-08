import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import "./NavMenu.css"

const NavMenu = ({search, setSeach, setList}) => {
    const showModeHandler = () => {
        setList(prev => !prev)
    }

    return (
        <Navbar bg="info" expand="lg">
            <Navbar.Brand href="#reload">hunterBook</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <label className="styleSearch" htmlFor="search">Search</label>
            <input type="text" name="search" value={search} onChange={(e) => setSeach(e.target.value)}/>
            <button onClick={showModeHandler}>Change Show Mode</button>
        </Navbar>
    )
}

export default NavMenu;