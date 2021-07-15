import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng, } from 'react-places-autocomplete';
import { Link } from 'react-router-dom';
import Geocode from "react-geocode";
import GoogleDirections from './googleDirections';
import { Button } from 'react-bootstrap';
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
    show: false,
    mapCenter: {
      lat: 34.84898779374117,
      lng: -82.39700009882739
    }
  }

  this.myRef = React.createRef();

  this.getLocation = this.getLocation.bind(this);
  this.handleModal = this.handleModal.bind(this);
};

componentDidMount() {
  fetch('api/v1/events/address')
  .then(response => response.json())
  .then(data => this.setState({addresses: data}));
}

onInfoWindowOpen(props, e) {
    const button = (<button onClick={() => props.handleModal()}>Get directions</button>);
    ReactDOM.render(React.Children.only(button), document.getElementById("iwc"));
  }

getLocation(){
  console.log("hey")
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //   console.log("Latitude is :", position.coords.latitude);
  //   console.log("Longitude is :", position.coords.longitude);
  // })
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

  handleModal() {
    alert('Hey, Eric!');
  }

  render() {

    const markers = this.state.addresses.map((address) => (
        <Marker  key={address.id} onClick={this.onMarkerClick}
          icon = "https://img.icons8.com/material/50/fa314a/charity.png"
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

          zoom={15}
          onClick={this.onMapClicked}
          initialCenter= {{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          center={{
            lat: this.props.address.lat,
            lng: this.props.address.lng
          }}
          style={style} containerStyle={containerStyle}
          handleModal={this.props.handleModal}
        >
        {markers}
          <InfoWindow
            ref={this.myRef}
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onOpen={e => {this.onInfoWindowOpen(this.props, e);}}>
              <h6>{this.state.selectedPlace.name}</h6>
              <p>{this.state.selectedPlace.address}</p>
              <div id="iwc"/>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer)
