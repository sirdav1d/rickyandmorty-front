import './home.css';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import CardList from 'components/cardList/CardList';
import ModalCreate from 'components/modalCreate/ModalCreate';
import { useState } from 'react';

function Home() {
  const [showModal, setShowModal] = useState(false);

  const [charCreated, setCharCreated] = useState()

  return (
    <div className="Home">
      <Navbar create={() => setShowModal(true)} />
      <CardList newChar={charCreated} />
      {showModal && (
        <ModalCreate
          closeModal={() => setShowModal(false)}
          onCreate={(newChar) => setCharCreated(newChar)}
        />
      )}

      <Footer />
    </div>
  );
}

export default Home;
