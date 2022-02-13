import React from 'react';
import tmdbRequests from "../../helpers/fetchdata/tmdbRequests";
import Tile from "../../components/tiles/Tile";

function Home() {

    return (
        <>
            <Tile
                title="Top Rated Movies"
                fetchUrl={tmdbRequests.fetchTopRated}
                tile="isMovie"
                isLargeTile
            />
        </>
    );
}

export default Home;