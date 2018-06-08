import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import { grey800, white } from 'material-ui/styles/colors';

export default class ProjectDisplay extends React.Component {

    buttons(buttons) {
        return buttons.map(item => (
            <h1>{item.name}</h1>
        ));
    }

    render() {
        let { icon, title, buttons, screenshot, body, right } = this.props;

        return (
            <React.Fragment>
                {!right &&
                    <div className="col-lg-6 hidden-md-down paper project-screenshot-wrapper">
                        <span className="img-aligner"></span><img src={screenshot} alt={title + " screenshot"} className="project-screenshot" />
                    </div>
                }
                <Paper className="col-lg-6 col-md-12 paper-padded paper" zDepth={2}>
                    <h2 className="project-title">{ icon && <img src={icon} alt={title + " icon"} className="project-icon" />}{title}</h2>
                    <Divider />
                    <p className="body-copy faded">
                        {body}
                    </p>
                    { buttons }
                </Paper>
                {right &&
                    <div className="col-lg-6 hidden-md-down paper project-screenshot-wrapper">
                        <span className="img-aligner"></span><img src={screenshot} alt={title + " screenshot"} className="project-screenshot" />
                    </div>
                }
            </React.Fragment>
        )
    }
}

ProjectDisplay.defaultProps = {
    icon: "",
    title: "",
    buttons: "",
    screenshot: "",
    body: "",
    right: false
};

ProjectDisplay.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.isRequired,
    primary: PropTypes.string,
    secondary: PropTypes.string,
    codeURL: PropTypes.string,
    actionURL: PropTypes.string,
    actionText: PropTypes.string,
    screenshot: PropTypes.string,
    body: PropTypes.oneOf(PropTypes.string, PropTypes.node),
    right: PropTypes.bool
}