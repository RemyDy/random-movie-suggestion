import React, {useState} from 'react';
import styled from "./Home.module.css"
import {requests} from "../../helpers/fetchdata/tmdb"
import Data from "../../components/data/Data";
import {Outlet} from "react-router-dom";
import Button from "../../components/buttons/Button";

function Home() {


    return (
        <>
            <article>
                    <section>
                        <Data
                            title="Top Trending Movies"
                            fetchUrl={requests.trending}
                            endpoint="rowMovies"
                        />
                    </section>
            </article>

            <Outlet/>
        </>
    );
}

export default Home;