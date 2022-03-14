import axios from "axios";

export const NoviBackend = axios.create({
    baseURL: "https://frontend-educational-backend.herokuapp.com/",
});

export const requests = {
    post: {
        signup: `/api/auth/signup`,
        signin: `/api/auth/signin`,
        photo: `/api/user/image`,
    },
    get: {
        test: {
            endpoint: `/api/test/all`,
        },
        logged: {
            user: `/api/user`,
            allusers: `/api/admin/all`,
        },
        secure: {
            user: `/api/test/user`,
            admin: `/api/test/admin`,
        },
    },
    put: {
        customize: `/api/user`,
    }
}
