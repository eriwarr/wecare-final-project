import { Component } from 'react';
import Cookies from 'js-cookie';
import EventDetail from './EventDetail';
import { Link } from 'react-router-dom';
import {Container, Row }from 'react-bootstrap';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    }
    this.updateEvent = this.updateEvent.bind(this);
    this.filterEvents = this.filterEvents.bind(this);
    this.showAll = this.showAll.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentDidMount() {
    fetch('api/v1/events/')
    .then(response => response.json())
    .then(data => this.setState({ events: data }));

  }

  deleteEvent(id){

    const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
      },
    }
    fetch(`api/v1/events/${id}/`, options)
    .then(response => {
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      const events = [ ...this.state.events];
      const index = events.findIndex(event => event.id === id);
      events.splice(index, 1);
      this.setState({events});
    })
  }

  updateEvent(event){
  const id = event.id;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(event),
  }
  fetch(`/api/v1/events/${id}/`, options)
    .then(response => {
      if(!response.ok) {
        throw new Error('Network response was not ok')
      }
      const events = [ ...this.state.events];
      const index = events.findIndex(event => event.id === id);
      events[index] = events;
      this.setState({ events });
    });
  }

  filterEvents(event) {

    fetch(`/api/v1/events/category/?category=${event.target.name}`)
      .then(response => response.json())
      .then(data => this.setState({ events: data }));

  }

  showAll(){
    fetch('api/v1/events/')
    .then(response => response.json())
    .then(data => this.setState({ events: data }));

  }

  render() {
    const eventListings = this.state.events.map((event) =>(
      <EventDetail key={event.id} event={event} updateEvent={this.updateEvent} deleteEvent={this.deleteEvent}/>
    ));

    return (
      <div className="container">
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-between">
          <button type="button" className="btn" onClick={this.filterEvents} name="Community Development"><strong>Community Development</strong></button>
          <button type="button" className="btn" onClick={this.filterEvents} name="Animals"><strong>Animals</strong></button>
          <button type="button" className="btn" onClick={this.filterEvents} name="Children and Youth"><strong>Children & Youth</strong></button>
          <button type="button" className="btn" onClick={this.filterEvents} name="Enviornment"><strong>Environment</strong></button>
          <button type="button" className="btn" onClick={this.filterEvents} name="Health"><strong>Health</strong></button>
          <button type="button" className="btn" onClick={this.showAll} name="Computer Security"><strong>ALL</strong></button>
          <Link type="button" className="btn" to='/map'>View Maps</Link>
        </nav>
      </div>
      <Container>
        <Row>
          {eventListings}
        </Row>
      </Container>
    </div>
    )
  }
}
export default EventList;
