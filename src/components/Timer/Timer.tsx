import { useState, useEffect } from 'react';
import { format } from '../../utils/common';
import './Timer.css';

export const Timer = () => {
  const [counter, setCounter] = useState(60);

  const handlerClick = () => {
    setCounter(60);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (counter > 0) {
      timer = setTimeout(() => setCounter((counter: number) => counter - 1), 1000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter]);

  return (
    <div className="timer-wrapper">
      {counter === 0 ? (
        <span className="request-pass-again" onClick={handlerClick}>
          Повторно отправить пароль
        </span>
      ) : (
        <span>{format(counter)}</span>
      )}
    </div>
  );
};
