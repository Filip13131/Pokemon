import { ThemeContext } from './src/context/ThemeContext';
import { ListView } from './src/screens/ListView/ListView';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoriteView } from './src/screens/FavoriteView/FavoriteView';
import { MapView } from './src/screens/MapView/MapView';
import { useState } from 'react';
import { FavoritePokemonsContext } from './src/context/FavoritePokemonsContext';

export default function App() {
  const queryClient = new QueryClient();
  const TabNavigator = createBottomTabNavigator();
  const [favoritePokemons, setFavoritePokemons] = useState([]);


  function updateFavoritePokemons(name: string){
    if(favoritePokemons.includes(name)){
      const updatedFavoritePokemons = favoritePokemons.filter((val) => { 
        return val!==name;
      });
      setFavoritePokemons(updatedFavoritePokemons);
      console.log(`favorite pokemon by name: ${name} removed`);
    }
    else{
      setFavoritePokemons(favoritePokemons.concat([name]));
      console.log(`new favorite pokemon by name: ${name} added`);
    }
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