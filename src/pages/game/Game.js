import {Button} from "../../components/button-link/Button-Link";
import {myKey, requests, tmdbBackend} from "../../helpers/fetchdata/tmdb";
import {useState} from "react";


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

    const [movieIdOne, setMovieIdOne] = useState(0)
    const [movieIdTwo, setMovieIdTwo] = useState(0)
    const [movieIdThree, setMovieIdThree] = useState(0)

    async function fetch20Movies() {

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



            setMovieIdOne(one)
            setMovieIdTwo(two)

            console.log(movieOne);
            console.log(movieTwo);
            console.log(movieTree);



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
                    onclick={() => fetch20Movies()}
                />
            </article>

            <p>What {"actor name"} highest grossing movies ? </p>

        </>

    )
}

export default Game;