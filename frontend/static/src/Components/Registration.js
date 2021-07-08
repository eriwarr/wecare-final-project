import { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';


class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
      is_organizer: false,
    }
    this.input = this.input.bind(this);
    this.submit = this.submit.bind(this);
    this.isOrganizer = this.isOrganizer.bind(this);
  }

  input(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  isOrganizer() {
    this.setState(prevState => ({
    is_organizer: !prevState.is_organizer
    }));
  }

  submit(event) {
    event.preventDefault();
    this.props.registration(this.state)

  }

  render() {

     return (
      <div className="signup-form">
        <form onSubmit={this.submit}>
          <h2>Register</h2>
          <p className="hint-text">"Create your account. It's free and only takes a minute."</p>
            <div className="form-group">
              <input className="username form-control" name="username" placeholder="Username /  Organization Name" required="required" onChange={this.input}/>
            </div>
            <div className="form-group">
              <input className="email form-control"  name="email" placeholder="Email" required="required" onChange={this.input}/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="password1" placeholder="Password" required="required" onChange={this.input}/>
            </div>
            <div className="form-group">
              <input type="password form-control" className="form-control" name="password2" placeholder="Confirm Password" required="required" onChange={this.input}/>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.isOrganizer}/>
              <label className="form-check-label" htmlFor="exampleCheck1">I'm an organizer</label>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
            </div>
        </form>
        <div className="text-center">Already have an account?<Link className="btn" to='/login'>Login!</Link></div>
      </div>
    )
  }
}
export default withRouter(Registration);
