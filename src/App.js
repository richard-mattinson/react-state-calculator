import { useState } from "react";
import "./App.css";

let App = () => {
  const [firstNum, setFirstNum] = useState("0");
  let [secondNum, setSecondNum] = useState("0");
  let [operation, setOperation] = useState("+");
  let [answer, setAnswer] = useState("");
  let [store, setStore] = useState("");
  console.log("Left", firstNum);

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

  let updateStore = () => {
    if(answer !== "") {
      setStore (answer)
    };
  }

  let firstRecallStore = () => {
    if(store !== "") {
      setFirstNum (store)
  }
}

  let secondRecallStore = () => {
    if (store !== "") {
      setSecondNum(store);
    }
  };

  let answerRecallStore = () => {
    if (store !== "") {
      setAnswer(store);
    }
  };

  const updateFirst = (value) => {
    console.log("Value", value);
    if (firstNum === "0") {
      setFirstNum(value);
      // console.log("Updated FirstNum", firstNum);
    } else if (value === "Clear"){
      setFirstNum("0");
    } else {
      setFirstNum((firstNum + value));
    }
  };

  const updateSecond = (value) => {
    console.log("Value", value);
    if (secondNum === "0") {
      setSecondNum(value);
      // console.log("Updated FirstNum", firstNum);
    } else if (value === "Clear") {
      setSecondNum("0");
    } else {
      setSecondNum(secondNum + value);
    }
  };

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
            <button onClick={() => updateFirst("1")}>1</button>
            <button onClick={() => updateFirst("2")}>2</button>
            <button onClick={() => updateFirst("3")}>3</button>
            <button onClick={() => updateFirst("4")}>4</button>
            <button onClick={() => updateFirst("5")}>5</button>
            <button onClick={() => updateFirst("6")}>6</button>
            <button onClick={() => updateFirst("7")}>7</button>
            <button onClick={() => updateFirst("8")}>8</button>
            <button onClick={() => updateFirst("9")}>9</button>
            <button onClick={() => updateFirst("0")}>0</button>
            <button onClick={() => updateFirst("Clear")}>Clear</button>
            <button onClick={firstRecallStore}>Restore</button>
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
            <button onClick={() => updateSecond("1")}>1</button>
            <button onClick={() => updateSecond("2")}>2</button>
            <button onClick={() => updateSecond("3")}>3</button>
            <button onClick={() => updateSecond("4")}>4</button>
            <button onClick={() => updateSecond("5")}>5</button>
            <button onClick={() => updateSecond("6")}>6</button>
            <button onClick={() => updateSecond("7")}>7</button>
            <button onClick={() => updateSecond("8")}>8</button>
            <button onClick={() => updateSecond("9")}>9</button>
            <button onClick={() => updateSecond("0")}>0</button>
            <button onClick={() => updateSecond("Clear")}>Clear</button>
            <button onClick={secondRecallStore}>Restore</button>
          </div>
        </div>

        <div className="panel answer">
          <p>{answer}</p>
          <div>
            <button onClick={calculateAnswer}>=</button>
            <button onClick={answerRecallStore}>Restore</button>
          </div>
          <p>{store}</p>
          <div>
            <button onClick={updateStore}>Store</button>
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

       <div className="done">
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
       </div>
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
}

export default App;
