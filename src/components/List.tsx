import { Circle, CheckCircle, Trash } from 'phosphor-react';
import styles from './List.module.css'

export function List() {
  return (
    <div className={styles.list}>
      <div className={styles.item}>
        <div>
          <button className={styles.circle}>
            <Circle size={22}/>
          </button>

          <span>Testando uma nova tarefaTestando uma nova tarefa Testando uma nova tarefa Testando uma nova tarefa</span>
        </div>

        <button className={styles.trash}>
          <Trash size={18}/>
        </button>
      </div>
    </div>
  );
}