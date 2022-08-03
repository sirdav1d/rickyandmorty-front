import './card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={props.foto} alt={props.nome} />
      </div>
      <div className="cardContent">
        <h1>{props.nome}</h1>
        <p>{props.descricao}</p>
      </div>
    </div>
  );
}

export default Card;
