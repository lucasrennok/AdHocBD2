import {FormControl, FormHelperText, MenuItem, Select} from '@material-ui/core'
import React from 'react';

interface Props {
    ligas: string[];
}

export default function Selection(props: Props){
    const [liga, setLiga] = React.useState('');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLiga(event.target.value as string);
    };

    return(
        <FormControl>
            <Select
                value={liga}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}>
                {props.ligas.map((value, index) => {
                    return <MenuItem value={index ? value : ""}>{value}</MenuItem>
                })}
                
            </Select>
            <FormHelperText>Selecione uma ou todas as ligas para a consulta</FormHelperText>
        </FormControl>
    )
}