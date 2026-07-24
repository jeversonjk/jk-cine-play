import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa todas as telas
import TelaAtivacao from '../screens/TelaAtivacao';
import HomeScreen from '../screens/HomeScreen';
import TelaCanais from '../screens/TelaCanais';
import TelaFilmes from '../screens/TelaFilmes';
import TelaSeries from '../screens/TelaSeries';
import TelaEsportes from '../screens/TelaEsportes';
import TelaFavoritos from '../screens/TelaFavoritos';
import ConfiguracoesScreen from '../screens/ConfiguracoesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Ativacao"
      screenOptions={{
        headerShown: false, // Sem barra de topo padrão
        contentStyle: { backgroundColor: '#000' },
        animation: 'fade' // Transição suave
      }}
    >
      <Stack.Screen 
        name="Ativacao" 
        component={TelaAtivacao} 
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Canais" component={TelaCanais} />
      <Stack.Screen name="Filmes" component={TelaFilmes} />
      <Stack.Screen name="Series" component={TelaSeries} />
      <Stack.Screen name="Esportes" component={TelaEsportes} />
      <Stack.Screen name="Favoritos" component={TelaFavoritos} />
      <Stack.Screen name="Configuracoes" component={ConfiguracoesScreen} />
    </Stack.Navigator>
  );
        }
