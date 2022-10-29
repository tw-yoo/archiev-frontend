import React from 'react';
import NavBar from 'react-bootstrap/Navbar'
import '../../../node_modules/react-side-nav/dist/themes.css';
import Container from 'react-bootstrap/Container';

import './navBar.css'

const TopNavBar = (props) => {
    return (
        <>
            <NavBar bg="dark" variant="dark">
                <Container>
                <NavBar.Brand href="#home">
                    {/* <img
                    alt=""
                    src="public/logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    /> */}
                    ArchiEV
                </NavBar.Brand>
                </Container>
            </NavBar>
        </>
    )
}

export default TopNavBar