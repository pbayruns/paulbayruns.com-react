import React from 'react';
import { Link } from 'react-router-dom';
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
                title={<span className="hidden-under-md">Paul Bayruns</span>}
                zDepth={1}
                style={appbarStyle}
                titleStyle={appbarTitleStyle}
            >
                <div className="row justify-content-center navbar">
                    <Link to={PAGES.LANDING.URL}>
                        <FlatButton label="Home" primary/>
                    </Link>
                    <Link to={PAGES.ABOUT.URL}>
                        <FlatButton label="About" primary />
                    </Link>
                    <Link to={PAGES.PROJECTS.URL}>
                        <FlatButton label="Projects" primary />
                    </Link>
                </div>
            </AppBar>
        )
    };
}