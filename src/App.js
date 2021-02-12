import "./App.css";
import React, { Component } from "react";
import ProductShowPage from "./components/ProductShowPage";
import ProductsIndexPage from "./components/ProductsIndexPage";
import ProductNewPage from "./components/ProductNewPage";
import { Session } from "./requests";
import Navbar from "./components/Navbar";

import { BrowserRouter, Switch, Route} from "react-router-dom";
class App extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  componentDidMount() {
    Session.create({
      email: "js@winterfell.gov",
      password: "supersecret",
    }).then(console.log);
  }
render(){
  return (
    <div className="App">
  <BrowserRouter>
          <Navbar />
          <Switch>
          <Route path="/" exact render={() => <div>Where's that bloody cookie?</div>} />
            <Route path="/products/new" component={ProductNewPage} />
            <Route path="/products/:id" component={ProductShowPage} />
            <Route path="/products" component={ProductsIndexPage} />

          </Switch>
        </BrowserRouter>
    </div>
  );
}
}
export default App;
