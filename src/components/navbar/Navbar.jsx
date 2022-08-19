import { ActionMode } from 'constants';
import './navbar.css';
import { useState } from 'react';
import { CharService } from 'services/CharService';
function Navbar({ create, findById, updateChar, mode }) {
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
            placeholder="62c4dac270d29daff34c050b"
            onChange={(e) => setInputId(e.target.value)}
            value={inputId}
            required="required"
          />
          <button type="button" className="btnGen">
            <img
              className="btnGen-find"
              src={'assets/img-ram/lupa.png'}
              alt="lupa"
              onClick={() => getById(inputId)}
            />
          </button>
        </div>

        <div className="containerBtnGen">
          <button type="button" onClick={() => create()} className="btnGen">
            <img
              className="btnGen-add"
              src={'./assets/img-ram/adicao.png'}
              alt="Adicionar"
            />
          </button>

          <button type="button" onClick={() => updateChar()} className={`btnGen ${mode === ActionMode.ATUALIZAR && "btnActive"}`}>
            <img
              className="btnGen-edit"
              src={'./assets/img-ram/editar.png'}
              alt="Adicionar"
            />
          </button>

          <button type="button" onClick={() => create()} className="btnGen">
            <img
              className="btnGen-del"
              src={'./assets/img-ram/excluir.png'}
              alt="Adicionar"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
