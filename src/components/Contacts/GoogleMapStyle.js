import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google-map-style-1">
       <iframe className="google-map-style-1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14029.483630768522!2d77.061649213842!3d28.468374512073673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d5d4ce8ff1%3A0x55f38044cbcfba86!2sRam%20Mandir!5e0!3m2!1sen!2sin!4v1694065653560!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" title='map' referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
    );
  }
}

export default GoogleMapStyle;