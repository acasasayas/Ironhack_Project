function minToTime(min) {
  let hours = Math.floor(min / 60);
  hours = hours < 10 ? '0' + hours : '' + hours;
  let minutes = Math.floor(min % 60);
  minutes = minutes < 10 ? '0' + minutes : '' + minutes;
  return hours + ":" + minutes;
}

function Gym(gym){
  if (gym) {
    return '<i class="material-icons md-light">fitness_center</i>'
  }
  else {
    return '<i class="material-icons md-light md-inactive">fitness_center</i>'
  }
}

function Restaurant(restaurant){
  if (restaurant) {
    return '<i class="material-icons md-light">restaurant</i>'
  }
  else {
    return '<i class="material-icons md-light md-inactive">restaurant</i>'
  }
}
function Pool(pool){
  if (pool) {
    return '<i class="material-icons md-light">pool</i>'
  }
  else {
    return '<i class="material-icons md-light md-inactive">pool</i>'
  }
}
