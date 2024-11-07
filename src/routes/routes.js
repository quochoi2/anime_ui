import config from '~/config';
import AnimeDetailPage from '~/pages/AnimeDetail';
import AnimeWatchPage from '~/pages/AnimeWatch';
import LoginPage from '~/pages/Auth/Login';
import SignUpPage from '~/pages/Auth/SignUp';
import BlogPage from '~/pages/Blog/Blog';
import BlogDetailPage from '~/pages/BlogDetail';
import FavoritePage from '~/pages/Favorite';
import GenrePage from '~/pages/Genre';
import HomePage from '~/pages/Home/Home';

import NotFound from '~/pages/Not-Found';
import TrendPage from '~/pages/Trend';

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
        path: config.paths.favoriteMovie,
        component: FavoritePage,
    },
    {
        path: '*',
        component: NotFound
    },
];
