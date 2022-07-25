import React, { useState } from 'react'

const contador = () => {
                    const [ClickCount, setClickCount] = useState (0);
                    const [DayCount, setDayCount] = usestate('');
                    const fn =()=>{
                                        setClickCount(ClickCount +1);
                                        setDayCount(date());
                    }
  return (
                    <div>
                                        
                    <h1>Contador</h1>
                    <p> Actividad tema Hooks</p>
                    <div>
                      <button onClick={fn}>Cantidad de Clicks {ClickCount} </button>          
                    </div>
                    <label> Fecha de Ultimo Click: </label>
                    <p>{DayCount}</p>
                                                       
                    </div>
    
  )
}

export default contador