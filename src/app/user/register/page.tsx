import { TextField } from "@mui/material";
import Image from "next/image";

export default function Register() {
  return (
    <div>
        <form>
          <TextField className="input" label="First Name"></TextField>
          <TextField className="input" label="Last Name"></TextField>
          <TextField className="input" label="Email"></TextField>
          <TextField className="input" label="Handle"></TextField>
          <TextField className="input" label="Password"></TextField>

        </form>
    </div>
  );
}