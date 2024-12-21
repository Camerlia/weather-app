export function setDateFormat() {
  const setDate = new Date();

  const options = {
    // More common name for formatting options
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Explicitly set to 12-hour format if needed
  };

  return setDate.toLocaleString("en-US", options);
}
export function getShortDateFormat(timestamp) {
  const date = new Date(timestamp * 1000);

  const options = {
    // More common name for formatting options

    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  return date.toLocaleString("en-US", options);
}
