import React, { useEffect, useState, useRef } from 'react';
import { useDispatch,  useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography  from '@mui/material/Typography'; 
import 'react-alice-carousel/lib/alice-carousel.css';

import ImageHandler from '../../components/mobile/ImageHandler';
import ThreeDimension from '../../components/mobile/ThreeDimension';
import Analysis from '../../components/mobile/Analysis';
import BottomPanel from '../../components/detector/BottomPanel';
import TitlePanel from '../../components/mobile/TitlePanel';
import VideoSource from '../../components/mobile/VideoSource';
import ImageSource from '../../components/mobile/ImageSource';
import Detections from '../../components/mobile/Detections';
import Detected from '../../components/mobile/Detected';

import ImageIcon from '@mui/icons-material/Image';
import MovieIcon from '@mui/icons-material/Movie';
import ToggleButton  from '@mui/material/ToggleButton';
import ToggleButtonGroup  from '@mui/material/ToggleButtonGroup';
import { Player } from 'video-react';
import SmallMapDisplay from '../../components/detector/SmallMapDisplay';

const classes = {
    root:{
        marginTop:10
    }
}

const styles = {
    media: {
      height: '100%',
      paddingTop: '75%', // 16:9,
      marginTop:'30'
    },
    main:{
      //backgroundColor:"#000000",
    }
};






export default function Main(){
    const history = useHistory();
    const videoRef = useRef();
    const dispatch = useDispatch();
    const instrument = useSelector(state => state.instrument.data);
    const [counter, setCounter] = useState(0);
    const [source, setSource] = React.useState('video');
    const [potHoles, setPotHoles] = useState(0);


    const handleSource = (event, newSource) => {
      setSource(newSource);
    };

 

    function handleUpdateDetections(value){
      console.log("detections is");
      setPotHoles(value)
    }
  
    return(
      <div>
      <Grid style={{height:"100vh", backgroundColor:"#ffff"}} justifyContent="center" 
      alignItems="center" container direction="row">
        <Grid item xs={11} style={{marginTop:0, padding:0, height:"84%"}}>
        <TitlePanel />
              
              <div style={{marginTop:20}}/>

              <Box sx={{padding:2, 
                borderRadius:5, height:"95%", width: '90%', backgroundColor:"#E5E4E2" }}>

                <Grid container direction="row" justifyContent="space-between">
                <Grid item>
                    <Typography variant="h6"> </Typography>
                </Grid>

                </Grid>

                  <div style={{marginTop:20}}>
                  <VideoSource updateDetections={handleUpdateDetections} />
                 
                  
                  </div>
                  
                  
                    
              </Box>

              <div style={{marginTop:20}}/>

              <Card  elevation={0} style={{ borderWidth:2, borderColor:'#400080',borderStyle:'solid',  
                        borderRadius:10}}>
                        <CardContent>
                          <Typography variant="body1"><b>Detection</b></Typography>
                         
                        </CardContent>
                        <Detected count={potHoles} />
                    </Card>

                    <div style={{marginTop:20}}/>

                    <div style={{marginTop:0, position:"relative", height:200}}>
                        <Card  elevation={0} style={{ borderWidth:2, borderColor:'#32CD32',borderStyle:'solid',  
                        borderRadius:10, height:200}}>
                        <CardContent>
                        <Typography variant="body1"><b>Map</b></Typography>
                        <SmallMapDisplay latitude={26.301220} longitude={50.148100} />
                        </CardContent>
                        
                        </Card>
                      
                      </div>

                      <div style={{marginTop:20}}/>

                      <Card  elevation={0} style={{ borderWidth:2, borderColor:'#32CD32',borderStyle:'solid',  
                        borderRadius:10, minHeight:"150px"}}>
                          <CardContent>
                          <Typography variant="body1"><b>PotHoles</b></Typography>
                          <Detections count={potHoles} />
                          </CardContent>
                          
                        </Card>

                        <div style={{marginTop:20}}/>
                        <ThreeDimension />

                        <div style={{marginTop:20}}/>

                        <Analysis count={potHoles} />

         
             
              
              
           
              
           

              </Grid>
              
                
      </Grid>     
      </div>
    )
}
