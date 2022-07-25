import { Login } from "./components/login";
import { Homepage } from "./components/homepage";
import imgInitial from "./imgInitial.svg";
import "./App.css";
import { useState } from "react";

//;
function App() {
  const [init, setInit] = useState(true);

  let [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  function changeForFalse() {
    setInit(false);
  }

  function changeForTrue() {
    setInit(true);
  }

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

  return (
    <div className="App">
      {init ? (
        <Login source={imgInitial}>
          <button id="btnIniciar" onClick={changeForFalse}>
            Iniciar
          </button>
        </Login>
      ) : (
        <Homepage
          totalValue={totalValue}
          erase={erase}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        >
          <button onClick={changeForTrue}>Inicio</button>
        </Homepage>
      )}
    </div>
  );
}

export default App;
/*
 <Homepage
        totalValue={totalValue}
        erase={erase}
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      ></Homepage>

*/
