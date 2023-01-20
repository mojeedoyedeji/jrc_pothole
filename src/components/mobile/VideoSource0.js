
import React, {useEffect, useRef, useState} from 'react';
import UploadIcon from '@mui/icons-material/Upload';
import Button  from '@mui/material/Button';
import Grid  from '@mui/material/Grid';
import Stack  from '@mui/material/Stack';
import Typography  from '@mui/material/Typography';
//const extractFrames = require('ffmpeg-extract-frames')

export default function Main(){

    const videoRef = useRef();
    const canvasRef = useRef();
    const [arr, setArr] = useState([]);
    const [frame, setFrame] = useState(0);


    function getImage(ind){
        const v = videoRef.current;
        const duration = v.duration;
        v.currentTime = ind;
        const newCanvas = document.createElement("canvas");
              const newCtx = newCanvas.getContext("2d");
              newCtx.drawImage(
                videoRef.current,
                0,
                0,
                videoRef.current.videoWidth,
                videoRef.current.videoHeight
        );
        return newCanvas.toDataURL();
        //console.log("dataUrl", newCanvas.toDataURL());
    }



    const capture = () => {
        const v = videoRef.current;
        const duration = v.duration;
        const totalSecond = parseInt(duration, 10);
        Array(totalSecond + 1)
          .fill(null)
          .forEach((_, index) => {
            setTimeout(() => {
              v.currentTime = index;
              canvasRef.current.width = videoRef.current.videoWidth;
              canvasRef.current.height = videoRef.current.videoHeight;
              canvasRef.current
                .getContext("2d")
                .drawImage(
                  videoRef.current,
                  0,
                  0,
                  videoRef.current.videoWidth,
                  videoRef.current.videoHeight
                );
              
            }, index * 1000);
    });
}

const captureMap = () => {
    const v = videoRef.current;
    const duration = v.duration;
    const totalSecond = parseInt(duration, 10);
    setArr(Array(totalSecond + 1));
    console.log(Array(totalSecond + 1))
}

function renderFrame(index){
    return(
        <Grid item md={3}>
                      <img style={{width:100, height:50}} src={getImage(index)}/>
        </Grid>
    )
}
    useEffect(async () => {
       
    }, []);

    return(
        <div>
            <video
                    // style={{ visibility: "hidden" }}
                    style={{width:"100%"}}
                    id="video"
                    ref={videoRef}
                    src={require("../../videos/video1.mp4")}
                    //src="http://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                    controls
                  ></video>

           

            <div style={{marginTop:20}}>
            <Button variant="outlined" endIcon={<UploadIcon />}><Typography>Upload</Typography></Button>
            <Button onClick={captureMap} variant="outlined" endIcon={<UploadIcon />}><Typography>Upload</Typography></Button>
            </div>

           

            <Grid container direction="row" spacing={2} style={{marginTop:10}}>
            {arr.fill(null).map((item, index) => {
                setTimeout(() => {
                    
                },  index * 1000)
            })}

            
            </Grid>


            
        </div>
    )
}