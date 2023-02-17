import styles from "./ButtonBold.module.css";

export function ButtonBold({ text, handler }) {
  const action = () => {
    handler();
  };

  console.log("Test branches");

  return (
    <button className={styles.button} type="submit" onClick={action}>
      {text}
    </button>
  );
}
