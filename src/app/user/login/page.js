import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function Login() {
  return (
    <div class="login-container"> 
        <form action="/login" method="post"> 
            <h2>Sign in</h2>
            <TextField className='input' id="outlined-basic" label="Username" variant="outlined" />
            
            <TextField className='input' id="outlined-basic" label="Password" type='password' variant="outlined" />
            
            <Button type='submit' variant='contained' className='submit'>Login</Button>
        </form>
        </div>
  );
}
