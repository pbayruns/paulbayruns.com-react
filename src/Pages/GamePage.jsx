import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../Routing/constants.js';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Binder from '../util/binder.js';
import Unity from 'react-unity-webgl';


export default class GamePage extends React.Component {

    constructor(props) {
        super(props);

        //creater a new binder and bind all of the methods in this class
        var binder = new Binder();
        binder.bindAll(this, GamePage);

        this.state = {
            unityWidth: "50%",
            unityHeight: "50%",
            isFullScreen: false
        }

    }

    showFullscreen() {
        this.state = {
            unityWidth: "100%",
            unityHeight: "100%"
        };
        document.documentElement.webkitRequestFullscreen();
    }

    
    render() {
        document.onfullscreenchange = ( event ) => { 
            this.setState({
                isFullScreen: !this.state.isFullScreen
            })
          }; 
        let { unityHeight, unityWidth, isFullScreen } = this.state;

        let button = "";
        let bar = "";

        if (!isFullScreen) {
            this.state = {
                unityWidth: "50%",
                unityHeight: "50%"
            };
            button = <RaisedButton onClick={this.showFullscreen} label="Fullscreen" primary />;
            bar = <AppBar
                title="Paul Bayruns"
            />;
        }

        return (
            <React.Fragment>
                {bar}
                <div className="container">
                    <Unity
                        src='Build/roguelike.json'
                        loader='Build/UnityLoader.js'
                        width={unityWidth} height={unityHeight} />
                    {button}
                </div>
            </React.Fragment>
        );
    }
}