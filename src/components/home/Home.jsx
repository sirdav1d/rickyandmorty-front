import { useState } from 'react';
import { ActionMode } from 'constants';
import './home.css';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import CardList from 'components/cardList/CardList';
import ModalCreateEdit from 'components/modalCreate/ModalCreateEdit';
import ModalById from 'components/modalById/ModalById';

function Home() {
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);

  const [charEdited, setCharEdited] = useState();

  const [showModalCreated, setShowModalCreated] = useState(false);
  const [charCreated, setCharCreated] = useState();

  const [showModalById, setShowModalById] = useState(false);
  const [charFound, setCharFound] = useState('');

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
    setShowModalById(false);
    setCharFound()
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
        findById={(character) => {
          setCharFound(character);
          setShowModalById(true);
        }}
      ></Navbar>

      {showModalById && (
        <ModalById onFind={charFound} closeModal={handleCloseModal}></ModalById>
      )}

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
        updateChar={handleUp}
        deleteChar={handleDel}
      />

      <Footer />
    </div>
  );
}

export default Home;
