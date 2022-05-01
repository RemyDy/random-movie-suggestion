import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import Data from "../../components/data/Data";
import {requests} from "../../helpers/fetchdata/tmdb"
import {useForm} from "react-hook-form";
import {Button} from "../../components/button-link/Button-Link";
import {Tile} from "../../components/tile/Tile";
import styled from "./RMS.module.css"

function RMS() {

    const {register, handleSubmit, reset} = useForm({
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

    function resetData() {
        reset({
            data: ""
        });
    }

    function handleChange(event) {
        setLookFor(event.target.value)
    }

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
        } else if (genre && rating) {
            setSearchType(2);
            setURL(genre + rating);
        } else if (genre && person) {
            setSearchType(1);
        } else if (genre) {
            setURL(genre);
            setSearchType(2);
        } else if (rating && person) {
            setSearchType(1);
        } else if (rating) {
            setURL(rating);
            setSearchType(2)

        } else if (movie) {
            setSearchType(3);
        }
    }

    return (
        <>
            <article className={styled["page-wrapper"]}>

                <header className={styled.header}>
                    <h1 className={styled.titel}>RMS</h1>
                    <section className={styled.description}>
                        <p>Get movie suggestions based on rating, genre or both.</p>
                        <p>If you want to get suggestions based on persons (actor, director...), first look them up.</p>
                    </section>
                </header>

                {url &&
                    <>
                        <p>Not in the mood for this movie ?</p>
                        <Button type="button" name="search-again" onClick={() => setURL("") + resetData}/>
                    </>
                }

                {person &&
                    <>
                        <p>Not in the mood for this movie ?</p>
                        <Button type="button" name="search-again" onClick={() => setPerson("") + resetData}/>
                    </>
                }

                <article>

                    {!url && !person &&
                        <section className={styled.look}>
                            <Tile
                                title="Select"
                                id={styled["tile-select"]}
                            >
                                <label className={styled["select-field"]} htmlFor="suggestion-field">
                                    <select id="suggestion-field" onChange={handleChange}>
                                        <option value="select-genre">Genre</option>
                                        <option value="select-rating">Rating</option>
                                        <option value="select-both">Genre & Rating</option>
                                        <option value="select-person">Person</option>
                                        <option value="select-movie">Movie</option>
                                    </select>
                                </label>
                            </Tile>
                        </section>
                    }
                </article>

                <article>
                    {!url && !person &&
                        <form onSubmit={handleSubmit(onSubmit)}>

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
                                <Button type="submit" name="search">search</Button>
                            </section>
                        </form>
                    }
                </article>

                <article>
                    <section>
                        {url && searchType === 2 &&
                            <Data
                                fetchUrl={requests.discover + url}
                                endpoint="rowMovies"
                            />
                        }
                    </section>

                    <section>
                        {url && searchType === 1 &&
                            <Data
                                fetchUrl={requests.discover + url}
                                endpoint="person"
                            />
                        }
                    </section>

                </article>

            </article>

            <Outlet/>
        </>
    );
}

export default RMS;