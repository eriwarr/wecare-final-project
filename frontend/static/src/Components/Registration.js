import { Component } from 'react';
import { BrowserRouter as Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
      redirect: false,
    }
    this.input = this.input.bind(this);
    this.submit = this.submit.bind(this);
  }

  input(event){
    this.setState({ [event.target.name]: event.target.value });
  }

  submit(event) {
    event.preventDefault();
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) return <Route to='/createuserprofile'/>;
    return (
      <div className="signup-form">
  <form onSubmit={this.handleSubmit}>
    <h2>Register</h2>
    <p className="hint-text">"Create your account. It's free and only takes a minute."</p>
      <div className="form-group">
        <input className="username form-control" name="username" placeholder="Username" required="required" onChange={this.handleInput}/>
      </div>
      <div className="form-group">
        <input className="email form-control"  name="email" placeholder="Email" required="required" onChange={this.handleInput}/>
      </div>
      <div className="form-group">
        <input type="password" className="form-control" name="password1" placeholder="Password" required="required" onChange={this.handleInput}/>
      </div>
      <div className="form-group">
        <input type="password form-control" className="form-control" name="password2" placeholder="Confirm Password" required="required" onChange={this.handleInput}/>
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
