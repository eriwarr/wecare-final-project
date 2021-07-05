import { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.submit = this.submit.bind(this);
  }
    handleInput(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
    submit(event) {
      event.preventDefault();
      this.props.login(this.state);
    }
    render() {
      return (
        <div className="signup-form">
          <form onSubmit={this.submit}>
            <h2>Sign In</h2>
            <p className="hint-text">Welcome back to WECARE</p>
              <div className="form-group">
                <input className="username form-control" id="username" name="username" placeholder="Username" required="required" onChange={this.handleInput}/>
              </div>
              <div className="form-group">
                <input className="email form-control" id="email" name="email" placeholder="Email" required="required" onChange={this.handleInput}/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="password" name="password" placeholder="Password" required="required" onChange={this.handleInput}/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success btn-lg btn-block">Log In</button>
              </div>
          </form>
          <div className="text-center">Already have an account?<button type="button" className="btn" onClick={() => this.props.navigation('registration')}>Register!</button></div>
        </div>
      )
    }
}
export default Login
