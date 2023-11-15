export function getNumberLikes(data) {
    return data.edge_media_preview_like.count
}

export function processTimestamp(data) {

  // Convert timestamp to milliseconds
  const timestampMs = data.taken_at_timestamp * 1000;
  
  // Create a Date object with the timestamp
  const date = new Date(timestampMs);
  
  // Get the current date
  const currentDate = new Date();
  
  // Calculate the difference in milliseconds
  const differenceMs = currentDate - date;
  
  // Calculate the difference in days
  const differenceDays = Math.floor(differenceMs / (24 * 60 * 60 * 1000));
  
  // Check if the date is less than 1 week from today
  if (differenceDays < 7) {
    if (differenceDays > 1) {
      return `${differenceDays} days ago`.toUpperCase();
    } else if (differenceDays === 1) {
      return `${differenceDays} day ago`.toUpperCase();
    }
  } else if (date.getFullYear() === currentDate.getFullYear()) {
    // Check if the date is in the same year
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    return`${day} ${month}`.toUpperCase();
  } else {
    // return the full date
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`.toUpperCase();
  }
}