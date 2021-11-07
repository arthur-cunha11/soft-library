import React from "react";
import Login from "./components/Forms/UserForm/Login";
import UserRegister from "./components/Forms/UserForm/Register";
import BookList from "./components/BookList";
import { connect } from "react-redux";
import { Container, Title, Wrapper } from "./components/index";

interface IProps {
  isLoginPage?: boolean;
  isBookListPage?: boolean;
}

const App: React.FC<IProps> = ({ isLoginPage, isBookListPage }) => {
  return (
    <Container>
      <Title>Biblioteca Soft</Title>
      {isLoginPage && (
        <Wrapper>
          <Login />
          <UserRegister />
        </Wrapper>
      )}
      {!isBookListPage && <BookList />}
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  isLoginPage: state.reducer.isLoginPage,
  isBookListPage: state.reducer.isBookListPage,
});

export default connect(mapStateToProps)(App);
