'use client'

import { Button, Dialog, TextField } from "@mui/material"
import { useRouter } from 'next/navigation'
import { useState } from "react"

export default function Accused() {
    const router = useRouter();
    return(<div className="top-border horizontal">
        <div>
        <form > 
            <h2>Add or Edit Accused</h2>
            <TextField required className='input' label="Accused ID"> </TextField>
            <TextField required className='input' label="Accused Name"></TextField>
            <TextField required className='input' label="Gender"></TextField>
            <TextField required className='input' label="Age"></TextField>
            <TextField required className='input' label="Status"></TextField>

            <TextField label="Accused(Optional)" className='input'></TextField>

            <Button className='submit' variant='outlined'>Cancel</Button>
            <Button className='submit' variant='contained'>Save</Button>
        </form> 
        </div >
        
        <div className="table-view">
            <div className="horizontal">
            <h2>List of Accused</h2>
        </div>
        <table>
            <tr className="thead">
                <td>Accused ID</td>
                <td>Accused name</td>
                <td>Gender</td>
                <td>Age</td>
                <td>Status</td>
            </tr>
           
        </table>
        </div>
    </div>)
}