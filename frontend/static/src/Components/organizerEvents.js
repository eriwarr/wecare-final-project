import { Component } from 'react';
import Cookies from 'js-cookie';
import EventDetail from './EventDetail';

class OrganizerEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    }
    this.deleteEvent = this.deleteEvent.bind(this);
    this.updateEvent = this.updateEvent.bind(this);
    this.filterEvents = this.filterEvents.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  componentDidMount() {
    fetch('api/v1/events/organizer_event/')
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

    fetch(`/api/v1/articles/category/?category=${event.target.name}`)
      .then(response => response.json())
      .then(data => this.setState({ articles: data }));

  }

  showAll(){
    fetch('api/v1/articles/')
    .then(response => response.json())
    .then(data => this.setState({ events: data }));

  }

  render() {
    const eventListings = this.state.events.map((event) =>(
      <EventDetail key={event.id} event={event} updateEvent={this.updateEvent}/>
    ));

    return (
      <>
      {eventListings}
      </>
    )
  }
}
export default OrganizerEvents;
