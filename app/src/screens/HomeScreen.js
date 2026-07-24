import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const menu = [
    { id:1, nome:"📺 TV AO VIVO", tela:"Canais" },
    { id:2, nome:"🎬 Filmes", tela:"Filmes" },
    { id:3, nome:"📺 Séries", tela:"Series" },
    { id:4, nome:"⚽ Esportes", tela:"Esportes" },
    { id:5, nome:"❤️ Favoritos", tela:"Favoritos" }
  ];

  return (
    <View style={estilos.tela}>
      <View style={estilos.topo}>
        <TouchableOpacity style={estilos.btnTopo}><Text style={estilos.txt}>⚙️ Configurações</Text></TouchableOpacity>
        <TouchableOpacity style={estilos.btnTopo}><Text style={estilos.txt}>🔃 Recarregar</Text></TouchableOpacity>
      </View>
      <View style={estilos.corpo}>
        <View style={estilos.menuLateral}>
          {menu.map(item => (
            <TouchableOpacity key={item.id} style={estilos.btnMenu} onPress={() => navigation.navigate(item.tela)}>
              <Text style={estilos.txtMenu}>{item.nome}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={estilos.banners}>
          <Text style={{color:'#fff',fontSize:20,padding:20}}>Banners Rotativos Aqui</Text>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela:{flex:1,backgroundColor:"#000",padding:16},
  topo:{flexDirection:"row",justifyContent:"flex-end",gap:12,marginBottom:20},
  btnTopo:{borderWidth:2,borderColor:"#D32F2F",borderRadius:8,padding:10},
  txt:{color:"#FFF"},
  corpo:{flexDirection:"row",gap:20,flex:1},
  menuLateral:{flex:1,gap:12},
  btnMenu:{borderWidth:2,borderColor:"#D32F2F",borderRadius:8,padding:16},
  txtMenu:{color:"#FFF",fontSize:18,fontWeight:"bold"},
  banners:{flex:2,borderWidth:2,borderColor:"#D32F2F",borderRadius:8,overflow:"hidden"}
})
