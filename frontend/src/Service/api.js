import axios from "axios";

const url= "https://halalwardrobe-server.onrender.com";

export const addProduct= async(data)=>{
    return await axios.post(`${url}/product`,data)
}

export const getProduct=async()=>{
    return await axios.get(`${url}/product`);
}

export const addUser=async(user)=>{
    return await axios.post(`${url}/user`,user);
}

export const getUser=async()=>{
    return await axios.get(`${url}/user`);
}