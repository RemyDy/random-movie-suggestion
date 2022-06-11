import React, {useRef, useState} from 'react';
import styles from "./Home.module.css"
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
            <article className={styles.home}>
                <section className={styles.intro}>
                    <header>
                        <h1 className={styles.title}>Welcome to RMS !</h1>
                    </header>
                    <main className={styles.main}>
                        <p><strong>Don't know what to watch?</strong></p>
                        <p className={styles.paragraph}>check out these top trending movies
                            <br/> perhaps you will see something you like
                            <br/> if not you can login and search for movies
                            <br/> enjoy your search !
                        </p>
                    </main>

                    {showBanner === true &&
                        <Data>
                            />
                            {movieId}
                        </Data>
                    }

                    <Data className={styles.tile}
                          fetchUrl={requests.trending.movie.week}
                          endpoint="rowMovies"
                          onclick={() => getRef()}
                    />

                </section>
            </article>

            <Outlet/>
        </>
    )
        ;
}

export default Home;