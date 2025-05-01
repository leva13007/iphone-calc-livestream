import './App.css'
import {Keyboard} from "./components/Keyboard";
import {Display} from "./components/Display";
import {useEffect, useState} from "react";
import {evaluatePostfix} from "./service.ts";

export type CalculationItem = {
  expression: string; result: string;
}

export type CalculationHistory = Array<CalculationItem>;

function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [currentCalculation, setCurrentCalculation] = useState<string | undefined>(undefined);
  const [history, setHistory] = useState<CalculationHistory>([])

  const resetHandler = () => {
    setCurrentInput("");
    setCurrentCalculation(undefined);
    if(!currentInput) setHistory([]);
  }

  const inputHandler = (value: string) => {
    setCurrentInput(prevState => prevState + value)
  }

  const calculateHandler = () => {
    const res = evaluatePostfix(currentInput);
    console.log(res)
    setCurrentCalculation(res.toString());
    setHistory(prevState => [...prevState, {expression: currentInput, result: res.toString()}])
  }

  const setHistoryItemHandler = (item: CalculationItem) => {
    setCurrentInput(item.expression);
    setCurrentCalculation(undefined);
  }

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      console.log(e.key)
      if (e.key === "Enter") {
        calculateHandler();
      } else if (e.key === 'Escape') {
        resetHandler();
      } else if (e.key === 'Backspace') {
        setCurrentInput(prevState => prevState.slice(0, -1));
        setCurrentCalculation(undefined);
      } else if(/[0-9-+*/]/i.test(e.key)) {
        inputHandler(e.key);
      }
    }
    window.addEventListener('keydown', keyDownHandler);
    return () => window.removeEventListener('keydown', keyDownHandler)
  }, [currentInput])

  return (
    <main className="App">
      <div className="IPhone-case">
        <div className="IPhone-stuff">
          <div className="IPhone-tail"></div>
          <div className="IPhone-buttons">
            <div className="IPhone-button"></div>
            <div className="IPhone-button"></div>
            <div className="IPhone-button"></div>
          </div>
        </div>
        <div className="calculator">
          <Display currentInput={currentInput} currentCalculation={currentCalculation} history={history} setHistoryItem={setHistoryItemHandler} />
          <Keyboard resetHandler={resetHandler} inputHandler={inputHandler} calculateHandler={calculateHandler} />
        </div>
      </div>
    </main>
  )
}

export default App
