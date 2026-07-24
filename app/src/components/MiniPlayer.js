import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PlayerGlobal from './PlayerGlobal';

const MiniPlayer = ({ canal, onExpandir, onFechar }) => {
  if (!canal) return null;

  return (
    <View style={estilos.container}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.tituloCanal} numberOfLines={1}>{canal.nome}</Text>
        <View style={estilos.acoes}>
          <TouchableOpacity onPress={onExpandir} style={estilos.btnAcao}>
            <Text style={{color:'#fff'}}>⛶</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onFechar} style={estilos.btnAcao}>
            <Text style={{color:'#fff'}}>✕</Text>
          </TouchableOpacity>
        </View>
      </View>
      <PlayerGlobal url={canal.url} mini={true} />
      {canal.epg && (
        <View style={estilos.epg}>
          <Text style={estilos.epgTexto}>{canal.epg}</Text>
        </View>
      )}
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    borderWidth: 2,
    borderColor: '#D32F2F',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 10
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#222'
  },
  tituloCanal: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    flex:1
  },
  acoes: {
    flexDirection: 'row',
    gap: 10
  },
  btnAcao: {
    paddingHorizontal: 8
  },
  epg: {
    padding: 8,
    backgroundColor: '#000'
  },
  epgTexto: {
    color: '#CCC',
    fontSize: 13
  }
});

export default MiniPlayer;
  
