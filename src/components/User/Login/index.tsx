import React, { useState } from "react";
import { Button, Input, UserLoginWrapper } from "../../index";
import { toggleBookPage, toggleLoginPage } from "../../../store/actionCreators";
import { useDispatch } from "react-redux";

const UserLogin: React.FC = () => {
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
    <UserLoginWrapper>
      <h3>Login</h3>
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
      <Button onClick={handleClick}>Entrar</Button>
    </UserLoginWrapper>
  );
};

export default UserLogin;
