import { ClipboardText,  } from "phosphor-react"
import styles from './EmptyList.module.css'

export function EmptyList() {
  return (
    <div className={styles.EmptyListContainer}>
      <div className={styles.EmptyList}>
        <ClipboardText size={60} color="#333333" />
          <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
    </div>
    </div>
  );
}