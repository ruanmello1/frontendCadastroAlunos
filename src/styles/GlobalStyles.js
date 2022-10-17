import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border-radius: 4px;
    border: none;
    color: #fff;
    padding: 10px 20px;
    font-weight: 700;
    transition: all 300ms;
  }

  button:hover {
    filter:brightness(85%);
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor};
    color: #000;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor};
    color: #000;
  }
  `;

export const Container = styled.section`
  max-width: 720px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
