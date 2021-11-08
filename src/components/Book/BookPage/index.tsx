import React from "react";
import BookRegister from "../Register";
import BookSearch from "../BookSearch";
import { BookPageWrapper } from "../../index";

const BookPage: React.FC = () => {
  return (
    <BookPageWrapper>
      <BookRegister />
      <h3>Lista de livros cadastrados</h3>
      <BookSearch />
    </BookPageWrapper>
  );
};

export default BookPage;
