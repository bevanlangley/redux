import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
=======
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
>>>>>>> ba285b450d07f5ee9f0fc408233ba21f9d25a170

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 });
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
<<<<<<< HEAD
    dispatch({ type: 'toggle' });
=======
    dispatch(counterActions.toggleCounter());
>>>>>>> ba285b450d07f5ee9f0fc408233ba21f9d25a170
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
