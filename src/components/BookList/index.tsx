import React, { useEffect, useState } from "react";
import BookRegister from "../Forms/BookForm/Register";
import BookEdit from "../Forms/BookForm/Edit";
import { useDispatch, useSelector } from "react-redux";
import { Button, SubTitle, Text, Wrapper } from "../index";
import { setEditingBook, setRefreshGet } from "../../store/actionCreators";

const BookList: React.FC = () => {
  const dispatch = useDispatch();
  const refreshGet = useSelector((state: any) => state.reducer.refreshGet);
  const isEditingBook = useSelector(
    (state: any) => state.reducer.isEditingBook
  );
  const [bookList, setBookList] = useState([]);
  const [showDetails, setShowDetails] = useState<string>("");

  const deleteBook = async (id: string) => {
    await fetch("http://localhost:3000/books/" + id, {
      method: "DELETE",
    });
    dispatch(setRefreshGet(!refreshGet));
    alert("Livro excluído com sucesso!");
  };

  useEffect(() => {
    fetch("http://localhost:3000/books").then((response) =>
      response.json().then((data) => setBookList(data))
    );
  }, [refreshGet]);

  return (
    <Wrapper>
      <BookRegister />
      <SubTitle>Lista de livros cadastrados</SubTitle>
      {bookList.map((element: any) => {
        return (
          <Wrapper key={element.id}>
            <Text>Nome: {element.name}</Text>
            <Text>Autor: {element.author}</Text>
            {showDetails === element.id && (
              <>
                <Text>Idioma: {element.language}</Text>
                <Text>Número de páginas: {element.pageNumber}</Text>
              </>
            )}
            {isEditingBook === element.id && <BookEdit id={element.id} />}
            <Button onClick={() => dispatch(setEditingBook(element.id))}>
              Editar
            </Button>
            <Button onClick={() => setShowDetails(element.id)}>
              Exibir mais detalhes
            </Button>
            <Button onClick={() => deleteBook(element.id)}>Excluir</Button>
          </Wrapper>
        );
      })}
    </Wrapper>
  );
};

export default BookList;
