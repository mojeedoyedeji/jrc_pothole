import {useState} from 'react';
import {useSelector} from 'react-redux';
import store from '../store/index';


import {uri} from '../constants/settings';



export async function defaultHandler(request, body){
  const base64 = require('base-64');
  var host = "";
  if(uri.mode == "test"){
    host = uri.test;
  }else{
    host = uri.live;
  }
  
  const user = "mojeed.oyedeji@gmail.com";
  const pass = "omopeyemi";

  const credentials = user + ":" + pass;
  let response = [], status = "ok";
    const url = host + request;
    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-type': 'application/json',
        'Authorization': "Basic " + base64.encode(credentials),
      },
      body: JSON.stringify(body)
    }).then((response) => response.json())
      .then((res) => {
        return res
      })
      .catch((err) => {
        status = "error";

      })
      return [response, status]
}
