import {React,useState} from "react";
import './weatherapp.css'
import Search_icon from "../Assets/search.png";
import Cloud_icon from "../Assets/cloud.png";
import Dizzle_icon from "../Assets/dizzle.png";
import Humidity_icon from "../Assets/humidity.png";
import Rainy_icon from "../Assets/rainy.png";
import Snow_icon from "../Assets/snow.png";
import Sun_icon from "../Assets/sun.png";
import Windy_icon from "../Assets/windy.png";
const Weatherapp=()=>{
    let api_key="4f07494166d3ab1af7912f8d58ef1f2e";
    const [wicon,setWicon]=useState(Cloud_icon);
    const search=async ()=>{
const element=document.getElementsByClassName("cityInput")
if(element[0].value===""){
    return 0;
}
let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
let response=await fetch(url);
let data=await response.json();
const humidity=document.getElementsByClassName("humidity-percent");
const wind=document.getElementsByClassName("wind-rate");
const temperature=document.getElementsByClassName("weather-temp");
const location=document.getElementsByClassName("weather-location");
humidity[0].innerHTML=data.main.humidity+"%";
wind[0].innerHTML=Math.floor(data.wind.speed)+"km/h";
temperature[0].innerHTML=Math.floor(data.main.temp)+"^c";
location[0].innerHTML=data.name;
if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
    setWicon(Sun_icon);
}
else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
    setWicon(Cloud_icon);
}
else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
    setWicon(Dizzle_icon);
}
else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
    setWicon(Dizzle_icon);
}
else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
    setWicon(Rainy_icon);
}
else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
    setWicon(Rainy_icon);
}
else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
    setWicon(Snow_icon);
}
else{
    setWicon(Sun_icon);
}
    }
    return(
        <div className='container'>
            <div className="top-bar">
             <input type="text" className="cityInput" placeholder="search"/>
             <div className="search-icon">
                <img src={Search_icon} alt="search-icon" onClick={()=>{search()}}/>

             </div>
            </div>
            <div className="weather-img">
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp">24`c</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={Humidity_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={Windy_icon} alt="" className="icon"/>
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">wind speed</div>
                    </div>
                </div>
            </div>

         
        </div>
    )
}
export default Weatherapp;