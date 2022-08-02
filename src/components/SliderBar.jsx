import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlerItemChange } from "../redux/actions";
import styles from "./SliderBar.module.css";

export function SliderBar({ value, itemIndex }) {
  if (!value) {
    value = 4;
  }
  const [value2, setValue] = useState(value);
  const [sValue, setSValue] = useState(2 + 13 * value);
  const [lValue, setLValue] = useState(95 - 5 * value);

  useEffect(() => {
    setValue(value);
    setSValue(2 + 13 * value);
    setLValue(95 - 5 * value);
  }, [value]);
  
  const handlerSliderChange = (e) => {
    setValue(e.target.value);
    setSValue(2 + 13 * e.target.value);
    setLValue(95 - 5 * e.target.value);

    let tempArray = itemsValue;
    tempArray[itemIndex] = Number(e.target.value);

    dispatch(handlerItemChange(tempArray));
  };

  const dispatch = useDispatch();
  const { itemsValue } = useSelector((state) => state);

  return (
    <div className={styles.content}>
      <input
        className={styles.slider}
        type="range"
        min="1"
        max="7"
        step="0.5"
        onChange={handlerSliderChange}
        value={value2}
      />
      <div
        className={styles.bar}
        style={{
          background: `hsl(348, ${sValue}%, ${lValue}%)`,
        }}
      />
    </div>
  );
}
