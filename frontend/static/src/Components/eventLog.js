import { Component } from 'react';
import CreateReview from './createReview';


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
        <div className="container">
          <h4>{event.name} hosted by {event.owner}</h4>
            <div className="card">
              <div className="card-body">
                <p className="card-text">{event.start}-{event.end}. {event.address} {event.city},{event.state} {event.zip_code}</p>
                <p className="card-text">Attendance: pending confirmation</p>
                <CreateReview id={event.id}/> <button>Remove me from this event</button>
            </div>
          </div>
        </div>
    </li>

    ))
    return (
      <>{eventLogDisplay}</>
    )
  }
}
export default EventLog;
