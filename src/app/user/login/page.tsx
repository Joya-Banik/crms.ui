"use client"

import { UserLogin } from '@/app/dto/userlogin';
import loginuser from '@/app/service/user';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = async () =>{
    const user : UserLogin = {
      username : username,
      password : password,
    }
    const res = await loginuser(user);
    console.log(res);
    if(res.success){
      localStorage.setItem('user', res.token);
    }
    
  }

  return (
    <div> 
        <form> 
            <h2>Sign in</h2>
            <TextField className='input' id="username" label="Username" value={username} variant="outlined" onChange={(e) => {setUsername(e.target.value)}} />
            <TextField className='input' id="password" label="Password" value={password} type='password' variant="outlined" onChange={(e) => {setPassword(e.target.value)}}/>
            <Button onClick={() => {login()}} variant='contained' className='submit'>Login</Button>
        </form>
      </div>
  );
}
