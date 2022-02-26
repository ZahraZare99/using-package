import "./App.css";
import { Greeter } from "my-greeter-package";
function App() {
  return (
    <div className="App">
      <span>zare</span>
      {console.log("test==>", Greeter)}
    </div>
  );
}

export default App;
