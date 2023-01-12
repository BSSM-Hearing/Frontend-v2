import React, { useState } from "react";
import Frame from "../../components/common/frame/index";
import * as S from "./Style";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

const Index = () => {
  const [searchParams, setSearchPrams] = useSearchParams();
  const text = searchParams.get("text");
  const router = useNavigate();
  return (
    <Frame rollback>
      <S.Container>
        <S.Title>나를 부르는 소리</S.Title>
        <S.SoundText>{text}</S.SoundText>
        <S.Line></S.Line>
        <S.Question>나를 부르는 소리가 맞나요?</S.Question>
        <S.SelectButtons>
          <S.SelectBtn onClick={() => router(-1)} bgColor="red">
            아니요
          </S.SelectBtn>
          <S.SelectBtn onClick={() => router("/callMode")} bgColor="#1C69FF">
            확인
          </S.SelectBtn>
        </S.SelectButtons>
      </S.Container>
    </Frame>
  );
};

export default Index;
