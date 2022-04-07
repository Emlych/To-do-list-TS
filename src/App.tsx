//React projected converted into Typescript
//Simple to do list with the following features : create task, check task, delete task, search task
import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [light, setLight] = useState<boolean>(true);

  return (
    <div className={light ? "app light" : "app dark"}>
      <Header light={light} setLight={setLight} />
      <Main />
    </div>
  );
}

export default App;
