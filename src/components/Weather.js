import React,{useEffect, useState} from 'react'

const Weather = ({temp, humidity, pressure, weathermood, name, speed, country, sunset,}) => {

    const [weatherState, setWeatheState] = useState("");
    
    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case 'Clouds':
                    setWeatheState("wi-day-cloudy");
                    break;
                
                case 'Haze':
                    setWeatheState("wi-fog");
                    break;
                
                case 'Clear':
                    setWeatheState("wi-day-sunny");
                    break;
                
                case 'Mist':
                    setWeatheState("wi-dust");
                    break;
                
                default:
                    setWeatheState("wi-day-sunny");
                    break;
     
            }
        }
    }, [weathermood]);


    // Coverting Seconds into time;
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
     
    // temp = temp - 237.15.toPrecision(2);
  return (
    <>
          <article className='widget'>
              <div className='weatherIcon'>
                  <i className={`wi ${ weatherState}`} ></i>
              </div>
              
              <div className='weatherInfo'>
                  <div className='temperature'>
                      <span>{temp }&deg;</span>
                  </div>

                  <div className='description'>
                      <div className='weatherCondition'>{ weathermood}</div>
                      <div className='place'>{name}, { country}
                      </div>
                  </div>
                  
              </div>

              <div className='date'> {new Date().toLocaleString()}</div>
              
              <div className='extra-temp'>
                  <div className='temp-info-minmax'>
                      <div className='two-sided-section'>
                          <p>
                              <i className={'wi wi-sunset'}></i>
                          </p>
                          <p className='extra-info-leftside'>
                              {timeStr} PM< br /> 
                              Sunset
                          </p>
                      </div>
                      <div className='two-sided-section'>
                          <p>
                              <i className={'wi wi-humidity'}></i>
                          </p>
                          <p className='extra-info-leftside'><br />{humidity}<br/>Humidity
                          </p>
                      </div>
                  </div>

                  <div className='weather-extra-info'>
                      <div className='two-sided-section'>
                          <p>
                              <i className={'wi wi-rain'}></i>
                          </p>
                          <p className='extra-info-leftside'><br />{ pressure}<br/>Pressure
                          </p>
                      </div>

                      <div className='two-sided-section'>
                          <p>
                              <i className={'wi wi-strong-wind'}></i>
                          </p>
                          <p className='extra-info-leftside'><br />{ speed}<br/>Speed<br/>
                          </p>
                      </div>
                  </div>
              </div>
          </article>
    </>
  )
}

export default Weather
