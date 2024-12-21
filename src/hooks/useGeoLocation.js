import { useState, useEffect } from "react";

export default function useGeoLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError({ message: "Geolocation is not supported by this browser." });
      setLoading(false);
      return; // Early exit if geolocation is not supported
    }

    const onSuccess = (position) => {
      setLoading(false);
      setError(null);
      setLocation(position.coords);
    };

    const onError = (error) => {
      setLoading(false); // Set loading to false on error
      setError(error);
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.error("User denied the request for Geolocation.");
          // IMPORTANT: Display a message to the user explaining why location is needed and how to enable it in their browser settings
          break;
        case error.POSITION_UNAVAILABLE:
          console.error("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.error("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          console.error("An unknown error occurred.");
          break;
      }
    };

    const watchId = navigator.geolocation.watchPosition(onSuccess, onError); // Use watchPosition

    return () => navigator.geolocation.clearWatch(watchId); // Cleanup on unmount
  }, []);

  return { data: location, loading, error };
}