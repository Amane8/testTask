import React from 'react';
import './App.scss';
import Login from './Login.js'
import MainPage from './MainPage.js'
import Page404 from './Page404.js';
import Id from './Id.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends React.Component {

  state = {
    loggedIn: false,
    avatarUrl: '',
  }

  renderHome = (avatarUrl) => {
    this.setState({loggedIn: true, avatarUrl: avatarUrl});
  }

  render() {

    if(!this.state.loggedIn) {
      return (
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Login renderHome={this.renderHome}/>} />
            <Route exact path="/terminals" render={() => <Login renderHome={this.renderHome}/>} />
            <Route exact path="/buyers" render={() => <Login renderHome={this.renderHome}/>} />
            <Route exact path="/buyers/:id" render={() => <Login renderHome={this.renderHome}/>} />
            <Route component={Page404} />
          </Switch>
        </Router>
      )
    } else {
      console.log('logged in and trying')
      return (
      <Router>
        <Switch>
            <Route exact path="/" render={() => <MainPage avatarUrl={this.state.avatarUrl}/>} />
            <Route exact path="/terminals" render={() => <MainPage avatarUrl={this.state.avatarUrl}/>} />
            <Route exact path="/buyers" render={() => <MainPage avatarUrl={this.state.avatarUrl}/>} />
            <Route exact path="/buyers/:id" component = {Id}/>
            <Route component={Page404} />
        </Switch>
      </Router>
      )
    }
  }
}

export default App;
