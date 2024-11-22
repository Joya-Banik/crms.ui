
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';


export default function  Officer() {
  return (
    <div> 
        <form action="/investigate" method="post"> 
            <h2>Investigation Officer Record</h2>
            <TextField className='input' label="Officer ID"></TextField>
            <TextField className='input' label='Name'></TextField>
              <TextField className='input' label='Rank'></TextField>
        </form> 
        </div>
  );
}

   