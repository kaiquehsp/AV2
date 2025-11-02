// src/pages/Testes/TestesLista.jsx

import React, { useState } from 'react';
import { mockTestes } from '../../data/mockTestes';
import styles from './TestesLista.module.css';

// 1. IMPORTE O NOVO COMPONENTE MODAL
import Modal from '../../components/Modal/Modal.jsx';

function TestesLista() {
  const [listaDeTestes, setListaDeTestes] = useState(mockTestes);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estados para controlar o formulário
  const [novoTipo, setNovoTipo] = useState('ELETRICO');
  const [novoResultado, setNovoResultado] = useState('APROVADO');
  const [novaData, setNovaData] = useState('');
  const [novaAeronaveId, setNovaAeronaveId] = useState('');

  const handleVisualizar = (testeId) => {
    alert(`Visualizando detalhes do teste: ${testeId}`);
  };

  // 2. FUNÇÃO PARA "SALVAR" O NOVO TESTE
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Cria um novo objeto de teste
    const novoTeste = {
      id: `T-${(listaDeTestes.length + 1).toString().padStart(3, '0')}`,
      tipo: novoTipo,
      resultado: novoResultado,
      data: novaData,
      aeronaveId: novaAeronaveId,
    };

    // Adiciona o novo teste à lista (no protótipo, apenas no estado)
    setListaDeTestes([novoTeste, ...listaDeTestes]);
    
    // Limpa o formulário e fecha o modal
    setNovoTipo('ELETRICO');
    setNovoResultado('APROVADO');
    setNovaData('');
    setNovaAeronaveId('');
    setIsModalOpen(false);
  };
  
  return (
    <div>
      <div className={styles.header}>
        <h1>Lista de Testes</h1>
        <button 
          className={styles.cadastrarButton}
          onClick={() => setIsModalOpen(true)} // Abre o modal
        >
          Cadastrar Teste
        </button>
      </div>

      <table className={styles.tabelaTestes}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Resultado</th>
            <th>Data</th>
            <th>Aeronave ID</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {/* 3. A TABELA AGORA USA A LISTA DO ESTADO */}
          {listaDeTestes.map((teste) => (
            <tr key={teste.id}>
              <td>{teste.id}</td>
              <td>{teste.tipo}</td>
              <td>{teste.resultado}</td>
              <td>{teste.data}</td>
              <td>{teste.aeronaveId}</td>
              <td>
                <button 
                  className={styles.actionButton}
                  onClick={() => handleVisualizar(teste.id)}
                >
                  Visualizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 4. O MODAL! 
          Ele só será renderizado se 'isModalOpen' for true
      */}
      {isModalOpen && (
        <Modal title="Cadastrar Novo Teste" onClose={() => setIsModalOpen(false)}>
          
          {/* Este é o 'children': o formulário de cadastro */}
          <form className={styles.modalForm} onSubmit={handleFormSubmit}>
            
            <div className={styles.formGroup}>
              <label htmlFor="tipo">Tipo de Teste</label>
              <select 
                id="tipo" 
                className={styles.formSelect}
                value={novoTipo}
                onChange={(e) => setNovoTipo(e.target.value)}
              >
                <option value="ELETRICO">Elétrico</option>
                <option value="HIDRAULICO">Hidráulico</option>
                <option value="AERODINAMICO">Aerodinâmico</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="resultado">Resultado</label>
              <select 
                id="resultado" 
                className={styles.formSelect}
                value={novoResultado}
                onChange={(e) => setNovoResultado(e.target.value)}
              >
                <option value="APROVADO">Aprovado</option>
                <option value="REPROVADO">Reprovado</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="data">Data de Execução</label>
              <input 
                type="date" 
                id="data" 
                className={styles.formInput}
                value={novaData}
                onChange={(e) => setNovaData(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="aeronaveId">ID da Aeronave</label>
              <input 
                type="text" 
                id="aeronaveId" 
                placeholder="Ex: AC-001" 
                className={styles.formInput}
                value={novaAeronaveId}
                onChange={(e) => setNovaAeronaveId(e.target.value)}
                required
              />
            </div>

            <button type="submit" className={styles.modalSubmitButton}>
              Salvar Teste
            </button>
          </form>

        </Modal>
      )}
    </div>
  );
}

export default TestesLista;