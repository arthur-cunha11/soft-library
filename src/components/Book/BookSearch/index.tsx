import React, { useEffect, useState } from "react";
import BookList from "../BookList";
import { BookSearchWrapper, Button, Input } from "../../index";
import { useSelector } from "react-redux";

const BookSearch: React.FC = () => {
  const refreshGet = useSelector((state: any) => state.reducer.refreshGet);
  const [bookList, setBookList] = useState([]);
  const [text, setText] = useState<string>("");

  const searchBooks = async () => {
    const response = await fetch("http://localhost:3000/books");
    const data = await response.json();

    const booksFound = data.filter((element: any, index: number) => {
      return (
        data[index].name.toUpperCase().indexOf(text.toUpperCase()) !== -1 ||
        data[index].author.toUpperCase().indexOf(text.toUpperCase()) !== -1
      );
    });

    setBookList(booksFound);
  };

  useEffect(() => {
    fetch("http://localhost:3000/books").then((response) =>
      response.json().then((data) => setBookList(data))
    );
  }, [refreshGet]);

  return (
    <BookSearchWrapper>
      <Input
        placeholder="Pesquisar por nome ou autor"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button onClick={searchBooks}>Pesquisar</Button>
      <BookList bookList={bookList} />
    </BookSearchWrapper>
  );
};

export default BookSearch;
