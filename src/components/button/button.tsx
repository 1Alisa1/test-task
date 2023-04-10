import styles from "./button.module.scss";

interface ButtonProps {
  text: string;
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({text, handleClick}) => {
  return (
    <button className={styles.btn} onClick={handleClick}>{text}</button>
  );
};

export { Button };