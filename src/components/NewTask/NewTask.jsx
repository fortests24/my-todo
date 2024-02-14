import { useState, useCallback } from 'react'; // 
import useDebounce from '../../helpers/index';
import { useAddTaskMutation } from '../../redux/tasksApi';
import { nanoid } from 'nanoid';
import styles from './newTask.module.scss';


const NewTask = () => {
  const [inputValue, setInputValue] = useState('');
  const [addTask] = useAddTaskMutation();


  const handleAddTask = async () => {
    if(inputValue) {
      await addTask({
        id: nanoid(),
        title: inputValue,
        completed: false
      }).unwrap();
      setInputValue('');
    }
  };

  return (
    <section className={styles.newTask}>
      <input
        className={styles.newTask__input}
        type="text"
        value={inputValue}
        placeholder="Напишите задачу..."
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={(event) => {
          if(event.key === 'Enter') {
            handleAddTask();
          }
        }}
      />
      <button
        className={styles.newTask__button}
        onClick={handleAddTask}
        aria-label="Add"
      />
      </section>
    );
}

export default NewTask;
