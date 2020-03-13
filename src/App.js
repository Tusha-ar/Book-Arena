import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { store} from '../src/index';
import ShowBooks from './Components/ShowBooks';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import Header from './Components/Header';
import Home from './Components/Home'
import AddBook from './Components/AddBook';
import Errors from './Components/Errors';



export class App extends Component {
  render() {
    return (
      <Router>
      <Provider store = {store}>
        <Header/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/addBook" component={AddBook}/>
        <Route path="/showBooks" component={ShowBooks}/>
        <Route component={Errors}/>
        </Switch>
      </Provider>
      </Router>
    )
  }
}

export default App
