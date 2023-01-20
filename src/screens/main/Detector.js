import React, { useEffect, useState, useRef } from 'react';
import { useDispatch,  useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography  from '@mui/material/Typography'; 
import 'react-alice-carousel/lib/alice-carousel.css';

import ImageHandler from '../../components/detector/ImageHandler';
import ThreeDimension from '../../components/detector/ThreeDimension';
import Analysis from '../../components/detector/Analysis';
import BottomPanel from '../../components/detector/BottomPanel';
import TitlePanel from '../../components/detector/TitlePanel';
import VideoSource from '../../components/detector/VideoSource';
import ImageSource from '../../components/detector/ImageSource';
import Detections from '../../components/detector/Detections';
import Detected from '../../components/detector/Detected';

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
        <Grid item md={10} style={{marginTop:0, padding:0, height:"84%"}}>
        <TitlePanel />
              
              <div style={{marginTop:20}}/>

              <Grid container direction="row" style={{height:"100%"}}>
                <Grid item md={5} xs={12}>
                <Box sx={{padding:2,  
                borderRadius:5, height:"95%", width: '90%', backgroundColor:"#F5EBFE" }}>

                <Grid container direction="row" justifyContent="space-between">
                <Grid item>
                    <Typography variant="h6"> </Typography>
                </Grid>

                  
                  </Grid>

                  <div style={{marginTop:20}}>
                  <VideoSource updateDetections={handleUpdateDetections} />
                    
                  
                  </div>
                  
                  
                    
                    </Box>
                </Grid>
                <Grid item md={7} xs={12}>
                    <Grid container direction="column" justifyContent={"space-between"} style={{height:"100%"}}>
                    <Grid item>

                      <Grid container direction="row" spacing={1}>
                        <Grid item md={6}>
                        <Card  elevation={0} style={{ borderWidth:2, borderColor:'#440381',borderStyle:'solid',  
                        borderRadius:10,  height:"100%"}}>
                            <CardHeader style={{backgroundColor:"#440381"}} 
                          title={<Typography style={{color:"#fff"}} variant="body1"><b>Detection</b></Typography>} />
                       
                        <Detected count={potHoles} />
                        </Card>
                        </Grid>
                        <Grid item md={6}>
                        <div style={{marginTop:0, position:"relative", height:200}}>
                        <Card  elevation={0} style={{ borderWidth:2, borderColor:'#440381',borderStyle:'solid',  
                        borderRadius:10, height:"100%"}}>
                            <CardHeader style={{backgroundColor:"#440381"}} 
                          title={<Typography style={{color:"#fff"}} variant="body1"><b>Map</b></Typography>} />
                        <CardContent>
                     
                        <SmallMapDisplay latitude={26.301220} longitude={50.148100} />
                        </CardContent>
                        
                        </Card>
                      
                      </div>
                        </Grid>
                       
                      </Grid>
                     

                      </Grid>
                      <Grid item >
                        <Card  elevation={0} style={{ borderWidth:2, borderColor:'#440381',borderStyle:'solid',  
                        borderRadius:10, minHeight:"150px"}}>
                           <CardHeader style={{backgroundColor:"#440381"}} 
                          title={<Typography style={{color:"#fff"}} variant="body1"><b>Potholes </b></Typography>} />
                          <CardContent>
                         
                          <Detections count={potHoles} />
                          </CardContent>
                          
                        </Card>
                        
                      </Grid>
                      <Grid item>
                      <Grid container spacing={1} direction="row">
                      <Grid item md={6} xs={12}>
                        <ThreeDimension />
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Analysis count={potHoles} />
                      </Grid>
                      </Grid>
                      </Grid>
                      

                    </Grid>
                   
                   
                </Grid>

             </Grid>
             
              
              
           
              
           

              </Grid>
              
                
      </Grid>     
      </div>
    )
}
