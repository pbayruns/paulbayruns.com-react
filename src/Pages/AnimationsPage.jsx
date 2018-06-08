import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../Routing/constants.js';
import RaisedButton from 'material-ui/RaisedButton';
import YouTubePlayer from 'react-player/lib/players/YouTube'


import myHead from "../img/my head.svg";
import Sitebar from '../Sitebar';

const buttonStyle = {
    margin: "12px"
}

const style = {
    marginTop: "75px",
};

export default class AnimationsPage extends React.Component {

    constructor(props) {
        this.state = {
            url: 'https://www.youtube.com/watch?v=X3EWpvfs8jc'
        };
    }
    
    render() {
        return (
            <React.Fragment>
                <Sitebar />
                <div style={style} className="container">
                    <div className="row justify-content-center">
                        <h1>Animations</h1>
                    </div>
                </div>
                <div className="container container-padded">
                    <div className="row justify-content-center">
                        <YouTubePlayer
                            url={this.state.url}
                            playing
                            controls
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}