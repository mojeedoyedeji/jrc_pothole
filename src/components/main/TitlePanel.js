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
                <Typography variant="h4"> <b> Pothole Detector </b> </Typography>
            </Grid>

            <Grid item>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                >
                <ToggleButton value="left" aria-label="left aligned">
                    <LightModeIcon />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                    <NightlightIcon />
                </ToggleButton>
                </ToggleButtonGroup>
            </Grid>
            

        </Grid>
    )
}