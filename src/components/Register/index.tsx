import * as S from "./styles";
import { useFormik } from "formik";

export const Register = () => {
  const handleSubmit = (event: any) => {
    alert("Data sended check your localstorage");
  };

  const insertIntoLocalStorage = (event: any) => {
    const localStorageValue = event.target.value;
    localStorage.setItem("@NickName", JSON.stringify(localStorageValue));
  };

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    onSubmit: (values) => {
      localStorage.setItem("@Data", JSON.stringify(values));
    },
  });

  return (
    <>
      <S.Container>
        <S.Form onSubmit={formik.handleSubmit}>
          <S.RegisterTitle>Bem-Vindo !</S.RegisterTitle>
          <S.RegisterSubtitle>
            Faz o cadastro e chega junto !
          </S.RegisterSubtitle>
          <S.NickNameContainer>
            <S.Label htmlFor="login">NickName</S.Label>
            <S.Input
              onChange={formik.handleChange}
              value={formik.values.login}
              type="text"
              name="login"
              id="login"
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
          <S.SubmitButton type="submit" value="Submit" />
        </S.Form>
      </S.Container>
    </>
  );
};
