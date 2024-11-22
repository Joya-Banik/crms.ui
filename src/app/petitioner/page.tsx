
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';


export default function Petitioner() {
  return (
    <div> 
        <form action="/petitioner" method="post"> 
            <h2>Petitioner Record</h2>
            <TextField className='input' label='NID'></TextField>
            <TextField className='input' label='Name'></TextField>

            <TextField className='input' label='Contact'></TextField>

        </form> 
        </div>
  );
}

   