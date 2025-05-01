import {CalculationHistory, CalculationItem} from "../../App.tsx";

type Props = {
  currentInput: string;
  currentCalculation: string | undefined;
  history: CalculationHistory;
  setHistoryItem: (item: CalculationItem) => void;
}
export const Display: React.FC<Props> = ({currentInput, currentCalculation, history, setHistoryItem}) => {
  return (
    <section className="display">
      <div className="current">
        <div className="expression">{currentInput}</div>
        {
          currentCalculation && (<div className="result">= {currentCalculation}</div>)
        }
      </div>
      {
        history.length > 0 && (
          <ul className="history">
            {
              history.map((item, i) => (
                <li key={i} onClick={() => setHistoryItem({...item})}>
                  <div className="expression">{item.expression}</div>
                  <div className="result">= {item.result}</div>
                </li>
              ))
            }
          </ul>
        )
      }
    </section>
  )
}