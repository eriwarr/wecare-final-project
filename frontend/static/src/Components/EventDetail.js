import { Component } from 'react';
import Moment from 'react-moment';
import Cookies from 'js-cookie';
import AttendeeList from './attendeeList';
import { Link } from 'react-router-dom'; 

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    }
    this.editEvent = this.editEvent.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  editEvent() {
    this.setState({ isEditing: false })
    const event = this.props.events
    this.props.updateEvent(event)
  }

  signUp(event) {
    const attendEvent = {
      event: event.id,
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(attendEvent),
    }
      fetch(`api/v1/events/attendance/`, options)
      .then(response => response.json());
  }

  render() {
    const event = this.props.event
    let isOrganizer = localStorage.getItem("isOrganizer")
    console.log(event.organizer)
    return (
      <>
      <p>Organizer: {event.owner}</p>
      <p>Event: {event.name}</p>
      <p>Type: {event.category}</p>
      <p><time>Date: <Moment format="MM/DD/YYYY">{event.start}</Moment></time></p>
      <p><time><Moment format="h:mm a">{event.start}</Moment></time>-<time><Moment format="h:mm a">{event.end}</Moment></time></p>
      <p>{event.address} {event.city},{event.state} {event.zipcode}</p>
      {isOrganizer === 'false' && <div><button type='button' onClick={()=> this.signUp(event)}>Sign Up for event</button></div>}
      {isOrganizer === 'true' && <div><button type='button' onClick={()=> this.signUp(event)}>Sign Up for event</button></div>}
      {event.has_owner_permissions && <div><button type='button' onClick={()=> this.signUp(event)}>Edit Event</button></div>}
      <hr/>
      </>
    )
  }

}
export default EventDetail
