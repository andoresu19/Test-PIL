import { ButtonBold } from "../components/ButtonBold";
import { ButtonLine } from "../components/ButtonLine";
import { ProgressBar } from "../components/ProgressBar";
import { SliderBar } from "../components/SliderBar";
import styles from "./Questions.module.css";
import items from "../questions/items.json";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Div100vh from "react-div-100vh";

export function Questions() {
  const navigate = useNavigate();
  const [itemIndex, setItemIndex] = useState(0);
  const { itemsValue } = useSelector((state) => state);

  const handlerNextQuestion = () => {
    if (itemIndex + 1 < 20) {
      setItemIndex(itemIndex + 1);
    } else {
      navigate("/finalPage");
    }
  };

  const handlerPreviousQuestion = () => {
    if (itemIndex - 1 >= 0) {
      setItemIndex(itemIndex - 1);
    } else {
      navigate("/instructions");
    }
  };

  return (
    <Div100vh className={styles.content}>
      <div className={styles.init}>
        <div>
          <h1 className={styles.title}>{"Pregunta " + (itemIndex + 1)}</h1>
          <ProgressBar value={itemIndex} maxVal={20} />
        </div>
        <div>
          <p className={styles.bodyText}>
            {items[itemIndex]["question"] + ":"}
          </p>
          <div className={styles.slider}>
            <SliderBar value={itemsValue[itemIndex]} itemIndex={itemIndex} />
          </div>
          <div className={styles.options}>
            <span className={styles.slider__option}>
              {items[itemIndex]["bad"]}
            </span>
            <span className={styles.slider__option}>
              {items[itemIndex]["good"]}
            </span>
          </div>
        </div>
        <div className={styles.buttons}>
          <ButtonLine
            text="Revisa la anterior"
            handler={handlerPreviousQuestion}
          />
          <ButtonBold text="¡Vamos por otra!" handler={handlerNextQuestion} />
        </div>
      </div>
    </Div100vh>
  );
}
