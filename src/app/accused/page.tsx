
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


export default function Accused() {
  return (
    <div > 
        <form action="/accused" method="post"> 
            <h2>Accused Record</h2>
            <TextField className='input' label='Accused ID'></TextField>

            <TextField className='input' label='Name'></TextField>
            <FormControl className='input'>
                <InputLabel>Gender</InputLabel>
                <Select label='Gender'>
                    <MenuItem>Male</MenuItem>
                    <MenuItem>Female</MenuItem>
                </Select>
            </FormControl>
            
            <TextField className='input' label='Status'></TextField>

         
        </form> 
        </div>
  );
}

   