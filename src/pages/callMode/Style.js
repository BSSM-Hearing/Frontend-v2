import styled from "styled-components";

export const CallModeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const Title = styled.p`
  position: absolute;
  top: 1%;
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
  width: 100%;
`;
export const CallBtn = styled.button`
  padding: 30px;
  background-color: ${(props) => props.bgColor};
  border-radius: 300px;
  border: none;
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
`;

export const CallingBox = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 8%;
  height: 75%;
  width: 100%;
`;
export const DialogBox = styled.div`
  border: 2px solid black;
  width: 80%;
  height: 60%;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: scroll;
  /* background-color: #ccc; */
`;
export const Dialog = styled.div`
  border-radius: 15px;
  width: 80%;
  margin: 0 auto;
  font-size: 2rem;
  margin: 10px 0;
`;
