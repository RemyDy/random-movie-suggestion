import axios from "axios";

export const myKey = process.env.REACT_APP_API_KEY;

export const tmdbBackend = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export const requests = {
    nowPlaying: `/movie/now_playing?api_key=${myKey}&language=en-US&include_adult=false`,
    trending: `/trending/all/week?api_key=${myKey}&language=en-US&include_adult=false`,
    topRated: `/movie/top_rated?api_key=${myKey}&language=en-US&include_adult=false`,
    search: {
        person: {
            id: `search/person?api_key=${myKey}&query=`,
            //between id & credits needs to be a person's ID number
            credits: `/movie_credits?api_key=${myKey}&language=en-US`,
        },
        movie: `search/movie?api_key=${myKey}&query=`,
    },
    discover: `/discover/movie?api_key=${myKey}&language=en-US`,
    genre: {
        action: `&with_genres=28`,
        comedy: `&with_genres=35`,
        horror: `&with_genres=27`,
        romance: `&with_genres=10749`,
        adventure: `&with_genres=12`,
        animated: `&with_genres=16`,
        crime: `&with_genres=80`,
        documentaries: `&with_genres=99`,
        drama: `&with_genres=18`,
        family: `&with_genres=10751`,
        fantasy: `&with_genres=14`,
        history: `&with_genres=36`,
        music: `&with_genres=10402`,
        mystery: `&with_genres=9648`,
        scifi: `&with_genres=878`,
        thriller: `&with_genres=53`,
        war: `&with_genres=10752`,
        western: `&with_genres=37`,
    },
    ratingFrom0: `&sort_by=popularity.asc&vote_average.gte=0`,
    ratingFrom30: `&sort_by=popularity.asc&vote_average.gte=3`,
    ratingFrom50: `&sort_by=popularity.asc&vote_average.gte=5`,
    ratingFrom70: `&sort_by=popularity.asc&vote_average.gte=7`,
    ratingFrom90: `&sort_by=popularity.asc&vote_average.gte=9`,
    adultNo: `&include_adult=false`,
}

export const movieImages = {
    baseURL: "https://image.tmdb.org/t/p/",
}

export const imageSize = {
    original: `original`,

    backdrop: {
        width300: `w300`,
        width780: `w780`,
        width1280: `w1280`,
    },
    logo: {
        width45: `w45`,
        width92: `w92`,
        width154: `w154`,
        width185: `w185`,
        width300: `w300`,
        width500: `w500`,
    },
    poster: {
        width92: `w92`,
        width154: `w154`,
        width185: `w185`,
        width342: `w342`,
        width500: `w500`,
        width780: `w780`,
    },
    profile: {
        width45: `w45`,
        width185: `w185`,
        width632: `h632`,
    },
    still: {
        width92: `w92`,
        width185: `w185`,
        width300: `w300`,
    },
}

