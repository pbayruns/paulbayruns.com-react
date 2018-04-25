import React from 'react';
import { NavLink } from 'react-router-dom';
import { PAGES } from './Routing/constants.js';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';


const appbarStyle = {
    backgroundColor: "white",
    color: "black"
}

const appbarTitleStyle = {
    color: "black",
    fontWeight: "300"
}

export default class Sitebar extends React.Component {

    render() {

        return (
            <AppBar
                title={<React.Fragment>
                    <span className="sitebar-title hidden-under-xxs">Paul Bayruns</span>
                    <span className="sitebar-title hidden-above-xxs hidden-under-xxxs">PB</span>
                </React.Fragment>}
                zDepth={0}
                style={appbarStyle}
                titleStyle={appbarTitleStyle}
            >
                <div className="row justify-content-center navbar">
                    <NavLink to={PAGES.LANDING.URL} exact activeClassName="navlink-active">
                        <FlatButton label="Home" />
                    </NavLink>
                    <NavLink to={PAGES.ABOUT.URL} activeClassName="navlink-active">
                        <FlatButton label="About" />
                    </NavLink>
                    <NavLink to={PAGES.PROJECTS.URL} activeClassName="navlink-active">
                        <FlatButton label="Projects" />
                    </NavLink>
                </div>
            </AppBar>
        )
    };
}