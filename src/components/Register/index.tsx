import * as S from "./styles";

export const Register = () => {
  const handleDefault = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <S.Container>
        <S.Form>
          <S.RegisterTitle>Bem-Vindo !</S.RegisterTitle>
          <S.RegisterSubtitle>
            Faz o cadastro e chega junto !
          </S.RegisterSubtitle>
          <S.NickNameContainer>
            <S.Label htmlFor="nick-name">NickName</S.Label>
            <S.Input
              type="text"
              id="nick-name"
              placeholder="type your NickName"
            />
          </S.NickNameContainer>
          <S.PasswordContainer>
            <S.Label htmlFor="password">Password</S.Label>
            <S.Input
              type="text"
              id="password"
              placeholder="type your password"
            />
          </S.PasswordContainer>
          <S.SubmitButton type="submit" onClick={handleDefault} />
        </S.Form>
      </S.Container>
    </>
  );
};
