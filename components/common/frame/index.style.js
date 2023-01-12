import styled from "styled-components";

export const Frame = styled.div`
  position: relative;
  overflow: auto;
  max-width: 450px;
  width: 100%;
  background-color: white;
  min-height: calc(90vh - 40px);
  border-radius: 40px;
  box-sizing: border-box;
  margin: 0 auto;
  box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.25);
  & > div {
    position: absolute;
    overflow: auto;
    left: 0;
    top: 0;
  }
`;
