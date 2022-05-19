import React, {useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function CovidNewsWidget() {
        const [covidNews, setCovidNews] = useState(undefined);
        const [index, setIndex] = useState(0);
        const [currentNews, setCurrentNews] = useState(undefined);
        
        
        useEffect(() =>{
            axios.get("http://localhost:8080/covidnews")
            .then(response => {
                setCovidNews(response.data);
                setCurrentNews(response.data[0]);
            });
        },[]);

        const nextNews = ()=>{
            const size = covidNews.length;
            const nextIndex = index + 1;
            if(nextIndex > size){
                setCurrentNews(covidNews[0]);
                setIndex(0);
            }else{
                setIndex(nextIndex);
                setCurrentNews(covidNews[nextIndex])
            }
        }
        

            
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        
        component="img"
        height="140"
        image="https://southkingstownri.com/ImageRepository/Document?documentID=3809"
      />


      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Covid News
        </Typography>
        <Typography variant="body2" color="text.secondary">
            { currentNews?.title}
            <br />
            <a href={currentNews?.url}>{currentNews?.url}</a>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={nextNews}>Next</Button>
      </CardActions>
    </Card>
  );
}
