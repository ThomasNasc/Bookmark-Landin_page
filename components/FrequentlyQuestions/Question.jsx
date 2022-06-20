import React, { useState } from "react";
import styled from "styled-components";
const QuestionCard = styled.div`
  height: ${(props) => (props.toggle === "false" ? "60px" : "auto")};
  overflow: hidden;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  border-width: 1px 0px 1px 0px;
  border-style: solid;
  border-color: #9e9e9e3d;
  min-width: 300px;
  @media screen and (min-width: 700px){
    border-width: 0px 0px 1px 0px;
  }
  cursor: pointer;
  :hover{
    h1{
      color: red;
    }
  }
  .Question-arrow {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 14px;
      font-weight: 400;
     
    }
    img {
      width: 20px;
      height: 15px;
      margin: 20px;
      transform: rotate(
        ${(props) => (props.toggle === "false" ? "0deg" : "180deg")}
      );
      filter: hue-rotate(
        ${(props) => (props.toggle === "false" ? "0deg" : "90deg")}
      );
    }
  }
  p {
    font-size: 12px;
    color: #9999a1;
  }
`;

function Question(props) {
  const [openClose, setOpenClose] = useState("false");
  return (
    <QuestionCard
      toggle={openClose}
      onClick={() => {
        openClose === "false" ? setOpenClose("true") : setOpenClose("false");
      }}
    >
      <div className="Question-arrow">
        <h1> {props.question} </h1>
        <img toggle={openClose} src="icon-arrow.svg" alt="" />
      </div>
      {props.children}
    </QuestionCard>
  );
}

export default Question;
