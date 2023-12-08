import { useContext } from "react";
import Title from "../Title/Title";
import styles from "./TodayTasks.module.css";
import { AppContext } from "../../AppContent";
import TaskItem from "../TaskItem/TaskItem";

const TodayTasks = () => {
  const { taskList, progressiveBarValue } = useContext(AppContext);
  console.log(taskList);
  return (
    <div
      className={styles.container}
      style={{
        marginTop: `${progressiveBarValue === 100 ? "-107px" : "0"}`,
      }}
    >
      <Title iconName={"list"} text={"Tarefas de hoje"} />
      {progressiveBarValue === 100 || taskList.length === 0 ? (
        <span className={styles.todayTasksMessage}>
          Você não tem tarefas disponíveis
        </span>
      ) : (
        <ul className={styles.taskList}>
          {taskList.map(
            (task) => !task.done && <TaskItem key={task.id} task={task} />
          )}
        </ul>
      )}
    </div>
  );
};

export default TodayTasks;
