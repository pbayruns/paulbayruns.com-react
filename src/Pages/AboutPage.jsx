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
                    <p>I'm Paul. Currently I'm a full stack developer for <a href="http://fitdegree.com/"> fitDEGREE</a>,
                    working primarily in angular and PHP. I've also had my fair share of experience using React, Django, Java, C#, and a variety of Amazon Web Services.</p>
                    <p>I like to engage both halves of my brain, having split my free time at Rowan University
                    between the Computer Science and Art departments. Accordingly, several interests have grabbed my attention over the years,
                    namely photography, video art, animation, game design, and American Sign Language. </p>
                    <p>I also work persistently on a variety of personal projects, learning new technologies that catch my eye.
                    </p>
                </div>
                <div className="row justify-content-center">
                    <Link to={PAGES.PROJECTS.URL}>
                        <RaisedButton label="See Projects" primary style={buttonStyle} />
                    </Link>
                    <Link to={PAGES.LANDING.URL}>
                        <RaisedButton label="Back" secondary style={buttonStyle} />
                    </Link>
                </div>
            </div>
        );
    }
}