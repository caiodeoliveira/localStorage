import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
