import * as S from "./styles";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

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
    validationSchema: yup.object({
      login: yup.string().email("e-mail invalid format").required("Required"),
      password: yup
        .string()
        .min(8, "Must be 8 characters or more")
        .required("required"),
    }),
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
            {/* {formik.touched.login && formik.errors.login ? (
              <div>{formik.errors.login}</div>
            ) : null} */}
          </S.NickNameContainer>
          <S.PasswordContainer>
            <S.Label htmlFor="password">Password</S.Label>
            <S.Input
              type="text"
              id="password"
              placeholder="type your password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </S.PasswordContainer>
          <S.SubmitButton type="submit" value="Submit" onClick={handleSend} />
        </S.Form>
      </S.Container>
    </>
  );
};
