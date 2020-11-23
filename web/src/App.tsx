import React from 'react';
import { FormGroup, Paper, Button } from '@material-ui/core'
import Selection from './components/Selection'
import TransferList from './components/TransferList'
import Table from './components/Table'
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
  const [table, setTable] = React.useState([]);

  React.useEffect( () =>{
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

  function sendRequest(){
    const jsonBody = {
      liga: ligaValue,
      time: timeValue,
      jogador: jogadorValue,
      jogo: jogoValue,
      selections: selections
    }
    let data = JSON.stringify(jsonBody);

    fetch('http://localhost:3333/', {
      method: "POST",
      body: data,
      headers: {                             
        "Content-Type": "application/json"    
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((queryJSON) => {
      setTable(queryJSON.return)
    })
  }

  return (
    <div className="home-page">
      <div className="options">
        <div className="selections">
          <FormGroup className="teste">
            <Paper elevation={5}>
              <div className="containerSelection" id="top">
                <Selection setFunction = {setLigaValue}     typeData = "Ligas"      data={ligas}/>
              </div>

              <div className="containerSelection">
                <Selection setFunction = {setTimeValue}     typeData = "Times"      data={times}/>
              </div>

              <div className="containerSelection">
                <Selection setFunction = {setJogadorValue}  typeData = "Jogadores"  data={jogadores}/>
              </div>

              <div className="containerSelection" id="bottom">
                <Selection setFunction = {setJogoValue}     typeData = "Jogos"      data={jogos}/>
              </div>
            </Paper>
          </FormGroup>
        </div>

        <div className="container">
          <div className="checkboxes">
            <FormGroup>
              <Paper elevation={5}>
                <TransferList setFunction = {setSelections}/>
              </Paper>
            </FormGroup>
          </div>
          <Button variant="contained" color="primary" onClick={sendRequest}>Gerar Relatório</Button>
        </div>
      </div>

      <div className="table">
        { table.length > 0 &&
          <Table tableData = {table} keys ={selections}/>
        }
      </div>
    </div>
  );
}
