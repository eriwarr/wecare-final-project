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
    let user = localStorage.getItem("user")
    const eventLogDisplay = this.state.eventLog.map((event) => (
      <Accordion.Item eventKey={event.id} key={event.id}>
        <Accordion.Header>
          <h4>{event.event.name} hosted by {event.event.organizer.username}</h4>
          </Accordion.Header>
        <Accordion.Body>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Address</th>
                <th scope="col">Attendance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-secondary">
                <th scope="row"><p><Moment format="MM/DD/YYYY">{event.event.start}</Moment></p></th>
                <td><p><Moment format="h:mm a">{event.event.start}</Moment> - <Moment format="h:mm a">{event.event.end}</Moment></p></td>
                <td><p>{event.event.address}</p></td>
                <td>
                  {event.confirmed
                    ? <p><strong>Confirmed</strong></p>
                    : <p>Pending</p>
                  }
                </td>
              </tr>
            </tbody>
          </table>
            {event.confirmed
              ? <CreateReview id={event.event.id} organizerId={event.organizer.id}/>
              : <button type="buton" className="btn btn-dark" onClick={()=> {this.removeVolunteer(event.id)}}>Remove me from this event</button>
            }

        </Accordion.Body>
      </Accordion.Item>

    ))

    localStorage.setItem("eventsAttended", eventLogDisplay.length);

    // localStorage.setItem("attendanceConfirmed", eventLogDisplay.length);
    return (
      <>
      <h1>{user}'s Volunteer Events</h1>
      <Accordion>{eventLogDisplay}</Accordion>
      </>
    )
  }
}
export default EventLog;
