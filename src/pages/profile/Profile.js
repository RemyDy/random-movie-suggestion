import React, {useState, useEffect, useContext} from 'react';
import {AuthContext} from "../../context/Context";
import {NoviBackend, requests} from "../../helpers/fetchdata/novi";
import {axiosCancelToken} from "../../helpers/fetchdata/cancelToken";
import {Link, Outlet} from "react-router-dom";
import {Button} from "../../components/button-link/Button-Link";
import styles from "./Profile.module.css"
import logo_loading from "../../helpers/assets/Animatie loading.gif";
import Form from "../../components/tile/form/Form";
import Quote from "../../components/tile/quote/Quote";

function Profile() {
    const [profileData, setProfileData] = useState({});
    const [loading, toggleLoading] = useState(false);
    const [error, toggleError] = useState(false);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        return function cleanup() {
            axiosCancelToken.cancel(
                "Request canceled!"
            );
        }
    }, []);

    async function fetchProfileData() {
        console.log("test")
        toggleLoading(true);
        const token = localStorage.getItem("token");

        try {
            const result = await NoviBackend.get(requests.get.secure.user, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                cancelToken: axiosCancelToken.token,
            });

            if (result.status === 200) {
                setProfileData(result.data);
            }
        } catch (e) {
            console.error(e.response);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
            <main className={styles.main}>

                <article className={styles.intro}>
                    <p>Zin in het kijken van een film maar geen idee welke? <br/>
                        Ga naar <Link to="/RMS">RMS</Link> en krijg een suggestie.
                    </p>

                    <p>Of heb je meer zin in het spelen van een spelletje? <br/>
                        Ga dan naar <Link to="/Game">Game</Link>.
                    </p>

                    {/*<p className={styles.link}>*/}
                    {/*    Ga terug naar <Link to="/">Home</Link> om de trending films van dit moment te zien.*/}
                    {/*</p>*/}
                </article>

                <article className={styles.tiles}>
                    {Object.keys(profileData).length === 0 &&
                        <div className={styles["tiles__profile"]}>
                            <Form title={"Profile"}>

                                <p>Username: {user.username}</p>
                                <p>Email: {user.email}</p>

                                <div className={styles["tiles__button"]}>
                                    <Button type="button"
                                            name="secret message"
                                            onclick={fetchProfileData}
                                    />
                                </div>
                            </Form>
                        </div>
                    }

                    {Object.keys(profileData).length === 0 &&
                        <div className={styles["tiles__quote"]}>
                            <Quote
                                line={"Toto, I have a feeling were not in Kansas anymore"}
                                movie={"The Wizard of Oz"}
                                actor={"Judy Garland as Dorothy Gale"}
                            />
                        </div>
                    }
                    {Object.keys(profileData).length > 0 &&
                        <>
                            <div className={styles["tiles__profile-secret"]}>
                                <Quote
                                    line={profileData}
                                    movie={"Novi"}
                                    actor={"Message from teacher"}
                                >
                                    <div className={styles["tiles__button-secret"]}>
                                        <Button
                                            type={"button"}
                                            name={"close message"}
                                            onclick={() => setProfileData(0)}
                                        />
                                    </div>
                                </Quote>
                            </div>
                        </>
                    }
                </article>

                <article className={styles.loading}>
                    <div hidden={loading === false}>
                        <p>Loading... please wait...</p>
                        <img src={logo_loading} alt="logo-loading" width="75px"/>
                    </div>
                    {error &&
                        <p> Connection with Novi server was unsuccessful, press F5 and click button
                            again</p>
                    }
                </article>

                <Outlet/>
            </main>
        </>
    )
}


export default Profile;