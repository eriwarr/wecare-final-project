import { Component } from 'react';
import CreateReview from './createReview';
import Moment from 'react-moment';
import Cookies from 'js-cookie';

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
      <li key={event.id}>
        <div className="container">
          <h4>{event.event.name} hosted by {event.event.organizer.username}</h4>
            <div className="card">
              <div className="card-body">
                <p><time>Date: <Moment format="MM/DD/YYYY">{event.event.start}</Moment></time></p>
                <p><time><Moment format="h:mm a">{event.event.start}</Moment></time>-<time><Moment format="h:mm a">{event.event.end}</Moment></time></p>
                <p className="card-text">{event.event.address}</p>
                {event.confirmed
                  ? <p className="card-text">Attendance: <strong>Confirmed</strong></p>
                  : <><p className="card-text">Attendance: Pending confirmation</p><button type="buton" onClick={()=> {this.removeVolunteer(event.id)}}>Remove me from this event</button></>
                }
                {event.confirmed && <CreateReview id={event.event.id} organizerId={event.organizer.id}/>}
            </div>
          </div>
        </div>
    </li>

    ))

    localStorage.setItem("eventsAttended", eventLogDisplay.length);

    // localStorage.setItem("attendanceConfirmed", eventLogDisplay.length);
    return (
      <>{eventLogDisplay}</>
    )
  }
}
export default EventLog;
