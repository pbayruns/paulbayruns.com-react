import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { Route } from 'react-router-dom'
import Binder from '../util/binder.js';
import { spring, AnimatedSwitch } from 'react-router-transition';
import './animated-switch.css';
import { PAGES } from './constants.js';
/**
 * AppRouter defines and handles all of the routes for this app.
 * It also handles 404s when a URL is requested but not found.
 * @module AppRouter
 */

/** AppRouter defines and handles all of the routes for this app.
 *  It also handles 404s when a URL is requested but not found.  */
export default class AppRouter extends React.Component {

    constructor(props) {
        super(props);

        //creater a new binder and bind all of the methods in this class
        var binder = new Binder();
        binder.bindAll(this, AppRouter);
    }

    getRoutes() {
        var routes = [];
        var nextRoute = <div></div>
        var nextPage = {};
        var nextReactKey = 0;
        for (var key in PAGES) {
            if (PAGES[key]) {
                nextPage = PAGES[key];
                nextRoute = <Route key={nextReactKey} exact={nextPage.IS_EXACT} path={nextPage.URL} component={nextPage.COMPONENT} />
                nextReactKey++;
                routes.push(nextRoute);
            }
        }
        return routes;
    }

    render() {

        const fadeTransitionConfig = { stiffness: 200, damping: 22 };

        const popTransitionConfig = { stiffness: 360, damping: 25 };

        const slideTransitionConfig = { stiffness: 330, damping: 30 };
        const noTransition = {

            atEnter: {
                opacity: 1,
                scale: 1,
                offset: 0
            },
            atLeave: {
                opacity: spring(1, fadeTransitionConfig),
                scale: spring(1, popTransitionConfig),
                offset: spring(0, slideTransitionConfig)
            },
            atActive: {
                opacity: spring(1, fadeTransitionConfig),
                scale: spring(1, popTransitionConfig),
                offset: spring(0, slideTransitionConfig)
            },
            mapStyles(styles) {

                return {
                    position: 'absolute',
                    boxSizing: 'border-box',
                    width: '100%',
                    height: '100%',
                    opacity: styles.opacity,
                    transform: 'translateX(' + styles.offset + '%) scale(' + styles.scale + ')'
                }
            }
        };



        const fadeTransition = {

            atEnter: Object.assign({}, noTransition.atEnter, { opacity: 0 }),

            atLeave: Object.assign({}, noTransition.atLeave, { opacity: spring(0, fadeTransitionConfig) }),

            atActive: Object.assign({}, noTransition.atLeave, { opacity: spring(1, fadeTransitionConfig) }),

            mapStyles: noTransition.mapStyles
        };
        // const slideLeftTransition = {

        //     atEnter: Object.assign({}, noTransition.atEnter, { offset: 100 }),

        //     atLeave: Object.assign({}, noTransition.atLeave, { offset: spring(-100, slideTransitionConfig) }),

        //     atActive: Object.assign({}, noTransition.atLeave, { offset: spring(0, slideTransitionConfig) }),

        //     mapStyles: noTransition.mapStyles
        // };
        // // child matches will...
        // const bounceTransition = {
        //     // start in a transparent, upscaled state
        //     atEnter: {
        //         scale: 0
        //     },
        //     // leave in a transparent, downscaled state
        //     atLeave: {
        //         scale: 0
        //     },
        //     // and rest at an opaque, normally-scaled state
        //     atActive: {
        //         scale: 1
        //     },
        // };
        // const popTransition = {

        //     atEnter: Object.assign({}, noTransition.atEnter, { scale: 0.8 }),

        //     atLeave: Object.assign({}, noTransition.atLeave, { scale: spring(0.8, popTransitionConfig) }),

        //     atActive: Object.assign({}, noTransition.atLeave, { scale: spring(1, popTransitionConfig) }),

        //     mapStyles: noTransition.mapStyles
        // };

        return (
            <AnimatedSwitch
                atEnter={fadeTransition.atEnter}
                atLeave={fadeTransition.atLeave}
                atActive={fadeTransition.atActive}
                mapStyles={fadeTransition.mapStyles}
                className="route-wrapper"
            >
                {this.getRoutes()}
            </AnimatedSwitch>
        );
    }
}