import './navbar.css';
import { useState } from 'react';
import { CharService } from 'services/CharService';
function Navbar({ create, findById }) {
  const [inputId, setInputId] = useState('');

  const getById = async (inputId) => {
    const response = await CharService.getById(inputId);
    findById(response);
  };

  return (
    <div className="Navbar">
      <a className="navTitle" href="/" rel="noopener noreferrer">
        RICK AND MORTY FUN
      </a>

      <div className="nav-body">
        <div className="navFind">
          <input
            type="text"
            placeholder="Procurar por ID"
            onChange={(e) => setInputId(e.target.value)}
            value={inputId}
          />
          <button type="button">
            <img
              className="lupa"
              src="https://pbs.twimg.com/media/FZYaXDlXgAEo8L5?format=png&name=360x360"
              alt="lupa"
              onClick={() => getById(inputId)}
            />
          </button>
        </div>

        <button type="button" onClick={() => create()} className="btnCreate">
          ADD PERSONAGEM
        </button>
      </div>
    </div>
  );
}

export default Navbar;
