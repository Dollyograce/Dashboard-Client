import React, {useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function BoredActivityWidget() {
        const [boredActivity, setBoredActivity] = useState(undefined);
        const [index, setIndex] = useState(0);
        const [currentActivity, setCurrentActivity] = useState(undefined);
        
        
        useEffect(() =>{
            axios.get("http://localhost:8080/boredactivity")
            .then(response => {
                setBoredActivity(response.data);
                setCurrentActivity(response.data[0]);
            });
        },[]);

        const nextActivity = ()=>{
            const size = boredActivity.length;
            const nextIndex = index + 1;
            if(nextIndex > size){
                setCurrentActivity(boredActivity[0]);
                setIndex(0);
            }else{
                setIndex(nextIndex);
                setCurrentActivity(boredActivity[nextIndex])
            }
        }
        

            
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        
        component="img"
        height="140"
        image="https://express-images.franklymedia.com/2426/sites/32/2020/03/26115135/Inside-2.jpg"
      />


      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
            { currentActivity?.activity}
            <br />
            <a href={currentActivity?.link}>{currentActivity?.link}</a>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={nextActivity}>Next</Button>
      </CardActions>
    </Card>
  );
}
