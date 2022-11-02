import React from "react";
import LoginFormComponent from "../components/form/loginFrom.component";
import {
  FormContainer,
  InputContainer,
  InputLabel,
  InputField,
  SectionForm,
  Button,
  Page,
} from "../utils/styles";

const LoginPage = () => {
  return (
    <Page>
      <LoginFormComponent />
    </Page>
  );
};

export default LoginPage;
