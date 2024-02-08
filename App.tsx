import { ThemeContext } from './src/context/ThemeContext';
import { ListView } from './src/screens/ListView/ListView';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoriteView } from './src/screens/FavoriteView/FavoriteView';
import { MapView } from './src/screens/MapView/MapView';
import { useEffect, useState } from 'react';
import { FavoritePokemonsContext } from './src/context/FavoritePokemonsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const getFavoritePokemons = async () : Promise<Array<string>> => {
    try {
      const jsonValue = await AsyncStorage.getItem('favorites');
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.log(e);
    }
  };

  const storeFavoritePokemons = async (value) : Promise<void> => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('favorites', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const queryClient = new QueryClient();
  const TabNavigator = createBottomTabNavigator();
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  useEffect(()=>{
    getFavoritePokemons().then((res)=>{setFavoritePokemons(res)})
  },[])

  function updateFavoritePokemons(name: string){
    let updatedFavoritePokemons;
    if(favoritePokemons.includes(name)){
      updatedFavoritePokemons = favoritePokemons.filter((val) => { 
        return val!==name;
      });
      setFavoritePokemons(updatedFavoritePokemons);
      console.log(`favorite pokemon by name: ${name} removed`);
    }
    else{
      updatedFavoritePokemons = favoritePokemons.concat([name]);
      setFavoritePokemons(updatedFavoritePokemons);
      console.log(`new favorite pokemon by name: ${name} added`);
    }
    storeFavoritePokemons(updatedFavoritePokemons);
  }

  return (
    <NavigationContainer>
      <FavoritePokemonsContext.Provider value={{favoritePokemons, updateFavoritePokemons}}>
        <ThemeContext.Provider value={"light"}>
          <QueryClientProvider client={queryClient}>
            <TabNavigator.Navigator screenOptions={{ headerShown: false }} initialRouteName="ListView">
              <TabNavigator.Screen name="FavoriteView" component={FavoriteView}/>
              <TabNavigator.Screen name="ListView" component={ListView}/>
              <TabNavigator.Screen name="MapView" component={MapView}/>
            </TabNavigator.Navigator>
          </QueryClientProvider>
        </ThemeContext.Provider>
      </FavoritePokemonsContext.Provider>  
    </NavigationContainer>
  );
}