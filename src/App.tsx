import React from "react";
import Login from "./components/User/Login";
import UserRegister from "./components/User/Register";
import BookPage from "./components/Book/BookPage";
import { useSelector } from "react-redux";
import { Container, Title, Wrapper } from "./components/index";

const App: React.FC = () => {
  const isLoginPage = useSelector((state: any) => state.reducer.isLoginPage);
  const isBookListPage = useSelector(
    (state: any) => state.reducer.isBookListPage
  );

  return (
    <Container>
      <Title>Biblioteca Soft</Title>
      {isLoginPage && (
        <Wrapper>
          <Login />
          <UserRegister />
        </Wrapper>
      )}
      {isBookListPage && <BookPage />}
    </Container>
  );
};

export default App;
