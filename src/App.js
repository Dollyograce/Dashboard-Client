import logo from './logo.svg';
import './App.css';
import OutlinedCard from "./components/weather/Weather";
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <OutlinedCard></OutlinedCard>
      </Grid>
      
    </Grid>
  );
}
export default App;
