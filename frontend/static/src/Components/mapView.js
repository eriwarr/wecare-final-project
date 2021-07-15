import GoogleMap from './maps';
import { Component } from 'react';
import Geocode from "react-geocode";
import { Button, Modal } from 'react-bootstrap';

Geocode.setApiKey(process.env.REACT_APP_API_KEY);
Geocode.setLanguage("en");

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      show: false,
      addresses: [],
      address: {
        lat: 34.84898779374117,
        lng: -82.39700009882739
      },
    }
    this.handleAddress = this.handleAddress.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    fetch('api/v1/events/')
    .then(response => response.json())
    .then(data => this.setState({ events: data }));
  }

  handleModal () {
    this.setState({ show: !this.state.show})
  }

  handleAddress(address){
    this.setState({ address })
  }

  render() {
    const eventListings = this.state.events.map((event) =>(
      <li key={event.id} className="list">
        <div className="media text-muted pt-3">
          <strong className="d-block text-gray-dark">{event.name} by {event.owner}</strong>
          <p>{event.address}</p>
          <button type="button" className="btn" onClick={()=> this.handleAddress(event.position)}>See on Map</button>
        </div>
      </li>
    ));


    return (
      <>
      <main role="main" className="container">
        <div className="row">
          <Modal show={this.state.show}>
            <Modal.Header>Directions</Modal.Header>
            <Modal.Body>Hi</Modal.Body>
            <Modal.Footer>
              <button type="button" onClick={() => this.handleModal()}>Close</button>
            </Modal.Footer>
          </Modal>
          <div className="col-md-6 blog-main">
            {eventListings}
          </div>
          <aside className="col-md-6 blog-sidebar">
            <GoogleMap addresses={this.state.addresses} address={this.state.address} handleModal={this.handleModal}/>
          </aside>
        </div>
      </main>
      </>
    )
  }
}
export default MapView;
