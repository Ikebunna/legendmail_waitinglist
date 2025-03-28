import axios from "axios";

export const apiURL = import.meta.env.VITE_API_URL;

export const axiosClient = (token, multiMedia) => {
  let headers;

  const contentType = multiMedia ? 'multipart/form-data' : "application/json;charset=utf-8"

  if(token){
   headers = {
      "Content-Type": contentType,
      "Authorization": `Bearer ${token}`,
    }
  } else{
    headers = {
      "Content-Type": contentType,
    };
  
  }

  
  const client = axios.create({
    baseURL: apiURL,
    headers,
    timeout: 60000,
    withCredentials: false,
  });

  return client;
};