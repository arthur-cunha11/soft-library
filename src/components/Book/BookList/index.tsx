import React, { useState } from "react";
import BookEdit from "../Edit";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  List,
  ListItem,
  ListItemButtons,
  ListItemTexts,
} from "../../index";
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

  const rentBook = async (element: any) => {
    if (element.status === "Disponível") {
      await fetch("http://localhost:3000/books/" + element.id, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          status: "Alugado",
          author: element.author,
          language: element.language,
          name: element.name,
          pageNumber: element.pageNumber,
        }),
      });
      dispatch(setRefreshGet(!refreshGet));
      alert("Livro alugado com sucesso!");
    } else {
      alert("Este livro já está alugado!");
    }
  };

  const deleteBook = async (id: string) => {
    await fetch("http://localhost:3000/books/" + id, {
      method: "DELETE",
    });
    dispatch(setRefreshGet(!refreshGet));
    alert("Livro excluído com sucesso!");
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
            <ListItemTexts>
              <div>
                <p>
                  <strong>Status: </strong>
                  {element.status}
                </p>
                <p>
                  <strong>Nome: </strong>
                  {element.name}
                </p>
                <p>
                  <strong>Autor: </strong>
                  {element.author}
                </p>
                {verifyShowDetails(element.id) && (
                  <>
                    <p>
                      <strong>Idioma: </strong>
                      {element.language}
                    </p>
                    <p>
                      <strong>Número de páginas: </strong>
                      {element.pageNumber}
                    </p>
                  </>
                )}
              </div>
              {isEditingBook === element.id && <BookEdit id={element.id} />}
            </ListItemTexts>
            <ListItemButtons>
              <Button
                color="#5f9ea0"
                onClick={() => setShowDetails([...showDetails, element.id])}
              >
                Exibir mais detalhes
              </Button>
              <Button color="#006400" onClick={() => rentBook(element)}>
                Alugar
              </Button>
              <Button
                color="#daa520"
                onClick={() => dispatch(setEditingBook(element.id))}
              >
                Editar
              </Button>
              <Button color="#8b0000" onClick={() => deleteBook(element.id)}>
                Excluir
              </Button>
            </ListItemButtons>
          </ListItem>
        );
      })}
    </List>
  );
};

export default BookList;
