import React, { useState } from "react";
import BookEdit from "../Edit";
import { useDispatch, useSelector } from "react-redux";
import { Button, List, ListItem, Text } from "../../index";
import { setEditingBook, setRefreshGet } from "../../../store/actionCreators";

interface IProps {
  bookList: any;
}

const BookList: React.FC<IProps> = ({ bookList }) => {
  const dispatch = useDispatch();
  const refreshGet = useSelector((state: any) => state.reducer.refreshGet);
  const isEditingBook = useSelector(
    (state: any) => state.reducer.isEditingBook
  );
  const [showDetails, setShowDetails] = useState<Array<string>>([]);
  const [rentedBooks, setRentedBooks] = useState<Array<string>>([]);

  const rentBook = (id: string) => {
    if (verifyRentedBooks(id)) {
      alert("Este livro já está alugado!");
    } else {
      setRentedBooks([...rentedBooks, id]);
      alert("Livro alugado com sucesso!");
    }
  };

  const deleteBook = async (id: string) => {
    await fetch("http://localhost:3000/books/" + id, {
      method: "DELETE",
    });
    dispatch(setRefreshGet(!refreshGet));
    alert("Livro excluído com sucesso!");
  };

  const verifyRentedBooks = (id: string) => {
    return rentedBooks.some((element: any) => {
      return element === id;
    });
  };

  const verifyShowDetails = (id: string) => {
    return showDetails.some((element: any) => {
      return element === id;
    });
  };

  return (
    <List>
      {bookList.map((element: any) => {
        return (
          <ListItem key={element.id}>
            {verifyRentedBooks(element.id) && (
              <Text>Este livro está alugado!</Text>
            )}
            <Text>Nome: {element.name}</Text>
            <Text>Autor: {element.author}</Text>
            {verifyShowDetails(element.id) && (
              <>
                <Text>Idioma: {element.language}</Text>
                <Text>Número de páginas: {element.pageNumber}</Text>
              </>
            )}
            {isEditingBook === element.id && <BookEdit id={element.id} />}
            <Button
              onClick={() => setShowDetails([...showDetails, element.id])}
            >
              Exibir mais detalhes
            </Button>
            <Button onClick={() => rentBook(element.id)}>Alugar</Button>
            <Button onClick={() => dispatch(setEditingBook(element.id))}>
              Editar
            </Button>
            <Button onClick={() => deleteBook(element.id)}>Excluir</Button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default BookList;
