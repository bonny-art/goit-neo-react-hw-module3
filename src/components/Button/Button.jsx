import { clsx } from "clsx";

import styles from "./Button.module.css";

const Button = ({ children, style = "default", type }) => {
  return (
    <button type={type} className={clsx(styles.button, styles[style])}>
      {children}
    </button>
  );
};

export default Button;
