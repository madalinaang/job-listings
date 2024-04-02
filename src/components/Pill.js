export default function Pill({ text, dark }) {
  return <div className={"pill " + (dark && "dark")}>{text}</div>;
}
