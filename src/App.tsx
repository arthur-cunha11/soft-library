import React from "react";
import Login from "./components/Forms/UserForm/Login";
import UserRegister from "./components/Forms/UserForm/Register";
import BookList from "./components/BookList";
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
      {!isLoginPage && (
        <Wrapper>
          <Login />
          <UserRegister />
        </Wrapper>
      )}
      {!isBookListPage && <BookList />}
    </Container>
  );
};

export default App;
