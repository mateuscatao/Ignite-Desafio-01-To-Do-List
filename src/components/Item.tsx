import { Trash } from 'phosphor-react';
import { useState } from 'react';

import styles from './Item.module.css'

export interface ItemProps {
  id: number;
  content: string;
  finished: boolean;
  onDeleteTask: (taskId: number) => void;
  onToggleFinish: (taskId: number) => void;
}

export function Item({ id, content, finished = false, onDeleteTask, onToggleFinish }: ItemProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleToggleFinish() {
    onToggleFinish(id);
  }

  return (
    <div className={styles.item}>
      <label className={styles.checkControl}>
        <input onChange={handleToggleFinish} type="checkbox" checked={finished}/>
        <span>{content}</span>
      </label>

      <button onClick={handleDeleteTask} className={styles.trash}>
        <Trash size={18}/>
      </button>
    </div>
  );
}