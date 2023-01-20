import React from 'react';
import Typography  from '@mui/material/Typography';
import Grid  from '@mui/material/Grid';
import ToggleButton  from '@mui/material/ToggleButton';
import ToggleButtonGroup  from '@mui/material/ToggleButtonGroup';

import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Main(){
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
    return(
        <Grid container direction="row" justifyContent="space-between">
            <Grid item>
                <Typography variant="h6"> <b> Pothole Detector </b> </Typography>
            </Grid>

            
            

        </Grid>
    )
}