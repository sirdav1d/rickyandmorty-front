import './card.css';

function Card() {
  return (
    <div className="card">
      <div className='cardImg'>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/159.jpeg"
          alt="MORTY SANCHES"
        />
      </div>
      <div className='cardContent'>
        <h1>MORTY SANCHES</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
          quisquam qui dolorum.
        </p>
      </div>
    </div>
  );
}

export default Card;
