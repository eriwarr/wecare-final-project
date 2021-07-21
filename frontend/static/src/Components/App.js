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
import Image from 'react-bootstrap/Image';
import {Container, Row, Col }from 'react-bootstrap';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showAlert: true,
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
      alert(`Welcome Back ${data.user.username}`)
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
    let show = "show"
    return (
        <>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Link className="navbar-brand" to="/">WeCare</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to='/events'>Find Opportunities</Link>
                <Link className="nav-link" to='/contactUs'>Contact Us</Link>
              </Nav>
              <div className="d-flex">
              <ul className="navbar-nav me-auto">
              {!!Cookies.get('Authorization') && <li className="nav-item"><Link className="nav-link" to='/profile'>View Profile</Link></li>}
              {!!Cookies.get('Authorization')
              ? <li className="nav-item"><button type="button" className="btn btn-secondary my-2 my-sm-0" onClick={this.logout}>Logout</button></li>
              : <li className="nav-item"><Link className="btn btn-secondary my-2 my-sm-0" to='/login'>Login</Link></li>
              }
              </ul>
            </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          <Switch>
            <Route exact path='/'>
              <div className="home">
                <p>Hi, my name is Eric. </p>
              </div>
              <Container>
                <Row>
                  <Col>
                  <figure>
                    <blockquote className="blockquote">
                      <p className="mb-0">If you can’t fly then run, if you can’t run then walk, if you can’t walk then crawl, but whatever you do you have to keep moving forward.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      Martin Luther King Jr.
                    </figcaption>
                  </figure>
                </Col>
                <Col>
                  <figure className="text-center">
                    <blockquote className="blockquote">
                      <p className="mb-0">Not everything that is faced can be changed, but nothing can be changed until it is faced.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      James Baldwin
                    </figcaption>
                  </figure>
                </Col>
                <Col>
                  <figure className="text-end">
                    <blockquote className="blockquote">
                      <p className="mb-0">History, despite its wrenching pain, cannot be unlived, but if faced with courage, need not be lived again.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      Maya Angelou
                    </figcaption>
                  </figure>
                </Col>
              </Row>
            </Container>
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
