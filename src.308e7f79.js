parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vTx+":[function(require,module,exports) {

},{"./..\\..\\public\\fonts\\slkscr-webfont.eot":[["slkscr-webfont.3aa16c63.eot","sYxY"],"sYxY"],"./..\\..\\public\\fonts\\slkscr-webfont.woff":[["slkscr-webfont.33be3349.woff","vAWw"],"vAWw"],"./..\\..\\public\\fonts\\slkscr-webfont.ttf":[["slkscr-webfont.319f3cd3.ttf","F/5P"],"F/5P"],"./..\\..\\public\\fonts\\slkscr-webfont.svg":[["slkscr-webfont.3a0c61f8.svg","N4ns"],"N4ns"],"C:\\Users\\Kanika\\Desktop\\pong-starter-master\\src\\images\\got1.jpg":[["got1.32b6bcf3.jpg","52cR"],"52cR"]}],"Q9a9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PaddleOptions=exports.KEYS=exports.SVG_NS=void 0;var e="http://www.w3.org/2000/svg";exports.SVG_NS=e;var r={a:"a",z:"z",up:"ArrowUp",down:"ArrowDown",spaceBar:" "};exports.KEYS=r;var o={paddleWidth:8,paddleHeight:56,boardGap:10};exports.PaddleOptions=o;
},{}],"4oVX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../settings");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var s=function(){function i(t,n,s,h,u){var o=this,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"white",a=arguments.length>6?arguments[6]:void 0,d=arguments.length>7?arguments[7]:void 0;e(this,i),this.boardHeight=t,this.width=n,this.height=s,this.x=h,this.y=u,this.speed=10,this.score=0,this.colour=r,this.upKey=a,this.downKey=d,this.keyState={},document.addEventListener("keydown",function(t){o.keyState[t.key]=!0}),document.addEventListener("keyup",function(t){o.keyState[t.key]=!1})}return n(i,[{key:"up",value:function(){this.y=Math.max(0,this.y-this.speed)}},{key:"down",value:function(){this.y=Math.min(this.boardHeight-this.height,this.y+this.speed)}},{key:"render",value:function(e){this.keyState[t.KEYS.a]&&this.upKey===t.KEYS.a&&this.up(),this.keyState[t.KEYS.z]&&this.downKey===t.KEYS.z&&this.down(),this.keyState[t.KEYS.up]&&this.upKey===t.KEYS.up&&this.up(),this.keyState[t.KEYS.down]&&this.downKey===t.KEYS.down&&this.down();var i=document.createElementNS(t.SVG_NS,"rect");i.setAttributeNS(null,"fill",this.colour),i.setAttributeNS(null,"width",this.width),i.setAttributeNS(null,"height",this.height),i.setAttributeNS(null,"x",this.x),i.setAttributeNS(null,"y",this.y),e.appendChild(i)}}]),i}();exports.default=s;
},{"../settings":"Q9a9"}],"y/AE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../settings");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}var i=function(){function n(e,r,i){t(this,n),this.x=e,this.y=r,this.size=i}return r(n,[{key:"render",value:function(t,n){var r=document.createElementNS(e.SVG_NS,"text");r.setAttributeNS(null,"x",this.x),r.setAttributeNS(null,"y",this.y),r.setAttributeNS(null,"font-family",'"Silkscreen Web" , monotype'),r.setAttributeNS(null,"font-size",this.size),r.setAttributeNS(null,"fill","red"),r.textContent=n,t.appendChild(r)}}]),n}();exports.default=i;
},{"../settings":"Q9a9"}],"b6em":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../settings");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}var n=function(){function r(t,i){e(this,r),this.width=t,this.height=i}return i(r,[{key:"render",value:function(e){var r=document.createElementNS(t.SVG_NS,"rect");r.setAttributeNS(null,"fill","transparent"),r.setAttributeNS(null,"width",this.width),r.setAttributeNS(null,"height",this.height);var i=document.createElementNS(t.SVG_NS,"line");i.setAttributeNS(null,"x1",this.width/2),i.setAttributeNS(null,"y1",0),i.setAttributeNS(null,"x2",this.width/2),i.setAttributeNS(null,"y2",this.height),i.setAttributeNS(null,"stroke","white"),i.setAttributeNS(null,"stroke-dasharray","20,20"),i.setAttributeNS(null,"stroke-width","4"),i.setAttributeNS(null,"stroke-dashoffset","22"),e.appendChild(r),e.appendChild(i)}}]),r}();exports.default=n;
},{"../settings":"Q9a9"}],"aFhp":[function(require,module,exports) {
module.exports="/pong-project/pong-01.1b08b614.wav";
},{}],"gSQY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../settings"),i=s(require("../../public/sounds/pong-01.wav"));function s(t){return t&&t.__esModule?t:{default:t}}function e(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function h(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function r(t,i,s){return i&&h(t.prototype,i),s&&h(t,s),t}var o=function(){function s(t,h,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#7f7f7f";e(this,s),this.radius=t,this.boardWidth=h,this.boardHeight=r,this.direction=1,this.colour=o,this.ping=new Audio(i.default),this.reset()}return r(s,[{key:"reset",value:function(){for(this.x=this.boardWidth/2,this.y=this.boardHeight/2,this.vy=0;0===this.vy;)this.vy=Math.floor(10*Math.random()-5);this.vx=this.direction*(6-Math.abs(this.vy))}},{key:"wallCollision",value:function(){var t=this.x-this.radius<=0,i=this.x+this.radius>=this.boardWidth,s=this.y-this.radius<=0,e=this.y+this.radius>=this.boardHeight;t||i?this.vx=-this.vx:(s||e)&&(this.vy=-this.vy)}},{key:"paddleCollision",value:function(t,i){if(this.vx>0){if(this.x+this.radius>=i.x&&this.x+this.radius<=i.x+i.width&&this.y>=i.y&&this.y<=i.y+i.height){this.vx*=-1,this.ping.play(),i.height+=10,t.height-=5;var s=i.colour;i.colour="pink",setTimeout(function(){i.colour=s},200)}}else if(this.x-this.radius<=t.x+t.width&&this.x-this.radius>=t.x&&this.y>=t.y&&this.y<=t.y+t.height){this.vx*=-1,t.height+=10,i.height-=5,this.ping.play();var e=t.colour;t.colour="orange",setTimeout(function(){t.colour=e},200)}}},{key:"goal",value:function(t){t.score<=10&&(t.score++,this.reset()),10===t.score&&alert("GAME OVER")}},{key:"render",value:function(i,s,e){this.x+=this.vx,this.y+=this.vy,this.wallCollision(),this.paddleCollision(s,e);var h=document.createElementNS(t.SVG_NS,"circle");h.setAttributeNS(null,"r",this.radius),h.setAttributeNS(null,"cx",this.x),h.setAttributeNS(null,"cy",this.y),h.setAttributeNS(null,"fill",this.colour),i.appendChild(h);var r=this.x+this.radius>=this.boardWidth,o=this.x-this.radius<=0;r?(this.goal(s),this.direction=1):o&&(this.goal(e),this.direction=-1)}}]),s}();exports.default=o;
},{"../settings":"Q9a9","../../public/sounds/pong-01.wav":"aFhp"}],"ewjB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../settings");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}var i=function(){function n(e,r,i){t(this,n),this.x=e,this.y=r,this.size=i}return r(n,[{key:"render",value:function(t,n){var r=document.createElementNS(e.SVG_NS,"text");r.setAttributeNS(null,"x",this.x),r.setAttributeNS(null,"y",this.y),r.setAttributeNS(null,"fill","red"),r.setAttributeNS(null,"font-size",this.size),r.setAttributeNS(null,"font-family","Silkscreen Web, monospace"),r.innerHTML=n,t.appendChild(r)}}]),n}();exports.default=i;
},{"../settings":"Q9a9"}],"x/OG":[function(require,module,exports) {
module.exports="/pong-project/game_of_thrones.7941b4e2.mp3";
},{}],"0vzb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./Paddle")),t=n(require("./Score")),i=n(require("./Board")),a=n(require("./Ball")),r=n(require("./Winner")),s=n(require("../../public/sounds/game_of_thrones.mp3")),h=require("../settings");function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t,i){return t&&d(e.prototype,t),i&&d(e,i),e}var u=function(){function n(d,o,u){var p=this;l(this,n),this.element=d,this.width=o,this.height=u,this.gameElement=document.getElementById(this.element),this.board=new i.default(this.width,this.height),this.ball=new a.default(8,this.width,this.height,"#ff0066"),this.score1=new t.default(this.width/2-50,30,30),this.score2=new t.default(this.width/2+25,30,30),this.paddleWidth=8,this.paddleHeight=56,this.boardGap=10,this.winner=new r.default(90,150,40),this.ping1=new Audio(s.default),this.ping1.play(),this.ping1.loop=!0,this.megaBall=!1,this.megaBallArray=[],this.player1=new e.default(this.height,18,70,h.PaddleOptions.boardGap,(this.height-h.PaddleOptions.paddleHeight)/2,"#00ff99",h.KEYS.a,h.KEYS.z),this.player2=new e.default(this.height,18,70,this.width-(h.PaddleOptions.boardGap+h.PaddleOptions.paddleWidth),(this.height-h.PaddleOptions.paddleHeight)/2,"blue",h.KEYS.up,h.KEYS.down),document.addEventListener("keydown",function(e){switch(e.key){case h.KEYS.spaceBar:p.pause=!p.pause;break;case"m":!1===p.megaBall?p.spawnMegaBall():p.megaBall=!1}})}return o(n,[{key:"spawnMegaBall",value:function(){this.megaBall=!0;for(var e=0;e<=70;e++)this.megaBallArray[e]=new a.default(10,this.width,this.height)}},{key:"render",value:function(){var e=this;if(!this.pause){this.gameElement.innerHTML="";var t=document.createElementNS(h.SVG_NS,"svg");t.setAttributeNS(null,"width",this.width),t.setAttributeNS(null,"height",this.height),t.setAttributeNS(null,"viewBox","0 0 ".concat(this.width," ").concat(this.height)),this.gameElement.appendChild(t),this.board.render(t),this.player1.render(t),this.player2.render(t),this.ball.render(t,this.player1,this.player2),this.score1.render(t,this.player1.score),this.score2.render(t,this.player2.score),this.megaBall&&this.megaBallArray.forEach(function(i){i.render(t,e.player1,e.player2)});10===this.player1.score?(this.pause=!0,this.winner.render(t,"Player 1 Wins!")):10===this.player2.score&&(this.pause=!0,this.winner.render(t,"Player 2 Wins!")),document.location.reload()}}}]),n}();exports.default=u;
},{"./Paddle":"4oVX","./Score":"y/AE","./Board":"b6em","./Ball":"gSQY","./Winner":"ewjB","../../public/sounds/game_of_thrones.mp3":"x/OG","../settings":"Q9a9"}],"H99C":[function(require,module,exports) {
"use strict";require("./styles/game.css");var e=r(require("./partials/Game"));function r(e){return e&&e.__esModule?e:{default:e}}var a=new e.default("game",512,256);!function e(){a.render(),requestAnimationFrame(e)}();
},{"./styles/game.css":"vTx+","./partials/Game":"0vzb"}]},{},["H99C"], null)
//# sourceMappingURL=/pong-project/src.308e7f79.js.map