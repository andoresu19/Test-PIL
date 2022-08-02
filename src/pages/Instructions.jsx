import { ButtonPrincipal } from "../components/ButtonPrincipal";
import { SliderBar } from "../components/SliderBar";
import styles from "./Instructions.module.css";
import Div100vh from "react-div-100vh";

export function Instructions() {
  return (
    <Div100vh className={styles.content} >
      <div className={styles.init}>
        <h1 className={styles.title}>Intrucciones</h1>
        <p className={styles.bodyText}>
          El cuestionario cuenta con un total de 20 ítems. En cada uno de ellos
          encontrará un slider como el siguiente ¡pruebalo!:
        </p>
        <div className={styles.sliderContent}>
          <SliderBar />
        </div>
        <div className={styles.options}>
          <span className={styles.slider__option}>Me gusta el frío</span>
          <span className={styles.slider__option}>Me gusta el calor</span>
        </div>
        <p className={styles.bodyTextMargin}>
          Deslice hacia la izquierda o derecha de acuerdo a la opción con la que
          más te sientas identificado.
        </p>
        <p className={styles.importantText}>
          ¡Recuerda que no sólo existen los extremos! puedes ubicar el slider a
          medio camino o moverlo tanto como desees.
        </p>

        <ButtonPrincipal path="/questions" text="Empezar el test" />
      </div>
    </Div100vh>
  );
}
