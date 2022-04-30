import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {Link, Outlet, useNavigate} from "react-router-dom";
import styled from "./Registration.module.css"
import {NoviBackend, requests} from "../../helpers/fetchdata/novi";
import {axiosCancelToken} from "../../helpers/fetchdata/cancelToken";
import logo_loading from "../../helpers/assets/Animatie loading.gif"
import {Tile} from "../../components/tile/Tile";
import InputField from "../../components/inputfields/InputField";
import {Button} from "../../components/button-link/Button-Link";

function Registration() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();
    const admin = process.env.REACT_APP_ADMIN_PASSWORD;
    const {register, handleSubmit, watch, setValue, formState: {errors}} = useForm();


    const watchPassword = watch("password");
    useEffect(() => {
        if (watchPassword === admin) {
            return setValue("role", "admin")
        }
    }, [admin, watchPassword, setValue]);

    useEffect(() => {
        return function cleanup() {
            axiosCancelToken.cancel(
                "Request canceled!"
            );
        }
    }, []);

    async function onSubmit(data) {

        console.log(data);

        toggleError(false);
        toggleLoading(true);

        try {
            // const result = await NoviBackend.get(requests.get.test.endpoint, {
            const result = await NoviBackend.post(requests.post.signup, {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    role: [
                        data.role
                    ],
                },
                {
                    cancelToken: axiosCancelToken.token
                }
            );
            console.log(result);
            if (result.status === 200) {
                navigate("/login")
            }
        } catch (e) {
            console.error(e.response);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <main className={styled["page-wrapper"]}>

                <article className={styled.tiles}>

                    <section className={styled["tile-signup"]}>
                        <Tile
                            title="Sign Up"
                            id={styled["tile-signup"]}
                        >
                            <form className={styled.form} onSubmit={handleSubmit(onSubmit)}>
                                <InputField
                                    htmlFor="username-field"
                                    id="username-field"
                                    type="username"
                                    name="username"
                                    placeholder="Insert Username"
                                    register={register}
                                />
                                <p>{errors?.username && errors.username?.message}</p>

                                <InputField
                                    htmlFor="email-field"
                                    id="email-field"
                                    type="email"
                                    name="email"
                                    placeholder="Insert E-Mail"
                                    register={register}
                                />
                                <p>{errors?.email && errors.email?.message}</p>

                                <InputField
                                    htmlFor="role-field"
                                    id="role-field"
                                    type="text"
                                    name="role"
                                    placeholder="role"
                                    register={register}
                                />
                                <p>{errors?.role && errors.role?.message}</p>

                                <InputField
                                    htmlFor="password-field"
                                    id="password-field"
                                    type="password"
                                    name="password"
                                    placeholder="Insert Password"
                                    register={register}
                                />
                                <p>{errors?.password && errors.password?.message}</p>

                                <Button
                                    type="submit"
                                    name="submit"/>
                            </form>
                        </Tile>
                    </section>

                    <section className={styled["tile-quote"]}>
                        <Tile
                            id={styled["tile-quote"]}
                        >
                            <div className={styled.quote}>
                                <h2 className={styled["quote-line"]}>"You Had Me At Hello"</h2>
                                <h4>- Jerry Maquire</h4>
                                <h5>Renee Zelweger as Dorothy Boyd</h5>
                            </div>
                        </Tile>
                    </section>

                </article>


                <section>
                    <div hidden={loading === false}>
                        <p hidden={loading === false}>Loading... please wait...</p>
                        < img src={logo_loading} alt="logo-loading" width="75px"/>
                    </div>
                    {error &&
                        <p className={styled.error}>Account already exist, Press F5 to try again with a different e-mail
                            address, or go to <Link to="/login">Login</Link></p>}
                </section>

                <p hidden={error || loading}>Do you already have an account? Go to <Link to="/login">Login</Link></p>


                <Outlet/>
            </main>
        </>
    )
}

export default Registration;