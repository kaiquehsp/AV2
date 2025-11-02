import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Registro.module.css';

function Registro() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');


  const handleRegistro = (e) => {
    e.preventDefault();
    
    const novoAdmin = { id, nome, telefone, endereco, usuario, senha };
    alert(`Administrador ${nome} registrado com sucesso!`);
    console.log("Novo Administrador:", novoAdmin);
    
    
    navigate('/login');
  };

  return (
    <div className={styles.registroContainer}>
      
      {}
      <div className={styles.logoText}>
        AeroCode
      </div>

      <h2>Registro do Primeiro Administrador</h2>
      
      <form onSubmit={handleRegistro}>
        
        {}
        <div className={styles.formGroup}>
          <label htmlFor="id">ID (Código Único)</label>
          <input 
            type="text" id="id" className={styles.inputField}
            placeholder="Ex: ADM-001"
            value={id} onChange={(e) => setId(e.target.value)} required
          />
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="nome">Nome Completo</label>
          <input 
            type="text" id="nome" className={styles.inputField}
            value={nome} onChange={(e) => setNome(e.target.value)} required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="telefone">Telefone</label>
          <input 
            type="tel" id="telefone" className={styles.inputField}
            placeholder="(XX) XXXXX-XXXX"
            value={telefone} onChange={(e) => setTelefone(e.target.value)} required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="endereco">Endereço</label>
          <input 
            type="text" id="endereco" className={styles.inputField}
            placeholder="Rua, Número, Bairro, Cidade - Estado"
            value={endereco} onChange={(e) => setEndereco(e.target.value)} required
          />
        </div>
        
        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />

        {}
        <div className={styles.formGroup}>
          <label htmlFor="usuario">Usuário (Login)</label>
          <input 
            type="text" id="usuario" className={styles.inputField}
            value={usuario} onChange={(e) => setUsuario(e.target.value)} required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="senha">Senha</label>
          <input 
            type="password" id="senha" className={styles.inputField}
            value={senha} onChange={(e) => setSenha(e.target.value)} required
          />
        </div>

        {
        }

        <button type="submit" className={styles.submitButton}>
          Registrar Administrador
        </button>
      </form>

    </div>
  );
}

export default Registro;