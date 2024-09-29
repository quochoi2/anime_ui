import config from '~/config';
import AnimeDetailPage from '~/pages/AnimeDetail/AnimeDetail';
import AnimeWatchPage from '~/pages/AnimeWatch/AnimeWatch';
import LoginPage from '~/pages/Auth/Login/Login';
import SignUpPage from '~/pages/Auth/SignUp/SignUp';
import BlogPage from '~/pages/Blog/Blog';
import BlogDetailPage from '~/pages/BlogDetail/BlogDetail';
import GenrePage from '~/pages/Genre/Genre';

import HomePage from '~/pages/Home/Home';
import NotFound from '~/pages/Not-Found/NotFound';
import TrendPage from '~/pages/Trend/Trend';

export const publicRoutes = [
    {
        path: config.paths.home,
        component: HomePage,
    },
    {
        path: config.paths.login,
        component: LoginPage,
    },
    {
        path: config.paths.signUp,
        component: SignUpPage,
    },
    {
        path: config.paths.trend,
        component: TrendPage,
    },
    {
        path: config.paths.genre,
        component: GenrePage,
    },
    {
        path: config.paths.animeDetail,
        component: AnimeDetailPage,
    },
    {
        path: config.paths.animeWatch,
        component: AnimeWatchPage,
    },
    {
        path: config.paths.blog,
        component: BlogPage,
    },
    {
        path: config.paths.blogDetail,
        component: BlogDetailPage,
    },
    {
        path: '*',
        component: NotFound
    },
];
