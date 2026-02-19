import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "./2_counterSlice";

function Dashboard() {
  const dispatch = useDispatch();

  console.log("📊 Dashboard rendered");

  return (
    <div>
      <h3>Dashboard</h3>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Dashboard;
