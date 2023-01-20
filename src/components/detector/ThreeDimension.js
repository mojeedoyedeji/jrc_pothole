import React, {Suspense, useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

const styles ={
    card:{
        borderRadius:20,
        borderWidth:2,
        //borderColor:'#DCDCDC',
        borderColor:"#440381",
        borderStyle:'solid',
        height:'350px',
        
        //backgroundColor:"#343434",
    }
}

//const modelPath = "https://raw.githubusercontent.com/dwqdaiwenqi/react-3d-viewer/master/site/src/lib/model/DamagedHelmet.gltf";


const base64 = require('base-64');

export default function Main(){

const [form, setForm] = useState({image: "", preview: ""})
const user = "";
const pass = "";
const credentials = user + ":" + pass;

    useEffect(() => {
        getImage();
    }, []);

    async function getImage(){
        //setForm(form => ({...form, image_preview:""}))
        const url = "http://10.14.100.56:5001/get_3D"
        const formData = new FormData();
        formData.append("pothole_no", 0);
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
            setForm(form => ({...form,  image: res, preview: URL.createObjectURL(res)}))
      
          }
        })
        .catch((error) => {
          //var status = {message:"Unexpected error occured", variant: "warning"};
          //this.showMessage(status);
          //console.log(error);
        });
      }

    return(
        <Card style={styles.card} elevation={0}>
            <CardHeader style={{backgroundColor:"#440381"}} 
            title={<Typography style={{color:"#fff"}} variant="body1"><b>3D Visualization </b></Typography>} />
            <CardContent>
            <img
          // style={{ visibility: "hidden" }}
            style={{width:"100%", height: 140}}
            src={form.preview}
            />
            </CardContent>
        </Card>
    )
}