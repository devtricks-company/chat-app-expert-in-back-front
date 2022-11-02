import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  FormContainer,
  InputContainer,
  InputLabel,
  InputField,
  Button,
} from "../../utils/styles";
import styles from "../../utils/styles/index.module.scss";

type loginType = {
  email: string;
  password: string;
};

const LoginFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>();

  console.log(errors);
  const onSubmit: SubmitHandler<loginType> = (data) => {
    console.log(data);
  };
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email">Email: </InputLabel>
        <InputField
          type="email"
          id="email"
          {...register("email", { required: "the email is required" })}
        />
      </InputContainer>
      <InputContainer className={styles.lastName}>
        <InputLabel htmlFor="password"> Password: </InputLabel>
        <InputField
          type="password"
          id="password"
          {...register("password", { required: "the password is required" })}
        />
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
