import { AppBar, Toolbar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
        <AppBar color="secondary">
          <Toolbar>
            <div className="user">
            <Link className="nav-btn"  href="/user/login">Login</Link>
            <Link className="nav-btn" href='/user/register'>Register</Link>  
            </div>
         
          </Toolbar>
          
        </AppBar>
  );
}