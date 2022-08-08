import './modalCreate.css';
import { useState, useEffect } from 'react';
import ModalGen from 'components/modalGen/ModalGen';
import { CharService } from 'services/CharService';
function ModalCreate({ closeModal, onCreate }) {
  const form = {
    nome: '',
    descricao: '',
    foto: '',
  };

  const [createState, setCreateState] = useState(form);

  const handleChange = (e, name) => {
    setCreateState({ ...createState, [name]: e.target.value });
  };

  const [disable, setDisable] = useState(true);

  const formDisabel = () => {
    const response = !Boolean(
      createState.nome.length &&
        createState.descricao.length &&
        createState.foto.length,
    );
    setDisable(response);
  };

  useEffect(() => {
    formDisabel();
  });

  const createChar = async () => {
    const { nome, descricao, foto } = createState;
    const renamePic = foto.split('\\').pop();
    const character = {
      nome: nome,
      descricao: descricao,
      foto: `./assets/img-ram/${renamePic}`,
    };
    const response = await CharService.create(character);
    onCreate(response);
    closeModal();
  };

  return (
    <ModalGen closeModal={closeModal}>
      <div className="ModalCreate">
        <form className="formCreate" autoComplete="off">
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              name="nome"
              id="nome"
              onChange={(e) => handleChange(e, 'nome')}
              required
              placeholder="Nome do Personagem"
              value={createState.nome}
            />
          </div>

          <div>
            <label htmlFor="descricao">Descrição:</label>
            <textarea
              type="text"
              name="descricao"
              id="descricao"
              required
              rows={4}
              onChange={(e) => handleChange(e, 'descricao')}
              placeholder="Detalhe o personagem"
              value={createState.descricao}
            />
          </div>

          <div>
            <label htmlFor="foto">
              {!createState.foto.length
                ? 'Selecione uma imagem:'
                : createState.foto}
            </label>
            <input
              type="file"
              name="foto"
              id="foto"
              value={createState.foto}
              accept="image/png, image/gif,image/jpg ,image/jpeg"
              onChange={(e) => handleChange(e, 'foto')}
            />
          </div>

          <span className="btnGroup">
            <button
              onClick={createChar}
              type="button"
              disabled={disable}
              className="btnForm create"
            >
              CRIAR
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

export default ModalCreate;
