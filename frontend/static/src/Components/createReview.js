import { Component } from 'react';
import Cookies from 'js-cookie';

class CreateReview extends Component {
  constructor(props){
    super(props);
    this.state ={
      isEditing: false,
      feedback: '',
    }
    this.submitFeedback = this.submitFeedback.bind(this);
    this.input = this.input.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  input(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  submitFeedback(event) {
    event.preventDefault();
    this.setState({ isEditing: false })

    const feedback = {
      feedback: this.state.feedback,
      event: this.props.id,
      organizer: this.props.organizerId,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(feedback)
    }
    fetch(`api/v1/reviews/`, options)
    .then(response => response.json())
  }

  handleReset() {
    this.setState({ isEditing: false })
  }

  render() {
    return(
      <>
      <form onSubmit={this.submitFeedback}>
      <div className="form-group">
        {this.state.isEditing === true && <textarea className="form-control" name="feedback" value={this.state.feedback} cols="30" rows="10" onChange={this.input}></textarea>}
        {this.state.isEditing === true && <button type="submit" className="btn btn-sm btn-block">Submit Feedback</button>}
        {this.state.isEditing === true && <button type="button" className="btn btn-sm btn-block" onClick={() => this.handleReset()}>Cancel</button>}
      </div>
      {this.state.isEditing === false && <button type='button' onClick={()=> this.setState({ isEditing: true })}>Give feedback to this org</button>}
      </form>
      </>
    )
  }
}
export default CreateReview;
