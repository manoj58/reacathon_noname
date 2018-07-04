import React, { Component } from 'react';
import classNames from 'classnames';

export class AppInlineProfile extends Component {

    constructor() {
        super();
        this.state = {
            expanded: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.setState({expanded: !this.state.expanded});
        event.preventDefault();
    }

    render() {
        return  (
            <div className="profile">
                <div>
                    <img src="assets/layout/images/profile.png" alt="" />
                </div>
                <a class="profile-link" onClick={this.onClick}>
                    <span className="username">Guest User</span>
                    <i className="fa fa-fw fa-cog"/>
                </a>
                <ul className={classNames({'profile-expanded': this.state.expanded})}>
                    <li><a><i className="fa fa-fw fa-sign-in"/><span>Login</span></a></li>
                </ul>
            </div>
        );
    }
}