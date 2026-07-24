import api from './api';

export async function buscarCanais(tipo, servidor) {
  try {
    // Aqui vai a lógica para ler de Xtream ou M3U
    const resposta = await api.get(`/categorias/${tipo}/${servidor.id}`);
    return resposta.data;
  } catch (erro) {
    console.error('Erro ao buscar canais:', erro);
    return [];
  }
}

export async function buscarListaXtream(usuario, senha, url) {
  // Exemplo de chamada para API Xtream
  const endpoint = `${url}/player_api.php?username=${usuario}&password=${senha}&action=get_live_categories`;
  const resposta = await fetch(endpoint);
  return resposta.json();
}
