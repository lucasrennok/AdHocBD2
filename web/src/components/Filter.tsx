import React from 'react';
import { FormControl, InputLabel, Paper, Select, MenuItem, TextField, Button } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { options } from '../consts/consts'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 200,
      margin: '1rem',
    },
    paper: {
        minWidth: 1050,
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
  }),
);

export default function Filter(props: any){
    const classes = useStyles();                                                                                                                                                        
    const [s1, sets1] = React.useState('');
    const [s2, sets2] = React.useState('');
    const [s3, sets3] = React.useState('');

    //@ts-ignore
    let menuItens = [];

    options.forEach((option : any) => {
        menuItens.push(<MenuItem value={option}>{option}</MenuItem>)
    })

    return(
        <Paper elevation={5} className={classes.paper}> 
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Campos</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={s1}
                onChange={(e) => {sets1(e.target.value as string)}}>
                    {//@ts-ignore 
                    menuItens}
                </Select>
            </FormControl>  
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Comparadores</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={s2}
                onChange={(e) => {sets2(e.target.value as string)}}>
                    <MenuItem value={'<'}>Menor que</MenuItem>
                    <MenuItem value={'>'}>Maior que</MenuItem>
                    <MenuItem value={'<='}>Menor/igual que</MenuItem>
                    <MenuItem value={'>='}>Maior/igual que</MenuItem>
                    <MenuItem value={'='}>Igual a</MenuItem>
                    <MenuItem value={'!='}>Diferente de</MenuItem>
                </Select>
            </FormControl> 
            <FormControl className={classes.formControl}>
                <TextField id="standard-basic3" label="Valor" onChange={(e) => {sets3(e.target.value)}}/>
            </FormControl>

            <FormControl className={classes.formControl}>
                <Button variant="contained" color="primary" onClick={() => {props.sendValues({id: props.id, selection: s1, comparator: s2, constraint: s3})}}>Confirmar Filtro</Button>
            </FormControl>
            
        </Paper>
    )
}