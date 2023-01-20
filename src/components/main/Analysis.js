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
        borderWidth:1,
        borderColor:'#999',
        borderStyle:'solid',
        height:"100%",
        //backgroundColor:"#343434",
    }
}

export default function Main(){
    return(
        <Card style={styles.card} elevation={0}>
            <CardHeader avatar={<InsightsIcon />} 
            title={<Typography variant="h6"><b>Analysis</b></Typography>} />
            <CardContent>

            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <Typography variant="body1">Severity {" "}</Typography>
            <Chip size="small" label={"High"} color="error"/>
            </div>
            
            <div style={{marginTop:20}}/>

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <Metrics title="Accuracy" value={80}/>
            <div style={{marginTop:20}}/>
            <Metrics title="Confidence Score" value={80}/>
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