import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { IMovies, Movie } from '../Movie';
import Filter from '../Filter';


const CardList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
`

const BirdsList = () => {
    const [popular, setPopular] = useState([]);
    const [filtered, setFiltered] = useState([])
    const [activeGenre, setActiveGenre] = useState<number[] | number>(0);

    // after loading the page fetchPopular is executed
    useEffect(()=>{
        fetchPopular()
    }, [])
    
    // fetch data from API and set it as new value of popular with setPopular()
    const fetchPopular = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=befb358fadf3141f01068d47c8add9c3&language=en-US&page=1')
        const movies = await data.json();
    
        setPopular(movies.results);
        setFiltered(movies.results);
    }
    

    return (
    <>
        <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
        <CardList>
          {filtered.map((movie: IMovies) => {
            return <Movie key={movie.id} movie={movie} />
          })}
        </CardList>
    </>
  )
}

export default BirdsList
