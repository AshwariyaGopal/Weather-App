"use client"
 import React,{useState} from 'react'

import InputCard from '../components/InputCard'
import OutputCard from '../components/OutputCard'

export default function WeatherApp() {
    const [weatherData,setWeatherData] = useState(null);
    const handleSearch = async (city:string) => {
        const API_KEY = "13627170f98e4094882124011251402"
        try {
            const response = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`
            );
            const data = await response.json();
setWeatherData(data)

        }catch(e){
            console.log("Error occured : ", e)
        }
    }
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center gap-4 bg-black'>
        <InputCard onSearch={handleSearch}/>
        <OutputCard weatherData={weatherData}/>
    </div>
  )
}
