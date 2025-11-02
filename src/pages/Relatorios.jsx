

import React from 'react';
import styles from './Relatorios.module.css'; 

function Relatorios() {

 
  const handleGerarRelatorio = () => {
    alert('Relatório completo da produção gerado com sucesso!');
  };

  return (
    <div className={styles.container}>
      <h1>Relatórios de Produção</h1>
      
      <p className={styles.description}>
        Esta seção permite gerar um relatório consolidado da produção. 
        O relatório incluirá dados detalhados de todas as aeronaves, etapas concluídas, 
        peças utilizadas e resultados de testes.
      </p>

      <button 
        className={styles.reportButton}
        onClick={handleGerarRelatorio}
      >
        Gerar Relatório Completo
      </button>
    </div>
  );
}

export default Relatorios;