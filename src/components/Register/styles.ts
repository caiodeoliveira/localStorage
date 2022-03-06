import styled from "styled-components";
import register from "../../assets/register.jpg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${register});
  filter: brightness(65%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  border: solid black 3px;
  border-radius: 5px;
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const RegisterTitle = styled.h1`
  color: white;
  font-family: "Gill Sans MT";
  font-weight: 400;
`;

export const RegisterSubtitle = styled.h2`
  font-family: "Gill Sans MT";
  font-weight: 400;
`;

export const Label = styled.label`
  width: 10%;
  color: white;
  font-size: 20px;
  font-family: "Gill Sans MT";
  font-weight: 400;
`;

export const Input = styled.input`
  max-width: 50%;
  height: 25px;
  padding: 2px 10px;
  font-family: "Gill Sans MT";
  font-size: 16px;
  font-weight: 700;
  border: green 3px solid;
  border-radius: 5px;
  outline: none;
`;

export const NickNameContainer = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const PasswordContainer = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
