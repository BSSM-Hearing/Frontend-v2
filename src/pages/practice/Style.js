import styled from "styled-components";

export const PracticeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackBtn = styled.svg`
  position: absolute;
  top: 5%;
  left: 5%;
`;

export const DialogBox = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15%;
`;
export const Dialog = styled.div`
  width: 95%;
  height: 35%;
  background-color: ${(props) => props.bgColor};
  box-shadow: 2px 7px 10px 3px #888;
  border-radius: 20px;
  font-size: 3rem;
  padding: 10px;
`;

export const MicBox = styled.div`
  position: absolute;
  bottom: 5%;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ExplainText = styled.p`
  font-size: 2rem;
  margin: 10px 0;
`;
export const Mic = styled.button`
  width: 30%;
  height: 50%;
  background-color: #1c69ff;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;
export const MicBtn = styled.svg`
  border: 4px solid white;
  border-radius: 200px;
`;

export const PopBox = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ResultBox = styled.div`
  width: 110%;
  height: 40%;
  /* background-color: #ccc; */
  margin-bottom: 10%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const Score = styled.span`
  font-size: 5rem;
`;
export const Feedback = styled.p`
  font-size: 2rem;
`;

export const Buttons = styled.div`
  width: 130%;
  height: 20%;
  /* background-color: #ccc; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
export const SelectBtn = styled.button`
  width: 40%;
  height: 80%;
  background-color: #1c69ff;
  border-radius: 10px;
  font-size: 2rem;
  color: white;
`;
