import Tag from "./Tag/Tag";
import "./Card.css";

export default function Card(props) {
  const item = props.item;

  // Garantir que temos sempre um array em tags

  // Jeito literal
  // let tags = item.tags;

  // if (!tags) {
  //   tags = [];
  // }
  // Jeito otimizado
  //const tags = item.tags || [];

  const tags = [
    `Status: ${item.status}`,
    `Species: ${item.species}`,
    `Species: ${item.origin.name}`,
  ];
  // console.log(tags);

  // TODO: Fazer as tags funcionarem na nova estrutura de dados recebida da API
  //        Exibir Tag de Status, Species e Origin

  return (
    <div className="card">
      <h2>{item.name}</h2>

      <div className="tags">
        {tags.map(function (tag, index) {
          return <Tag text={tag} key={`card_tag_${index}`} />;
        })}
      </div>

      <img src={item.image} />
    </div>
  );
}
