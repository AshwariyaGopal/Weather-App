"use client"

import React from "react";

import WeatherApp from "./components/WeatherApp";
export default function Home() {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-4 bg-black">
      <WeatherApp />
    </div>
  );
}
