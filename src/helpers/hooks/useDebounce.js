import { useState, useEffect } from 'react';


const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    }
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;

// Хук useDebounce использует хук useState для создания состояния debauncedValue, 
// которое инициализируется переданным значением value.

// Затем хук useEffect используется для отслеживания изменений значения и задержки. 
// При каждом изменении значения или задержки, хук useEffect создает новый таймер, 
// который запускает функцию, устанавливающую значение debauncedValue через переданную задержку.

// Если значение или задержка изменяются во время выполнения таймера, 
// хук useEffect вызывает возвращаемую функцию очистки, которая отменяет предыдущий таймер и создает новый.

// В конце хук useDebounce возвращает текущее задержанное значение debauncedValue.

// В итоге useDebounce помогает управлять частотой обновлений значения, 
// чтобы избежать излишней нагрузки и улучшить производительность.