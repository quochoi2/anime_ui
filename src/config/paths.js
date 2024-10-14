const paths = {
    home: '/',

    login: '/login',
    signUp: '/signUp',

    trend: 'trend/:trendId',
    genre: 'genre/:genreId',

    animeDetail: '/animeDetail/:trendId/:animeId/:seasonId',
    animeWatch: '/animeWatch/:animeId/:seasonId/:episodeId',

    blog: '/blog',
    blogDetail: '/blogDetail/:blogId',

    notFound: '/not-found',
};

export default paths;
