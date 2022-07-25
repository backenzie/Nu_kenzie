import { useState } from "react";
import "./style.css";

/*
<div>
  <h2>Você não possui nenhum Lançamento...</h2>
  <img source={emptyList} alt="cardsListaVazia" />
</div> 
*/

export const Homepage = ({
  erase,
  trashImg,
  listTransactions,
  setListTransactions,
  totalValue,
  children,
}) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");

  function submit(event) {
    event.preventDefault();

    const newCard = {
      description,
      type,
      value,
    };
    setListTransactions((oldCard) => [...oldCard, newCard]);
  }

  return (
    <div className="divBodyPage">
      <div className="divHeader">
        <h1>
          <span>Nu</span> Kenzie
        </h1>
        {children}
      </div>
      <div className="divHome">
        <div className="divForm">
          <form onSubmit={submit}>
            <div className="divDescription">
              <p>Descrição</p>
              <input
                type="text"
                placeholder="Descrição... ex: Roupas"
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div className="divFantasma">
              <div className="divValues">
                <p>Valor</p>
                <input
                  type="value"
                  onChange={(event) => setValue(event.target.value)}
                />
              </div>
              <div className="divSelect">
                <p>Tipo de valor</p>
                <select onChange={(event) => setType(event.target.value)}>
                  <option value="entrada">Entrada</option>
                  <option value="saida">Despesa</option>
                </select>
              </div>
            </div>
            <button type="submit">Inserir Valor</button>
          </form>
          <div className="divValue">
            <div className="valorTotal">
              <h4>Valor total </h4>
              <span>R$ {totalValue()}</span>
            </div>
            <p>O valor se refere ao saldo</p>
          </div>
        </div>
        <div className="divList">
          <div className="divFilters">
            <h2>Resumo Financeiro</h2>
            <div className="divButtons">
              <button
                onClick={() => {
                  return {};
                }}
              >
                Todos
              </button>
              <button>Entradas</button>
              <button>Despesas</button>
            </div>
          </div>
          <ul className="ulCards">
            {listTransactions.map((card, i) =>
              card.type === "entrada" ? (
                <li key={i} className="cardLi">
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
              ) : (
                <li key={i} className="cardLi cardSaida">
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
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

/*

<ul className="ulCards">
            {listTransactions.map((card, i) =>
              card.type == "entrada" ? (
                <li key={i} className="cardLi">
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
              ) : (
                <li key={i} className="cardLi cardSaida">
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
              )
            )}
          </ul>

*/

/* 

          <ul className="ulCards">
            {() =>
              listTransactions.map((card, i) => {
                listTransactions.length > 0 ? (
                  card.type === "entrada" ? (
                    <li key={i} className="cardLi">
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
                  ) : (
                    <li key={i} className="cardLi cardSaida">
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
                  )
                ) : (
                  <div>
                    <div>
                      <h2>Você não possui nenhum Lançamento...</h2>
                      <div className="divImg"></div>
                    </div>
                  </div>
                );
              })
            }
          </ul>

*/
