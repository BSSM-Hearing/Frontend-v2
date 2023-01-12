import styled from "styled-components";
import * as S from "../login/Style";

export const RegisterContainer = styled(S.LoginContainer)``;
export const TopBox = styled(S.TopBox)``;

export const RegisterForm = styled(S.LoginForm)`
  width: 80%;
  height: 80%;
  /* background-color: black; */
`;

export const Input = styled(S.Input)`
  width: 100%;
  height: 17%;
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 65%;
`;
export const RadioBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  input:nth-child(2) {
    margin-left: 5%;
  }
`;
export const SubmitBox = styled.div`
  height: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
export const SubmitBtn = styled(S.SubmitBtn)`
  height: 70%;
  width: 100%;
`;
export const Link = styled(S.Link)`
  margin-top: 2%;
`;

export const EmptyBox = styled.div`
  height: 10%;
`;
