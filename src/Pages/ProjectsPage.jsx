import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../Routing/constants.js';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import pokeball from '../img/pokeball.svg'
import unityLogo from '../img/unity-logo.svg';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/muiThemeable';
import { grey800, red500, white } from 'material-ui/styles/colors';

const style = {
    marginTop: "75px",
};

const buttonStyle = {
    margin: "12px"
}

export default class ProjectsPage extends React.Component {
    render() {
        return (
            <div style={style} className="container">
                <div className="row justify-content-center">
                    <h1>Projects</h1>
                </div>
                <div className="row justify-content-center">
                    <Paper className="paper-padded" zDepth={2}>
                        <h2><img src={unityLogo} alt="unity logo" className="project-icon" />Roguelike RPG</h2>
                        <Divider />
                        <p className="body-copy faded">A 2D roguelike RPG created in C# using the Unity game engine.
                            Assisted by <a href="https://www.tomreedillustration.com/">Tom Reed</a> and <a href="http://justinvisentin.com">Justin Visentin</a> in creation of game art, with original music by Trevor Silva.</p>
                        <a href="https://github.com/pbayruns/unity-roguelike">
                            <RaisedButton label="See Code" labelColor={white} backgroundColor={grey800} />
                        </a>
                        <Link to={PAGES.PROJECTS.URL}>
                            <RaisedButton label="Play Game" labelColor={grey800} backgroundColor={white} style={buttonStyle} />
                        </Link>
                    </Paper>
                </div>
                <div className="row justify-content-center">
                    <Paper className="paper-padded" zDepth={2}>
                        <h2><img src={pokeball} alt="pokeball" className="project-icon" />Pokeviewer</h2>
                        <Divider />
                        <p className="body-copy faded">A Silex & HTML-template driven website for viewing information and stats about pokemon, utilizing a publicly available sqlite pokemon database.</p>
                        <a href="https://github.com/pbayruns/pokeviewer">
                            <RaisedButton label="See Code" labelColor="white" backgroundColor={red500} style={buttonStyle} />
                        </a>
                    </Paper>
                </div>
            </div>
        );
    }
}