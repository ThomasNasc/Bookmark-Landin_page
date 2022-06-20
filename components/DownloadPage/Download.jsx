import React from "react";
import styled from "styled-components";
import InstallCard from "./InstallCardforDownload";
import Title_Descrition from "../Title-Descrition";
const ContainerCards = styled.div`
display: flex;
width: 100%;

justify-content: center;
align-items: center;
flex-wrap: wrap;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
function Download(props) {
  return (
    <div>
      <Title_Descrition>
        <h1>Download the extension</h1>
        <p>
          We&#39;ve got more browsers in the pipeline. Please do let us know if
          you&#39;ve got a favourite you&#39;d like us to prioritize
        </p>
      </Title_Descrition>
      <ContainerCards>
        <InstallCard
        referencia={0}
          srcNavegadorLogo={"/logo-chrome.svg"}
          navegador={"Chrome"}
          versaoMinima={62}
        />
        <InstallCard
         referencia={1}
          srcNavegadorLogo={"/logo-firefox.svg"}
          navegador={"Firefox"}
          versaoMinima={55}
        />
        <InstallCard
         referencia={2}
          srcNavegadorLogo={"/logo-opera.svg"}
          navegador={"Opera"}
          versaoMinima={46}
        />
      </ContainerCards>
    </div>
  );
}

export default Download;
