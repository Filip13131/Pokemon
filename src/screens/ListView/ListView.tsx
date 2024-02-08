import { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import { FlashList } from "@shopify/flash-list";
import useFetchPokemons from "../../context/useFetchPokemons";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";



export function ListView(){
    const theme = useContext(ThemeContext);
    const { data, isLoading, isError, hasNextPage, fetchNextPage } = useFetchPokemons();

    if (isLoading) {
        return (
            <Text>Loading...</Text>
        );
    }

    if (isError) {
        return (
            <Text>An error occurred while fetching data</Text>
        );
    } 

    const flattenData = data.pages.flatMap((page : any) => page.results);
    
    const loadNext = () => {
        if (hasNextPage) {
          fetchNextPage();
        }
      };

    return (
      <View style= {theme === 'dark' ? styles.dark : styles.light}>
        <FlashList
          keyExtractor={(item)=>item.name}
          data={flattenData}
          renderItem={({ item }) => <PokemonCard name = {item.name}/>}
          onEndReached={loadNext}
          onEndReachedThreshold={0.3}
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