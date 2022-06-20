import React from "react";
import styled from "styled-components";
const Home = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  @media screen and (min-width: 1000px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
  .ImagemHero {
    width: 80%;
    margin-left: auto;

    @media screen and (min-width: 1000px) {
      width: 50%;
      height: fit-content;
      margin-left: 0;
    }
  }
  .Info-Botoes {
    text-align: center;
    width: 100%;
    padding: 20px;

    @media screen and (min-width: 1000px) {
      width: 40%;
      margin-left: 5%;
      text-align: start;
    }
    h1 {
      font-size: 40px;
      font-weight: 1000px;
      color: #262c44;
      @media screen and (min-width: 1000px) {
        font-size: 50px;
      }
    }
    p {
      color: #9999a1;
      margin-bottom: 30px;
      font-size: 21px;
      width: 90%;
      margin-left: auto;
     margin-right: auto;
     @media screen and (min-width: 1000px) {
      margin-left: 0;
      }
    }
    button {
      width: 150px;
      height: 50px;
      margin-bottom: 20px;
      margin-right: 25px;
      border-radius: 5px;
      cursor: pointer;
      border: none;
    }
    .GetItOnChrome {
      background-color: #5167dd;
      color: white;
      font-weight: 700;
      :hover {
        border: 2px solid #5167dd;
        background-color: white;
        color: #5167dd;
      }
    }
    .GetItOnFirefox {
      background-color: #f7f7f7;
      color: black;
      font-weight: 700;
      box-shadow: 0px 3px 10px #77777775;
      :hover {
        border: 2px solid black;
      }
    }
  }
`;
function Homepage(props) {
  return (
    <Home>
      <img className="ImagemHero" src="/illustration-hero.png" alt="" />
      <div className="Info-Botoes">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore
          sequi, ab debitis tempora, explicabo a quos in repellendus, cupiditate
          sit numquam rem officia dignissimos velit ipsam? Ducimus, blanditiis
          odit?
        </p>
        <button className="GetItOnChrome">Get it on Chrome</button>
        <button className="GetItOnFirefox">Get it on Firefox</button>
      </div>
    </Home>
  );
}

export default Homepage;
