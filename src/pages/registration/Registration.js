import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {Link, Outlet, useNavigate} from "react-router-dom";
import styled from "./Registration.module.css"
import validations from "../../helpers/validations";
import {baseNovi} from "../../helpers/fetchdata/axios";
import {noviRequests} from "../../helpers/fetchdata/requests";

function Registration() {

    const {register, handleSubmit, watch, setValue, formState: {errors}} = useForm();
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();
    const admin = process.env.REACT_APP_ADMIN_PASSWORD;
    const watchPassword = watch("password");

    useEffect(() => {
        if (watchPassword === admin) {
            return setValue("role", ["admin"])
        }
    }, [admin, watchPassword, setValue]);

    // useEffect(() => {
    //     return function cleanup() {
    //         source.cancel();
    //     }
    // }, [source])


    async function onSubmit(data) {
        toggleError(false);
        toggleLoading(true);

        try {
            console.log(data);
            // const result = await baseNovi.get(noviRequests.get.test);
            const result = await baseNovi.post(noviRequests.post.signup, {
                username: data.username,
                email: data.email,
                password: data.password,
                info: data.info,
                role: [
                    data.role
                ],
            })
            console.log(result);
            navigate("/login");
        } catch (e) {
            console.error(e.response);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <form className={styled.form} onSubmit={handleSubmit(onSubmit)}>

                <section>
                    <label htmlFor="username-field">Username
                        <input id="username-field" type="text" {...register("username", validations.username)}/>
                    </label>
                    {errors?.username && errors?.username.message}
                </section>

                <section>
                    <label htmlFor="email-field">E-mail
                        <input id="email-field" type="email" {...register("email", validations.email)} />
                    </label>
                    {errors?.email && errors?.email.message}
                </section>

                <section>
                    <label htmlFor="password-field">Password
                        <input id="password-field" type="password" {...register("password", validations.password)} />

                    </label>
                    {errors?.password && errors?.password.message}
                </section>

                <section>
                    <label htmlFor="info-field">Info
                        <input id="info-field" type="Textarea"
                               placeholder="What movie-genre do you like most?" {...register("info", validations.info)}/>
                    </label>
                    {errors?.info && errors?.info.message}
                </section>
                {error && <p className={styled.error}>Dit account bestaat al. Probeer een ander e-mailadres</p>}
                <section>
                    <label htmlFor="role-field">
                        <input id="role-field" value={["user"]} hidden="hidden" {...register("role")} />

                    </label>
                </section>

                <button type={"submit"} disabled={loading}>Registreer</button>
            </form>

            <p>Heb je al een account?
                Je kunt je <Link to="/login">hier</Link> inloggen.
            </p>

            <Outlet/>
        </>
    )

}

export default Registration;