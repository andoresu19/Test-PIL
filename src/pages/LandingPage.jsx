import styles from "./LandingPage.module.css";
import image from "../imgs/cactus.png";
import { ButtonPrincipal } from "../components/ButtonPrincipal";
import Div100vh from "react-div-100vh";

export function LandingPage() {
  return (
    <Div100vh className={styles.content}>
      <div className={styles.init}>
        <img className={styles.image} src={image} />
        <h1 className={styles.title}>
          ¡Bienvenido al <span className={styles.boldColor}>Test PIL</span>!
        </h1>
        <p className={styles.subtitle}>
          El Test de Propósito Vital ( PIL ) tiene como objetivo medir
          sentimiento de la vida <span className={styles.bold}>vs</span> vacío
          existencial.
        </p>
        <ButtonPrincipal path="/instructions" text="Perfecto, ¡comencemos!" />
      </div>
    </Div100vh>
  );
}
