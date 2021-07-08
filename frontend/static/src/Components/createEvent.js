import { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import Cookies from 'js-cookie';



class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: null,
      start: '',
      end: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
    }
    this.input = this.input.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.newEvent = this.newEvent.bind(this);
  }

  input(event){
    this.setState({ [event.target.name]: event.target.value })
  }

  dateChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  newEvent(event) {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(this.state),
    }
    fetch('api/v1/events/', options)
    .then(response => response.json());
  }

  render() {
    return (
      <div className="signup-form new-post">
        <form onSubmit={this.newEvent}>
          <h2>New Event</h2>
            <Dropdown className="form-group">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {this.state.category
                  ?  <span>{this.state.category}</span>
                  :  <span>Choose a Category</span>
                }
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={()=> this.setState({category: "Community Development"})}>Community Development</Dropdown.Item>
                <Dropdown.Item onClick={()=> this.setState({category: "Animals"})}>Animals</Dropdown.Item>
                <Dropdown.Item onClick={()=> this.setState({category: "Children and Youth"})}>Children and Youth</Dropdown.Item>
                <Dropdown.Item onClick={()=> this.setState({category: "Environment"})}>Environment</Dropdown.Item>
                <Dropdown.Item onClick={()=> this.setState({category: "Health"})}>Health</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="form-group">
            <label htmlFor="name" className="form-label">What is your event's name?</label>
              <input className="form-control" name="name" value={this.state.name} required="required" onChange={this.input}/>
            </div>
            <div className="form-group">
              <label htmlFor="start" className="form-label">When does your event start?</label>
              <input className="form-control" type="datetime-local" name="start" value={this.state.start} required="required" onChange={this.dateChange} format= "yyyy-MM-ddThh:mm"/>
            </div>
            <div className="form-group">
            <label htmlFor="end" className="form-label">When does your event end?</label>
              <input className="form-control" type="datetime-local" name="end" value={this.state.end} required="required" onChange={this.dateChange} format= "yyyy-MM-ddThh:mm"/>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input type="text" className="form-control" id="inputAddress" name="address" value={this.state.address} placeholder="1234 Main St" onChange={this.input}/>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" name="city" value={this.state.city} onChange={this.input}/>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="inputState">State</label>
                <Dropdown className="form-group">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {this.state.state
                      ?  <span>{this.state.state}</span>
                      :  <span>Choose state</span>
                    }
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={()=> this.setState({state: "SC"})}>SC</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" name="zipcode" value={this.state.value} onChange={this.input}/>
              </div>
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
