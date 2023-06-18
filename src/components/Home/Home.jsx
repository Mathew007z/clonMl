import React from "react";
import "../../css/home.css";
import creditCart from "../../assets/credit-card.svg";
import debitCart from "../../assets/debit-card.svg";
import creditoMp from "../../assets/mercado-creditsv2.svg";
import efectivoIcon from "../../assets/payment-agreement.svg";

// import { useDatos } from '../../hooks/useDatos';

const Home = () => {
  // const data = useDatos()
  // console.log(data)

  return (
    <div className="home-contain">
      <div className="center-banner">
        <section className="cart-contain">
          <img
            src={creditCart}
            alt="icono de tarjeta de credito"
            className="icons-banner"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="titles-banner">Tarjeta de crédito</span>
            <a href="" className="links-banner">
              Ver promociones bancarias
            </a>
          </div>
        </section>

        <section className="cart-contain">
          <img
            src={debitCart}
            alt="icono de tarjeta de debito"
            className="icons-banner"
          />
           <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="titles-banner">Tarjeta de débito</span>
            <a href="" className="links-banner">
              Ver mas
            </a>
          </div>
        </section>
        <section className="cart-contain">
          <img
            src={creditoMp}
            alt="creditos de mercado pago"
            className="icons-banner"
          />
           <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="titles-banner">Cuotas sin tarjeta</span>
            <a href="" className="links-banner">
              Conocé Mercado Crédito
            </a>
          </div>
        </section>
        <section className="cart-contain">
          <img
            src={efectivoIcon}
            alt="icono de efectivo"
            className="icons-banner"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="titles-banner">Efectivo</span>
            <a href="" className="links-banner">
              Ver mas
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
