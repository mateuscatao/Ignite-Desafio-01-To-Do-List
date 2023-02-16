import { Header } from './components/Header';
import { Task } from './components/Task';

import styles from './App.module.css';

import './global.css';
import { CreateNewTask } from './components/CreateNewTask';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <CreateNewTask />
        <Task />
      </div>
    </div>
  )
}