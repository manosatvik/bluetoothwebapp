document.getElementById("btn").addEventListener("click", function(){
  navigator.bluetooth.requestDevice({
    acceptAllDevices: true,
    optionalServices: ['battery_service']
  })
  .then(device => { /* ... */ })
  .catch(error => { console.log(error); });

});
