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
    let user = localStorage.getItem("user")
    console.log(this.state.reviews)
    const reviews = this.state.reviews.map((review )=> (
        <Accordion.Item eventKey={review.id} key={review.id}>
          <Accordion.Header><h4>{review.event_name} | {review.organizer}</h4></Accordion.Header>
          <Accordion.Body>
            <p>{review.feedback}</p>
          </Accordion.Body>
        </Accordion.Item>
    ));
    return(
      <>
      <h1>{user}'s Reviews</h1>
      <Accordion>{reviews}</Accordion>
      </>
    )
  }
}
export default EventReviews;
