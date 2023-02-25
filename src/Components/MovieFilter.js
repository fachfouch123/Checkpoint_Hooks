import React from 'react'
import {useState,useEffect} from "react"
import Card from './Card'
import Filter from './Filter'

function MovieFilter ({fetchMovieArray}){
const [Movies,setMovies] = useState([]);
const [filterName,setFilterName] = useState('');
const [filterRating,setFilterRating] = useState('');

const addMovie = (mov) => {
    setMovies([...Movies,mov])    
}
const filterHandler = (event) => {
    event.preventDefault()  
    setFilterName(event.target.title2.value);
    setFilterRating(event.target.rating2.value);
    // event.target.title2.value='';
    // event.target.rating2.value='';
} 
const clearHandler = (event) => {
    event.preventDefault()  
    setFilterName('');
    setFilterRating('');
} 

// console.log(filterName);
// console.log(filterRating);

const submitHandler = (e) => {
    e.preventDefault()
    // if ((e.target.title.value=== '' || e.target.description.value=== '' || e.target.posterURL.value=== '' || e.target.rating.value=== '')  )
    // {
    //     window.confirm("you should fill all the boxes to add your movie")
    //     e.target.title.value='';
    //     e.target.rating.value='';
    //     e.target.description.value='';
    //     e.target.posterURL.value='';
    // }else{
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
}
let a=0;

// const submitHandler = (e) => {
//     e.preventDefault()
//     // const Movies = [1,2];
//     setMovies([[2,1]]);
//     Movies.map((v,i) => (console.log(v)));



//     a++;
// }

// useEffect(()=>{
//     console.log("hallo");
//     window.addEventListener('submit',submitHandler);
//     return()=>{
//         console.log("by by")
//         window.removeEventListener('submit',submitHandler)
//     }
// },[Movies])


return (

    <div style={{display: 'flex',maxWidth: '100%',}}>
        
        <div>
        <form id="de" onSubmit={submitHandler} style={{width:'150px',border:'1.5px solid lightgrey'}}>
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
            {/* <Filter data={Movies}/> */}
            {   
                Movies.filter((v,i)=>(((v.title===filterName || v.rating===filterRating || (filterRating==='' && filterName===''))))).map((value, index) => 
                (<Card>
                <span key={index}>
                    <p>title : {value.title}</p>
                    <p>description : {value.description}</p>
                    <p>posterURL : {value.posterURL}</p>
                    <p>rating : {value.rating}</p>
                    <p>Movie index : {index}</p>
                    {/* <p>v.title : {filterName}</p> */}
                </span>
                </Card>))
            }
        </div>
        {fetchMovieArray(Movies)}
    </div>
                    //    <div> {fetchMovieArray(Movies)}</div>


)

}

export default MovieFilter