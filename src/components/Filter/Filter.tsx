import React, {useEffect} from 'react'
import styled from 'styled-components';
import ButtonComponent, { StyledButton } from '../../ButtonComponent';
import { IMovies } from '../Movie';

const Wrap = styled.div`
    gap: 1rem;
    padding-bottom: 30px;
    display: flex;
    justify-content: left;
`


const Filter = ({setActiveGenre, activeGenre, popular, setFiltered}: any) => {
    useEffect(() => {
        if(activeGenre === 0){
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie: IMovies) => 
            movie.genre_ids.includes(activeGenre));
            setFiltered(filtered);
    },[activeGenre]);

    return (
    <Wrap>
        <ButtonComponent active={activeGenre === 0} onClick={()=> setActiveGenre(0)} children='ALL'/>
        <ButtonComponent active={activeGenre === 35} onClick={()=> setActiveGenre(35)} children='COMEDY'/>
        <ButtonComponent active={activeGenre === 28} onClick={()=> setActiveGenre(28)} children='ACTION'/>
    </Wrap>
  )
}

export default Filter
