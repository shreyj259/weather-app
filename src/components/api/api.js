import axios from "axios";

export const  fetchApi = async (q,apiKey)=>{
    const data=await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${q}&days=3&aqi=yes&alerts=no`);
    return data;
}

export const searchBox = async (q,apiKey)=>{
    const data= await axios.get(`http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${q}`)
    return data;

}