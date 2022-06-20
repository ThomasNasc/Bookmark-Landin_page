import React, { useState } from "react";
import styled from "styled-components";
import SlidesForFeatures from "./TabFromFeatures";
import { InfoTab } from "../../core/featuresInfo";
import Title_Descrition from "./../Title-Descrition";
const Feature = styled.div`
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
 margin-bottom: 150px;
  .ButtonsContainer {
    border-width: 1px 0px 0px 0px;
    border-style: solid;
    border-color: #9999a1;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-bottom: 30px;
    @media screen and (min-width: 700px) {
      flex-direction: row;
      width: auto;
      border-width: 0px 0px 0px 0px;
    }
  }
`;
const TabButton = styled.button`
  background-color: white;
  height: 50px;
  font-size: 20px;
  padding: 10px;
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: #9999a1;
  position: relative;
  :hover {
      color: #e06565;
    }
  @media screen and (min-width: 700px) {
    flex-direction: row;
    width: 220px;
    height: auto;
    padding: 10px;
  
  }
  
    border-width: ${(props)=> props.Index === props.buttonIndex?'0px 0px 5px 0px': '0px 0px 1px 0px' }    ;
    border-color: ${(props)=> props.Index === props.buttonIndex?'#e06565': '' };
  
`;

function Features(props) {
  const [tab, setTab] = useState(InfoTab[0]);
  const [index,setIndex] = useState(0)
  return (
    <Feature>
      <Title_Descrition>
      <h1>Features</h1>
      <p>
        Our aim is to make it quick and easy for you to acsess your favourite
        websites. Your bookmarks sync between you devices so you can acess them
        on the go.
      </p>
      </Title_Descrition>
      <div className="ButtonsContainer">
        <TabButton buttonIndex={0} Index={index} onClick={() =>{setIndex(0)
           setTab(InfoTab[0])}}>
          Simple Bookmarking
        </TabButton>
        <TabButton buttonIndex={1}  Index={index} onClick={() =>{setIndex(1)
           setTab(InfoTab[1])}}>
          Speedy Searching
        </TabButton>
        <TabButton buttonIndex={2}  Index={index} onClick={() => {setIndex(2)
           setTab(InfoTab[2])}}>Easy Sharingo</TabButton>
      </div>
      <SlidesForFeatures InformacaoParaTab={tab} />
    </Feature>
  );
}

export default Features;
