import React, { useState } from "react";
import { AnyAction, bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Button, Input, SubTitle, Wrapper } from "../../index";
import * as actionCreator from "../../../store/actionCreators";

interface IProps {
  refreshGet: any;
  isRefreshGet: boolean;
}

const BookRegister: React.FC<IProps> = ({ refreshGet, isRefreshGet }) => {
  const [author, setAuthor] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<string>("");

  const registerBook = async () => {
    if (name !== "" && author !== "" && language !== "" && pageNumber !== "") {
      await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author,
          language,
          name,
          pageNumber,
        }),
      });
      refreshGet(!isRefreshGet);
      alert("Livro cadastrado com sucesso!");
      setAuthor("");
      setLanguage("");
      setName("");
      setPageNumber("");
    } else {
      alert("Preencha todos os campos de cadastro!");
    }
  };

  return (
    <Wrapper>
      <SubTitle>Cadastro de livros</SubTitle>
      <Wrapper>
        <Input
          placeholder="Nome"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          placeholder="Autor"
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <Input
          placeholder="Idioma"
          type="text"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        />
        <Input
          placeholder="Número de páginas"
          type="number"
          value={pageNumber}
          onChange={(event) => setPageNumber(event.target.value)}
        />
        <Button onClick={registerBook}>Cadastrar livro</Button>
      </Wrapper>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(actionCreator, dispatch);

export default connect(null, mapDispatchToProps)(BookRegister);
