import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TelaAtivacao({ onAtivado }) {
  const [mac, setMac] = useState("");
  const [status, setStatus] = useState("PENDENTE");

  const gerarMac = () => {
    const hex = "0123456789ABCDEF";
    let m = [];
    for(let i=0;i<6;i++) m.push(hex[Math.floor(Math.random()*16)]+hex[Math.floor(Math.random()*16)]);
    return m.join(":");
  };

  useEffect(() => {
    setMac(gerarMac());
  }, []);

  const verificar = () => {
    setStatus("AGUARDANDO...");
    // Aqui vai a chamada para a API
  };

  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>JK CINE PLAY</Text>
      <Text style={styles.texto}>MAC: {mac}</Text>
      <Text style={styles.status}>Status: {status}</Text>
      <Button title="Verificar Agora" onPress={verificar} color="#D32F2F" />
    </View>
  );
}

const styles = StyleSheet.create({
  tela:{flex:1,backgroundColor:"#000",justifyContent:"center",alignItems:"center"},
  titulo:{fontSize:28,color:"#FFF",fontWeight:"bold",marginBottom:20},
  texto:{fontSize:18,color:"#EEE",marginBottom:10},
  status:{fontSize:16,color:"#F44336",marginBottom:20}
});
