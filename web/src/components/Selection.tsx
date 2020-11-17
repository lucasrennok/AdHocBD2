import {FormControl, FormHelperText, MenuItem, Select, TextField} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';

interface Props {
    typeData: string,
    data: string[];
}

export default function Selection(props: Props){
    const [valueSelection, setValue] = React.useState('');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setValue(event.target.value as string);
    };
    const allThings = props.data[0]

    return(
        <FormControl>
            <Autocomplete
                id="combo-box"
                options={props.data}
                getOptionLabel={(option) => option}
                style={{ width: 300 }}
                defaultValue= {allThings}
                renderInput={(params) => <TextField {...params} label={props.typeData} variant="outlined" />}
            />

            {/* <Select
                value={liga}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}>
                {props.ligas.map((value, index) => {
                    return <MenuItem value={index ? value : ""}>{value}</MenuItem>
                })}
                
            </Select>
            <FormHelperText>Selecione uma ou todas as ligas para a consulta</FormHelperText> */}
        </FormControl>
    )
}