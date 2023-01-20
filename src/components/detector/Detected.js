import React, { useEffect, useState } from 'react';


import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';

const base64 = require('base-64');

export default function Main(props){

const [form, setForm] = useState({image: "", preview: ""})
const user = "";
const pass = "";
const credentials = user + ":" + pass;

useEffect(() => {
    getPotHole();
}, [props.count]);



async function getPotHole(){
  //setForm(form => ({...form, image_preview:""}))
  const url = "http://10.14.100.56:5001/get_result"
  const formData = new FormData();
  formData.append("res_no", 0);
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
       <div style={{marginTop:0}}>
          {form.preview != "" && 
          <img
          // style={{ visibility: "hidden" }}
          style={{width:"100%", height: 138}}
          src={form.preview}
        />}
        </div>
        )
       
}