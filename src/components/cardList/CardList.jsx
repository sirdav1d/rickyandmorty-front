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



  useEffect(() => {
    if (newChar) {
      const addNewChar = (newChar) => {
        const list = [...characters, newChar];
        setCharacters(list);
      };
      addNewChar(newChar);
    }
  }, [newChar]);

  console.log(newChar)

  return (
    <div className="cardList">
      {characters.map(
        (char, index) =>
          (
            <Card
              nome={char.nome}
              descricao={char.descricao}
              foto={char.foto}
              key={`Char - ${index}`}
            />
          ),
      )}
    </div>
  );
}

export default CardList;
