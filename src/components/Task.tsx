import { EmptyList } from './EmptyList';
import { List } from './List';
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

      <EmptyList />
      {/* <List /> */}
      
    </div>
  );
}