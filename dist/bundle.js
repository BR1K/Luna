/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spaceship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spaceship */ "./lib/spaceship.js");
/* harmony import */ var _terrain2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terrain2 */ "./lib/terrain2.js");
/* harmony import */ var _sky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sky */ "./lib/sky.js");

// import Terrain from './terrain';



class Game {

  constructor(ctx, canvas, ctx2, canvas2, ctx3, canvas3) {

    this.ctx = ctx;
    this.terrain = new _terrain2__WEBPACK_IMPORTED_MODULE_1__["default"](ctx3, canvas3);
    this.spaceship = new _spaceship__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, canvas, this.terrain);
    this.sky = new _sky__WEBPACK_IMPORTED_MODULE_2__["default"](ctx2, canvas2);
    this.ctx2 = ctx2;
    this.canvas2 = canvas2;
    this.canvas = canvas;
    this.ctx3 = ctx3;
    this.canvas3 = canvas3;
    this.draw3 = this.draw3.bind(this);
    this.draw1 = this.draw1.bind(this);
    this.draw2 = this.draw2.bind(this);
  }

  // drawTerrain() {
  //   this.terrain.drawTerrain();
  // }

  draw1() {
    // console.log(this);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    this.spaceship.drawSpaceship();
    this.spaceship.updateSpaceship();


    requestAnimationFrame(this.draw1);


  }

  draw2() {

    // console.log(this);
    this.ctx2.clearRect(0, 0, this.canvas2.width, this.canvas2.height);
    this.ctx2.save();
    this.sky.drawSky();

    requestAnimationFrame(this.draw2);


  }


  draw3() {
    this.ctx3.clearRect(0, 0, this.ctx3.width, this.ctx3.height);
    this.terrain.drawTerrain();
    // this.terrain.drawFloor();

    requestAnimationFrame(this.draw3);
  }

}

// Game.draw();



/* harmony default export */ __webpack_exports__["default"] = (Game);



// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//   updateSpaceship();
//
//   drawSpaceship();
//
//   requestAnimationFrame(draw);
// }
//
//
// draw();


/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./lib/game.js");
/* harmony import */ var _terrain2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terrain2 */ "./lib/terrain2.js");

// import Spaceship from './spaceship';


document.addEventListener("DOMContentLoaded", () => {

  // console.log("hi");
  const canvas = document.getElementById("game");
  const ctx = canvas.getContext('2d');

  const canvas2 = document.getElementById("background");
  const ctx2 = canvas2.getContext('2d');

  const canvas3 = document.getElementById("background2");
  const ctx3 = canvas3.getContext('2d');

  const terrain = new _terrain2__WEBPACK_IMPORTED_MODULE_1__["default"](ctx3, canvas3);

  const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, canvas, ctx2, canvas2, ctx3, canvas3);

  document.addEventListener('keydown', e => game.spaceship.keyPressed(e));
  document.addEventListener('keyup', e => game.spaceship.keyUnPressed(e));
  // game.drawTerrain();
  terrain.drawTerrain();
  game.draw3();
  game.draw1();
  game.draw2();
});


/***/ }),

