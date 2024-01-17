// Using the time and the distance inserted by the user let calculate the speed = d/t
function calcSpeed() {
  const distance = parseFloat(prompt("Please enter the distance:"));
  const time = parseFloat(prompt("Please enter the time:"));
  const speed = distance / time;
  //console.log(speed);
  const p = (document.getElementById("speedResult").innerHTML = speed);
}

// Calculate the distance; Distance = Speed * time
function calcDistance() {
  const speed = parseFloat(prompt("Please enter the speed:"));
  const time = parseFloat(prompt("Please enter the time:"));
  const distance = speed * time;
  //console.log(speed);
  const p = (document.getElementById("distanceResult").innerText = distance);
}

// Calculate the time; Time = distance / speed
function calcTime() {
  const distance = parseFloat(prompt("Please enter the distance:"));
  const speed = parseFloat(prompt("Please enter the speed:"));
  const time = distance / speed;
  //console.log(speed);
  const p = (document.getElementById("timeResult").innerText = time);
}
