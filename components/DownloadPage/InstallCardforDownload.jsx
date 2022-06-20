import React from "react";
import styled from "styled-components";
const CardExtension = styled.div`
  display: flex;
  margin-top: 50px;

  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 350px;
  justify-content: space-evenly;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0px 8px 10px #9999a19e;
  @media screen and (min-width: 550px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media screen and (min-width: 950px) {
margin-top: calc( ${(props)=>props.marginTop}  * 80px )  ;

}
  .Logo {
    margin: 30px;
  }
  .Nome {
    font-size: 21px;
    margin: 0;
  }
  .versao {
    text-align: center;
    font-size: 14px;
    color: #9999a1;
    margin-top: 5px;
  }
  .BotaoExtensao {
    width: 80%;
    height: 50px;
    margin: 15px;
    border-radius: 5px;
    border: none;
    background-color: #5266DF;
    font-weight: 700;
    color: white;
    :hover{
        background-color: white;
        color: #5266DF;
        border: 2px solid #5266DF;
    }
  }
`;
function InstallCard(props) {
  return (
    <CardExtension  marginTop={props.referencia}>
      <img className="Logo" src={props.srcNavegadorLogo} alt="" />
      <div>
        <h1 className="Nome">Add to {props.navegador}</h1>
        <p className="versao">Minimum version {props.versaoMinima}</p>
      </div>
      <img className="dots" src="/bg-dots.svg" alt="" />
      <button className="BotaoExtensao">Add {"&"} install Extension</button>
    </CardExtension>
  );
}

export default InstallCard;
