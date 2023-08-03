import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    overflow: hidden;
    position: relative;

    &:hover H2 {
        opacity: 1;
        transform: translateY(-50%);
        /* filter: blur(5px); */
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, filter 0.3s ease-in-out;

    }
`
const Img = styled.img`
    position: relative;
    width: 100%;
    min-height: 30vh;
    object-fit: cover;
    border-radius: 1rem;
`

const Title= styled.h2`
    position: absolute;
    font-size: 2rem;
    padding: 0.5rem;
    bottom: 0;
    left: 0;
    width: 100%;
    color: white;
    opacity: 0;
`

export interface IMovies {
    id?: string;
    movie?: string[];
    title: string;
    backdrop_path: string;
    genre_ids: number[];

  }

export function Movie({movie}:{movie: IMovies}) {

return (
    <Wrap>
        <Img src={'https://image.tmdb.org/t/p/w500'+movie.backdrop_path} alt={movie.title} />
        <Title >{movie.title}</Title>        
    </Wrap>
)
}

