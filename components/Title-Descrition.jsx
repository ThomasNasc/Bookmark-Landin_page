import React from "react";
import styled from "styled-components";
const TituloDescricao = styled.div`
  h1 {
    text-align: center;
    font-size: 32px;
  }
  p {
    font-size: 16px;
    color: #9999a1;
    width: 80%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 700px) {
      width: 50%;
    }
  }
`;

function Title_Descrition(props) {
  return <TituloDescricao>{props.children}</TituloDescricao>;
}

export default Title_Descrition;
