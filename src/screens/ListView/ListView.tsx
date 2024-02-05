import { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import { FlashList } from "@shopify/flash-list";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetchPokemon from "../../context/useFetchPokemon";



export function ListView(){
    const theme = useContext(ThemeContext);
    const { data, isLoading, isError, hasNextPage, fetchNextPage } = useFetchPokemon();

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
    console.log(flattenData);

    return (
      <View style= {theme === 'dark' ? styles.dark : styles.light}>
        <FlashList
          data={flattenData}
          renderItem={({ item }) => <Text style= {{fontSize:20}}>{item.name}</Text>}
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