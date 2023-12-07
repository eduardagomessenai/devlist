import { useContext } from "react";
import { AppContext } from "../../AppContent";
import TaskItem from "../TaskItem/TaskItem";
import Title from "../Title/Title";
import styles from "./CompletedTasks.module.css";

const CompletedTasks = () => {
  const { taskList } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <Title iconName="completed" text="Tarefas concluídas" />

      <ul className={styles.tasklist}>
        {taskList.map(
          (task) => task.done && <TaskItem key={task.id} task={task} />
        )}
      </ul>
    </div>
  );
};

export default CompletedTasks;
