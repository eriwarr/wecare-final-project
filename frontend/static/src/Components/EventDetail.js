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
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    }
      fetch(`api/v1/events/${id}/attendees/add/`, options)
      .then(response => console.log(response))
  }

  render() {
    const event = this.props.event
    let isOrganizer = localStorage.getItem("isOrganizer")
    console.log(event.attendees)
    return (
      <>
      <p>Organizer: {event.owner}</p>
      <p>Event: {event.name}</p>
      <p>Type: {event.category}</p>
      <p><time>Date: <Moment format="MM/DD/YYYY">{event.start}</Moment></time></p>
      <p><time><Moment format="h:mm a">{event.start}</Moment></time>-<time><Moment format="h:mm a">{event.end}</Moment></time></p>
      <p>{event.address} {event.city},{event.state} {event.zipcode}</p>
      {isOrganizer === 'false' && <div><button type='button' onClick={()=> this.signUp(event)}>Sign Up for event</button></div>}
      {event.has_owner_permissions && <div><button type='button' onClick={()=> this.signUp(event)}>Edit Event</button></div>}
      <hr/>
      </>
    )
  }

}
export default EventDetail
