import { Component } from 'react';
import Moment from 'react-moment';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';
import WeCareLogo from './logo/WeCareLogo.png'; // with require
import { Col } from 'react-bootstrap';


class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    }
    this.signUp = this.signUp.bind(this);
  }

  signUp(event) {
    const attendEvent = {
      event: event.id,
      organizer: event.organizer.id
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
      this.props.history.push('/eventLog');
  }

  render() {
    const event = this.props.event
    let isOrganizer = localStorage.getItem("isOrganizer")
    console.log(event)
    return (

      <Col xs={12} md={6} className="event-col">
      <div class="card mb-5">
        <h3 class="card-header">{event.name}</h3>
        <div class="card-body">
          <p class="card-text">{event.address}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><time><Moment format="MM/DD/YYYY">{event.start}</Moment></time></li>
          <li class="list-group-item"><time><Moment format="h:mm a">{event.start}</Moment></time> - <time><Moment format="h:mm a">{event.end}</Moment></time></li>
          {event.has_owner_permissions && <li class="list-group-item">You have {event.attendance.length} volunteer(s) attending this event</li>}
        </ul>
        <div class="card-body">
          {isOrganizer === 'false' && <button className="btn btn-dark btn-sm" type='button' onClick={()=> this.signUp(event)}>Sign Up for event</button>}
          {event.has_owner_permissions && <button className="btn btn-dark btn-sm" type='button' onClick={() => this.props.deleteEvent(event.id)}>Delete Event</button>}
        </div>
        <div class="card-footer text-muted">
          2 days ago
        </div>
      </div>
      </Col>

    )
  }

}
export default withRouter(EventDetail);
