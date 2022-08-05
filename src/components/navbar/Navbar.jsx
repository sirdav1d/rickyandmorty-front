import './navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <a className="navTitle" href="/" rel="noopener noreferrer">
        RICK AND MORTY FUN
      </a>

      <div className="nav-body">
        <div className="navFind">
          <input type="text" placeholder="Procurar por ID" />
          <button type="submit">
            <img
              className="lupa"
              src={require('../../assets/img-ram/lupa.png')}
              alt=""
            />
          </button>
        </div>

        <button className="btnCreate">CRIAR PERSONAGEM</button>
      </div>
    </div>
  );
}

export default Navbar;
