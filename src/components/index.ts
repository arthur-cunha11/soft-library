import styled, { createGlobalStyle } from "styled-components";

interface IProps {
  color?: string;
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #15202b;
    color: #ffff;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const BookEditWrapper = styled.div`
  margin-bottom: 20px;
`;

export const BookPageWrapper = styled.div`
  h3 {
    margin-bottom: 20px;
  }
`;

export const BookRegisterWrapper = styled.div`
  border-bottom: 1px solid #000;
  margin-bottom: 20px;
  padding-bottom: 20px;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const BookSearchWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: ${(props: IProps) => props.color || "#ff9000"};
  border-radius: 2px;
  border: 1px solid #000;
  cursor: pointer;
  display: block;
  width: 150px;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 500px;
  min-width: 320px;
  text-align: center;
`;

export const Input = styled.input`
  background-color: #232129;
  border-radius: 5px;
  border: 1px solid #708090;
  color: #ffff;
  height: 20px;
  margin-bottom: 10px;
  margin-right: 5px;
  text-align: center;
  width: 200px;

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }

  &:focus {
    outline: none;
  }
`;

export const List = styled.ul`
  height: 500px;
  list-style: none;
  margin-top: 20px;
  overflow: auto;
  padding: 0;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ListItem = styled.li`
  border: 1px solid #000;
  margin-bottom: 20px;
  padding: 10px;
`;

export const ListItemButtons = styled.div`
  display: flex;
`;

export const ListItemTexts = styled.div`
  text-align: start;

  p {
    margin-bottom: 15px;
  }

  strong {
    font-size: 14px;
  }
`;

export const UserLoginWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 20px;
  }
`;

export const UserRegisterWrapper = styled(UserLoginWrapper)`
  @media (max-width: 600px) {
    margin-top: 30px;
  }
`;

export const UserPageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: #ff9000;
  margin: 30px 0;
`;
