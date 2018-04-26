import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../Routing/constants.js';
import RaisedButton from 'material-ui/RaisedButton';
import Sitebar from '../Sitebar';

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
                <Sitebar />
                <div style={style} className="container">

                    <div className="row row-spaced justify-content-center text-center">
                        <span>
                            <h1 className="no-select">Paul Bayruns</h1>
                            <h3 className="faded no-select">Full Stack Developer</h3>
                        </span>
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