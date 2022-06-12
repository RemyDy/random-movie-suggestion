import styles from "./Game.module.css"
import {Button} from "../../components/button-link/Button-Link";
import {
    andAdd,
    discover,
    imageSize,
    myKey,
    search,
    tmdbBackend,
    tmdbImagesBaseUrl,
    requests,
} from "../../helpers/fetchdata/tmdb";
import {useState} from "react";
import Form from "../../components/tile/form/Form";
import InputField from "../../components/inputfields/InputField";
import {useForm} from "react-hook-form";
import Data from "../../components/data/Data";

function Game() {

    const {register, handleSubmit, reset} = useForm({
        defaultValues: {
            runtime: 0,
        }
    });

    const [movieOne, setMovieOne] = useState({})
    const [resultGame, setResultGame] = useState(0);
    const [movieTwo, setMovieTwo] = useState({})
    const [movieTree, setMovieThree] = useState({})

    async function fetchMovies() {

        const nr = (Math.floor(Math.random() * 500));

        try {
            console.log(nr);

            // const request = await tmdbBackend.get(`/discover/movie?api_key=${myKey}&language=en-US&include_adult=false&page=${nr}`);
            const request = await tmdbBackend.get(`${discover}${andAdd.voteCount}250${andAdd.page}${nr}`);
            const results = request.data.results

            console.log(results);

            const mapOnId = results.map((movie) => {

                if (movie.id !== undefined) {
                    return movie.id;
                }
                return movie.id
            });


            const threeId = mapOnId.slice(0, 3)

            /* @docent
            -> ik weet niet hoe ik dit dynamisch kan maken zodat ik niet vaker de Api aanroep hoef uit te schrijven
            -> tip ?
            for (let i = 0; i < threeId.length; i++) {
                console.log(threeId[i]);
                if (threeId[i]) {
                    let test = async () => await tmdbBackend.get(`movie/${threeId[i]}?api_key=${myKey}&language=en-US&&append_to_response=credits`);
                    console.log(test);
                    result.push(test.data);
                }
            }*/

            const resultOne = await tmdbBackend.get(`movie/${threeId[0]}?api_key=${myKey}&language=en-US&&append_to_response=credits`);
            const resultTwo = await tmdbBackend.get(`movie/${threeId[1]}?api_key=${myKey}&language=en-US&&append_to_response=credits`);
            const resultThree = await tmdbBackend.get(`movie/${threeId[2]}?api_key=${myKey}&language=en-US&&append_to_response=credits`);

            let list = [];
            list.push(resultOne.data);
            list.push(resultTwo.data);
            list.push(resultThree.data);

            //
            setMovieOne(list[0])
            setMovieTwo(list[1])
            setMovieThree(list[2])

            return list;
        } catch (e) {
            console.error(e)
        }
    }

    function onSubmit(data) {
        parseInt(movieOne.runtime);
        let runtime = data.runtime;
        console.log(runtime);

        if (runtime == movieOne.runtime) {
            console.log("yes you won!")
            setResultGame(1);
        } else {
            console.log("to bad");
            setResultGame(2);
        }
    }

    function resetData() {
        reset({
            runtime: ""
        });
        setMovieOne({});
        setResultGame(0);
    }

    return (
        <>
            <main className={styles.main}>

                {Object.keys(movieOne).length === 0 &&
                    <article>
                        <Button
                            name="Start Game"
                            type="button"
                            onclick={() => fetchMovies()}
                        />
                    </article>
                }

                {Object.keys(movieOne).length > 0 &&
                    <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <span>Guess Runtime of movie {movieOne.title}:</span>
                            <InputField
                                htmlFor="runtime-field"
                                id="runtime-field"
                                type="number"
                                name="runtime"
                                register={register}
                            >
                            </InputField>
                        </form>
                        <p>Press enter to submit you answer</p>
                    </>
                }

                {resultGame === 1 &&
                    <>
                        <p>Yes You Won !</p>

                        <Button
                            type="button"
                            name="try again"
                            onclick={resetData}
                        />
                    </>
                }

                {resultGame === 2 &&
                    <>
                        <p>To Bad</p>

                        <p>Hint: its somewhere in the region
                            between {movieOne.runtime - 10 / 4} and {movieOne.runtime + 10 / 2}</p>

                        <div className={styles["button-try"]}>
                            <Button
                                type="button"
                                name="try another movie"
                                onclick={resetData}
                            />
                        </div>

                        <div className={styles["button-answer"]}>
                            <Button
                                type="button"
                                name="give answer"
                                onclick={() => setResultGame(3)}
                            />
                        </div>
                    </>
                }

                {resultGame === 3 &&
                    <p> Runtime = {movieOne.runtime}</p>
                }

            </main>

        </>


    )
}

export default Game;