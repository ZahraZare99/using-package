import "./App.css";
import { Greeter } from "my-greeter-package";
function App() {
  return (
    <div className="App">
      {console.log("test==>", Greeter)}

      <span>zare</span>
    </div>
  );
}

export default App;
