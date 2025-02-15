import React from 'react';

interface WeatherData {
location:{
    name:string;
    country:string;
    localtime:string
};
current:{
    temp_c:number
};
}
interface OutputCardProps {
    weatherData:WeatherData | null;
}

export default function OutputCard({weatherData}:OutputCardProps) {
    if(!weatherData){
        return null;
    }
  return (
    <div className=' w-[400px] h-[200px] bg-blue-950  text-white flex flex-col justify-center items-center gap-6 p-4 rounded-2xl'>
        
            <div className="flex flex-row items-center gap-4">
                <p id='city-name'>{weatherData.location.name}</p>
                <p id='countryName' className='bg-orange-600 rounded-full px-3 py-1 text-white'>{weatherData.location.country}</p>
            </div>
            <div className="tempCard">
                <p id='temp' className='text-4xl font-bold'>{weatherData.current.temp_c}</p>
            </div>
            <p id='Loc-time' className='italic font-light'>{weatherData.location.localtime}</p>
        </div>
    
  )
}

