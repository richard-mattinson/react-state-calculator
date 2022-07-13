import { useState } from "react";
import "./App.css";

let App = () => {
  let [firstNum, setFirstNum] = useState("0");
  let [secondNum, setSecondNum] = useState("0");
  let [operation, setOperation] = useState("+");
  let [answer, setAnswer] = useState();

  let calculateAnswer = () => {
    // convert both nums to numbers?
    if (operation === "+") {
      setAnswer(Number(firstNum) + Number(secondNum));
    }
    if (operation === "-") {
      setAnswer(Number(firstNum) - Number(secondNum));
    }
    if (operation === "*") {
      setAnswer(Number(firstNum) * Number(secondNum));
    }
    if (operation === "/") {
      setAnswer(Number(firstNum) / Number(secondNum));
    }
  };

  // Could there be a single function that handles this (instead of one per button)
  // if statement would cover both? if (firstNum === "0") {
  //   (firstNum = "")
  // } else {
  //   (firstNum += "")
  // }

  // -------- LEFT NUMBER PAD --------
  const firstZero = () => {
    if (firstNum === "0") {
      setFirstNum((firstNum = "0"));
    } else {
      setFirstNum((firstNum += "0"));
    }
  };
  const firstOne = () => {
    if (firstNum === "0") {
      setFirstNum((firstNum = "1"));
    } else {
      setFirstNum((firstNum += "1"));
    }
  };
  const firstTwo = () => setFirstNum((firstNum += "2"));
  const firstThree = () => setFirstNum((firstNum += "3"));
  const firstFour = () => setFirstNum((firstNum += "4"));
  const firstFive = () => setFirstNum((firstNum += "5"));
  const firstSix = () => setFirstNum((firstNum += "6"));
  const firstSeven = () => setFirstNum((firstNum += "7"));
  const firstEight = () => setFirstNum((firstNum += "8"));
  const firstNine = () => setFirstNum((firstNum += "9"));
  const firstClear = () => setFirstNum((firstNum = "0"));

  // -------- RIGHT NUMBER PAD --------
  const secondZero = () => setSecondNum((secondNum += "0"));
  const secondOne = () => setSecondNum((secondNum += "1"));
  const secondTwo = () => setSecondNum((secondNum += "2"));
  const secondThree = () => setSecondNum((secondNum += "3"));
  const secondFour = () => setSecondNum((secondNum += "4"));
  const secondFive = () => setSecondNum((secondNum += "5"));
  const secondSix = () => setSecondNum((secondNum += "6"));
  const secondSeven = () => setSecondNum((secondNum += "7"));
  const secondEight = () => setSecondNum((secondNum += "8"));
  const secondNine = () => setSecondNum((secondNum += "9"));
  const secondVClear = () => setSecondNum((secondNum = "0"));

  // -------- OPERATOR PAD --------
  const addition = () => setOperation((operation = "+"));
  const subtraction = () => setOperation((operation = "-"));
  const multiplication = () => setOperation((operation = "*"));
  const division = () => setOperation((operation = "/"));

  return (
    <>
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
            <button onClick={firstClear}>Clear</button>
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
            <button onClick={secondVClear}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{answer}</p>
          <div>
            <button onClick={calculateAnswer}>=</button>
          </div>
        </div>
      </div>

      <div className="criteria">
        <div className="done">
          <h1>Standard</h1>
          <ul>
            <li>
              When the user presses a numbered button on either of the panels,
              the display above should be updated to show that number.
            </li>
            <li>
              When user presses the clear button, the display should be set back
              to 0
            </li>
            <li>
              When the user presses one of the operation buttons (+, -,*,÷) the
              operation display should be updated to show that operation.
            </li>
            <li>
              When the user presses the equals button the answer display should
              be updated to show the result of the calculation.
            </li>
          </ul>
        </div>

        <div className="done">
          <h2>Extension 1</h2>
          <ul>
            <li>
              Numbers should appended, so pressing 1 then 2 should result in 12
              being displayed
            </li>
            <li>
              If the user presses a number while '0' is displayed, the number
              should replace '0' on the display. Subsequent numbers, including
              0, are appended on to the display as usual.
            </li>
            <li>
              If the user presses '0' while '0' is displayed, the display should
              remain at '0'. It should not be possible to define a number with
              leading zeros.
            </li>
          </ul>
        </div>

        <h2>Extension 2</h2>
        <ul>
          <li>
            Add a "store" button underneath the answer. When this button is
            clicked, the current answer should be stored in a state variable.
          </li>
          <li>
            Add a "recall" button to each of the number displays. When this
            button is clicked, the currently stored value should be shown on the
            corresponding number panel.
          </li>
        </ul>
        <h2>Extension 3</h2>
        <ul>
          <li>
            Add a "." button to the numbers panel of each section When the user
            presses this button, a decimal separator should be added to the
            number
          </li>
          <li>Only a single separator can be added to each number</li>
          <li>
            If no digit appears after the separator, the calculator should
            consider the number as having no separator (i.e. "1." should be
            treated as "1").
          </li>
          <li>
            Unlike whole numbers, leading zeros should be allowed after the
            separator. For example, "00001" is not valid, but "0.00001" is and
            "1.00001" is.
          </li>
        </ul>
      </div>
    </>
  );
};

export default App;