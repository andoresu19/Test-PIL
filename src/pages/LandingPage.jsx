import styles from "./LandingPage.module.css";
import image from "../imgs/cactus.png";
import image2 from "../imgs/dertam_icon.png";
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
        <div className={styles.icon}>
          <img className={styles.icon__image} src={image2} />
          <p className={styles.icon__text}>
            Brayan Borrero
            <br />
            <span className={styles.icon__subtitle}>
              Asesor académico - desarrollador web
            </span>
          </p>
        </div>
      </div>
    </Div100vh>
  );
}
