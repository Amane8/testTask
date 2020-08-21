import React from 'react';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      completed: false,
    }
  }

  tryLogin = (event) => {
    event.preventDefault();
    let login = document.querySelector('#login').value;
    let password = document.querySelector('#password').value;

    const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let avatarUrl = '';

    if(!regex.test(password)) {
      this.handleFailedLogin();
    } else {
      fetch(`https://api.github.com/users/${login}`)
      .then(res => {
        if(res.ok) {
          return res.json();
        } else {
          throw new Error('login error');
        }
      })
      .then(user => {
        avatarUrl = user['avatar_url'];
        this.setState({completed: true});
        this.props.renderHome(avatarUrl);
      })
      .catch(err => this.handleFailedLogin());
    }

    
  }

  handleFailedLogin = () => {
    window.alert(`
    Ваши логин и пароль не совпадают.
    Пожалуйста, попробуйте еще раз.`)

    document.querySelector('#login').value = '';
    document.querySelector('#password').value = '';
  }


  render() {
    if(this.state.completed == false) {
      return (
        <div id='loginScreenStyle'>
          <form id='loginFormStyle'>
            <label for='login'>Login</label>
            <input id='login' type='text'></input>
    
            <label for='password'>Password</label>
            <input id='password' type='password'></input>
    
            <button id='buttonStyle' onClick={this.tryLogin}>Log in</button>
          </form>
        </div>
      )
    } else {
      return ('');
    }
  }
}



export default Login;