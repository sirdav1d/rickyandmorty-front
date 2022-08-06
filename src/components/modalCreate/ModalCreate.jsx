import './modalCreate.css';
import Overlay from 'components/overlay/Overlay';
// import { useState } from 'react';
function ModalCreate({ closeModal }) {
  const handleClick = (e, canClose) => {
    e.stopPropagation();
    if (canClose) {
      closeModal();
    }
  };

  return (
    <Overlay overlayClick={closeModal}>
      <div className="modalCreate" onClick={handleClick()}>
        <span className="modalClose" onClick={(e) => handleClick(e, true)}>
          +
        </span>

        <form action="POST" method="post" className="formCreate">

          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="nome" required="required" />

          <label htmlFor="descricao">Descrição</label>
          <textarea
            type="text"
            name="descricao"
            id="descricao"
            required="required"
            rows={4}
          />

          <label htmlFor="foto">Foto</label>
          <input type="text" name="foto" id="foto" required="required" />

          <div className="btnGroup">
            <button type="submit" className="btnForm create">
              CRIAR
            </button>

            <button className="btnForm back">VOLTAR</button>
          </div>
        </form>
      </div>
    </Overlay>
  );
}

export default ModalCreate;
