import React, { useEffect, useState } from "react";
import Frame from "../../components/common/frame";
import * as S from "./Style";
import { MdMic } from "react-icons/md";
import { useSpeechRecognition } from "react-speech-kit";
import useDebounce from "../../hooks/useDebounce";
import Popup from "react-animated-popup";
import { delay } from "q";
import { useNavigate } from "react-router-dom";
import instance from "../../lib/instance";

export const calcScore = (data, randomNumber, value) => {
  console.log(data, randomNumber, value);
  const sample = data[randomNumber]?.split(" ");
  let count = 0;
  for (let i = 0; i < sample.length; i++) {
    if (value.includes(sample[i])) count++;
  }
  return Math.floor((count / sample.length) * 100);
};

export const selectFeedback = (feedbackData, score) => {
  for (let i = 0; i < 5; i++) {
    if (score <= feedbackData[i].score) {
      return feedbackData[i].message;
    }
  }
};

const Index = () => {
  const [data] = useState([
    "밥은 먹고 다녀",
    "선풍기가 고장났어요",
    "내 핸드폰이 고장났어요",
    "부르는 게 값이다",
    "말 나온 김에 집에 가자",
    "컵의 이가 빠졌네",
  ]);
  const [idx] = useState(Math.floor(Math.random() * data.length));
  const feedbackData = [
    { score: 25, message: "꾸준히 연습해봅시다!" },
    { score: 50, message: "그래도 이정도면 나쁘지 않아요!" },
    { score: 75, message: "잘하는군요!" },
    { score: 90, message: "이정도면 더할나위 없어요" },
    { score: 100, message: "완벽합니다! Perfect!" },
  ];

  const router = useNavigate();
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const [score1, setScore] = useState(0);
  const [text, setText] = useState("");

  const { debounce } = useDebounce();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      debounce(async () => {
        setValue(result);

        const score = calcScore(data, idx, result);

        console.log(score);

        setScore(score);
        setText(selectFeedback(feedbackData, score));
        delay(3000);
        setVisible(true);
      }, 500);
    },
  });

  useEffect(() => {
    if (visible) {
      instance.post("/score/upload", { score: score1 });
    }
  }, [visible]);

  return (
    <Frame rollback>
      <S.PracticeContainer>
        <S.PopBox
          style={{ boxShadow: "1px 1px 1000px 1000px rgba(0, 0, 0, 0.3)" }}
          as={Popup}
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <S.ResultBox>
            <S.Score>{score1}</S.Score>
            <S.Feedback>{text}</S.Feedback>
          </S.ResultBox>
          <S.Buttons>
            <S.SelectBtn
              onClick={() => {
                router(0);
                setVisible(false);
              }}
            >
              계속하기
            </S.SelectBtn>
            <S.SelectBtn
              onClick={() => {
                router(-1);
              }}
            >
              그만하기
            </S.SelectBtn>
          </S.Buttons>
        </S.PopBox>

        <S.DialogBox>
          <S.Dialog bgColor={"white"}>{data[idx]}</S.Dialog>
          <S.Dialog bgColor={"#ccccce"}>{value}</S.Dialog>
        </S.DialogBox>

        <S.MicBox>
          <S.ExplainText>눌러서 말하기</S.ExplainText>
          <S.Mic onMouseDown={listen} onMouseUp={stop}>
            <S.MicBtn as={MdMic} size={70} color={"white"} />
          </S.Mic>

          {listening && <S.ExplainText>마이크 입력중...</S.ExplainText>}
        </S.MicBox>
      </S.PracticeContainer>
    </Frame>
  );
};

export default Index;
