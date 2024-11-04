import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
//import "./index.css";
import Login from "./pages/login/Login.tsx";
import { MainStyled } from "./styled-components/main.styled-components.tsx";
//import BarButton from "./components/buttons/button.bar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainStyled>
      <Login />
    </MainStyled>
  </React.StrictMode>,
);
