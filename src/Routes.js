import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import NavBarPage from "./NavBarPage";
import Recipes from "./components/Recipes";


class Routes extends Component{
    render(){
        return (
            <Router>
                <NavBarPage/>
            <div>
                
                    <hr/>
                    <Route name="Home" exact path="/" component={Home} />|
                    <Route name="Menu" path="/menu" component={Menu} />|
                    <Route name="About"path="/about" component={About} />|
                    <Route name="Recipes"path="/recipes"component={Recipes} />
              </div>
          </Router>
        )
    }
}

export default Routes;