import axios from "axios";

const BASE_URL = "http://localhost:8000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNWFiZDg1NjBkMjI4YzM2ODk4ZjI1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjkzMzk4MCwiZXhwIjoxNjY3MTkzMTgwfQ.hZgqe6b4IOqy-vfxdP7Rh-eZRvZNRWJsM1mO5YQLJJ8";
export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{
        token:`Bearer ${TOKEN}`
    }
});