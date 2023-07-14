/* eslint-disable no-self-compare */
import { useState, useRef, useMemo } from "react";

const Component = ({ data }) => {
  const previousRef = useRef(null);
  const [color1, setColour] = useState("black");

  const num = data.value;

  // const color =
  useMemo(() => {
    const prev = previousRef.current;
    previousRef.current = num;
    setTimeout(() => {
      if (prev === null) return setColour("green");
      if (prev < num) return setColour("green");
      return setColour("red");
    }, 500);
    // if (prev === null) return "green";
    // if (prev < num) return "green";
    // return "red";
  }, [num, previousRef]);

  return (
    <span style={{ color: "#fff", fontSize: 20, background: color1 }}>
      {num}
    </span>
  );
};

function PriceChange() {
  const [value, setValue] = useState(1);

  const ref = useRef(null);

  const handleValueChange = () => {
    if (ref.current) {
      setValue(Number(ref.current.value));
    }
  };

  return (
    <div>
      <div>
        <input type="number" ref={ref} />

        <button onClick={handleValueChange}>Set new value</button>
      </div>

      <Component data={{ value }} />
    </div>
  );
}

export default PriceChange;

// import { usePrevious } from "react-use";
// import { useState, useEffect } from "react";

// const ChangingValue = ({ value }) => {
//     const previous = usePrevious(value);
//     const [color, setColour] = useState('black');
//     const [timeoutId, setTimeoutId] = useState(0);
//     useEffect(() => {
//         clearTimeout(timeoutId);
//         if (value > previous) {
//             setColour('green');
//         } else if (value < previous) {
//             setColour('red');
//         } else {
//             setColour('black');
//         }
//         const newTimeoutId = setTimeout(() => {
//             setColour('black');
//         }, 1000);
//         setTimeoutId('newTimeoutId');
//         return () => clearTimeout(newTimeoutId);
//     }, [value]);
//     return <div style={{ color }}>{value}</div>;
// };
