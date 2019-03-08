import React, { Component } from "react";

import chartImg from './img/chart.jpg';

class ReactIgnore extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate() {
        return false;
    }
    render() {
        return React.Children.only(this.props.children);
    }
}

class Chart extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: '90%',
                    marginTop: 50
                }}>
                    <img src={chartImg} alt="" style={{
                        width: '100%'
                    }}/>
                </div>
            </div>
        );
    }
}

export default Chart;
