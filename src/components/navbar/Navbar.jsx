import './navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <a href="/"  rel="noopener noreferrer">
        <img
          src="https://pbs.twimg.com/media/FYz56XRWAAAAb8q?format=png&name=240x240"
          alt="Ricky and Morty Logo"
        />
      </a>
      <ul className="nav">
        <li>
          <a href="/"  rel="noopener noreferrer">
            Procurar por ID
          </a>
        </li>
        <li>
          <a href="/"  rel="noopener noreferrer">
            Criar
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
