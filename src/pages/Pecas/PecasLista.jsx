// src/pages/Pecas/PecasLista.jsx

import React, { useState } from 'react';
import { mockPecas } from '../../data/mockPecas';
import styles from './PecasLista.module.css';


import Modal from '../../components/Modal/Modal.jsx';

function PecasLista() {
  const [listaDePecas, setListaDePecas] = useState(mockPecas);
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const [novoNome, setNovoNome] = useState('');
  const [novoFornecedor, setNovoFornecedor] = useState('');
  const [novoTipo, setNovoTipo] = useState('NACIONAL'); 
  const [novoStatus, setNovoStatus] = useState('EM_PRODUCAO'); 


  const handleVisualizar = (pecaId) => {
    alert(`Visualizando detalhes da peça: ${pecaId}`);
  };

  
  const handleCadastrarSubmit = (e) => {
    e.preventDefault();

    const novaPeca = {
      id: `P-${(listaDePecas.length + 1).toString().padStart(3, '0')}`,
      nome: novoNome,
      fornecedor: novoFornecedor,
      tipo: novoTipo,
      status: novoStatus,
    };

    setListaDePecas([novaPeca, ...listaDePecas]);

   
    setIsModalOpen(false);
    setNovoNome('');
    setNovoFornecedor('');
    setNovoTipo('NACIONAL');
    setNovoStatus('EM_PRODUCAO');
  };


  return (
    <div>
      <div className={styles.header}>
        <h1>Lista de Peças</h1>
        <button 
          className={styles.cadastrarButton}
          onClick={() => setIsModalOpen(true)}
        >
          Cadastrar Peça
        </button>
      </div>

      <table className={styles.tabelaPecas}>
        {}
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome da Peça</th>
            <th>Fornecedor</th>
            <th>Tipo</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaDePecas.map((peca) => (
            <tr key={peca.id}>
              <td>{peca.id}</td>
              <td>{peca.nome}</td>
              <td>{peca.fornecedor}</td>
              <td>{peca.tipo}</td>
              <td>{peca.status}</td>
              <td>
                <button 
                  className={styles.actionButton}
                  onClick={() => handleVisualizar(peca.id)}
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
        <Modal title="Cadastrar Nova Peça" onClose={() => setIsModalOpen(false)}>
          
          <form className={styles.modalForm} onSubmit={handleCadastrarSubmit}>
            
            {}
            <div className={styles.formGroup}>
              <label htmlFor="nome">Nome da Peça</label>
              <input 
                type="text" id="nome" className={styles.formInput}
                placeholder="Ex: Motor Turbo-hélice"
                value={novoNome} onChange={(e) => setNovoNome(e.target.value)} required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="fornecedor">Fornecedor</label>
              <input 
                type="text" id="fornecedor" className={styles.formInput}
                placeholder="Ex: Honeywell"
                value={novoFornecedor} onChange={(e) => setNovoFornecedor(e.target.value)} required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="tipo">Tipo</label>
              <select 
                id="tipo" className={styles.formSelect}
                value={novoTipo} onChange={(e) => setNovoTipo(e.target.value)}
              >
                {}
                <option value="NACIONAL">Nacional</option>
                <option value="IMPORTADA">Importada</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="status">Status</label>
              <select 
                id="status" className={styles.formSelect}
                value={novoStatus} onChange={(e) => setNovoStatus(e.target.value)}
              >
                {}
                <option value="EM_PRODUCAO">Em Produção</option>
                <option value="EM_TRANSPORTE">Em Transporte</option>
                <option value="PRONTA">Pronta para Uso</option>
              </select>
            </div>

            <button type="submit" className={styles.modalSubmitButton}>
              Salvar Peça
            </button>
          </form>

        </Modal>
      )}
    </div>
  );
}

export default PecasLista;