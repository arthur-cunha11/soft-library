import React from "react";
import UserLogin from "../Login";
import UserRegister from "../Register";
import { UserPageWrapper } from "../../index";

const UserPage: React.FC = () => {
  return (
    <UserPageWrapper>
      <UserLogin />
      <UserRegister />
    </UserPageWrapper>
  );
};

export default UserPage;
