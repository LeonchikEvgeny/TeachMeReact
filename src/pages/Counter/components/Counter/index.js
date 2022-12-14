import styles from "./index.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../../../router/routeNames";
import { memo } from "react";

const Counter = ({
  id,
  countValue,
  onIncrement,
  onDecrement,
  onReset,
  onRemove,
}) => {
  const isEven = countValue % 2 === 0;
  return (
    <div className={styles.wrapper}>
      <div className={styles.screen}>{countValue}</div>
      {countValue > 0 && (
        <div
          className={styles.screen}
          style={{ background: isEven ? "Red" : "Green" }}
        >
          {isEven ? "number is Even" : "number is Odd"}
        </div>
      )}

      <div className={styles.buttonsArea}>
        <button
          onClick={() => onDecrement(id)}
          className={styles.controlButton}
        >
          -
        </button>
        <button onClick={() => onReset(id)} className={styles.controlButton}>
          Reset
        </button>
        <button
          onClick={() => onIncrement(id)}
          className={styles.controlButton}
        >
          +
        </button>
      </div>
      <button onClick={() => onRemove(id)}>Delete</button>
    </div>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number.isRequired,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};
export default Counter;
