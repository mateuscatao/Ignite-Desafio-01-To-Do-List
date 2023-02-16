import styles from './Task.module.css';

export function Task() {
  return (
      <div className={styles.taskList}>
        <header>
          <p>Tarefas criadas
            <span>0</span>
          </p>
          <p>Concluídas
            <span>0</span>
          </p>
        </header>
      </div>
  );
}