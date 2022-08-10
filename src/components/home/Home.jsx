import './home.css';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import CardList from 'components/cardList/CardList';
import ModalCreate from 'components/modalCreate/ModalCreate';
import ModalById from 'components/modalById/ModalById';
import { useState } from 'react';

function Home() {
  const [showModalCreated, setshowModalCreated] = useState(false);
  const [showModalById, setshowModalById] = useState(false);
  const [charFound, setCharFound] = useState('');
  const [charCreated, setCharCreated] = useState([]);

  return (
    <div className="Home">
      <Navbar
        create={() => setshowModalCreated(true)}
        findById={(character) => {
          setCharFound(character);
          setshowModalById(true);
        }}
      ></Navbar>

      {showModalCreated && (
        <ModalCreate
          closeModal={() => setshowModalCreated(false)}
          onCreate={(newChar) => setCharCreated(newChar)}
        />
      )}

      <CardList newChar={charCreated} />

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
