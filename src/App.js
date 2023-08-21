import "./App.css";
import ViewRepository from "./components/ViewRepository.js";
import { SideMenu } from "./components/SideMenu";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <ViewRepository />
    </div>
  );
}

export default App;
