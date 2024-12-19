import { useQuery } from "@tanstack/react-query";
import { fetchLocationByCoords, fetchSearchParam } from "../services/api";

export function useFetchLocation(geoData, searchQuery) {
  const { data, loading, error } = useQuery({
    queryKey: ["weather", searchQuery || geoData],
    queryFn: () =>
        searchQuery
        ? fetchSearchParam(searchQuery)
        : fetchLocationByCoords(geoData),
    enabled: (!!geoData?.longitude && !!geoData?.latitude) || !!searchQuery,
  });
  return { data, loading, error };
}
