import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';

const { width } = Dimensions.get('window');

const BannerRotativo = ({ banners = [] }) => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  // Dados padrão se não vier nada da API
  const dados = banners.length ? banners : [
    { id:1, imagem: "https://via.placeholder.com/800x400/1a1a1a/D32F2F?text=Bem-vindo+ao+JK+CINE+PLAY", titulo: "Destaque 1" },
    { id:2, imagem: "https://via.placeholder.com/800x400/1a1a1a/D32F2F?text=Filmes+Recentes", titulo: "Filmes" },
    { id:3, imagem: "https://via.placeholder.com/800x400/1a1a1a/D32F2F?text=Series+e+Esportes", titulo: "Séries & Esportes" }
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceAtual(antigo => (antigo + 1) % dados.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, [dados.length]);

  return (
    <View style={estilos.container}>
      <FastImage
        source={{ uri: dados[indiceAtual].imagem }}
        style={estilos.imagem}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={estilos.legenda}>
        <Text style={estilos.titulo}>{dados[indiceAtual].titulo}</Text>
      </View>
      <View style={estilos.paginacao}>
        {dados.map((_, i) => (
          <View 
            key={i} 
            style={[estilos.ponto, i === indiceAtual && estilos.pontoAtivo]} 
          />
        ))}
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    backgroundColor: '#111',
    borderRadius: 8,
    overflow: 'hidden'
  },
  imagem: {
    width: '100%',
    height: '100%'
  },
  legenda: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 8,
    borderRadius: 4
  },
  titulo: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold'
  },
  paginacao: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    flexDirection: 'row',
    gap: 6
  },
  ponto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#555'
  },
  pontoAtivo: {
    backgroundColor: '#D32F2F',
    width: 20
  }
});

export default BannerRotativo;
                   
