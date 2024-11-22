import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Register() {
  return (
    <div > 
        <form action="/register" method="post"> 
            <h2>Sign up</h2>
  
          <TextField className="input" label="First Name"></TextField>
          <TextField className="input" label="Last Name"></TextField>
          <TextField className="input" label="Email"></TextField>
          <TextField className="input" label="Handle"></TextField>
          <TextField className="input" label="Password"></TextField>
          <Button type='submit' variant='contained' className='submit'>Register</Button>

        </form>
    </div>
  );
}