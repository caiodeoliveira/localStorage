import * as S from "./styles";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const handleSend = (e: any) => {
    e.preventDefault();
    return localStorage.getItem("@Data")?.includes(".com")
      ? navigate("/home")
      : alert(
          "The field email is filled wrong, please fill the field correctly and try again"
        );
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
        <S.Form onChange={formik.handleSubmit}>
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
              onChange={formik.handleChange}
              value={formik.values.password}
              type="text"
              id="password"
              placeholder="type your password"
            />
          </S.PasswordContainer>
          <S.SubmitButton type="submit" value="Submit" onClick={handleSend} />
        </S.Form>
      </S.Container>
    </>
  );
};
