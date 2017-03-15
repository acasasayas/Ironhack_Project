function minToTime(min) {
  let hours = Math.floor(min / 60);
  hours = hours < 10 ? '0' + hours : '' + hours;
  let minutes = Math.floor(min % 60);
  minutes = minutes < 10 ? '0' + minutes : '' + minutes;
  return hours + ":" + minutes;
}
