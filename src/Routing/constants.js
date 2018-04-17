
import LandingPage from '../Pages/LandingPage';
import NotFoundPage from '../Pages/NotFoundPage';
import ProjectsPage from '../Pages/ProjectsPage';
import AboutPage from '../Pages/AboutPage';

//Constants for pages to be used across any page that has routes or redirects
export const PAGES = {
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
    NOT_FOUND: {
        URL: '*',
        DISPLAY_NAME: 'File Not Found',
        COMPONENT: NotFoundPage,
        IS_EXACT: true,
        IS_NAV: false
    }
}