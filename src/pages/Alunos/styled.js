import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;

    div {
      display: flex;
      margin-bottom: 2px;
    }
  }

  div + .adicionaBorder {
    border-top: 1px solid #eee;
  }

  .divNome {
    width: 100px;
    display: flex;
    justify-content: center;
  }

  .divEmail {
    width: 250px;
    display: flex;
    justify-content: center;
  }

  .alunoNome {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 90px;
  }

  .alunoEmail {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 250px;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const NovoAluno = styled(Link)`
  display: block;
  padding: 10px;
  text-align: start;
  font-size: 20px;
  margin-top: 10px;
`;

export const ButtonSection = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 7px;
`;
