import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IntlProvider } from "react-intl";
import esMessages from "./locales/es.json";
import enMessages from "./locales/en.json";
import LoginForm from "./components/LoginForm";
import RobotList from "./components/RobotsList";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const locale = navigator.language.startsWith("es") ? "es" : "en"; // Detecta el idioma del navegador
  const messages = locale === "es" ? esMessages : enMessages;

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className="App">
        {isAuthenticated ? <RobotList /> : <LoginForm onLogin={handleLogin} />}
      </div>
    </IntlProvider>
  );
}

export default App;
