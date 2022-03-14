import React, {useEffect, useState} from "react";
import {tmdbBackend} from "../../helpers/fetchdata/tmdb";
import styled from "./Movie.module.css"
import {baseUrl_images} from "../../helpers/fetchdata/tmdb";

function Movie({fetchUrl, isLargeTile, endpoint}) {
    const [movie, setMovie] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const result = await tmdbBackend.get(fetchUrl)
            const {data: {results: array}} = result;
            console.log(array);
            array.length === 1 ? setData(array) : setMovie(array[Math.floor(Math.random() * array.length - 1)]);
            return result;
        }

        fetchData();

    }, [fetchUrl])

    // console.log(data);

    return (
        <>
            {
                {
                    isMovie: <div className={styled["movie-contents"]}>
                        <h3 className={styled.title}>{movie?.title || movie?.name || movie?.original_title || movie?.original_name}</h3>
                        <div className={styled["movie-posters"]}>
                            <img
                                className={`${styled["movie-poster"]} ${isLargeTile && styled["movie-posterLarge"]}`}
                                key={movie?.id}
                                src={`${baseUrl_images}${isLargeTile ? movie?.backdrop_path : movie?.poster_path}`}
                                alt={movie?.name}
                            />
                        </div>
                        <h4 className={styled["movie-description"]}>{movie?.overview}</h4>
                    </div>,
                    isPerson: <div>
                        <h2>{data[0]?.id}</h2>
                    </div>
                }[endpoint]
            }
        </>
    )
}

export default Movie;