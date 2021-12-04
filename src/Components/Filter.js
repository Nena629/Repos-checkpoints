import { useState,useEffect } from 'react';
import "./Filter.css";


const Filter = (props) => {
    const [type,setType] = useState([]);
    useEffect(()=> {
        props.search(type)    
    }, [props, props.movies, type])

    const [movie, setMovie] = useState({ title: "", description: "", posterURL: "",  rating: 0, image:""});

    const handleSubmit = e => {
      e.preventDefault();
      props.add(movie);
    }

 return(
    <div className= 't'>
    <br/>
    <br/>
    <br/>
    <div className='search'>
    Title : <input type="text" placeholder="Search Title" onChange={(e) => setType({titleMovie:e.target.value})}/> 
    Rating : <input type="range" placeholder="rating" min={0} max={5} onChange={(e)=> setType({rating: Number(e.target.value)})} /> 
    </div>
    
    <div>
        
      <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="title" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, title: e.target.value }))}/>
      <input type="text" name="description" placeholder="description" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, description: e.target.value }))}/>
      <input type="text" name="posterURL" placeholder="posterURL" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, posterURL: e.target.value }))}/>
      <input type="range" min={0} max={5} name="rating" placeholder="rating" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, rating: Number(e.target.value) }))}/>5
      <input type="text" name="image" placeholder="poster" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, image: e.target.value }))}/>
        
        <button>ADD</button>
        </form>
   
    </div>




    </div>
);
}

export default Filter;
