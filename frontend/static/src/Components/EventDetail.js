import { Component } from 'react';
import Moment from 'react-moment';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import we_care from './logo/we_care.png';


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
      <div className="card mb-5">
        <h3 className="card-header">{event.name}</h3>Category: {event.category}
        <img className="logo"src={we_care} alt=""/>
        <div className="card-body">
          <p className="card-text">{event.address}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><time><Moment format="MM/DD/YYYY">{event.start}</Moment></time></li>
          <li className="list-group-item"><time><Moment format="h:mm a">{event.start}</Moment></time> - <time><Moment format="h:mm a">{event.end}</Moment></time></li>
          {event.has_owner_permissions && <li className="list-group-item">You have {event.attendance.length} volunteer(s) attending this event</li>}
        </ul>
        <div className="card-body">
          {isOrganizer === 'false' && <button className="btn btn-dark btn-sm" type='button' onClick={()=> this.signUp(event)}>Sign Up for event</button>}
          {event.has_owner_permissions && <button className="btn btn-dark btn-sm" type='button' onClick={() => this.props.deleteEvent(event.id)}>Delete Event</button>}
        </div>
        <div className="card-footer text-muted">
          2 days ago
        </div>
      </div>
      </Col>

    )
  }

}
export default withRouter(EventDetail);
