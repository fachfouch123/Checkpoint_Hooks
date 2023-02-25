import React from 'react'
import {useState} from "react"
import Card from './Card'

function MovieFilter ({fetchMovieArray}){
const [Movies,setMovies] = useState([]);
const [filterName,setFilterName] = useState('');
const [filterRating,setFilterRating] = useState('');

const addMovie = (mov) => {
    // console.log("addEffect");
    setMovies([...Movies,mov])    
}
const filterHandler = (event) => {
    // console.log("filterHandler");
    event.preventDefault()  
    setFilterName(event.target.title2.value);
    setFilterRating(event.target.rating2.value);
    event.target.title2.value='';
    event.target.rating2.value='';
} 
const clearHandler = (event) => {
    // console.log("clearHandler");
    event.preventDefault()  
    setFilterName('');
    setFilterRating('');
} 

const submitHandler = (e) => {
    e.preventDefault()
    // console.log("SubmitHandler");
    if ((e.target.title.value=== '' || e.target.description.value=== '' || e.target.posterURL.value=== '' || e.target.rating.value=== '')  )
    {
        window.confirm("you should fill all the boxes to add your movie")
        e.target.title.value='';
        e.target.rating.value='';
        e.target.description.value='';
        e.target.posterURL.value='';
    }else{
    const newMovie = {
        title:          e.target.title.value,
        description:    e.target.description.value,
        posterURL:      e.target.posterURL.value,
        rating:         e.target.rating.value
    }
    addMovie(newMovie);
    // e.target.title.value='';
    // e.target.description.value='';
    // e.target.posterURL.value='';
    // e.target.rating.value='';
}}
return (

<div style={{display: 'flex',maxWidth: '100%',}}>
    {fetchMovieArray(Movies)}
    <div>
        <form  onSubmit={submitHandler} style={{width:'150px',border:'1.5px solid lightgrey'}}>
            <input type='text' name='title' placeholder='Film title'/>
            <input type="text" name='description' placeholder='Film description'/>
            <input type="text" name='posterURL' placeholder='Film URL'/>
            <input type="text" name='rating' placeholder='Film rating'/>
            <button type="submit">Add Movie</button>
            <p>Here you can filter your film</p>
        </form>
        <form onSubmit={filterHandler} style={{width:'150px',border:'1.5px solid lightgrey'}}>
            <input type='text' name='title2' placeholder='Film title'/>
            <input type="text" name='rating2' placeholder='Film rating'/>
            <button type="submit">Filter Movie</button> 
        </form>
        <button type="button" onClick={clearHandler} style={{border:'1.5px solid lightgrey'}}>Clear</button> 
    </div>
    <div style={{display: 'flex', flexDirection:'row',
        justifyContent:'flex-start',flexWrap: 'wrap',border:'1.5px solid lightgrey'}}>
        {   
            Movies
            .filter((v,i)=>(((v.title===filterName || v.rating===filterRating || (filterRating==='' && filterName==='')))))
            .map((value, index) => 
                    (
                    <Card><span key={index}>
                    <p>title : {value.title}</p>
                    <p>description : {value.description}</p>
                    <p>posterURL : {value.posterURL}</p>
                    <p>rating : {value.rating}</p>
                    <p>Movie index : {index}</p>
                    </span></Card>
                    )
                )
        }
    </div>
    
</div>
)}

export default MovieFilter

// useEffect(()=>{
//     console.log("mount Useeffect for submitHandler");
//     window.addEventListener('submit',submitHandler);
//     return()=>{
//         console.log("remove submitHandler")
//         window.removeEventListener('submit',submitHandler)
//     }
// },[])
// useEffect(()=>{
//     console.log("mount Useeffect  for filterHandler");
//     window.addEventListener('submit',filterHandler);
//     return()=>{
//         console.log("remove filterHandler")
//         window.removeEventListener('submit',filterHandler)
//     }
// },[])