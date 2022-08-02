import styles from "./ButtonBold.module.css";

export function ButtonBold({ text, handler}) {
  const action = () => {
    handler();
  };

  return (
    <button className={styles.button} type="submit" onClick={action}>
      {text}
    </button>
  );
}
