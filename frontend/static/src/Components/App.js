import './App.css';
import Cookies from 'js-cookie';
import { Route, Switch, withRouter, Link} from 'react-router-dom';
import { Component } from 'react';

import Login from './Login';
import Registration from './Registration';
import CreateUserProfile from './CreateUserProfile';
import Profile from './Profile';
import EventList from './EventList';
import EventLog from './eventLog';
import CreateEvent from './createEvent';
import OrganizerEvents from './organizerEvents';
import CreateReview from './createReview';
import EventReviews from './eventReviews';
import VolunteerList from './volunteerList';
import Gallery from './gallery';
import OrganizerReviews from './organizerReviews';
import MapView from './mapView';
import ContactUs from './contactUs';


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
      localStorage.setItem("isOrganizer", data.user.is_organizer);
      localStorage.setItem("user", data.user.username);
      this.props.history.push('/profile');
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
      localStorage.removeItem("user");
      localStorage.removeItem("events");
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
    let user = localStorage.getItem("user")
    return (
        <>
          <Navbar className='nav-header' bg="light" variant="dark">
            <Navbar.Brand className="we-care"><Link to='/'>WeCare</Link></Navbar.Brand>
            <Nav className="mr-auto">
              <Link className="btn text-decoration-none" to='/events'>Find Opportunities</Link>
              <Link className="btn text-decoration-none" to='/contactUs'>Contact Us</Link>
              {!!Cookies.get('Authorization') && <Link className="btn text-decoration-none" to='/profile'>View Profile</Link>}
            </Nav>
              {!!Cookies.get('Authorization')
              ? <button type="button" className="btn text-decoration-none" onClick={this.logout}>Logout</button>
              : <Link className="btn text-decoration-none" to='/login'>Login</Link>

              }
              {user && `Welcome back ${user}!`}
         </Navbar>
          <Switch>
            <Route exact path='/'>

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
            <Route path='/createReview'>
              <CreateReview/>
            </Route>
            <Route path='/eventReviews'>
              <EventReviews/>
            </Route>
            <Route path='/volunteerList'>
              <VolunteerList/>
            </Route>
            <Route path='/gallery'>
              <Gallery/>
            </Route>
            <Route path='/organizerReviews'>
              <OrganizerReviews/>
            </Route>
            <Route path='/map'>
              <MapView/>
            </Route>
            <Route path='/contactUs'>
              <ContactUs/>
            </Route>
          </Switch>
        </>

    );
  }
}

export default withRouter(App);
