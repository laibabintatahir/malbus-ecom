import axios from 'axios';

const url = 'http://localhost:5000';

export const addProduct = async (data) => {
  console.log('API CALLED');
  await axios.post(`${url}/adminaddprod`, data);
};

export const getProduct = async () => {
  return await axios.get(`${url}/product`);
};

export const addUser = async (user) => {
  console.log('API CALLED');
  await axios.post(`${url}/signup`, user);
};

export const getUser = async () => {
  return await axios.get(`${url}/user`);
};
