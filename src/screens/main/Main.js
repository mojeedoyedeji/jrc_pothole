import React, { useEffect, useState } from 'react';
import { useDispatch,  useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import 'react-alice-carousel/lib/alice-carousel.css';

import ImageHandler from '../../components/main/ImageHandler';
import ThreeDimension from '../../components/main/ThreeDimension';
import Analysis from '../../components/main/Analysis';
import BottomPanel from '../../components/main/BottomPanel';
import TitlePanel from '../../components/main/TitlePanel';

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
      backgroundColor:"#000000",
    }
};






export default function Main(){
    const history = useHistory();
    const dispatch = useDispatch();
    const instrument = useSelector(state => state.instrument.data);
    const [counter, setCounter] = useState(0)

  
    return(
      <div styles={styles.main}>
      <Grid style={{height:"100vh", backgroundColor:"#ffff"}} justifyContent="center" 
      alignItems="center" container direction="row">
        <Grid item md={8} style={{marginTop:20, padding:0, height:"100%"}}>
              <Grid container direction="column" justifyContent="space-around">
              
              <TitlePanel />
              <div style={{marginTop:20}}/>
             
              
              <Grid container direction="row" justifyContent="center" spacing={2}>
                 <Grid item md={5} style={{height:"100%"}}>
                  <ImageHandler />
                 </Grid>
                 <Grid item md={4}>
                  <ThreeDimension />
                 </Grid>
                 <Grid item md={3}>
                  <Analysis />
                 </Grid>
                </Grid>

           
              
            <BottomPanel />

              </Grid>
              
                
        </Grid>
      </Grid>     
      </div>
    )
}
