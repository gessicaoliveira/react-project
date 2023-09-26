import "./App.css";
import Card from "./components/Card";

function App() {
  const item1 = {
    name: "Yugi Itadori",
    anime: "Jujutsu Kaisen",
    role: "Hospedeiro do Sukuna",
    habilities: "Força sobre-humana",
    imageUrl:
      "https://i.pinimg.com/originals/85/b3/05/85b305c18de2de0d67b56a87918bbf68.jpg",
  };

  const item2 = {
    name: "Fushiguro Megumi",
    anime: "Jujutsu Kaisen",
    role: "Feiticeiro Jujutsu",
    habilities: "Usuário de Shikigami",
    imageUrl:
      "https://i.pinimg.com/1200x/b5/7f/99/b57f99e90306a3cde3720570377d4862.jpg",
  };

  const item3 = {
    name: "Nobara Kugisaki",
    anime: "Jujutsu Kaisen",
    role: "Feiticeira Jujutsu",
    habilities: "Energia Amaldiçoada",
    imageUrl:
      "https://i.pinimg.com/736x/93/a0/dd/93a0dd697d19c69c840ebbf3717462e9.jpg",
  };

  const itens = [item1, item2, item3];

  return (
    <>
      {itens.map(function (item) {
        return <Card item={item} />;
      })}
    </>
  );
}

export default App;
