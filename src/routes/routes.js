import config from '~/config';
import AnimeDetailPage from '~/pages/AnimeDetail/AnimeDetail';
import AnimeWatchPage from '~/pages/AnimeWatch/AnimeWatch';
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
    { path: '*', component: NotFound, layout: null },
];
