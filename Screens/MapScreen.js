import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const MapScreen = ({ route }) => {
  console.log("route.params.location", route.params.location.coords);
  const { longitude, latitude } = route.params.location.coords;
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
        mapType="standard"
      >
        <Marker
          coordinate={{ latitude, longitude }}
          title="My photo"
          description="U was here"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
