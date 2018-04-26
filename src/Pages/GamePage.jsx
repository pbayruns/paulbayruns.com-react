import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

import Binder from '../util/binder.js';
import Unity from 'react-unity-webgl';
import Sitebar from '../Sitebar';

import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider/Divider';

import unityLogo from '../img/unity-logo.svg';

const progressStyle = {
    maxWidth: "50vw",
    height: "10px"
}

const DEFAULT_UNITY_DIMENSION = "75%";
const FULLSCREEN_UNITY_DIMENSION = "100%";

export default class GamePage extends React.Component {

    constructor(props) {
        super(props);

        //creater a new binder and bind all of the methods in this class
        var binder = new Binder();
        binder.bindAll(this, GamePage);
        this.state = {
            bar: <Sitebar />,
            unityWidth: DEFAULT_UNITY_DIMENSION,
            unityHeight: DEFAULT_UNITY_DIMENSION,
            isFullScreen: false,
            progress: 0,
            loaded: false,
            open: false
        };

    }

    componentWillMount() {
        document.addEventListener("fullscreenchange", this.onFSChanged);
        document.addEventListener("webkitfullscreenchange", this.onFSChanged);
        document.addEventListener("mozfullscreenchange", this.onFSChanged);
        document.addEventListener("MSFullscreenChange", this.onFSChanged);
    }

    componentWillUnmount() {
        document.removeEventListener("fullscreenchange", this.onFSChanged);
        document.removeEventListener("webkitfullscreenchange", this.onFSChanged);
        document.removeEventListener("mozfullscreenchange", this.onFSChanged);
        document.removeEventListener("MSFullscreenChange", this.onFSChanged);
    }

    onFSChanged(event) {
        console.log("EVENT", event);
        /*

        */
        this.setState({
            isFullScreen: !this.state.isFullScreen
        });
        if (this.state.isFullScreen) {
            this.setState({
                unityWidth: FULLSCREEN_UNITY_DIMENSION,
                unityHeight: FULLSCREEN_UNITY_DIMENSION,
                bar: ""
            });
        } else {
            this.setState({
                bar: <Sitebar />,
                unityWidth: DEFAULT_UNITY_DIMENSION,
                unityHeight: DEFAULT_UNITY_DIMENSION,
            });
        }
    }

    onProgress(progression) {
        let done = (progression === 1);
        this.setState({
            progress: progression * 100,
            loaded: done
        })
    }

    showFullscreen() {
        let doc = document.documentElement;
        if (doc.requestFullscreen) {
            doc.requestFullscreen();
        } else if (doc.webkitRequestFullscreen) {
            doc.webkitRequestFullscreen();
        } else if (doc.mozRequestFullScreen) {
            doc.mozRequestFullScreen();
        } else if (doc.msRequestFullscreen) {
            doc.msRequestFullscreen();
        }
    }

    handleToggle() {
        this.setState({ open: !this.state.open })
    };

    render() {
        let { unityHeight, unityWidth, isFullScreen, progress, loaded, bar } = this.state;
        let controls, buttonRow, loadingRow = "";

        //if the user is on mobile, don't render the game
        //instead return a message telling them
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            return (<React.Fragment>
                <Sitebar />
                <div className="container container-padded">
                    <div className="row row-spaced justify-content-center text-center">
                        <span>
                            <h1 className="body-copy">Unfortunately, mobile devices do not support WebGL.</h1>
                            <br/>
                            <h4 className="body-copy faded">Come back on desktop to play!<br />(Mobile support is planned for a future update)</h4>
                        </span>
                        <img src={unityLogo} alt="unity logo" width="100%" />
                    </div>
                </div>
            </React.Fragment>);
        }

        if (!loaded) {
            loadingRow =
                <React.Fragment>
                    <div className="row row-spaced justify-content-center">
                        <h2>Loading {Math.round(progress)}%</h2>
                    </div>
                    <div className="row row-spaced justify-content-center">
                        <LinearProgress style={progressStyle} mode="determinate" value={progress} />
                    </div>
                </React.Fragment>;
        } else if (!isFullScreen) {
            buttonRow = <div className="row row-spaced  justify-content-center">
                <RaisedButton onClick={this.showFullscreen} label="Fullscreen" primary />

            </div>;
            controls = <div className="row row-spaced justify-content-center">
                <Paper className="paper paper-padded" zDepth={2}>
                    <h3 className="text-center">Controls</h3>
                    <Divider />
                    <Menu width={256}>
                        <MenuItem primaryText="Move" secondaryText="WASD" />
                        <MenuItem primaryText="Attack" secondaryText="J or Left Click" />
                        <MenuItem primaryText="Inventory" secondaryText="I or Tab" />
                        <MenuItem primaryText="Stats" secondaryText="P" />
                        <MenuItem primaryText="Menu" secondaryText="Esc" />
                    </Menu>
                </Paper>
            </div>;
        }

        let UnityDivClasses = "row justify-content-center";
        let outerDivClass = "container container-padded";
        if (isFullScreen) {
            UnityDivClasses = "fullscreen";
            outerDivClass = "fullscreen-container";
        }
        return (
            <React.Fragment>
                {bar}
                <div className={outerDivClass}>
                    <div className={UnityDivClasses}>
                        <Unity
                            src='Build/roguelike.json'
                            loader='Build/UnityLoader.js'
                            width={unityWidth} height={unityHeight}
                            onProgress={this.onProgress} />
                    </div>

                    {loadingRow}
                    {buttonRow}
                    {controls}
                </div>
            </React.Fragment>
        );
    }
}