import React from 'react';
import styled from "./Home.module.css"
import {tmdbRequests} from "../../helpers/fetchdata/requests";
import Tile from "../../components/tiles/Tile";
import {Outlet} from "react-router-dom";

function Home() {

    return (
        <>
            <div className={styled["container-tiles"]}>
                <Tile
                    className={styled.tile1}
                    title="Top Rated Movies"
                    fetchUrl={tmdbRequests.fetchTopRated}
                    tile="isMovie"
                    isLargeTile
                />
                <Tile
                    className={styled.tile}
                    tile="isMovie"
                    fetchUrl={tmdbRequests.fetchTopRated}
                />
            </div>

             <Outlet />
        </>
    );
}

export default Home;