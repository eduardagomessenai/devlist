import { useContext } from "react";
import Title from "../Title/Title";
import styles from "./Progress.module.css";
import { AppContext } from "../../AppContent";
import imgUrl from "../../assets/img-trophy-min.png";

const Progress = () => {
  const { progressiveBarValue } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <Title iconName={"chart"} text={"Progresso"} />

      <input
        className={styles.progressBarFill}
        readOnly
        type="range"
        value={progressiveBarValue}
      />
      <div className={styles.progressiveBarValues}>
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
      {progressiveBarValue === 100 && (
        <div className={styles.taskCompletedMessage}>
          <img src={imgUrl} alt="Troféu" width="40" height="40" />
          <span>Parabéns! Você concluiu todas as tarefas de hoje!</span>
        </div>
      )}
    </div>
  );
};

export default Progress;
