import './App.css'
import {Keyboard} from "./components/Keyboard";
import {Display} from "./components/Display";
import {useState} from "react";

function App() {
  const [currentInput, setCurrentInput] = useState("12+24");
  const [currentCalculation, setCurrentCalculation] = useState<string | undefined>("36");



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
