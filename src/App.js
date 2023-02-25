import logo from './logo.svg';
import './App.css';
import MovieFilter from "./Components/MovieFilter";
import MovieList from "./Components/MovieList";
import { useState } from "react";

function App() {

  return (
    <div className="App">
      <div style={{height:'100px',border:'1.5px solid lightgrey', alignItems:'center', justifyContent:'center',display:'flex'}}>
      <span style={{display:'flex',border:'1.5px solid lightgrey'}}>MOFLIX : Welcome To Your Movie Library</span>
      </div>
      
     {/* <Filter functionino={change}/> */}

      <MovieList />
    </div>
  );
}

export default App;
