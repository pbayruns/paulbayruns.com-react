import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../Routing/constants.js';
import RaisedButton from 'material-ui/RaisedButton';

import myHead from "../img/my head.svg";
import Sitebar from '../Sitebar';

const buttonStyle = {
    margin: "12px"
}


export default class AboutPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Sitebar />
                <div className="container container-padded">
                    <div className="row justify-content-center">
                        <img className="img-circle" src={myHead} alt="A vector graphic of my head" />
                    </div>
                    <div className="row row-spaced justify-content-center">
                        <p className="body-copy">I'm Paul. I'm currently a full stack developer for <a href="http://fitdegree.com/">fitDEGREE</a>,
                working primarily in Angular 2 and PHP. I'm also experienced with React, Django, Java, C#, and Amazon Web Services.</p>
                    </div>
                    <div className="row row-spaced justify-content-center">
                        <p className="body-copy">I like to engage both halves of my brain, having split my free time at college
                        between the Computer Science and Art departments. As a result, I've picked up a variety of interests over the years including photography, video art, animation, game design, and ASL. </p>
                    </div>
                    <div className="row row-spaced justify-content-center">
                        <p className="body-copy">I also work persistently on a variety of personal projects to push myself to constantly learn.
                    </p>
                    </div>
                    <div className="row justify-content-center">
                        <Link to={PAGES.PROJECTS.URL}>
                            <RaisedButton label="See Projects" primary style={buttonStyle} />
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}