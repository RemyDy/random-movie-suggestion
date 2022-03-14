import React, {useState, useEffect} from 'react';
import {Outlet} from "react-router-dom";
import Movie from "../../components/movie/Movie";
import {requests} from "../../helpers/fetchdata/tmdb"
import {useForm} from "react-hook-form";

function RMS() {
    const {register, handleSubmit, reset, formState: {isSubmitSuccessful}} = useForm({
        defaultValues: {
            genre: "",
            rating: "",
            person_name: "",
        }
    });

    const [url, setURL] = useState("");
    const [rating, setRating] = useState("");
    const [person, setPerson] = useState("");

    function onSubmit(data) {
        console.log("rating: " + data.rating + " genre: " + data.genre + " person: " + data.person_name);
        let genre = data.genre
        let rating = data.rating
        let person = data.person_name
        if (genre && rating && person) {
            console.log("alle 3");
            // setURL(genre+rating+)
        } else if (genre && rating) {
            console.log("genre en rating");
            setURL(genre + rating);
        } else if (genre && person) {
            console.log("genre en person");
        } else if (genre) {
            console.log("genre");
            setURL(genre);
        } else if (rating && person) {
            console.log("rating en person");
        } else if (rating) {
            console.log("rating");
            setURL(rating);
        } else {
            console.log("person");
            setPerson(person)
        }
        console.log(url);
        // setURL(data?.genre);
        // setURL(data?.rating);
        // setPerson(data?.person_name);
    }

    // if (person.length > 0) {
    //     const idOfPerson = document.getElementById();
    //     console.log(idOfPerson);
    // }

    useEffect((data) => {
        if (isSubmitSuccessful) {
            reset({data});
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <>
            <div>
                <h2>RMS</h2>
            </div>

            <article>
                <section>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <article>
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
                        </article>
                        <article>
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
                        </article>
                        <article>
                            <section>
                                <label htmlFor="person-field">Name :</label>
                                <input
                                    id="person-field"
                                    type="text"
                                    placeholder="Edward+Norton"
                                    {...register("person_name")}
                                />
                            </section>
                        </article>
                        <button type="submit">Get Movie</button>
                    </form>
                    {url &&
                        <>
                            <Movie
                                fetchUrl={requests.discover + url}
                                endpoint="isMovie"
                            />
                        </>
                    }
                    {person &&
                        <Movie
                            fetchUrl={requests.search.person.id + person}
                            endpoint="isPerson"
                        />
                    }
                </section>
            </article>

            <Outlet/>
        </>
    );
}

export default RMS;