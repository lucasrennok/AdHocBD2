import {FormControl, TextField} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';

interface Props {
    typeData: string,
    setFunction ?: any,
    data: string[];
}

export default function Selection(props: Props){
    const handleChange = (value : string) => {
        if(value) props.setFunction(value);
        else props.setFunction('');
    };
    const allThings = props.data[0]

    return(
        <FormControl>
            <Autocomplete
                id="combo-box"
                onChange={(event, value) => handleChange(value as string)}
                options={props.data}
                getOptionLabel={(option) => option}
                style={{ width: 300 }}
                defaultValue= {allThings}
                renderInput={(params) => <TextField {...params} label={props.typeData} variant="outlined"/>}
            />
        </FormControl>
    )
}