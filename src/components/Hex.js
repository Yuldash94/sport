import React from 'react'
import './Hex.css'


const Hex = ({matches,changeHex}) =>  {

    
  return (
    <>
        <div className='hexagon_wrapper'> 
            {matches.map(match => 
                    // <div key={match.id}  onClick={changeHex} className={`hexagon` + `hexagon_${match.area}`  + match.isActive  ? `hexagon hexagon_active` : null}  id={match.id}>
                    <div key={match.id}  onClick={() => {changeHex(match.id, match.area)}} className={match.isActive  ? `hexagon hexagon_active hexagon_`+match.area : `hexagon hexagon_`+match.area}  id={match.id}>
                        <p id={match.id}>{match.stadium}</p>
                        <h3 id={match.id}>{match.date}</h3>
                        {match.isActive ? <p id={match.id}> {match.time}</p> : ''}
                        {match.isActive ? <div id={match.id} className='buy'>Купить билет</div> : ''}
                    </div>
            )}   
            <div className='hex_inner hex_inner_left'>
                {matches.map( match => match.isActive ? <h3 key={match.id}> {match.fighter_1}</h3> : '')}
            </div>
            <div className='hex_inner hex_inner_right'>
                {matches.map( match => match.isActive ? <h3 key={match.id}> {match.fighter_2}</h3> : '')}
            </div>
        </div>
    </>
    )
}

export default Hex