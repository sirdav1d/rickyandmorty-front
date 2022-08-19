import { useState, useEffect, useCallback } from 'react';
import { ActionMode } from 'constants';
import Card from 'components/card/Card';
import './cardList.css';
import { CharService } from 'services/CharService';
import ModalCreateEdit from 'components/modalCreate/ModalCreateEdit';

function CardList({ newChar, mode, editChar, deleteChar }) {
  const [characters, setCharacters] = useState([]);

  const [charModal, setCharModal] = useState(false)

  const getList = async () => {
    const response = await CharService.getAll();
    setCharacters(response);
  };

  const addNewChar = useCallback(
    (newChar) => {
      const list = [...characters, newChar];
      setCharacters(list);
    },
    [characters],
  );

  useEffect(() => {
    if (newChar && !characters.map(({ id }) => id).includes(newChar.id)) {
      addNewChar(newChar);
    }
  }, [addNewChar, newChar, characters]);

  useEffect(() => {
    getList();
  }, [addNewChar, newChar, characters]);


   const getById = async (id) => {
     const response = await CharService.getById(id);

     const mapper = {
       [ActionMode.NORMAL]: () => setCharModal(response),
       [ActionMode.ATUALIZAR]: () => editChar(response),
       [ActionMode.DELETAR]: () => deleteChar(response),
     };

     mapper[mode]();
   };

  return (
    <div className="cardList">
      {characters.map((char, index) => (
        <Card
          mode={mode}
          nome={char.nome}
          descricao={char.descricao}
          foto={char.foto}
          key={`Char - ${index}`}
          clickIten ={(Id) => getById(Id)}
        />
      ))}

      {charModal && (<ModalCreateEdit 
      onEdit={charModal}
      closeModal={setCharModal(false)}
      
      />)}
    </div>
  );
}

export default CardList;
