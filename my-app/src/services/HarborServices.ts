import axios from "axios";
import IHarborData from "../types/Harbor"
import IHarborWeatherData from "../types/HarborWeather";


export const getHarborsList = ()  => {
    
   
    return axios.get<Array<IHarborData>>(`${process.env.REACT_APP_HARBORS_API}`);
}

export const getHarborWeather = (lat :number,lon: number) => {
  
    return axios.get<IHarborWeatherData>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
}