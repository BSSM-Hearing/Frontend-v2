import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 75%;
  margin-top: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* background-color: #ccc; */
`;
export const Title = styled.p`
  font-size: 4rem;
  font-weight: 700;
`;
export const SoundText = styled.div`
  width: 80%;
  height: 40%;
  border: 4px solid #000;
  border-radius: 30px;
  font-size: 2.8rem;
  padding: 10px;
`;
export const Line = styled.hr`
  width: 100%;
  border: 1px solid black;
`;
export const Question = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
`;
export const SelectButtons = styled.div`
  width: 100%;
  height: 10%;
  /* background-color: #111; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
export const SelectBtn = styled.button`
  width: 30%;
  height: 100%;
  background-color: ${(props) => props.bgColor};
  font-size: 2rem;
  font-weight: 700;
  color: white;
  border-radius: 15px;
`;
