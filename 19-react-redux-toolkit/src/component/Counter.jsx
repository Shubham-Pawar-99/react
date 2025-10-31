import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  decreaseby10,
  increase,
  increaseby10,
} from "../redux/slice/counter.slice";

const Counter = () => {
  const count = useSelector((state) => state.counterSlice);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button onClick={() => dispatch(increaseby10())}>Increase By 10</button>
      <button onClick={() => dispatch(decreaseby10())}>Decrease By 10</button>
    </div>
  );
};

export default Counter;
