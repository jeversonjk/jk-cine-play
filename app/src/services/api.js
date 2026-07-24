import axios from 'axios';

// Altere para o IP da sua máquina/servidor quando for testar
const api = axios.create({
  baseURL: 'http://SEU_IP_AQUI:3000/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Funções auxiliares
export const verificarDispositivo = async (mac) => {
  try {
    const resposta = await api.post('/dispositivos/verificar', { mac });
    return resposta.data;
  } catch (erro) {
    console.error('Erro na verificação:', erro);
    return { status: 'erro', mensagem: erro.message };
  }
};

export const carregarConteudo = async (idDispositivo) => {
  return api.get(`/conteudo/${idDispositivo}`);
};

export default api;
