import { Component } from 'react';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Moment from 'react-moment';

class VolunteerList extends Component {
  constructor(props){
    super(props);
    this.state = {
      volunteers : [],
    }
    this.confirmAttendance = this.confirmAttendance.bind(this);
  }

  componentDidMount() {
    fetch('api/v1/events/attendance/')
    .then(response => response.json())
    .then(data => this.setState({ volunteers: data }));
  }

  confirmAttendance(id){
    console.log(id)
    const confirmed = {
      confirmed: true,
    }
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(confirmed),
    }
    fetch(`api/v1/events/attendance/${id}/`, options)
    .then(response => response.json())
      this.props.history.push('/profile')
  }

  render() {
    const volunteers = this.state.volunteers.map((volunteer) =>(
      <Accordion.Item eventKey={volunteer.id}>
        <Accordion.Header>
          {!volunteer.confirmed
            ? <>Attendance needs Review</>
            : <strong>Attendance Confirmed by Organization</strong>
          }
        </Accordion.Header>
        <Accordion.Body>
          <strong>
          Event: {volunteer.name} |
          Volunteer: {volunteer.volunteer} {volunteer.last_name} |
          Address: {volunteer.location} |
          Event Date: <Moment format="MM/DD/YYYY">{volunteer.date}</Moment>
          </strong>
          {!volunteer.confirmed && <>
          <p>Please confirm this volunteer's attendance. {volunteer.volunteer} {volunteer.last_name} signed
          up for this event, scheduled for <Moment format="MM/DD/YYYY">{volunteer.date}</Moment>, located at {volunteer.location}.</p>
          <button type="button" className="btn btn-sm btn-block" onClick={()=> {this.confirmAttendance(volunteer.id)}}>Confirm Attendance</button>
          <em>Note: Please only only confirm if volunteer has attended.</em>
          </>
          }

        </Accordion.Body>
      </Accordion.Item>
    ))
    localStorage.setItem("volunteers", volunteers.length);

    return(
      <Accordion>{volunteers}</Accordion>
    )
  }
}
export default withRouter(VolunteerList);
