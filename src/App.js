import logo from "./logo.svg";
import "./App.css";
import { Text } from "react-native";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text style={{ fontSize: "1.5rem", color: "#fff" }}>
          This is react native web
        </Text>
      </header>
    </div>
  );
}

export default App;
