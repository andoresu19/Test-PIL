import styles from "./FinalPage.module.css";
import { ButtonPrincipal } from "../components/ButtonPrincipal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Div100vh from "react-div-100vh";

export function FinalPage() {
  const { itemsValue } = useSelector((state) => state);

  let score = 0;
  const calcScore = () => {
    itemsValue.map((value) => {
      score = score + value;
    });
  };

  let interpretation = "";

  useEffect(() => {
    calcScore();
  }, [itemsValue]);

  calcScore();

  if (score < 90) {
    interpretation = "Te encuentras en estado de vacío existencial.";
  } else if (score >= 90 && score <= 105) {
    interpretation =
      "Te enuentras en estado de indefinición respecto al sentido de la vida.";
  } else {
    interpretation =
      "Te encuentras en un estado de presencia clara de metas y sentido de la vida.";
  }

  return (
    <Div100vh className={styles.content}>
      <div className={styles.init}>
        <h1 className={styles.title}>Resultado</h1>
        <p className={styles.bodyText}>
          <span className={styles.score}>Puntaje:</span> {score} puntos.
        </p>
        <p className={styles.bodyText}>
          <span className={styles.score}>Estado:</span> {interpretation}
        </p>
        <ButtonPrincipal path="/" text="Volver al inicio" />
      </div>
    </Div100vh>
  );
}
