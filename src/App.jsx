import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import routes from 'routes';
import './animated-switch.css';
import ScrollToTop from 'ScrollToTop';

export default class App extends Component {

    getRoutes() {
        var routeArr = [];
        var nextRoute = "";
        var nextPage = {};
        var nextReactKey = 0;
        for (var key in routes) {
            if (routes[key]) {
                nextPage = routes[key];
                nextRoute = <Route key={nextReactKey} exact={nextPage.IS_EXACT} path={nextPage.URL} component={nextPage.COMPONENT} />
                nextReactKey++;
                routeArr.push(nextRoute);
            }
        }
        return routeArr;
    }

    render() {
        const fadeTransitionConfig = { stiffness: 160, damping: 25 };
        const noTransition = {
            atEnter: { opacity: 1 },
            atLeave: { opacity: spring(1, fadeTransitionConfig) },
            atActive: { opacity: spring(1, fadeTransitionConfig) },

            mapStyles(styles) {
                return {
                    position: 'absolute',
                    boxSizing: 'border-box',
                    width: '100%',
                    height: '100%',
                    opacity: styles.opacity,
                }
            }
        };

        const fadeTransition = {
            atEnter: Object.assign({}, noTransition.atEnter, { opacity: 0 }),
            atLeave: Object.assign({}, noTransition.atLeave, { opacity: spring(0, fadeTransitionConfig) }),
            atActive: Object.assign({}, noTransition.atLeave, { opacity: spring(1, fadeTransitionConfig) }),
            mapStyles: noTransition.mapStyles
        };

        return (
            <BrowserRouter>
                <ScrollToTop>
                    <AnimatedSwitch
                        atEnter={fadeTransition.atEnter}
                        atLeave={fadeTransition.atLeave}
                        atActive={fadeTransition.atActive}
                        mapStyles={fadeTransition.mapStyles}
                        className="route-wrapper"
                    >
                        {this.getRoutes()}
                    </AnimatedSwitch>
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}

