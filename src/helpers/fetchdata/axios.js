import axios from "axios";

export const baseTMDB = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export const baseNovi = axios.create({
    baseURL: "https://frontend-educational-backend.herokuapp.com/",
});
