(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function w(r,e,n){let t;document.addEventListener("click",o=>{o.target.matches(e)&&(t=setInterval(()=>{const i=new Date().toLocaleTimeString();document.querySelector(r).innerHTML=`<h3>${i}</h3>`},1e3),o.target.disabled=!0),o.target.matches(n)&&(clearInterval(t),document.querySelector(e).disabled=!1)})}function v(r,e,n){let t;const o=document.createElement("audio");o.src=r,document.addEventListener("click",i=>{i.target.matches(e)&&(t=setTimeout(()=>{o.play()},1e3),i.target.disabled=!0),i.target.matches(n)&&(clearTimeout(t),o.pause(),o.currentTime=0,document.querySelector(e).disabled=!1)})}function y(r,e,n){document.addEventListener("click",t=>{(t.target.matches(r)||t.target.matches(`${r} *`))&&(document.querySelector(e).classList.toggle("is-active"),document.querySelector(r).classList.toggle("is-active")),t.target.matches(n)&&(document.querySelector(e).classList.remove("is-active"),document.querySelector(r).classList.remove("is-active"))})}const u=document;let d=0,m=0;function L(r,e,n){const t=u.querySelector(e),o=u.querySelector(n),i=t.getBoundingClientRect(),a=o.getBoundingClientRect();switch(r.keyCode){case 37:r.preventDefault(),i.left>a.left&&d--;break;case 38:r.preventDefault(),i.top>a.top&&m--;break;case 39:r.preventDefault(),i.right<a.right&&d++;break;case 40:r.preventDefault(),i.bottom<a.bottom&&m++;break}t.style.transform=`translate(${d*10}px,${m*10}px)`}function b(r,e,n){const t=document.getElementById(r),o=new Date(e).getTime(),i=setInterval(()=>{const a=new Date().getTime(),c=o-a,l=Math.floor(c/(1e3*60*60*24)),g=("0"+Math.floor(c%(1e3*60*60*24)/(1e3*60*60))).slice(-2),h=("0"+Math.floor(c%(1e3*60*60)/(1e3*60))).slice(-2),p=("0"+Math.floor(c%(1e3*60)/1e3)).slice(-2);t.innerHTML=`<h3>${l} days and ${g}:${h}:${p}</h3>`,c<0&&(clearInterval(i),t.innerHTML=`<h3>${n};</h3>`)},1e3)}function k(r){const e=document.querySelector(r);window.addEventListener("scroll",n=>{(window.pageYOffset||document.documentElement.scrollTop)>700?e.classList.remove("hidden"):e.classList.add("hidden")}),document.addEventListener("click",n=>{n.target.matches(r)&&window.scrollTo({behavior:"smooth",top:0})})}function $(r,e){const n=document.querySelector(".change-theme-btn"),t=document.querySelectorAll("[data-theme]"),o="🌙",i="☀️",a=()=>{t.forEach(l=>l.classList.remove(e)),n.textContent=i,localStorage.setItem("theme","light")},c=()=>{t.forEach(l=>l.classList.add(e)),n.textContent=o,localStorage.setItem("theme","dark")};document.addEventListener("click",l=>{l.target.matches(r)&&(n.textContent===i?c():a())}),document.addEventListener("DOMContentLoaded",l=>{localStorage.getItem("theme")===null&&localStorage.setItem("theme","dark"),localStorage.getItem("theme")==="light"&&a(),localStorage.getItem("theme")==="dark"&&c()})}function f(r,e,n,t){const o=window.matchMedia(e),i=a=>{a.matches?document.getElementById(r).innerHTML=`${t}`:document.getElementById(r).innerHTML=`${n}`};o.addEventListener("change",i),i(o)}function E(r){const e=document.getElementById(r);let n;document.addEventListener("submit",t=>{t.target===e&&(t.preventDefault(),n=window.open(e.direccion.value,"tester",`innerWidth=${e.ancho.value}, innerHeight=${e.alto.value}`))}),document.addEventListener("click",t=>{t.target===e.cerrar&&n.close()})}const M=document,T=navigator,s=T.userAgent;function x(r){const e=M.getElementById(r),n={android:()=>s.match(/android/i),ios:()=>s.match(/iphone|ipad|ipod/i),windows:()=>s.match(/windows phone/i),any:function(){return this.android()||this.ios()||this.windows()}},t={linux:()=>s.match(/linux/i),mac:()=>s.match(/mac os/i),windows:()=>s.match(/windows nt/i),any:function(){return this.linux()||this.mac()||this.windows()}},o={chrome:()=>s.match(/chrome/i),firefox:()=>s.match(/firefox/i),safari:()=>s.match(/safari/i),opera:()=>s.match(/opera|opera mini/i),any:function(){return this.chrome()||this.firefox()||this.safari()||this.opera()}};e.innerHTML=`
  <ul>
    <li>User Agent:<br>${s}</li>
    <li>Plataforma:<br>${n.any()?n.any():t.any()}</li>
    <li>Navegador:<br>${o.any()}</li>
  </ul>
  `,o.chrome()&&(e.innerHTML+="<p><mark>Este contenido solo se ve en Chrome</mark></p>"),o.firefox()&&(e.innerHTML+="<p><mark>Este contenido solo se ve en Firefox</mark></p>"),t.linux()&&(e.innerHTML+="<p><mark>Descarga nuestro software para Linux</mark></p><br><a>Descargar</a>"),t.mac()&&(e.innerHTML+="<p><mark>Descarga nuestro software para Mac Os</mark></p>"),t.windows()&&(e.innerHTML+="<p><mark>Descarga nuestro software para Windows</mark></p>")}const S=document.getElementById("detection-network");S.textContent="Connection Restored";function C(){const r=()=>{const e=document.createElement("div");navigator.onLine?(e.textContent="Connection Restored",e.classList.add("online"),e.classList.remove("offline")):(e.textContent="Lost Connection",e.classList.add("offline"),e.classList.remove("online")),document.body.insertAdjacentElement("afterbegin",e),setTimeout(()=>{document.body.removeChild(e)},2e3)};window.addEventListener("online",e=>r()),window.addEventListener("offline",e=>r())}function D(r){const e=document.getElementById(r);navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(n=>{e.srcObject=n,e.play()}).catch(n=>{e.insertAdjacentHTML("beforebegin",`<p><mark>${n}</mark></p>`)})}function I(r){const e=document.getElementById(r),n={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},t=i=>{const a=i.coords;e.innerHTML=`
      <p>Tu posision actual es:</p>
      
      <p>Latitud:<b> ${a.latitude}</b></p>
      <p>Longitud:<b> ${a.longitude}</b></p>
      <p>Presicion:<b> ${a.accuracy}</b> metros</p>
     
      <a href="http://www.google.com/maps/@${a.latitude},${a.longitude},15z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `},o=i=>{e.innerHTML=`<p><mark>Error ${i.code}:${i.message}</mark></p>`,console.log(`Error ${i.code}:${i.message}`)};navigator.geolocation.getCurrentPosition(t,o,n)}function H(r,e){document.addEventListener("keyup",n=>{n.target.matches(r)&&(n.key==="Escape"&&(n.target.value=""),document.querySelectorAll(e).forEach(t=>{t.textContent.toLowerCase().includes(n.target.value.toLowerCase())?t.classList.remove("filter"):t.classList.add("filter")}))})}function q(r,e){const n=document.createElement("p"),t=document.getElementById("section11"),o=i=>{const a=document.querySelectorAll(i),c=Math.floor(Math.random()*a.length);return`El ganador es: ${a[c].textContent} `};document.addEventListener("click",i=>{if(i.target.matches(r)){const a=o(e);n.textContent=a,t.appendChild(n)}})}function B(){const r=document.querySelector(".slider-btns .next"),e=document.querySelector(".slider-btns .prev"),n=document.querySelectorAll(".slider-slide");let t=0;document.addEventListener("click",o=>{o.target===e&&(o.preventDefault(),n[t].classList.remove("active"),t--,t<0&&(t=n.length-1),n[t].classList.add("active")),o.target===r&&(o.preventDefault(),n[t].classList.remove("active"),t++,t>=n.length&&(t=0),n[t].classList.add("active"))})}document.addEventListener("DOMContentLoaded",r=>{y(".panel-btn",".panel-aside",".menu a"),w("#digital-clock","#activate-clock","#disable-clock"),v("../public/sounds/alarm_clock.ogg ","#activate-alarm","#disable-alarm"),b("countdown","Jan 01,2024 00:00:00","Happy new year!!"),k(".scroll-top-btn"),f("youtube","(min-width: 1024px)",`<a href="https://www.youtube.com/watch?v=G4U_JMnHf3M" target='_blank' rel='noopener' >Ver
  Video</a>`,'<iframe width="560" height="315" src="https://www.youtube.com/embed/G4U_JMnHf3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'),f("gmaps","(min-width: 1024px)",`<a href="https://goo.gl/maps/eW9PD456yoEJkG8X6" target='_blank' rel='noopener' >Ver Mapa</a>`,'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15489.621780434356!2d-54.4500008!3d-25.6666694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6ea6068b8edff%3A0xa7f4a990535e7279!2sCataratas%20del%20Iguaz%C3%BA%2C%20Misiones!5e1!3m2!1ses!2sar!4v1686269608434!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'),E("responsive-tester"),x("user-device"),D("webcam"),I("geolocation"),H(".card-filter",".card"),q("#winner-btn",".player"),B()});document.addEventListener("keydown",r=>{L(r,".ball",".stage")});$(".change-theme-btn","theme-mode");C();
