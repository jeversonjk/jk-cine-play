import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const CardCategoria = ({ item, aoPressionar, destaque = false }) => {
  return (
    <TouchableOpacity 
      style={[estilos.card, destaque && estilos.cardDestaque]} 
      onPress={() => aoPressionar(item)}
      activeOpacity={0.7}
    >
      {item.logo ? (
        <FastImage
          source={{ uri: item.logo }}
          style={estilos.imagem}
          resizeMode={FastImage.resizeMode.cover}
        />
      ) : (
        <View style={estilos.semImagem}>
          <Text style={{fontSize:30}}>📺</Text>
        </View>
      )}
      <View style={estilos.legenda}>
        <Text style={estilos.nome} numberOfLines={1}>{item.nome}</Text>
      </View>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  card: {
    width: 140,
    height: 200,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333'
  },
  cardDestaque: {
    borderColor: '#D32F2F',
    transform: [{ scale: 1.05 }]
  },
  imagem: {
    width: '100%',
    height: '80%'
  },
  semImagem: {
    width: '100%',
    height: '80%',
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center'
  },
  legenda: {
    flex:1,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    paddingHorizontal: 5
  },
  nome: {
    color: '#FFF',
    fontSize: 13,
    textAlign: 'center'
  }
});

export default CardCategoria;
