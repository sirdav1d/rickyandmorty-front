import { useState, useEffect, useCallback } from 'react';
import { ActionMode } from 'constants';
import Card from 'components/card/Card';
import './cardList.css';
import { CharService } from 'services/CharService';
import ModalCreateEdit from 'components/modalCreate/ModalCreateEdit';
import { matchByText } from 'helpers/utils';
import React from 'react';

function CardList({
  newChar,
  mode,
  updateChar,
  deleteChar,
  charEdited,
  charDel,
}) {
  const [characters, setCharacters] = useState([]);

  const [charFiltered, setcharFiltered] = useState([]);

  const [charModal, setCharModal] = useState(false);

  const getList = async () => {
    const response = await CharService.getAll();
    setCharacters(response);
  };

  useEffect(() => {
    getList();
  }, [charEdited, charDel]);

  const fillByTitle = ({ target }) => {
    const lista = [...characters].filter(({ nome }) =>
      matchByText(nome, target.value),
    );
    setcharFiltered(lista);
  };

  const addNewChar = useCallback(
    async (char) => {
      const list =  [...characters, char];
      setCharacters(list);
    },

    [characters],
  );

  useEffect(() => {
    if (newChar && !characters.map(({ id }) => id).includes(newChar._id)) {
      addNewChar(newChar);
    }
    setcharFiltered(characters);
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

  return (
    <div className="cardListContainer">
      <input
        className="listFill"
        onChange={fillByTitle}
        placeholder="Pesquise pelo nome"
      />

      <div className="cardList">
        {charFiltered.map((char, index) => (
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
          <ModalCreateEdit
            onEdit={charModal}
            closeModal={setCharModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default CardList;
