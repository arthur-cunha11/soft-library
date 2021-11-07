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
  const [showDetails, setShowDetails] = useState<string>("");

  const deleteBook = async (id: string) => {
    await fetch("http://localhost:3000/books/" + id, {
      method: "DELETE",
    });
    dispatch(setRefreshGet(!refreshGet));
    alert("Livro excluído com sucesso!");
  };

  return (
    <List>
      {bookList.map((element: any) => {
        return (
          <ListItem key={element.id}>
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
          </ListItem>
        );
      })}
    </List>
  );
};

export default BookList;
