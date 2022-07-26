import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback, useEffect } from "react";
import MapGL, { Marker, NavigationControl } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  LineChat,
  MapMarkers,
  MapOptions,
  RightSidebar,
  WeatherReport,
} from "../components";

const MAPBOX_TOKEN = `${process.env.REACT_APP_MAPBOX_TOKEN}`;

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 28.640623,
    longitude: 77.420719,
    zoom: 4,
  });
  const mapRef = useRef();
  const [userLocation, setUserLocation] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position.coords.latitude && position.coords.longitude) {
          setUserLocation(() => ({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }));
          setViewport((prevView) => ({
            ...prevView,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }));
        }
      });
    }
  }, []);
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  return (
    <div>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/ianuragsharma/cl5v5pmhz001m14lckmbw976i"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
        <NavigationControl
          className="navigation-control"
          position="top-right"
        />
        <div className="avatar-container">
          <img
            alt="profile-picture"
            className="avatar "
            src="https://element-ui.netlify.app/assets/avatar.svg"
          />
        </div>
        {userLocation && (
          <Marker
            longitude={userLocation.longitude}
            latitude={userLocation.latitude}
          >
            <FaMapMarkerAlt color="red" />
          </Marker>
        )}
      </MapGL>
      <RightSidebar />
      <WeatherReport />
      <MapOptions />
      <MapMarkers />
      <LineChat />
    </div>
  );
};

export default Map;
