import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/index'; 

const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.counter);

  const show = useSelector(state => state.counter.showCounter);

  const incrementHanlder = () => {
   // dispatch({ type: 'increment' });
   dispatch(counterActions.increment());

  };

  const decrementHanlder = () => {
   // dispatch({ type: 'decrement' });
   dispatch(counterActions.decrement());
  };

  const increaseHanlder = () => {
    //dispatch({ type: 'increase', amount: 10});
    dispatch(counterActions.increase(10));
    
  };

  const toggleCounterHandler = () => {
    //dispatch({ type: 'toggle'});
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHanlder}>Increment</button>
        <button onClick={increaseHanlder}>Increase by 10</button>
        <button onClick={decrementHanlder}>Decrement</button>
        
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
