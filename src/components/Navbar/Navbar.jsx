import React from "react";
import "../../css/navbar.css";
import LogoMl from "../../assets/logoML.png";
import SvgIcon from "../../assets/geo-alt.svg";
import IconLupa from "../../assets/search.svg";
import IconCart from "../../assets/cart2.svg";
import Carrousel from "../Carrousel/Carrousel";
const Navbar = () => {
  return (
    <>
      <div className="navbar-cotain">
        <div className="cont-logo-location">
          <img
            src={LogoMl}
            className="logo-ml"
            alt="logotipo de mercado libre"
          />
          <div className="ml-cont">
            <div className="conteiner-envio">
              <span className="env-text">Enviar a</span>
              <span className="capital">Capital Federal</span>
            </div>
            <div>
              <img
                src={SvgIcon}
                alt="icono de localizacion"
                className="icon-location"
              />
            </div>
          </div>
        </div>
    
        <div className="input-container">
          <div className="contain-lupa">
            <input
              type="text"
              className="input-center"
              placeholder="Buscar productos, marcas y más..."
            />
            <img
              src={IconLupa}
              alt="icono de lupa de busqueda"
              className="input-icon"
            />
          </div>
          <div className="links-nav">
            <ul className="ul-link">
              <li>
                <a href="">Categorias</a>
              </li>
            </ul>
            <ul className="ul-link">
              <li>
                <a href="">Ofertas</a>
              </li>
            </ul>
            <ul className="ul-link">
              <li>
                <a href="">Historial</a>
              </li>
            </ul>
            <ul className="ul-link">
              <li>
                <a href="">Supermercado</a>
              </li>
            </ul>
            <ul className="ul-link">
              <li>
                <a href="">Moda</a>
              </li>
            </ul>
            <ul className="ul-link">
              <li>
                <a href="">Vender</a>
              </li>
            </ul>
            <ul className="ul-link">
              <li>
                <a href="">Ayuda</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contain-part-rigth">
          <img
            src="https://http2.mlstatic.com/D_NQ_957153-MLA69318147677_052023-OO.webp"
            className="subscribe"
            alt="suscribirse"
          />
          <div className="ul-container-subs">
            <ul className="ul-link-subs">
              <li>
                <a href="" className="link-sub">
                  Crea tu cuenta
                </a>
              </li>
            </ul>
            <ul className="ul-link">
              <li>
                <a href="" className="link-sub">
                  Ingresa
                </a>
              </li>
            </ul>
            <ul className="ul-link">
              <li>
                <a href="" className="link-sub">
                  Mis compras
                </a>
              </li>
            </ul>
            <img
              src={IconCart}
              alt="icono de carrito de compras"
              className="cart-logo"
            />
          </div>
        </div>
      </div>
      <Carrousel/>
    </>
  );
};

export default Navbar;
