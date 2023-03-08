import { useState } from 'react';

import { EmptyList } from './EmptyList';
import { Input } from './Input';
import { List } from './List';

import styles from './Task.module.css';

type TaskItem = {
  id: number;
  content: string;
  finished: boolean;
}

export function Task() {
  const [count, setCount] = useState(2)
  
  const [taskItems, setTaskItems] = useState<TaskItem[]>([
    {
      id: 1, 
      content: "Testando uma nova tarefa Testando uma nova tarefa Testando uma nova tarefa Testando uma nova tarefa Testando uma nova tarefa Testando uma nova tarefa Testando uma nova tarefa",
      finished: false
    }
  ])

  function onCreateNewTaskDescription(content: string) {
    setTaskItems(state => [...state, {id: count, content, finished: false}])
    setCount(state => state + 1)
  }

  function deleteTask(idToDelete: number) {
    const listWithoutDeletedTask = taskItems.filter(item => {
      return item.id !== idToDelete
    })

    setTaskItems(listWithoutDeletedTask)
  }

  function toggleFinish(id: number) {
    const task = taskItems.find(item => item.id === id);

    if(!task) return

    setTaskItems(state => state.map(item => {
      if(item.id !== id) return item
      return {...item, finished: !task.finished}
    }));
  }

  const finishedItems = taskItems.filter(item => item.finished).length

  return (
    <div className={styles.wrapper}>
      <Input 
        onCreateNewTaskDescription={onCreateNewTaskDescription}
      />
      <div className={styles.taskList}>
        <header>
          <div className={styles.createdTasks}>
            <span>Tarefas criadas</span>
            <span>{taskItems.length}</span>
          </div>
          <div className={styles.completed}>
            <span>Concluídas</span>
            <span>{finishedItems} de {taskItems.length}</span>
          </div>
        </header>

        {taskItems.length === 0 && <EmptyList />}
        {taskItems.length > 0 && (
          <List 
            items={taskItems}
            onDeleteTask={deleteTask}
            onToggleFinish={toggleFinish}
          />
        )}
      </div>
    </div>
  );
}