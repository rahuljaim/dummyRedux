import axios from "axios";

export const getUser=()=>{
    let users = {}
    users = axios.get('https://jsonplaceholder.typicode.com/posts')
    return users
}