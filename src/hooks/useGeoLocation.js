import { useEffect } from "react";
import { useState } from "react";

export default function useGeoLocation() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    function onSuccess(e) {
      setLoading(false);
      setError(null);
      setData(e.coords);
    }
    function onError(e) {
      setLoading(true);
      setError(e);
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  return { data, loading, error };
}
