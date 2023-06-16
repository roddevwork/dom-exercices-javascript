const d = document
const n = navigator
const ua = n.userAgent

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id)
  const isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/iphone|ipad|ipod/i),
    windows: () => ua.match(/windows phone/i),
    any: function () {
      return this.android() || this.ios() || this.windows()
    }
  }
  const isDesktop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows()
    }
  }
  const isBrowser = {
    chrome: () => ua.match(/chrome/i),
    firefox: () => ua.match(/firefox/i),
    safari: () => ua.match(/safari/i),
    opera: () => ua.match(/opera|opera mini/i),
    any: function () {
      return this.chrome() || this.firefox() || this.safari() || this.opera()
    }
  }
  // console.log(ua)
  // console.log(isMobile.android())
  // console.log(isMobile.ios())
  $id.innerHTML = `
  <ul>
    <li>User Agent:<br>${ua}</li>
    <li>Plataforma:<br>${isMobile.any() ? isMobile.any() : isDesktop.any()}</li>
    <li>Navegador:<br>${isBrowser.any()}</li>
  </ul>
  `
  // CONTENIDO EXCLUSIVO:
  if (isBrowser.chrome()) {
    $id.innerHTML += "<p><mark>Este contenido solo se ve en Chrome</mark></p>"
  }
  if (isBrowser.firefox()) {
    $id.innerHTML += "<p><mark>Este contenido solo se ve en Firefox</mark></p>"
  }
  if (isDesktop.linux()) {
    $id.innerHTML += "<p><mark>Descarga nuestro software para Linux</mark></p><br><a>Descargar</a>"
  }
  if (isDesktop.mac()) {
    $id.innerHTML += "<p><mark>Descarga nuestro software para Mac Os</mark></p>"
  }
  if (isDesktop.windows()) {
    $id.innerHTML += "<p><mark>Descarga nuestro software para Windows</mark></p>"
  }

  // REDIRECCIONES
  // if (isMobile.android()) {
  //   window.location.href = "http://jonmircha.com"
  // }
}
