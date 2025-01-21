import { useEffect, useState } from "react";
import Axios from "axios";
import "../styles/FormStyle.scss";

const IPFinder = () => {
  return (
    <div>
      <h1>IP Address Finder</h1>
      <div>
        <div>
          <p>What is my IPV4 Address?</p>
          {/* answer */}
          <p>Appropriate Location</p>
          {/* answer */}
          <p>Internet Service Provider</p>
          {/* answer */}
        </div>
        <div>{/* Photo */}</div>
      </div>
    </div>
  );
};

const Map = ({ lat, lon }) => {
  // Viewport for map:
  const [Viewport, setViewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 14,
    bearing: 0,
    pitch: 0,
    width: "100%",
    height: "100%",
  });
  return <div></div>;
};

export default IPFinder;
