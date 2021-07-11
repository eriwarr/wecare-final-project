import { Component } from 'react';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';

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
      <li key={volunteer.id}>
        <div className="container">
            <div className="card">
              <div className="card-body">
                <p className="card-text">Your Event: {volunteer.name}</p>
                <p className="card-text">Volunteer: {volunteer.volunteer} {volunteer.last_name}</p>
                {!volunteer.confirmed
                  ? <button className="btn btn-primary edit-profile" onClick={()=> {this.confirmAttendance(volunteer.id)}}>Confirm Attendance</button>
                  : <p><strong>Attendance Confirmed by Organization</strong></p>
                }
            </div>
          </div>
        </div>
    </li>
    ))
    localStorage.setItem("volunteers", volunteers.length);

    return(

      <>
      {volunteers}
      </>
    )
  }
}
export default withRouter(VolunteerList);
