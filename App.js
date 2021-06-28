import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './footer.js';
import Map from './map.js';
import { Loader, LoaderOptions } from 'google-maps';
// or const {Loader} = require('google-maps'); without typescript

const options: LoaderOptions = {/* todo */ };
// const googleMapsAPIKey = 'AIzaSyAeawmHKQyyqWRxuHMbTXEkOIHR_MwgOKA';
const googleMapsAPIKey = 'AIzaSyBTWrjGNpeWPSKOyhdpeKNFoUohdPMzAvQ';
const loader = new Loader(googleMapsAPIKey, options);

let googleMaps = null;
const initGoogleMaps = async () => {
  if (googleMaps !== null) return;
  googleMaps = await loader.load();
  console.log('googleMaps = ', googleMaps);
  const map = new googleMaps.maps.Map(document.getElementById('map'), {
    center: { lat: 37.75840718811915, lng: -122.44203189405526 },
    zoom: 8,
  });
  console.log('map = ', map);
}

export default function App() {
  initGoogleMaps();
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app :)</Text>
      <Map />
      <StatusBar style="auto" />
      <Footer />
    </View>
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
