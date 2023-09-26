import "./Card.css";

export default function Card(props) {
  const item = props.item;

  return (
    <div className="card">
      <h2>{item.name}</h2>

      <div className="tags">
        <span className="tag">Anime: {item.anime}</span>
        <span className="tag">{item.role}</span>
        <span className="tag">Habilidades: {item.habilities}</span>
      </div>
      <img src={item.imageUrl} />
    </div>
  );
}
