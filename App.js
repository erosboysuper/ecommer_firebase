import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/homepage";
import HatsPage from "./Pages/hats";
import ShopPage from "./Pages/shoppage";
import Header from "./Components/header";
import SignInAndSignUp from "./Pages/sing-in-and-sign-up";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
          <Route exact path="/shoppage" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
