import React, {useEffect, useState} from "react";
import axios from "../../helpers/fetchdata/axios";
import styled from "./Tile.module.css"

const base_url = "https://image.tmdb.org/t/p/original/";

function Tile({fetchUrl, isLargeTile, tile}) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const requests = await axios.get(fetchUrl)
            const {data: {results: movieArray}} = requests;
            console.log(movieArray);
            setMovie(movieArray[Math.floor(Math.random() * movieArray.length - 1)]);
            return requests;
        }

        fetchData();

    }, [fetchUrl])

    console.log(movie);

    return (
        <>
            {
                {
                    isMovie: <div className={styled.tile}>
                        <div className={styled["movie-contents"]}>
                            <h3 className={styled.title}>{movie?.title || movie?.name || movie?.original_title || movie?.original_name}</h3>
                            <div className={styled["movie-posters"]}>
                                <img
                                    className={`${styled["movie-poster"]} ${isLargeTile && styled["movie-posterLarge"]}`}
                                    key={movie.id}
                                    src={`${base_url}${isLargeTile ? movie.backdrop_path : movie.poster_path}`}
                                    alt={movie.name}
                                />
                            </div>
                            <h4 className={styled["movie-description"]}>{movie?.overview}</h4>
                        </div>
                    </div>,
                    isLogin:
                        <div>Joepie</div>
                }[tile]
            }
        </>
    )
}

export default Tile;