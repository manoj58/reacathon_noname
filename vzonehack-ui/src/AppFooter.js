import React, { Component } from 'react';

export class AppFooter extends Component {

    render() {
        return  (
            <div className="layout-footer">
                <span className="footer-text" style={{'marginRight': '5px'}}>Proprietary and Confidential. Not for discloser outside of Verizon.</span>
                <span className="footer-text" style={{'margin-left': '50%'}}>Copyright 2018</span>
            </div>
        );
    }
}