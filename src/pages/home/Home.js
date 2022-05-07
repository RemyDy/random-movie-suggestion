import React, {useRef, useState} from 'react';
import styled from "./Home.module.css"
import {requests} from "../../helpers/fetchdata/tmdb"
import Data from "../../components/data/Data";
import {Outlet} from "react-router-dom";

function Home() {

    const [showBanner, toggleShowBanner] = useState(false)
    const [movieId, setKey] = useState("")
    const dataRef = useRef()


    // <header>
    //     {/*<Data*/}
    //     {/*    fetchUrl={requests.nowPlaying}*/}
    //     {/*    endpoint="banner"*/}
    //     {/*/>*/}
    // </header>

    function getRef() {
        console.log(dataRef.current.getRef());
    }

    return (
        <>
            <article className={styled.article}>
                <section>

                    <div className={styled.text}>
                        <h2 className={styled.title}>Top Trending Movies</h2>
                        <p>Welcome to <abbr title="random movie suggester">RMS</abbr></p>
                        <p>Don't know what to watch?</p>
                        <p>Check out these top trending movies, perhaps you will see something you like</p>
                        <p>Or you can login and search on genre or cast member</p>
                        <p>Enjoy !</p>
                    </div>

                    {showBanner === true &&
                        <Data>
                            />
                            {movieId}
                        </Data>
                    }

                    <Data className={styled.tile}
                          fetchUrl={requests.trending.movie.week}
                          endpoint="rowMovies"
                          onclick={() => getRef()}
                    />

                </section>
            </article>

            <Outlet/>
        </>
    );
}

export default Home;