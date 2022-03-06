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
  border: solid black 1px;
  border-radius: 5px;
  width: 60%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
