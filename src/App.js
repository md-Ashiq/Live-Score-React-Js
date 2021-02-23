import logo from './logo.svg';
import './App.css';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from './components/navbar';
import { getMatches } from "./components/Api";
import { Fragment, useEffect, useState } from 'react';
import MyCard from './components/Card';

function App() {
  const [matches, setMatches]= useState([]);
  useEffect (()=> { getMatches()
    .then((data) =>{
       setMatches(data.matches);
     console.log(data.matches);})
    .catch((error) => alert("Could not Load DATA"))
  },[]);
  return (
    <div className="App">
      <Navbar/>
     <Typography variant="h3" style={{marginTop:20}}> Welcome to Live Score App</Typography>
     <Grid container>
        <Grid sm="2"></Grid>
          <Grid sm="8">
      {
      matches.map((match) =>(
        <Fragment>
          {
            (match.type=="Twenty20"? <MyCard key={match.unique_id} match={match}/>:"")
          }
        </Fragment>
        )
  )}    
        </Grid>
      </Grid>
</div>
  );
}

export default App;
