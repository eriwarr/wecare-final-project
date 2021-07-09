import { Component } from 'react';


class AttendeeList extends Component {
  constructor(props){
    super(props);
    this.state = {
      showList:false,
    }
  }
  render() {
    const volunteers = this.props.volunteers.map((volunteer) => (
      <li key={volunteer.id}>
      <p>Did {volunteer.username} attend this event? <button>Yes</button><button>No</button></p>
      </li>
    ))
    return(
      <>
      {this.props.owner && <button type="button" onClick={()=> this.setState({ showList: true})}>See attendees</button>}
      {this.state.showList && <ul>{volunteers}</ul>}
      </>
    )
  }
}
export default AttendeeList;
