import React, {useEffect, useState} from "react";
import styled from "./Data.module.css"
import {tmdbBackend, movieImages, imageSize} from "../../helpers/fetchdata/tmdb";
// import Button from "../buttons/Button";
// import img404 from "../../helpers/assets/404.jpg";
import {matchURL} from "../../helpers/regex"


function Data({fetchUrl, isLargeTile, endpoint, title}) {
    const [oneItem, setOneItem] = useState([]);
    const [arrayOfItems, setArrayOfItems] = useState([]);
    const [id, setID] = useState([]);

    useEffect(() => {

        async function fetchData() {

            // try {
            const request = await tmdbBackend.get(fetchUrl)
            const results = request.data.results
            // setArrayOfItems(results);
            // results.length > 1 ? setArrayOfItems(results) : setOneItem(results);
            // const {data: {results: array}} = request;
            // setArrayOfItems(results);
            // console.log(request.config.url);
            const matchResult = request.config.url.match(matchURL);
            // matchResult[0] === "/trending/all" ? setArrayOfItems(results) : setOneItem(results);
            console.log(results);


            if (matchResult[0] === "search/person") {
                // results.length > 1 [0].known_for.length < 2 ? setError404(true) : setPerson(array);
                results.length > 1 ? setArrayOfItems(results) : setOneItem(results);
                const id = results[0].id
                setID(id);

            }
            if (matchResult[0] === "/trending/all") {
                console.log("trending: valid");
                results.length > 1 ? setArrayOfItems(results) : setOneItem(results);
            }
            if (matchResult[0] === "/nowPlaying") {
                console.log("nowPlaying: valid");
                results.length > 1 ? setArrayOfItems(results) : setOneItem(results);
            }
            // } else {
            //     console.log(arrayOfItems);
            // }

            // console.log(array);
            // if (array.length < 19) {
            //     // if(array?.)
            //     setPerson(array)
            // } else {
            //     setMovies(array[Math.floor(Math.random() * array.length - 1)])
            // }
            // array.length === 1 ? : setMovie(array[Math.floor(Math.random() * array.length - 1)]);
            return request;
            //     } catch (e) {
            //         console.error(e)
            //         setError404(true);
            //     }
            //     setError404(false);
        }

        fetchData();
    }, [fetchUrl]);

    // console.log(data);

    return (
        <>
            {
                {
                    movie: <article className={styled.tile}>
                        {/*<section className={styled.tile}></section>*/}
                        <div className={styled["data_row"]}>
                            <h3 className={styled.title}>{oneItem?.title || oneItem?.name || oneItem?.original_title || oneItem?.original_name}</h3>
                            <div className={styled["data_posters"]}>
                                <img
                                    // className={`${styled["data-poster"]} ${isLargeTile && styled["data-posterLarge"]}`}
                                    // className={`${styled["data-posterLarge"]} ${isLargeTile && styled["data-posterLarge"]}`}
                                    key={oneItem?.id}
                                    src={`${movieImages.baseURL}${imageSize.poster.width185}${oneItem?.poster_path || oneItem?.backdrop_path}`}
                                    alt={oneItem?.name}
                                />
                            </div>
                            <h4 className={styled["data_description"]}>{oneItem?.overview}</h4>
                        </div>
                    </article>,

                    rowMovies: <article className={styled.row}>
                        <h2>{title}</h2>
                        <div className={styled["row_posters"]}>
                            {arrayOfItems.map((movie) => (
                                <>
                                    <p className={styled.title}>{movie?.title || movie?.name || movie?.original_title || movie?.original_name}</p>
                                    <img
                                        className={styled["row_poster"]}
                                        key={movie?.id}
                                        src={`${movieImages.baseURL}${imageSize.poster.width154}${movie?.poster_path || movie?.backdrop_path}`}
                                        alt={movie.name}
                                    />
                                </>
                            ))}
                        </div>
                    </article>,

                    person: <article>
                        <section>Profile: {oneItem[0]?.name}</section>
                        <input
                            hidden="hidden"
                            type="text"
                            value={id}
                        />
                        <p id="person_id" hidden="hidden">{id}</p>
                        <img
                            className={`${styled["data_poster"]} ${isLargeTile && styled["data_posterLarge"]}`}
                            key={oneItem?.id}
                            src={`${movieImages.baseURL}${imageSize.profile.width185}${oneItem[0]?.profile_path}`}
                            alt={oneItem?.name}
                        />
                        <section>Known for</section>
                        <p>{oneItem[0]?.known_for[0].original_title}</p>
                        <p>{oneItem[0]?.known_for[1].original_title}</p>
                        <p>{oneItem[0]?.known_for[2].original_title}</p>
                    </article>
                }[endpoint]
            }
            {/*{error404 &&*/}
            {/*    <div>*/}
            {/*        <img src={img404} alt="error" width="185px"/>*/}
            {/*        <Button type="button" onClick={onClick}/>*/}
            {/*    </div>*/}
            {/*}*/}
        </>
    )
}

export default Data;