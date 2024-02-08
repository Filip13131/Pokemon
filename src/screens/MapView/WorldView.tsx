import React, { useState } from 'react';
import MapView, { LatLng, Marker, Point } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

export function WorldView() {
  type pokemonOnMap = {
    name: string, 
    coordinate: LatLng,
    img: string
    abilities: Array<string>,
  }
  const [pokemonsOnMap, setPokemonsOnMap] = useState([]);

  const addNewPokeomon = (e: { coordinate: LatLng; position: Point; } & { action?: "long-press"; })=>{
    const random = Math.floor(Math.random() * 301);
    const res = fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
    res.then(
      (result)=>{
        result.json().then((json)=>{
          const abilities = [];
          for (const ability of json.abilities){
            abilities.push(ability.ability.name);
          }
          console.log(json.sprites.other.dream_world.front_default);
          const pokemonOnMap : pokemonOnMap = {
            name: json.name,
            coordinate: e.coordinate,
            img:json.sprites.other.dream_world.front_default,
            abilities,
          }
          setPokemonsOnMap(pokemonsOnMap.concat([pokemonOnMap]));
        })
      },(rej)=>{
        console.warn(rej);
      });
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} onLongPress={(e)=>{addNewPokeomon(e.nativeEvent)}}>
      {pokemonsOnMap.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker.coordinate}
          title={marker.name}
          description={`Abilities: ${marker.abilities}`}
        >
          <View style={styles.markerContainer}>
            <SvgUri 
              width="100%"
              height="100%"
              uri={marker.img}>
            </SvgUri>
          </View>
        </Marker>
      ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  markerContainer:{
    height:50, 
    width:40,
  },
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});