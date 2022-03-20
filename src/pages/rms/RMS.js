import React, {useState, useEffect, useRef} from 'react';
import {Outlet} from "react-router-dom";
import Data from "../../components/data/Data";
import {requests} from "../../helpers/fetchdata/tmdb"
import {useForm} from "react-hook-form";
import Button from "../../components/buttons/Button";

// import validations from "../../helpers/fetchdata/validations";

function RMS() {
    // const componentRef = useRef();
    const {register, handleSubmit} = useForm({
        defaultValues: {
            genre: "",
            rating: "",
            person_name: "",
            movie_name: "",
        }
    });

    const [url, setURL] = useState("");
    // const [rating, setRating] = useState("");
    const [person, setPerson] = useState("")
    const [lookFor, setLookFor] = useState("");
    const [searchType, setSearchType] = useState(0);
    const [movie, setMovie] = useState("");
    const [personID, setPersonID] = useState("");

    // const sendID = (message: int =>{
    //     setPersonID(message);
    // })

    function handleChange(event) {
        setLookFor(event.target.value)
    }




    // if() !== null || undefined){
    // const test = this.id_person.current;
    //     console.log(test);
    // } else{
    //     console.log("undefined");
    // }

    // console.log(id_person);


    function onSubmit(data) {
        console.log("rating: " + data.rating + " genre: " + data.genre + " person: " + data.person_name + data.movie_name);
        let genre = data.genre
        let rating = data.rating
        let person = data.person_name
        let movie = data.movie_name
        movie.replace(/\s/g, "+");
        person.replace(/\s/g, "+");

        if (genre && rating && person) {
            setSearchType(1);
            setURL(genre + rating + person)
        } else if (genre && rating) {
            console.log("genre en rating");
            setSearchType(2);
            setURL(genre + rating);
        } else if (genre && person) {
            console.log("genre en person");
            setSearchType(3);
        } else if (genre) {
            console.log("genre");
            setURL(genre);
            setSearchType(4);
        } else if (rating && person) {
            console.log("rating en person");
            setSearchType(5);
        } else if (rating) {
            console.log("rating");
            setURL(rating);
            setSearchType(6)
        } else if (person) {
            console.log("person");
            setPerson(person)
            setSearchType(7);
        } else if (movie) {
            setSearchType(8);
            setMovie(movie)
        }
        console.log(url);
    }

        console.log(personID);



    return (
        <>
            <h1>RMS</h1>

            {/*if state "url" has value after submit than show button, else don't render */}
            {url &&
                <>
                    <p>Not in the mood for this movie ?</p>
                    <Button type="button" name="search again" onClick={() => setURL("")}/>
                </>
            }

            <article>
                {/*if state "url" has no value after submit than show section, else don't render */}
                {!url &&
                    <section>
                        <p>Get movie suggestions based on rating, genre or both.</p>
                        <p>If you want to get suggestions based on persons (actor, director...), first look them up.</p>
                        <br/>

                        <label htmlFor="suggestion-field">Look for :
                            <select id="suggestion-field" onChange={handleChange}>
                                <option value="">Movie by</option>
                                <option value="select-genre">Genre</option>
                                <option value="select-rating">Rating</option>
                                <option value="select-both">Genre & Rating</option>
                                <option value="select-person">Person</option>
                                <option value="select-movie">Movie</option>
                            </select>
                        </label>
                    </section>
                }
            </article>

            <article>
                {/*if state "url" has no value after submit than show section, else don't render*/}
                {!url &&
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/*if state "lookFor" has value "genre" or "both" than show select-field, else don't render */}
                        {(lookFor === "select-genre" || lookFor === "select-both") &&
                            <section>
                                <label htmlFor="genre-field">Genre :
                                    <select id="genre-field" {...register("genre")}>Genre
                                        <option value="">Choose Genre</option>
                                        <option value={requests.genre.action}>Action</option>
                                        <option value={requests.genre.adventure}>Adventure</option>
                                        <option value={requests.genre.animated}>Animated</option>
                                        <option value={requests.genre.comedy}>Comedy</option>
                                        <option value={requests.genre.crime}>Crime</option>
                                        <option value={requests.genre.documentaries}>Documentaries</option>
                                        <option value={requests.genre.drama}>Drama</option>
                                        <option value={requests.genre.family}>Family</option>
                                        <option value={requests.genre.fantasy}>Fantasy</option>
                                        <option value={requests.genre.history}>History</option>
                                        <option value={requests.genre.horror}>Horror</option>
                                        <option value={requests.genre.music}>Music</option>
                                        <option value={requests.genre.mystery}>Mystery</option>
                                        <option value={requests.genre.romance}>Romance</option>
                                        <option value={requests.genre.scifi}>Sci fi</option>
                                        <option value={requests.genre.thriller}>Thriller</option>
                                        <option value={requests.genre.war}>War</option>
                                        <option value={requests.genre.western}>Western</option>
                                    </select>
                                </label>
                            </section>
                        }

                        {/*if state "lookFor" has value "rating" or "both" show select-field, else don't render */}
                        {(lookFor === "select-rating" || lookFor === "select-both") &&
                            <section>
                                <label htmlFor="rating-field">Rating :
                                    <select id="rating-field" {...register("rating")}>Rating
                                        <option>Choose Rating</option>
                                        <option value="">Choose Rating</option>
                                        <option value={requests.ratingFrom90}>9 or better</option>
                                        <option value={requests.ratingFrom70}>7 or better</option>
                                        <option value={requests.ratingFrom50}>5 or better</option>
                                        <option value={requests.ratingFrom30}>3 or better</option>
                                        <option value={requests.ratingFrom0}>0 or better</option>
                                    </select>
                                </label>
                            </section>
                        }

                        {/*if state "lookFor" has value "person" show text-field, else don't render */}
                        {lookFor === "select-person" &&
                            <section>
                                <label htmlFor="person-field">Name :</label>
                                <input
                                    id="person-field"
                                    type="text"
                                    placeholder="Edward+Norton"
                                    {...register("person_name")}
                                />
                            </section>
                        }

                        {/*if state "lookFor" has value "data" show text-field, else don't render */}
                        {lookFor === "select-data" &&
                            <section>
                                <label htmlFor="person-field">Name :</label>
                                <input
                                    id="person-field"
                                    type="text"
                                    placeholder="Jack+Reacher"
                                    {...register("movie_name")}
                                />
                            </section>
                        }

                        <section>
                            {/*{url &&*/}
                            <Button type="submit" name="search"/>
                            {/*}*/}
                        </section>
                    </form>
                }
            </article>

            <article>
                <section>
                    {/*if state "url" has value after submit than show component, else don't render*/}
                    {url &&
                        <Data
                            fetchUrl={requests.discover + url}
                            endpoint="isMovie"
                            value={setPersonID}
                        />
                    }
                </section>

                <section>
                    {/*if state "person" has value after submit than show component, else don't render*/}
                    {person &&
                        <Data
                            fetchUrl={requests.search.person.id + person}
                            endpoint="person"
                            value={() => setPersonID(this.value)}
                        />
                    }
                </section>
                {person}
                <section>
                </section>

            </article>


            <Outlet/>
        </>
    );
}

export default RMS;