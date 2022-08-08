import { useState, useEffect } from 'react';
import Card from 'components/card/Card';
import './cardList.css';
import { CharService } from 'services/CharService';

function CardList({ newChar }) {
  const [characters, setCharacters] = useState([]);

  const getlist = async () => {
    const response = await CharService.getAll();
    setCharacters(response);
  };

  useEffect(() => {
    getlist();
  }, []);

  const addNewChar = (character) => {
    const list = [...characters, character];
    setCharacters(list);
  };

  useEffect(() => {
    if (newChar) addNewChar(newChar);
  }, [newChar]);

  return (
    <div className="cardList">
      {characters.map((char, index) => (
        <div className="cardList_container" key={`Char - ${index}`}>
          <Card nome={char.nome} descricao={char.descricao} foto={char.foto} />
        </div>
      ))}
    </div>
  );
}

export default CardList;
