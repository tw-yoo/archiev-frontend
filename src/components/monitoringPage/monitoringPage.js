import React from 'react';
import NavBar from 'react-bootstrap/Navbar'
import '../../../node_modules/react-side-nav/dist/themes.css';
import Container from 'react-bootstrap/Container';

import Selector from  '../selector/Selector'

import './monitoringPage.css'

const MonitoringPage = (props) => {
    return (
        <>
            <Selector />
        </>
    )
}

export default MonitoringPage;