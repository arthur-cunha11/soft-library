import React from "react";
import BookPage from "./components/Book/BookPage";
import UserPage from "./components/User/UserPage";
import { Container, Title } from "./components/index";
import { useSelector } from "react-redux";

const App: React.FC = () => {
  const isLoginPage = useSelector((state: any) => state.reducer.isLoginPage);
  const isBookPage = useSelector((state: any) => state.reducer.isBookPage);

  return (
    <Container>
      <Title>Biblioteca Soft</Title>
      {isLoginPage && <UserPage />}
      {isBookPage && <BookPage />}
    </Container>
  );
};

export default App;
