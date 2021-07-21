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
    console.log(this.state.reviews.length)
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
      <>
      {this.state.reviews.length === 0
        ? <h1>Sorry no reviews yet!</h1>
        : <h1>Organization Reviews</h1>
    }
      <Accordion>{reviews}</Accordion>
      </>
    )
  }
}
export default OrganizerReviews;
