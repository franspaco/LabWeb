import React, { Component } from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';

import './App.css';

import Root from './Root';
import theme from './muiTheme';


class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Root />
            </MuiThemeProvider>
        );
    }
}

export default App;
