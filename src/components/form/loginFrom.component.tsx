import React from "react";
import { Link } from "react-router-dom";
import {
  FormContainer,
  InputContainer,
  InputLabel,
  InputField,
  Button,
} from "../../utils/styles";
import styles from "../../utils/styles/index.module.scss";

const LoginFormComponent = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <FormContainer onSubmit={onSubmit}>
      <InputContainer>
        <InputLabel htmlFor="email">Email: </InputLabel>
        <InputField type="email" id="email" />
      </InputContainer>
      <InputContainer className={styles.lastName}>
        <InputLabel htmlFor="password"> Password: </InputLabel>
        <InputField type="password" id="password" />
      </InputContainer>
      <Button className={styles.button}>Login</Button>
      <div className={styles.existingUser}>
        <span>Don't have an account?</span>
        <Link to="/register">
          <span>Register</span>
        </Link>
      </div>
    </FormContainer>
  );
};

export default LoginFormComponent;
