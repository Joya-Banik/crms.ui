import { AppBar, Toolbar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
        <AppBar color="primary">
          <Toolbar>
            <div>
              <Link className="nav-btn" href='/petitioner'>Petitioner</Link>
              <Link className="nav-btn" href='/fir'>FIR</Link>
              <Link className="nav-btn" href='/investigate'>Officer</Link>
              <Link className="nav-btn" href='/case'>Case</Link>
              <Link className="nav-btn" href='/accused'>Accused</Link>
              
            </div>
            <div className="user">
            <Link className="nav-btn"  href="/user/login">Login</Link>
            <Link className="nav-btn" href='/user/register'>Register</Link>  
            </div>
          </Toolbar>
          
        </AppBar>
  );
}