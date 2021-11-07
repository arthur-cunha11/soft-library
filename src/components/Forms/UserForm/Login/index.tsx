import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input, SubTitle, Wrapper } from "../../../index";
import {
  toggleLoginPage,
  toggleBookPage,
} from "../../../../store/actionCreators";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<string>("");

  const handleClick = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();

    const verifiedLogin = data.some((element: any, index: number) => {
      return user === data[index].user && password === data[index].password;
    });

    if (verifiedLogin) {
      dispatch(toggleLoginPage(false));
      dispatch(toggleBookPage(true));
    } else {
      alert("Há algum campo incorreto!");
    }
  };

  return (
    <Wrapper>
      <SubTitle>Já possuo cadastro</SubTitle>
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
      <Button onClick={handleClick}>Entrar</Button>
    </Wrapper>
  );
};

export default Login;
