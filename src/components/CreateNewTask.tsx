import { PlusCircle } from "phosphor-react";
import styles from './CreateNewTask.module.css';

export function CreateNewTask() {
  return (
    <div className={styles.createNewTask}>
      <form className={styles.createNewTaskForm}>
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