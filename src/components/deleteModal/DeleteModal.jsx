import './deleteModal.css';
import ModalGen from 'components/modalGen/ModalGen';
import { CharService } from 'services/CharService';
import React from 'react';

const DeleteModal = ({ closeModal, charToDel, onDel }) => {

  const handleDelete = async (charToDel) => {
    await CharService.delById(charToDel._id);
    onDel(charToDel);
    closeModal();
  };

  console.log(charToDel._id)

  return (
    <ModalGen closeModal={closeModal}>
      <div className="DeleteModal">
        <h1 className="titleModal">CONFIRMAÇÃO!</h1>
        <p className="contextModal">
          Você realmente quer apagar o <b> {charToDel.nome}</b>
        </p>

        <div className="bntGroup">
          <button className="btnBack btn" onClick={closeModal}>
            Voltar
          </button>
          <button className="btnConfirm btn" onClick={handleDelete}>
            Confirmar
          </button>
        </div>
      </div>
    </ModalGen>
  );
};

export default DeleteModal;
