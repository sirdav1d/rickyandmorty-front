import { useState, useEffect, useCallback } from 'react';
import { ActionMode } from 'constants';
import Card from 'components/card/Card';
import './cardList.css';
import { CharService } from 'services/CharService';
import ModalCreateEdit from 'components/modalCreate/ModalCreateEdit';

function CardList({
  newChar,
  mode,
  updateChar,
  deleteChar,
  charEdited,
  charDel,
}) {
  const [characters, setCharacters] = useState([]);

  const [charModal, setCharModal] = useState(false);

  const getList = async () => {
    const response = await CharService.getAll();
    setCharacters(response);
  };

  useEffect(() => {
    getList();
  }, [charEdited, charDel]);

  const addNewChar = useCallback(
    (newChar) => {
      const list = [...characters, newChar];
      setCharacters(list);
    },
    [characters],
  );

  useEffect(() => {
    if (
      newChar &&
      !characters.map(async ({ id }) => await id).includes(newChar._id)
    ) {
      addNewChar(newChar);
    }
  }, [addNewChar, newChar, characters]);

  const getById = async (id) => {
    const response = await CharService.getById(id);

    const mapper = {
      [ActionMode.NORMAL]: () => setCharModal(false),
      [ActionMode.ATUALIZAR]: () => updateChar(response),
      [ActionMode.DELETAR]: () => deleteChar(response),
    };

    mapper[mode]();
  };

  console.log(newChar);

  return (
    <div className="cardList">
      {characters.map((char, index) => (
        <Card
          mode={mode}
          nome={char.nome}
          descricao={char.descricao}
          foto={char.foto}
          key={`Char - ${index}`}
          id={char._id}
          clickIten={(Id) => getById(Id)}
        />
      ))}

      {charModal && (
        <ModalCreateEdit onEdit={charModal} closeModal={setCharModal(false)} />
      )}
    </div>
  );
}

export default CardList;
