import * as S from "./styles";

export const Register = () => {
  return (
    <>
      <S.Container>
        <S.Form>
          <S.RegisterTitle>Bem-Vindo !</S.RegisterTitle>
          <S.NickNameContainer>
            <S.Label>NickName</S.Label>
            <S.Input type="text" placeholder="type your NickName" />
          </S.NickNameContainer>
          <S.PasswordContainer>
            <S.Label>Password</S.Label>
            <S.Input type="text" placeholder="type your password" />
          </S.PasswordContainer>
        </S.Form>
      </S.Container>
    </>
  );
};
