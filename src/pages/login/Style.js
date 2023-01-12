import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LoginForm = styled.form`
  /* background-color: black; */
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const TopBox = styled.div`
  width: 170%;
  height: 20%;
  background-color: #1c69ff;
  border-end-start-radius: 50%;
  border-end-end-radius: 50%;
  font-size: 5.2rem;
  font-weight: 700;
  color: white;
  text-align: center;
  line-height: 250%;
`;

export const Input = styled.input`
  width: 100%;
  height: 18%;
  background-color: white;
  border-radius: 100px;
  border: 2px solid blue;
  box-sizing: border-box;
  font-size: 2rem;
  padding-left: 5%;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 18%;
  background-color: #1c69ff;
  border-radius: 100px;
  border: none;
  font-size: 3rem;
  color: white;
`;

export const BottomBox = styled.div`
  width: 100%;
  height: 20%;
`;

export const LinkTabs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.span`
  color: #1c69ff;
  font-size: 2rem;
  text-align: center;
`;
