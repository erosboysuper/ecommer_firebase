import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/homepage";
import HatsPage from "./Pages/hats";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
