import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import WriteText from "./components/WriteText/WriteText";
import Image from "./components/Image/Image";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/upload">
          <Image></Image>
        </Route>

        <Route path="/text">
          <WriteText></WriteText>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
