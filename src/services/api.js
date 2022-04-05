import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.0.176:3000/"
    //baseURL: "https://api.github.com/users/andreocunha"
})

export default api;