import { CharService } from 'services/CharService';
import './deleteModal.css';
import ModalGen from 'components/modalGen/ModalGen';

const DeleteModal = ({ closeModal, charToDel, onDel }) => {
  const handleDelete = async (char) => {
    await CharService.delById(char._id);
   await onDel(char);
   await closeModal();
  };

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
          <button className="btnConfirm btn" onClick={handleDelete(charToDel)}>
            Confirmar
          </button>
        </div>
      </div>
    </ModalGen>
  );
};

export default DeleteModal;
