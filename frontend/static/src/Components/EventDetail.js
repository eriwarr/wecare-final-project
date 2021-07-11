import { Component } from 'react';
import Moment from 'react-moment';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';


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
    return (
      <>
      <div className="container">
      <div className="row align-items-center event-block no-gutters margin-40px-bottom">
        <div className="col-lg-5 col-sm-12">
            <div className="position-relative">
                <img src="https://via.placeholder.com/450x280/FFB6C1/000000" alt=""/>
                <div className="events-date">
                    <time><Moment format="MM/DD/YYYY">{event.start}</Moment></time>
                </div>
            </div>
        </div>
        <div className="col-lg-7 col-sm-12">
            <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all">
                <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500"><a href="event-details.html" className="text-theme-color">{event.owner}</a></h5>
                <p><time><Moment format="h:mm a">{event.start}</Moment></time>-<time><Moment format="h:mm a">{event.end}</Moment></time> <span>({event.name})</span></p>
                <p>{event.address} {event.city},{event.state} {event.zipcode}</p>
                {event.has_owner_permissions && <p>You have {event.attendance.length} volunteer(s) attending this event</p>}
                {isOrganizer === 'false' && <button className="butn small margin-10px-top md-no-margin-top" type='button' onClick={()=> this.signUp(event)}>Sign Up for event</button>} {event.has_owner_permissions && <button type='button' onClick={() => this.props.deleteEvent(event.id)}>Remove Event</button>}
            </div>
        </div>
    </div>
  </div>
      </>
    )
  }

}
export default withRouter(EventDetail);
