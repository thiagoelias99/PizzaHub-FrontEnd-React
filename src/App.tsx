import { WebClient as webClient } from "./services/webclient/axios-config";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    webClient().get("ingredients").then(response => console.log)
  }, []);

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
