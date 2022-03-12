import "../../../styles.css";
import { useNavigate, useLocation } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const goTohomePage = () => {
    alert("changing for home...");
    navigate("home");
  };

  const handleInputValue = (event: any) => {
    alert(event.target.value);
  };

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={goTohomePage}>
        <div className="form-bg">
          <div className="form-login">
            <label htmlFor="login" className="label-login">
              NickName
            </label>
            <input
              type="text"
              name=""
              id="login"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-password">
            <label htmlFor="password" className="label-password">
              Password
            </label>
            <input
              type="text"
              name=""
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <input
            onClick={handleInputValue}
            type="submit"
            value="Submit"
            className="submit-btn"
          />
          <div className="form-submit">
            <input type="checkbox" className="checkbox-btn" />
            <p className="remember-text">Lembrar meu E-mail e Senha</p>
          </div>
        </div>
      </form>
    </>
  );
};
