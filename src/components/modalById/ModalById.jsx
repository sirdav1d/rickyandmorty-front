import ModalGen from 'components/modalGen/ModalGen';
import { ActionMode } from 'constants';
import Card from 'components/card/Card';
import { useState, useEffect } from 'react';
// import { CharService } from 'services/CharService';

const ModalById = ( {closeModal, onFind }) => {


  const [findState, setFindState] = useState("");


  useEffect(() => {
    setFindState(onFind);

  }, [onFind]);

  const {nome, descricao, foto, _id} = findState

  console.log(findState)

  return (
    <ModalGen className="modalGen" closeModal={closeModal}>
      <div className="ModalById">
        <Card
          mode={ActionMode.NORMAL}
          nome={nome}
          descricao={descricao}
          foto={foto}
          key={`Char - ${_id}`}
        ></Card>
      </div>
    </ModalGen>
  );
};

export default ModalById;
