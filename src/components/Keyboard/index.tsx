import {Key} from "../Key";

export const Keyboard = () => {
  return (
    <section className="keyboard">
      <Key className="key controls" label="AC" onClickHandler={() => {}} />
      <Key className="key controls" label={<i className="fa-solid fa-square-root-variable"></i>} onClickHandler={() => {}} />
      <Key className="key controls" label={<>x<sup>y</sup></>} onClickHandler={() => {}} />
      <Key className="key operations" label={<i className="fa-solid fa-divide"></i>} onClickHandler={() => {}} />

      <Key className="key number" label={7} onClickHandler={() => {}} />
      <Key className="key number" label={8} onClickHandler={() => {}} />
      <Key className="key number" label={9} onClickHandler={() => {}} />
      <Key className="key operations" label={<i className="fa-solid fa-xmark"></i>} onClickHandler={() => {}} />

      <Key className="key number" label={5} onClickHandler={() => {}} />
      <Key className="key number" label={6} onClickHandler={() => {}} />
      <Key className="key number" label={7} onClickHandler={() => {}} />
      <Key className="key operations" label={<i className="fa-solid fa-minus"></i>} onClickHandler={() => {}} />

      <Key className="key number" label={1} onClickHandler={() => {}} />
      <Key className="key number" label={2} onClickHandler={() => {}} />
      <Key className="key number" label={3} onClickHandler={() => {}} />
      <Key className="key operations" label={<i className="fa-solid fa-plus"></i>} onClickHandler={() => {}} />

      <Key className="key number" label={<i className="fa-solid fa-calculator"></i>} onClickHandler={() => {}} />
      <Key className="key number" label={0} onClickHandler={() => {}} />
      <Key className="key number" label={"."} onClickHandler={() => {}} />
      <Key className="key operations" label={<i className="fa-solid fa-equals"></i>} onClickHandler={() => {}} />
    </section>
  )
}