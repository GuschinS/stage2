(()=>{var t={427:()=>{var t=document.querySelector("body"),e=document.createElement("main"),n=document.createElement("div"),a=document.createElement("div"),r=document.createElement("h1"),o=document.createElement("div"),s=document.createElement("button"),c=document.createElement("button"),l=document.createElement("div"),u=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),m=document.createElement("button"),p=document.createElement("button"),v=document.createElement("button"),f=document.createElement("button"),L=document.createElement("button"),b=document.createElement("button"),y=document.createElement("div"),g=document.createElement("div"),x=document.createElement("span"),E=document.createElement("h2");r.innerHTML="Gem Puzzle",l.classList="moves",l.textContent="Moves: 0",u.classList="volume",u.classList.add("mute"),i.className="timer-display",i.textContent="00 : 00 : 00",o.classList="button-container stop",s.classList="button-start start",s.innerHTML="start",c.classList="button-stop display-none",c.innerHTML="pause",a.classList="control-container",a.append(l),a.append(u),a.append(i),o.append(s),o.append(c),n.classList="container",d.classList="field-selection",m.classList="button-three",m.textContent="3 X 3",p.classList="button-four active",p.textContent="4 X 4",v.classList="button-fife",v.textContent="5 X 5",f.classList="button-six",f.textContent="6 X 6",L.classList="button-seven",L.textContent="7 X 7",b.classList="button-eight",b.textContent="8 X 8",x.classList="pop-up-close-button",g.classList="game-over-pop-up",y.classList="game-over-background",d.append(m),d.append(p),d.append(v),d.append(f),d.append(L),d.append(b),e.append(r),e.append(a),e.append(n),e.append(d),e.append(o),g.append(x),g.append(E),y.append(g),t.append(e),t.append(y)},272:()=>{var t=document.querySelector(".game-over-background"),e=document.querySelector(".pop-up-close-button"),n=function(){t.classList.toggle("open"),document.location.reload()};e&&(e.addEventListener("click",n),t.addEventListener("click",(function(e){e.target===t&&n()})))}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var a=e.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{"use strict";n(427);var t=0;function e(e){for(var n=0,a=0,r=0;r<e.length;r++)for(var o=0;o<e[r].length;o++){16===Number(e[r][o])&&(a=r+1);for(var s=[o+1];s<e[r].length;s++)Number(e[r][o])>Number(e[r][s])&&n++}return t=n+a}const a=n.p+"assets/81b02539252f126fac04.mp3",r=n.p+"assets/3d7d8d74d477d0419592.mp3";var o=document.querySelector(".container"),s=document.querySelector(".timer-display"),c=document.querySelector(".volume"),l=document.querySelector(".button-container"),u=l.querySelector(".button-start"),i=l.querySelector(".button-stop"),d=document.querySelector(".game-over-background"),m=document.querySelector(".moves"),p=document.querySelector("h2"),v=new Array(16).fill(0).map((function(t,e){})),f=0,L=null,b=0,y=0,g=0,x=0;function E(){1e3==(b+=10)&&(b=0,60==++y&&(y=0,60==++g&&(g=0,x++)));var t=x<10?"0"+x:x,e=g<10?"0"+g:g,n=y<10?"0"+y:y;s.textContent=" ".concat(t," : ").concat(e," : ").concat(n)}!function(){for(var t in v){var e=document.createElement("button");e.classList="item",e.dataset.matrixId=Number(t)+1,e.innerHTML=Number(t)+1,o.append(e)}}();var h=Array.from(o.querySelectorAll(".item")),S=q(h.map((function(t){return t.dataset.matrixId})));w(S);var C=function(){"button-start start"===u.classList.value?(u.classList.remove("start"),u.classList.add("reset"),u.textContent="reset",l.classList.remove("stop"),o.classList.add("play"),i.classList.remove("display-none")):"button-start"===u.classList.value&&(u.classList.add("reset"),u.textContent="reset",l.classList.remove("stop"),o.classList.add("play"),i.classList.remove("display-none"))};function q(t){for(var e=[[],[],[],[]],n=0,a=0,r=0;r<t.length;r++)n>=4&&(a++,n=0),e[a][n]=t[r],n++;return e}function w(t){for(var e=0;e<t.length;e++)for(var n=0;n<t[e].length;n++){var a=t[e][n];M(h[a-1],n,e)}}function M(t,e,n){t.style.transform="translate3D(".concat(100*e,"%, ").concat(100*n,"%, 0)")}function N(t){return t.map((function(t){return{value:t,sort:Math.random()}})).sort((function(t,e){return t.sort-e.sort})).map((function(t){return t.value}))}function k(t,e){for(var n=0;n<e.length;n++)for(var a=0;a<e[n].length;a++)if(e[n][a]==t)return{x:a,y:n};return null}i.addEventListener("click",(function(){u.classList.remove("reset"),u.textContent="start",i.classList.add("display-none"),l.classList.add("stop"),o.classList.remove("play"),clearInterval(L)})),u.addEventListener("click",(function(){if("button-start"===u.classList.value)null!==L&&(clearInterval(L),C()),L=setInterval(E,10);else if("button-start reset"===u.classList.value||"button-start start"===u.classList.value){C();var n=N(S.flat());for(e(S=q(n));t%2!=0;){var a=N(S.flat());e(S=q(a))}w(S),null!==L&&(clearInterval(L),b=0,y=0,g=0,x=0),L=setInterval(E,10);var r=document.querySelector(".moves");f=0,r.textContent="Moves: ".concat(f),o.classList.add("play")}})),o.addEventListener("click",(function(t){var e,n,o,l,u=t.target.closest("button"),i=k(Number(u.dataset.matrixId),S),v=k(16,S);if(e=i,n=v,o=Math.abs(e.x-n.x),l=Math.abs(e.y-n.y),1!==o&&1!==l||e.x!==n.x&&e.y!==n.y)"volume mute"!=c.classList.value&&new Audio(r).play();else{!function(t,e,n){var a=n[t.y][t.x];n[t.y][t.x]=n[e.y][e.x],n[e.y][e.x]=a}(v,i,S),w(S),f+=1,m.textContent="Moves: ".concat(f);var L=new Audio(a);JSON.stringify(["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"])==JSON.stringify(S.flat())&&(d.classList.toggle("open"),p.textContent="Hooray! You solved the puzzle in ".concat(s.textContent," and ").concat(f," moves!")),"volume mute"!=c.classList.value&&L.play()}})),c.addEventListener("click",(function(){c.classList.toggle("mute"),c.classList.toggle("no-mute")})),n(272)})()})();
//# sourceMappingURL=main.c9f139bee41593d2f5bc.js.map