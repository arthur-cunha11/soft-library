import React, { useState } from "react";
import { BookRegisterWrapper, Button, Input } from "../../index";
import { setRefreshGet } from "../../../store/actionCreators";
import { useDispatch, useSelector } from "react-redux";

const BookRegister: React.FC = () => {
  const dispatch = useDispatch();
  const refreshGet = useSelector((state: any) => state.reducer.refreshGet);
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
          status: "Disponível",
        }),
      });
      dispatch(setRefreshGet(!refreshGet));
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
    <BookRegisterWrapper>
      <h3>Cadastro de livros</h3>
      <div>
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
      </div>
    </BookRegisterWrapper>
  );
};

export default BookRegister;
