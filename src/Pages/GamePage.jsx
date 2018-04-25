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
const style = {
    marginTop: "75px",
    overflowX: "hidden"
};
export default class GamePage extends React.Component {

    constructor(props) {
        super(props);

        //creater a new binder and bind all of the methods in this class
        var binder = new Binder();
        binder.bindAll(this, GamePage);
        this.state = {
            unityWidth: "50%",
            unityHeight: "50%",
            isFullScreen: false,
            progress: 0,
            loaded: false
        };

    }

    onProgress(progression) {
        let done = (progression === 1);
        this.setState({
            progress: progression * 100,
            loaded: done
        })
    }

    showFullscreen() {
        this.setState({
            unityWidth: "100%",
            unityHeight: "100%"
        });
        document.documentElement.webkitRequestFullscreen();
    }

    render() {
        let { unityHeight, unityWidth, isFullScreen, progress, loaded } = this.state;
        let buttonRow, bar, loadingRow = "";

        document.onfullscreenchange = (event) => {
            this.setState({
                isFullScreen: !this.state.isFullScreen
            })
        };
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
                <div className="row row-spaced justify-content-center">
                    <h2>Loading</h2>
                    <LinearProgress style={progressStyle} mode="determinate" value={progress} />
                </div>;
        } else if (!isFullScreen) {
            buttonRow = <div className="row row-spaced  justify-content-center">
                <RaisedButton onClick={this.showFullscreen} label="Fullscreen" primary />
            </div>;
        }

        if (!isFullScreen) {
            bar = <Sitebar />;
            unityHeight = "50%";
            unityWidth = "50%";
        }

        return (
            <React.Fragment>
                {bar}
                <div style={style} className="container">
                    <div className="row row-spaced justify-content-center">
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