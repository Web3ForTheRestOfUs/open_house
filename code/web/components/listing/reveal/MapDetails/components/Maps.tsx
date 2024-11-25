// // components/Map.tsx
// import React from 'react';
// // import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const mapContainerStyle = {
//   width: '100%',
//   height: '400px',
// };

// const defaultCenter = {
//   lat: 0, // Default latitude if location is not found
//   lng: 0, // Default longitude if location is not found
// };

// type MapProps = {
//   location: string;
// };

// const Map: React.FC<MapProps> = ({ location }) => {
//   const [coordinates, setCoordinates] = React.useState(defaultCenter);

//   React.useEffect(() => {
//     const geocodeLocation = async () => {
//       const geocoder = new window.google.maps.Geocoder();
//       geocoder.geocode({ address: location }, (results, status) => {
//         if (status === 'OK' && results[0]) {
//           const { lat, lng } = results[0].geometry.location;
//           setCoordinates({ lat: lat(), lng: lng() });
//         } else {
//           console.error('Geocode error:', status);
//         }
//       });
//     };

//     if (window.google) {
//       geocodeLocation();
//     }
//   }, [location]);

//   return (
//     <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={coordinates}
//         zoom={15}
//       >
//         <Marker position={coordinates} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Map;


