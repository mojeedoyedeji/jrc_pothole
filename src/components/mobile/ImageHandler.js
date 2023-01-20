import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography  from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ImageIcon from '@mui/icons-material/Image';
import ImageCard from './ImageCard';


const color1 = "#000000";
const color2 = "#ffffff";
const styles ={
    card:{
        borderRadius:30,
        borderColor:'#999999',
        height:"100%",
        borderWidth:1,
        borderStyle:"solid"
        //backgroundColor:"#343434",
        //background: `linear-gradient(to top,  ${color1} 0%,${color2} 100%)`,
    }
}

export default function Main(){
    return(
        <Card style={styles.card} elevation={0}>
            <CardContent>
                <MainImage />
                <div style={{marginTop:40}} />
                <Divider />
                <div style={{marginTop:40}} />
                <GridImages />
                <div style={{display:"flex", marginTop:40, justifyContent:"center" }}>
                <Pagination count={2} variant="outlined" shape="rounded" />
                </div>      
            </CardContent>
        </Card>
    )
}
function MainImage(){
    return(
        <div>
            <Grid container direction="row" spacing={1}>
                <Grid item md={4}>
                <Card style={{borderRadius:5}} elevation={20}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={require("../../images/main/image1.jpg")}
                        title="green iguana"
                    />
                    </Card>
                </Grid>
                <Grid item>
                    <Typography variant="h4"><b>Image 0001.jpg </b></Typography>
                    <div style={{marginTop:15}}/>
                    <Typography variant="body1">Width: 300px</Typography>
                    <Typography variant="body1">Height: 100px</Typography>
                    <Typography variant="body1">Contains 10 pot holes</Typography>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="flex-end" spacing={1} alignItems="center">
                <Grid item>
                <IconButton color="primary" size="small" variant="outlined">
                    <ChevronLeftIcon fontSize="large" />
                </IconButton>
                </Grid>
                <Grid item>
                <Typography variant="body1" color="textSecondary"> 5/100 </Typography>
                </Grid>
                <Grid item>
                <IconButton color="primary" size="small">
                    <ChevronRightIcon fontSize="large" />
                </IconButton>
                </Grid>
               
            </Grid>
        </div>
    )
}
function GridImages(){
    return(
        <Grid container direction='row' spacing={1}>
                <Grid item md={2}>
                    <ImageCard />
                </Grid>
                <Grid item md={2}>
                    <ImageCard/>
                </Grid>
                <Grid item md={2}>
                    <ImageCard/>
                </Grid>
                <Grid item md={2}>
                    <ImageCard/>
                </Grid>
                <Grid item md={2}>
                    <ImageCard/>
                </Grid>
                <Grid item md={2}>
                    <ImageCard/>
                </Grid>
                <Grid item md={2}>
                    <ImageCard />
                </Grid>
                <Grid item md={2}>
                    <ImageCard/>
                </Grid>
                <Grid item md={2}>
                    <ImageCard/>
                </Grid>
                <Grid item md={2}>
                    <ImageCard/>
                </Grid>
                <Grid item md={2}>
                    <ImageCard/>
                </Grid>
                <Grid item md={2}>
                    <ImageCard/>
                </Grid>
            
            </Grid>

    )
}