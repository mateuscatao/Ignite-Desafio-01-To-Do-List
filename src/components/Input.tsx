import { PlusCircle } from "phosphor-react";
import styles from './Input.module.css';

export function Input() {
  return (
    <div className={styles.Input}>
      <form className={styles.InputForm}>
        <div>
          <textarea 
            name="taskDescription"
            placeholder="Adicione uma nova tarefa"
            required
          />

          <button type="submit">
            Criar
            <PlusCircle size={22} />
          </button>
        </div>
      </form>
    </div>
  );
}