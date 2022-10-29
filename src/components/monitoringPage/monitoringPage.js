import React from 'react';
import NavBar from 'react-bootstrap/Navbar'
import '../../../node_modules/react-side-nav/dist/themes.css';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';

import Selector from  '../selector/Selector'

import './monitoringPage.css'

const MonitoringPage = (props) => {

    const [selectedData, setSelectedData] = useState([]);
    const [selectedArchitecture, setSelectedArchitecture] = useState([]);

    const dataOptions = ['MNIST', 'Fashion MNIST', 'CIFAR-10'];
    const architectureOptions = ['ResNetV2', 'BERT'];

    const handleCheck = (e, checked, setChecked) => {

        var updatedList = [...checked];

        if (e.target.checked) {
          updatedList = [...checked, e.target.id];
        } else {
          updatedList.splice(checked.indexOf(e.target.id), 1);
        }
        setChecked(updatedList);

      };

    return (
        <>
            <div>
                <div class='left'>
                    <div className="data_selector">
                        <Selector 
                        options={dataOptions}
                        currentSelected={selectedData}
                        setOptions={setSelectedData}
                        updateItems={handleCheck}
                        />
                    </div>

                    <div className="architecture_selector">
                        <Selector 
                        options={architectureOptions}
                        currentSelected={selectedArchitecture}
                        setOptions={setSelectedArchitecture}
                        updateItems={handleCheck}
                        />
                    </div>
                </div>

                <div class='right'>
                    
                </div>
            </div>            
        </>
    )
}

export default MonitoringPage;