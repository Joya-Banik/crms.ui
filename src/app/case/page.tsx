
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';


export default function Case() {
  return (
    <div > 
        <form action="/case" method="post"> 
            <h2>Case Record</h2>
            <TextField className='input' label='Case ID'></TextField>
            <TextField className='input' label='Case Details'></TextField>
            <TextField className='input' label='Case Status'></TextField>
            <TextField className='input' label='Section of Law'></TextField>
        </form> 
        </div>
  );
}

   