import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../Routing/constants.js';
import RaisedButton from 'material-ui/RaisedButton';
import Sitebar from '../Sitebar';

import myHead from "../img/my head.svg";

const style = {
    marginTop: "25vh",
};

const buttonStyle = {
    margin: "12px"
}


export default class LandingPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Sitebar/>
                <div style={style} className="container">

                    <div className="row row-spaced justify-content-center">
                        <h1>Paul Bayruns</h1>
                        <h6 className="faded">Full Stack Developer</h6>
                    </div>
                    <div className="row justify-content-center">
                        <Link to={PAGES.ABOUT.URL}>
                            <RaisedButton label="About Me" primary={true} style={buttonStyle} />
                        </Link>
                        <Link to={PAGES.PROJECTS.URL}>
                            <RaisedButton label="Projects" primary={true} style={buttonStyle} />
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}