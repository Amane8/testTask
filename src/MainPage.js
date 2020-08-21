import React from 'react';
import Terminals from './Terminals.js';
import Buyers from './Bayers.js';
import Page404 from './Page404.js';
import Id from './Id.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class MainPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router>
        <div id="mainPage">
          <div id="sidebar">
          <img src={this.props.avatarUrl} />
          <div id="sidebarLinks">
            <Link to="/terminals">Терминалы</Link>
            <Link to="/buyers">Покупатели</Link>
          </div>
          <footer>
            <p>Copyright © 2020</p>
          </footer>
          </div>

          <div id="content">
            <Switch>
              <Route path="/terminals" component={Terminals}></Route>
              <Route path="/buyers" component={Buyers}></Route>
              <Route path="/buyers/:id" component={Id}></Route>
              <Route component={Terminals}></Route>
              {/* <Route component={Page404}/> */}
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default MainPage;