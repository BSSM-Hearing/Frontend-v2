import React, { useEffect, useState } from "react";
import Frame from "../../components/common/frame";
import * as S from "./Style";
import { IoMdCall } from "react-icons/io";
import useDebounce from "../../hooks/useDebounce";
import { useSpeechRecognition } from "react-speech-kit";
import { v4 as uuidv4 } from "uuid";
import { getTimeOnly } from "../../util/date";

const Index = () => {
  const [isCalling, setIsCalling] = useState(false);
  const [value, setValue] = useState([]);
  const { debounce } = useDebounce();

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      debounce(
        () => setValue((prev) => [...prev, result + " " + getTimeOnly()]),
        700,
      );
    },
  });

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <Frame rollback>
      <S.CallModeContainer>
        <S.Title>전화 모드</S.Title>
        {!isCalling ? (
          <>
            <S.CallBtn
              bgColor={"#1c69ff"}
              onClick={() => {
                setIsCalling(true);
                listen();
              }}
            >
              <IoMdCall color={"white"} size={80} />
            </S.CallBtn>
          </>
        ) : (
          <S.CallingBox>
            <S.DialogBox>
              {value &&
                value.map((data) => {
                  return <S.Dialog>{data}</S.Dialog>;
                })}
            </S.DialogBox>
            <S.CallBtn
              onClick={() => {
                setIsCalling(false);
                stop();
                setValue([]);
              }}
              bgColor={"red"}
            >
              종료
            </S.CallBtn>
          </S.CallingBox>
        )}
      </S.CallModeContainer>
    </Frame>
  );
};

export default Index;
