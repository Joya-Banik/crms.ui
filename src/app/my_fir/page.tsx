'use client'

import { Button, Dialog, TextField } from "@mui/material"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

export default function My_Fir() {
    const [date, setdate] = useState('YYYY-MM-DD');
    const [time, setTime] = useState("HH:MM:SS");
    const [place, setPlace] = useState("");
    const [details, setDetails] = useState("");
    const [accused, setAccused] = useState('');
    useEffect(()=>{fetchMyFir()}, []);

    const fetchMyFir = () =>{

    }

    const save = () => {
        let fir = {
            id : 0,
            date : date + 'T' + time,
            place : place,
            details : details,
            accused : accused
        }

        
    }
    
    return(<div className="top-border horizontal">
        <div>
        <form > 
            <h2>Add or Edit FIR</h2>
            <TextField required value={date} onChange={(e) => {setdate(e.target.value)}} className='input' label="Inscident Date"> </TextField>
            <br></br><br></br>
            <TextField required value={time} onChange={(e) => {setTime(e.target.value)}} className='input' label="Inscident Time"></TextField>
            <br></br><br></br>
            <TextField required value={place} onChange={(e) => {setPlace(e.target.value)}} className='input' label="Place"></TextField>
            <br></br><br></br>
            <TextField required value={details} onChange={(e) => {setDetails(e.target.value)}} className='input' label='Case Details' multiline minRows={3}></TextField>
            <br></br><br></br>
            <TextField value={accused} onChange={(e) => {setAccused(e.target.value)}} label="Accused(Optional)" className='input'></TextField>
            <br></br><br></br>
            <Button className='submit' variant='contained'>Save</Button>
        </form> 
        </div >
        
        <div className="table-view">
            <div className="horizontal">
            <h2>List of FIR</h2>
        </div>
        <table>
            <tr className="thead">
                <td>Fir ID</td>
                <td>Date LOdged</td>
                <td>Incident Date</td>
                <td>Incident Place</td>
                <td>Incident Time</td>
            </tr>
           
        </table>
        </div>
    </div>)
}