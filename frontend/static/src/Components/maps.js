import { Component } from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from 'react-places-autocomplete';

import Geocode from "react-geocode";
Geocode.setApiKey(process.env.REACT_APP_API_KEY);
Geocode.setLanguage("en");

const style = {
 maxWidth: "700px",
 height: "100%",
 overflowX: "hidden",
 overflowY: "hidden"
};
const containerStyle = {
 maxWidth: "700px",
 height: "100%"
};

export class MapContainer extends Component {
  constructor(props) {
  super(props);
  this.state = {
    address: '',
    addresses: [],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    mapCenter: {
      lat: 34.84898779374117,
      lng: -82.39700009882739
    }
  }
};

componentDidMount() {
  fetch('api/v1/events/address')
  .then(response => response.json())
  .then(data => this.setState({addresses: data}));
}

onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onMapClicked = (props) => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
};

  handleChange = address => {
  this.setState({ address });
  };

  render() {
    const markers = this.state.addresses.map((address) => (
        <Marker onClick={this.onMarkerClick}
          name = {address.name}
          address = {address.address}
          position={{
            lat: address.position.lat,
            lng: address.position.lng
          }}
        />
    ))
    return (
      <div id="googleMap">
        <Map
          google={this.props.google}
          zoom={14}
          onClick={this.onMapClicked}
          initialCenter= {{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          style={style} containerStyle={containerStyle}
        >
        {markers}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h6>{this.state.selectedPlace.name}</h6>
              <p>{this.state.selectedPlace.address}</p>
              <button>testing</button>
            </div>
        </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)
