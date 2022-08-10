import './modalById.css';
import ModalGen from 'components/modalGen/ModalGen';
import Card from 'components/card/Card';
import { useState, useEffect } from 'react';
// import { CharService } from 'services/CharService';

const ModalById = ({ closeModal, onFind }) => {
  const [findState, setFindState] = useState('');

  const getById = (onFind) => {
    const response = onFind.data;
    setFindState(response);
  };
  useEffect(() => {
    getById(onFind);
  }, [onFind]);


  const {nome, descricao, foto} = findState


  console.log(nome)
  return (

    <ModalGen closeModal={closeModal}>
      <div className="ModalById">
     
            <Card
              nome={nome}
            descricao={descricao}
            foto={foto}
            key={`Char - ${findState.length}`}
            ></Card>

      </div>
    </ModalGen>

   
  );

  
};

export default ModalById;
