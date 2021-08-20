import "./styles.css";
import React, { Component } from "react";
import Car from "./imgs/car.jpeg";

class App extends Component {
  state = {
    Modelos: [
      {
        estoque: true,
        carro: "Jetta",
        montadora: "Volkswagen",
        preço: 144000.0,
        tipo: "Sedan"
      },
      {
        estoque: true,
        carro: "Polo",
        montadora: "Volkswagen",
        preço: 70000.0,
        tipo: "Hatch"
      },
      {
        estoque: true,
        carro: "T-Cross",
        montadora: "Volkswagen",
        preço: 123000.0,
        tipo: "SUV"
      },
      {
        estoque: true,
        carro: "Tiguan R-line",
        montadora: "Volkswagen",
        preço: 146000.0,
        tipo: "SUV"
      },
      {
        estoque: true,
        carro: "Civic",
        montadora: "Honda",
        preço: 115000.0,
        tipo: "Sedan"
      },
      {
        estoque: true,
        carro: "Corolla",
        montadora: "Toyota",
        preço: 110000.0,
        tipo: "Sedan"
      },
      {
        estoque: true,
        carro: "Corolla Cross",
        montadora: "Toyota",
        preço: 184000.0,
        tipo: "SUV"
      },
      {
        estoque: true,
        carro: "Compass",
        montadora: "Jeep",
        preço: 132000.0,
        tipo: "SUV"
      },
      {
        estoque: true,
        carro: "Golf GTI",
        montadora: "Volkswagen",
        preço: 138000.0,
        tipo: "Hatch"
      }
    ],
    Carrinho: [],
    Mostrar: true
  };

  Add = (item) => {
    item.estoque = false;
    this.setState({
      Carrinho: [...this.state.Carrinho, item],
      Mostrar: false
    });
  };

  Remove = (e) => {
    e.estoque = true;
    this.setState({
      Carrinho: this.state.Carrinho.filter((item) => {
        return item.carro !== e.carro;
      })
    });
  };

  Clear = () => {
    this.state.Carrinho.map((item) => (item.available = true));
    this.setState({
      Carrinho: []
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>Loja de carros!</h1>
        </div>
        <section>
          <div className="prod-container">
            {this.state.Modelos.map((item, index) => {
              return (
                <div className="prod-box" key={index}>
                  <div className="prod-title">
                    <h3>{item.carro}</h3>
                    <button
                      disabled={!item.estoque}
                      className="bt-add"
                      onClick={() => {
                        this.Add(item);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="prod-conf">
                    <p>Montadora: {item.montadora}</p>
                    <p>
                      Preço:
                      {item.preço.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL"
                      })}
                    </p>
                    <p>Tipo: {item.tipo}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="prodlist-container">
            <div className="prodlist-box">
              <div className="prodlist-boxes">
                <div>
                  {(this.state.Mostrar || this.state.Carrinho.length === 0) && (
                    <div>
                      <img src={Car} alt="logo" />
                      <h4>Adicione seus carros preferidos aqui :)</h4>
                    </div>
                  )}
                </div>
                {this.state.Carrinho.map((item, index) => (
                  <div className="prodlist" key={index}>
                    <div className="prodlist-title">
                      <p>{item.carro}</p>
                      <button
                        className="prodlist-bt"
                        onClick={() => {
                          this.Remove(item);
                        }}
                      >
                        -
                      </button>
                    </div>
                    <div className="prodlist-product">
                      <p>Tipo: {item.tipo}</p>
                      <p>
                        Preço:
                        {item.preço.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL"
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="total-box">
              <div>
                <button className="reset-bt" onClick={this.Clear}>
                  Limpar carrinho
                </button>
              </div>
              <p>Total</p>
              <p>
                {this.state.Carrinho.reduce(
                  (acc, curr) => acc + curr.preço,
                  0
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL"
                })}
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default App;
