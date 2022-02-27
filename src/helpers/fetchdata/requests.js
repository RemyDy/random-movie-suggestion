const myKey = process.env.REACT_APP_API_KEY;

export const tmdbRequests = {
    fetchTrending: `/trending/all/week?api_key=${myKey}&language=en-US&include_adult=false`,
    fetchTopRated: `/movie/top_rated?api_key=${myKey}&language=en-US&include_adult=false`,
    fetchActionMovies: `/discover/movie/?api_key=${myKey}&language=en-US&include_adult=false&with_genres=28`,
    fetchComedyMovies: `/discover/movie/?api_key=${myKey}&language=en-US&include_adult=false&with_genres=35`,
    fetchHorrorMovies: `/discover/movie/?api_key=${myKey}&language=en-US&include_adult=false&with_genres=27`,
    fetchRomanceMovies: `/discover/movie/?api_key=${myKey}&language=en-US&include_adult=false&with_genres=10749`,
    fetchDocumentaries: `/discover/movie/?api_key=${myKey}&language=en-US&include_adult=false&with_genres=99`,
}

export const noviRequests = {
    post: {
        signup: `/api/auth/signup`,
        signin: `/api/auth/signin`,
        photo: `/api/user/image`,
    },
    get: {
        test: {
            endpoint: `/api/test/all`,
            usersecured: `/api/test/user`,
            adminsecured: `/api/test/admin`,
        },
        signin: {
            user: `/api/user`,
            allusers: `/api/admin/all`,
        },
    },
    put: {
        customize: `/api/user`,
    }
}
