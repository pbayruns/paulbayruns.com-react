import React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';
import { Button } from '@material-ui/core';
import myHead from "img/my head.svg";
import Sitebar from 'Sitebar';


export default class AboutPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Sitebar />
                <div className="container container-padded">
                    <div className="row justify-content-center">
                        <div className="img-wrapper-wrapper">
                            <div className="img-center-wrapper">
                                <img className="img-circle" src={myHead} alt="A vector graphic of my head" />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <p className="body-copy">Hey there, I'm Paul. I'm currently a full stack developer for <a href="http://fitdegree.com/">fitDEGREE</a>,
                working primarily in Angular 2 and PHP (Silex). I'm also experienced with React, Django, Java, C#, SQL, and Amazon Web Services.</p>
                    </div>
                    <div className="row  justify-content-center">
                        <p className="body-copy">I like to engage both halves of my brain, having split my free time at college
                        between the Computer Science and Art departments. As a result, I've picked up a variety of interests over the years including photography, video art, animation, game design, and ASL. </p>
                    </div>
                    <div className="row  justify-content-center">
                        <p className="body-copy">A lot of great ideas start small, so I think it's important to support learning with development of personal projects.
                    </p>
                    </div>
                    <div className="row justify-content-center">
                        <Button component={Link} to={routes.PROJECTS.URL} label="See Projects" primary />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}