import React from 'react';
import { FormGroup } from '@material-ui/core'
import Selection from './components/Selection'
import Table from './components/Table'
import TransferList from './components/TransferList'
import './App.css';

export default function App() {
  const [ligas, setLigas] = React.useState([]);
  const [jogadores, setJogadores] = React.useState([]);
  const [times, setTimes] = React.useState([]);
  const [jogos, setJogos] = React.useState([]);

  const [ligaValue, setLigaValue] = React.useState("Todas as ligas");
  const [timeValue, setTimeValue] = React.useState("Todos os times");
  const [jogadorValue, setJogadorValue] = React.useState("");
  const [jogoValue, setJogoValue] = React.useState("");
  const [selections, setSelections] = React.useState([]);

  React.useEffect( () =>{
    console.log(selections)
    fetch('http://localhost:3333/all?liga=' + ligaValue + '&time=' + timeValue)
    .then((response) => {
      return response.json()
    })
    .then((jsonObj) => {
      jsonObj.ligas.unshift('Todas as ligas')
      setLigas(jsonObj.ligas)
      jsonObj.times.unshift('Todos os times')
      setTimes(jsonObj.times)
      jsonObj.jogadores.unshift('Todos os jogadores')
      setJogadores(jsonObj.jogadores)
      jsonObj.jogos.unshift('Todos os jogos')
      setJogos(jsonObj.jogos)
    })
  }, [ligaValue, timeValue, selections])

  return (
    <div className="home-page">
      <div className="options">
        <div className="selections">
          <FormGroup>
              <Selection setFunction = {setLigaValue} typeData = "Ligas" data={ligas}/>
              <Selection setFunction = {setTimeValue} typeData = "Times" data={times}/>
              <Selection setFunction = {setJogadorValue} typeData = "Jogadores" data={jogadores}/>
              <Selection setFunction = {setJogoValue} typeData = "Jogos" data={jogos}/>
          </FormGroup>
        </div>

        <div className="checkboxes">
          <FormGroup>
            <TransferList setFunction = {setSelections}/>
          </FormGroup>
        </div>
      </div>
      
      <div className="table">
        <Table />
      </div>
    </div>
  );
}
