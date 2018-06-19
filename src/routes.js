
import {
    LandingPage, NotFoundPage,
    AboutPage, AnimationsPage,
    GamePage,
    ProjectsPage,
} from 'pages';

//Constants for routes to be used across any page that has routes or redirects
const routes = {
    LANDING: {
        URL: '/',
        DISPLAY_NAME: 'Landing Page',
        COMPONENT: LandingPage,
        IS_EXACT: true,
        IS_NAV: false
    },
    ABOUT: {
        URL: '/about',
        DISPLAY_NAME: 'About Me',
        COMPONENT: AboutPage,
        IS_EXACT: true,
        IS_NAV: false
    },
    PROJECTS: {
        URL: '/projects',
        DISPLAY_NAME: 'Projects',
        COMPONENT: ProjectsPage,
        IS_EXACT: true,
        IS_NAV: false
    },
    GAME: {
        URL: '/roguelike',
        DISPLAY_NAME: 'Roguelike',
        COMPONENT: GamePage,
        IS_EXACT: true,
        IS_NAV: false
    },
    GAME2: {
        URL: '/game',
        DISPLAY_NAME: 'Roguelike',
        COMPONENT: GamePage,
        IS_EXACT: true,
        IS_NAV: false
    },
    ANIMATIONS: {
        URL: '/animations',
        DISPLAY_NAME: 'Animations',
        COMPONENT: AnimationsPage,
        IS_EXACT: true,
        IS_NAV: false
    },
    NOT_FOUND: {
        URL: '*',
        DISPLAY_NAME: 'File Not Found',
        COMPONENT: NotFoundPage,
        IS_EXACT: true,
        IS_NAV: false
    }
}

export default routes;