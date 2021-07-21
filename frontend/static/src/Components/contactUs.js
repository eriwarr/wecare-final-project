import { Component } from 'react';


class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    }
  }

  componentDidMount() {
    fetch('api/v1/users/profiles/organizations')
    .then(response => response.json())
    .then(data => this.setState({ profiles: data }))
  }

  render(){
    const emails= this.state.profiles.map((profile) =>(
      <option key={profile.id}>{profile.username}</option>
    ))

    return(
      <form className="contact-form">
        <fieldset>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter your first and last name"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleSelect1" className="form-label mt-4">Choose an Organization</label>
            <select className="form-select" id="exampleSelect1">
              <option value="">WeCare</option>
              {emails}
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="exampleSelect2" className="form-label mt-4">Contact Reason</label>
            <select multiple="" className="form-select" id="exampleSelect2">
              <option>Need help siging up for an event</option>
              <option>Need special accomodations for upcoming event</option>
              <option>Volunteer Attendance Issue</option>
              <option>General Inquiries</option>
              <option>Organizational Assistance</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="exampleTextarea" className="form-label mt-4">Reason for Contact</label>
            <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-dark">Submit</button>
        </fieldset>
      </form>
    )
  }
}
export default ContactUs;
