import { Component } from 'react';
import CreateReview from './createReview';
import Moment from 'react-moment';
import Cookies from 'js-cookie';
import Accordion from 'react-bootstrap/Accordion';

class EventLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventLog: [],
    }
    this.removeVolunteer = this.removeVolunteer.bind(this);
  }

  componentDidMount() {
    fetch(`api/v1/events/event_log/`)
    .then(response => response.json())
    .then(data => this.setState({eventLog: data }));
  }

  removeVolunteer(id) {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
      }
      fetch(`api/v1/events/attendance/${id}/`, options)
      .then(response => {
        if(response.ok) {
          const eventLog = [ ...this.state.eventLog];
          const index = eventLog.findIndex(event => event.id === id);
          eventLog.splice(index, 1);
          this.setState({ eventLog });
        }
      })
  }

  render() {
    const eventLogDisplay = this.state.eventLog.map((event) => (
      <Accordion.Item eventKey={event.id}>
        <Accordion.Header>{event.event.name} hosted by {event.event.organizer.username}</Accordion.Header>
        <Accordion.Body>
          <time>Date: <Moment format="MM/DD/YYYY">{event.event.start}</Moment> | </time>
          <time>Time: <Moment format="h:mm a">{event.event.start}</Moment></time> - <time><Moment format="h:mm a">{event.event.end}</Moment></time>
          <p>Address: {event.event.address}</p>
            {event.confirmed
              ? <p>Attendance: <strong>Confirmed</strong></p>
              : <><p className="card-text">Attendance: Pending confirmation</p><button type="buton" onClick={()=> {this.removeVolunteer(event.id)}}>Remove me from this event</button></>
            }
            {event.confirmed && <CreateReview id={event.event.id} organizerId={event.organizer.id}/>}
        </Accordion.Body>
      </Accordion.Item>

    ))

    localStorage.setItem("eventsAttended", eventLogDisplay.length);

    // localStorage.setItem("attendanceConfirmed", eventLogDisplay.length);
    return (
      <Accordion>{eventLogDisplay}</Accordion>
    )
  }
}
export default EventLog;
