import { Login } from "./components/login";
import { Homepage } from "./components/homepage";
import imgInitial from "./imgInitial.svg";
import "./App.css";
import { useState } from "react";

//<Login source={imgInitial}></Login>;
function App() {
  let [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  function erase(cards) {
    const newList = listTransactions.filter(
      (card) => card.description !== cards.description
    );
    setListTransactions(newList);
  }
  function filterEntrada() {
    const newList = listTransactions.filter((card) => card.type === "entrada");
    setListTransactions(newList);
  }
  function filterSaida() {
    const newList = listTransactions.filter((card) => card.type === "saida");
    setListTransactions(newList);
  }
  function totalValue() {
    const valorTotal = listTransactions.reduce(
      (acc, card) => acc + card.value,
      0
    );
    return valorTotal;
  }
  /*function listTransactionsCards() {
    return listTransactions.map((card, i) => (
      <li key={i}>
        <div className="divDescripCard">
          <h1>{card.description}</h1>
          <p>{card.type}</p>
        </div>
        <div className="divValueCard">
          <p>RS {card.value}</p>
          <button onClick={() => erase(card)}>
            <img src={trashImg} alt="" />
          </button>
        </div>
      </li>
    ));
  } */
  console.log(totalValue());
  return (
    <div className="App">
      <Homepage
        totalValue={totalValue}
        erase={erase}
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      ></Homepage>
    </div>
  );
}

export default App;
