import React, {useState, useEffect} from 'react';
import IHarborWeatherData from '../types/HarborWeather';
import { getHarborWeather} from '../services/HarborServices';
import { Icon } from "@iconify/react";

interface IProps{
    lat:number,
    lon:  number
}
export default function Weather({lat, lon}:IProps){
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [harborWeather , setHarborWeather] = useState<IHarborWeatherData>({} as IHarborWeatherData);
    useEffect(()=>{
        const retriveHarborWeather = (lat : number , lon : number) => {
            setIsLoading(true)
            getHarborWeather(lat , lon)
            .then((response: any) => {
              console.log(response.data)
             setHarborWeather(response.data);
              setIsLoading(false);
            })
            .catch((e: Error) => {
              console.log(e);
              setIsLoading(false);
            });
      
           
          }
          retriveHarborWeather(lat, lon);
    },[])

return  !isLoading ? (
    <>
      <Icon fontSize={25} icon="flat-ui:weather" />
      {" "+harborWeather?.weather?.[0]?.description}
    </>
  ) : (
    <span>loading...</span>
  )
}