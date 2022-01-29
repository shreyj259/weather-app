import DayForecast from './dayForecast';
import './styles/mainCard.css';

const MainCard=({currentData})=>{
    const d = new Date(currentData.location.localtime);
    return(
        <div className="main-card-container">
            <div className="main-card-box1">
                <span className="big-text">{currentData.location.name + ", " + currentData.location.country}  <br/></span>
                <span> {`Time : ${d.getHours()}:${d.getMinutes()}`} <br/></span>
                <span style={{fontSize:"30px"}}>{currentData.current.temp_c+ "° C"} <br/></span>
                <div className="detail-box">
                <span className="details-sub">{"Feels like : " + currentData.current.feelslike_c + "° C"} </span>
                <span className="details-sub">{"Wind : " + currentData.current.wind_kph + " kph"} <br/></span>
                <span className="details-sub">{"Humidity : " + currentData.current.humidity + " %"  } </span>
                <span className="details-sub">{"AQI : " + currentData.current.air_quality.pm10.toFixed(2)  } <br/></span>
                </div>
                
            </div>
            <div className="main-card-box2">
                <div className="img-box"><img src={currentData.current.condition.icon} alt={currentData.current.condition.text}></img></div>    
                <span style={{fontSize:"22px"}}>{currentData.current.condition.text}</span>
            </div>
            <div className='main-card-box3'>
                <DayForecast forecast={currentData.forecast} cTime={d.getHours()}/>
            </div>
        </div>
    )
}

export default MainCard;