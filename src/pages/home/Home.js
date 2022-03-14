import React from 'react';
import styled from "./Home.module.css"
import {requests} from "../../helpers/fetchdata/tmdb"
import Movie from "../../components/movie/Movie";
import {Outlet} from "react-router-dom";

function Home() {

    return (
        <>
            <div className={styled["container-movie"]}>
                <Movie
                    // className={styled.tile1}
                    title="Top Rated Movies"
                    fetchUrl={requests.trending}
                    endpoint="isMovie"
                />
            </div>

             <Outlet />
        </>
    );
}

export default Home;