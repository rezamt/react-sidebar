import React from "react";

import './css/custom.css';
import './css/custom-themes.css';
import config from '../../config';

class SidebarMenu extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            selected: 'none'
        }
    }

    menuClickHandler = (e, value) => {
        e.preventDefault();

        this.setState((prevState) => ({
            selected: prevState.selected === value ? 'none' : value
        }));

    }

    submenuClickHandler = (e, value) => {
        e.preventDefault();

        console.log('selected: ', value)

    }

    render() {
        return (
            <div className="sidebar-menu">
                <ul>
                    <li className="header-menu">
                        <span>Resources</span>
                    </li>
                    <li className={this.state.selected === 'computing' ? 'sidebar-dropdown active' : 'sidebar-dropdown'}>
                        <a href="about:blank" onClick={(e) => this.menuClickHandler(e, 'computing')}>
                            <i className="fa fa-tachometer-alt"></i>
                            <span>Computing</span>
                        </a>
                        <div className="sidebar-submenu"
                             style={{display: this.state.selected === 'computing' ? 'block' : 'none'}}>
                            <ul>
                                <li>
                                    <a href="about:blank" onClick={(e) => this.submenuClickHandler(e, 'vms')}>Virtual
                                        Machines</a>
                                </li>
                                <li>
                                    <a href="about:blank" onClick={(e) => this.submenuClickHandler(e, 'svm')}>Scale
                                        Sets</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={this.state.selected === 'networking' ? 'sidebar-dropdown active' : 'sidebar-dropdown'}>
                        <a onClick={(e) => this.menuClickHandler(e, 'networking')}>
                            <i className="fa fa-arrows-alt"></i>
                            <span>Networking</span>
                        </a>
                        <div className="sidebar-submenu"
                             style={{display: this.state.selected === 'networking' ? 'block' : 'none'}}>
                            <ul>
                                <li>
                                    <a href="about:blank" onClick={(e) => this.submenuClickHandler(e, 'ips')}>Public
                                        IPs</a>
                                </li>
                                <li>
                                    <a href="about:blank" onClick={(e) => this.submenuClickHandler(e, 'agw')}>Application
                                        Gateways</a>
                                </li>

                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

class SidebarHeader extends React.Component {
    render() {
        return (
            <div className="sidebar-header">
                <div className="user-pic">
                    <img className="img-responsive data-user img-rounded" src={require('./img/user.jpg')}
                         alt={'Jhon Smith'}/>
                </div>
                <div className="user-info">
                    <span className="user-name">Jhon <strong>Smith</strong></span>
                    <span className="user-role">Administrator</span>
                    <span className="user-status">
                    <i className="fa fa-circle"></i>
                    <span>Online</span>
                </span>
                </div>
            </div>
        );
    }
}

class SidebarFooter extends React.Component {

    menuOnClick = (e, value) => {
        e.preventDefault();

        if ('logout' === value) {
            console.log ('Logging out user: Logout :: React Router needed.')
        }

        console.log('selected: ', value)

    }

    render() {
        return (
            <div className="sidebar-footer">
                <div className="dropdown">
                </div>
                <div className="dropdown">
                </div>
                <div>
                    <a href="about:blank" onClick={(e) => this.menuOnClick(e, 'logout')}>
                        <i className="fa fa-power-off"></i>
                    </a>
                </div>
            </div>
        );
    }
}

class SidebarBrand extends React.Component {

    toggleNavigation = (e) => {
        e.preventDefault();

        this.props.toggleNavigation(e);
    }

    render() {

        return (
            <div className="sidebar-brand">
                <a href="about:blank" onClick={(e) => e.preventDefault()}>{this.props.title}</a>
                <div id="close-sidebar" onClick={(e) => this.toggleNavigation(e)}>
                    <i className="fas fa-times"></i>
                </div>
            </div>
        );
    }

}

class Navigation extends React.Component {

    render() {
        return (
            <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content">
                    <SidebarBrand title={ config.Title } toggleNavigation={this.props.toggleNavigation}/>
                    <SidebarHeader/>
                    <SidebarMenu/>
                </div>
                <SidebarFooter/>
            </nav>
        );
    }

};

export default Navigation;
