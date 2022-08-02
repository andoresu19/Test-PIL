import styles from "./ButtonLine.module.css";

export function ButtonLine({ text, handler}) {
  const action = () => {
    handler();
  };

  return <button className={styles.button} type="submit" onClick={action}>{text}</button>;
}


