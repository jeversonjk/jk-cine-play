import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaSeries() {
  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>📺 SÉRIES</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: { flex:1, backgroundColor:"#000", justifyContent:"center", alignItems:"center" },
  titulo: { fontSize:24, color:"#FFF", fontWeight:"bold" }
});
