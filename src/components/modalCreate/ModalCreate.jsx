import './modalCreate.css';

function ModalCreate() {
  return (
        <div className="modalCreate">
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

        <div className='btnGroup'>
          <button type="submit" className="btnForm create">
            CRIAR
          </button>

          <button className="btnForm back">
            VOLTAR
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalCreate;
