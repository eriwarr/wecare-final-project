import './App.css';
import Cookies from 'js-cookie';
import { Route, Switch, Redirect, withRouter, Link} from 'react-router-dom';
import { Component } from 'react';

import Login from './Login';
import Registration from './Registration';
import CreateUserProfile from './CreateUserProfile';
import Profile from './Profile';
import EventList from './EventList';
import EventLog from './eventLog';
import CreateEvent from './createEvent';
import OrganizerEvents from './organizerEvents';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



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
      console.log(data.user)
      localStorage.setItem("isOrganizer", data.user.is_organizer);
      // localStorage.setItem("isOwner", data.user.is_owner);
      this.props.history.push('/');
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
      this.props.history.push('/');
      localStorage.removeItem("isOrganizer");
    }
  }

  async navigation(selection) {
    this.setState({ selection });
  }

  async registration(user) {
      console.log(user)
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
      this.props.history.push('/createuserprofile')
    } else {
      // throw an Error
    }
  }

  render() {

    return (
        <>
          <Navbar className='nav-header' bg="light" variant="dark">
            <Navbar.Brand><Link to='/'>WeCare</Link></Navbar.Brand>
            <Nav className="mr-auto">
              <Link className="btn text-decoration-none" to='/'>About</Link>
              <Link className="btn text-decoration-none" to='/events'>Events</Link>
              <Link className="btn text-decoration-none" to='/'>Contact Us</Link>
              {!!Cookies.get('Authorization') && <Link className="btn text-decoration-none" to='/profile'>View Profile</Link>}
            </Nav>
              {!!Cookies.get('Authorization')
              ? <button type="button" className="btn text-decoration-none" onClick={this.logout}>Logout</button>
              : <Link className="btn text-decoration-none" to='/login'>Login</Link>

              }
         </Navbar>
          <Switch>
            <Route exact path='/'>
              <div>I am the homepage</div>
            </Route>
            <Route path='/login'>
              <Login login={this.login}/>
            </Route>
            <Route path='/registration'>
              <Registration registration={this.registration}/>
            </Route>
            <Route path='/createuserprofile'>
              <CreateUserProfile/>
            </Route>
            <Route path='/events'>
              <EventList/>
            </Route>
            <Route path='/profile'>
              <Profile/>
            </Route>
            <Route path='/eventlog'>
              <EventLog/>
            </Route>
            <Route path='/createEvent'>
              <CreateEvent/>
            </Route>
            <Route path='/organizerEvents'>
              <OrganizerEvents/>
            </Route>
          </Switch>
        </>

    );
  }
}

export default withRouter(App);
