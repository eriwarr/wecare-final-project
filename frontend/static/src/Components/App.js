import './App.css';
import Cookies from 'js-cookie';
import { Component } from 'react';

import Login from './Login';
import Registration from './Registration';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selection: 'home',
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.navigation = this.navigation.bind(this);
    this.registration = this.registration.bind(this);
  }

  async login(user) {

    this.setState({ user: user.username});
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user)
    };
    const handleError = (err) => console.warn(err);
    const response = await fetch('rest-auth/login/', options).catch(handleError);

    if(response.ok) {
      const data = await response.json().catch(handleError);
      Cookies.set('Authorization', `Token ${data.key}`);
      this.setState({ selection: 'home' });
    } else {
      //throw error
    }
  }

  async logout(user) {
   const options = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'X-CSRFToken': Cookies.get('csrftoken'),
     },
   };
    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/logout/', options).catch(handleError);
    if(response.ok) {
      Cookies.remove('Authorization');
      this.setState({selection: 'login'});
    }
  }

  async navigation(selection) {
    this.setState({ selection }); 
  }

  async registration(user) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user)
    };
    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/registration/', options).catch(handleError);
    if(response.ok) {
      const data = await response.json().catch(handleError);
      Cookies.set('Authorization', `Token ${data.key}`);
    } else {
      // throw an Error
    }
  }


  render() {
    return (
      <>
      {!!Cookies.get('Authorization')
        ?  <button className="btn btn-link text-decoration-none" onClick={this.logout}>LOGOUT</button>
        :  <button className="btn btn-link text-decoration-none" onClick={() => this.setState({selection: 'login'})}>LOGIN</button>
      }
      {this.state.selection === 'login' && <Login login={this.login} navigation={this.navigation}/>}
      {this.state.selection === 'registration' && <Registration registration={this.registration} navigation={this.navigation}/>}
      </>
    );
  }
}

export default App;
