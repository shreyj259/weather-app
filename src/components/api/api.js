import axios from "axios";

export const  fetchApi = async (q)=>{
    const data=await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=62060b4f83654d3eb1d152856213011&q=${q}&days=3&aqi=yes&alerts=no`);
    return data;
}

export const searchBox = async (q)=>{
    const data= await axios.get(`http://api.weatherapi.com/v1/search.json?key=62060b4f83654d3eb1d152856213011&q=${q}`)
    return data;

}