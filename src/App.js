import "./App.css";
import { Greeter } from "my-greeter-package";
function App() {
  return (
    <div className="App">
      <span>zare</span>
      {console.log("testGreeter==>", Greeter)}
      <Greeter name="zahraaaa" />
    </div>
  );
}

export default App;
