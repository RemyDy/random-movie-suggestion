import React, {useState} from "react";
import styled from "./Test.module.css";
import {
    myKey,
    tmdbBackend,
    tmdbImagesBaseUrl,
    imageSize,
    requests, include, appendVideoAndImages,
} from "../../helpers/fetchdata/tmdb";
import {Button} from "../../components/button-link/Button-Link";
import {Tile} from "../../components/tile/Tile";
import Iframe, {youTubeBaseUrl, autoplayOn, autoplayOf} from "../../components/iframe/Iframe";
import Data from "../../components/data/Data";

function Test() {

    const [movieId, setMovieId] = useState(0)
    const [movieOne, setMovieOne] = useState({})
    const [showTrailer, toggleShowTrailer] = useState(false)
    const [movieTwo, setMovieTwo] = useState({})
    const [movieTree, setMovieThree] = useState({})
    const [youtubeId, setYoutubeId] = useState()

    function getMovieId() {
        const movieId = document.getElementById({});
        console.log(movieId);
    }

    console.log(youtubeId)


    async function fetchMovies() {


        // const tag = document.createElement("script");
        // tag.src = "https://youtube.com/iframe_api";


        const nr = (Math.floor(Math.random() * 500));
        console.log(nr);

        try {
            console.log(nr);

            const request = await tmdbBackend.get(`discover/movie?api_key=${myKey}&language=en-US&region=NL&include_adult=false&with_runtime.gte=90&page=${nr}`);
            const results = request.data.results
            console.log(request);

            const mapOnId = results.map((movie) => {
                return movie.id;
            });

            const threeId = mapOnId.slice(0, 3)
            console.log(threeId)

            const one = threeId[0];
            const two = threeId[1];
            const three = threeId[2];

            const movieOne = await tmdbBackend.get(`movie/${one}?api_key=${myKey}&language=en-US&append_to_response=credits,videos`);
            const movieTwo = await tmdbBackend.get(`movie/${two}?api_key=${myKey}&language=en-US&append_to_response=credits,videos`);
            const movieTree = await tmdbBackend.get(`movie/${three}?api_key=${myKey}&language=en-US&append_to_response=credits,videos`);

            console.log(movieOne);
            console.log(movieOne.data.poster_path);

            setMovieOne(movieOne)
            setMovieTwo(movieTwo)
            setMovieThree(movieTree)

            return request;
        } catch (e) {
            console.error(e)
        }

    }

    return (
        <>
            {/*<div>{"url: "}{requests.movie.id}{movieId}{include.apiKey}</div>*/}
            {/*<div>{"key: "}{youTubeBaseUrl}{youtubeId}{autoplayOf}</div>*/}

            {movieId !== 0 &&
                <Data
                    fetchUrl={`${requests.movie.id}${movieId}${include.apiKey}${appendVideoAndImages.append}`}
                    endpoint={"banner"}
                    onclick={e => setYoutubeId(e.target.id)}>

                    {youtubeId !== undefined &&
                        <Iframe
                        />
                    }
                </Data>

            }

            {movieId === 0 &&
                <Data
                    fetchUrl={requests.movie.nowPlaying}
                    endpoint={"rowMovies"}
                    onclick={e => setMovieId(e.target.id)}
                />
            }


            <article>

                < Button
                    name="Start Game"
                    type="button"
                    onclick={() => fetchMovies()}
                />

            </article>

            {Object.keys(movieOne).length > 0 &&
                <>
                    <Tile>
                        <Button
                            type="button"
                            name="Play"
                            onclick={() => toggleShowTrailer(true)}
                        />
                    </Tile>
                    <Tile>
                        <img
                            src={`${tmdbImagesBaseUrl.baseURL}${imageSize.original}${movieOne.data.poster_path || movieOne.data.backdrop_path}`}
                            alt="movie backdrop"
                            className={styled.test}
                        />
                    </Tile>
                </>
            }


            {showTrailer == true &&
                <Iframe/>
            }

            {/*<Data*/}
            {/*fetchUrl={""}*/}
            {/*endpoint={"movie"}*/}

            {/*/>*/}

            {/*<Tile>*/}
            {/*    <img src={movieTwo.data} alt="movie backdrop"/>*/}
            {/*</Tile>*/}

            {/*<Tile>*/}
            {/*    <img src={movieTree.data} alt="movie backdrop"/>*/}
            {/*</Tile>*/}
        </>
    )
}

export default Test;