(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function h(o,r,n){let c;document.addEventListener("click",e=>{e.target.matches(r)&&(c=setInterval(()=>{const t=new Date().toLocaleTimeString();document.querySelector(o).innerHTML=`<h3>${t}</h3>`},1e3),e.target.disabled=!0),e.target.matches(n)&&(clearInterval(c),document.querySelector(r).disabled=!1)})}function y(o,r,n){let c;const e=document.createElement("audio");e.src=o,document.addEventListener("click",t=>{t.target.matches(r)&&(c=setTimeout(()=>{e.play()},1e3),t.target.disabled=!0),t.target.matches(n)&&(clearTimeout(c),e.pause(),e.currentTime=0,document.querySelector(r).disabled=!1)})}function p(o,r,n){document.addEventListener("click",c=>{(c.target.matches(o)||c.target.matches(`${o} *`))&&(document.querySelector(r).classList.toggle("is-active"),document.querySelector(o).classList.toggle("is-active")),c.target.matches(n)&&(document.querySelector(r).classList.remove("is-active"),document.querySelector(o).classList.remove("is-active"))})}const u=document;let s=0,l=0;function v(o,r,n){const c=u.querySelector(r),e=u.querySelector(n),t=c.getBoundingClientRect(),i=e.getBoundingClientRect();switch(o.keyCode){case 37:o.preventDefault(),t.left>i.left&&s--;break;case 38:o.preventDefault(),t.top>i.top&&l--;break;case 39:o.preventDefault(),t.right<i.right&&s++;break;case 40:o.preventDefault(),t.bottom<i.bottom&&l++;break}c.style.transform=`translate(${s*10}px,${l*10}px)`}function L(o,r,n){const c=document.getElementById(o),e=new Date(r).getTime(),t=setInterval(()=>{const i=new Date().getTime(),a=e-i,d=Math.floor(a/(1e3*60*60*24)),m=("0"+Math.floor(a%(1e3*60*60*24)/(1e3*60*60))).slice(-2),f=("0"+Math.floor(a%(1e3*60*60)/(1e3*60))).slice(-2),g=("0"+Math.floor(a%(1e3*60)/1e3)).slice(-2);c.innerHTML=`<h3>${d} days and ${m}:${f}:${g}</h3>`,a<0&&(clearInterval(t),c.innerHTML=`<h3>${n};</h3>`)},1e3)}document.addEventListener("DOMContentLoaded",o=>{p(".panel-btn",".panel-aside",".menu a"),h("#digital-clock","#activate-clock","#disable-clock"),y("../public/alarm_clock.ogg ","#activate-alarm","#disable-alarm"),L("countdown","Jan 01,2024 00:00:00","Happy new year!!")});document.addEventListener("keydown",o=>{v(o,".ball",".stage")});