import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
export const Routes = () => {
  return (
    <>
      <Route path="/login" element={Login} />
      <Route path="/home" element={Home} />
    </>
  );
};
