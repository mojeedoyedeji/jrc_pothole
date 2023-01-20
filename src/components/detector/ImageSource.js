import React, {useRef} from 'react';
import UploadIcon from '@mui/icons-material/Upload';
import IconButton  from '@mui/material/IconButton';
import Button  from '@mui/material/Button';
import Typography  from '@mui/material/Typography';

export default function Main(){
    const videoRef = useRef()
    return(
        <div>
            <img
                    // style={{ visibility: "hidden" }}
                    style={{width:"100%", height: 350}}
                    id="video"
                    ref={videoRef}
                    src={require("../../images/main/image2.jpg")}
                  />
            <div style={{marginTop:20}}>
                <Button variant="outlined" endIcon={<UploadIcon />}><Typography>Upload</Typography></Button>
            </div>
        </div>
    )
}