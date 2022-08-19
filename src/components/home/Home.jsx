import { ActionMode } from 'constants';
import './home.css';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import CardList from 'components/cardList/CardList';
import ModalCreateEdit from 'components/modalCreate/ModalCreateEdit';
import ModalById from 'components/modalById/ModalById';
import { useState } from 'react';

function Home() {
  const [modoAtual, setModoAtual] = useState(ActionMode.NORMAL);
  const [showModalCreated, setshowModalCreated] = useState(false);
  const [showModalById, setshowModalById] = useState(false);
  const [charFound, setCharFound] = useState('');
  const [charCreated, setCharCreated] = useState([]);
  const [charToUp, setCharToUp] = useState([]);
  const [charToDel, setCharToDel] = useState([]);

  const handleActions = (action) => {
    const newAction = modoAtual === action ? ActionMode.NORMAL : action;
    setModoAtual(newAction);
  };

  const handleDel = (charToDelete) => {
    setCharToDel(charToDelete);
  };

  const handleUp = (charToUpdate) => {
    setCharToUp(charToUpdate);
    setshowModalCreated(true);
  };

  const handleCloseModal = () => {
    setshowModalCreated(false);
    setCharCreated();
    setCharToDel();
    setCharToUp();
  };

  return (
    <div className="Home">
      <Navbar
        create={() => setshowModalCreated(true)}
        findById={(character) => {
          setCharFound(character);
          setshowModalById(true);
        }}
        updateChar={() => handleActions(ActionMode.ATUALIZAR)}
        mode={modoAtual}
      ></Navbar>

      {showModalCreated && (
        <ModalCreateEdit
          closeModal={handleCloseModal}
          onCreate={(newChar) => setCharCreated(newChar)}
          onEdit={charToUp}
          onDel={charToDel}
          mode={modoAtual}
        />
      )}

      <CardList
        mode={modoAtual}
        newChar={charCreated}
        deleteChar={handleDel}
        editChar={handleUp}
      />

      {showModalById && (
        <ModalById
          closeModal={() => setshowModalById(false)}
          onFind={charFound}
        ></ModalById>
      )}

      <Footer />
    </div>
  );
}

export default Home;
