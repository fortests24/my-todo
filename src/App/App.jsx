import { useState } from 'react';
import NewTask from '../components/NewTask';
import TaskList from '../components/TaskList';

import styles from './app.module.scss';


const App = () => {
  const [tasks, setTask] = useState([])

  

  return (
    <main className={styles.todo}>
      <h1 className={styles.todo__title}>Todos</h1>
      <NewTask />
      <TaskList />
    </main>
  );
}

export default App;