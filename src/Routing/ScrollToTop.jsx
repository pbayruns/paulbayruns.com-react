import React from 'react';
import { withRouter } from 'react-router';
import { PAGES } from './constants';

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }

        //if we were on the gamepage before, reload to kill the unity scripts
        //since they are bugged and will keep going otherwise
        if(prevProps.location.pathname === PAGES.GAME.URL || 
            prevProps.location.pathname === PAGES.GAME2.URL){
                window.location.reload();
                console.log("PREV PATH", prevProps.location.pathname)
            }
    }

    render() {
        return this.props.children
    }
}

export default withRouter(ScrollToTop);
