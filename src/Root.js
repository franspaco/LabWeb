import React, { Component } from 'react';

import NavBar from './NavBar';

import Chart from './Chart';
import { Divider } from '@material-ui/core';

class Root extends Component {
    render() {
        return (
            <div>
                <NavBar title="App" teamName="Sample Team" />
                <Chart />
            </div>
        );
    }
}

export default Root;