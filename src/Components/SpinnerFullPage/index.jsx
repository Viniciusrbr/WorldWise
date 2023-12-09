import styles from "./styles.module.css";
import Spinner from "../Spinner";

function SpinnerFullPage() {
    return (
      <div className={styles.spinnerFullpage}>
        <Spinner />
      </div>
    );
  }

export default SpinnerFullPage