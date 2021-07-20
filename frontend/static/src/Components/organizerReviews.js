import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';

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
      <Accordion.Item eventKey={review.id}>
        <Accordion.Header>
          {review.event_name}
        </Accordion.Header>
        <Accordion.Body>
          <p>{review.feedback}</p>
          <p>by {review.author_name}</p>
        </Accordion.Body>
        </Accordion.Item>
      </li>

    )))
    return(
      <Accordion>{reviews}</Accordion>
    )
  }
}
export default OrganizerReviews;
