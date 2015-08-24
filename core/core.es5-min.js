!function e(t,n,o){function r(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return r(n?n:e)},l,l.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=e("./class/Collider.js"),i=(o(r),e("./class/Component.js")),a=(o(i),e("./class/Game.js")),s=o(a),u=e("./class/GameObject.js"),c=(o(u),e("./class/Input.js")),l=o(c),f=e("./class/Jump.js"),p=(o(f),e("./class/PhysicsBody.js")),d=(o(p),e("./class/Rect.js")),m=(o(d),e("./class/RectRenderer.js")),y=(o(m),e("./class/ScrollingTerrain.js")),j=(o(y),e("./class/SpriteRenderer.js")),h=(o(j),e("./class/Transform.js")),v=(o(h),e("./class/Vector2.js")),b=(o(v),document.getElementById("view")),w=l["default"].instance,O={canvas:b},g=s["default"].instance;g.SetCanvas(O),g.init(),w.Attach(),g.Loop()},{"./class/Collider.js":2,"./class/Component.js":3,"./class/Game.js":4,"./class/GameObject.js":5,"./class/Input.js":6,"./class/Jump.js":7,"./class/PhysicsBody.js":8,"./class/Rect.js":10,"./class/RectRenderer.js":11,"./class/ScrollingTerrain.js":12,"./class/SpriteRenderer.js":13,"./class/Transform.js":14,"./class/Vector2.js":15}],2:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(e,t,n){for(var o=!0;o;){var r=e,i=t,a=n;s=c=u=void 0,o=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=i,n=a,o=!0}},s=e("./Component.js"),u=o(s),c=function(e){function t(e){r(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e)}return i(t,e),t}(u["default"]);n["default"]=c,t.exports=n["default"]},{"./Component.js":3}],3:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function i(e){o(this,i),this.Update=function(){},this.Draw=function(){}};n["default"]=r,t.exports=n["default"]},{}],4:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=e("./Collider.js"),s=o(a),u=e("./Component.js"),c=(o(u),e("./GameObject.js")),l=o(c),f=e("./Input.js"),p=o(f),d=e("./Jump.js"),m=o(d),y=e("./PhysicsBody.js"),j=o(y),h=e("./Player.js"),v=o(h),b=e("./Rect.js"),w=(o(b),e("./RectRenderer.js")),O=o(w),g=e("./ScrollingTerrain.js"),A=o(g),C=e("./SpriteRenderer.js"),P=o(C),x=e("./Transform.js"),E=o(x),D=e("./Vector2.js"),_=o(D),R=Symbol(),S=Symbol(),M=function(){function e(t){var n=this;r(this,e),this.startTime=new Date,this.paused=!1,this.color={black:"rgba(0,0,0,0)",dark:"rgba(0,0,0,0.5)",light:"rgba(255,255,255,0.5)",white:"rgba(255,255,255,1)",transparent:"rgba(255,255,255,0)"};this.platformCount=0,this.objs=[],this.speed=2,this.Update=function(){n.paused||n.objs.forEach(function(e){e.Update()})},this.Draw=function(){n.CTX.clearRect(0,0,n.canvas.width,n.canvas.height),n.objs.forEach(function(e){e.Draw(n.CTX)})},this.Loop=function(){n.Update(),n.Draw(),requestAnimationFrame(n.Loop)},this.ResizeCanvas=function(e,t){n.canvas.width=e,n.canvas.height=t},this.reset=function(e){"NonPlayer"===e?n.objs.forEach(function(e){"Player"!==e.name&&e.Destroy()}):n.objs.forEach(function(e){e.Destroy()})},this.init=function(){n.reset(),n.scale=3,n.resolution=new _["default"](320,188),n.CTX=n.canvas.getContext("2d"),n.objs=[],n.ResizeCanvas(n.resolution.x*n.scale,n.resolution.y*n.scale),n.CTX.scale(n.scale,n.scale),n.SpawnPlayer(new _["default"](280,130),new _["default"](15,15)),n.SpawnPlatform(new _["default"](160,150),new _["default"](320,200)),n.SpawnCatch()},this.SetCanvas=function(e){n.canvas=e.canvas},this.SpawnPlatform=function(t,o){var r=new l["default"];r.transform=new E["default"]({position:t,size:o}),r.AddComponent(new s["default"]),r.AddComponent(new A["default"]({speed:n.speed})),r.AddComponent(new O["default"]),r.color=e.instance.color.light,r.name="Platform";var i=new l["default"];return i.transform=new E["default"]({position:new _["default"](t.x+o.x,t.y+5),size:new _["default"](2,o.y-10)}),i.AddComponent(new s["default"]),i.AddComponent(new A["default"]({speed:n.speed})),i.AddComponent(new O["default"]),i.color="rgba(255,0,0,1)",i.name="CollisionDeath",n.objs.push(r),n.objs.push(i),r},this.SpawnPlayer=function(e,t){var o=new l["default"];o.transform=new E["default"]({position:e,size:t}),o.AddComponent(new s["default"]),o.AddComponent(new v["default"]),o.AddComponent(new j["default"]({kinematic:!1})),o.AddComponent(new m["default"]({input:p["default"].instance})),o.AddComponent(new P["default"]({animations:[{name:"Walk",frames:[0,1,2,3]},{name:"Jump",frames:[4]}]})),o.color=n.color.transparent,o.name="Player",n.objs.push(o)},this.SpawnCatch=function(){var e=new l["default"];e.transform=new E["default"]({position:new _["default"](0,190),size:new _["default"](320,10)}),e.AddComponent(new s["default"]),e.AddComponent(new O["default"]),e.color="rgba(255,0,0,1)",e.name="CollisionDeath",n.objs.push(e)},this.SetScrollingTerrainSpeed=function(e){n.objs.forEach(function(t){n.speed=e;var o=t.GetComponent("ScrollTerrain");null!==o&&(o.speed=n.speed)})}}return i(e,null,[{key:"instance",get:function(){return this[R]||(this[R]=new e(S)),this[R]}}]),e}();n["default"]=M,t.exports=n["default"]},{"./Collider.js":2,"./Component.js":3,"./GameObject.js":5,"./Input.js":6,"./Jump.js":7,"./PhysicsBody.js":8,"./Player.js":9,"./Rect.js":10,"./RectRenderer.js":11,"./ScrollingTerrain.js":12,"./SpriteRenderer.js":13,"./Transform.js":14,"./Vector2.js":15}],5:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=e("./Transform.js"),a=o(i),s=e("./Vector2.js"),u=o(s),c=e("./Game.js"),l=o(c),f=function p(){var e=this;r(this,p),this.name="GO",this.transform=new a["default"]({position:new u["default"](10,10),size:new u["default"](10,10)}),this.collider=!0,this.components=[],this.Update=function(){e.components.forEach(function(e){e.Update()})},this.Draw=function(t){e.components.forEach(function(e){e.Draw(t)})},this.GetComponent=function(t){var n=null;return e.components.forEach(function(e){e.constructor.name===t&&(n=e)}),n},this.AddComponent=function(t){e.components.push(t),t.gameObject=e},this.Destroy=function(){var t=l["default"].instance.objs.indexOf(e);t>-1&&(l["default"].instance.objs[t]=null,l["default"].instance.objs.splice(t,1))},this.isOnScreen=function(){var t=e.transform,n=!1;return t.position.x<l["default"].instance.resolution.x&&t.position.y+t.size.y>0&&t.position.y<l["default"].instance.resolution.y&&(n=!0),n}};n["default"]=f,t.exports=n["default"]},{"./Game.js":4,"./Transform.js":14,"./Vector2.js":15}],6:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=32,a=Symbol(),s=Symbol(),u=function(){function e(t){var n=this;o(this,e),this.isSpaceDown=!1,this.KeyDown=function(e){switch(e.keyCode){case i:n.isSpaceDown=!0}},this.KeyUp=function(e){switch(e.keyCode){case i:n.isSpaceDown=!1}},this.Attach=function(){window.addEventListener("keydown",n.KeyDown),window.addEventListener("keyup",n.KeyUp)}}return r(e,null,[{key:"instance",get:function(){return this[a]||(this[a]=new e(s)),this[a]}}]),e}();n["default"]=u,t.exports=n["default"]},{}],7:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(e,t,n){for(var o=!0;o;){var r=e,i=t,a=n;s=c=u=void 0,o=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=i,n=a,o=!0}},s=e("./Component.js"),u=o(s),c=function(e){function t(e){var n=this;r(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.input=e.input,this.SpriteRenderer=null,this.jumpOne=!1,this.doubleJump=!1,this.jumpForce=-9.5,this.lastJumpTime=-9999,this.jumpCD=300,this.Update=function(){if(n.gameObject&&(n.pb=n.gameObject.GetComponent("PhysicsBody"),n.SpriteRenderer=n.gameObject.GetComponent("SpriteRenderer")),n.input.isSpaceDown&&n.pb){if(n.jumpOne&&!n.doubleJump&&n.lastJumpTime+n.jumpCD<=Date.now()){var e=n.jumpForce;n.pb.velocity.y>2&&(e=1.25*n.jumpForce),n.Jump(e),n.doubleJump=!0}!n.jumpOne&&n.pb.grounded&&n.lastJumpTime+n.jumpCD<=Date.now()&&(n.Jump(n.jumpForce),n.pb.grounded=!1,n.jumpOne=!0)}n.pb.grounded&&(n.jumpOne=!1,n.doubleJump=!1),n.pb.grounded&&n.SpriteRenderer?n.SpriteRenderer.currentAnimation=0:n.SpriteRenderer.currentAnimation=1},this.Jump=function(e){n.lastJumpTime+n.jumpCD<=Date.now()&&(n.lastJumpTime=Date.now(),n.gameObject&&(n.pb=n.gameObject.GetComponent("PhysicsBody")),n.pb&&(n.pb.velocity.y=e))}}return i(t,e),t}(u["default"]);n["default"]=c,t.exports=n["default"]},{"./Component.js":3}],8:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(e,t,n){for(var o=!0;o;){var r=e,i=t,a=n;s=c=u=void 0,o=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=i,n=a,o=!0}},s=e("./Component.js"),u=o(s),c=e("./Vector2.js"),l=o(c),f=e("./Game.js"),p=o(f),d=e("./Rect.js"),m=o(d),y=function(e){function t(e){var n=this;r(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.gravity=new l["default"](0,.3),this.velocity=l["default"].zero(),this.acceleration=l["default"].zero(),this.collider=null,this.isKinematic=e&&e.kinematic||!1,this.game=p["default"].instance,this.grounded=!1,this.Update=function(){n.isKinematic||n.Step()},this.Draw=function(){},this.Step=function(){n.velocity.x+=n.acceleration.x+n.gravity.x,n.velocity.y+=n.acceleration.y+n.gravity.y,n.velocity.x*=.9,n.velocity.y*=.9,null===n.collider&&(n.collider=n.gameObject.GetComponent("Collider"));var e=!1,t=!1,o=n.gameObject.transform,r=new m["default"];r.init(o.position.x+n.velocity.x,o.position.y,o.size.x,o.size.y);var i=new m["default"];i.init(o.position.x,o.position.y+n.velocity.y,o.size.x,o.size.y);var a=0;null!==!n.collider&&n.game.objs.forEach(function(o){if(o!==n.gameObject){var s=o.transform,u=new m["default"];u.init(s.position.x,s.position.y,s.size.x,s.size.y),n.AABB(r,u)&&(e=!0),n.AABB(i,u)&&(t=!0,a=s.position.y-n.gameObject.transform.size.y,"CollisionDeath"===o.name&&"Player"===n.gameObject.name&&n.gameObject.GetComponent("Player").Die())}}),e||(n.gameObject.transform.position.x+=n.velocity.x),t?(n.gameObject.transform.position.y=a,n.grounded=!0):(n.gameObject.transform.position.y+=n.velocity.y,n.grounded=!1)},this.AABB=function(e,t){var n=!1;return e.position.x<t.position.x+t.size.x&&e.position.x+e.size.x>t.position.x&&e.position.y<t.position.y+t.size.y&&e.size.y+e.position.y>t.position.y&&(n=!0),n}}return i(t,e),t}(u["default"]);n["default"]=y,t.exports=n["default"]},{"./Component.js":3,"./Game.js":4,"./Rect.js":10,"./Vector2.js":15}],9:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(e,t,n){for(var o=!0;o;){var r=e,i=t,a=n;s=c=u=void 0,o=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=i,n=a,o=!0}},s=e("./Component.js"),u=o(s),c=e("./Game.js"),l=o(c),f=function(e){function t(e){var n=this;r(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.Die=function(){n.gameObject.Destroy(),l["default"].instance.reset("All"),l["default"].instance.init()}}return i(t,e),t}(u["default"]);n["default"]=f,t.exports=n["default"]},{"./Component.js":3,"./Game.js":4}],10:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=e("./Vector2.js"),a=o(i),s=function u(e){var t=this;r(this,u),e&&(e.hasOwnProperty("size")&&e.hasOwnProperty("position")&&(this.size=e.size,this.position=e.position),e.hasOwnProperty("x")&&e.hasOwnProperty("y")&&(this.position=new a["default"](x,y)),e.hasOwnProperty("width")&&e.hasOwnProperty("height")&&(this.size=new a["default"](width,height))),this.init=function(e,n,o,r){t.position=new a["default"](e,n),t.size=new a["default"](o,r)}};n["default"]=s,t.exports=n["default"]},{"./Vector2.js":15}],11:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(e,t,n){for(var o=!0;o;){var r=e,i=t,a=n;s=c=u=void 0,o=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=i,n=a,o=!0}},s=e("./Component.js"),u=o(s),c=function(e){function t(e){var n=this;r(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.Draw=function(e){var t=n.gameObject.transform,o=[t.position.x,t.position.y,t.size.x,t.size.y];e.fillStyle=n.gameObject.color,e.fillRect.apply(e,o)}}return i(t,e),t}(u["default"]);n["default"]=c,t.exports=n["default"]},{"./Component.js":3}],12:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(e,t,n){for(var o=!0;o;){var r=e,i=t,a=n;s=c=u=void 0,o=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=i,n=a,o=!0}},s=e("./Component.js"),u=o(s),c=e("./Game.js"),l=o(c),f=e("./Vector2.js"),p=o(f),d=function(e){function t(e){var n=this;r(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.speed=e.speed||2.5,this.link=null,this.Update=function(){if(null===n.link&&"Platform"===n.gameObject.name&&n.gameObject.transform.position.x>-50){var e=new p["default"](n.RandomRange(80,320),200),t=n.gameObject.transform.position.x-e.x-n.RandomRange(150,50),o=n.gameObject.transform.position.y+n.RandomRange(30,-30);if(o>n.gameObject.transform.position.y){var r=.5*(o-n.gameObject.transform.position.y);t-=r}50>o&&(o=50),o>180&&(o=180),n.link=l["default"].instance.SpawnPlatform(new p["default"](t,o),e)}n.gameObject.transform.position.x+=n.speed,n.gameObject.isOnScreen()||n.gameObject.Destroy()},this.RandomRange=function(e,t){return Math.floor(Math.random()*(e-t))+t}}return i(t,e),t}(u["default"]);n["default"]=d,t.exports=n["default"]},{"./Component.js":3,"./Game.js":4,"./Vector2.js":15}],13:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(e,t,n){for(var o=!0;o;){var r=e,i=t,a=n;s=c=u=void 0,o=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=i,n=a,o=!0}},s=e("./Component.js"),u=o(s),c=e("./Vector2.js"),l=o(c),f=e("./Game.js"),p=(o(f),function(e){function t(e){var n=this;r(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.animations=e.animations,this.lastAnimation=0,this.currentAnimation=0,this.sprite=new Image,this.sprite.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAgCAMAAACioYPHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNDgwMTE3NDA3MjA2ODExODIyQURCQTYzNTIyMEM3QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QkU2MjJGMDQxN0YxMUU1OEJCRkIxQzk0RUE2MzZGRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QkU2MjJFRjQxN0YxMUU1OEJCRkIxQzk0RUE2MzZGRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFEQkE2MzUyMjBDN0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFEQkE2MzUyMjBDN0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6cMsTrAAAAElBMVEX4+Pj/5KwA7NwAeP8AAAD///9eGScjAAAABnRSTlP//////wCzv6S/AAACF0lEQVR42uyXyZLDIAxEATX//8tjJJkllsA4Ofgw1Eylyk7bT60FEvLLV/gH3FjIONYbAZlK8CqifrwCEETIFU8Q5do7AA+WQjMA6rX3AGJcB+2LADmdjBj5r/zToxRbXfYTvSQ0xBhCYMgzwVuAH132EM/WH0QJoVgXggLiOmYWBo1dtm/wVI9UAWNEqnwd4NKgBeCXeiTEwCmOVGivg3plEFaA3+qTNEgxsPFtAtYuewg40xdC+U7P1wCxLrGuy/YNWumlDIXPBWxjyLSo6zLsG7TQC6EsmIeFPsASi/uCjyK5a9BKfwOwBXh8hy6PqF32mQXDIPP9Cz0mgLz7DQG2Sdm/gfMYcXnKxaBkTpKZvlwkXRdA2a37AEE2YdTbFmCvt9RTfdlKKqEN2AeIbFvIy/G36QWQkDf05ZISGikWB1MN0AEEcXLg2ItmEOz4Jnq5pnVo1KDwa4BJz7fWqYjDh/l2PdQlPwG+vjHD7mIhlOrV462zGRCc9En5lOiSHI839GilB7LHDJ93MrRMAbPIeTsi+94JSHwU8R7g6DXBrR/snaQ2u1Nl8gJ7hLS9jjG9B3j69luOPMA2y0u/kEvoDbl+lp0DA5t6w8ARENIp4qKXZJddZxnmD5jo7wBKg7CLrk2+u+cNLUNs6peAdXxNf3Y4Q264sTj5PwSEsdFsGHBP/k2KcetH2/rIn5/ph2nS1p8AAwCbD1ijbePFdwAAAABJRU5ErkJggg==",this.frameSize=new l["default"](32,32),this.totalFrames=4,this.frameIndex=0,this.tickCount=0,this.ticksPerFrame=12,this.Update=function(){n.animations.forEach(function(e,t){t===n.currentAnimation&&(n.totalFrames=e.frames.length,n.lastAnimation!=n.currentAnimation&&(n.frameIndex=0,n.tickCount=0,n.lastAnimation=n.currentAnimation))}),n.tickCount++,n.tickCount>n.ticksPerFrame&&(n.tickCount=0,n.frameIndex<n.totalFrames-1?n.frameIndex++:n.frameIndex=0)},this.Draw=function(e){var t=n.gameObject.transform;e.drawImage(n.sprite,n.animations[n.currentAnimation].frames[n.frameIndex]*n.frameSize.x,0,n.frameSize.x,n.frameSize.y,t.position.x,t.position.y,t.size.x,t.size.y)}}return i(t,e),t}(u["default"]));n["default"]=p,t.exports=n["default"]},{"./Component.js":3,"./Game.js":4,"./Vector2.js":15}],14:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(e,t,n){for(var o=!0;o;){var r=e,i=t,a=n;s=c=u=void 0,o=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,i);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=i,n=a,o=!0}},s=e("./Component.js"),u=o(s),c=function(e){function t(e){r(this,t),a(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.position=e.position,this.size=e.size}return i(t,e),t}(u["default"]);n["default"]=c,t.exports=n["default"]},{"./Component.js":3}],15:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(t,n){o(this,e),this.x=t,this.y=n}return r(e,null,[{key:"zero",value:function(){return new e(0,0)}}]),e}();n["default"]=i,t.exports=n["default"]},{}]},{},[1]);