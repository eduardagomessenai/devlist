import "./App.css";
import CreateNewTask from "./components/CreateNewTask/CreateNewTask";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <>
      <Header />

      <CreateNewTask />

      <Title />
    </>
  );
};

export default App;
