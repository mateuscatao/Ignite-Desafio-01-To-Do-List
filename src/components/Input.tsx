import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import styles from './Input.module.css';

interface InputProps{
  onCreateNewTaskDescription: (content: string) => void; 
}

export function Input({ onCreateNewTaskDescription }: InputProps) {
  const [newTaskDescription, setNewTaskDescription] = useState("")

  function handleCreateNewTaskDescription(event: FormEvent) {
    event.preventDefault();
    onCreateNewTaskDescription(newTaskDescription);
    setNewTaskDescription("");
  }

  function handleNewTaskDescriptionChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskDescription(event.target.value)
  }
  
  function handleNewTaskDescriptionInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!")
  }

  const isNewTaskDescriptionEmpty = newTaskDescription.length === 0;

  return (
    <div className={styles.input}>
      <form onSubmit={handleCreateNewTaskDescription} className={styles.inputForm}>
        <div>
          <textarea 
            name="taskDescription"
            placeholder="Adicione uma nova tarefa"
            value={newTaskDescription}
            onChange={handleNewTaskDescriptionChange}
            onInvalid={handleNewTaskDescriptionInvalid}
            required
          />

          <button type="submit" disabled={isNewTaskDescriptionEmpty}>
            Criar
            <PlusCircle size={22} />
          </button>
        </div>
      </form>
    </div>
  );
}