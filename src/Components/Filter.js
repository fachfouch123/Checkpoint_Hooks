import React from "react";
import { useState } from "react";

function Filter ({data}){
const [newArray,setNewArray] = useState([...data])




    return(
        <div>
            new array 
             {   
                data.map((value, index) => 
                (
                <span key={index}>
                    <p>title : {value.title}</p>
                    <p>description : {value.description}</p>
                    <p>posterURL : {value.posterURL}</p>
                    <p>rating : {value.rating}</p>
                    <p>Movie index : {index}</p>
                </span>
                ))
            }
            
        </div>
    )
}

export default Filter