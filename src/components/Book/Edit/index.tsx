import React, { useState } from "react";
import { BookEditWrapper, Button, Input } from "../../index";
import { setEditingBook, setRefreshGet } from "../../../store/actionCreators";
import { useDispatch, useSelector } from "react-redux";

interface IProps {
  id: string;
}

const BookEdit: React.FC<IProps> = ({ id }) => {
  const dispatch = useDispatch();
  const refreshGet = useSelector((state: any) => state.reducer.refreshGet);
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
      dispatch(setRefreshGet(!refreshGet));
      setAuthor("");
      setLanguage("");
      setName("");
      setPageNumber("");
      dispatch(setEditingBook(0));
    } else {
      alert("Preencha todos os campos de edição!");
    }
  };

  return (
    <BookEditWrapper>
      <h3>Editar dados:</h3>
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
    </BookEditWrapper>
  );
};

export default BookEdit;
