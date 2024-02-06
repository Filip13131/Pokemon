import {Text} from 'react-native';
import {SvgUri} from 'react-native-svg';
import useFetchPokemon from '../../context/useFetchPokemon';

export function PokemonImage(props : {name: string}){
    
    const { data, isLoading, isError} = useFetchPokemon(props.name);

    
    return(
        <>
            {isLoading && <Text>Image is Loading...</Text>}
            {isError && <Text>Error while fetching Image...</Text>}
            {!(isError||isLoading) && 
                <SvgUri 
                    width="80%"
                    height="80%"
                    uri={data.sprites.other.dream_world.front_default}></SvgUri>}
        </>
    )
}