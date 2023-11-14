import React from 'react';
import { View, Button } from 'react-native';
import Pergunta from './Pergunta';
import perguntas from '../assets/perguntas';

const Quiz = () => {
  const [indicePergunta, setIndicePergunta] = React.useState(0);

  const avancarPergunta = () => {
    // Lógica para avançar para a próxima pergunta
    setIndicePergunta(indicePergunta + 1);
  };

  return (
    <View>
      <Pergunta pergunta={perguntas[indicePergunta].pergunta} />
      {/* Renderizar opções de resposta aqui */}
      <Button title="Próxima Pergunta" onPress={avancarPergunta} />
    </View>
  );
}

export default Quiz;
