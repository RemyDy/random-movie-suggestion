import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import Data from "../../components/data/Data";
import {discover, andAdd, requests, search, selectListRating} from "../../helpers/fetchdata/tmdb"
import {useForm} from "react-hook-form";
import {Button} from "../../components/button-link/Button-Link";
import Form from "../../components/tile/form/Form";
import styles from "./RMS.module.css";
import InputField from "../../components/inputfields/InputField";
import Quote from "../../components/tile/quote/Quote";

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
    const [person, setPerson] = useState("")
    const [lookFor, setLookFor] = useState("");
    const [searchType, setSearchType] = useState(0);

    console.log("person: " + person + " lookFor: " + lookFor + " url: " + url + " searchType: " + searchType);

    function resetData() {
        reset({
            data: ""
        });
        setURL("");
        setPerson("");
        setLookFor("");
        setSearchType(0);
    }

    function handleChange(event) {
        console.log(event.target.value);
        setLookFor(event.target.value)
    }

    function onSubmit(data) {
        console.log("rating: " + data.rating + " genre: " + data.genre + " person: " + data.person + " movie: " + data.movie);
        let genre = data.genre
        let rating = data.rating
        let person = data.person
        let movie = data.movie


        if (person) {
            let p = person.replace(/\s/g, "+");
            setURL(p)
            setSearchType(1)
        } else if (genre && rating) {
            setSearchType(2);
            setURL(genre + rating);
        } else if (genre) {
            setURL(genre);
            setSearchType(2);
        } else if (rating) {
            setURL(rating);
            setSearchType(2)
        } else if (movie) {
            let m = movie.replace(/\s/g, "+");
            setURL(m)
            setSearchType(3);
        }
    }

    return (
        <>
            <main className={styles.main}>

                <article className={styles["search-again"]}>
                    {url &&
                        <>
                            <Button type="button"
                                    name="search-again"
                                    onclick={resetData}/>
                        </>
                    }
                </article>

                {!url && !person &&
                    <>
                        <article className={styles.intro}>
                            <p>
                                Get movie suggestions based on rating, genre or both.<br/>
                                If you want to get suggestions based on persons (actor, director...), first look them
                                up.
                            </p>
                        </article>

                        <article className={styles.tiles}>

                            <div className={styles["tiles__form"]}>
                                <Form title="Select">
                                    <article className={styles["tiles__select"]}>
                                        <div className={styles["tiles__suggestion"]}>
                                            <label className={styles["suggest__select"]} htmlFor="suggestion-field">
                                                <select id="suggestion-field"
                                                        onChange={handleChange}>
                                                    <option value="">Select Option</option>
                                                    <option value="select-genre">Genre</option>
                                                    <option value="select-rating">Rating</option>
                                                    <option value="select-both">Genre & Rating</option>
                                                    <option value="select-person">Person</option>
                                                    <option value="select-movie">Movie</option>
                                                </select>
                                            </label>
                                        </div>

                                    </article>

                                    <article className={styles["tiles__genre"]}>
                                        {!url && !person &&
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                {(lookFor === "select-genre" || lookFor === "select-both") &&
                                                    <section>
                                                        <label htmlFor="genre-field">
                                                            <select id="genre-field" {...register("genre")}>Genre
                                                                <option value="">Choose Genre</option>
                                                                <option value={andAdd.genre.action}>Action</option>
                                                                <option value={andAdd.genre.adventure}>Adventure
                                                                </option>
                                                                <option value={andAdd.genre.animated}>Animated</option>
                                                                <option value={andAdd.genre.comedy}>Comedy</option>
                                                                <option value={andAdd.genre.crime}>Crime</option>
                                                                <option
                                                                    value={andAdd.genre.documentaries}>Documentaries
                                                                </option>
                                                                <option value={andAdd.genre.drama}>Drama</option>
                                                                <option value={andAdd.genre.family}>Family</option>
                                                                <option value={andAdd.genre.fantasy}>Fantasy</option>
                                                                <option value={andAdd.genre.history}>History</option>
                                                                <option value={andAdd.genre.horror}>Horror</option>
                                                                <option value={andAdd.genre.music}>Music</option>
                                                                <option value={andAdd.genre.mystery}>Mystery</option>
                                                                <option value={andAdd.genre.romance}>Romance</option>
                                                                <option value={andAdd.genre.scifi}>Sci fi</option>
                                                                <option value={andAdd.genre.thriller}>Thriller</option>
                                                                <option value={andAdd.genre.war}>War</option>
                                                                <option value={andAdd.genre.western}>Western</option>
                                                            </select>
                                                        </label>
                                                    </section>
                                                }

                                                {(lookFor === "select-rating" || lookFor === "select-both") &&
                                                    <section>
                                                        <label htmlFor="rating-field">
                                                            <select id="rating-field" {...register("rating")}>Rating
                                                                {/*<option>Choose Rating</option>*/}
                                                                <option value="">Choose Rating</option>
                                                                <option value={selectListRating.ratingFrom90}>9 or
                                                                    better
                                                                </option>
                                                                <option value={selectListRating.ratingFrom70}>7 or
                                                                    better
                                                                </option>
                                                                <option value={selectListRating.ratingFrom50}>5 or
                                                                    better
                                                                </option>
                                                                <option value={selectListRating.ratingFrom30}>3 or
                                                                    better
                                                                </option>
                                                                <option value={selectListRating.ratingFrom0}>0 or better
                                                                </option>
                                                            </select>
                                                        </label>
                                                    </section>
                                                }

                                                {lookFor === "select-person" &&
                                                    <section>
                                                        <InputField
                                                            htmlFor="person-field"
                                                            id="person-field"
                                                            type="text"
                                                            name="person"
                                                            register={register}
                                                        />
                                                    </section>
                                                }

                                                {lookFor === "select-movie" &&
                                                    <section>
                                                        <InputField
                                                            htmlFor="movie-field"
                                                            id="movie-field"
                                                            type="text"
                                                            name="movie"
                                                            register={register}
                                                        />
                                                    </section>
                                                }

                                                <section className={styles["tiles__select-button"]}>
                                                    <Button type="submit"
                                                            name="search">search
                                                    </Button>
                                                </section>
                                            </form>
                                        }
                                    </article>
                                </Form>
                            </div>

                            <Quote
                                line={"The choice is an illusion, you already know what you have to do"}
                                movie={"The Matrix Resurrections"}
                                actor={"Jessica Yn Li Henwick as Bugs"}
                            >
                            </Quote>
                        </article>
                    </>
                }

                <article>
                    <section>
                        {url && searchType === 1 &&
                            <Data
                                fetchUrl={search.people + url}
                                endpoint="person"
                            />
                        }
                    </section>

                    <section>
                        {url && searchType === 2 &&
                            <Data
                                fetchUrl={discover + url}
                                endpoint="rowMovies"
                            />
                        }
                    </section>

                    <section>
                        {url && searchType === 3 &&
                            <Data
                                fetchUrl={search.movie + url}
                                endpoint="rowMovies"
                            />
                        }
                    </section>

                </article>

            </main>

            <Outlet/>
        </>
    );
}

export default RMS;