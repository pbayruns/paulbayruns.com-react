import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../Routing/constants.js';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

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
                        <h2>Roguelike RPG</h2>
                        <Divider />
                        <p className="body-copy">A 2D roguelike RPG created in C# using the Unity game engine.
                            Assisted by <a href="https://www.tomreedillustration.com/">Tom Reed</a> and <a href="http://justinvisentin.com">Justin Visentin</a> in creation of game art, with original music by Trevor Silva.</p>
                            <a href="https://github.com/pbayruns/unity-roguelike">
                            <RaisedButton label="See Code" primary style={buttonStyle} />
                        </a>
                        <Link to={PAGES.PROJECTS.URL}>
                        <RaisedButton label="Play Game" primary style={buttonStyle} />
                    </Link>
                    </Paper>
                </div>
                <div className="row justify-content-center">
                    <Paper className="paper-padded" zDepth={2}>
                        <h2>Pokeviewer</h2>
                        <Divider />
                        <p className="body-copy">A Silex & HTML-template driven website for viewing information and stats about pokemon, utilizing a publicly available sqlite pokemon database.</p>
                    </Paper>
                </div>
            </div>
        );
    }
}