import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';

import InsightsIcon from '@mui/icons-material/Insights';

const styles ={
    card:{
        borderRadius:20,
        borderWidth:2,
        borderColor:'#808000',
        borderStyle:'solid',
        height:'350px'
        //backgroundColor:"#343434",
    }
}

export default function Main(props){
    return(
        <Card style={styles.card} elevation={0}>
            <CardHeader avatar={<InsightsIcon />} 
            title={<Typography variant="body1"><b>Analysis</b></Typography>} />
            <CardContent>

            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <Typography variant="body1"><b>Number of PotHoles {" "}</b></Typography>
            <Chip size="small" label={props.count} color="error"/>
            </div>
            
            <div style={{marginTop:20}}/>

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <Metrics title="High" value={80}/>
            <div style={{marginTop:20}}/>
            <Metrics title="Medium" value={80}/>
            <div style={{marginTop:20}}/>
            <Metrics title="Low" value={80}/>
            </div>
           

            </CardContent>
        </Card>
    )
}

function Metrics(props){
    return(
      <Box>
      <Typography> {props.title} </Typography>
      <LinearProgress variant="determinate"  {...props}>
      <Box>
        <Typography variant="h6" component="div" color="text.secondary">
          {`${Math.round(props.value)}`}
        </Typography>
      </Box>
      </LinearProgress>
    </Box>
    )
}