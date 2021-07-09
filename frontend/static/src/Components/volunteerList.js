import { Component } from 'react';
import Cookies from 'js-cookie';

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
  }

  render() {
    const volunteers = this.state.volunteers.map((volunteer) =>(
      <li key={volunteer.id}>
        <div className="container">
          <h4></h4>
            <div className="card">
              <div className="card-body">
                <p className="card-text">{volunteer.name}</p>
                <p className="card-text">{volunteer.volunteer}</p>
                {!volunteer.confirmed
                  ? <button className="btn btn-primary edit-profile" onClick={()=> {this.confirmAttendance(volunteer.id)}}>Confirm Attendance</button>
                  : <p><strong>Attendance Confirmed by Organization</strong></p>
                }
            </div>
          </div>
        </div>
    </li>
    ))
    return(

      <>
      {volunteers}
      </>
    )
  }
}
export default VolunteerList;
