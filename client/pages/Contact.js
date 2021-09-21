/*   import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import ReactDOM from 'react-dom';
import 'leaflet/dist/leaflet.css';
//const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet

export default class SimpleExample extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

 */
///ReactDOM.render(<SimpleExample />, document.getElementById('container'))  
/*   import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
//import * as parkData from "./data/skateboard-parks.json";
import 'leaflet/dist/leaflet.css';
 import L from 'leaflet';


export default function SimpleExample() {
 

delete L.Icon.Default.prototype._getIconUrl;
const customMarker = new L.icon({
  iconUrl: './images/marker-icon.png',
  iconSize: [35, 46],
  iconAnchor: [17, 46]
}) ;
   return (
    <Map center={[36.846504, 10.198442]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    
    <Marker position={[36.846504, 10.198442]}
    icon={customMarker}
    >
    <Popup>
      A pretty CSS3 popup. <br/> Easily customizable.
    </Popup>
  </Marker>
  </Map>
  );
} */  /* import * as React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
const customMarker = new L.icon({
  iconUrl: './images/marker-icon.png',
  iconSize: [35, 46],
  iconAnchor: [17, 46]
}) ;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('./leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('./leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('./leaflet/dist/images/marker-shadow.png')
});  

export const MyMapComponent = (props) => {
    return (
        <Map center={props.center} zoom={props.zoom} style={{height: '350px'}}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
          />
          <Marker position={props.center}
          icon={customMarker} 
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
    )
} */

import React, { Component } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
let osm ;
let mqi;
let overlays;
let xx;
export default class SimpleExample extends Component {
 constructor(){
   super()
   this.state = {
    markers: [[36.875248,10.2035093],[36.8692743,10.1834115],[36.8685898,10.2100727],[36.8694889,10.1955754]],
    center: {
       lat: 36.846504,
      lng: 10.198442
    },
    zoom: 13,
    draggable: true,
    markerData: []
  };
 }
  
  addMarker = event => {
    const { markerData } = this.state;
    const coords = event.latlng;
    this.setState({
      markerData: [...this.state.markerData, coords]
    });
  };

  updateMarker = event => {
    console.log(this.state.markerData);
    const latLng = event.target.getLatLng(); //get marker LatLng
    const markerIndex = event.target.options.marker_index; //get marker index
    //update
    this.setState(prevState => {
      const markerData = [...prevState.markerData];
      markerData[markerIndex] = latLng;
      return { markerData: markerData };
    });
  };

  render() {
    return (
      <Map
        center={this.state.center}
        zoom={this.state.zoom}
        onClick={this.addMarker}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.state.markers.map((position, idx) => 
          <Marker key={`marker-${idx}`} position={position}
         /*  draggable={this.state.draggable}
          onDragend={this.updateMarker} */
          />
         )}
      </Map>
    );
  }
}
