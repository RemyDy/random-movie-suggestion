import React, {useState, useEffect, useContext} from 'react';
import {AuthContext} from "../../context/Context";
import {NoviBackend, requests} from "../../helpers/fetchdata/novi";
import {axiosCancelToken} from "../../helpers/fetchdata/cancelToken";
import {Link, Outlet} from "react-router-dom";
import {Button} from "../../components/button-link/Button-Link";
import styled from "./Profile.module.css"
import logo_loading from "../../helpers/assets/Animatie loading.gif";

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
            <h1>Profile</h1>

            <article>
                <section>
                    <div className="home">
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </div>
                </section>
                <br/>

                <section>
                    <p>Zin in het kijken van een film maar geen idee welke? <br/>
                        Ga naar <Link to="/RMS">RMS</Link> en krijg een suggestie
                    </p>
                    <br/>

                    <p>Of heb je meer zin in het spelen van een spelletje? <br/>
                        Ga dan naar <Link to="/Game">Game</Link>
                    </p>
                    <br/>
                </section>
            </article>



            <article>
                <section>
                    {Object.keys(profileData).length > 0 &&
                        <>
                            <h5>Message from teacher</h5>
                            <p>{profileData}</p>
                        </>
                    }
                    {error &&
                        <p> Connection with Novi server was unsuccessful, press F5 and click button again</p>
                    }
                </section>

                {Object.keys(profileData).length === 0 &&
                    <section>
                        <Button type="button" onClick={()=> fetchProfileData()} name="message from teacher" />
                        <div hidden={loading === false}>
                            <p>Loading... please wait...</p>
                            <img src={logo_loading} alt="logo-loading" width="75px"/>
                        </div>
                    </section>}

            </article>

            <p className={styled.link}>Terug naar <Link to="/">Home</Link></p>

            <Outlet/>
        </>
    )
}

export default Profile;