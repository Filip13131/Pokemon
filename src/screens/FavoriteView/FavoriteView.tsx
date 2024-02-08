import { useContext } from 'react';
import{View,StyleSheet} from 'react-native';
import { FavoritePokemonsContext } from '../../context/FavoritePokemonsContext';
import { ThemeContext } from '../../context/ThemeContext';
import { FlashList } from '@shopify/flash-list';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';

export function FavoriteView(){
    const theme = useContext(ThemeContext);
    const { favoritePokemons } : {favoritePokemons : Array<string>} = useContext(FavoritePokemonsContext);


    return (
      <View style= {theme === 'dark' ? styles.dark : styles.light}>
        <FlashList
            keyExtractor={(item)=>item}
            data={favoritePokemons}
            renderItem={({ item }) => <PokemonCard name = {item}/>}
            estimatedItemSize={100}
        />
      </View>
    );

} 

const styles = StyleSheet.create({
    dark:{
        flex:1,
        backgroundColor : "#000000",
    },
    light:{
        flex:1,
        backgroundColor: "#FF00FF",
    }
});