/***/ "./lib/sky.js":
/*!********************!*\
  !*** ./lib/sky.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Sky {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.color = "#000";
    // this.color = "rgba(0, 0, 0, 0)"
    this.canvas = canvas;
    this.stars = [];
    this.numStars = 500;
    this.speed = 25;

    this.drawStar = this.drawStar.bind(this);
    this.drawSky = this.drawSky.bind(this);
    this.makeStar = this.makeStar.bind(this);

    for(let i = 0; i < this.numStars; i++) {
      this.stars[i] = this.makeStar();
    }
  }

  makeStar() {
    return {
      x: Math.random() * 1,
      y: Math.random() * 1,
      distance: Math.sqrt(Math.random() / 7),
      color: 'hsl('+Math.random()*40+',100%,'+(70+Math.random()*30)+'%)'
    };
  }

  drawStars() {
    for (let i = 0; i < this.numStars; i++) {
      let star = this.stars[i];
      this.stars[i].x -= Math.pow(this.stars[i].distance, 2) / this.canvas.width * this.speed;
      if (this.stars[i].x <= 0) {
        this.stars[i] = this.makeStar();
        this.stars[i].x = 1;
      }

      this.drawStar(this.stars[i]);
    }
  }

  drawStar(star) {

    let x = star.x * this.canvas.width;
    let y = star.y * this.canvas.height;
    let z = star.distance * 2;
    this.ctx.beginPath();
    this.ctx.arc(x, y, z, 0, 2 * Math.PI, false);
    this.ctx.lineWidth = star.distance * 4;
    this.ctx.strokeStyle='rgba(255,255,255,0.2)';
    this.ctx.stroke();
    this.ctx.fillStyle = star.color;
    this.ctx.fill();
  }

  drawSky() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawStars();
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Sky);


/***/ }),

