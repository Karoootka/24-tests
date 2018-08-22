const formatDate = (timeInSeconds) => {
  if (timeInSeconds === undefined) {
    return `0s`;
  }

  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
  const seconds = Math.floor(timeInSeconds - (hours * 3600) - (minutes * 60));

  if ( hours <= 0 ) {
    if (minutes <= 0) {
      if (seconds <= 0) {
        return `0s`;
      }
      return `${seconds}s`;
    }

    if (seconds <= 0) {
      return `${minutes}m`;
    }
    return `${minutes}m ${seconds}s`;
  }

  if (seconds <= 0) {
    if (minutes <= 0) {
      return `${hours}h`;
    } else {
      return `${hours}h ${minutes}m`;
    }
  }

  if (minutes <= 0) {
    return `${hours}h ${seconds}s`;
  }

  return `${hours}h ${minutes}m ${seconds}s`;
}

module.exports = formatDate;
