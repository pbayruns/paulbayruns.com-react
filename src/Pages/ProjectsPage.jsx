import React from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../Routing/constants.js';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

const style = {
    marginTop: "25vh",
};

const buttonStyle = {
    margin: "12px"
}


export default class ProjectsPage extends React.Component {
    render() {
        return (
            <div>
                <div style={style} className="container">
                    <div className="row justify-content-center">
                        <h1>Paul Bayruns</h1>
                        <img src="/img/my head.svg" />
                    </div>
                    <div className="row justify-content-center">
                        <RaisedButton label="About Me" primary={true} style={buttonStyle} />
                        <Link to={"/asfdasdf"}>
                            <RaisedButton label="Projects" primary={true} style={buttonStyle} />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}