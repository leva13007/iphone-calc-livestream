import * as React from "react";

type Props = {
  className: string;
  label: string | React.ReactNode;
  onClickHandler: () => void;
}

export const Key: React.FC<Props> = ({className, label, onClickHandler}) => {
  const handler = () => {
    onClickHandler();
    (document.activeElement as HTMLElement)?.blur()
  }
  return (
    <button className={className} onClick={handler}>{label}</button>
  )
}