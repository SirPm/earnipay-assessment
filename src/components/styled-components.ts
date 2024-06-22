import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 0px #0000000d;
  border-radius: 8px;
  padding: 30px;
`;

export const Label = styled.label`
  color: #121619;
  font-size: 15px;
  margin-bottom: 3px;
`;

export const Input = styled.input`
  border: 1.5px solid #e2e4e8;
  background-color: #ffffff;
  border-radius: 8px;
  height: 45px;
  padding: 10px;
  color: #1a202c;
  outline: none;

  &:focus {
    border: 1.5px solid #00535c;
  }

  &:placeholder {
    color: #777e90;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #ffffff inset !important;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.disabled ? "#E2E8F0" : "#00535C")};
  border-radius: 8px;
  color: ${(props) => (props.disabled ? "#64748B" : "#FFFFFF")};
  font-size: 15px;
  font-weight: 500;
  padding: 18px 32px;
  outline: none;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  width: 100%;
`;

export const StyledLink = styled(Link)`
  color: #00535c;
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
`;
