import { useState} from 'react';
import Filter from './Filter';
import MovieCard from './MovieCard';
import "./MovieList.css";


	const MovieList = () => {
	    const [movies,setMovies] = useState([
            {
            id : 1,
            title : 'About Elly',
            description : 'Iranian Movie',
            posterURL : 'https://youtu.be/hM3Nj-xiHVk',
            image : 'https://i.pinimg.com/564x/6e/19/f2/6e19f247f5d451b1f1d29855b6711e57.jpg',
            rating : 4
            
        },{
            id : 2,
            title : 'Separation',
            description : 'Iranian Movie',
            posterURL : 'https://youtu.be/58Onuy5USTc',
            image : 'https://i.pinimg.com/564x/d7/6b/a9/d76ba949d6e8fee3833bd2fcfb279a4d.jpg',
            rating : 5
           
        },{
            id : 3,
            title : 'Forushande The Salesman',
            description : 'Iranian Movie',
            posterURL :'https://youtu.be/r-61yYjKHHc',
            image : 'https://i.pinimg.com/564x/ad/03/98/ad0398c824821c102b24f4218993ccf0.jpg',
            rating :4
           
        },{
            id : 4,
            title : 'Little Women',
            description : 'British Movie',
            posterURL :'https://youtu.be/AST2-4db4ic',
            image : 'https://i.pinimg.com/564x/0a/5b/29/0a5b29f8da9a0bba267d747e9a1e0aed.jpg',
            rating :4
           
        },{
            id : 5,
            title : 'Pride and Prejudice ',
            description : 'British Movie',
            posterURL :'https://youtu.be/1dYv5u6v55Y',
            image : 'https://i.pinimg.com/564x/8b/23/41/8b2341eb5355fa85bb5ad6d9c7d5cd16.jpg',
            rating :5
           
        },{
            id : 6,
            title : 'Jane Eyre',
            description : 'British Movie',
            posterURL :'https://youtu.be/8IFsdfk3mlk',
            image : 'https://i.pinimg.com/564x/2a/8e/da/2a8edabdbd3640036a6858ffcd2cb9d9.jpg',
            rating :5
           
        },{
            id : 7,
            title : 'the silenced',
            description : 'Korean Movie',
            posterURL :'https://youtu.be/3S8der09eGg',
            image : 'https://i.pinimg.com/564x/08/0e/da/080eda419c32cc2e3d992f6865b5d3e2.jpg',
            rating :5
           
        },{
            id : 8,
            title : 'Missing Woman',
            description : 'Korean Movie',
            posterURL :'https://youtu.be/QFSM0se7go0',
            image : 'https://i.pinimg.com/564x/9e/ff/32/9eff32207b14a44a0c0321f6c3788e3c.jpg',
            rating :5
           
        },{
            id : 9,
            title : 'Train to Busan',
            description : 'Korean Movie',
            posterURL :'https://youtu.be/pyWuHv2-Abk',
            image : 'https://i.pinimg.com/564x/de/08/c9/de08c95da3975ebe0b4e19a80729d4b3.jpg',
            rating :4
           
        },{
            id : 10,
            title : 'Raees',
            description : 'Indian Movie',
            posterURL :'https://youtu.be/J7_1MU3gDk0',
            image : 'https://i.pinimg.com/564x/fa/6e/5d/fa6e5d62072b5faa31aeb95cc5dd29e4.jpg',
            rating :4
           
        },{
            id : 11,
            title : 'Bajirao Mastani',
            description : 'Indian Movie',
            posterURL :'https://youtu.be/eHOc-4D7MjY',
            image : 'https://i.pinimg.com/564x/66/ce/0c/66ce0cc990dc0e395eb2ea2df2287db6.jpg',
            rating :4
           
        },{
            id : 12,
            title : 'Lagaan',
            description : 'Indian Movie',
            posterURL :'https://youtu.be/iCsrYEZPTig',
            image : 'https://i.pinimg.com/564x/5f/92/54/5f925483f5c430989fd9980f5f2f5e3c.jpg',
            rating :4
        
        }])
	

	const [filtredMovies, setFiltredMovies]= useState([])
	

	const search = (type) =>{
	setFiltredMovies(type.length === 0 ? movies: Object.entries(type)[0][0] === 'rating' ? 
	                movies.filter(el=> el.rating === type.rating) : 
	                movies.filter(el=> el.title.toLowerCase().includes(type.titleMovie.toLowerCase())))

    }
	

	const add = movie => {
	    setMovies([...movies, movie]);
	}
	

	    return(
	        <>
	        <Filter movies={movies} search={search}/> 
	        <br/><br/>
	        <MovieCard add={add} />
	        <br/><br/>
	        <div className='ro'>
	        {filtredMovies.map((e)=>
	        <div className= 'col'>
	        <a href={e.posterURL}><img src={e.image} alt="" width="450" height="500"/></a>  
	        <br/>
	        <label>Title : {e.title}</label>
	        <br/>
            <label> Description : {e.description}</label>
            <br/>
	        <label>Rating : {e.rating}</label>
	        </div>
	        )}
	        </div>
	        </>
	    )
            }
	

	export default MovieList;




