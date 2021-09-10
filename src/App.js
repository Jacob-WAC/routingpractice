import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Input from "./components/input";
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/:input">
                    <Input />
                </Route>
                <Route exact path="/:word/:color/:secondColor">
                    <Input />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
