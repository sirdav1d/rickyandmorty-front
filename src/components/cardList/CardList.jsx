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


  const addNewChar = (character) => {
    if (character) {
      const list = [...characters, character];
      setCharacters(list);
    }
  };


  useEffect(() => {
    if (!newChar) {
      getlist();
    } else {
      addNewChar(newChar);
      getlist();
    }
  }, [newChar]);

  console.log('render');


    return (
      <div className="cardList">
        {characters.map((char, index) => (
          <Card
            nome={char.nome}
            descricao={char.descricao}
            foto={char.foto}
            key={`Char - ${index}`}
          />
        ))}
      </div>
    );
  }
 


export default CardList;
