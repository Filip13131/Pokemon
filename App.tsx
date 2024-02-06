import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { ListView } from './src/screens/ListView/ListView';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationBar } from './src/components/NavigationBar/NavigationBar';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeContext.Provider value={"light"}>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <ListView/>
          <NavigationBar/>
          <StatusBar style="auto" />
        </View>
      </QueryClientProvider>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
