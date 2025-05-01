
type Props = {
  currentInput: string;
  currentCalculation: string | undefined;
}
export const Display: React.FC<Props> = ({currentInput, currentCalculation}) => {
  return (
    <section className="display">
      <div className="current">
        <div className="expression">{currentInput}</div>
        {
          currentCalculation && (<div className="result">= {currentCalculation}</div>)
        }
      </div>
      {/*<ul className="history">*/}
      {/*  <li>*/}
      {/*    <div className="expression">1+24</div>*/}
      {/*    <div className="result">= 25</div>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <div className="expression">1+2</div>*/}
      {/*    <div className="result">= 3</div>*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </section>
  )
}