import Books from "./Books";
import { Button } from "@material-ui/core";

// npm add @material-ui/core

function App() {
  return (
    <div className="App">
      <Books/>
      <Button variant="contained">My first Button!</Button>
    </div>
  );
}

export default App;
