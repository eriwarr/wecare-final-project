import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';



class EventReviews extends Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: [],
    }
  }

  componentDidMount() {
    fetch('api/v1/reviews/')
    .then(response => response.json())
    .then(data => this.setState({reviews: data}));

  }

  render(){
    const reviews = this.state.reviews.map((review )=> (
        <Accordion.Item eventKey={review.id}>
          <Accordion.Header>{review.event_name}</Accordion.Header>
          <Accordion.Body>{review.feedback}</Accordion.Body>
        </Accordion.Item>
    ));
    return(
      <Accordion>{reviews}</Accordion>
    )
  }
}
export default EventReviews;
