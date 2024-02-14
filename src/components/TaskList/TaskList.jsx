// import React, { useLayoutEffect, useState, useRef } from 'react';
// import { useEffect, useState } from 'react';
import { useGetTasksQuery } from '../../redux/tasksApi';
import Task from '../Task';
import styles from './taskList.module.scss';


const TaskList = () => {
  const {data = [], isLoading} = useGetTasksQuery();

  return (
    <ul className={styles.taskList}>
      {data.map(el => {
        return (
          <Task key={el.id} props={el} /> 
        )
        })
      }
    </ul>
  );
}

export default TaskList;
