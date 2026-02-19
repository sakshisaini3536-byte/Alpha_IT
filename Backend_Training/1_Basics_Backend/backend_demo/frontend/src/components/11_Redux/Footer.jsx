import { useSelector } from "react-redux";

function Footer() {
  const count = useSelector((state) => state.counter.value);

  console.log("🦶 Footer rendered | count =", count);

  return (
    <div>
      <h3>Footer</h3>
      <p>Count Again: {count}</p>
    </div>
  );
}

export default Footer;
