import {FormControlLabel, Checkbox} from '@material-ui/core'
import {useState} from 'react'
import React from 'react';

interface Props {
    label: String;
}

export default function CheckOption(props: Props){
    const [checked, setChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(prevChecked => !prevChecked)
    };

    return(
        <FormControlLabel
            control={
            <Checkbox
                checked={checked}
                onChange={handleChange}
                name="check"
                color="primary"
            />
            }
            label={props.label}
        />
    )
}