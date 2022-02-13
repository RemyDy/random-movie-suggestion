import React, {useEffect, useState} from "react";
import axios from "../../helpers/fetchdata/axios";
import css from "./Tile.module.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Tile({title, fetchUrl, isLargeTile}) {
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
        <div className={css.tile}>
            {title}
            <div className={css["tile-posters"]}>
                    <img className={`${css["tile-poster"]} ${isLargeTile && css["tile-posterLarge"]}`}
                         key={movie.id}
                         src={`${base_url}${isLargeTile ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
            </div>
        </div>
    )
}

export default Tile;