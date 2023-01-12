import styled from "styled-components";
import { theme } from "../../styles/theme";

export const IntroduceWrapper = styled.div`
  padding: 50px;
  padding-top: 60px;
  h1 {
    font-size: 5rem;
    font-weight: 700;
  }
  h2 {
    font-size: 3.5rem;
    margin: 20px 0 0 0;
    color: ${theme.deepMain};
  }
  p {
    font-size: 2.5rem;
    margin: 10px 0;
  }
`;
