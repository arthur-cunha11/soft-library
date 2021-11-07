import React from "react";
import UserPage from "./components/User/UserPage";
import BookPage from "./components/Book/BookPage";
import { useSelector } from "react-redux";
import { Container, Title } from "./components/index";

const App: React.FC = () => {
  const isLoginPage = useSelector((state: any) => state.reducer.isLoginPage);
  const isBookListPage = useSelector(
    (state: any) => state.reducer.isBookListPage
  );

  return (
    <Container>
      <Title>Biblioteca Soft</Title>
      {isLoginPage && <UserPage />}
      {isBookListPage && <BookPage />}
    </Container>
  );
};

export default App;
