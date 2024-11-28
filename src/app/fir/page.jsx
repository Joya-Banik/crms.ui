'use client'

import { Button, Dialog, TextField } from "@mui/material"
import { useRouter } from 'next/navigation'
import { useState } from "react"

export default function Fir() {
    const router = useRouter();

    
    return(<div className="top-border horizontal">
        <div className="table-view">
            <div className="horizontal">
            <h2>List of FIR</h2>
        </div>
        <table>
            <tr className="thead">
                <td>Fir ID</td>
                <td>Date Lodged</td>
                <td>Incident Date</td>
                <td>Incident Place</td>
                <td>Incident Time</td>
            </tr>
           
        </table>
        </div>
    </div>)
}