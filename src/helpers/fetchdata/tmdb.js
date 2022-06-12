import axios from "axios";

export const myKey = process.env.REACT_APP_API_KEY;
export const tmdbBackend = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export const requests = {
    movie: {
        id: `movie/`, // insert id after the forward slash and combine include parameters
        latest: `movie/latest?api_key=${myKey}&include_adult=false`,
        nowPlaying: `movie/now_playing?api_key=${myKey}&include_adult=false`,
        popular: `movie/popular?api_key=${myKey}&include_adult=false`,
        topRated: `movie/top_rated?api_key=${myKey}&include_adult=false`,
        upcoming: `movie/upcoming?api_key=${myKey}&include_adult=false`
    },
    people: {
        id: `person/`, // insert id after the forward slash and combine with myKey and include parameters
        popular: `person/popular?api_key=${myKey}&include_adult=false`
    },
    trending: {
        movie: {
            day: `trending/movie/day?api_key=${myKey}&include_adult=false`,
            week: `trending/movie/week?api_key=${myKey}&include_adult=false`,
        },
        person: {
            day: `trending/person/day?api_key=${myKey}&include_adult=false`,
            week: `trending/person/week?api_key=${myKey}&include_adult=false`,
        },
    }
}

export const search = {
    movie: `search/movie?api_key=${myKey}&include_adult=false&query=`,
    people: `search/person?api_key=${myKey}&include_adult=false&query=`,
}

export const discover = `discover/movie?api_key=${myKey}&include_adult=false&query=`

export const andAdd = {
    apiKey: `?api_key=${myKey}`,
    language: {
        US: `&language=en-US`,
        NL: `&language=nl-NL`,
        ES: `&language=es-ES`,
    },
    Region: {
        US: `&region=US`,
        NL: `&region=NL`,
        ES: `&region=ES`,
    },
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
    page: `&page=`,
    voteCount: `&vote_count.gte=`,
    rating: `&vote_average.gte=`,
    cast: `&with_cast=`,
    crew: `&with_crew=`,
    runtimeGreaterThan: `&with_runtime.gte=`,
    runtimeLesserThan: `&with_runtime.lte=`,
    video: `include_video=true`,
    releaseDateGreaterThan: `&release_date.gte=`,
    releaseDateLesserThan: `&release_date.lte=`,
}

export const appendVideoAndImages = {
    append: `&append_to_response=videos, images&include_image_language=en,null`
}

export const selectListRating = {
    ratingFrom0: `&sort_by=popularity.asc&vote_average.gte=0`,
    ratingFrom30: `&sort_by=popularity.asc&vote_average.gte=3`,
    ratingFrom50: `&sort_by=popularity.asc&vote_average.gte=5`,
    ratingFrom70: `&sort_by=popularity.asc&vote_average.gte=7`,
    ratingFrom90: `&sort_by=popularity.asc&vote_average.gte=9`,
}

export const tmdbImagesBaseUrl = {
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
        width300: `w300`,
        width500: `w500`,
    },
    poster: {
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