/***/ "./lib/spaceship.js":
/*!**************************!*\
  !*** ./lib/spaceship.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./lib/game.js");


class Spaceship {
  constructor(ctx, canvas, terrain) {

    this.terrain = terrain;
    this.friction = 0.5
    this.canvas = canvas;
    this.ctx = ctx;
    this.angle = 45;
    this.color = "lightgrey";
    this.width = 16; //8
    this.thrust = 0.07;
    this.height = 40; // 22
    this.gravity = .03
    this.velocity = {
      x: 0,
      y: 0
    }
    this.position = {
      x: 200,
      y: 0
    },
    this.points = {
      nw: {},
      ne: {},
      sw: {},
      se: {},
    },
    this.thrusterOn = false;
    this.acceleration = 0;
    this.deceleration = 0;
    this.rotatingClockwise = false;
    this.rotatingCounterClockwise = false;

    this.fuel = 500000;
    this.landed = false;
    this.crashed = false;

    this.getTopMid = this.getTopMid.bind(this);
    this.getBotMid = this.getBotMid.bind(this);
    this.getCorners = this.getCorners.bind(this);
    this.getLowestPoint = this.getLowestPoint.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
  }

  drawSpaceship() {

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(this.position.x, this.position.y);
    this.ctx.rotate(this.angle);
    this.ctx.rect(this.width * -0.5, this.height * -0.5, this.width, this.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();

    if (this.thrusterOn) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.width * -0.5, this.height * 0.5);
      this.ctx.lineTo(this.width * 0.5, this.height * 0.5);
      this.ctx.lineTo(0, this.height * 0.5 + Math.random() * 20);
      this.ctx.lineTo(this.width * -0.5, this.height * 0.5);
      this.ctx.closePath();
      this.ctx.fillStyle = "orange";
      this.ctx.fill();
    }

    this.ctx.restore();
  }

  // arr[x] == ship.pos.y

  checkCollision() {
    debugger
    let width = this.canvas.width;
    let height = this.canvas.height;
    let displace = height / 6;
    let detail = 0.6;
    let seed = {
      s: height / 2 + (Math.random() * displace * 2) - displace,
      e: height / 2 + (Math.random() * displace * 2) - displace
    }
    // debugger
    let points = this.terrain.terrain;
    if (this.terrain.terrain2.length - 1 + this.terrain.width + this.terrain.offset <= this.terrain.width) {
      points = this.terrain.terrain2;
    }
    // debugger
    let lowestPoint = this.getLowestPoint();
    let i = Math.floor(lowestPoint.x);
    if (lowestPoint.y >= points[i]) {
      console.log("omg");
    }
  }


  updateSpaceship() {
    // if (this.position.y = 500) {
    //   this.velocity.y = 0;
    //   this.gravity = 0
    //   debugger
    // }
    // debugger
    this.getCorners();
    this.checkCollision();

    this.position.x += this.velocity.x;
    this.position.y -= this.velocity.y;
    //gravity + acceleration:
    this.velocity.y -= (this.gravity + .03);

    if (this.fuel === 0) {
      this.thrusterOn = false;
    }

    if (this.position.y + (this.height / 2) > this.canvas.height) {
      this.velocity.y = -this.velocity.y * this.friction;
    }

    if (this.thrusterOn) {
      if (this.thrust < .18) { // terminal velocity
        this.thrust += 0.003
      }
      this.velocity.x += this.thrust * (Math.sin(this.angle));
      this.velocity.y += this.thrust * (Math.cos(this.angle));
      this.fuel -= 0.5;


    }
    if (this.rotatingClockwise) {
      this.angle += ( Math.PI / 180);
    } else if (this.rotatingCounterClockwise) {
      this.angle -= (Math.PI / 180);
    }

  }

  keyPressed(event) {

    switch (event.keyCode) {
      case 37:
        this.rotatingCounterClockwise = true;
        break;
      case 39:

        this.rotatingClockwise = true;

        break;
      case 38:
        this.thrusterOn = true;
        break;
    }
  }


  keyUnPressed(event) {
    switch (event.keyCode) {
      case 37:
        this.rotatingCounterClockwise = false;
        break;
      case 39:
        this.rotatingClockwise = false;
        break;
      case 38:
        this.thrust = 0;
        this.thrusterOn = false;
        break;
    }
  }

  //calculating ship's 4 points:
  //////////////////////////////////////////////////////////////////////////////
  getTopMid(cos, sin) {
    return {
      x : this.position.x + sin * this.height / 2,
      y : this.position.y - cos * this.height / 2
    }
  }

  getBotMid(cos, sin) {
    return {
      x : this.position.x - sin * this.height / 2,
      y : this.position.y + cos * this.height / 2
    }
  }

  getCorners() {
    const sin = Math.sin(this.angle);
    const cos = Math.cos(this.angle);
    const topMid = this.getTopMid(cos, sin);
    const botMid = this.getBotMid(cos, sin);

    this.points.nw = {
      x: topMid.x - (cos * this.width / 2),
      y: topMid.y - (sin * this.width / 2)
    }
    this.points.ne = {
      x: topMid.x + (cos * this.width / 2),
      y: topMid.y + (sin * this.width / 2)
    }
    this.points.sw = {
      x: botMid.x - (cos * this.width / 2),
      y: botMid.y - (sin * this.width / 2)
    }
    this.points.se = {
      x: botMid.x + (cos * this.width / 2),
      y: botMid.y + (sin * this.width / 2)
    }
  }
  // //////////////////////////////////////////////////////////////////////////////
  getLowestPoint() {
    // debugger
    let lowestPoint = { x: 0, y: 0 };

    for (let corner in this.points) {
      if (this.points[corner].y > lowestPoint.y) {
        lowestPoint.x = this.points[corner].x;
        lowestPoint.y = this.points[corner].y;
      }
    }

    return lowestPoint
  }


}


/* harmony default export */ __webpack_exports__["default"] = (Spaceship);


/***/ }),

