import React from "react";
import styled from "styled-components";

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 700px) {
    flex-direction: row;
  justify-content: space-between;
    min-height: 500px;
  }
  .ImgContainer {
    width: 100%;
    height: 400px;
    display: flex;
    position: relative;
    
    margin-top: 50px;
    @media screen and (min-width: 700px) {
      width: 70%;
      
    }
    .BackgroundEffect {
      position: absolute;
      width: 65%;
      height: 70%;
      background-color: #5266df;
      top: 8vh;
      z-index: 0;
      border-radius: 0px 25% 30% 0px;
      @media screen and (min-width: 700px) {
     height: 90%;
      
    }
    }
    .ImagemTag {
      max-width: 600px;
      z-index: 2;
      margin-left: auto;
      margin-right: auto;
      width: 85%;
      height: 300px;
      @media screen and (min-width: 700px) {
        height: 400px;
      
    }
    }
  }
  .Titulo-Descricao {
    width: 100%;
    text-align: center;
    @media screen and (min-width: 700px) {
      width: 50%;
      text-align: start;
      padding-right: 100px;
    }
    h1 {
      font-size: 30px;
    }
    .descricao {
      margin-left: auto;
      margin-right: auto;
      font-size: 16px;
      width: 90%;
      color: #9999a1;
      @media screen and (min-width: 700px) {
        text-align: start;
        margin-left: 0;
        margin-right: 0;
      
      }
    }
    button {
      width: 100px;
      height: 40px;
      background-color: #5266df;
      border: none;
      color: white;
      border-radius: 5px;
      :hover {
        background-color: white;
        border: 2px solid #5266df;
        color: #5266df;
      }
    }
  }
`;

function SlidesForFeatures(props) {
  return (
    <Tab>
      <div className="ImgContainer">
        <div className="BackgroundEffect"></div>
        <img className="ImagemTag" src={props.InformacaoParaTab.src} alt="" />
      </div>
      <div className="Titulo-Descricao">
        <h1>{props.InformacaoParaTab.titulo}</h1>
        <p className="descricao">{props.InformacaoParaTab.descricao}</p>
        <button>More Info</button>
      </div>
    </Tab>
  );
}

export default SlidesForFeatures;
