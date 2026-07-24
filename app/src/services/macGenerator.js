export const gerarMacAleatorio = () => {
  const caracteresHex = '0123456789ABCDEF';
  const partes = [];

  for (let i = 0; i < 6; i++) {
    const parte1 = caracteresHex[Math.floor(Math.random() * 16)];
    const parte2 = caracteresHex[Math.floor(Math.random() * 16)];
    partes.push(parte1 + parte2);
  }

  return partes.join(':');
};
