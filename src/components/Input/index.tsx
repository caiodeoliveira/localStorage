import * as S from "./styles";
import { InputProps } from "./types";

export const Input = ({ type, onChange }: InputProps) => {
  return <S.Input type={type} onChange={onChange} />;
};