/***/ "./lib/terrain2.js":
/*!*************************!*\
  !*** ./lib/terrain2.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Terrain {

  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height + 200;

    this.getTerrain = this.getTerrain.bind(this);
    this.drawTerrain = this.drawTerrain.bind(this);
    this.terrain = this.getTerrain(this.width, this.height, (this.height / 4), 0.6);
    this.terrain2 = this.getTerrain(this.width, this.height, (this.height / 4), 0.6, { s: this.terrain[this.terrain.length - 1], e: 0 });
    this.offset = 0;
  }

  // dislpace: change distance a point can go

  // NOTE: without seed: ////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // getTerrain(width, height, displace, detail) {
  //   let points = [];
  //   let power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2))))
  //
  //   points[0] = height / 1.43 + (Math.random() * displace * 2) - displace;
  //   points[power] = height / 1.43 + (Math.random() * displace * 2) - displace;
  //   displace *= detail;
  //
  //   for (let i = 1; i < power; i *= 2) {
  //     for (let j = (power / i) / 2; j < power; j += power / i) {
  //       points[j] = ((points[j - (power / i) / 2] + points[j + (power / i) / 2]) / 2);
  //       points[j] += (Math.random() * displace * 2) - displace;
  //     }
  //
  //     displace *= detail;
  //   }
  //   // console.log(points);
  //   // debugger
  //   return points;
  // }
  //
  // drawTerrain() {
  //   // debugger
  //   let terrain = this.getTerrain(this.width, this.height, (this.height / 4), 0.6);
  //
  //   this.ctx.beginPath();
  //   this.ctx.moveTo(0, terrain[0]);
  //   for (let i = 1; i < terrain.length; i++) {
  //     this.ctx.lineTo(i, terrain[i]);
  //   }
  //   this.ctx.lineTo(this.width, this.height);
  //   this.ctx.lineTo(0, this.height);
  //   this.ctx.closePath();
  //   this.ctx.fillStyle = "grey";
  //   this.ctx.fill();
  // }

  // drawFloor() {
  //   this.ctx.beginPath();
  //   this.ctx.moveTo(0, 500);
  //   this.ctx.lineTo(this.canvas.width, 500);
  //   this.ctx.stroke();
  //   this.ctx.strokeStyle = "white";
  //   this.ctx.closePath();
  // }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // NOTE: with seed:

  getTerrain(width, height, displace, detail, seed) {
    let points = [];
    let power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2))))
    // let seed = seed || {
    //   s: height / 2 + (Math.random() * displace * 2) - displace,
    //   e: height / 2 + (Math.random() * displace * 2) - displace
    // };
    if (!seed) {
      seed = {
        s: height / 2 + (Math.random() * displace * 2) - displace,
        e: height / 2 + (Math.random() * displace * 2) - displace
      };
    }

    // set start point:
    if (seed.s === 0) {
      seed.s = height / 2 + (Math.random() * displace * 2) - displace;
    }
    points[0] = seed.s;

    // set end point:
    if (seed.e === 0) {
      seed.e = height / 2 + (Math.random() * displace * 2) - displace
    }
    points[power] = seed.e;

    displace *= detail;

    for (let i = 1; i < power; i *= 2) {
      for (let j = (power / i) / 2; j < power; j += power / i) {
        points[j] = ((points[j - (power / i) / 2] + points[j + (power / i) / 2]) / 2);
        points[j] += (Math.random() * displace * 2) - displace;
      }

      displace *= detail;
    }
    // console.log(points);
    debugger
    return points;
  }

  getPointsArr() {

  }

  drawTerrain() {
    // debugger

    this.ctx.clearRect(0, 0, this.width, this.height);
    this.offset -= 3;

    // draw first half:
    this.ctx.beginPath();
    this.ctx.moveTo(this.offset, this.terrain[0]);
    for (var t = 0; t < this.terrain.length; t++) {
      this.ctx.lineTo(t + this.offset, this.terrain[t]);
    }
    for (t = 1; t < this.terrain2.length; t++) {
      this.ctx.lineTo(this.width + this.offset + t, this.terrain2[t])
    }

    this.ctx.lineTo(this.width + this.offset + t, this.height);
    this.ctx.lineTo(this.offset, this.height);
    this.ctx.closePath();
    this.ctx.fillStyle = "grey";
    this.ctx.fill();

    if (this.terrain2.length - 1 + this.width + this.offset <= this.width) {
      debugger
      this.terrain = this.terrain2;
      this.terrain2 = this.getTerrain(this.width, this.height, (this.height / 4), 0.6, { s: this.terrain[this.terrain.length - 1], e: 0 });
      this.offset = 0;
    }
    // requestAnimationFrame(this.drawTerrain);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Terrain);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map