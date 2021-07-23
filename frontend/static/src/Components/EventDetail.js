import { Component } from 'react';
import Moment from 'react-moment';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import we_care from './logo/we_care.png';
import { HiLocationMarker } from "react-icons/hi";
import { IoIosAddCircle } from 'react-icons/io';
import { RiDeleteBin2Fill, RiTimeFill } from 'react-icons/ri';
import { FaCalendar } from 'react-icons/fa';



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

      <Col xs={12} md={4} className="event-col">
        <div class="card-card">
          <div class="card-body text-center">
            <img src={event.profile_picture}  alt="User" class="img-fluid img-thumbnail rounded-circle border-0 mb-3 event-pic"/>
            <h4 class="card-title">{event.name}</h4>
            <p className="small-txt"><FaCalendar/><Moment format="MMMM Do YYYY">{event.start}</Moment> <RiTimeFill/><Moment format='LT'>{event.start}</Moment>-<Moment format='LT'>{event.end}</Moment></p>
            <p className="small-txt"><HiLocationMarker/>{event.address}</p>
          </div>
          <div class="card-footer">
            {isOrganizer === 'false' && <button class="btn btn-light btn-sm bg-white has-icon btn-block" type="button" onClick={()=>this.signUp(event)}><IoIosAddCircle/>Sign Up</button>}
            {event.has_owner_permissions && <button class="btn btn-light btn-sm bg-white has-icon btn-block" type="button" onClick={() => this.props.deleteEvent(event.id)}><RiDeleteBin2Fill/>Delete Event</button>}
          </div>
        </div>
      </Col>

    )
  }

}
export default withRouter(EventDetail);
