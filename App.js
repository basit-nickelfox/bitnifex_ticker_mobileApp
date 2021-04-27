import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ticker from './components/Ticker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
     <Ticker/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
