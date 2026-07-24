import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ConfiguracoesScreen() {
  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>⚙️ CONFIGURAÇÕES</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: { flex:1, backgroundColor:"#000", justifyContent:"center", alignItems:"center" },
  titulo: { fontSize:24, color:"#FFF", fontWeight:"bold" }
});
