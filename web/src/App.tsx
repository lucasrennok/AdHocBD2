import React from 'react';
import { FormGroup } from '@material-ui/core'
import CheckOption from './components/CheckOption'
import Selection from './components/Selection'
import { options }from './consts/consts';
import './App.css';

export default function App() {
  let ligas = ['Todas as ligas', 'liga1', 'liga2', 'liga3'];

  return (
    <div className="home-page">

      <div className="selections">
        <FormGroup>
          <Selection ligas={ligas}/>
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
