import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Tag from "./components/Tag/Tag";

function App() {
  // const item1 = {
  //   name: "Yugi Itadori",
  //   imageUrl:
  //     "https://i.pinimg.com/originals/85/b3/05/85b305c18de2de0d67b56a87918bbf68.jpg",
  //   tags: ["Jujutsu Kaisen", "Hospedeiro do Sukuna", "Força sobre-humana"],
  // };

  // const item2 = {
  //   name: "Nobara Kugisaki",
  //   imageUrl:
  //     "https://i.pinimg.com/736x/93/a0/dd/93a0dd697d19c69c840ebbf3717462e9.jpg",
  //   tags: ["Jujutsu Kaisen", "Feiticeira Jujutsu", "Energia Amaldiçoada"],
  // };

  // const item3 = {
  //   name: "Fushiguro Megumi",
  //   imageUrl:
  //     "https://i.pinimg.com/1200x/b5/7f/99/b57f99e90306a3cde3720570377d4862.jpg",
  //   tags: ["Jujutsu Kaisen", "Feiticeiro Jujutsu", "Usuário de Shikigami"],
  // };

  // const itens = [item1, item2, item3];

  const [itens, setItens] = useState([]);
  //useState do react traz duas coisas:
  //1. O estado contendo o valor
  //2. A função atualiza o valor do estado
  //       Quando executada, a função também re-renderiza o componente automaticamente.

  async function loadDataApi() {
    const response = await fetch("https://rickandmortyapi.com/api/character/");

    const json = await response.json();

    const results = json.results;

    setItens(results);
  }

  // useEffect recebe duas informações:
  //1. função contendo o efeito será protegido pelo useEffect
  //2. Dependencias que controlam a executam do useEffect.
  //   Array vazio para executar apenas 1 vez.
  useEffect(function () {
    //efeito que será protegido pelo useEffect
    loadDataApi();
  }, []);

  return (
    <>
      {itens.map(function (item, index) {
        return <Card item={item} key={`card_${index}`} />;
      })}
    </>
  );
}

export default App;
