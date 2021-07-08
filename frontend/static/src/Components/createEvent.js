import { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker'



class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: null,
      start: '',
      end: new Date(),
      city: '',
      state: '',
      zipcode: '',
    }
    this.input = this.input.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.dateEndChange = this.dateEndChange.bind(this);
  }

  input(event){
    this.setState({ [event.target.name]: event.target.value })
  }

  dateChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  dateEndChange(date) {
    this.setState({endDate: date})
  }

  render() {
    return (
      <div className="signup-form new-post">
        <form onSubmit={this.addPost}>
          <h2>New Event</h2>
            <Dropdown className="form-group">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {this.state.category
                  ?  <span>{this.state.category}</span>
                  :  <span>Choose a Category</span>
                }
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={()=> this.setState({category: "Robotics"})}>Robotics</Dropdown.Item>
                <Dropdown.Item onClick={()=> this.setState({category: "Machine Learning"})}>Machine Learning</Dropdown.Item>
                <Dropdown.Item onClick={()=> this.setState({category: "Health Care"})}>Health Care</Dropdown.Item>
                <Dropdown.Item onClick={()=> this.setState({category: "FinTech"})}>FinTech</Dropdown.Item>
                <Dropdown.Item onClick={()=> this.setState({category: "AgriTech"})}>AgriTech</Dropdown.Item>
                <Dropdown.Item onClick={()=> this.setState({category: "Computer Security"})}>Computer Security</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="form-group">
              <input className="form-control" name="name" value={this.state.name} placeholder="What is your event's name?" required="required" onChange={this.input}/>
            </div>
            <div className="form-group">
              <input className="form-control" type="datetime-local" name="start" value={this.state.start} required="required" onChange={this.dateChange}/>
            </div>
            <div className="form-group">
              <input className="form-control" type="datetime-local" name="end" value={this.state.end} required="required" onChange={this.dateChange}/>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success btn-lg btn-block">Submit</button>
            </div>
        </form>
      </div>
    )
  }
}
export default CreateEvent
