import React from "react";
import Frame from "../../components/common/frame";
import * as S from "./Style";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as qs from "qs";

const Index = () => {
  const local_url = "http://10.150.149.2:3000";
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  console.log(errors);
  console.log(watch());
  const onValid = (data) => {
    console.log(watch().Nickname);
    axios
      .post(`${local_url}/api/user/create`, qs.stringify(data))
      .then((res) => {
        window.location.href = "/login";
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Frame>
      <S.RegisterContainer>
        <S.TopBox>회원가입</S.TopBox>
        <S.RegisterForm onSubmit={handleSubmit(onValid)}>
          <S.InputBox>
            <S.Input
              {...register("nickname", {
                required: "닉네임이 필요합니다.",
              })}
              placeholder="닉네임"
            />
            <S.Input
              {...register("email", {
                required: "이메일이 필요합니다.",
              })}
              placeholder="이메일"
            />
            <S.Input
              {...register("password", {
                required: "비밀번호가 필요합니다.",
              })}
              type="password"
              placeholder="비밀번호"
            />
            <S.Input
              // {...register("Password2", {
              //   required: "비밀번호 확인이 필요합니다.",
              // })}
              type="password"
              placeholder="비밀번호 확인"
            />
            <S.Input
              {...register("parentUserId")}
              type="number"
              placeholder="보호자 아이디"
            />
            <S.RadioBox>
              <input {...register("role")} value={"guardian"} type={"radio"} />
              보호자
              <input {...register("role")} value={"disabled"} type={"radio"} />
              장애인
            </S.RadioBox>
          </S.InputBox>
          <S.SubmitBox>
            <S.SubmitBtn>가입 완료</S.SubmitBtn>
            <S.Link>로그인하기</S.Link>
          </S.SubmitBox>
          <S.EmptyBox />
        </S.RegisterForm>
      </S.RegisterContainer>
    </Frame>
  );
};

export default Index;
