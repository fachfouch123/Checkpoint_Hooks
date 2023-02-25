import React from "react";
import { useState } from "react";
import MovieFilter from "./MovieFilter";
import Card from "./Card";


function MovieList (){
    const [movieArray,setMovieArray] = useState([])
    const fetchMovieArray = (movieArrayy) => {
        setMovieArray(movieArrayy);
    } 
    // console.log("Filter component");
    
        return(
                <div>
                    <MovieFilter fetchMovieArray={fetchMovieArray}/>
                    Movies List 
                    {movieArray.map((value, index) => 
                    ( 
                        <p>{value.title}</p>                      
                    ))
                }
                </div>
            )
        }
    
    export default MovieList