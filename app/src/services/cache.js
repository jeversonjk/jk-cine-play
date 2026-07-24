import * as FileSystem from 'expo-file-system';

const CAMINHO_CACHE = FileSystem.documentDirectory + 'cache/';

// Garante que a pasta existe
export const inicializarCache = async () => {
  const existe = await FileSystem.getInfoAsync(CAMINHO_CACHE);
  if (!existe.exists) await FileSystem.makeDirectoryAsync(CAMINHO_CACHE);
};

export const salvarNoCache = async (chave, dados) => {
  try {
    await FileSystem.writeAsStringAsync(
      CAMINHO_CACHE + chave + '.json',
      JSON.stringify(dados)
    );
  } catch (e) {
    console.warn('Falha ao salvar cache:', e);
  }
};

export const carregarDoCache = async (chave) => {
  try {
    const caminho = CAMINHO_CACHE + chave + '.json';
    const arquivo = await FileSystem.getInfoAsync(caminho);
    if (!arquivo.exists) return null;

    const conteudo = await FileSystem.readAsStringAsync(caminho);
    return JSON.parse(conteudo);
  } catch (e) {
    return null;
  }
};
