const paths = {
    home: '/',

    login: '/login',
    signUp: '/sign-up',

    trend: 'trend/:trendId',
    genre: 'genre/:genreId',

    animeDetail: '/animedetail/:trendId/:animeId/:seasonId',
    animeWatch: '/animewatch/:animeId/:seasonId/:episodeId',

    blog: '/blog',
    blogDetail: '/blogdetail/:blogId',

    favoriteMovie: '/favoritemovie:userId',

    notFound: '/not-found',
};

export default paths;
