import React, {Suspense} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { GLTFModel, AmbientLight, DirectionLight } from "react-3d-viewer";

const styles ={
    card:{
        borderRadius:20,
        borderWidth:1,
        borderColor:'#999',
        borderStyle:'solid',
        height:'550px',
        
        //backgroundColor:"#343434",
    }
}

//const modelPath = "https://raw.githubusercontent.com/dwqdaiwenqi/react-3d-viewer/master/site/src/lib/model/DamagedHelmet.gltf";

const modelPath = "../../3d/floor.gltf";

export default function Main(){
    return(
        <Card style={styles.card} elevation={0}>
            <CardHeader title={<Typography variant="h6"><b>3D Visualization </b></Typography>} />
            <CardContent>
            <GLTFModel position={{x:0, y: 0}} height="500"  src={require("../../3d/spongebob.glb")}>
                <AmbientLight color={0xffffff} />
                <DirectionLight
                color={0xffffff}
                position={{ x: 40, y: 150, z: 100 }}
                />
                <DirectionLight
                color={0xff00ff}
                position={{ x: -100, y: 150, z: -100 }}
                />
            </GLTFModel>
            </CardContent>
        </Card>
    )
}