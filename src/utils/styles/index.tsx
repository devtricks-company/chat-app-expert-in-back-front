import styled from "styled-components";

export const SectionForm = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  gap: 8px;
`;

export const FormContainer = styled.form`
  width: 800px;
`;

export const InputField = styled.input`
  font-family: "Inter";
  background: inherit;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
`;

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  color: #fff;
  background-color: #3415ff;
  outline: 0;
  border: 0;
  font-family: "Inter";
  font-size: 16px;
  border-radius: 10px;
  padding: 25px 0;
  font-weight: 500;
  transition: 0.3s background-color ease;
  &:hover {
    cursor: pointer;
    background-color: #3415ff;
  }
`;

export const Page = styled.div`
  height: 100%;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
`;
