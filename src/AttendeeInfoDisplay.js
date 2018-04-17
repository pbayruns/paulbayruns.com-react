import React from 'react';
import Binder from './util/binder';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';

const styles = {
    chip: {
      margin: 4,
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  };

export default class AttendeeInfoDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }

        let binder = new Binder();
        binder.bindAll(this, AttendeeInfoDisplay);
    }


    getBringingText(){
        let bringing_text = "Bringing ";
        let { bringing_items } = this.props;
        let total = bringing_items.length;
        for(let i = 0; i < total; i++){
            bringing_text += bringing_items[i];
            bringing_text += (total > 2 && i < total - 1) ? ", " : "" 
            bringing_text += (i === total - 2) ? " and " : "";
        }
        bringing_text += ".";
        return bringing_text;
    }

    render() {


        return (
            <div style={styles.wrapper}>
                <Chip style={styles.chip}>
                    <Avatar color="#444" icon={<SvgIconFace />} />
                    Vegan
                </Chip>
                <Chip style={styles.chip}>
                    <Avatar color="#444" icon={<SvgIconFace />} />
                    Vegetarian
                </Chip>
                <Chip style={styles.chip}>
                    <Avatar color="#444" icon={<SvgIconFace />} />
                    Peanut Allergy
                </Chip>
                {this.getBringingText()} 
            </div>
        );
    }
}
