import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import Video from 'react-native-video';

const PlayerGlobal = ({ 
  url, 
  mini = false, 
  onProgress, 
  onEnd, 
  onError,
  titulo = ""
}) => {
  const playerRef = useRef(null);

  return (
    <View style={[estilos.container, mini ? estilos.mini : estilos.full]}>
      <Video
        ref={playerRef}
        source={{ uri: url }}
        style={estilos.video}
        resizeMode="contain"
        controls={true}
        playInBackground={false}
        bufferConfig={{
          minBufferMs: 1000,
          maxBufferMs: 5000,
          bufferForPlaybackMs: 500,
          bufferForPlaybackAfterRebufferMs: 1000
        }}
        onProgress={onProgress}
        onEnd={onEnd}
        onError={onError}
        posterResizeMode="cover"
        paused={false}
      />
      {!url && (
        <View style={estilos.carregando}>
          <ActivityIndicator size="large" color="#D32F2F" />
          <Text style={{color:'#fff',marginTop:10}}>Carregando...</Text>
        </View>
      )}
    </View>
  );
};

const estilos = StyleSheet.create({
  container: { 
    backgroundColor: '#000', 
    borderRadius: 8, 
    overflow: 'hidden',
    position: 'relative'
  },
  full: { 
    width: '100%', 
    height: '100%' 
  },
  mini: { 
    width: '100%', 
    height: 220 
  },
  video: { 
    flex: 1 
  },
  carregando: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)'
  }
});

export default PlayerGlobal;
