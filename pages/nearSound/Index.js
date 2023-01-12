import React, { useState } from "react";
import Frame from "../../components/common/frame/index";
import * as S from "./Style";
import { MdOutlineMic } from "react-icons/md";
import useDebounce from "../../hooks/useDebounce";
import { useSpeechRecognition } from "react-speech-kit";
import { useNavigate } from "react-router";

const Index = () => {
  const router = useNavigate();
  const [value, setValue] = useState("");
  const { debounce } = useDebounce();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      debounce(() => {
        setValue(result);
        stop();
        router(`/findsound?text=${result}`);
      }, 500);
    },
  });
  return (
    <Frame rollback>
      <S.Container>
        <S.IconBox>
          <MdOutlineMic size={130} />
          <S.IconText>REC</S.IconText>
        </S.IconBox>
        {listening ? (
          <S.Text>주변 소리를 듣고 있어요.</S.Text>
        ) : (
          <S.StartBtn onClick={listen}>주변 소리 듣기</S.StartBtn>
        )}
      </S.Container>
    </Frame>
  );
};

export default Index;
