// export function Exercise() {
//   // const testValue = useSelector((state) => {
//   //   console.log(state, 'store aplikacji w ćwiczeniu Reduxa');

//   //   return state?.storeTest?.value ?? 'Not working';
//   // });
//   return (
//     <div>
//       <p>hej</p>
//       {/* <div>{testValue} - wyświetlam stan naszego Store'a!!</div> */}
//     </div>
//   );
// }

import React, { useState } from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
} from '../../../../Store/slices/counterSlice';
import './styles.css';
export function Exercise() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState('1');
  const [decrementValue, setDecrementValue] = useState('1');

  const handleAdd = () => dispatch(increment());
  const handleDec = () => dispatch(decrement());
  const handleSubVal = () => dispatch(incrementByValue(Number(incrementValue)));
  const handleDecVal = () => dispatch(decrementByValue(Number(decrementValue)));

  const handleIncByVal = (event) => {
    const value = event.target.value;

    setIncrementValue(value);
  };
  const handleDecByVal = (event) => {
    const value = event.target.value;
    setDecrementValue(value);
  };

  return (
    <div>
      <div>Napisz count : {count} </div>

      <button onClick={handleAdd}>Dodaj 1 </button>
      <button onClick={handleSubVal}>Dodaj {incrementValue}</button>
      <input onChange={handleIncByVal} type="text" value={incrementValue} />
      <input onChange={handleDecByVal} type="text" value={decrementValue} />
      <button onClick={handleDecVal}>Odejmij {decrementValue}</button>
      <button onClick={handleDec}>Odejmij 1 </button>
    </div>
  );
}
