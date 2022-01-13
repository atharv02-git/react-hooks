import React, { useMemo, useState } from "react";

function CounterUseMemo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  //   so now here we can use useMemo hook for the memory utilisation as because of slowness of isEven function the counterTwo function gets slow

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementCounterOne}>counterOne - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementCounterTwo}>counterTwo - {counterTwo}</button>
        <p>So now the counterTwo function runs faster because of useMemo hook we used in isEven function</p>
      </div>
    </div>
  );
}

export default CounterUseMemo;
