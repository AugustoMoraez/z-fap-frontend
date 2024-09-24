import axios from "axios";


export const baseURL = "https://z-fap.onrender.com"

export const BaseApi = axios.create({
    baseURL
})