import React from 'react'
import './styles/forecastDay.css'

const DayForecast= ({forecast,cTime})=>{
    const data=forecast.forecastday[0];
    let finalData="";
    data.hour.forEach((ele,index)=>{
        const d = new Date(ele.time);
        if(d.getHours()==cTime){
            finalData=data.hour.slice(index+1,index+7);
            if(cTime>18){
                finalData=[...finalData,...forecast.forecastday[1].hour.slice(0,7-(24-cTime))];
            }
        }
    })

    const print=finalData!=''?finalData.map(ele=>(
        <div key={ele.time_epoch} className="forecast-box">
            {new Date(ele.time).getHours()+":00"}
            <div className="forecast-img"><img src={ele.condition.icon}/></div>
            {ele.condition.text}
        </div>
    )):null;

    return(
        <div className="main-forecast-container">
            {print}
        </div>  
    )
}

export default DayForecast;