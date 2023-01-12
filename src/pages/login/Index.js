import React from "react";
import Frame from "../../components/common/frame/index";
import { useForm } from "react-hook-form";
import * as S from "./Style";
import axios from "axios";
import * as qs from "qs";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { register, watch, handleSubmit } = useForm();
  const router = useNavigate();
  const local_url = "http://10.150.149.2:3000";
  console.log(watch());
  const onValid = (data) => {
    axios
      .post(`${local_url}/api/user/login`, qs.stringify(data))
      .then(({ data }) => {
        localStorage.setItem("token", data.token);
        router("/");
        console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const onInvalid = () => {
    alert("아이디 또는 비밀번호를 확인해주세요.");
  };
  return (
    <Frame>
      <S.LoginContainer>
        <S.TopBox>로그인</S.TopBox>
        <S.LoginForm onSubmit={handleSubmit(onValid, onInvalid)}>
          <S.Input
            {...register("email", {
              required: "이메일을 입력해주세요.",
            })}
            placeholder="이메일 입력"
          />
          <S.Input
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
            })}
            type="password"
            placeholder="비밀번호 입력"
          />
          <S.SubmitBtn type="submit">로그인</S.SubmitBtn>
          <S.LinkTabs>
            <S.Link
              className="hover:decoration-solid"
              onClick={() => router("/register")}
            >
              회원가입
            </S.Link>
            <S.Link>비밀번호 찾기</S.Link>
          </S.LinkTabs>
        </S.LoginForm>
        <S.BottomBox></S.BottomBox>
      </S.LoginContainer>
    </Frame>
  );
};

export default Index;
