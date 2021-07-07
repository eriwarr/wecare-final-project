import { Component } from 'react';
import Moment from 'react-moment';

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

  signUp() {
    console.log('testing')
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
      <button type='button' onClick={this.signUp}>Sign Up for event</button>
      </>
    )
  }

}
export default EventDetail
