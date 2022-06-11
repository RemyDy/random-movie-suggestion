import React, {useEffect, useState} from "react";
import styles from "./Data.module.css"
import {tmdbBackend, tmdbImagesBaseUrl, imageSize} from "../../helpers/fetchdata/tmdb";
import {matchURL} from "../../helpers/regex"
import truncate from "../../helpers/truncate";
import Iframe from "../iframe/Iframe";
import Banner from "../banner/Banner"

function Data({fetchUrl, isLargeTile, endpoint, onclick, children}) {
    const [banner, setBanner] = useState({})
    const [oneItem, setOneItem] = useState({});
    const [arrayOfItems, setArrayOfItems] = useState([]);
    const [person, setPerson] = useState({});
    const [people, setPeople] = useState([]);
    const [trailerKey, setTrailerKey] = useState("");

    useEffect(() => {

        async function fetchData() {

            console.log(fetchUrl);
            console.log(endpoint);

            try {
                const request = await tmdbBackend.get(fetchUrl);
                console.log(request);

                switch (endpoint) {
                    case "banner":
                        console.log("banner")
                        const bannerData = request.data;
                        setBanner(bannerData);

                        const videos = bannerData.videos.results;
                        console.log(videos)
                        const trailer = videos.find((video) => {
                            if (video.type === "Trailer" || video.type === "trailer") {
                                return true;
                            }
                            return true;
                        });

                        console.log(trailer.key)
                        setTrailerKey(trailer.key)
                        break;

                    case "oneItem":
                        console.log("oneItem");
                        const oneItemData = request.data;
                        setOneItem(oneItemData);
                        break;

                    case "person":
                        if (request.data.results > 0) {
                            console.log("people");
                            const moreThanOnePersonData = request.data.results;
                            setPeople(moreThanOnePersonData);
                        } else {
                            console.log("person");
                            const onePersonData = request.data.results;
                            setPerson(onePersonData);
                        }
                        break;

                    default:
                        console.log("array of Movies")
                        const arrayOfItemsData = request.data.results;
                        setArrayOfItems(arrayOfItemsData);
                }

                // const results = request.data.results
                const matchResult = request.config.url.match(matchURL);
                // console.log(results);
                console.log(matchResult[0]);

                // if (matchResult[0] === "search/person") {
                //     results.length > 1 ? setArrayOfItems(results) : setOneItem(results);
                // }

                // results.length > 1 ? setArrayOfItems(results) : setOneItem(results);

                return request;
            } catch (e) {
                console.error(e)
            }
        }

        fetchData();
    }, [fetchUrl, endpoint]);

    return (
        <>
            {
                {
                    banner: <article>
                        <Banner>
                            <img
                                className={styles["banner-image"]}
                                key={banner?.id}
                                id={trailerKey}
                                src={`${tmdbImagesBaseUrl.baseURL}${imageSize.poster.width780}${banner?.backdrop_path}`}
                                alt={banner?.name}
                                onClick={onclick}
                            />
                            {trailerKey.length > 2 &&
                                <Iframe
                                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=0`}
                                />
                            }
                            <div>{banner?.name}</div>
                            {/*{children}*/}
                        </Banner>
                    </article>,

                    movie: <article>
                        {/*<div className={styled["data-row"]}>*/}
                        <h3 className={styles.title}>{oneItem?.title || oneItem?.name || oneItem?.original_title || oneItem?.original_name}</h3>
                        {/*<div className={styled["data-posters"]}>*/}
                        <img
                            key={oneItem?.id}
                            id={oneItem?.id}
                            src={`${tmdbImagesBaseUrl.baseURL}${imageSize.original}${oneItem?.poster_path || oneItem?.backdrop_path}`}
                            alt={oneItem?.name}
                            onClick={onclick}
                        />
                        {/*</div>*/}
                        <h4 className={styles["data_description"]}>{oneItem?.overview}</h4>
                        {/*</div>*/}
                        {children}
                    </article>,

                    rowMovies: <article className={styles["row-container"]}>
                        {arrayOfItems.map((movie) => {
                            let title = movie?.title || movie?.name || movie?.original_title || movie?.original_name
                            let titleTruncated = truncate(title, 20);
                            return <section className={styles["row-item"]} key={movie?.id}>
                                <p className={styles.title}>{titleTruncated}</p>
                                <img
                                    className={styles.poster}
                                    key={movie?.id}
                                    id={movie?.id}
                                    src={`${tmdbImagesBaseUrl.baseURL}${imageSize.poster.width500}${movie?.poster_path || movie?.backdrop_path}`}
                                    alt={movie.name}
                                    onClick={onclick}
                                />
                            </section>
                        })}
                        {children}
                    </article>,

                    person: <article className={styles.person}>
                        <img
                            className={`${styles["poster"]}`}
                            key={person[0]?.id}
                            id={person[0]?.id}
                            src={`${tmdbImagesBaseUrl.baseURL}${imageSize.profile.width185}${person[0]?.profile_path}`}
                            alt={person[0]?.name}
                            onClick={onclick}
                        />
                        <section className={styles["person__movies"]}>
                            {person[0]?.name} is known for {person[0]?.known_for_department.toLocaleLowerCase()} and played in: <br/>
                            - {person[0]?.known_for[0].original_title} <br/>
                            - {person[0]?.known_for[1].original_title} <br/>
                            - {person[0]?.known_for[2].original_title} <br/>
                        </section>
                        {children}
                    </article>,

                    people: <article>
                        {people.map((person) => {
                                return <section className={styles.rowItem} key={person?.id}>
                                    <img
                                        className={styles["row-poster"]}
                                        key={person?.id}
                                        id={person?.id}
                                        src={`${tmdbImagesBaseUrl.baseURL}${imageSize.poster.width500}${person?.poster_path || person?.backdrop_path}`}
                                        alt={person.name}
                                        onClick={onclick}
                                    />
                                </section>
                            }
                        )}
                        {children}
                    </article>
                }[endpoint]
            }
        </>
    )
}

export default Data;