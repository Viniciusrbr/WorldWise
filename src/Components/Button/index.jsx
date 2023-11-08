import styles from "./styles.module.css";

function Button({ children, onClick, type }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${styles.btn} ${styles[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
