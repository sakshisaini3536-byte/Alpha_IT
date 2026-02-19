import { useSelector } from "react-redux";

function Navbar() {
  const count = useSelector((state) => state.counter.value);

  console.log("🧭 Navbar rendered | count =", count);

  return (
    <div>
      <h3>Navbar</h3>
      <p>Total Count: {count}</p>
    </div>
  );
}

export default Navbar;
