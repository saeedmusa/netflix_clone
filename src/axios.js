import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})


export default instance

//if you write default you can call it another component in another file
