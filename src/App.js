import { useState } from "react";
import "./App.css";

let App = () => {
  let [firstNum, setFirstNum] = useState(0);
  let [secondNum, setSecondNum] = useState(0);
  let [operation, setOperation] = useState(""); 
  let [answer, setAnswer] = useState(0)

  let calculateAnswer = () => {
  if (operation === "+") {
    setAnswer (firstNum + secondNum)
  }
  if (operation === "-") {
    setAnswer (firstNum - secondNum)
  }
  if (operation === "*") {
    setAnswer(firstNum * secondNum);
  }
  if (operation === "/") {
    setAnswer(firstNum / secondNum);
  }
  }

  const firstZero = () => setFirstNum(firstNum = 0)
  const firstOne = () => setFirstNum(firstNum = 1);
  const firstTwo = () => setFirstNum((firstNum = 2));
  const firstThree = () => setFirstNum((firstNum = 3));
  const firstFour = () => setFirstNum((firstNum = 4));
  const firstFive = () => setFirstNum((firstNum = 5));
  const firstSix = () => setFirstNum((firstNum = 6));
  const firstSeven = () => setFirstNum((firstNum = 7));
  const firstEight = () => setFirstNum((firstNum = 8));
  const firstNine = () => setFirstNum((firstNum = 9));

  const secondZero = () => setSecondNum((secondNum = 0));
  const secondOne = () => setSecondNum((secondNum = 1));
  const secondTwo = () => setSecondNum((secondNum = 2));
  const secondThree = () => setSecondNum((secondNum = 3));
  const secondFour = () => setSecondNum((secondNum = 4));
  const secondFive = () => setSecondNum((secondNum = 5));
  const secondSix = () => setSecondNum((secondNum = 6));
  const secondSeven = () => setSecondNum((secondNum = 7));
  const secondEight = () => setSecondNum((secondNum = 8));
  const secondNine = () => setSecondNum((secondNum = 9));

  const addition = () => setOperation((operation = "+"))
  const subtraction = () => setOperation((operation = "-"));
  const multiplication = () => setOperation((operation = "*"));
  const division = () => setOperation((operation = "/"));

  

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNum}</p>
        <div className="numbers">
          <button onClick={firstOne}>1</button>
          <button onClick={firstTwo}>2</button>
          <button onClick={firstThree}>3</button>
          <button onClick={firstFour}>4</button>
          <button onClick={firstFive}>5</button>
          <button onClick={firstSix}>6</button>
          <button onClick={firstSeven}>7</button>
          <button onClick={firstEight}>8</button>
          <button onClick={firstNine}>9</button>
          <button onClick={firstZero}>0</button>
          <button onClick={firstZero}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={addition}>+</button>
          <button onClick={subtraction}>-</button>
          <button onClick={multiplication}>*</button>
          <button onClick={division}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNum}</p>
        <div className="numbers">
          <button onClick={secondOne}>1</button>
          <button onClick={secondTwo}>2</button>
          <button onClick={secondThree}>3</button>
          <button onClick={secondFour}>4</button>
          <button onClick={secondFive}>5</button>
          <button onClick={secondSix}>6</button>
          <button onClick={secondSeven}>7</button>
          <button onClick={secondEight}>8</button>
          <button onClick={secondNine}>9</button>
          <button onClick={secondZero}>0</button>
          <button onClick={secondZero}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={calculateAnswer}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
