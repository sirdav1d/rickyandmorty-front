import { ActionMode } from 'constants';
import './modalCreateEdit.css';
import { useState, useEffect } from 'react';
import ModalGen from 'components/modalGen/ModalGen';
import { CharService } from 'services/CharService';
import React from 'react';
function ModalCreateEdit({ closeModal, onCreate, charToEdit, onEdit, mode }) {
  const form = {
    nome: charToEdit?.nome ?? '',
    descricao: charToEdit?.descricao ?? '',
    foto: charToEdit?.foto ?? '',
  };

  const reset = {
    nome: '',
    descricao: '',
    foto: '',
  };

  const [createState, setCreateState] = useState(form);

  const handleChange = (e, name) => {
    setCreateState({ ...createState, [name]: e.target.value });
  };

  const [disable, setDisable] = useState(true);

  const formDisable = () => {
    const response = !Boolean(
      createState.nome.length &&
        createState.descricao.length &&
        createState.foto.length,
    );
    setDisable(response);
  };

  useEffect(() => {
    formDisable();
  });

  const handleSend = async () => {
    const { nome, descricao, foto } = createState;

    const character = {
      ...(charToEdit && { _id: charToEdit?._id }),
      nome: nome,
      descricao: descricao,
      foto: foto,
    };

    const serviceCall = {
      [ActionMode.NORMAL]: () => CharService.create(character),

      [ActionMode.ATUALIZAR]: () =>
        CharService.upById(charToEdit?._id, character),
    };

    const response = await serviceCall[mode]();

    const actionResponse = {
      [ActionMode.NORMAL]: () => onCreate(response),
      [ActionMode.ATUALIZAR]: () => onEdit(response),
    };

    actionResponse[mode]();

    setCreateState(reset);
    await closeModal();
  };

  return (
    <ModalGen closeModal={closeModal}>
      <div className="ModalCreate">
        <form className="formCreate" autoComplete="off">
          <h2>
            {ActionMode.ATUALIZAR === mode ? 'ATUALIZAR ' : 'ADICIONAR '}
            PERSONAGEM
          </h2>
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              name="nome"
              id="nome"
              onChange={(e) => handleChange(e, 'nome')}
              required
              placeholder="Teste Create Nome"
              value={createState.nome}
            />
          </div>

          <div>
            <label htmlFor="descricao">Descri????o:</label>
            <textarea
              type="text"
              name="descricao"
              id="descricao"
              required
              rows={3}
              onChange={(e) => handleChange(e, 'descricao')}
              placeholder="Teste Create Descri????o"
              value={createState.descricao}
            />
          </div>

          <div>
            <label htmlFor="foto">Digite URL da Imagem:</label>
            <input
              type="text"
              name="foto"
              id="foto"
              accept="image/png, image/gif,image/jpg ,image/jpeg"
              onChange={(e) => handleChange(e, 'foto')}
            />
          </div>

          <span className="btnGroup">
            <button
              onClick={handleSend}
              type="button"
              disabled={disable}
              className="btnForm create"
            >
              {ActionMode.ATUALIZAR === mode ? 'EDITAR' : 'CRIAR'}
            </button>

            <button type="button" className="btnForm back" onClick={closeModal}>
              VOLTAR
            </button>
          </span>
        </form>
      </div>
    </ModalGen>
  );
}

export default ModalCreateEdit;
