import React, {useEffect, useState} from "react";
import styled from "./Data.module.css"
import {tmdbBackend, movieImages, imageSize} from "../../helpers/fetchdata/tmdb";
import {matchURL} from "../../helpers/regex"
import truncate from "../../helpers/truncate";


function Data({fetchUrl, isLargeTile, endpoint}) {
    const [oneItem, setOneItem] = useState([]);
    const [arrayOfItems, setArrayOfItems] = useState([]);
    const [id, setID] = useState([]);

    useEffect(() => {

        async function fetchData() {

            try {
                const request = await tmdbBackend.get(fetchUrl)
                const results = request.data.results
                const matchResult = request.config.url.match(matchURL);
                console.log(results);
                console.log(matchResult[0]);

                if (matchResult[0] === "search/person") {
                    results.length > 1 ? setArrayOfItems(results) : setOneItem(results);
                    const id = results[0].id
                    setID(id);
                }

                results.length > 1 ? setArrayOfItems(results) : setOneItem(results);

                return request;
            } catch (e) {
                console.error(e)
            }
        }

        fetchData();
    }, [fetchUrl]);

    return (
        <>
            {
                {
                    // banner: <article className={styled.banner}>
                    //     <img
                    //         key={oneItem?.id}
                    //         src={`${movieImages.baseURL}${imageSize.original.backdrop.width300}${oneItem?.backdrop_path}`}
                    //         alt={oneItem?.name}
                    //     />
                    //     <section className={styled["banner-contents"]}>
                    //         <h1 className={styled.title}>{oneItem?.title || oneItem?.name || oneItem?.original_title || oneItem?.original_name}</h1>
                    //     </section>
                    // </article>,

                    movie: <article className={styled.tile}>
                        <div className={styled["data-row"]}>
                            <h3 className={styled.title}>{oneItem?.title || oneItem?.name || oneItem?.original_title || oneItem?.original_name}</h3>
                            <div className={styled["data-posters"]}>
                                <img
                                    key={oneItem?.id}
                                    src={`${movieImages.baseURL}${imageSize.poster.width185}${oneItem?.poster_path || oneItem?.backdrop_path}`}
                                    alt={oneItem?.name}
                                />
                            </div>
                            <h4 className={styled["data_description"]}>{oneItem?.overview}</h4>
                        </div>
                    </article>,

                    rowMovies: <article className={styled["row-container"]}>
                        {arrayOfItems.map((movie) => {
                                let title = movie?.title || movie?.name || movie?.original_title || movie?.original_name
                                let titleTruncated = truncate(title, 20);
                                return <section className={styled.tile} key={movie?.id}>
                                    <p className={styled.title}>{titleTruncated}</p>
                                    <img
                                        className={styled["row-poster"]}
                                        key={movie?.id}
                                        src={`${movieImages.baseURL}${imageSize.poster.width500}${movie?.poster_path || movie?.backdrop_path}`}
                                        alt={movie.name}
                                    />
                                </section>
                            })}
                    </article>,

                    person: <article className={styled["one-person"]}>
                        {/*<section></section>*/}
                        <input
                            hidden="hidden"
                            type="text"
                            value={id}
                        />
                        <p id="person_id" hidden="hidden">{id}</p>
                        <img
                            className={`${styled["data-poster"]} ${isLargeTile && styled["data-posterLarge"]}`}
                            key={oneItem?.id}
                            src={`${movieImages.baseURL}${imageSize.profile.width185}${oneItem[0]?.profile_path}`}
                            alt={oneItem?.name}
                        />
                        <section>Known for:</section>
                        <p>{oneItem[0]?.known_for[0].original_title}</p>
                        <p>{oneItem[0]?.known_for[1].original_title}</p>
                        <p>{oneItem[0]?.known_for[2].original_title}</p>
                    </article>
                }[endpoint]
            }
        </>
    )
}

export default Data;