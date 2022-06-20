import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MenuHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  position: fixed;
  height: ${(props) => (props.visibilidade === "open" ? "100px" : "100%")};
  padding: 25px;
  z-index: 10;
  font-weight: 600;
  background-color: ${(props) =>
    props.visibilidade === "open" ? "white" : "#161924fb"};
  @media screen and (min-width: 1000px) {
    height: auto;
    padding-left: 70px;
  padding-right: 70px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
  }

  .OpcoesRedesSociais {
    height: 100%;
    display: ${(props) => (props.visibilidade === "open" ? "none" : "flex")};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 1000px) {
      display: flex;
    }
    .RedesSociais {
      width: 100px;
      display: flex;
      justify-content: space-between;
      img {
        width: 30px;
      }
      @media screen and (min-width: 1000px) {
        display: none;
      }
    }
    .MenuDeOpcoes {
      flex-direction: column;

      width: 80%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 30px;
      @media screen and (min-width: 1000px) {
        flex-direction: row;
width: auto;
        display: flex;
        margin-top: 0;
        margin-left: 0;
      }
      .Botao {
        cursor: pointer;
        background-color: #2f354f;
        border-radius: 5px;
        border: 1px solid white;
        @media screen and (min-width: 1000px) {
          background-color: #fb5d5e;
          border: none;
          color: white;
          :hover {
            border: 2px solid #fb5d5e;
            background-color: white;
          }
        }
      }
      .Acesso {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px;
        margin-bottom: 10px;
        letter-spacing: 3px;

        color: white;
        @media screen and (min-width: 1000px) {
          margin-bottom: 0px;
          width: 135px;
          margin-right: 10px;
          color: black;
          height: 50px;
          :hover {
            color: #fb5d5e;
          }
        }
      }
    }
  }

  .Logo-Icon {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    height: 50px;

    @media screen and (min-width: 1000px) {
      width: auto;
    }
    .Logo {
      width: 150px;
      height: auto;
      margin-left: 20px;
    }
    .IconOpenClose {
      padding: 15px;

      img {
        width: 30px;
        height: 30px;
      }
      @media screen and (min-width: 1000px) {
        display: none;
      }
    }
  }
`;

function Menu_Header(props) {
  const [icon, setIcon] = useState("open");
  return (
    <MenuHeader visibilidade={icon}>
      <div className="Logo-Icon">
        <img className="Logo" src="/logo-bookmark.svg" alt="" />
        <a
          className="IconOpenClose"
          onClick={() => (icon === "open" ? setIcon("close") : setIcon("open"))}
        >
          {icon === "open" ? (
            <img src="/icon-hamburger.svg" alt="" />
          ) : (
            <img src="/icon-close.svg" alt="" />
          )}
        </a>
      </div>
      <div className="OpcoesRedesSociais" visibilidade={icon}>
        <div className="MenuDeOpcoes">
          <a className="Acesso" href="">
            {" "}
            FEATURES
          </a>
          <a className="Acesso" href="">
            PRICING
          </a>
          <a className="Acesso" href="">
            CONTACT
          </a>
          <button className="Acesso Botao">LOGIN</button>
        </div>
        <div className="RedesSociais">
          <a href="">
            <img src="/icon-facebook.svg" alt="" />
          </a>
          <a href="">
            <img src="/icon-twitter.svg" alt="" />
          </a>
        </div>
      </div>
    </MenuHeader>
  );
}

export default Menu_Header;
