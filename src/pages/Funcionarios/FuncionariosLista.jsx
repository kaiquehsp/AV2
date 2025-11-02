import React, { useState } from 'react';
import { mockFuncionarios } from '../../data/mockFuncionarios';
import styles from './FuncionariosLista.module.css';


import Modal from '../../components/Modal/Modal.jsx';

function FuncionariosLista() {
  const [listaDeFuncionarios, setListaDeFuncionarios] = useState(mockFuncionarios);
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const [novoNome, setNovoNome] = useState('');
  const [novoTelefone, setNovoTelefone] = useState('');
  const [novoEndereco, setNovoEndereco] = useState('');
  const [novoUsuario, setNovoUsuario] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [novoNivel, setNovoNivel] = useState('OPERADOR'); 
 

  const handleVisualizar = (funcionarioId) => {
    alert(`Visualizando detalhes do funcionário: ${funcionarioId}`);
  };

 
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const novoFuncionario = {
      id: `F-${(listaDeFuncionarios.length + 1).toString().padStart(3, '0')}`,
      nome: novoNome,
      telefone: novoTelefone,
      endereco: novoEndereco,
      usuario: novoUsuario,
   
      nivelPermissao: novoNivel,
    };

    setListaDeFuncionarios([novoFuncionario, ...listaDeFuncionarios]);

    
    setIsModalOpen(false);
    setNovoNome('');
    setNovoTelefone('');
    setNovoEndereco('');
    setNovoUsuario('');
    setNovaSenha('');
    setNovoNivel('OPERADOR');
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>Lista de Funcionários</h1>
        <button 
          className={styles.cadastrarButton}
          onClick={() => setIsModalOpen(true)}
        >
          Cadastrar Funcionário
        </button>
      </div>

      <table className={styles.tabelaFuncionarios}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Nível de Permissão</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {}
          {listaDeFuncionarios.map((func) => (
            <tr key={func.id}>
              <td>{func.id}</td>
              <td>{func.nome}</td>
              <td>{func.telefone}</td>
              <td>{func.nivelPermissao}</td>
              <td>
                <button 
                  className={styles.actionButton}
                  onClick={() => handleVisualizar(func.id)}
                >
                  Visualizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {}
      {isModalOpen && (
        <Modal title="Cadastrar Novo Funcionário" onClose={() => setIsModalOpen(false)}>
          
          <form className={styles.modalForm} onSubmit={handleFormSubmit}>
            
            {}
            <div className={styles.formGroup}>
              <label htmlFor="nome">Nome Completo</label>
              <input type="text" id="nome" className={styles.formInput}
                value={novoNome} onChange={(e) => setNovoNome(e.target.value)} required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="telefone">Telefone</label>
              <input type="tel" id="telefone" className={styles.formInput}
                value={novoTelefone} onChange={(e) => setNovoTelefone(e.target.value)} required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="endereco">Endereço</label>
              <input type="text" id="endereco" className={styles.formInput}
                value={novoEndereco} onChange={(e) => setNovoEndereco(e.target.value)} required
              />
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '10px 0' }} />

            <div className={styles.formGroup}>
              <label htmlFor="usuario">Usuário (Login)</label>
              <input type="text" id="usuario" className={styles.formInput}
                value={novoUsuario} onChange={(e) => setNovoUsuario(e.target.value)} required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" className={styles.formInput}
                value={novaSenha} onChange={(e) => setNovaSenha(e.target.value)} required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="nivel">Nível de Permissão</label>
              <select id="nivel" className={styles.formSelect}
                value={novoNivel} onChange={(e) => setNovoNivel(e.target.value)}
              >
                {}
                <option value="OPERADOR">Operador</option>
                <option value="ENGENHEIRO">Engenheiro</option>
                <option value="ADMINISTRADOR">Administrador</option>
              </select>
            </div>

            <button type="submit" className={styles.modalSubmitButton}>
              Salvar Funcionário
            </button>
          </form>

        </Modal>
      )}
    </div>
  );
}

export default FuncionariosLista;