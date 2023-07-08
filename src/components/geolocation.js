export default function getGeoLocation(id) {
  const $id = document.getElementById(id)

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }

  const success = position => {
    // console.log(position)
    const coords = position.coords

    $id.innerHTML = `
      <p>Tu posision actual es:</p>
      
      <p>Latitud:<b> ${coords.latitude}</b></p>
      <p>Longitud:<b> ${coords.longitude}</b></p>
      <p>Presicion:<b> ${coords.accuracy}</b> metros</p>
     
      <a href="http://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `
  }

  const error = (error) => {
    $id.innerHTML = `<p><mark>Error ${error.code}:${error.message}</mark></p>`
    console.log(`Error ${error.code}:${error.message}`)
  }

  navigator.geolocation.getCurrentPosition(success, error, options)
}
