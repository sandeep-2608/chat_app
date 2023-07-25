import "./App.css";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
