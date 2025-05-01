import './App.css'
import {Keyboard} from "./components/Keyboard";
import {Display} from "./components/Display";
import {useEffect, useState} from "react";

function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [currentCalculation, setCurrentCalculation] = useState<string | undefined>(undefined);

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      console.log(e.key)
      if (e.key === "Enter") {
        const res = eval(currentInput);
        console.log(res)
        setCurrentCalculation(res)
      } else if (e.key === 'Escape') {
        setCurrentInput("");
        setCurrentCalculation(undefined);
      } else if (e.key === 'Backspace') {
        setCurrentInput(prevState => prevState.slice(0, -1));
        setCurrentCalculation(undefined);
      } else if(/[0-9-+*/]/.test(e.key)) {
        setCurrentInput(prevState => prevState + e.key)
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
          <Display currentInput={currentInput} currentCalculation={currentCalculation} />
          <Keyboard />
        </div>
      </div>
    </main>
  )
}

export default App
