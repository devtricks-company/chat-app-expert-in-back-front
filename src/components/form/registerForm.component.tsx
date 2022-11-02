import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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

type RegisterFormType = {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>();

  console.log(errors);
  const onSubmit: SubmitHandler<RegisterFormType> = (data) => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor="email">Email: </InputLabel>
        <InputField
          type="email"
          id="email"
          {...register("email", { required: "Email is requierd" })}
        />
      </InputContainer>
      <SectionForm>
        <InputContainer>
          <InputLabel htmlFor="firstname"> FirstName: </InputLabel>
          <InputField
            type="text"
            id="firstname"
            {...register("firstname", {
              required: "FirstName is Required",
            })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastname"> LastName: </InputLabel>
          <InputField
            type="text"
            id="lastname"
            {...register("lastname", {
              required: "lastName is required",
            })}
          />
        </InputContainer>
      </SectionForm>
      <InputContainer>
        <InputLabel htmlFor="password"> Password: </InputLabel>
        <InputField
          type="password"
          id="password"
          {...register("password", { required: "password is required" })}
        />
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
