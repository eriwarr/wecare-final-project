import { Component } from 'react';
import Moment from 'react-moment';
import Cookies from 'js-cookie';

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
    const id = event.id
    const attendees = event.attendees

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(event),
    }
      fetch(`/api/v1/events/${id}/`, options)
      .then(response => response.json())
      .then(data => console.log(data.attendees))
  }

  render() {
    const event = this.props.event

    return (
      <>
      <p>Organizer: {event.owner}</p>
      <p>Event: {event.name}</p>
      <p>Type: {event.category}</p>
      <time>Date: <Moment format="MM/DD/YYYY">{event.event_date}</Moment></time>
      <hr/>
      <button type='button' onClick={()=> this.signUp(event)}>Sign Up for event</button>
      </>
    )
  }

}
export default EventDetail
