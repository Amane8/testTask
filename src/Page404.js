import React from 'react';
import img from './img/404.jpg';

class Page404 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="page404">
        <img src={img} alt="404 Page not found"/>
      </div>
    )
  }
}

export default Page404;