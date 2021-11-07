import React from "react";
import BookRegister from "../Register";
import BookSearch from "../BookSearch";
import { SubTitle, Wrapper } from "../../index";

const BookPage: React.FC = () => {
  return (
    <Wrapper>
      <BookRegister />
      <SubTitle>Lista de livros cadastrados</SubTitle>
      <BookSearch />
    </Wrapper>
  );
};

export default BookPage;
