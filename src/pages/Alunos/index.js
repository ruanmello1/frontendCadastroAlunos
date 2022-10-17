import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
  FaPlus,
} from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import history from '../../services/history';
import {
  AlunoContainer,
  ProfilePicture,
  NovoAluno,
  ButtonSection,
} from './styled';

import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      e.target.parentElement.remove();
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', []);

      if (status === 401) {
        toast.error('Você precisa fazer login');
        history.push('/login/');
        setIsLoading(false);
        return;
      } else {
        toast.error('Ocorreu um erro ao excluir aluno');
      }

      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>

      <NovoAluno to="/aluno/">
        <FaPlus size={15} /> Novo aluno
      </NovoAluno>

      <AlunoContainer>
        {alunos.map((aluno) => (
          <div className="adicionaBorder" key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img crossOrigin="" src={aluno.Fotos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <div className="divNome">
              <span className="alunoNome">{aluno.nome}</span>
            </div>
            <div className="divEmail">
              <span className="alunoEmail">{aluno.email}</span>
            </div>

            <ButtonSection>
              <Link to={`/aluno/${aluno.id}/edit`}>
                <div className="editButton">
                  <FaEdit size={16} />
                </div>
              </Link>

              <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
                <div>
                  <FaWindowClose size={16} />
                </div>
              </Link>

              <FaExclamation
                size={16}
                display="none"
                cursor="pointer"
                onClick={(e) => handleDelete(e, aluno.id)}
              />
            </ButtonSection>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
