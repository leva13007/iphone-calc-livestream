import * as React from "react";

type Props = {
  className: string;
  label: string | React.ReactNode;
  onClickHandler: () => void;
}

export const Key: React.FC<Props> = ({className, label, onClickHandler}) => (
  <button className={className} onClick={onClickHandler}>{label}</button>
)