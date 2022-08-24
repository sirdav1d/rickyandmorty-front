import { ActionMode } from 'constants';
import './navbar.css';
import { useState } from 'react';
import { CharService } from 'services/CharService';
function Navbar({ create, findById, update, mode, deleta }) {
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
          />
          <button
            type="button"
            className="btnGen"
            disabled={mode !== ActionMode.NORMAL}
            onClick={() => getById(inputId)}
          >
            <img
              className="btnGen-find"
              src={'assets/img-ram/lupa.png'}
              alt="lupa"
            />
          </button>
        </div>

        <div className="containerBtnGen">
          <button
            type="button"
            onClick={() => create()}
            className="btnGen"
            disabled={mode !== ActionMode.NORMAL}
          >
            <img
              className="btnGen-add"
              src={'./assets/img-ram/adicao.png'}
              alt="Adicionar"
            />
          </button>

          <button
            type="button"
            onClick={() => update()}
            className={`btnGen ${mode === ActionMode.ATUALIZAR && 'btnActive'}`}
            disabled={mode === ActionMode.DELETAR}
          >
            <img
              className="btnGen-edit"
              src={'./assets/img-ram/editar.png'}
              alt="Editar"
            />
          </button>

          <button
            type="button"
            onClick={() => deleta()}
            className={`btnGen ${mode === ActionMode.DELETAR && 'btnDelete'}`}
            disabled={mode === ActionMode.ATUALIZAR}
          >
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
