import {Button} from "../../components/button-link/Button-Link";
import {myKey, tmdbBackend} from "../../helpers/fetchdata/tmdb";
import {useState} from "react";
import {Tile} from "../../components/tile/Tile";


// import {matchURL} from "../../helpers/regex";

// console.log(matchResult[0]);

// const matchResult = request.config.url.match(matchURL);

// if (matchResult[0] === "search/person") {
//     results.length > 1 ? setArrayOfItems(results) : setOneItem(results);
//     const id = results[0].id
//     setID(id);
// }

// results.length > 1 ? setArrayOfItems(results) : setOneItem(results);


function Game() {

    const [movieOne, setMovieOne] = useState({})
    const [movieTwo, setMovieTwo] = useState({})
    const [movieTree, setMovieThree] = useState({})

    async function fetchMovies() {

        // setMovie(movieArray[Math.floor(Math.random() * movieArray.length - 1)]);

        const nr = (Math.floor(Math.random() * 500));
        console.log(nr);

        try {
            console.log(nr);

            const request = await tmdbBackend.get(`/discover/movie?api_key=${myKey}&language=en-US&include_adult=false&page=${nr}`);
            const results = request.data.results

            const mapOnId = results.map((movie) => {
                return movie.id;
            });

            const threeId = mapOnId.slice(0, 3)
            const one = threeId[0];
            const two = threeId[1];
            const three = threeId[2];

            const movieOne = await tmdbBackend.get(`movie/${one}?api_key=${myKey}&language=en-US&&append_to_response=credits`);
            const movieTwo = await tmdbBackend.get(`movie/${two}?api_key=${myKey}&language=en-US&&append_to_response=credits`);
            const movieTree = await tmdbBackend.get(`movie/${three}?api_key=${myKey}&language=en-US&&append_to_response=credits`);

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
            <article>
                <Button
                    name="Start Game"
                    type="button"
                    onclick={() => fetchMovies()}
                />
            </article>

            {Object.keys(movieOne).length > 0 &&
                <>
                    <Tile>
                        <img src={movieOne.data} alt="movie backdrop" width="100px"/>
                    </Tile>

                    <Tile>
                        <img src={movieTwo.data} alt="movie backdrop"/>
                    </Tile>

                    <Tile>
                        <img src={movieTree.data} alt="movie backdrop"/>
                    </Tile>
                </>
            }

        </>


    )
}

export default Game;