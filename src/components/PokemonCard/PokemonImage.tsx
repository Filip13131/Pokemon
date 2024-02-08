import {Text} from 'react-native';
import {SvgUri} from 'react-native-svg';
import useFetchPokemon from '../../context/useFetchPokemon';
import { useEffect, useState } from 'react';


//TODO define data type for results of PokeAPI
export function PokemonImage(props : {SVGURI: string, isLoading: boolean, isError: boolean}){
    
    return(
        <>
            {props.isLoading && <Text>Image is Loading...</Text>}
            {props.isError && <Text>Error while fetching Image...</Text>}
            {!(props.isError||props.isLoading) && 
                <SvgUri 
                    width="80%"
                    height="80%"
                    uri={props.SVGURI}></SvgUri>}
        </>
    )
}