import GoogleMap from './maps';
import { Component } from 'react';
import Geocode from "react-geocode";
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import Directions from './directions';

Geocode.setApiKey(process.env.REACT_APP_API_KEY);
Geocode.setLanguage("en");

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      show: false,
      showingInfoWindow: false,
      activeMarker: {},
      addresses: [],
      address: {
        lat: 34.84898779374117,
        lng: -82.39700009882739
      },
      directions: '',
    }
    this.handleAddress = this.handleAddress.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    fetch('api/v1/events/')
    .then(response => response.json())
    .then(data => this.setState({ events: data }));
  }

  handleModal(address) {
    this.setState({ directions: address})
    this.setState({ show: !this.state.show})
  }

  handleAddress(address) {
    this.setState({
        address: address,
        showingInfoWindow: true,
      })
  }

  render() {
    const eventListings = this.state.events.map((event) =>(
      <table className="table table-hover" key={event.id}>
        <tbody>
          <tr class="table-secondary">
           <td><p><strong className="d-block text-gray-dark">{event.name}</strong></p></td>
           <td><p>{event.address}</p></td>
           <td><button type="button" className="btn" onClick={()=> this.handleAddress(event.position)}>See on Map</button></td>
          </tr>
        </tbody>
      </table>
    ));


    return (
      <>
      <main role="main" className="container main">
        <div className="row">
          <Modal show={this.state.show} size="lg" aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
              <h6><strong>Directions to {this.state.directions}</strong></h6>
            </Modal.Header>
            <Modal.Body className="show-grid">
              <Container>
                <Row>
                  <Directions address={this.state.address}/>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <button type="button" className="btn"onClick={() => this.handleModal()}>Close</button>
            </Modal.Footer>
          </Modal>
          <div className="col-md-6">
            {eventListings}
          </div>
          <aside className="col-md-6 blog-sidebar">
            <GoogleMap addresses={this.state.addresses} address={this.state.address} handleModal={this.handleModal} showingInfoWindow={this.state.showingInfoWindow} activeMarker={this.state.activeMarker}/>
          </aside>
        </div>
      </main>
      </>
    )
  }
}
export default MapView;
