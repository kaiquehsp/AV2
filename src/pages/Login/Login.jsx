import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './Login.module.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Usuário logado!");
    navigate('/dashboard'); 
  }

  return (
    <div className={styles.loginContainer}>
      
      {}
      {}
      <div className={styles.logoText}>
        {}
        AeroCode
      </div>

      <h2>Login</h2>
      
      <div className={styles.inputGroup}>
        <label htmlFor="usuario">Usuário</label>
        <input 
          type="text" 
          id="usuario"
          placeholder="Digite seu usuário" 
          className={styles.inputField} 
        />
      </div>
      
      <div className={styles.inputGroup}>
        <label htmlFor="senha">Senha</label>
        <input 
          type="password" 
          id="senha"
          placeholder="Digite sua senha" 
          className={styles.inputField} 
        />
      </div>
      
      <button onClick={handleLogin} className={styles.loginButton}>
        Entrar
      </button>

      {}

    </div>
  );
}

export default Login;