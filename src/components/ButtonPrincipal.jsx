import { Link } from "react-router-dom";
import styles from "./ButtonPrincipal.module.css";

export function ButtonPrincipal({ text, path }) {
  return <Link className={styles.button} to={path}>{text}</Link>;
}
