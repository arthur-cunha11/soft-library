import React, { useState } from "react";
import { Wrapper, SubTitle, Input, Button, Text } from "../../../index";

const UserRegister: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [signUp, setSignUp] = useState<boolean>(false);

  const handleClick = async (type: string) => {
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
        setSignUp(true);
      }
    } else {
      alert("Por favor preencha os dois campos de cadastro.");
    }
  };

  return (
    <Wrapper>
      <SubTitle>Cadastrar</SubTitle>
      <Text>Os campos usuário e senha não devem conter espaços.</Text>
      <Wrapper>
        <Input
          placeholder="Usuário"
          type="text"
          value={user}
          onChange={(event) => setUser(event.target.value.replace(/\s/g, ""))}
        />
      </Wrapper>
      <Wrapper>
        <Input
          placeholder="Senha"
          type="text"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value.replace(/\s/g, ""))
          }
        />
      </Wrapper>
      <Button onClick={() => handleClick("signUp")}>Cadastrar</Button>
      {signUp && <Text>Cadastro realizado com sucesso!</Text>}
    </Wrapper>
  );
};

export default UserRegister;
