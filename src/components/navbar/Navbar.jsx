// import ModalCreate from 'components/modalCreate/ModalCreate';
import './navbar.css';
// import { useState, useEffect } from 'react';
// import { CharService } from 'services/CharService';

function Navbar({create}) {
  // const [characters, setCharacters] = useState([]);

  // const getCharById = async (id) => {
  //   const response = await CharService.getById(id);
  //   setCharacters(response);
  // };

  // useEffect(() => {
  //   getCharById();
  // }, []);


  return (
    <div className="Navbar">
      <a className="navTitle" href="/" rel="noopener noreferrer">
        RICK AND MORTY FUN
      </a>

      <div className="nav-body">
        <div className="navFind">
          
          <input type="text" placeholder="Procurar por ID" />
          <button type="submit">
            <img
              className="lupa"
              src="https://pbs.twimg.com/media/FZYaXDlXgAEo8L5?format=png&name=360x360"
              alt="lupa"
            />
          </button>
        </div>

        <button type="button" onClick={()=>create()} className="btnCreate">CRIAR PERSONAGEM</button>
      </div>
    </div>
  );
}

export default Navbar;
