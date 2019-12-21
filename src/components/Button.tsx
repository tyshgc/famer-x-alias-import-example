import * as React from "react";

interface IProps {
  label?: string;
}
export default function Button(props: IProps) {
  const { label } = props;
  return <button>{label || "Click!"}</button>;
}
