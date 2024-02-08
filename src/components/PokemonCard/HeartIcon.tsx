import { View, StyleSheet, TouchableOpacity} from "react-native";
import { FavoritePokemonsContext } from "../../context/FavoritePokemonsContext";
import { useContext } from "react";

export function HeartIcon(props: {name: string}){
    const {favoritePokemons, updateFavoritePokemons} : {favoritePokemons : Array<string>, updateFavoritePokemons: Function}= useContext(FavoritePokemonsContext);
    const _onPress = async () =>{
        updateFavoritePokemons(props.name);
        console.log("you pressed heart icon!");
    }

    return(
        <View style={styles.icon}>
            <TouchableOpacity onPress={_onPress} style={{flex:1}}>
                <View style = {favoritePokemons.includes(props.name) ? styles.filled : styles.unfilled}></View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    filled:{
        backgroundColor: "red",
        flex:1,
        borderRadius: 20,
    },
    unfilled:{
        backgroundColor : "none",
    },
    icon :{
        position: "absolute",
        display:"flex",
        right: 15,
        top:15,
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 20,
        width: 40,
        height: 40,
    }
})