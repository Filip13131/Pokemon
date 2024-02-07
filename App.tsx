import { ThemeContext } from './src/context/ThemeContext';
import { ListView } from './src/screens/ListView/ListView';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoriteView } from './src/screens/FavoriteView/FavoriteView';
import { MapView } from './src/screens/MapView/MapView';

export default function App() {
  const queryClient = new QueryClient();
  const TabNavigator = createBottomTabNavigator();


  return (
    <NavigationContainer>  
      <ThemeContext.Provider value={"light"}>
        <QueryClientProvider client={queryClient}>
          <TabNavigator.Navigator screenOptions={{ headerShown: false }} initialRouteName="ListView">
            <TabNavigator.Screen name="FavoriteView" component={FavoriteView}/>
            <TabNavigator.Screen name="ListView" component={ListView}/>
            <TabNavigator.Screen name="MapView" component={MapView}/>
          </TabNavigator.Navigator>
        </QueryClientProvider>
      </ThemeContext.Provider>
    </NavigationContainer>
  );
}


// {/* <StatusBar style="auto" /> */}