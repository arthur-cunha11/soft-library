import React from "react";
import UserLogin from "../Login";
import UserRegister from "../Register";
import { Wrapper } from "../../index";

const UserPage: React.FC = () => {
  return (
    <Wrapper>
      <UserLogin />
      <UserRegister />
    </Wrapper>
  );
};

export default UserPage;
