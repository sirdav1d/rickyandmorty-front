import { useState } from 'react';
import React from 'react';
import { ActionMode } from 'constants';
import DeleteModal from 'components/deleteModal/DeleteModal';
import './home.css';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import CardList from 'components/cardList/CardList';
import ModalCreateEdit from 'components/modalCreate/ModalCreateEdit';

function Home() {
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const [charDel, setCharDel] = useState('');

  const [charEdited, setCharEdited] = useState();

  const [showModalCreated, setShowModalCreated] = useState(false);
  const [charCreated, setCharCreated] = useState('');

  const handleActions = (action) => {
    const newAction = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(newAction);
  };

  const [charToEdit, setCharToEdit] = useState('');
  const [charToDel, setCharToDel] = useState('');

  const handleUp = (charToUpdate) => {
    setCharToEdit(charToUpdate);
    setShowModalCreated(true);
  };

  const handleDel = (charToDel) => {
    setCharToDel(charToDel);
  };

  const handleCloseModal = () => {
    setShowModalCreated(false);

    setCharCreated();
    setCharToEdit();
    setCharToDel();
    setModoAtual(ActionMode.NORMAL);
  };

  return (
    <div className="Home">
      <Navbar
        mode={modoAtual}
        create={() => setShowModalCreated(true)}
        update={() => handleActions(ActionMode.ATUALIZAR)}
        deleta={() => handleActions(ActionMode.DELETAR)}
      ></Navbar>

      {showModalCreated && (
        <ModalCreateEdit
          mode={modoAtual}
          closeModal={handleCloseModal}
          charToEdit={charToEdit}
          onDel={charToDel}
          onCreate={(newChar) => setCharCreated(newChar)}
          onEdit={(editChar) => setCharEdited(editChar)}
        />
      )}

      <CardList
        mode={modoAtual}
        newChar={charCreated}
        charEdited={charEdited}
        charDel={charDel}
        updateChar={handleUp}
        deleteChar={handleDel}
      />

      {charToDel && (
        <DeleteModal
          charToDel={charToDel}
          closeModal={handleCloseModal}
          onDel={(char) => setCharDel(char)}
        ></DeleteModal>
      )}

      <Footer />
    </div>
  );
}

export default Home;
