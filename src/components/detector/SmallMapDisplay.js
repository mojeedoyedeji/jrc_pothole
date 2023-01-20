import React, {useState, useRef, useEffect} from 'react';

import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import Button from '@mui/material/Button';

import {TextField, Typography, Divider, List, ListItem} from '@mui/material';
import { Map, Marker,  GoogleApiWrapper } from 'google-maps-react';
import {keys} from '../../constants/api';


function MapComponent(props) {
const [location, setLocation] = useState(props.location)

const ref = useRef();

const onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  const onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


useEffect(() => {
}, []);



function updateCoords(coords){
  this.setState({latitude: coords.latitude,
                longitude: coords.longitude})
}


function onMarkerDragEnd(coord){
  const { latLng } = coord;
  //setLatlng({lat:latLng.lat(), lng:latLng.lng()})
  //getKey(latLng.lat(), latLng.lng())
}

      return (
        <div>
              <Map
                  google = {props.google}
                  zoom={17}
                  onRef={(ref) => {this.mapRef = ref;}}
                  style={{height:'60%',width:'93%', marginTop:0}}
                  center = {{ lat: props.latitude, lng: props.longitude}}
                  initialCenter={{ lat: props.latitude, lng:props.longitude}}>
                  <Marker  draggable={false}
                  position={{ lat: props.latitude, lng: props.longitude}}
                  name={"You're here"}/>
              </Map>
        </div>
      );
}

export default GoogleApiWrapper({
    apiKey: keys.google
  })(MapComponent);

//export default withStyles(styles, { withTheme: true })(FormDialog);
