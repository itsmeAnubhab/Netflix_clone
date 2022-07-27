const API_KEY=process.env.API_KEY;

export default{
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&lwith_genres=28`,
    },
    
    fetchComdedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&lwith_genres=35`,
    },
    
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&lwith_genres=227`,
    },
    
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&lwith_genres=10749`,
    },
    
    fetchMysteryMovies: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&lwith_genres=9648`,
    },

    fetchSciFiMovies: {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=${API_KEY}&lwith_genres=878`,
    },

    fetchWesternMovies: {
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&lwith_genres=37`,
    },

    fetchAnimationMovies: {
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&lwith_genres=16`,
    },
    
    fetchTV: {
        title: 'TV',
        url: `/discover/movie?api_key=${API_KEY}&lwith_genres=10770`,
    },

    
}