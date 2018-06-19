import React from 'react';
import YouTubePlayer from 'react-player/lib/players/YouTube'
import Sitebar from 'Sitebar';

export default class AnimationsPage extends React.Component {

    state = {
        url: 'https://www.youtube.com/watch?v=X3EWpvfs8jc'
    }

    render() {
        return (
            <React.Fragment>
                <Sitebar />
                <div className="container">
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