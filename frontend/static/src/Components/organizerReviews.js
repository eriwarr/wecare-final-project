import { Component } from 'react';

class OrganizerReviews extends Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: [],
    }
  }

  componentDidMount() {
    fetch('api/v1/reviews/organizer_reviews/')
    .then(response => response.json())
    .then(data => this.setState({reviews: data}));

  }

  render(){
    const reviews = this.state.reviews.map((review => (
      <li key={review.id}>
      <p>{review.event_name}</p>
      <p>{review.feedback}</p>
      <p>by {review.author_name}</p>
      </li>

    )))
    return(
      <ul>{reviews}</ul>
    )
  }
}
export default OrganizerReviews;
