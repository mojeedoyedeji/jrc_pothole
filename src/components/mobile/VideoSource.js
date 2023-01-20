
import React, {useEffect, useRef, useState} from 'react';
import UploadIcon from '@mui/icons-material/Upload';
import Button  from '@mui/material/Button';
import Slider  from '@mui/material/Slider';
import Typography  from '@mui/material/Typography';
import Pagination  from '@mui/material/Pagination';
import { getFormLabelUtilityClasses } from '@mui/material';

const base64 = require('base-64');

export default function Main(props){

    const videoRef = useRef();
    const [videoSrc , setVideoSrc] = useState("");
    const [frames, setFrames] = useState(0);
    const [potHoles, setPotHoles] = useState(0);
    const [form, setForm] = useState({photo: "", preview: "", upload: 0, image:""});
    const user = "";
    const pass = "";
    const credentials = user + ":" + pass;

    const [page, setPage] = React.useState(1);


    const handleSwitch = (event, value) => {
      setPage(value);
      getFrame(value);
      detectPotHoles(value)
    };

  


    


    async function detectPotHoles(frame){
        const url = "http://10.14.100.56:5001/detect_potholes"
        const formData = new FormData();
        formData.append("frame_no", frame);
        await fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': "Basic " + base64.encode(credentials)
          },
          body:formData,
        })
        .then((response) => response.json())
        .then((res) => {
          console.log("detection")
          console.log(res);
          setPotHoles(res.potholes_count)
          props.updateDetections(res.potholes_count);
        })
        .catch((error) => {
          //var status = {message:"Unexpected error occured", variant: "warning"};
          //this.showMessage(status);
          //console.log(error);
        });
    }

    
    async function getFrame(frame){
        //setForm(form => ({...form, image_preview:""}))
        const url = "http://10.14.100.56:5001/get_frame"
        const formData = new FormData();
        formData.append("frame_no", frame);
        await fetch(url, {
          method: 'POST',
          headers: {
            'Authorization': "Basic " + base64.encode(credentials)
          },
          body:formData,
        })
        .then((response) => response.blob())
        .then((res) => {
          console.log(res)
          if (res.size > 500){
            setForm(form => ({...form,  image: res, image_preview: URL.createObjectURL(res)}))

          }
        })
        .catch((error) => {
          //var status = {message:"Unexpected error occured", variant: "warning"};
          //this.showMessage(status);
          //console.log(error);
        });
      }

  
    async function handleChange(e){
        e.preventDefault()
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        setForm({photo:file, preview: URL.createObjectURL(file), upload: 1});
        const url = "http://10.14.100.56:5001/upload_data"
        fetch(url, {
            method: 'POST',
            headers: {
              'Authorization': "Basic " + base64.encode(credentials)
            },
            body:formData,
          })
          .then((response) => response.json())
          .then((res) => {
            //dispatch(notify({message: "Image uploaded", status: "success"}))
            //dispatch(wait(false));
            //props.set(res.response.image);
            console.log(res);
            setFrames(res.frames)
            
          })
          .catch((error) => {
            //console.log(error)
            //setForm({photo: "", preview: "", upload: 0})
            //dispatch(notify({message: "Image upload failed, try again", status: "error"}))
            //dispatch(wait(false));
          });
        }
       
        function valuetext(value) {
          return `${value}`;
      }

    return(
        <div>

            {form.preview && 
                <video
                // style={{ visibility: "hidden" }}
                style={{width:"100%"}}
                id="video"
                src={form.preview}
                //src="http://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
                controls
              ></video>
            }

            
            

           

            <div style={{marginTop:20}}>
           
            {form.upload == 0 && 
                  <div style={{height:300, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                  <Typography variant="body1">To get started, please upload a video</Typography>
      
                  <Button size="small" component="label" variant="outlined" endIcon={<UploadIcon />}>
                  <Typography variant="body1">Upload</Typography>
                  <input onChange={handleChange} hidden accept="video/*" multiple type="file" />
                  </Button>
                  </div>
            }
          
            

            
            <div style={{display:"flex", justifyContent:"center"}}>
            <Pagination page={page} onChange={handleSwitch} count={frames - 1} variant="outlined" />
              
              
            
            </div>

            <div style={{marginTop:10}}>
            <img
                    // style={{ visibility: "hidden" }}
                    style={{width:"100%", height: 250}}
                    id="video"
                    ref={videoRef}
                    src={form.image_preview}
                  />
            </div>
            
            
          

        
            </div>

           

        


            
        </div>
    )
}