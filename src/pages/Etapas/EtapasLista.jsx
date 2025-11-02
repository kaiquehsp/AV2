import React, { useState } from 'react';
import { mockEtapas } from '../../data/mockEtapas';
import styles from './EtapasLista.module.css';
import Modal from '../../components/Modal/Modal.jsx';


import { mockFuncionarios } from '../../data/mockFuncionarios';

function EtapasLista() {
  const [listaDeEtapas, setListaDeEtapas] = useState(mockEtapas);
  
  const [isCadastrarModalOpen, setIsCadastrarModalOpen] = useState(false);
  const [isAlocarModalOpen, setIsAlocarModalOpen] = useState(false); // Este modal


  const [novoNome, setNovoNome] = useState('');
  const [novoPrazo, setNovoPrazo] = useState('');

 
  const [etapaSelecionadaId, setEtapaSelecionadaId] = useState(mockEtapas[0]?.id || '');
  const [funcionarioSelecionadoId, setFuncionarioSelecionadoId] = useState(mockFuncionarios[0]?.id || '');


  const handleVisualizar = (etapaId) => {
    alert(`Visualizando detalhes da etapa: ${etapaId}`);
  };

  const handleCadastrarSubmit = (e) => {
    e.preventDefault();
    const novaEtapa = {
      id: `E-${(listaDeEtapas.length + 1).toString().padStart(3, '0')}`,
      nome: novoNome,
      prazo: novoPrazo,
      status: 'PENDENTE',
      funcionariosAlocados: []
    };
    setListaDeEtapas([novaEtapa, ...listaDeEtapas]);
    setIsCadastrarModalOpen(false);
    setNovoNome('');
    setNovoPrazo('');
  };

  
  const handleAlocarSubmit = (e) => {
    e.preventDefault();
    if (!etapaSelecionadaId || !funcionarioSelecionadoId) {
      alert('Por favor, selecione uma etapa e um funcionário.');
      return;
    }

   
    alert(`Funcionário ${funcionarioSelecionadoId} alocado à Etapa ${etapaSelecionadaId} com sucesso!`);
    
   
    
    setIsAlocarModalOpen(false);
    
    setEtapaSelecionadaId(mockEtapas[0]?.id || '');
    setFuncionarioSelecionadoId(mockFuncionarios[0]?.id || '');
  };
 

  return (
    <div>
      <div className={styles.header}>
        <h1>Lista de Etapas da Produção</h1>
        <div className={styles.headerActions}>
          <button 
            className={styles.secondaryButton}
            onClick={() => setIsAlocarModalOpen(true)} 
          >
            Alocar Funcionário
          </button>
          <button 
            className={styles.primaryButton}
            onClick={() => setIsCadastrarModalOpen(true)}
          >
            Cadastrar Etapa
          </button>
        </div>
      </div>

      <table className={styles.tabelaEtapas}>
        {}
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome da Etapa</th>
            <th>Prazo</th>
            <th>Status</th>
            <th>Funcionários Alocados</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaDeEtapas.map((etapa) => (
            <tr key={etapa.id}>
              <td>{etapa.id}</td>
              <td>{etapa.nome}</td>
              <td>{etapa.prazo}</td>
              <td>{etapa.status}</td>
              <td>{etapa.funcionariosAlocados.length}</td>
              <td>
                <button 
                  className={styles.actionButton}
                  onClick={() => handleVisualizar(etapa.id)}
                >
                  Visualizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {}
      {isCadastrarModalOpen && (
        <Modal title="Cadastrar Nova Etapa" onClose={() => setIsCadastrarModalOpen(false)}>
          <form className={styles.modalForm} onSubmit={handleCadastrarSubmit}>
            {}
            <div className={styles.formGroup}>
              <label htmlFor="nome">Nome da Etapa</label>
              <input type="text" id="nome" className={styles.formInput} placeholder="Ex: Montagem das Asas (AC-004)" value={novoNome} onChange={(e) => setNovoNome(e.target.value)} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="prazo">Prazo para Conclusão</label>
              <input type="date" id="prazo" className={styles.formInput} value={novoPrazo} onChange={(e) => setNovoPrazo(e.target.value)} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="status">Status Inicial</label>
              <input type="text" id="status" className={styles.formInput} value="PENDENTE" disabled />
            </div>
            <button type="submit" className={styles.modalSubmitButton}>
              Salvar Etapa
            </button>
          </form>
        </Modal>
      )}

      {}
      {isAlocarModalOpen && (
        <Modal title="Alocar Funcionário a uma Etapa" onClose={() => setIsAlocarModalOpen(false)}>
          
          <form className={styles.modalForm} onSubmit={handleAlocarSubmit}>
            
            <div className={styles.formGroup}>
              <label htmlFor="etapaSelect">Etapa (em andamento ou pendente)</label>
              <select 
                id="etapaSelect" 
                className={styles.formSelect}
                value={etapaSelecionadaId}
                onChange={(e) => setEtapaSelecionadaId(e.target.value)}
              >
                <option value="" disabled>Selecione uma etapa</option>
                {}
                {listaDeEtapas.filter(e => e.status !== 'CONCLUIDA').map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="funcionarioSelect">Funcionário (Engenheiro ou Operador)</label>
              <select 
                id="funcionarioSelect" 
                className={styles.formSelect}
                value={funcionarioSelecionadoId}
                onChange={(e) => setFuncionarioSelecionadoId(e.target.value)}
              >
                <option value="" disabled>Selecione um funcionário</option>
                {}
                {mockFuncionarios.filter(f => f.nivelPermissao !== 'ADMINISTRADOR').map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.nome} ({f.nivelPermissao})
                  </option>
                ))}
              </select>
            </div>

            {}
            <button type="submit" className={styles.modalSubmitButton}>
              Alocar Funcionário
            </button>
          </form>

        </Modal>
      )}
    </div>
  );
}

export default EtapasLista;