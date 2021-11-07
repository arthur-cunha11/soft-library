import React, { useState } from "react";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Button, Input, SubTitle, Wrapper } from "../../../index";
import * as actionCreator from "../../../../store/actionCreators";

interface IProps {
  toggleBookPage?: any;
  toggleLoginPage?: any;
}

const Login: React.FC<IProps> = ({ toggleBookPage, toggleLoginPage }) => {
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<string>("");

  const handleClick = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();

    const verifiedLogin = data.some((element: any, index: number) => {
      return user === data[index].user && password === data[index].password;
    });

    if (verifiedLogin) {
      await toggleLoginPage(false);
      await toggleBookPage(true);
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

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(actionCreator, dispatch);

export default connect(null, mapDispatchToProps)(Login);
