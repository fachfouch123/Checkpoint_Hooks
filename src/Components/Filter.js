import React from "react";
import { useState } from "react";
import MovieFilter from "./MovieFilter";
import Card from "./Card";


function Filter (){
const [movieArray,setMovieArray] = useState([])
const fetchMovieArray = (movieArrayy) => {
    setMovieArray(movieArrayy);
} 
console.log(movieArray);

    return(
            <div>
                <MovieFilter fetchMovieArray={fetchMovieArray}/>
                this is movieArray {movieArray.map((value, index) => 
                (<Card>
                <span key={index}>
                    <p>title : {value.title}</p>
                    <p>description : {value.description}</p>
                    <p>posterURL : {value.posterURL}</p>
                    <p>rating : {value.rating}</p>
                    <p>Movie index : {index}</p>
                </span>
                </Card>))
            }
            </div>
        )
    }

export default Filter