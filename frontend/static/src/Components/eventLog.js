import { Component } from 'react';

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
      <p>{event.name}</p>
      <p>{event.event_date}</p>
      <p>Organizer: {event.owner}</p>
      </li>
    ))
    return (
      <ul>{eventLogDisplay}</ul>
    )
  }
}
export default EventLog;
