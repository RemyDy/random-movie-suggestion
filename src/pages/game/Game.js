import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import {useForm} from "react-hook-form";
import Data from "../../components/data/Data";
import {myKey, requests} from "../../helpers/fetchdata/tmdb";
// import {axiosCancelToken} from "../../helpers/fetchdata/cancelToken";
import {tmdbBackend} from "../../helpers/fetchdata/tmdb";


function Game() {
    const {register, handleSubmit, formstate: errors} = useForm();
    const [person, setPerson] = useState("");
    const [movieID, setMovieID] = useState("");
    let queryPerson = `search/person?api_key=${myKey}&query=${person}`;
    let queryMovieCredits = `person/?api_key=${myKey}&query=${movieID}`;
    const searchMovie = `search/movie?api_key=${myKey}&query=`;

    function onSubmit(data) {
            let personData = data.firstname + "+" + data.lastname;
            setPerson(personData);

        console.log(personData)
        console.log(requests.search.person + personData);

        return personData;
    }

    // async function queryDetails() {
    //     try {
    //         const result = await tmdbBackend.get(requests.search.person + queryPerson
    //             // {
    //             //     cancelToken: axiosCancelToken.token
    //             // }
    //         )
    //         console.log(result);
    //         console.log(result.data.results[0].id)
    //         setMovieID(result.data.results[0].id);
    //         console.log()
    //
    //     } catch (e) {
    //         console.error(e.response);
    //     }
    //
    //     try {
    //         const result = await tmdbBackend.get()
    //     } catch (e) {
    //
    //     }
    //
    // }

    return (
        <>
            <div className="home">
                <h2>Game</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="actor-firstname-field">Firstname Actor :</label>
                <input
                    type="text"
                    placeholder="Edward"
                    {...register("firstname", {required: true})}
                />
                <label htmlFor="actor-lastname-field">Lastname Actor :</label>
                <input
                    type="text"
                    placeholder="Norton"
                    {...register("lastname", {required: true})}
                />
                <button type="submit">search</button>
            </form>

            {/*{person &&*/}
            {/*    <>*/}
            {/*        <p>{person}</p>*/}
            {/*        <button*/}
            {/*            onClick={queryDetails}>als je search query klopt*/}
            {/*        </button>*/}
            {/*    </>*/}
            }


            {movieID &&
                <>
                    <p>test</p>

                    {/*<Data*/}
                    {/*    fetchUrl={requests.search.data}*/}
                    {/*    endpoint="isMovie"*/}
                    {/*/>*/}
                </>
            }

            <Outlet/>
        </>
    );
}

export default Game;