import React, { useState } from "react";
import { Button, Input, SubTitle, Wrapper } from "../../index";

interface IProps {
  id: string;
  refreshGet: any;
  isRefreshGet: boolean;
}

const BookEdit: React.FC<IProps> = ({ id, refreshGet, isRefreshGet }) => {
  const [author, setAuthor] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<string>("");

  const editBook = async (id: string) => {
    if (name !== "" && author !== "" && language !== "" && pageNumber !== "") {
      await fetch("http://localhost:3000/books/" + id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          author,
          language,
          name,
          pageNumber,
        }),
      });
      refreshGet(!isRefreshGet);
      alert("Livro editado com sucesso!");
      setAuthor("");
      setLanguage("");
      setName("");
      setPageNumber("");
    } else {
      alert("Preencha todos os campos de edição!");
    }
  };

  return (
    <Wrapper>
      <SubTitle>Editar dados:</SubTitle>
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
      <Button onClick={() => editBook(id)}>Confirmar</Button>
    </Wrapper>
  );
};

export default BookEdit;
