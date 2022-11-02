import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  FormContainer,
  InputContainer,
  InputField,
  InputLabel,
  SectionForm,
} from "../../utils/styles";
import styles from "../../utils/styles/index.module.scss";

const RegisterForm = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <InputContainer>
        <InputLabel htmlFor="email">Email: </InputLabel>
        <InputField type="email" id="email" />
      </InputContainer>
      <SectionForm>
        <InputContainer>
          <InputLabel htmlFor="firstname"> FirstName: </InputLabel>
          <InputField type="text" id="firstname" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastname"> LastName: </InputLabel>
          <InputField type="text" id="lastname" />
        </InputContainer>
      </SectionForm>
      <InputContainer>
        <InputLabel htmlFor="password"> Password: </InputLabel>
        <InputField type="password" id="password" />
      </InputContainer>
      <Button className={styles.button}>Create My Account</Button>
      <div className={styles.existingUser}>
        <span>Alrady have an account?</span>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </div>
    </FormContainer>
  );
};

export default RegisterForm;
