"use client"
import React,{useState} from 'react'
interface FinalInputCardProps {
  onSearch: (city:string) => void
}
 const FinalInputCard:React.FC<FinalInputCardProps>= ({onSearch}) => {
    const [city,setCity] = useState("")
    const handleSearch = () => {
        onSearch(city);
    }
  return (
    <div className="h-[200px] w-[400px] p-4 flex flex-col justify-center gap-4 items-center rounded-2xl bg-white">
        <div className='flex flex-col justify-center items-center gap-2'>
        <div className="text-3xl  font-bold  ">
            <span className='font-bold text-blue-500 text-4xl mr-2'>Weather</span>App
            </div>
            <p className='font-extralight text-center italic'>Get the weather details of any city , Right Now!</p></div>
    <div className="flex md:flex-row flex-col  gap-4">
     <input 
     className="p-2 rounded-xl border" 
     type="text" 
     placeholder='Enter Your City Name' 
     value={city} 
     onChange={(e) => setCity(e.target.value)} />
     <button onClick={handleSearch}   className='bg-orange-600 rounded-xl px-4 py-2 text-white'>Search</button>
</div>
    </div>
  )
}


export default FinalInputCard;