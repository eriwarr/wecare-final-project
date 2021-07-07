import { Component } from 'react';
import { BrowserRouter as Link} from 'react-router-dom';


class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
    }
    this.input = this.input.bind(this);
    this.submit = this.submit.bind(this);
  }

  input(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  submit(event) {
    event.preventDefault();
    this.props.registration(this.state)
    this.setState({ redirect: true });
  }

  render() {

     return (
      <div className="signup-form">
        <form onSubmit={this.submit}>
          <h2>Register</h2>
          <p className="hint-text">"Create your account. It's free and only takes a minute."</p>
            <div className="form-group">
              <input className="username form-control" name="username" placeholder="Username" required="required" onChange={this.input}/>
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
            <div className="form-group">
              <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
            </div>
        </form>
        <div className="text-center">Already have an account?<Link className="btn" to='/login'>Login!</Link></div>
      </div>
    )
  }
}
export default Registration
