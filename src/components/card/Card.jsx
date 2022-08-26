import { ActionMode } from 'constants';
import './card.css';

function Card(props) {
  const badgeAction = (canRender) => {
    if (canRender) {
      return (
        <span
          className={`${props.mode !== ActionMode.NORMAL &&
            'cardTag'} ${props.mode === ActionMode.DELETAR && 'tagDEL'}`}
        >
          {props.mode}
        </span>
      );
    }
  };

  const handleClick = (e, id) => {
    e.stopPropagation();
    props.clickIten(id);
  };

  return (
    <div
      className={`card ${props.mode !== ActionMode.NORMAL &&
        'cardDisable'} ${props.mode === ActionMode.DELETAR && 'cardDEL'}`}
      onClick={(e) => handleClick(e, props.id)}
    >
      <div
        className={`cardImg ${props.mode !== ActionMode.NORMAL &&
          'cardImgDisable'} `}
      >
        <img src={props.foto} alt={props.nome} />
      </div>

      {badgeAction(props.mode !== ActionMode.NORMAL)}

      <div
        className={`cardContent ${props.mode !== ActionMode.NORMAL &&
          'cardContentDisable'} `}
      >
        <h1>{props.nome}</h1>
        <p>{props.descricao}</p>
      </div>
    </div>
  );
}

export default Card;
