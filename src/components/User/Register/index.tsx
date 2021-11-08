import React, { useState } from "react";
import { Button, Input, UserRegisterWrapper } from "../../index";

const UserRegister: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<string>("");

  const handleClick = async () => {
    if (user !== "" && password !== "") {
      const verifiedSignUp = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, password }),
      });

      if (verifiedSignUp) {
        alert("Cadastro realizado com sucesso!");
        setPassword("");
        setUser("");
      }
    } else {
      alert("Por favor preencha os dois campos de cadastro.");
    }
  };

  return (
    <UserRegisterWrapper>
      <h3>Cadastrar</h3>
      <div>
        <Input
          placeholder="Usuário"
          type="text"
          value={user}
          onChange={(event) => setUser(event.target.value.replace(/\s/g, ""))}
        />
      </div>
      <div>
        <Input
          placeholder="Senha"
          type="text"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value.replace(/\s/g, ""))
          }
        />
      </div>
      <Button onClick={handleClick}>Cadastrar</Button>
    </UserRegisterWrapper>
  );
};

export default UserRegister;
