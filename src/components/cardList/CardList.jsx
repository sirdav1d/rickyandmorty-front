import './cardList.css';
import { charactersRam } from '../../mocks/characters';
import Card from 'components/card/Card';
function CardList() {
  return (
    <div className="CardList">
      {charactersRam.map((char, index) => (
        <div className="CardList_container" key={`Char - ${index}`}>
          <Card
            nome={char.nome}
            descricao={char.descricao}
            foto={char.foto}
            
          ></Card>
        </div>
      ))}
    </div>
  );
}

export default CardList;
