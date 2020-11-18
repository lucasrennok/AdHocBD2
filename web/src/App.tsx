import React from 'react';
import { FormGroup } from '@material-ui/core'
import CheckOption from './components/CheckOption'
import Selection from './components/Selection'
import { options }from './consts/consts';
import './App.css';

export default function App() {
  const [ligas, setLigas] = React.useState([]);
  const [jogadores, setJogadores] = React.useState([]);
  const [times, setTimes] = React.useState([]);
  const [jogos, setJogos] = React.useState([]);

  React.useEffect( () =>{
    fetch('http://localhost:3333/ligas')
    .then((response) => {
      return response.json()
    })
    .then((ligasJSON) => {
      ligasJSON.ligas.unshift('Todas as ligas')
      setLigas(ligasJSON.ligas)
    })

    fetch('http://localhost:3333/times')
    .then((response) => {
      return response.json()
    })
    .then((timesJSON) => {
      timesJSON.times.unshift('Todos os times')
      setTimes(timesJSON.times)
    })

    fetch('http://localhost:3333/jogadores')
    .then((response) => {
      return response.json()
    })
    .then((jogadoresJSON) => {
      jogadoresJSON.jogadores.unshift('Todos os jogadores')
      setJogadores(jogadoresJSON.jogadores)
    })


    fetch('http://localhost:3333/jogos')
    .then((response) => {
      return response.json()
    })
    .then((jogosJSON) => {
      jogosJSON.jogos.unshift('Todos os jogos')
      setJogos(jogosJSON.jogos)
    })
  }, [])

  return (
    <div className="home-page">

      <div className="selections">
        <FormGroup>
          <Selection typeData = "Ligas" data={ligas}/>
          <Selection typeData = "Times" data={times}/>
          <Selection typeData = "Jogadores" data={jogadores}/>
          <Selection typeData = "Jogos" data={jogos}/>
        </FormGroup>
      </div>

      <div className="checkboxes">
        <FormGroup>
          {options.map((value) => {
            return <CheckOption label={value}/>
          })}
        </FormGroup>
      </div>
      
    </div>
  );
}
