import React from 'react';
import { Link } from 'react-router-dom';

import routes from 'routes';

import { Button, Divider } from '@material-ui/core';

import Sitebar from 'Sitebar';

import pokeball from 'img/pokeball.svg'
import unityLogo from 'img/unity-logo.svg';
import aftereffectsLogo from 'img/aftereffects_logo.svg'
import pokeviewer from 'img/pokeviewer.png';
import roguelike from 'img/roguelike.png';

import ProjectDisplay from 'ProjectDisplay';


export default class ProjectsPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Sitebar />
                <div className="container project-container">
                    <div className="row bottom-margin-lg justify-content-center">
                        <h1>Projects</h1>
                    </div>
                    <div className="row project-row justify-content-start">
                        <ProjectDisplay
                            icon={unityLogo}
                            screenshot={roguelike}
                            title="Roguelike RPG"
                            codeURL="https://github.com/pbayruns/unity-roguelike"
                            actionURL={routes.GAME.URL}
                            actionText="Play Game"
                            body={
                                <React.Fragment>
                                    A 2D roguelike RPG created in C# using the Unity game engine. Assisted by
                                    <a href="https://www.tomreedillustration.com/">Tom Reed</a> and
                                    <a href="http://justinvisentin.com">Justin Visentin</a> in creation of game art, with original music by Trevor Silva.
                                </React.Fragment>
                            }
                            buttons={
                                <React.Fragment>
                                <Button component={'a'} href="https://github.com/pbayruns/unity-roguelike">See Code</Button>
                                <Button component={Link} to={routes.GAME.URL}>See Code</Button>
                                </React.Fragment>
                            }
                            right
                        />
                    </div>
                    <div className="row project-row justify-content-end">
                        <ProjectDisplay
                            icon={pokeball}
                            screenshot={pokeviewer}
                            title="Pokeviewer"
                            body={
                                <React.Fragment>
                                    A Silex & HTML-template driven website for
                                    viewing information and stats about pokemon, utilizing a
                                    publicly available sqlite pokemon database.
                                </React.Fragment>
                            }
                            buttons={
                                <Button component={'a'} href="https://github.com/pbayruns/pokeviewer">See Code</Button>
                            }
                            left
                        />

                    </div>
                    <div className="row project-row justify-content-start">
                    <ProjectDisplay
                        icon={aftereffectsLogo}
                        screenshot={pokeviewer}
                        title="Animations"
                        body={
                            <React.Fragment>
                                Animations I've created in Adobe Aftereffects.
                            </React.Fragment>
                        }
                        buttons={
                            <Button component={Link} to={routes.ANIMATIONS.URL} />
                        }
                        right
                    />

                </div>
                    <div className="row project-row justify-content-center">
                        <h1 className="body-copy text-center faded-half">...and more to come!</h1>
                        <Divider />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}