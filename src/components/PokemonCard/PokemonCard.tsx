import { View, StyleSheet, Text} from "react-native";
import { HeartIcon } from "./HeartIcon";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PokemonImage } from "./PokemonImage";

//TODO define data type for results of PokeAPI
export function PokemonCard(props : {data: any} ){
    const queryClient = new QueryClient();
   
    return(
        <QueryClientProvider client={queryClient}>
            <View style= {styles.container}>
                <View style={styles.pokemonCard}>
                    <HeartIcon isFilled={false}/>
                    <PokemonImage name={props.data.name}></PokemonImage>
                    <Text style = {styles.pokemonName}>{props.data.name.toUpperCase()}</Text>
                </View>
            </View>
        </QueryClientProvider>
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