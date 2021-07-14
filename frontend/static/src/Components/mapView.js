import GoogleMap from './maps';
import { Component } from 'react';
import EventDetail from './EventDetail';
import Geocode from "react-geocode";
Geocode.setApiKey(process.env.REACT_APP_API_KEY);
Geocode.setLanguage("en");

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      addresses: [],
    }
    this.handleAddress = this.handleAddress.bind(this);
  }

  componentDidMount() {
    fetch('api/v1/events/')
    .then(response => response.json())
    .then(data => this.setState({ events: data }));
  }

  handleAddress(address){
    Geocode.fromAddress(address).then(
  (response) => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
  });
  }

  render() {
    const eventListings = this.state.events.map((event) =>(
      <li key={event.id}>
        <div class="media text-muted pt-3">
          <strong class="d-block text-gray-dark">{event.name} by {event.owner}</strong>
          <p>{event.address}</p>
          Get directions to this event! <button>testing</button>
        </div>
      </li>
    ));


    return (
      <>
      <main role="main" className="container">
        <div className="row">
          <div className="col-md-6 blog-main">
            {eventListings}
          </div>
          <aside className="col-md-6 blog-sidebar">
            <GoogleMap addresses={this.state.addresses}/>
          </aside>
        </div>
      </main>
      </>
    )
  }
}
export default MapView;
