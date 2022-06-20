import React, { useState } from "react";
import styled from "styled-components";
import Menu_Footer from "./FooterMenu";
const ContainerFooter = styled.div`
  margin-top: 150px;
  background-color: #5366df;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: white;
  width: 100%;
  
  h4 {
    letter-spacing: 4px;
    font-weight: 200;
    font-size: 10px;
  }
  h1 {
    font-size: 20px;
    font-weight: 500;
  }
  form {
    width: 300px;
    position: relative;
    .InputEmail {
      width: 100%;
      height: 40px;
      padding-left: 20px;
      margin-top: 20px;
      border-radius: ${(props) =>
        props.validacao === "invalido" ? "5px 5px 0px 0px " : "5px"};
      border: ${(props) => {
        switch (props.validacao) {
          case "invalido":
            return "2px solid #fb5859";

          case "valido":
            return "2px solid green";

          default:
            return "none";
        }
      }};
    }
    img {
      position: absolute;
      top: 30px;
      right: 25px;
    }
    p {
      margin: 0;
      width: 100%;
      height: 25px;
      background-color: ${(props) =>
        props.validacao === "invalido" ? "#FB5859" : "green"};
      border-radius: 0px 0px 5px 5px;
      font-size: 10px;
      text-align: start;
      padding-left: 10px;
      font-style: italic;
    }
    button {
      width: 100%;
      height: 50px;
      border-radius: 5px;
      border: none;
      margin-top: 20px;
      background-color: #fb5859;
      color: white;
      font-weight: 700;
      margin-bottom: 40px;
      :hover {
        background-color: white;
        color: #fb5859;
        border: 2px solid #fb5859;
      }
    }
  }
`;
function Footer(props) {
  const [validacao, setValidacao] = useState("");
  return (
    <ContainerFooter validacao={validacao}>
      <h4>35.000+ ALREADY JOINED</h4>
      <h1>Stay up-to-date with what we&#39;re doing</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setValidacao("valido");
        }}
      >
        <input
          validacao={validacao}
          className="InputEmail"
          placeholder="Enter your email address"
          type="email"
          name=""
          id=""
          onInvalid={() => setValidacao("invalido")}
        />

        {validacao === "" ? (
          ""
        ) : validacao === "invalido" ? (
          <div>
            <img src="/icon-error.svg" alt="" />
            <p>Whoops, make sure it&#39;s an email</p>
          </div>
        ) : (
          <div>
            <p>Thanks</p>
          </div>
        )}

        <button className="Button" type="submit">
          Contact Us
        </button>
      </form>
      <Menu_Footer />
    </ContainerFooter>
  );
}

export default Footer;
