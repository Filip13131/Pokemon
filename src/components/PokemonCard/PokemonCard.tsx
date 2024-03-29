import { View, StyleSheet, Text} from "react-native";
import { HeartIcon } from "./HeartIcon";
import { PokemonImage } from "./PokemonImage";
import { useEffect, useRef, useState } from "react";


export function PokemonCard(props : {name: string} ){
    const lastCardNameId = useRef(props.name);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);
    const fetchPokemonData= ()=>{
        const response = fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`);
        response.then(
            (result)=>{
                result.json().then((json)=>{
                    setData(json);
                })
                setIsLoading(false);
            },
            ()=>{
                setIsError(true);
                setIsLoading(false);
            }
        );
    }

    if (props.name !== lastCardNameId.current) {
        lastCardNameId.current = props.name;
        setIsLoading(true);
        setData(null);
        setIsError(false);
        fetchPokemonData();
    }

    useEffect(()=>{fetchPokemonData()},[]);
      
    

    return(
        <View style= {styles.container}>
            <View style={styles.pokemonCard}>
                <HeartIcon name={props.name}/>
                <PokemonImage SVGURI={data?.sprites?.other?.dream_world?.front_default} isError={isError} isLoading={isLoading}></PokemonImage>
                <Text style = {styles.pokemonName}>{props.name.toUpperCase()}</Text>
            </View>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        aspectRatio: 1,
        display: "flex",
        paddingTop: "5%",
        paddingBottom:0,
        paddingLeft:"5%",
        paddingRight:"5%",
    },
    pokemonCard : {
        borderRadius:15,
        width: "100%",
        height: "100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "green",
    },
    pokemonName: {
        fontWeight: "bold",
        fontSize:30,
        position: "absolute",
        bottom: 0,
    }
})