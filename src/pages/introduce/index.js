import React from "react";
import Frame from "../../components/common/frame";
import * as S from "./index.style";

export default function Introduce() {
  return (
    <Frame rollback>
      <S.IntroduceWrapper>
        <h1>기능 소개</h1>
        <div>
          <h2>전화 모드 📞</h2>
          <p>상시 녹음 및 텍스트 표시</p>
        </div>
        <div>
          <h2>외출 모드 🙌🏻</h2>
          <p>상시 녹음 및 대화 감지시 진동</p>
        </div>
        <div>
          <h2>발음 연습 🔊</h2>
          <p>버튼 녹음 및 내 말, 정확도 표시</p>
        </div>
        <div>
          <h2>보호자 호출 👨‍👩‍👦‍👦</h2>
          <p>
            내 보호자 등록 후 버튼을 누르면 <br /> 보호자에게 알람
          </p>
        </div>
      </S.IntroduceWrapper>
    </Frame>
  );
}
