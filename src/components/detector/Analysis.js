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
        height:'350px',
        backgroundColor:"#440381"
        //backgroundColor:"#343434",
    }
}

function generateRandom(maxLimit = 100){
  let rand = Math.random() * maxLimit;
  console.log(rand); // say 99.81321410836433

  rand = Math.floor(rand); // 99

  return rand;
}

export default function Main(props){
    return(
        <Card style={styles.card} elevation={0}>
            <CardHeader avatar={<InsightsIcon style={{color:"#fff"}} />} 
            title={<Typography style={{color:"#fff"}} variant="body1"><b>Analysis</b></Typography>} />
            <CardContent>

            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <Typography variant="body1" style={{color:"#fff"}}><b>Number of Potholes {" "}</b></Typography>
            <Chip size="small" label={props.count} color="error"/>
            </div>
            
            <div style={{marginTop:20}}/>

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <Metrics title="High" value={generateRandom(10)*props.count}/>
            <div style={{marginTop:20}}/>
            <Metrics title="Medium" value={generateRandom(10)*props.count}/>
            <div style={{marginTop:20}}/>
            <Metrics title="Low" value={generateRandom(10)*props.count}/>
            </div>
           

            </CardContent>
        </Card>
    )
}

function Metrics(props){
    return(
      <Box>
      <Typography style={{color:"#fff"}}> {props.title} </Typography>
      <LinearProgress  color="success" variant="determinate"  {...props}>
      <Box>
        <Typography style={{color:"#fff"}} variant="h6" component="div" color="text.secondary">
          {`${Math.round(props.value)}`}
        </Typography>
      </Box>
      </LinearProgress>
    </Box>
    )
}