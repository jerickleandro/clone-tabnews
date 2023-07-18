import React, { useState } from 'react';

function Home() {

  const [mensagemBotao1, setMensagemBotao1] = useState('Botão 1');
  const [mensagemBotao2, setMensagemBotao2] = useState('Botão 2');
  const [mensagemResultado, setMensagemResultado] = useState('');

  const handleClickBotao1 = () => {
    setMensagemBotao1('Lavar a louça');
    setMensagemBotao2('Ganha um jantar romântico');
    setMensagemResultado('Parabéns, você vai lavar a louça');
  };

  const handleClickBotao2 = () => {
    setMensagemBotao1('Ganha um jantar romântico');
    setMensagemBotao2('Lavar a louça');
    setMensagemResultado('Parabéns, você vai lavar a louça');
  };
  return (
    <div>
      <h1>Click aleatoriamente em um dos botões e veja se está com sorte</h1>
      <button onClick={handleClickBotao1}>{mensagemBotao1}</button>
      <button onClick={handleClickBotao2}>{mensagemBotao2}</button>
      {mensagemResultado && <p>{mensagemResultado}</p>}
    </div>
  );
}

export default Home;