const paths = {
    home: '/',

    trend: 'trend/:trendId',
    genre: 'genre/:genreId',

    animeDetail: '/animeDetail/:trendId/:movieId/:seasonId',

    animeWatch: 'animeWatch/:movieId/:seasonId/:episodeId',

    notFound: '/not-found',
};

export default paths;
