import React, { useState } from 'react';
import { mockAeronaves } from '../../data/mockAeronaves'; 
import styles from './AeronavesLista.module.css';
import Modal from '../../components/Modal/Modal.jsx';


import { mockPecas } from '../../data/mockPecas';

function AeronavesLista() {
  const [listaDeAeronaves, setListaDeAeronaves] = useState(mockAeronaves);
  
  const [isRegistrarModalOpen, setIsRegistrarModalOpen] = useState(false);
  const [isVincularModalOpen, setIsVincularModalOpen] = useState(false); // Este modal


  const [novoCodigo, setNovoCodigo] = useState('');
 
  const [novoModelo, setNovoModelo] = useState('');
  const [novoTipo, setNovoTipo] = useState('COMERCIAL');
  const [novaCapacidade, setNovaCapacidade] = useState(0);
  const [novoAlcance, setNovoAlcance] = useState(0);


  
  const [aeronaveSelecionadaId, setAeronaveSelecionadaId] = useState(mockAeronaves[0]?.id || '');
  const [pecaSelecionadaId, setPecaSelecionadaId] = useState(mockPecas[0]?.id || '');


  const handleVisualizar = (aeronaveId) => {
    alert(`Visualizando detalhes da aeronave: ${aeronaveId}`);
  };

  const handleRegistrarSubmit = (e) => {
    e.preventDefault();
    const codigoExistente = listaDeAeronaves.find(a => a.codigo === novoCodigo);
    if (codigoExistente) {
      alert('Erro: O código da aeronave já existe.');
      return;
    }
    const novaAeronave = {
      id: novoCodigo,
      codigo: novoCodigo,
      modelo: novoModelo,
      tipo: novoTipo,
      capacidade: parseInt(novaCapacidade, 10),
      alcance: parseInt(novoAlcance, 10),
      status: 'Recém Cadastrada'
    };
    setListaDeAeronaves([novaAeronave, ...listaDeAeronaves]);
    setIsRegistrarModalOpen(false);
    setNovoCodigo('');
    setNovoModelo('');
    setNovoTipo('COMERCIAL');
    setNovaCapacidade(0);
    setNovoAlcance(0);
  };

  
  const handleVincularSubmit = (e) => {
    e.preventDefault();
    if (!aeronaveSelecionadaId || !pecaSelecionadaId) {
      alert('Por favor, selecione uma aeronave e uma peça.');
      return;
    }

    
    alert(`Peça ${pecaSelecionadaId} vinculada à Aeronave ${aeronaveSelecionadaId} com sucesso!`);
    
    
    
    setIsVincularModalOpen(false);
    
    setAeronaveSelecionadaId(mockAeronaves[0]?.id || '');
    setPecaSelecionadaId(mockPecas[0]?.id || '');
  };
  // ------------------------------------------

  return (
    <div>
      <div className={styles.header}>
        <h1>Lista de Aeronaves</h1>
        <div className={styles.headerActions}>
          <button 
            className={styles.secondaryButton}
            onClick={() => setIsVincularModalOpen(true)} 
          >
            Vincular Peça
          </button>
          <button 
            className={styles.primaryButton}
            onClick={() => setIsRegistrarModalOpen(true)}
          >
            Registrar Aeronave
          </button>
        </div>
      </div>

      <table className={styles.tabelaAeronaves}>
        {}
        <thead>
          <tr>
            <th>Código</th>
            <th>Modelo</th>
            <th>Tipo</th>
            <th>Capacidade</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaDeAeronaves.map((aeronave) => (
            <tr key={aeronave.id}>
              <td>{aeronave.codigo}</td>
              <td>{aeronave.modelo}</td>
              <td>{aeronave.tipo}</td>
              <td>{aeronave.capacidade}</td>
              <td>{aeronave.status}</td>
              <td>
                <button 
                  className={styles.actionButton}
                  onClick={() => handleVisualizar(aeronave.id)}
                >
                  Visualizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {}
      {isRegistrarModalOpen && (
        <Modal title="Registrar Nova Aeronave" onClose={() => setIsRegistrarModalOpen(false)}>
          <form className={styles.modalForm} onSubmit={handleRegistrarSubmit}>
            {/* ... (formulário de registro, sem alteração) ... */}
            <div className={styles.formGroup}>
              <label htmlFor="codigo">Código (Único)</label>
              <input type="text" id="codigo" className={styles.formInput} value={novoCodigo} onChange={(e) => setNovoCodigo(e.target.value)} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="modelo">Modelo</label>
              <input type="text" id="modelo" className={styles.formInput} value={novoModelo} onChange={(e) => setNovoModelo(e.target.value)} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="tipo">Tipo</label>
              <select id="tipo" className={styles.formSelect} value={novoTipo} onChange={(e) => setNovoTipo(e.target.value)}>
                <option value="COMERCIAL">Comercial</option> 
                <option value="MILITAR">Militar</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="capacidade">Capacidade (Passageiros)</label>
              <input type="number" id="capacidade" className={styles.formInput} value={novaCapacidade} onChange={(e) => setNovaCapacidade(e.target.value)} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="alcance">Alcance (km)</label>
              <input type="number" id="alcance" className={styles.formInput} value={novoAlcance} onChange={(e) => setNovoAlcance(e.target.value)} required />
            </div>
            <button type="submit" className={styles.modalSubmitButton}>
              Salvar Aeronave
            </button>
          </form>
        </Modal>
      )}

      {}
      {isVincularModalOpen && (
        <Modal title="Vincular Peça a uma Aeronave" onClose={() => setIsVincularModalOpen(false)}>
          
          <form className={styles.modalForm} onSubmit={handleVincularSubmit}>
            
            <div className={styles.formGroup}>
              <label htmlFor="aeronaveSelect">Aeronave</label>
              <select 
                id="aeronaveSelect" 
                className={styles.formSelect}
                value={aeronaveSelecionadaId}
                onChange={(e) => setAeronaveSelecionadaId(e.target.value)}
              >
                <option value="" disabled>Selecione uma aeronave</option>
                {}
                {listaDeAeronaves.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.codigo} ({a.modelo})
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="pecaSelect">Peça (Disponível)</label>
              <select 
                id="pecaSelect" 
                className={styles.formSelect}
                value={pecaSelecionadaId}
                onChange={(e) => setPecaSelecionadaId(e.target.value)}
              >
                <option value="" disabled>Selecione uma peça</option>
                {}
                {mockPecas.filter(p => p.status === 'PRONTA').map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nome} ({p.fornecedor})
                  </option>
                ))}
              </select>
            </div>

            {}
            <button type="submit" className={styles.modalSubmitButton}>
              Vincular Peça
            </button>
          </form>

        </Modal>
      )}
    </div>
  );
}

export default AeronavesLista;