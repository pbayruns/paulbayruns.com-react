import React from 'react';
import { PAGES } from './Routing/constants.js';
import RaisedButton from 'material-ui/RaisedButton';
import { grey800, white } from 'material-ui/styles/colors';

export default class LinkButton extends React.Component {

    render() {

        let { label, url, labelColor, background } = this.props;

        return (
            <a href={url}>
                <RaisedButton label={label} labelColor={labelColor} backgroundColor={background} />
            </a>
        )
    };
}

LinkButton.defaultProps = {
    label: "You Should Add A label Prop",
    url: "",
    labelColor: grey800,
    background: white,
};
