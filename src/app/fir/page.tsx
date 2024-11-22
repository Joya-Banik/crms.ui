
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';


export default function FIR() {
  return (
    <div > 
        <form action="/fir" method="post"> 
            <h2>FIR Record</h2>
            <Grid container spacing={2} alignItems="center">
          {/* NID Field */}
          <Grid item xs={4}>
            <label htmlFor="fir_id">FIR_ID:</label>
          </Grid>
          <Grid item xs={8}></Grid>
            <TextField className='input' id="outlined-basic" label="Enter ID" variant="outlined"
            fullWidth
            />
          </Grid>


          <Grid item xs={4}>
            <label htmlFor="date_lodged">Date_Lodged:</label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              className="input"
              id="date_lodged"
              label="Enter date"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <label htmlFor="incident_date">Incident Date:</label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              className="input"
              id="incident date"
              label="Enter datet"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <label htmlFor="incident place">Incident Place:</label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              className="input"
              id="incident place"
              label="Enter place"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <label htmlFor="time_lodged">Incident Time:</label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              className="input"
              id="incident time"
              label="Enter time"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </form> 
        </div>
  );
}

   