import './navbar.css';

function Navbar() {
  return (
    <div className="Navbar">

      <a className="navTitle" href="/" rel="noopener noreferrer">
        RICK AND MORTY FUN
      </a>

      <div className="nav-body">

        <div className='navFind'>
          <label>Procurar por ID</label>
          <input type="text" placeholder="ID do personagem" />
        </div>

        <a href="/" rel="noopener noreferrer">
          CRIAR PERSONAGEM
        </a>

      </div>
    </div>
  );
}

export default Navbar;
