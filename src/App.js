import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Hex from './components/Hex';

function App() {
  const [matches, setMatches] = useState([
    {
    id: '1',
    area:'A',
    isActive: false,
    stadium: 'Стадион',
    date: '30 мая',
    time: '19:00',
    fighter_1: '1Соперник №1',
    fighter_2: '1Соперник №2'
  },
  {
    id: '2',
    area:'B',
    isActive: false,
    stadium: 'Стадион',
    date: '17 июня',
    time: '19:00',
    fighter_1: '2Соперник №1',
    fighter_2: '2Соперник №2'
  },
  {
    id: '3',
    area:'C',
    isActive: true,
    stadium: 'Стадион',
    date: '26 июня',
    time: '19:00',
    fighter_1: '3Соперник №1',
    fighter_2: '3Соперник №2'
  },
  {
    id: '4',
    area:'D',
    isActive: false,
    stadium: 'Стадион',
    date: '16 июля',
    time: '19:00',
    fighter_1: '4Соперник №1',
    fighter_2: '4Соперник №2'
  },
  {
    id: '5',
    area:'E',
    isActive: false,
    stadium: 'Стадион',
    date: ' 30 сентября',
    time: '19:00',
    fighter_1: '5Соперник №1',
    fighter_2: '5Соперник №2'
  }
  ])
  
  

  const changeHex = (e) => {
    const changeMatches = Object.assign([], matches)
    let idChange = e.target.id
    let areaOld
    let areaActive = 'C'

    changeMatches.map((match) => {
         if (match.id === idChange) {
            match.isActive = true
            areaOld = match.area
            console.log(areaOld);
            match.area = areaActive
          } else if (match.id !== idChange && match.isActive) {
            match.isActive = false
            match.area = areaOld
            console.log(match.area);
        } 
        return matches;
    })
    setMatches(changeMatches)
    console.log(idChange);
    console.log(matches);
    
}
  return (
    <div className="App">
      <Header/>
      <div className='App_wrapper'>
        <Hex  changeHex={changeHex} matches={matches}/>
      </div>
    
    </div>
  );
}

export default App;
