import { useLayoutEffect, useState, useRef, useEffect } from 'react';
import { useDeleteTaskMutation, useUpdateTaskMutation } from '../../redux/tasksApi';

import styles from './task.module.scss';


const Task = ({props}) => {
  const { id, title, completed } = props;

  const [checked, setChecked] = useState(completed);
  const [isEdit, setEdit] = useState(false)
  const [value, setValue] = useState(title);
  const editTitleInputRef = useRef(null);
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  useLayoutEffect(() => {
    if(isEdit && editTitleInputRef) {
        editTitleInputRef.current.focus();
    }
  }, [isEdit])

  useEffect(() => {
    handleUpdateTask()
  }, [checked])

  const handleDelete = async () => {
    deleteTask(id).unwrap();
  };

  const handleUpdateTask = async () => {
    updateTask({
      id: id,
      title: value,
      completed: checked
    });
  };

  

  return (
    <li className={styles.task}>
      <label className={styles.task__label}>
        <input
          type="checkbox"
          checked={checked}
          className={styles.task__input}
          onChange={() => {
            setChecked(!checked)           
          }}
        />
        <span className={checked ? `${styles.task__checkbox} ${styles['task__checkbox--isChecked']}` : styles.task__checkbox}></span>
        {isEdit ? (
          <input 
            value={value}
            ref={editTitleInputRef}
            className={styles['task__title--isEdit']}
            onChange={() => setValue(event.target.value)}
            onKeyDown={(event) => {
              if(event.key === 'Enter') {
                setEdit(!isEdit)
                handleUpdateTask()
              }}}
          />
          ) : <h3 className={checked ? `${styles.task__title} ${styles['task__title--isChecked']}` : styles.task__title}>{title}</h3>}
      </label>
        {isEdit ? (
            <button
              onClick={() => {
                setEdit(!isEdit)
                handleUpdateTask()
                // setEdit(false)
              }}
              aria-label="Save"
              className={`${styles['task__button']} ${styles['task__button--isSave']}`}
              />
          ) : (
            <button
              onClick={() => {
                setEdit(!isEdit)
              }}
              aria-label="Edit"
              className={`${styles['task__button']} ${styles['task__button--isEdit']}`}
            />
          )}
      <button
        onClick={handleDelete}
        aria-label="Remove"
        className={`${styles['task__button']} ${styles['task__button--isRemove']}`}
      />
    </li>
  );
}

export default Task;


