import React, { FC } from "react";
import RegisterForm from "../components/form/registerForm.component";
import { Page } from "../utils/styles";

interface authenticationProps {}

const RegisterPage: FC<authenticationProps> = ({}) => {
  return (
    <Page display="flex" justifyContent="center" alignItems="center">
      <RegisterForm />
    </Page>
  );
};

export default RegisterPage;
