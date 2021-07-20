import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";




export class MapContainer extends Component {
      constructor(props){
        super(props);
        this.state = {
          places: [
            {
              name: "Manila",
              title: "Manila",
              lat: 34.84898779374117,
              lng: -82.39700009882739,
              id: 1,
            },
            {
              name: "Taguig",
              title: "Taguig",
              lat: this.props.address.lat,
              lng: this.props.address.lng,
              id: 2,
            },
          ]
        }
      }


  onMapReady = (mapProps, map) => {
    let coords = [];
    let waypoints = [];
    //put data from config file in an array
    {
      this.state.places.map((place) => coords.push({ lat: place.lat, lng: place.lng }));
    }

    //instantiate directions service and directions renderer
    const directionsService = new window.google.maps.DirectionsService();
    const directionsDisplay = new window.google.maps.DirectionsRenderer();
    //put directions renderer to render in the map
    directionsDisplay.setMap(map);
    //Getting the first coordinate in the array as the start/origin
    let start = { lat: coords[0].lat, lng: coords[0].lng };
    //Getting the last coordinate in the array as the end/destination
    let end = {
      lat: coords[coords.length - 1].lat,
      lng: coords[coords.length - 1].lng,
    };

    //putting all the coordinates between the first and last coordinate from the array as the waypoints
    for (let i = 1; i < coords.length - 1; i++) {
      waypoints.push({
        location: { lat: coords[i].lat, lng: coords[i].lng },
        stopover: true,
      });
    }

    // directions requests

    let request = {
      origin: start,
      waypoints: waypoints,
      destination: end,
      travelMode: "DRIVING",
    };
    //show results in the directionsrenderer
    directionsService.route(request, function (result, status) {
      if (status == "OK") {
        directionsDisplay.setDirections(result);
      }
    });

    //setting the autocomplete input
    let card = document.getElementById("pac-card");
    let input = document.getElementById("pac-input");
    map.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(card);
    let autocomplete = new window.google.maps.places.Autocomplete(input);

    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo("bounds", map);

    // Set the data fields to return when the user selects a place.
    autocomplete.setFields(["address_components", "geometry", "icon", "name"]);

    //listener for the places input
    autocomplete.addListener("place_changed", function () {
      console.log(waypoints);
      let place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      //Putting the previous last coordinate in the array to be part of the waypoint
      waypoints.push({
        location: {
          lat: coords[coords.length - 1].lat,
          lng: coords[coords.length - 1].lng,
        },
        stopover: true,
      });

      //putting the Place Autocomplete coordinate result in the coords array
      coords.push({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
      //putting the Place Autocomplete coordinate result the value of the end/destination
        end = place.geometry.location;

      //changing  request
      request = {
        origin: start,
        waypoints: waypoints,
        destination: end,
        travelMode: "DRIVING",
      };
      //creating new directions request
      directionsService.route(request, function (result, status) {
        if (status == "OK") {
          directionsDisplay.setDirections(result);
        }
      });
    });
  };


  render() {
    //if (!this.props.loaded) return <div>Loading...</div>;
      console.log(this.props.address)
    return (
      <div>
        <Map
          initialCenter={{ lat: 14.6091, lng: 121.0223 }}
          google={this.props.google}
          onClick={this.onMapClicked}
          onReady={this.onMapReady}
          style={{ height: "91%", width: "93%" }}
          zoom={8}
        ></Map>
        <div className="pac-card" id="pac-card">
          <div>
            <div id="title">Add new point</div>
            <div id="pac-container">
              <input
                id="pac-input"
                type="text"
                placeholder="Enter a location"
              />
            </div>
          </div>
        </div>
        <div style={{ width: 250, height: 250 }} id={this.props.id} />
        <div id="infowindow-content">
          <img src="" width="16" height="16" id="place-icon" />
          <span id="place-name" className="title"></span>
          <br />
          <span id="place-address"></span>
          <br />
          <span id="place-coord"></span>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
  version: "3.40",
})(MapContainer);
