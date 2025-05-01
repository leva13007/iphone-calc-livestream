import {Key} from "../Key";

type Props = {
    resetHandler: () => void;
    calculateHandler: () => void;
    inputHandler: (value: string) => void;
}
export const Keyboard: React.FC<Props> = ({resetHandler, inputHandler, calculateHandler}) => {
  return (
    <section className="keyboard">
      <Key className="key controls" label="AC" onClickHandler={resetHandler} />
      <Key className="key controls" label={<i className="fa-solid fa-square-root-variable"></i>} onClickHandler={() => {}} />
      <Key className="key controls" label={<>x<sup>y</sup></>} onClickHandler={() => {}} />
      <Key className="key operations" label={<i className="fa-solid fa-divide"></i>} onClickHandler={() => inputHandler("/")} />

      <Key className="key number" label={7} onClickHandler={() => inputHandler("7")} />
      <Key className="key number" label={8} onClickHandler={() => inputHandler("8")} />
      <Key className="key number" label={9} onClickHandler={() => inputHandler("9")} />
      <Key className="key operations" label={<i className="fa-solid fa-xmark"></i>} onClickHandler={() => inputHandler("*")} />

      <Key className="key number" label={5} onClickHandler={() => inputHandler("5")} />
      <Key className="key number" label={6} onClickHandler={() => inputHandler("6")} />
      <Key className="key number" label={7} onClickHandler={() => inputHandler("7")} />
      <Key className="key operations" label={<i className="fa-solid fa-minus"></i>} onClickHandler={() => inputHandler("-")} />

      <Key className="key number" label={1} onClickHandler={() => inputHandler("1")} />
      <Key className="key number" label={2} onClickHandler={() => inputHandler("2")} />
      <Key className="key number" label={3} onClickHandler={() => inputHandler("3")} />
      <Key className="key operations" label={<i className="fa-solid fa-plus"></i>} onClickHandler={() => inputHandler("+")} />

      <Key className="key number" label={<i className="fa-solid fa-calculator"></i>} onClickHandler={() => {}} />
      <Key className="key number" label={0} onClickHandler={() => inputHandler("0")} />
      <Key className="key number" label={"."} onClickHandler={() => inputHandler(".")} />
      <Key className="key operations" label={<i className="fa-solid fa-equals"></i>} onClickHandler={calculateHandler} />
    </section>
  )
}