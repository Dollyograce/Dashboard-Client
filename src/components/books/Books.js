import React, {useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function BookWidget() {
    const [books, setBooks] = useState(undefined);
    const [index, setIndex] = useState(0);
    const [currentBook, setCurrentBook] = useState(undefined);
    
    useEffect(() =>{
        axios.get("http://localhost:8080/top21books")
        .then(response => {
            setBooks(response.data);
            setCurrentBook(response.data[0]);
        });
    },[]);
    
    const nextBook = ()=>{
        const size = books.length;
        const nextIndex = index + 1;
        if(nextIndex > size){
            setCurrentBook(books[0]);
            setIndex(0);
        }else{
            setIndex(nextIndex);
            setCurrentBook(books[nextIndex])
        }
    }
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="500"
        image={currentBook?.cover}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Top Books in 2021
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Name : { currentBook?.name}
            <br />
            Winning Category: {currentBook?.winning_category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={nextBook}>Next</Button>

      </CardActions>
    </Card>
  );
}
