import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Badge from '@mui/material/Badge';
import DangerousIcon from '@mui/icons-material/Dangerous';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { requirePropFactory } from '@mui/material';

const styles = {
    card:{
        borderRadius:10
    }
}
export default function Main(){
    return(
        <Card style={styles.card} elevation={0}>
        
        <CardActionArea>
        <CardMedia
            sx={{ height: 80 }}
            image={require("../../images/main/image1.jpg")}
            title="green iguana"
        />
        </CardActionArea>
        </Card>
    )
}

function ImageIcon(props){
    switch(props.severity){
        case "high":
            return (<DangerousIcon />)
        case "medium":
            return (<CrisisAlertIcon />)
        case "minimal":
            return (<ReportProblemIcon />)
    }
}