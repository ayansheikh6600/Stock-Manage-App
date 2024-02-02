import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistedStore, store } from './Store';
import { AddItemScreen, Home } from './Screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {


  const Stack = createNativeStackNavigator();
  return (

    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
           headerShown: false
          }}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='ItemScreen' component={AddItemScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      {/* <Home/> */}
      </PersistGate>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
