import { ClipboardText,  } from "phosphor-react"
import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.taskList}>
      <header>
        <div className={styles.createdTasks}>
          <span>Tarefas criadas</span>
          <span>0</span>
        </div>
        <div className={styles.completed}>
          <span>Concluídas</span>
          <span>0</span>
        </div>
      </header>

      <div className={styles.listContainer}>
        <div className={styles.listContent}>
          <ClipboardText size={60} color="#333333" />
          <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </div>
    </div>
  );
}