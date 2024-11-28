'use client'

import { Button, Dialog, TextField } from "@mui/material"
import { useRouter } from 'next/navigation'
import { useState } from "react"

export default function Case() {
    const router = useRouter();
    return(<div className="top-border horizontal">
        <div>
        <form > 
            <h2>Add or Edit Case</h2>
            <TextField required className='input' label="Case_ID"> </TextField>
            <TextField required className='input' label="Case Details"></TextField>
            <TextField required className='input' label="Case Status"></TextField>
            <TextField required className='input' label='Section of Law'></TextField>
          

            <Button className='submit' variant='outlined'>Cancel</Button>
            <Button className='submit' variant='contained'>Save</Button>
        </form> 
        </div >
        
        <div className="table-view">
            <div className="horizontal">
            <h2>List of Case</h2>
        </div>
        <table>
            <tr className="thead">
                <td>Case ID</td>
                <td>Case Details</td>
                <td>Case status</td>
                <td>Section of law</td>
              
            </tr>
           
        </table>
        </div>
    </div>)
}