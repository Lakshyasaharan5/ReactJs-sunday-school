import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { filterButtonProps } from '../../types/interfacesAndTypes';


const FilterButton = (props:filterButtonProps) => {
  return (
    <FormControl sx={{m:1}}>
        <Select
        sx={{width: 120,height: 40,border: "1px "}}
        value={props.meetingsDisplay}
        onChange={props.handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem value="meetings">meetings</MenuItem>
            <MenuItem value="series">series</MenuItem>
        </Select>
    </FormControl>
  )
}

export default FilterButton