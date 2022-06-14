import React, {useState} from 'react';
import styles from "./Home.module.css"
import {andAdd, appendVideoAndImages, requests} from "../../helpers/fetchdata/tmdb"
import Data from "../../components/data/Data";
import {Outlet} from "react-router-dom";
import {Button} from "../../components/button-link/Button-Link";

function Home() {

    const [showBanner, toggleShowBanner] = useState(false)
    const [movieId, setMovieId] = useState("")

    return (
        <>
            <article className={styles.home}>

                <section className={styles.intro}>
                    <header>
                        <h1 className={styles.title}>Welcome to RMS !</h1>
                    </header>

                    <main className={styles.main}>

                        {showBanner === false &&
                            <>
                                <p><strong>Don't know what to watch?</strong></p>
                                <p className={styles.paragraph}>check out these top trending movies
                                    <br/> perhaps you will see something you like
                                    <br/> if not you can login and search for movies
                                    <br/> enjoy your search !
                                </p>
                                <Data fetchUrl={requests.trending.movie.week}
                                      endpoint="rowMovies"
                                      onclick={e => setMovieId(e.target.id) + toggleShowBanner(true)}
                                />
                            </>
                        }

                        {showBanner === true &&
                            <>
                                <Data
                                    fetchUrl={`${requests.movie.id}${movieId}${andAdd.apiKey}${appendVideoAndImages.append}`}
                                    endpoint={"banner"}>

                                    <div className={styles["banner-button"]}>
                                        <Button
                                            type="button"
                                            name="close trailer"
                                            onclick={() => toggleShowBanner(false)}
                                        />
                                    </div>
                                </Data>

                            </>
                        }

                    </main>
                </section>

            </article>

            <Outlet/>
        </>
    );
}

export default Home;