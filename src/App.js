import logo from './logo.svg';
import './App.css';
import OutlinedCard from "./components/weather/Weather";
import BookWidget from "./components/books/Books";
import { Grid } from '@mui/material';
import CovidNewsWidget from './components/CovidNews/covidnews';
import BoredActivityWidget from './components/Bored/Bored';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item lg={4}>
        <OutlinedCard></OutlinedCard>
        <CovidNewsWidget></CovidNewsWidget>
        <BoredActivityWidget></BoredActivityWidget>
      </Grid>
      <Grid item lg={6}>
        <BookWidget></BookWidget>
      </Grid>

      
    </Grid>
  );
}
export default App;
