import { Component } from 'react';
import { Link } from 'react-router-dom';

class EventLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventLog: [],
    }
  }

  componentDidMount() {
    fetch(`api/v1/events/event_log/`)
    .then(response => response.json())
    .then(data => this.setState({eventLog: data }));
  }

  render() {
    const eventLogDisplay = this.state.eventLog.map((event) => (
      <li key={event.id}>
      <p>{event.name} hosted by {event.owner}</p>
      <p>{event.start}-{event.end}</p>
      <p>{event.address} {event.city},{event.state} {event.zip_code}</p>
      <p>Attendance: pending confirmation</p>
      <Link to='/'>Submit Feedback</Link>
      </li>

    ))
    return (
      <ul>{eventLogDisplay}</ul>
    )
  }
}
export default EventLog;
