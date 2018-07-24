import React from 'react'
import './css/custom.css';
import './css/custom-themes.css';

import Dashboard from './Dashboard';
import Navigation from './Navigation';

class Landing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toggleNavigation: true
        }
    }

    toggleNavigation = (e) => {
        e.preventDefault();

        this.setState((prevState)=> ({
            toggleNavigation : !prevState.toggleNavigation
        }));

        console.log('toggling navigation again.')
    }


    render() {
        return (
            <div className={ this.state.toggleNavigation ? "page-wrapper chiller-theme sidebar-bg bg1 toggled" : "page-wrapper chiller-theme sidebar-bg bg1 "}>
                <a id="show-sidebar" className="btn btn-sm btn-dark" href="about:blank" onClick={(e) => {this.toggleNavigation(e)}}>
                    <i className="fas fa-bars"></i>
                </a>
                <Navigation toggleNavigation={this.toggleNavigation}/>
                <Dashboard/>
            </div>
        );
    }
}

export default Landing;