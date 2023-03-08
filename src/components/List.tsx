import { Item } from "./Item";

import styles from "./List.module.css"

interface ListProps {
  items: {
    id: number;
    content: string;
    finished: boolean;
  }[]
  onDeleteTask: (taskId: number) => void;
  onToggleFinish: (taskId: number) => void;
}

export function List({ items, onDeleteTask, onToggleFinish }: ListProps) {
  return(
    <div className={styles.list}>
      {
        items.map(item => (
          <Item
            id={item.id}
            key={item.id}
            content={item.content}
            finished={item.finished}
            onDeleteTask={onDeleteTask}
            onToggleFinish={onToggleFinish}
          />
        ))
      }
    </div>
  );
}