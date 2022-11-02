import styled from "styled-components";
import { PageProps } from "./stylesType";

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

export const Page = styled.div<PageProps>`
  height: 100%;
  background-color: #1a1a1a;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export const ConversationSidebarStyle = styled.aside`
  background-color: #1a1a1a;
  height: 100%;
  width: 350px;
  position: absolute;
  top: 0;
  left: 0;
  border-right: 1px solid #545454;
  margin: 0;
  & header {
    background-color: #151515;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 0 24px;
    border-bottom: 1px solid #545454;
    & h1 {
      font-weight: 400;
    }
  }
`;

export const ConversationChanelPageStyle = styled.div`
  height: 100%;
  margin-left: 350px;
`;

export const ConversationPanelStyle = styled.div`
  height: 100%;
  margin-left: 350px;
`;
