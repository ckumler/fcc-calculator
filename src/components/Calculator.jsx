import { useState, useEffect } from "react";
import Button from "./Button.jsx";
import Display from "./Display.jsx";

function Calculator() {
    const [input, setInput] = useState("");
    const [operation, setOperation] = useState(null);
    const [result, setResult] = useState(null);

    /* useEffect(() => {
        console.log(
            `input: '${input}'\noperation: '${operation}'\nresult: '${result}'`
        );
    }, [input, result, operation]); */

    const handleNumber = (number) => {
        if (number === "0" && input === "0") {
            //do nothing
        } else {
            setInput((prevInput) => prevInput + number);
        }
    };

    const handleDecimal = () => {
        if (!input.includes(".")) {
            setInput(input + ".");
        }
    };

    const handleClear = () => {
        setInput("");
        setOperation(null);
        setResult(null);
    };

    const handleOperator = (operator) => {
        if (input === "-") {
            setInput("");
            setOperation(operator);
        } else if (operator === "-" && input === "") {
            setInput(input + "-");
        } else if (input !== "" && result) {
            handleEqual();
            setOperation(operator);
        } else if (input !== "" && !result) {
            setResult(parseFloat(input));
            setInput("");
            setOperation(operator);
        } else {
            setOperation(operator);
        }
    };

    const handleEqual = () => {
        if (!operation || !input) {
            return;
        }

        const currentInput = parseFloat(input);
        let newResult = result;

        switch (operation) {
            case "+":
                newResult += currentInput;
                break;
            case "-":
                newResult -= currentInput;
                break;
            case "*":
                newResult *= currentInput;
                break;
            case "/":
                if (currentInput === 0) {
                    alert("Cannot divide by zero");
                    handleClear();
                    return;
                } else {
                    newResult /= currentInput;
                }
                break;
            default:
                return;
        }

        setResult(newResult);
        setInput("");
        setOperation(null);
    };

    return (
        <>
            <div className="window" style={{ width: 300 }}>
                <div className="title-bar">
                    <div className="title-bar-text">Calculator</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body" id="calc-body">
                    <Display
                        input={input}
                        result={result}
                        operator={operation}
                    />
                    <div className="calc-buttons-group">
                        <Button id="" showText="" />
                        <Button id="" showText="" />
                        <Button
                            id="clear"
                            showText="C"
                            onClick={() => handleClear()}
                        />
                        <Button
                            id="divide"
                            showText="/"
                            onClick={() => handleOperator("/")}
                        />
                        <Button
                            id="seven"
                            showText="7"
                            onClick={() => handleNumber("7")}
                        />
                        <Button
                            id="eight"
                            showText="8"
                            onClick={() => handleNumber("8")}
                        />
                        <Button
                            id="nine"
                            showText="9"
                            onClick={() => handleNumber("9")}
                        />
                        <Button
                            id="multiply"
                            showText="*"
                            onClick={() => handleOperator("*")}
                        />
                        <Button
                            id="four"
                            showText="4"
                            onClick={() => handleNumber("4")}
                        />
                        <Button
                            id="five"
                            showText="5"
                            onClick={() => handleNumber("5")}
                        />
                        <Button
                            id="six"
                            showText="6"
                            onClick={() => handleNumber("6")}
                        />
                        <Button
                            id="subtract"
                            showText="-"
                            onClick={() => handleOperator("-")}
                        />
                        <Button
                            id="one"
                            showText="1"
                            onClick={() => handleNumber("1")}
                        />
                        <Button
                            id="two"
                            showText="2"
                            onClick={() => handleNumber("2")}
                        />
                        <Button
                            id="three"
                            showText="3"
                            onClick={() => handleNumber("3")}
                        />
                        <Button
                            id="add"
                            showText="+"
                            onClick={() => handleOperator("+")}
                        />
                        <Button id="" showText="" />
                        <Button
                            id="zero"
                            showText="0"
                            onClick={() => handleNumber("0")}
                        />
                        <Button
                            id="decimal"
                            showText="."
                            onClick={handleDecimal}
                        />
                        <Button
                            id="equals"
                            showText="="
                            onClick={handleEqual}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Calculator;
