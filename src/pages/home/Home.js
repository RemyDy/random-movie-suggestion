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
                    <h2 className={styled.title}>Top Trending Movies</h2>
                    <Data
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