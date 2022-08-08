import './navbar.css';

function Navbar({ create }) {
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
              src="https://pbs.twimg.com/media/FZYaXDlXgAEo8L5?format=png&name=360x360"
              alt="lupa"
            />
          </button>
        </div>

        <button type="button" onClick={() => create()} className="btnCreate">
          ADD PERSONAGEM
        </button>
      </div>
    </div>
  );
}

export default Navbar;
