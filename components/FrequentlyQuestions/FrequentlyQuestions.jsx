import React from "react";
import styled from "styled-components";
import Question from "./Question";
import Title_Descrition from "../Title-Descrition";

const PerguntasFrequentes = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 50px;
  }
  button {
    width: 100px;
    height: 40px;
    color: white;
    background-color: #5167dd;
    margin-top: 50px;
    border-radius: 5px;
    border: none;
    :hover {
      background-color: white;
      color: #5167dd;
      border: 2px solid #5167dd;
      cursor: pointer;
    }
  }
`;
function FrequentlyQuestions(props) {
  return (
    <PerguntasFrequentes>
      <Title_Descrition>
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. if you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </Title_Descrition>
      <Question question={"What is Bookmark?"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro
          fugiat perspiciatis sit quam est ullam dolorum adipisci quasi,
          deleniti nulla pariatur sed unde minima illo recusandae aspernatur
          tempora dignissimos?
        </p>
      </Question>
      <Question question={"How can i request a new browser?"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro
          fugiat perspiciatis sit quam est ullam dolorum adipisci quasi,
          deleniti nulla pariatur sed unde minima illo recusandae aspernatur
          tempora dignissimos?
        </p>
      </Question>
      <Question question={"Is there a mobile app?"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro
          fugiat perspiciatis sit quam est ullam dolorum adipisci quasi,
          deleniti nulla pariatur sed unde minima illo recusandae aspernatur
          tempora dignissimos?
        </p>
      </Question>
      <Question question={"What about other Chromium browsers"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro
          fugiat perspiciatis sit quam est ullam dolorum adipisci quasi,
          deleniti nulla pariatur sed unde minima illo recusandae aspernatur
          tempora dignissimos?
        </p>
      </Question>
      <button>More info</button>
    </PerguntasFrequentes>
  );
}

export default FrequentlyQuestions;
