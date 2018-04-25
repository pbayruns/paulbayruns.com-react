import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

import Binder from '../util/binder.js';
import Unity from 'react-unity-webgl';
import Sitebar from '../Sitebar';

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
            loaded: false
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

    render() {
        let { unityHeight, unityWidth, isFullScreen, progress, loaded, bar } = this.state;
        let buttonRow, loadingRow = "";

        //if the user is on mobile, don't render the game
        //instead return a message telling them
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            return (<React.Fragment>
                <Sitebar />
                <div className="row row-spaced justify-content-center">
                    <h1>Unfortunately, Unity cannot run on mobile web browsers.</h1>
                    <h4 className="faded">But don't worry, later on I will be adding mobile support!</h4>
                </div>
            </React.Fragment>);
        }

        if (!loaded) {
            loadingRow =
                <React.Fragment>
                    <div className="row row-spaced justify-content-center">
                        <h2>Loading {progress}%</h2>
                    </div>
                    <div className="row row-spaced justify-content-center">
                        <LinearProgress style={progressStyle} mode="determinate" value={progress} />
                    </div>
                </React.Fragment>;
        } else if (!isFullScreen) {
            buttonRow = <div className="row row-spaced  justify-content-center">
                <RaisedButton onClick={this.showFullscreen} label="Fullscreen" primary />
            </div>;
        }

        let UnityDivClasses = "row justify-content-center";
        let outerDivClass = "container";
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
                </div>
            </React.Fragment>
        );
    }
}