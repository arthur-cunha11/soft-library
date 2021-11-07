import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, SubTitle, Text, Wrapper } from "../index";
import BookRegister from "../Forms/BookForm/Register";
import BookEdit from "../Forms/BookForm/Edit";

interface IProps {
  refreshGet: any;
  isRefreshGet: boolean;
}

const BookList: React.FC<IProps> = ({ refreshGet, isRefreshGet }) => {
  const [bookList, setBookList] = useState([]);
  const [isEditing, setIsEditing] = useState<string>("");
  const [showDetails, setShowDetails] = useState<string>("");

  const editBook = async (id: string) => {
    setIsEditing(id);
  };

  const deleteBook = async (id: string) => {
    await fetch("http://localhost:3000/books/" + id, {
      method: "DELETE",
    });
    refreshGet(!isRefreshGet);
    alert("Livro excluído com sucesso!");
  };

  useEffect(() => {
    fetch("http://localhost:3000/books").then((response) =>
      response.json().then((data) => setBookList(data))
    );
  }, [isRefreshGet]);

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
            {isEditing === element.id && <BookEdit id={element.id} />}
            <Button onClick={() => editBook(element.id)}>Editar</Button>
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

const mapStateToProps = (state: any) => ({
  refreshGet: state.reducer.refreshGet,
});

export default connect(mapStateToProps)(BookList);
