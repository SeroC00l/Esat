import React from "react";
import { useParams, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Header } from "./Header";

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Tittle = styled.div`
  margin-top: 50px;
  font-family: "Courier New", Courier, monospace;
  font-size: 50px;
  font-weight: bold;
  padding-bottom: 40px;
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden;

  .ButtonStyle {
    width: 40px;
    text-decoration: none;
    text-align: center;
    margin-top: 20px;
    padding: 10px 20px;
    background: linear-gradient(-45deg, #00bfff, #0080ff, #5cdced, #c246ef);
    background-size: 400% 400%;
    animation: ${gradient} 15s ease infinite;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Input = styled.textarea`
  height: 200px;
  width: 500px;
  padding: 10px;
  border-radius: 4px;
  border: 2px solid #6b6b6b;
  font-size: 16px;
  box-sizing: border-box;
  overflow-y: auto;
  resize: none;
  vertical-align: top;

  &:focus {
    outline: none;
    border-color: #0077ff;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.3);
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 90px;
`;

function Feeling() {
  let emotion = useParams().emotion;

  const questions = {
    Happy: "What made you happy today?",
    Angry: "Is it job related?",
    Neutral: "What can we do to make it better?",
    Worried: "Is it job related?",
    Sad: "Is it job related?",
  };

  const question = questions[emotion];

  return (
    <QuestionsContainer>
      <Header />
      <Tittle>{question}</Tittle>
      {["Sad", "Angry", "Worried"].includes(emotion) && (
        <Buttons>
          <Link className="ButtonStyle" to={`/Feelings/${emotion}/resing`}>Yes</Link>
          <Link className="ButtonStyle">Not</Link>
        </Buttons>
      )}
      {["Happy", "Neutral"].includes(emotion) && (
        <>
          <Input type="text-box" />
          <Link className="ButtonStyle" to={`/Feelings/${emotion}/send`}>
            send
          </Link>
        </>
      )}
    </QuestionsContainer>
  );
}

export { Feeling };
