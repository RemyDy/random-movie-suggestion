import React from 'react';
import styled from "./Home.module.css"
import {requests} from "../../helpers/fetchdata/tmdb"
import Data from "../../components/data/Data";
import {Outlet} from "react-router-dom";

function Home() {
    // <header>
    //     {/*<Data*/}
    //     {/*    fetchUrl={requests.nowPlaying}*/}
    //     {/*    endpoint="banner"*/}
    //     {/*/>*/}
    // </header>

    return (
        <>
            <article className={styled.article}>
                <section>

                    <div className={styled.text}>
                        <h2 className={styled.title}>Top Trending Movies</h2>
                        <p>Welcome to the random movie suggester</p>
                        <p>Don't know what to watch?</p>
                        <p>Check out these top trending movies, perhaps you will see something you like</p>
                        <p>Or you can login and search on genre or cast member</p>
                        <p>Enjoy !</p>
                    </div>

                    <Data className={styled.tile}
                        fetchUrl={requests.nowPlaying}
                        endpoint="rowMovies"
                        // backdrop={}
                    />
                </section>
            </article>

            <Outlet/>
        </>
    );
}

export default Home;