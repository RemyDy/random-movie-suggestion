import React, {useState, useEffect, useContext} from 'react';
import {AuthContext} from "../../context/Context";
import {NoviBackend, requests} from "../../helpers/fetchdata/novi";
import {axiosCancelToken} from "../../helpers/fetchdata/cancelToken";

import {Link, Outlet} from "react-router-dom";

function Profile() {
    const [profileData, setProfileData] = useState({});
    const [loading, toggleLoading] = useState(false);
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

            if(result.status === 200) {
                setProfileData(result.data);

            }
        } catch (e) {
            console.error(e.response);
        }
        toggleLoading(false);
    }

    return (
        <>
            <h2>Profile Page</h2>
            <section>
                <div className="home">
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
            </section>

            <p>Zin in het kijken van een film maar geen idee welke? Ga naar <Link to="/RMS">RMS</Link> en krijg een suggestie</p>
            <p>Of heb je meer zin in het spelen van een spelletje? Ga dan naar <Link to="/Game">Game</Link></p>
            <p>Terug naar <Link to="/">Home</Link></p>

            <button onClick={fetchProfileData}>Message from teacher</button>
            <p hidden={loading === false}>Loading... please wait</p>
            {Object.keys(profileData).length > 0 &&
                <section>
                    <h5>Secure info</h5>
                    <p>{profileData}</p>
                </section>
            }
            <Outlet/>
        </>
    );
}

export default Profile;