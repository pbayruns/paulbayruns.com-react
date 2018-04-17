import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../Routing/constants.js';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

const style = {
    marginTop: "25vh",
};

const buttonStyle = {
    margin: "12px"
}


export default class AboutPage extends React.Component {

    render() {
        return (
            <div style={style} className="container">
                <div className="row justify-content-center">
                    <img className="img-circle" src="/img/my head.svg" />
                </div>
                <div className="row row-spaced justify-content-center">
                    <h1>Paul Bayruns</h1>
                </div>
                <div className="row justify-content-center">
                    <RaisedButton onClick={this.toggleAboutMe} label="About Me" primary={true} style={buttonStyle} />
                    <Link to={PAGES.PROJECTS.URL}>
                        <RaisedButton label="Projects" primary={true} style={buttonStyle} />
                    </Link>
                </div>
            </div>
        );
    }
}