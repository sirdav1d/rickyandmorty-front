import { ActionMode } from 'constants';
import './navbar.css';
import React from 'react';

function Navbar({ create, update, mode, deleta }) {
  return (
    <div className="Navbar">
      <a className="navTitle" href="/" rel="noopener noreferrer">
        RICK AND MORTY REACT JS
      </a>

      <div className="nav-body">
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
