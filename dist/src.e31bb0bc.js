// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/jsqr/dist/jsQR.js":[function(require,module,exports) {
var define;
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jsQR"] = factory();
	else
		root["jsQR"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BitMatrix = /** @class */ (function () {
    function BitMatrix(data, width) {
        this.width = width;
        this.height = data.length / width;
        this.data = data;
    }
    BitMatrix.createEmpty = function (width, height) {
        return new BitMatrix(new Uint8ClampedArray(width * height), width);
    };
    BitMatrix.prototype.get = function (x, y) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
            return false;
        }
        return !!this.data[y * this.width + x];
    };
    BitMatrix.prototype.set = function (x, y, v) {
        this.data[y * this.width + x] = v ? 1 : 0;
    };
    BitMatrix.prototype.setRegion = function (left, top, width, height, v) {
        for (var y = top; y < top + height; y++) {
            for (var x = left; x < left + width; x++) {
                this.set(x, y, !!v);
            }
        }
    };
    BitMatrix.prototype.getInverted = function () {
        return new BitMatrix(this.data.map(function (d) { return d === 0 ? 1 : 0; }), this.width);
    };
    return BitMatrix;
}());
exports.BitMatrix = BitMatrix;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GenericGFPoly_1 = __webpack_require__(2);
function addOrSubtractGF(a, b) {
    return a ^ b; // tslint:disable-line:no-bitwise
}
exports.addOrSubtractGF = addOrSubtractGF;
var GenericGF = /** @class */ (function () {
    function GenericGF(primitive, size, genBase) {
        this.primitive = primitive;
        this.size = size;
        this.generatorBase = genBase;
        this.expTable = new Array(this.size);
        this.logTable = new Array(this.size);
        var x = 1;
        for (var i = 0; i < this.size; i++) {
            this.expTable[i] = x;
            x = x * 2;
            if (x >= this.size) {
                x = (x ^ this.primitive) & (this.size - 1); // tslint:disable-line:no-bitwise
            }
        }
        for (var i = 0; i < this.size - 1; i++) {
            this.logTable[this.expTable[i]] = i;
        }
        this.zero = new GenericGFPoly_1.default(this, Uint8ClampedArray.from([0]));
        this.one = new GenericGFPoly_1.default(this, Uint8ClampedArray.from([1]));
    }
    GenericGF.prototype.multiply = function (a, b) {
        if (a === 0 || b === 0) {
            return 0;
        }
        return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.size - 1)];
    };
    GenericGF.prototype.inverse = function (a) {
        if (a === 0) {
            throw new Error("Can't invert 0");
        }
        return this.expTable[this.size - this.logTable[a] - 1];
    };
    GenericGF.prototype.buildMonomial = function (degree, coefficient) {
        if (degree < 0) {
            throw new Error("Invalid monomial degree less than 0");
        }
        if (coefficient === 0) {
            return this.zero;
        }
        var coefficients = new Uint8ClampedArray(degree + 1);
        coefficients[0] = coefficient;
        return new GenericGFPoly_1.default(this, coefficients);
    };
    GenericGF.prototype.log = function (a) {
        if (a === 0) {
            throw new Error("Can't take log(0)");
        }
        return this.logTable[a];
    };
    GenericGF.prototype.exp = function (a) {
        return this.expTable[a];
    };
    return GenericGF;
}());
exports.default = GenericGF;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GenericGF_1 = __webpack_require__(1);
var GenericGFPoly = /** @class */ (function () {
    function GenericGFPoly(field, coefficients) {
        if (coefficients.length === 0) {
            throw new Error("No coefficients.");
        }
        this.field = field;
        var coefficientsLength = coefficients.length;
        if (coefficientsLength > 1 && coefficients[0] === 0) {
            // Leading term must be non-zero for anything except the constant polynomial "0"
            var firstNonZero = 1;
            while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
                firstNonZero++;
            }
            if (firstNonZero === coefficientsLength) {
                this.coefficients = field.zero.coefficients;
            }
            else {
                this.coefficients = new Uint8ClampedArray(coefficientsLength - firstNonZero);
                for (var i = 0; i < this.coefficients.length; i++) {
                    this.coefficients[i] = coefficients[firstNonZero + i];
                }
            }
        }
        else {
            this.coefficients = coefficients;
        }
    }
    GenericGFPoly.prototype.degree = function () {
        return this.coefficients.length - 1;
    };
    GenericGFPoly.prototype.isZero = function () {
        return this.coefficients[0] === 0;
    };
    GenericGFPoly.prototype.getCoefficient = function (degree) {
        return this.coefficients[this.coefficients.length - 1 - degree];
    };
    GenericGFPoly.prototype.addOrSubtract = function (other) {
        if (this.isZero()) {
            return other;
        }
        if (other.isZero()) {
            return this;
        }
        var smallerCoefficients = this.coefficients;
        var largerCoefficients = other.coefficients;
        if (smallerCoefficients.length > largerCoefficients.length) {
            _a = [largerCoefficients, smallerCoefficients], smallerCoefficients = _a[0], largerCoefficients = _a[1];
        }
        var sumDiff = new Uint8ClampedArray(largerCoefficients.length);
        var lengthDiff = largerCoefficients.length - smallerCoefficients.length;
        for (var i = 0; i < lengthDiff; i++) {
            sumDiff[i] = largerCoefficients[i];
        }
        for (var i = lengthDiff; i < largerCoefficients.length; i++) {
            sumDiff[i] = GenericGF_1.addOrSubtractGF(smallerCoefficients[i - lengthDiff], largerCoefficients[i]);
        }
        return new GenericGFPoly(this.field, sumDiff);
        var _a;
    };
    GenericGFPoly.prototype.multiply = function (scalar) {
        if (scalar === 0) {
            return this.field.zero;
        }
        if (scalar === 1) {
            return this;
        }
        var size = this.coefficients.length;
        var product = new Uint8ClampedArray(size);
        for (var i = 0; i < size; i++) {
            product[i] = this.field.multiply(this.coefficients[i], scalar);
        }
        return new GenericGFPoly(this.field, product);
    };
    GenericGFPoly.prototype.multiplyPoly = function (other) {
        if (this.isZero() || other.isZero()) {
            return this.field.zero;
        }
        var aCoefficients = this.coefficients;
        var aLength = aCoefficients.length;
        var bCoefficients = other.coefficients;
        var bLength = bCoefficients.length;
        var product = new Uint8ClampedArray(aLength + bLength - 1);
        for (var i = 0; i < aLength; i++) {
            var aCoeff = aCoefficients[i];
            for (var j = 0; j < bLength; j++) {
                product[i + j] = GenericGF_1.addOrSubtractGF(product[i + j], this.field.multiply(aCoeff, bCoefficients[j]));
            }
        }
        return new GenericGFPoly(this.field, product);
    };
    GenericGFPoly.prototype.multiplyByMonomial = function (degree, coefficient) {
        if (degree < 0) {
            throw new Error("Invalid degree less than 0");
        }
        if (coefficient === 0) {
            return this.field.zero;
        }
        var size = this.coefficients.length;
        var product = new Uint8ClampedArray(size + degree);
        for (var i = 0; i < size; i++) {
            product[i] = this.field.multiply(this.coefficients[i], coefficient);
        }
        return new GenericGFPoly(this.field, product);
    };
    GenericGFPoly.prototype.evaluateAt = function (a) {
        var result = 0;
        if (a === 0) {
            // Just return the x^0 coefficient
            return this.getCoefficient(0);
        }
        var size = this.coefficients.length;
        if (a === 1) {
            // Just the sum of the coefficients
            this.coefficients.forEach(function (coefficient) {
                result = GenericGF_1.addOrSubtractGF(result, coefficient);
            });
            return result;
        }
        result = this.coefficients[0];
        for (var i = 1; i < size; i++) {
            result = GenericGF_1.addOrSubtractGF(this.field.multiply(a, result), this.coefficients[i]);
        }
        return result;
    };
    return GenericGFPoly;
}());
exports.default = GenericGFPoly;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binarizer_1 = __webpack_require__(4);
var decoder_1 = __webpack_require__(5);
var extractor_1 = __webpack_require__(11);
var locator_1 = __webpack_require__(12);
function scan(matrix) {
    var location = locator_1.locate(matrix);
    if (!location) {
        return null;
    }
    var extracted = extractor_1.extract(matrix, location);
    var decoded = decoder_1.decode(extracted.matrix);
    if (!decoded) {
        return null;
    }
    return {
        binaryData: decoded.bytes,
        data: decoded.text,
        chunks: decoded.chunks,
        location: {
            topRightCorner: extracted.mappingFunction(location.dimension, 0),
            topLeftCorner: extracted.mappingFunction(0, 0),
            bottomRightCorner: extracted.mappingFunction(location.dimension, location.dimension),
            bottomLeftCorner: extracted.mappingFunction(0, location.dimension),
            topRightFinderPattern: location.topRight,
            topLeftFinderPattern: location.topLeft,
            bottomLeftFinderPattern: location.bottomLeft,
            bottomRightAlignmentPattern: location.alignmentPattern,
        },
    };
}
function jsQR(data, width, height) {
    var binarized = binarizer_1.binarize(data, width, height);
    var result = scan(binarized);
    if (!result) {
        result = scan(binarized.getInverted());
    }
    return result;
}
jsQR.default = jsQR;
exports.default = jsQR;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BitMatrix_1 = __webpack_require__(0);
var REGION_SIZE = 8;
var MIN_DYNAMIC_RANGE = 24;
function numBetween(value, min, max) {
    return value < min ? min : value > max ? max : value;
}
// Like BitMatrix but accepts arbitry Uint8 values
var Matrix = /** @class */ (function () {
    function Matrix(width, height) {
        this.width = width;
        this.data = new Uint8ClampedArray(width * height);
    }
    Matrix.prototype.get = function (x, y) {
        return this.data[y * this.width + x];
    };
    Matrix.prototype.set = function (x, y, value) {
        this.data[y * this.width + x] = value;
    };
    return Matrix;
}());
function binarize(data, width, height) {
    if (data.length !== width * height * 4) {
        throw new Error("Malformed data passed to binarizer.");
    }
    // Convert image to greyscale
    var greyscalePixels = new Matrix(width, height);
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var r = data[((y * width + x) * 4) + 0];
            var g = data[((y * width + x) * 4) + 1];
            var b = data[((y * width + x) * 4) + 2];
            greyscalePixels.set(x, y, 0.2126 * r + 0.7152 * g + 0.0722 * b);
        }
    }
    var horizontalRegionCount = Math.ceil(width / REGION_SIZE);
    var verticalRegionCount = Math.ceil(height / REGION_SIZE);
    var blackPoints = new Matrix(horizontalRegionCount, verticalRegionCount);
    for (var verticalRegion = 0; verticalRegion < verticalRegionCount; verticalRegion++) {
        for (var hortizontalRegion = 0; hortizontalRegion < horizontalRegionCount; hortizontalRegion++) {
            var sum = 0;
            var min = Infinity;
            var max = 0;
            for (var y = 0; y < REGION_SIZE; y++) {
                for (var x = 0; x < REGION_SIZE; x++) {
                    var pixelLumosity = greyscalePixels.get(hortizontalRegion * REGION_SIZE + x, verticalRegion * REGION_SIZE + y);
                    sum += pixelLumosity;
                    min = Math.min(min, pixelLumosity);
                    max = Math.max(max, pixelLumosity);
                }
            }
            var average = sum / (Math.pow(REGION_SIZE, 2));
            if (max - min <= MIN_DYNAMIC_RANGE) {
                // If variation within the block is low, assume this is a block with only light or only
                // dark pixels. In that case we do not want to use the average, as it would divide this
                // low contrast area into black and white pixels, essentially creating data out of noise.
                //
                // Default the blackpoint for these blocks to be half the min - effectively white them out
                average = min / 2;
                if (verticalRegion > 0 && hortizontalRegion > 0) {
                    // Correct the "white background" assumption for blocks that have neighbors by comparing
                    // the pixels in this block to the previously calculated black points. This is based on
                    // the fact that dark barcode symbology is always surrounded by some amount of light
                    // background for which reasonable black point estimates were made. The bp estimated at
                    // the boundaries is used for the interior.
                    // The (min < bp) is arbitrary but works better than other heuristics that were tried.
                    var averageNeighborBlackPoint = (blackPoints.get(hortizontalRegion, verticalRegion - 1) +
                        (2 * blackPoints.get(hortizontalRegion - 1, verticalRegion)) +
                        blackPoints.get(hortizontalRegion - 1, verticalRegion - 1)) / 4;
                    if (min < averageNeighborBlackPoint) {
                        average = averageNeighborBlackPoint;
                    }
                }
            }
            blackPoints.set(hortizontalRegion, verticalRegion, average);
        }
    }
    var binarized = BitMatrix_1.BitMatrix.createEmpty(width, height);
    for (var verticalRegion = 0; verticalRegion < verticalRegionCount; verticalRegion++) {
        for (var hortizontalRegion = 0; hortizontalRegion < horizontalRegionCount; hortizontalRegion++) {
            var left = numBetween(hortizontalRegion, 2, horizontalRegionCount - 3);
            var top_1 = numBetween(verticalRegion, 2, verticalRegionCount - 3);
            var sum = 0;
            for (var xRegion = -2; xRegion <= 2; xRegion++) {
                for (var yRegion = -2; yRegion <= 2; yRegion++) {
                    sum += blackPoints.get(left + xRegion, top_1 + yRegion);
                }
            }
            var threshold = sum / 25;
            for (var x = 0; x < REGION_SIZE; x++) {
                for (var y = 0; y < REGION_SIZE; y++) {
                    var lum = greyscalePixels.get(hortizontalRegion * REGION_SIZE + x, verticalRegion * REGION_SIZE + y);
                    binarized.set(hortizontalRegion * REGION_SIZE + x, verticalRegion * REGION_SIZE + y, lum <= threshold);
                }
            }
        }
    }
    return binarized;
}
exports.binarize = binarize;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BitMatrix_1 = __webpack_require__(0);
var decodeData_1 = __webpack_require__(6);
var reedsolomon_1 = __webpack_require__(9);
var version_1 = __webpack_require__(10);
// tslint:disable:no-bitwise
function numBitsDiffering(x, y) {
    var z = x ^ y;
    var bitCount = 0;
    while (z) {
        bitCount++;
        z &= z - 1;
    }
    return bitCount;
}
function pushBit(bit, byte) {
    return (byte << 1) | bit;
}
// tslint:enable:no-bitwise
var FORMAT_INFO_TABLE = [
    { bits: 0x5412, formatInfo: { errorCorrectionLevel: 1, dataMask: 0 } },
    { bits: 0x5125, formatInfo: { errorCorrectionLevel: 1, dataMask: 1 } },
    { bits: 0x5E7C, formatInfo: { errorCorrectionLevel: 1, dataMask: 2 } },
    { bits: 0x5B4B, formatInfo: { errorCorrectionLevel: 1, dataMask: 3 } },
    { bits: 0x45F9, formatInfo: { errorCorrectionLevel: 1, dataMask: 4 } },
    { bits: 0x40CE, formatInfo: { errorCorrectionLevel: 1, dataMask: 5 } },
    { bits: 0x4F97, formatInfo: { errorCorrectionLevel: 1, dataMask: 6 } },
    { bits: 0x4AA0, formatInfo: { errorCorrectionLevel: 1, dataMask: 7 } },
    { bits: 0x77C4, formatInfo: { errorCorrectionLevel: 0, dataMask: 0 } },
    { bits: 0x72F3, formatInfo: { errorCorrectionLevel: 0, dataMask: 1 } },
    { bits: 0x7DAA, formatInfo: { errorCorrectionLevel: 0, dataMask: 2 } },
    { bits: 0x789D, formatInfo: { errorCorrectionLevel: 0, dataMask: 3 } },
    { bits: 0x662F, formatInfo: { errorCorrectionLevel: 0, dataMask: 4 } },
    { bits: 0x6318, formatInfo: { errorCorrectionLevel: 0, dataMask: 5 } },
    { bits: 0x6C41, formatInfo: { errorCorrectionLevel: 0, dataMask: 6 } },
    { bits: 0x6976, formatInfo: { errorCorrectionLevel: 0, dataMask: 7 } },
    { bits: 0x1689, formatInfo: { errorCorrectionLevel: 3, dataMask: 0 } },
    { bits: 0x13BE, formatInfo: { errorCorrectionLevel: 3, dataMask: 1 } },
    { bits: 0x1CE7, formatInfo: { errorCorrectionLevel: 3, dataMask: 2 } },
    { bits: 0x19D0, formatInfo: { errorCorrectionLevel: 3, dataMask: 3 } },
    { bits: 0x0762, formatInfo: { errorCorrectionLevel: 3, dataMask: 4 } },
    { bits: 0x0255, formatInfo: { errorCorrectionLevel: 3, dataMask: 5 } },
    { bits: 0x0D0C, formatInfo: { errorCorrectionLevel: 3, dataMask: 6 } },
    { bits: 0x083B, formatInfo: { errorCorrectionLevel: 3, dataMask: 7 } },
    { bits: 0x355F, formatInfo: { errorCorrectionLevel: 2, dataMask: 0 } },
    { bits: 0x3068, formatInfo: { errorCorrectionLevel: 2, dataMask: 1 } },
    { bits: 0x3F31, formatInfo: { errorCorrectionLevel: 2, dataMask: 2 } },
    { bits: 0x3A06, formatInfo: { errorCorrectionLevel: 2, dataMask: 3 } },
    { bits: 0x24B4, formatInfo: { errorCorrectionLevel: 2, dataMask: 4 } },
    { bits: 0x2183, formatInfo: { errorCorrectionLevel: 2, dataMask: 5 } },
    { bits: 0x2EDA, formatInfo: { errorCorrectionLevel: 2, dataMask: 6 } },
    { bits: 0x2BED, formatInfo: { errorCorrectionLevel: 2, dataMask: 7 } },
];
var DATA_MASKS = [
    function (p) { return ((p.y + p.x) % 2) === 0; },
    function (p) { return (p.y % 2) === 0; },
    function (p) { return p.x % 3 === 0; },
    function (p) { return (p.y + p.x) % 3 === 0; },
    function (p) { return (Math.floor(p.y / 2) + Math.floor(p.x / 3)) % 2 === 0; },
    function (p) { return ((p.x * p.y) % 2) + ((p.x * p.y) % 3) === 0; },
    function (p) { return ((((p.y * p.x) % 2) + (p.y * p.x) % 3) % 2) === 0; },
    function (p) { return ((((p.y + p.x) % 2) + (p.y * p.x) % 3) % 2) === 0; },
];
function buildFunctionPatternMask(version) {
    var dimension = 17 + 4 * version.versionNumber;
    var matrix = BitMatrix_1.BitMatrix.createEmpty(dimension, dimension);
    matrix.setRegion(0, 0, 9, 9, true); // Top left finder pattern + separator + format
    matrix.setRegion(dimension - 8, 0, 8, 9, true); // Top right finder pattern + separator + format
    matrix.setRegion(0, dimension - 8, 9, 8, true); // Bottom left finder pattern + separator + format
    // Alignment patterns
    for (var _i = 0, _a = version.alignmentPatternCenters; _i < _a.length; _i++) {
        var x = _a[_i];
        for (var _b = 0, _c = version.alignmentPatternCenters; _b < _c.length; _b++) {
            var y = _c[_b];
            if (!(x === 6 && y === 6 || x === 6 && y === dimension - 7 || x === dimension - 7 && y === 6)) {
                matrix.setRegion(x - 2, y - 2, 5, 5, true);
            }
        }
    }
    matrix.setRegion(6, 9, 1, dimension - 17, true); // Vertical timing pattern
    matrix.setRegion(9, 6, dimension - 17, 1, true); // Horizontal timing pattern
    if (version.versionNumber > 6) {
        matrix.setRegion(dimension - 11, 0, 3, 6, true); // Version info, top right
        matrix.setRegion(0, dimension - 11, 6, 3, true); // Version info, bottom left
    }
    return matrix;
}
function readCodewords(matrix, version, formatInfo) {
    var dataMask = DATA_MASKS[formatInfo.dataMask];
    var dimension = matrix.height;
    var functionPatternMask = buildFunctionPatternMask(version);
    var codewords = [];
    var currentByte = 0;
    var bitsRead = 0;
    // Read columns in pairs, from right to left
    var readingUp = true;
    for (var columnIndex = dimension - 1; columnIndex > 0; columnIndex -= 2) {
        if (columnIndex === 6) {
            columnIndex--;
        }
        for (var i = 0; i < dimension; i++) {
            var y = readingUp ? dimension - 1 - i : i;
            for (var columnOffset = 0; columnOffset < 2; columnOffset++) {
                var x = columnIndex - columnOffset;
                if (!functionPatternMask.get(x, y)) {
                    bitsRead++;
                    var bit = matrix.get(x, y);
                    if (dataMask({ y: y, x: x })) {
                        bit = !bit;
                    }
                    currentByte = pushBit(bit, currentByte);
                    if (bitsRead === 8) {
                        codewords.push(currentByte);
                        bitsRead = 0;
                        currentByte = 0;
                    }
                }
            }
        }
        readingUp = !readingUp;
    }
    return codewords;
}
function readVersion(matrix) {
    var dimension = matrix.height;
    var provisionalVersion = Math.floor((dimension - 17) / 4);
    if (provisionalVersion <= 6) {
        return version_1.VERSIONS[provisionalVersion - 1];
    }
    var topRightVersionBits = 0;
    for (var y = 5; y >= 0; y--) {
        for (var x = dimension - 9; x >= dimension - 11; x--) {
            topRightVersionBits = pushBit(matrix.get(x, y), topRightVersionBits);
        }
    }
    var bottomLeftVersionBits = 0;
    for (var x = 5; x >= 0; x--) {
        for (var y = dimension - 9; y >= dimension - 11; y--) {
            bottomLeftVersionBits = pushBit(matrix.get(x, y), bottomLeftVersionBits);
        }
    }
    var bestDifference = Infinity;
    var bestVersion;
    for (var _i = 0, VERSIONS_1 = version_1.VERSIONS; _i < VERSIONS_1.length; _i++) {
        var version = VERSIONS_1[_i];
        if (version.infoBits === topRightVersionBits || version.infoBits === bottomLeftVersionBits) {
            return version;
        }
        var difference = numBitsDiffering(topRightVersionBits, version.infoBits);
        if (difference < bestDifference) {
            bestVersion = version;
            bestDifference = difference;
        }
        difference = numBitsDiffering(bottomLeftVersionBits, version.infoBits);
        if (difference < bestDifference) {
            bestVersion = version;
            bestDifference = difference;
        }
    }
    // We can tolerate up to 3 bits of error since no two version info codewords will
    // differ in less than 8 bits.
    if (bestDifference <= 3) {
        return bestVersion;
    }
}
function readFormatInformation(matrix) {
    var topLeftFormatInfoBits = 0;
    for (var x = 0; x <= 8; x++) {
        if (x !== 6) {
            topLeftFormatInfoBits = pushBit(matrix.get(x, 8), topLeftFormatInfoBits);
        }
    }
    for (var y = 7; y >= 0; y--) {
        if (y !== 6) {
            topLeftFormatInfoBits = pushBit(matrix.get(8, y), topLeftFormatInfoBits);
        }
    }
    var dimension = matrix.height;
    var topRightBottomRightFormatInfoBits = 0;
    for (var y = dimension - 1; y >= dimension - 7; y--) {
        topRightBottomRightFormatInfoBits = pushBit(matrix.get(8, y), topRightBottomRightFormatInfoBits);
    }
    for (var x = dimension - 8; x < dimension; x++) {
        topRightBottomRightFormatInfoBits = pushBit(matrix.get(x, 8), topRightBottomRightFormatInfoBits);
    }
    var bestDifference = Infinity;
    var bestFormatInfo = null;
    for (var _i = 0, FORMAT_INFO_TABLE_1 = FORMAT_INFO_TABLE; _i < FORMAT_INFO_TABLE_1.length; _i++) {
        var _a = FORMAT_INFO_TABLE_1[_i], bits = _a.bits, formatInfo = _a.formatInfo;
        if (bits === topLeftFormatInfoBits || bits === topRightBottomRightFormatInfoBits) {
            return formatInfo;
        }
        var difference = numBitsDiffering(topLeftFormatInfoBits, bits);
        if (difference < bestDifference) {
            bestFormatInfo = formatInfo;
            bestDifference = difference;
        }
        if (topLeftFormatInfoBits !== topRightBottomRightFormatInfoBits) {
            difference = numBitsDiffering(topRightBottomRightFormatInfoBits, bits);
            if (difference < bestDifference) {
                bestFormatInfo = formatInfo;
                bestDifference = difference;
            }
        }
    }
    // Hamming distance of the 32 masked codes is 7, by construction, so <= 3 bits differing means we found a match
    if (bestDifference <= 3) {
        return bestFormatInfo;
    }
    return null;
}
function getDataBlocks(codewords, version, ecLevel) {
    var ecInfo = version.errorCorrectionLevels[ecLevel];
    var dataBlocks = [];
    var totalCodewords = 0;
    ecInfo.ecBlocks.forEach(function (block) {
        for (var i = 0; i < block.numBlocks; i++) {
            dataBlocks.push({ numDataCodewords: block.dataCodewordsPerBlock, codewords: [] });
            totalCodewords += block.dataCodewordsPerBlock + ecInfo.ecCodewordsPerBlock;
        }
    });
    // In some cases the QR code will be malformed enough that we pull off more or less than we should.
    // If we pull off less there's nothing we can do.
    // If we pull off more we can safely truncate
    if (codewords.length < totalCodewords) {
        return null;
    }
    codewords = codewords.slice(0, totalCodewords);
    var shortBlockSize = ecInfo.ecBlocks[0].dataCodewordsPerBlock;
    // Pull codewords to fill the blocks up to the minimum size
    for (var i = 0; i < shortBlockSize; i++) {
        for (var _i = 0, dataBlocks_1 = dataBlocks; _i < dataBlocks_1.length; _i++) {
            var dataBlock = dataBlocks_1[_i];
            dataBlock.codewords.push(codewords.shift());
        }
    }
    // If there are any large blocks, pull codewords to fill the last element of those
    if (ecInfo.ecBlocks.length > 1) {
        var smallBlockCount = ecInfo.ecBlocks[0].numBlocks;
        var largeBlockCount = ecInfo.ecBlocks[1].numBlocks;
        for (var i = 0; i < largeBlockCount; i++) {
            dataBlocks[smallBlockCount + i].codewords.push(codewords.shift());
        }
    }
    // Add the rest of the codewords to the blocks. These are the error correction codewords.
    while (codewords.length > 0) {
        for (var _a = 0, dataBlocks_2 = dataBlocks; _a < dataBlocks_2.length; _a++) {
            var dataBlock = dataBlocks_2[_a];
            dataBlock.codewords.push(codewords.shift());
        }
    }
    return dataBlocks;
}
function decodeMatrix(matrix) {
    var version = readVersion(matrix);
    if (!version) {
        return null;
    }
    var formatInfo = readFormatInformation(matrix);
    if (!formatInfo) {
        return null;
    }
    var codewords = readCodewords(matrix, version, formatInfo);
    var dataBlocks = getDataBlocks(codewords, version, formatInfo.errorCorrectionLevel);
    if (!dataBlocks) {
        return null;
    }
    // Count total number of data bytes
    var totalBytes = dataBlocks.reduce(function (a, b) { return a + b.numDataCodewords; }, 0);
    var resultBytes = new Uint8ClampedArray(totalBytes);
    var resultIndex = 0;
    for (var _i = 0, dataBlocks_3 = dataBlocks; _i < dataBlocks_3.length; _i++) {
        var dataBlock = dataBlocks_3[_i];
        var correctedBytes = reedsolomon_1.decode(dataBlock.codewords, dataBlock.codewords.length - dataBlock.numDataCodewords);
        if (!correctedBytes) {
            return null;
        }
        for (var i = 0; i < dataBlock.numDataCodewords; i++) {
            resultBytes[resultIndex++] = correctedBytes[i];
        }
    }
    try {
        return decodeData_1.decode(resultBytes, version.versionNumber);
    }
    catch (_a) {
        return null;
    }
}
function decode(matrix) {
    if (matrix == null) {
        return null;
    }
    var result = decodeMatrix(matrix);
    if (result) {
        return result;
    }
    // Decoding didn't work, try mirroring the QR across the topLeft -> bottomRight line.
    for (var x = 0; x < matrix.width; x++) {
        for (var y = x + 1; y < matrix.height; y++) {
            if (matrix.get(x, y) !== matrix.get(y, x)) {
                matrix.set(x, y, !matrix.get(x, y));
                matrix.set(y, x, !matrix.get(y, x));
            }
        }
    }
    return decodeMatrix(matrix);
}
exports.decode = decode;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-bitwise
var BitStream_1 = __webpack_require__(7);
var shiftJISTable_1 = __webpack_require__(8);
var Mode;
(function (Mode) {
    Mode["Numeric"] = "numeric";
    Mode["Alphanumeric"] = "alphanumeric";
    Mode["Byte"] = "byte";
    Mode["Kanji"] = "kanji";
    Mode["ECI"] = "eci";
})(Mode = exports.Mode || (exports.Mode = {}));
var ModeByte;
(function (ModeByte) {
    ModeByte[ModeByte["Terminator"] = 0] = "Terminator";
    ModeByte[ModeByte["Numeric"] = 1] = "Numeric";
    ModeByte[ModeByte["Alphanumeric"] = 2] = "Alphanumeric";
    ModeByte[ModeByte["Byte"] = 4] = "Byte";
    ModeByte[ModeByte["Kanji"] = 8] = "Kanji";
    ModeByte[ModeByte["ECI"] = 7] = "ECI";
    // StructuredAppend = 0x3,
    // FNC1FirstPosition = 0x5,
    // FNC1SecondPosition = 0x9,
})(ModeByte || (ModeByte = {}));
function decodeNumeric(stream, size) {
    var bytes = [];
    var text = "";
    var characterCountSize = [10, 12, 14][size];
    var length = stream.readBits(characterCountSize);
    // Read digits in groups of 3
    while (length >= 3) {
        var num = stream.readBits(10);
        if (num >= 1000) {
            throw new Error("Invalid numeric value above 999");
        }
        var a = Math.floor(num / 100);
        var b = Math.floor(num / 10) % 10;
        var c = num % 10;
        bytes.push(48 + a, 48 + b, 48 + c);
        text += a.toString() + b.toString() + c.toString();
        length -= 3;
    }
    // If the number of digits aren't a multiple of 3, the remaining digits are special cased.
    if (length === 2) {
        var num = stream.readBits(7);
        if (num >= 100) {
            throw new Error("Invalid numeric value above 99");
        }
        var a = Math.floor(num / 10);
        var b = num % 10;
        bytes.push(48 + a, 48 + b);
        text += a.toString() + b.toString();
    }
    else if (length === 1) {
        var num = stream.readBits(4);
        if (num >= 10) {
            throw new Error("Invalid numeric value above 9");
        }
        bytes.push(48 + num);
        text += num.toString();
    }
    return { bytes: bytes, text: text };
}
var AlphanumericCharacterCodes = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P", "Q",
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    " ", "$", "%", "*", "+", "-", ".", "/", ":",
];
function decodeAlphanumeric(stream, size) {
    var bytes = [];
    var text = "";
    var characterCountSize = [9, 11, 13][size];
    var length = stream.readBits(characterCountSize);
    while (length >= 2) {
        var v = stream.readBits(11);
        var a = Math.floor(v / 45);
        var b = v % 45;
        bytes.push(AlphanumericCharacterCodes[a].charCodeAt(0), AlphanumericCharacterCodes[b].charCodeAt(0));
        text += AlphanumericCharacterCodes[a] + AlphanumericCharacterCodes[b];
        length -= 2;
    }
    if (length === 1) {
        var a = stream.readBits(6);
        bytes.push(AlphanumericCharacterCodes[a].charCodeAt(0));
        text += AlphanumericCharacterCodes[a];
    }
    return { bytes: bytes, text: text };
}
function decodeByte(stream, size) {
    var bytes = [];
    var text = "";
    var characterCountSize = [8, 16, 16][size];
    var length = stream.readBits(characterCountSize);
    for (var i = 0; i < length; i++) {
        var b = stream.readBits(8);
        bytes.push(b);
    }
    try {
        text += decodeURIComponent(bytes.map(function (b) { return "%" + ("0" + b.toString(16)).substr(-2); }).join(""));
    }
    catch (_a) {
        // failed to decode
    }
    return { bytes: bytes, text: text };
}
function decodeKanji(stream, size) {
    var bytes = [];
    var text = "";
    var characterCountSize = [8, 10, 12][size];
    var length = stream.readBits(characterCountSize);
    for (var i = 0; i < length; i++) {
        var k = stream.readBits(13);
        var c = (Math.floor(k / 0xC0) << 8) | (k % 0xC0);
        if (c < 0x1F00) {
            c += 0x8140;
        }
        else {
            c += 0xC140;
        }
        bytes.push(c >> 8, c & 0xFF);
        text += String.fromCharCode(shiftJISTable_1.shiftJISTable[c]);
    }
    return { bytes: bytes, text: text };
}
function decode(data, version) {
    var stream = new BitStream_1.BitStream(data);
    // There are 3 'sizes' based on the version. 1-9 is small (0), 10-26 is medium (1) and 27-40 is large (2).
    var size = version <= 9 ? 0 : version <= 26 ? 1 : 2;
    var result = {
        text: "",
        bytes: [],
        chunks: [],
    };
    while (stream.available() >= 4) {
        var mode = stream.readBits(4);
        if (mode === ModeByte.Terminator) {
            return result;
        }
        else if (mode === ModeByte.ECI) {
            if (stream.readBits(1) === 0) {
                result.chunks.push({
                    type: Mode.ECI,
                    assignmentNumber: stream.readBits(7),
                });
            }
            else if (stream.readBits(1) === 0) {
                result.chunks.push({
                    type: Mode.ECI,
                    assignmentNumber: stream.readBits(14),
                });
            }
            else if (stream.readBits(1) === 0) {
                result.chunks.push({
                    type: Mode.ECI,
                    assignmentNumber: stream.readBits(21),
                });
            }
            else {
                // ECI data seems corrupted
                result.chunks.push({
                    type: Mode.ECI,
                    assignmentNumber: -1,
                });
            }
        }
        else if (mode === ModeByte.Numeric) {
            var numericResult = decodeNumeric(stream, size);
            result.text += numericResult.text;
            (_a = result.bytes).push.apply(_a, numericResult.bytes);
            result.chunks.push({
                type: Mode.Numeric,
                text: numericResult.text,
            });
        }
        else if (mode === ModeByte.Alphanumeric) {
            var alphanumericResult = decodeAlphanumeric(stream, size);
            result.text += alphanumericResult.text;
            (_b = result.bytes).push.apply(_b, alphanumericResult.bytes);
            result.chunks.push({
                type: Mode.Alphanumeric,
                text: alphanumericResult.text,
            });
        }
        else if (mode === ModeByte.Byte) {
            var byteResult = decodeByte(stream, size);
            result.text += byteResult.text;
            (_c = result.bytes).push.apply(_c, byteResult.bytes);
            result.chunks.push({
                type: Mode.Byte,
                bytes: byteResult.bytes,
                text: byteResult.text,
            });
        }
        else if (mode === ModeByte.Kanji) {
            var kanjiResult = decodeKanji(stream, size);
            result.text += kanjiResult.text;
            (_d = result.bytes).push.apply(_d, kanjiResult.bytes);
            result.chunks.push({
                type: Mode.Kanji,
                bytes: kanjiResult.bytes,
                text: kanjiResult.text,
            });
        }
    }
    var _a, _b, _c, _d;
}
exports.decode = decode;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// tslint:disable:no-bitwise
Object.defineProperty(exports, "__esModule", { value: true });
var BitStream = /** @class */ (function () {
    function BitStream(bytes) {
        this.byteOffset = 0;
        this.bitOffset = 0;
        this.bytes = bytes;
    }
    BitStream.prototype.readBits = function (numBits) {
        if (numBits < 1 || numBits > 32 || numBits > this.available()) {
            throw new Error("Cannot read " + numBits.toString() + " bits");
        }
        var result = 0;
        // First, read remainder from current byte
        if (this.bitOffset > 0) {
            var bitsLeft = 8 - this.bitOffset;
            var toRead = numBits < bitsLeft ? numBits : bitsLeft;
            var bitsToNotRead = bitsLeft - toRead;
            var mask = (0xFF >> (8 - toRead)) << bitsToNotRead;
            result = (this.bytes[this.byteOffset] & mask) >> bitsToNotRead;
            numBits -= toRead;
            this.bitOffset += toRead;
            if (this.bitOffset === 8) {
                this.bitOffset = 0;
                this.byteOffset++;
            }
        }
        // Next read whole bytes
        if (numBits > 0) {
            while (numBits >= 8) {
                result = (result << 8) | (this.bytes[this.byteOffset] & 0xFF);
                this.byteOffset++;
                numBits -= 8;
            }
            // Finally read a partial byte
            if (numBits > 0) {
                var bitsToNotRead = 8 - numBits;
                var mask = (0xFF >> bitsToNotRead) << bitsToNotRead;
                result = (result << numBits) | ((this.bytes[this.byteOffset] & mask) >> bitsToNotRead);
                this.bitOffset += numBits;
            }
        }
        return result;
    };
    BitStream.prototype.available = function () {
        return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
    };
    return BitStream;
}());
exports.BitStream = BitStream;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.shiftJISTable = {
    0x20: 0x0020,
    0x21: 0x0021,
    0x22: 0x0022,
    0x23: 0x0023,
    0x24: 0x0024,
    0x25: 0x0025,
    0x26: 0x0026,
    0x27: 0x0027,
    0x28: 0x0028,
    0x29: 0x0029,
    0x2A: 0x002A,
    0x2B: 0x002B,
    0x2C: 0x002C,
    0x2D: 0x002D,
    0x2E: 0x002E,
    0x2F: 0x002F,
    0x30: 0x0030,
    0x31: 0x0031,
    0x32: 0x0032,
    0x33: 0x0033,
    0x34: 0x0034,
    0x35: 0x0035,
    0x36: 0x0036,
    0x37: 0x0037,
    0x38: 0x0038,
    0x39: 0x0039,
    0x3A: 0x003A,
    0x3B: 0x003B,
    0x3C: 0x003C,
    0x3D: 0x003D,
    0x3E: 0x003E,
    0x3F: 0x003F,
    0x40: 0x0040,
    0x41: 0x0041,
    0x42: 0x0042,
    0x43: 0x0043,
    0x44: 0x0044,
    0x45: 0x0045,
    0x46: 0x0046,
    0x47: 0x0047,
    0x48: 0x0048,
    0x49: 0x0049,
    0x4A: 0x004A,
    0x4B: 0x004B,
    0x4C: 0x004C,
    0x4D: 0x004D,
    0x4E: 0x004E,
    0x4F: 0x004F,
    0x50: 0x0050,
    0x51: 0x0051,
    0x52: 0x0052,
    0x53: 0x0053,
    0x54: 0x0054,
    0x55: 0x0055,
    0x56: 0x0056,
    0x57: 0x0057,
    0x58: 0x0058,
    0x59: 0x0059,
    0x5A: 0x005A,
    0x5B: 0x005B,
    0x5C: 0x00A5,
    0x5D: 0x005D,
    0x5E: 0x005E,
    0x5F: 0x005F,
    0x60: 0x0060,
    0x61: 0x0061,
    0x62: 0x0062,
    0x63: 0x0063,
    0x64: 0x0064,
    0x65: 0x0065,
    0x66: 0x0066,
    0x67: 0x0067,
    0x68: 0x0068,
    0x69: 0x0069,
    0x6A: 0x006A,
    0x6B: 0x006B,
    0x6C: 0x006C,
    0x6D: 0x006D,
    0x6E: 0x006E,
    0x6F: 0x006F,
    0x70: 0x0070,
    0x71: 0x0071,
    0x72: 0x0072,
    0x73: 0x0073,
    0x74: 0x0074,
    0x75: 0x0075,
    0x76: 0x0076,
    0x77: 0x0077,
    0x78: 0x0078,
    0x79: 0x0079,
    0x7A: 0x007A,
    0x7B: 0x007B,
    0x7C: 0x007C,
    0x7D: 0x007D,
    0x7E: 0x203E,
    0x8140: 0x3000,
    0x8141: 0x3001,
    0x8142: 0x3002,
    0x8143: 0xFF0C,
    0x8144: 0xFF0E,
    0x8145: 0x30FB,
    0x8146: 0xFF1A,
    0x8147: 0xFF1B,
    0x8148: 0xFF1F,
    0x8149: 0xFF01,
    0x814A: 0x309B,
    0x814B: 0x309C,
    0x814C: 0x00B4,
    0x814D: 0xFF40,
    0x814E: 0x00A8,
    0x814F: 0xFF3E,
    0x8150: 0xFFE3,
    0x8151: 0xFF3F,
    0x8152: 0x30FD,
    0x8153: 0x30FE,
    0x8154: 0x309D,
    0x8155: 0x309E,
    0x8156: 0x3003,
    0x8157: 0x4EDD,
    0x8158: 0x3005,
    0x8159: 0x3006,
    0x815A: 0x3007,
    0x815B: 0x30FC,
    0x815C: 0x2015,
    0x815D: 0x2010,
    0x815E: 0xFF0F,
    0x815F: 0x005C,
    0x8160: 0x301C,
    0x8161: 0x2016,
    0x8162: 0xFF5C,
    0x8163: 0x2026,
    0x8164: 0x2025,
    0x8165: 0x2018,
    0x8166: 0x2019,
    0x8167: 0x201C,
    0x8168: 0x201D,
    0x8169: 0xFF08,
    0x816A: 0xFF09,
    0x816B: 0x3014,
    0x816C: 0x3015,
    0x816D: 0xFF3B,
    0x816E: 0xFF3D,
    0x816F: 0xFF5B,
    0x8170: 0xFF5D,
    0x8171: 0x3008,
    0x8172: 0x3009,
    0x8173: 0x300A,
    0x8174: 0x300B,
    0x8175: 0x300C,
    0x8176: 0x300D,
    0x8177: 0x300E,
    0x8178: 0x300F,
    0x8179: 0x3010,
    0x817A: 0x3011,
    0x817B: 0xFF0B,
    0x817C: 0x2212,
    0x817D: 0x00B1,
    0x817E: 0x00D7,
    0x8180: 0x00F7,
    0x8181: 0xFF1D,
    0x8182: 0x2260,
    0x8183: 0xFF1C,
    0x8184: 0xFF1E,
    0x8185: 0x2266,
    0x8186: 0x2267,
    0x8187: 0x221E,
    0x8188: 0x2234,
    0x8189: 0x2642,
    0x818A: 0x2640,
    0x818B: 0x00B0,
    0x818C: 0x2032,
    0x818D: 0x2033,
    0x818E: 0x2103,
    0x818F: 0xFFE5,
    0x8190: 0xFF04,
    0x8191: 0x00A2,
    0x8192: 0x00A3,
    0x8193: 0xFF05,
    0x8194: 0xFF03,
    0x8195: 0xFF06,
    0x8196: 0xFF0A,
    0x8197: 0xFF20,
    0x8198: 0x00A7,
    0x8199: 0x2606,
    0x819A: 0x2605,
    0x819B: 0x25CB,
    0x819C: 0x25CF,
    0x819D: 0x25CE,
    0x819E: 0x25C7,
    0x819F: 0x25C6,
    0x81A0: 0x25A1,
    0x81A1: 0x25A0,
    0x81A2: 0x25B3,
    0x81A3: 0x25B2,
    0x81A4: 0x25BD,
    0x81A5: 0x25BC,
    0x81A6: 0x203B,
    0x81A7: 0x3012,
    0x81A8: 0x2192,
    0x81A9: 0x2190,
    0x81AA: 0x2191,
    0x81AB: 0x2193,
    0x81AC: 0x3013,
    0x81B8: 0x2208,
    0x81B9: 0x220B,
    0x81BA: 0x2286,
    0x81BB: 0x2287,
    0x81BC: 0x2282,
    0x81BD: 0x2283,
    0x81BE: 0x222A,
    0x81BF: 0x2229,
    0x81C8: 0x2227,
    0x81C9: 0x2228,
    0x81CA: 0x00AC,
    0x81CB: 0x21D2,
    0x81CC: 0x21D4,
    0x81CD: 0x2200,
    0x81CE: 0x2203,
    0x81DA: 0x2220,
    0x81DB: 0x22A5,
    0x81DC: 0x2312,
    0x81DD: 0x2202,
    0x81DE: 0x2207,
    0x81DF: 0x2261,
    0x81E0: 0x2252,
    0x81E1: 0x226A,
    0x81E2: 0x226B,
    0x81E3: 0x221A,
    0x81E4: 0x223D,
    0x81E5: 0x221D,
    0x81E6: 0x2235,
    0x81E7: 0x222B,
    0x81E8: 0x222C,
    0x81F0: 0x212B,
    0x81F1: 0x2030,
    0x81F2: 0x266F,
    0x81F3: 0x266D,
    0x81F4: 0x266A,
    0x81F5: 0x2020,
    0x81F6: 0x2021,
    0x81F7: 0x00B6,
    0x81FC: 0x25EF,
    0x824F: 0xFF10,
    0x8250: 0xFF11,
    0x8251: 0xFF12,
    0x8252: 0xFF13,
    0x8253: 0xFF14,
    0x8254: 0xFF15,
    0x8255: 0xFF16,
    0x8256: 0xFF17,
    0x8257: 0xFF18,
    0x8258: 0xFF19,
    0x8260: 0xFF21,
    0x8261: 0xFF22,
    0x8262: 0xFF23,
    0x8263: 0xFF24,
    0x8264: 0xFF25,
    0x8265: 0xFF26,
    0x8266: 0xFF27,
    0x8267: 0xFF28,
    0x8268: 0xFF29,
    0x8269: 0xFF2A,
    0x826A: 0xFF2B,
    0x826B: 0xFF2C,
    0x826C: 0xFF2D,
    0x826D: 0xFF2E,
    0x826E: 0xFF2F,
    0x826F: 0xFF30,
    0x8270: 0xFF31,
    0x8271: 0xFF32,
    0x8272: 0xFF33,
    0x8273: 0xFF34,
    0x8274: 0xFF35,
    0x8275: 0xFF36,
    0x8276: 0xFF37,
    0x8277: 0xFF38,
    0x8278: 0xFF39,
    0x8279: 0xFF3A,
    0x8281: 0xFF41,
    0x8282: 0xFF42,
    0x8283: 0xFF43,
    0x8284: 0xFF44,
    0x8285: 0xFF45,
    0x8286: 0xFF46,
    0x8287: 0xFF47,
    0x8288: 0xFF48,
    0x8289: 0xFF49,
    0x828A: 0xFF4A,
    0x828B: 0xFF4B,
    0x828C: 0xFF4C,
    0x828D: 0xFF4D,
    0x828E: 0xFF4E,
    0x828F: 0xFF4F,
    0x8290: 0xFF50,
    0x8291: 0xFF51,
    0x8292: 0xFF52,
    0x8293: 0xFF53,
    0x8294: 0xFF54,
    0x8295: 0xFF55,
    0x8296: 0xFF56,
    0x8297: 0xFF57,
    0x8298: 0xFF58,
    0x8299: 0xFF59,
    0x829A: 0xFF5A,
    0x829F: 0x3041,
    0x82A0: 0x3042,
    0x82A1: 0x3043,
    0x82A2: 0x3044,
    0x82A3: 0x3045,
    0x82A4: 0x3046,
    0x82A5: 0x3047,
    0x82A6: 0x3048,
    0x82A7: 0x3049,
    0x82A8: 0x304A,
    0x82A9: 0x304B,
    0x82AA: 0x304C,
    0x82AB: 0x304D,
    0x82AC: 0x304E,
    0x82AD: 0x304F,
    0x82AE: 0x3050,
    0x82AF: 0x3051,
    0x82B0: 0x3052,
    0x82B1: 0x3053,
    0x82B2: 0x3054,
    0x82B3: 0x3055,
    0x82B4: 0x3056,
    0x82B5: 0x3057,
    0x82B6: 0x3058,
    0x82B7: 0x3059,
    0x82B8: 0x305A,
    0x82B9: 0x305B,
    0x82BA: 0x305C,
    0x82BB: 0x305D,
    0x82BC: 0x305E,
    0x82BD: 0x305F,
    0x82BE: 0x3060,
    0x82BF: 0x3061,
    0x82C0: 0x3062,
    0x82C1: 0x3063,
    0x82C2: 0x3064,
    0x82C3: 0x3065,
    0x82C4: 0x3066,
    0x82C5: 0x3067,
    0x82C6: 0x3068,
    0x82C7: 0x3069,
    0x82C8: 0x306A,
    0x82C9: 0x306B,
    0x82CA: 0x306C,
    0x82CB: 0x306D,
    0x82CC: 0x306E,
    0x82CD: 0x306F,
    0x82CE: 0x3070,
    0x82CF: 0x3071,
    0x82D0: 0x3072,
    0x82D1: 0x3073,
    0x82D2: 0x3074,
    0x82D3: 0x3075,
    0x82D4: 0x3076,
    0x82D5: 0x3077,
    0x82D6: 0x3078,
    0x82D7: 0x3079,
    0x82D8: 0x307A,
    0x82D9: 0x307B,
    0x82DA: 0x307C,
    0x82DB: 0x307D,
    0x82DC: 0x307E,
    0x82DD: 0x307F,
    0x82DE: 0x3080,
    0x82DF: 0x3081,
    0x82E0: 0x3082,
    0x82E1: 0x3083,
    0x82E2: 0x3084,
    0x82E3: 0x3085,
    0x82E4: 0x3086,
    0x82E5: 0x3087,
    0x82E6: 0x3088,
    0x82E7: 0x3089,
    0x82E8: 0x308A,
    0x82E9: 0x308B,
    0x82EA: 0x308C,
    0x82EB: 0x308D,
    0x82EC: 0x308E,
    0x82ED: 0x308F,
    0x82EE: 0x3090,
    0x82EF: 0x3091,
    0x82F0: 0x3092,
    0x82F1: 0x3093,
    0x8340: 0x30A1,
    0x8341: 0x30A2,
    0x8342: 0x30A3,
    0x8343: 0x30A4,
    0x8344: 0x30A5,
    0x8345: 0x30A6,
    0x8346: 0x30A7,
    0x8347: 0x30A8,
    0x8348: 0x30A9,
    0x8349: 0x30AA,
    0x834A: 0x30AB,
    0x834B: 0x30AC,
    0x834C: 0x30AD,
    0x834D: 0x30AE,
    0x834E: 0x30AF,
    0x834F: 0x30B0,
    0x8350: 0x30B1,
    0x8351: 0x30B2,
    0x8352: 0x30B3,
    0x8353: 0x30B4,
    0x8354: 0x30B5,
    0x8355: 0x30B6,
    0x8356: 0x30B7,
    0x8357: 0x30B8,
    0x8358: 0x30B9,
    0x8359: 0x30BA,
    0x835A: 0x30BB,
    0x835B: 0x30BC,
    0x835C: 0x30BD,
    0x835D: 0x30BE,
    0x835E: 0x30BF,
    0x835F: 0x30C0,
    0x8360: 0x30C1,
    0x8361: 0x30C2,
    0x8362: 0x30C3,
    0x8363: 0x30C4,
    0x8364: 0x30C5,
    0x8365: 0x30C6,
    0x8366: 0x30C7,
    0x8367: 0x30C8,
    0x8368: 0x30C9,
    0x8369: 0x30CA,
    0x836A: 0x30CB,
    0x836B: 0x30CC,
    0x836C: 0x30CD,
    0x836D: 0x30CE,
    0x836E: 0x30CF,
    0x836F: 0x30D0,
    0x8370: 0x30D1,
    0x8371: 0x30D2,
    0x8372: 0x30D3,
    0x8373: 0x30D4,
    0x8374: 0x30D5,
    0x8375: 0x30D6,
    0x8376: 0x30D7,
    0x8377: 0x30D8,
    0x8378: 0x30D9,
    0x8379: 0x30DA,
    0x837A: 0x30DB,
    0x837B: 0x30DC,
    0x837C: 0x30DD,
    0x837D: 0x30DE,
    0x837E: 0x30DF,
    0x8380: 0x30E0,
    0x8381: 0x30E1,
    0x8382: 0x30E2,
    0x8383: 0x30E3,
    0x8384: 0x30E4,
    0x8385: 0x30E5,
    0x8386: 0x30E6,
    0x8387: 0x30E7,
    0x8388: 0x30E8,
    0x8389: 0x30E9,
    0x838A: 0x30EA,
    0x838B: 0x30EB,
    0x838C: 0x30EC,
    0x838D: 0x30ED,
    0x838E: 0x30EE,
    0x838F: 0x30EF,
    0x8390: 0x30F0,
    0x8391: 0x30F1,
    0x8392: 0x30F2,
    0x8393: 0x30F3,
    0x8394: 0x30F4,
    0x8395: 0x30F5,
    0x8396: 0x30F6,
    0x839F: 0x0391,
    0x83A0: 0x0392,
    0x83A1: 0x0393,
    0x83A2: 0x0394,
    0x83A3: 0x0395,
    0x83A4: 0x0396,
    0x83A5: 0x0397,
    0x83A6: 0x0398,
    0x83A7: 0x0399,
    0x83A8: 0x039A,
    0x83A9: 0x039B,
    0x83AA: 0x039C,
    0x83AB: 0x039D,
    0x83AC: 0x039E,
    0x83AD: 0x039F,
    0x83AE: 0x03A0,
    0x83AF: 0x03A1,
    0x83B0: 0x03A3,
    0x83B1: 0x03A4,
    0x83B2: 0x03A5,
    0x83B3: 0x03A6,
    0x83B4: 0x03A7,
    0x83B5: 0x03A8,
    0x83B6: 0x03A9,
    0x83BF: 0x03B1,
    0x83C0: 0x03B2,
    0x83C1: 0x03B3,
    0x83C2: 0x03B4,
    0x83C3: 0x03B5,
    0x83C4: 0x03B6,
    0x83C5: 0x03B7,
    0x83C6: 0x03B8,
    0x83C7: 0x03B9,
    0x83C8: 0x03BA,
    0x83C9: 0x03BB,
    0x83CA: 0x03BC,
    0x83CB: 0x03BD,
    0x83CC: 0x03BE,
    0x83CD: 0x03BF,
    0x83CE: 0x03C0,
    0x83CF: 0x03C1,
    0x83D0: 0x03C3,
    0x83D1: 0x03C4,
    0x83D2: 0x03C5,
    0x83D3: 0x03C6,
    0x83D4: 0x03C7,
    0x83D5: 0x03C8,
    0x83D6: 0x03C9,
    0x8440: 0x0410,
    0x8441: 0x0411,
    0x8442: 0x0412,
    0x8443: 0x0413,
    0x8444: 0x0414,
    0x8445: 0x0415,
    0x8446: 0x0401,
    0x8447: 0x0416,
    0x8448: 0x0417,
    0x8449: 0x0418,
    0x844A: 0x0419,
    0x844B: 0x041A,
    0x844C: 0x041B,
    0x844D: 0x041C,
    0x844E: 0x041D,
    0x844F: 0x041E,
    0x8450: 0x041F,
    0x8451: 0x0420,
    0x8452: 0x0421,
    0x8453: 0x0422,
    0x8454: 0x0423,
    0x8455: 0x0424,
    0x8456: 0x0425,
    0x8457: 0x0426,
    0x8458: 0x0427,
    0x8459: 0x0428,
    0x845A: 0x0429,
    0x845B: 0x042A,
    0x845C: 0x042B,
    0x845D: 0x042C,
    0x845E: 0x042D,
    0x845F: 0x042E,
    0x8460: 0x042F,
    0x8470: 0x0430,
    0x8471: 0x0431,
    0x8472: 0x0432,
    0x8473: 0x0433,
    0x8474: 0x0434,
    0x8475: 0x0435,
    0x8476: 0x0451,
    0x8477: 0x0436,
    0x8478: 0x0437,
    0x8479: 0x0438,
    0x847A: 0x0439,
    0x847B: 0x043A,
    0x847C: 0x043B,
    0x847D: 0x043C,
    0x847E: 0x043D,
    0x8480: 0x043E,
    0x8481: 0x043F,
    0x8482: 0x0440,
    0x8483: 0x0441,
    0x8484: 0x0442,
    0x8485: 0x0443,
    0x8486: 0x0444,
    0x8487: 0x0445,
    0x8488: 0x0446,
    0x8489: 0x0447,
    0x848A: 0x0448,
    0x848B: 0x0449,
    0x848C: 0x044A,
    0x848D: 0x044B,
    0x848E: 0x044C,
    0x848F: 0x044D,
    0x8490: 0x044E,
    0x8491: 0x044F,
    0x849F: 0x2500,
    0x84A0: 0x2502,
    0x84A1: 0x250C,
    0x84A2: 0x2510,
    0x84A3: 0x2518,
    0x84A4: 0x2514,
    0x84A5: 0x251C,
    0x84A6: 0x252C,
    0x84A7: 0x2524,
    0x84A8: 0x2534,
    0x84A9: 0x253C,
    0x84AA: 0x2501,
    0x84AB: 0x2503,
    0x84AC: 0x250F,
    0x84AD: 0x2513,
    0x84AE: 0x251B,
    0x84AF: 0x2517,
    0x84B0: 0x2523,
    0x84B1: 0x2533,
    0x84B2: 0x252B,
    0x84B3: 0x253B,
    0x84B4: 0x254B,
    0x84B5: 0x2520,
    0x84B6: 0x252F,
    0x84B7: 0x2528,
    0x84B8: 0x2537,
    0x84B9: 0x253F,
    0x84BA: 0x251D,
    0x84BB: 0x2530,
    0x84BC: 0x2525,
    0x84BD: 0x2538,
    0x84BE: 0x2542,
    0x889F: 0x4E9C,
    0x88A0: 0x5516,
    0x88A1: 0x5A03,
    0x88A2: 0x963F,
    0x88A3: 0x54C0,
    0x88A4: 0x611B,
    0x88A5: 0x6328,
    0x88A6: 0x59F6,
    0x88A7: 0x9022,
    0x88A8: 0x8475,
    0x88A9: 0x831C,
    0x88AA: 0x7A50,
    0x88AB: 0x60AA,
    0x88AC: 0x63E1,
    0x88AD: 0x6E25,
    0x88AE: 0x65ED,
    0x88AF: 0x8466,
    0x88B0: 0x82A6,
    0x88B1: 0x9BF5,
    0x88B2: 0x6893,
    0x88B3: 0x5727,
    0x88B4: 0x65A1,
    0x88B5: 0x6271,
    0x88B6: 0x5B9B,
    0x88B7: 0x59D0,
    0x88B8: 0x867B,
    0x88B9: 0x98F4,
    0x88BA: 0x7D62,
    0x88BB: 0x7DBE,
    0x88BC: 0x9B8E,
    0x88BD: 0x6216,
    0x88BE: 0x7C9F,
    0x88BF: 0x88B7,
    0x88C0: 0x5B89,
    0x88C1: 0x5EB5,
    0x88C2: 0x6309,
    0x88C3: 0x6697,
    0x88C4: 0x6848,
    0x88C5: 0x95C7,
    0x88C6: 0x978D,
    0x88C7: 0x674F,
    0x88C8: 0x4EE5,
    0x88C9: 0x4F0A,
    0x88CA: 0x4F4D,
    0x88CB: 0x4F9D,
    0x88CC: 0x5049,
    0x88CD: 0x56F2,
    0x88CE: 0x5937,
    0x88CF: 0x59D4,
    0x88D0: 0x5A01,
    0x88D1: 0x5C09,
    0x88D2: 0x60DF,
    0x88D3: 0x610F,
    0x88D4: 0x6170,
    0x88D5: 0x6613,
    0x88D6: 0x6905,
    0x88D7: 0x70BA,
    0x88D8: 0x754F,
    0x88D9: 0x7570,
    0x88DA: 0x79FB,
    0x88DB: 0x7DAD,
    0x88DC: 0x7DEF,
    0x88DD: 0x80C3,
    0x88DE: 0x840E,
    0x88DF: 0x8863,
    0x88E0: 0x8B02,
    0x88E1: 0x9055,
    0x88E2: 0x907A,
    0x88E3: 0x533B,
    0x88E4: 0x4E95,
    0x88E5: 0x4EA5,
    0x88E6: 0x57DF,
    0x88E7: 0x80B2,
    0x88E8: 0x90C1,
    0x88E9: 0x78EF,
    0x88EA: 0x4E00,
    0x88EB: 0x58F1,
    0x88EC: 0x6EA2,
    0x88ED: 0x9038,
    0x88EE: 0x7A32,
    0x88EF: 0x8328,
    0x88F0: 0x828B,
    0x88F1: 0x9C2F,
    0x88F2: 0x5141,
    0x88F3: 0x5370,
    0x88F4: 0x54BD,
    0x88F5: 0x54E1,
    0x88F6: 0x56E0,
    0x88F7: 0x59FB,
    0x88F8: 0x5F15,
    0x88F9: 0x98F2,
    0x88FA: 0x6DEB,
    0x88FB: 0x80E4,
    0x88FC: 0x852D,
    0x8940: 0x9662,
    0x8941: 0x9670,
    0x8942: 0x96A0,
    0x8943: 0x97FB,
    0x8944: 0x540B,
    0x8945: 0x53F3,
    0x8946: 0x5B87,
    0x8947: 0x70CF,
    0x8948: 0x7FBD,
    0x8949: 0x8FC2,
    0x894A: 0x96E8,
    0x894B: 0x536F,
    0x894C: 0x9D5C,
    0x894D: 0x7ABA,
    0x894E: 0x4E11,
    0x894F: 0x7893,
    0x8950: 0x81FC,
    0x8951: 0x6E26,
    0x8952: 0x5618,
    0x8953: 0x5504,
    0x8954: 0x6B1D,
    0x8955: 0x851A,
    0x8956: 0x9C3B,
    0x8957: 0x59E5,
    0x8958: 0x53A9,
    0x8959: 0x6D66,
    0x895A: 0x74DC,
    0x895B: 0x958F,
    0x895C: 0x5642,
    0x895D: 0x4E91,
    0x895E: 0x904B,
    0x895F: 0x96F2,
    0x8960: 0x834F,
    0x8961: 0x990C,
    0x8962: 0x53E1,
    0x8963: 0x55B6,
    0x8964: 0x5B30,
    0x8965: 0x5F71,
    0x8966: 0x6620,
    0x8967: 0x66F3,
    0x8968: 0x6804,
    0x8969: 0x6C38,
    0x896A: 0x6CF3,
    0x896B: 0x6D29,
    0x896C: 0x745B,
    0x896D: 0x76C8,
    0x896E: 0x7A4E,
    0x896F: 0x9834,
    0x8970: 0x82F1,
    0x8971: 0x885B,
    0x8972: 0x8A60,
    0x8973: 0x92ED,
    0x8974: 0x6DB2,
    0x8975: 0x75AB,
    0x8976: 0x76CA,
    0x8977: 0x99C5,
    0x8978: 0x60A6,
    0x8979: 0x8B01,
    0x897A: 0x8D8A,
    0x897B: 0x95B2,
    0x897C: 0x698E,
    0x897D: 0x53AD,
    0x897E: 0x5186,
    0x8980: 0x5712,
    0x8981: 0x5830,
    0x8982: 0x5944,
    0x8983: 0x5BB4,
    0x8984: 0x5EF6,
    0x8985: 0x6028,
    0x8986: 0x63A9,
    0x8987: 0x63F4,
    0x8988: 0x6CBF,
    0x8989: 0x6F14,
    0x898A: 0x708E,
    0x898B: 0x7114,
    0x898C: 0x7159,
    0x898D: 0x71D5,
    0x898E: 0x733F,
    0x898F: 0x7E01,
    0x8990: 0x8276,
    0x8991: 0x82D1,
    0x8992: 0x8597,
    0x8993: 0x9060,
    0x8994: 0x925B,
    0x8995: 0x9D1B,
    0x8996: 0x5869,
    0x8997: 0x65BC,
    0x8998: 0x6C5A,
    0x8999: 0x7525,
    0x899A: 0x51F9,
    0x899B: 0x592E,
    0x899C: 0x5965,
    0x899D: 0x5F80,
    0x899E: 0x5FDC,
    0x899F: 0x62BC,
    0x89A0: 0x65FA,
    0x89A1: 0x6A2A,
    0x89A2: 0x6B27,
    0x89A3: 0x6BB4,
    0x89A4: 0x738B,
    0x89A5: 0x7FC1,
    0x89A6: 0x8956,
    0x89A7: 0x9D2C,
    0x89A8: 0x9D0E,
    0x89A9: 0x9EC4,
    0x89AA: 0x5CA1,
    0x89AB: 0x6C96,
    0x89AC: 0x837B,
    0x89AD: 0x5104,
    0x89AE: 0x5C4B,
    0x89AF: 0x61B6,
    0x89B0: 0x81C6,
    0x89B1: 0x6876,
    0x89B2: 0x7261,
    0x89B3: 0x4E59,
    0x89B4: 0x4FFA,
    0x89B5: 0x5378,
    0x89B6: 0x6069,
    0x89B7: 0x6E29,
    0x89B8: 0x7A4F,
    0x89B9: 0x97F3,
    0x89BA: 0x4E0B,
    0x89BB: 0x5316,
    0x89BC: 0x4EEE,
    0x89BD: 0x4F55,
    0x89BE: 0x4F3D,
    0x89BF: 0x4FA1,
    0x89C0: 0x4F73,
    0x89C1: 0x52A0,
    0x89C2: 0x53EF,
    0x89C3: 0x5609,
    0x89C4: 0x590F,
    0x89C5: 0x5AC1,
    0x89C6: 0x5BB6,
    0x89C7: 0x5BE1,
    0x89C8: 0x79D1,
    0x89C9: 0x6687,
    0x89CA: 0x679C,
    0x89CB: 0x67B6,
    0x89CC: 0x6B4C,
    0x89CD: 0x6CB3,
    0x89CE: 0x706B,
    0x89CF: 0x73C2,
    0x89D0: 0x798D,
    0x89D1: 0x79BE,
    0x89D2: 0x7A3C,
    0x89D3: 0x7B87,
    0x89D4: 0x82B1,
    0x89D5: 0x82DB,
    0x89D6: 0x8304,
    0x89D7: 0x8377,
    0x89D8: 0x83EF,
    0x89D9: 0x83D3,
    0x89DA: 0x8766,
    0x89DB: 0x8AB2,
    0x89DC: 0x5629,
    0x89DD: 0x8CA8,
    0x89DE: 0x8FE6,
    0x89DF: 0x904E,
    0x89E0: 0x971E,
    0x89E1: 0x868A,
    0x89E2: 0x4FC4,
    0x89E3: 0x5CE8,
    0x89E4: 0x6211,
    0x89E5: 0x7259,
    0x89E6: 0x753B,
    0x89E7: 0x81E5,
    0x89E8: 0x82BD,
    0x89E9: 0x86FE,
    0x89EA: 0x8CC0,
    0x89EB: 0x96C5,
    0x89EC: 0x9913,
    0x89ED: 0x99D5,
    0x89EE: 0x4ECB,
    0x89EF: 0x4F1A,
    0x89F0: 0x89E3,
    0x89F1: 0x56DE,
    0x89F2: 0x584A,
    0x89F3: 0x58CA,
    0x89F4: 0x5EFB,
    0x89F5: 0x5FEB,
    0x89F6: 0x602A,
    0x89F7: 0x6094,
    0x89F8: 0x6062,
    0x89F9: 0x61D0,
    0x89FA: 0x6212,
    0x89FB: 0x62D0,
    0x89FC: 0x6539,
    0x8A40: 0x9B41,
    0x8A41: 0x6666,
    0x8A42: 0x68B0,
    0x8A43: 0x6D77,
    0x8A44: 0x7070,
    0x8A45: 0x754C,
    0x8A46: 0x7686,
    0x8A47: 0x7D75,
    0x8A48: 0x82A5,
    0x8A49: 0x87F9,
    0x8A4A: 0x958B,
    0x8A4B: 0x968E,
    0x8A4C: 0x8C9D,
    0x8A4D: 0x51F1,
    0x8A4E: 0x52BE,
    0x8A4F: 0x5916,
    0x8A50: 0x54B3,
    0x8A51: 0x5BB3,
    0x8A52: 0x5D16,
    0x8A53: 0x6168,
    0x8A54: 0x6982,
    0x8A55: 0x6DAF,
    0x8A56: 0x788D,
    0x8A57: 0x84CB,
    0x8A58: 0x8857,
    0x8A59: 0x8A72,
    0x8A5A: 0x93A7,
    0x8A5B: 0x9AB8,
    0x8A5C: 0x6D6C,
    0x8A5D: 0x99A8,
    0x8A5E: 0x86D9,
    0x8A5F: 0x57A3,
    0x8A60: 0x67FF,
    0x8A61: 0x86CE,
    0x8A62: 0x920E,
    0x8A63: 0x5283,
    0x8A64: 0x5687,
    0x8A65: 0x5404,
    0x8A66: 0x5ED3,
    0x8A67: 0x62E1,
    0x8A68: 0x64B9,
    0x8A69: 0x683C,
    0x8A6A: 0x6838,
    0x8A6B: 0x6BBB,
    0x8A6C: 0x7372,
    0x8A6D: 0x78BA,
    0x8A6E: 0x7A6B,
    0x8A6F: 0x899A,
    0x8A70: 0x89D2,
    0x8A71: 0x8D6B,
    0x8A72: 0x8F03,
    0x8A73: 0x90ED,
    0x8A74: 0x95A3,
    0x8A75: 0x9694,
    0x8A76: 0x9769,
    0x8A77: 0x5B66,
    0x8A78: 0x5CB3,
    0x8A79: 0x697D,
    0x8A7A: 0x984D,
    0x8A7B: 0x984E,
    0x8A7C: 0x639B,
    0x8A7D: 0x7B20,
    0x8A7E: 0x6A2B,
    0x8A80: 0x6A7F,
    0x8A81: 0x68B6,
    0x8A82: 0x9C0D,
    0x8A83: 0x6F5F,
    0x8A84: 0x5272,
    0x8A85: 0x559D,
    0x8A86: 0x6070,
    0x8A87: 0x62EC,
    0x8A88: 0x6D3B,
    0x8A89: 0x6E07,
    0x8A8A: 0x6ED1,
    0x8A8B: 0x845B,
    0x8A8C: 0x8910,
    0x8A8D: 0x8F44,
    0x8A8E: 0x4E14,
    0x8A8F: 0x9C39,
    0x8A90: 0x53F6,
    0x8A91: 0x691B,
    0x8A92: 0x6A3A,
    0x8A93: 0x9784,
    0x8A94: 0x682A,
    0x8A95: 0x515C,
    0x8A96: 0x7AC3,
    0x8A97: 0x84B2,
    0x8A98: 0x91DC,
    0x8A99: 0x938C,
    0x8A9A: 0x565B,
    0x8A9B: 0x9D28,
    0x8A9C: 0x6822,
    0x8A9D: 0x8305,
    0x8A9E: 0x8431,
    0x8A9F: 0x7CA5,
    0x8AA0: 0x5208,
    0x8AA1: 0x82C5,
    0x8AA2: 0x74E6,
    0x8AA3: 0x4E7E,
    0x8AA4: 0x4F83,
    0x8AA5: 0x51A0,
    0x8AA6: 0x5BD2,
    0x8AA7: 0x520A,
    0x8AA8: 0x52D8,
    0x8AA9: 0x52E7,
    0x8AAA: 0x5DFB,
    0x8AAB: 0x559A,
    0x8AAC: 0x582A,
    0x8AAD: 0x59E6,
    0x8AAE: 0x5B8C,
    0x8AAF: 0x5B98,
    0x8AB0: 0x5BDB,
    0x8AB1: 0x5E72,
    0x8AB2: 0x5E79,
    0x8AB3: 0x60A3,
    0x8AB4: 0x611F,
    0x8AB5: 0x6163,
    0x8AB6: 0x61BE,
    0x8AB7: 0x63DB,
    0x8AB8: 0x6562,
    0x8AB9: 0x67D1,
    0x8ABA: 0x6853,
    0x8ABB: 0x68FA,
    0x8ABC: 0x6B3E,
    0x8ABD: 0x6B53,
    0x8ABE: 0x6C57,
    0x8ABF: 0x6F22,
    0x8AC0: 0x6F97,
    0x8AC1: 0x6F45,
    0x8AC2: 0x74B0,
    0x8AC3: 0x7518,
    0x8AC4: 0x76E3,
    0x8AC5: 0x770B,
    0x8AC6: 0x7AFF,
    0x8AC7: 0x7BA1,
    0x8AC8: 0x7C21,
    0x8AC9: 0x7DE9,
    0x8ACA: 0x7F36,
    0x8ACB: 0x7FF0,
    0x8ACC: 0x809D,
    0x8ACD: 0x8266,
    0x8ACE: 0x839E,
    0x8ACF: 0x89B3,
    0x8AD0: 0x8ACC,
    0x8AD1: 0x8CAB,
    0x8AD2: 0x9084,
    0x8AD3: 0x9451,
    0x8AD4: 0x9593,
    0x8AD5: 0x9591,
    0x8AD6: 0x95A2,
    0x8AD7: 0x9665,
    0x8AD8: 0x97D3,
    0x8AD9: 0x9928,
    0x8ADA: 0x8218,
    0x8ADB: 0x4E38,
    0x8ADC: 0x542B,
    0x8ADD: 0x5CB8,
    0x8ADE: 0x5DCC,
    0x8ADF: 0x73A9,
    0x8AE0: 0x764C,
    0x8AE1: 0x773C,
    0x8AE2: 0x5CA9,
    0x8AE3: 0x7FEB,
    0x8AE4: 0x8D0B,
    0x8AE5: 0x96C1,
    0x8AE6: 0x9811,
    0x8AE7: 0x9854,
    0x8AE8: 0x9858,
    0x8AE9: 0x4F01,
    0x8AEA: 0x4F0E,
    0x8AEB: 0x5371,
    0x8AEC: 0x559C,
    0x8AED: 0x5668,
    0x8AEE: 0x57FA,
    0x8AEF: 0x5947,
    0x8AF0: 0x5B09,
    0x8AF1: 0x5BC4,
    0x8AF2: 0x5C90,
    0x8AF3: 0x5E0C,
    0x8AF4: 0x5E7E,
    0x8AF5: 0x5FCC,
    0x8AF6: 0x63EE,
    0x8AF7: 0x673A,
    0x8AF8: 0x65D7,
    0x8AF9: 0x65E2,
    0x8AFA: 0x671F,
    0x8AFB: 0x68CB,
    0x8AFC: 0x68C4,
    0x8B40: 0x6A5F,
    0x8B41: 0x5E30,
    0x8B42: 0x6BC5,
    0x8B43: 0x6C17,
    0x8B44: 0x6C7D,
    0x8B45: 0x757F,
    0x8B46: 0x7948,
    0x8B47: 0x5B63,
    0x8B48: 0x7A00,
    0x8B49: 0x7D00,
    0x8B4A: 0x5FBD,
    0x8B4B: 0x898F,
    0x8B4C: 0x8A18,
    0x8B4D: 0x8CB4,
    0x8B4E: 0x8D77,
    0x8B4F: 0x8ECC,
    0x8B50: 0x8F1D,
    0x8B51: 0x98E2,
    0x8B52: 0x9A0E,
    0x8B53: 0x9B3C,
    0x8B54: 0x4E80,
    0x8B55: 0x507D,
    0x8B56: 0x5100,
    0x8B57: 0x5993,
    0x8B58: 0x5B9C,
    0x8B59: 0x622F,
    0x8B5A: 0x6280,
    0x8B5B: 0x64EC,
    0x8B5C: 0x6B3A,
    0x8B5D: 0x72A0,
    0x8B5E: 0x7591,
    0x8B5F: 0x7947,
    0x8B60: 0x7FA9,
    0x8B61: 0x87FB,
    0x8B62: 0x8ABC,
    0x8B63: 0x8B70,
    0x8B64: 0x63AC,
    0x8B65: 0x83CA,
    0x8B66: 0x97A0,
    0x8B67: 0x5409,
    0x8B68: 0x5403,
    0x8B69: 0x55AB,
    0x8B6A: 0x6854,
    0x8B6B: 0x6A58,
    0x8B6C: 0x8A70,
    0x8B6D: 0x7827,
    0x8B6E: 0x6775,
    0x8B6F: 0x9ECD,
    0x8B70: 0x5374,
    0x8B71: 0x5BA2,
    0x8B72: 0x811A,
    0x8B73: 0x8650,
    0x8B74: 0x9006,
    0x8B75: 0x4E18,
    0x8B76: 0x4E45,
    0x8B77: 0x4EC7,
    0x8B78: 0x4F11,
    0x8B79: 0x53CA,
    0x8B7A: 0x5438,
    0x8B7B: 0x5BAE,
    0x8B7C: 0x5F13,
    0x8B7D: 0x6025,
    0x8B7E: 0x6551,
    0x8B80: 0x673D,
    0x8B81: 0x6C42,
    0x8B82: 0x6C72,
    0x8B83: 0x6CE3,
    0x8B84: 0x7078,
    0x8B85: 0x7403,
    0x8B86: 0x7A76,
    0x8B87: 0x7AAE,
    0x8B88: 0x7B08,
    0x8B89: 0x7D1A,
    0x8B8A: 0x7CFE,
    0x8B8B: 0x7D66,
    0x8B8C: 0x65E7,
    0x8B8D: 0x725B,
    0x8B8E: 0x53BB,
    0x8B8F: 0x5C45,
    0x8B90: 0x5DE8,
    0x8B91: 0x62D2,
    0x8B92: 0x62E0,
    0x8B93: 0x6319,
    0x8B94: 0x6E20,
    0x8B95: 0x865A,
    0x8B96: 0x8A31,
    0x8B97: 0x8DDD,
    0x8B98: 0x92F8,
    0x8B99: 0x6F01,
    0x8B9A: 0x79A6,
    0x8B9B: 0x9B5A,
    0x8B9C: 0x4EA8,
    0x8B9D: 0x4EAB,
    0x8B9E: 0x4EAC,
    0x8B9F: 0x4F9B,
    0x8BA0: 0x4FA0,
    0x8BA1: 0x50D1,
    0x8BA2: 0x5147,
    0x8BA3: 0x7AF6,
    0x8BA4: 0x5171,
    0x8BA5: 0x51F6,
    0x8BA6: 0x5354,
    0x8BA7: 0x5321,
    0x8BA8: 0x537F,
    0x8BA9: 0x53EB,
    0x8BAA: 0x55AC,
    0x8BAB: 0x5883,
    0x8BAC: 0x5CE1,
    0x8BAD: 0x5F37,
    0x8BAE: 0x5F4A,
    0x8BAF: 0x602F,
    0x8BB0: 0x6050,
    0x8BB1: 0x606D,
    0x8BB2: 0x631F,
    0x8BB3: 0x6559,
    0x8BB4: 0x6A4B,
    0x8BB5: 0x6CC1,
    0x8BB6: 0x72C2,
    0x8BB7: 0x72ED,
    0x8BB8: 0x77EF,
    0x8BB9: 0x80F8,
    0x8BBA: 0x8105,
    0x8BBB: 0x8208,
    0x8BBC: 0x854E,
    0x8BBD: 0x90F7,
    0x8BBE: 0x93E1,
    0x8BBF: 0x97FF,
    0x8BC0: 0x9957,
    0x8BC1: 0x9A5A,
    0x8BC2: 0x4EF0,
    0x8BC3: 0x51DD,
    0x8BC4: 0x5C2D,
    0x8BC5: 0x6681,
    0x8BC6: 0x696D,
    0x8BC7: 0x5C40,
    0x8BC8: 0x66F2,
    0x8BC9: 0x6975,
    0x8BCA: 0x7389,
    0x8BCB: 0x6850,
    0x8BCC: 0x7C81,
    0x8BCD: 0x50C5,
    0x8BCE: 0x52E4,
    0x8BCF: 0x5747,
    0x8BD0: 0x5DFE,
    0x8BD1: 0x9326,
    0x8BD2: 0x65A4,
    0x8BD3: 0x6B23,
    0x8BD4: 0x6B3D,
    0x8BD5: 0x7434,
    0x8BD6: 0x7981,
    0x8BD7: 0x79BD,
    0x8BD8: 0x7B4B,
    0x8BD9: 0x7DCA,
    0x8BDA: 0x82B9,
    0x8BDB: 0x83CC,
    0x8BDC: 0x887F,
    0x8BDD: 0x895F,
    0x8BDE: 0x8B39,
    0x8BDF: 0x8FD1,
    0x8BE0: 0x91D1,
    0x8BE1: 0x541F,
    0x8BE2: 0x9280,
    0x8BE3: 0x4E5D,
    0x8BE4: 0x5036,
    0x8BE5: 0x53E5,
    0x8BE6: 0x533A,
    0x8BE7: 0x72D7,
    0x8BE8: 0x7396,
    0x8BE9: 0x77E9,
    0x8BEA: 0x82E6,
    0x8BEB: 0x8EAF,
    0x8BEC: 0x99C6,
    0x8BED: 0x99C8,
    0x8BEE: 0x99D2,
    0x8BEF: 0x5177,
    0x8BF0: 0x611A,
    0x8BF1: 0x865E,
    0x8BF2: 0x55B0,
    0x8BF3: 0x7A7A,
    0x8BF4: 0x5076,
    0x8BF5: 0x5BD3,
    0x8BF6: 0x9047,
    0x8BF7: 0x9685,
    0x8BF8: 0x4E32,
    0x8BF9: 0x6ADB,
    0x8BFA: 0x91E7,
    0x8BFB: 0x5C51,
    0x8BFC: 0x5C48,
    0x8C40: 0x6398,
    0x8C41: 0x7A9F,
    0x8C42: 0x6C93,
    0x8C43: 0x9774,
    0x8C44: 0x8F61,
    0x8C45: 0x7AAA,
    0x8C46: 0x718A,
    0x8C47: 0x9688,
    0x8C48: 0x7C82,
    0x8C49: 0x6817,
    0x8C4A: 0x7E70,
    0x8C4B: 0x6851,
    0x8C4C: 0x936C,
    0x8C4D: 0x52F2,
    0x8C4E: 0x541B,
    0x8C4F: 0x85AB,
    0x8C50: 0x8A13,
    0x8C51: 0x7FA4,
    0x8C52: 0x8ECD,
    0x8C53: 0x90E1,
    0x8C54: 0x5366,
    0x8C55: 0x8888,
    0x8C56: 0x7941,
    0x8C57: 0x4FC2,
    0x8C58: 0x50BE,
    0x8C59: 0x5211,
    0x8C5A: 0x5144,
    0x8C5B: 0x5553,
    0x8C5C: 0x572D,
    0x8C5D: 0x73EA,
    0x8C5E: 0x578B,
    0x8C5F: 0x5951,
    0x8C60: 0x5F62,
    0x8C61: 0x5F84,
    0x8C62: 0x6075,
    0x8C63: 0x6176,
    0x8C64: 0x6167,
    0x8C65: 0x61A9,
    0x8C66: 0x63B2,
    0x8C67: 0x643A,
    0x8C68: 0x656C,
    0x8C69: 0x666F,
    0x8C6A: 0x6842,
    0x8C6B: 0x6E13,
    0x8C6C: 0x7566,
    0x8C6D: 0x7A3D,
    0x8C6E: 0x7CFB,
    0x8C6F: 0x7D4C,
    0x8C70: 0x7D99,
    0x8C71: 0x7E4B,
    0x8C72: 0x7F6B,
    0x8C73: 0x830E,
    0x8C74: 0x834A,
    0x8C75: 0x86CD,
    0x8C76: 0x8A08,
    0x8C77: 0x8A63,
    0x8C78: 0x8B66,
    0x8C79: 0x8EFD,
    0x8C7A: 0x981A,
    0x8C7B: 0x9D8F,
    0x8C7C: 0x82B8,
    0x8C7D: 0x8FCE,
    0x8C7E: 0x9BE8,
    0x8C80: 0x5287,
    0x8C81: 0x621F,
    0x8C82: 0x6483,
    0x8C83: 0x6FC0,
    0x8C84: 0x9699,
    0x8C85: 0x6841,
    0x8C86: 0x5091,
    0x8C87: 0x6B20,
    0x8C88: 0x6C7A,
    0x8C89: 0x6F54,
    0x8C8A: 0x7A74,
    0x8C8B: 0x7D50,
    0x8C8C: 0x8840,
    0x8C8D: 0x8A23,
    0x8C8E: 0x6708,
    0x8C8F: 0x4EF6,
    0x8C90: 0x5039,
    0x8C91: 0x5026,
    0x8C92: 0x5065,
    0x8C93: 0x517C,
    0x8C94: 0x5238,
    0x8C95: 0x5263,
    0x8C96: 0x55A7,
    0x8C97: 0x570F,
    0x8C98: 0x5805,
    0x8C99: 0x5ACC,
    0x8C9A: 0x5EFA,
    0x8C9B: 0x61B2,
    0x8C9C: 0x61F8,
    0x8C9D: 0x62F3,
    0x8C9E: 0x6372,
    0x8C9F: 0x691C,
    0x8CA0: 0x6A29,
    0x8CA1: 0x727D,
    0x8CA2: 0x72AC,
    0x8CA3: 0x732E,
    0x8CA4: 0x7814,
    0x8CA5: 0x786F,
    0x8CA6: 0x7D79,
    0x8CA7: 0x770C,
    0x8CA8: 0x80A9,
    0x8CA9: 0x898B,
    0x8CAA: 0x8B19,
    0x8CAB: 0x8CE2,
    0x8CAC: 0x8ED2,
    0x8CAD: 0x9063,
    0x8CAE: 0x9375,
    0x8CAF: 0x967A,
    0x8CB0: 0x9855,
    0x8CB1: 0x9A13,
    0x8CB2: 0x9E78,
    0x8CB3: 0x5143,
    0x8CB4: 0x539F,
    0x8CB5: 0x53B3,
    0x8CB6: 0x5E7B,
    0x8CB7: 0x5F26,
    0x8CB8: 0x6E1B,
    0x8CB9: 0x6E90,
    0x8CBA: 0x7384,
    0x8CBB: 0x73FE,
    0x8CBC: 0x7D43,
    0x8CBD: 0x8237,
    0x8CBE: 0x8A00,
    0x8CBF: 0x8AFA,
    0x8CC0: 0x9650,
    0x8CC1: 0x4E4E,
    0x8CC2: 0x500B,
    0x8CC3: 0x53E4,
    0x8CC4: 0x547C,
    0x8CC5: 0x56FA,
    0x8CC6: 0x59D1,
    0x8CC7: 0x5B64,
    0x8CC8: 0x5DF1,
    0x8CC9: 0x5EAB,
    0x8CCA: 0x5F27,
    0x8CCB: 0x6238,
    0x8CCC: 0x6545,
    0x8CCD: 0x67AF,
    0x8CCE: 0x6E56,
    0x8CCF: 0x72D0,
    0x8CD0: 0x7CCA,
    0x8CD1: 0x88B4,
    0x8CD2: 0x80A1,
    0x8CD3: 0x80E1,
    0x8CD4: 0x83F0,
    0x8CD5: 0x864E,
    0x8CD6: 0x8A87,
    0x8CD7: 0x8DE8,
    0x8CD8: 0x9237,
    0x8CD9: 0x96C7,
    0x8CDA: 0x9867,
    0x8CDB: 0x9F13,
    0x8CDC: 0x4E94,
    0x8CDD: 0x4E92,
    0x8CDE: 0x4F0D,
    0x8CDF: 0x5348,
    0x8CE0: 0x5449,
    0x8CE1: 0x543E,
    0x8CE2: 0x5A2F,
    0x8CE3: 0x5F8C,
    0x8CE4: 0x5FA1,
    0x8CE5: 0x609F,
    0x8CE6: 0x68A7,
    0x8CE7: 0x6A8E,
    0x8CE8: 0x745A,
    0x8CE9: 0x7881,
    0x8CEA: 0x8A9E,
    0x8CEB: 0x8AA4,
    0x8CEC: 0x8B77,
    0x8CED: 0x9190,
    0x8CEE: 0x4E5E,
    0x8CEF: 0x9BC9,
    0x8CF0: 0x4EA4,
    0x8CF1: 0x4F7C,
    0x8CF2: 0x4FAF,
    0x8CF3: 0x5019,
    0x8CF4: 0x5016,
    0x8CF5: 0x5149,
    0x8CF6: 0x516C,
    0x8CF7: 0x529F,
    0x8CF8: 0x52B9,
    0x8CF9: 0x52FE,
    0x8CFA: 0x539A,
    0x8CFB: 0x53E3,
    0x8CFC: 0x5411,
    0x8D40: 0x540E,
    0x8D41: 0x5589,
    0x8D42: 0x5751,
    0x8D43: 0x57A2,
    0x8D44: 0x597D,
    0x8D45: 0x5B54,
    0x8D46: 0x5B5D,
    0x8D47: 0x5B8F,
    0x8D48: 0x5DE5,
    0x8D49: 0x5DE7,
    0x8D4A: 0x5DF7,
    0x8D4B: 0x5E78,
    0x8D4C: 0x5E83,
    0x8D4D: 0x5E9A,
    0x8D4E: 0x5EB7,
    0x8D4F: 0x5F18,
    0x8D50: 0x6052,
    0x8D51: 0x614C,
    0x8D52: 0x6297,
    0x8D53: 0x62D8,
    0x8D54: 0x63A7,
    0x8D55: 0x653B,
    0x8D56: 0x6602,
    0x8D57: 0x6643,
    0x8D58: 0x66F4,
    0x8D59: 0x676D,
    0x8D5A: 0x6821,
    0x8D5B: 0x6897,
    0x8D5C: 0x69CB,
    0x8D5D: 0x6C5F,
    0x8D5E: 0x6D2A,
    0x8D5F: 0x6D69,
    0x8D60: 0x6E2F,
    0x8D61: 0x6E9D,
    0x8D62: 0x7532,
    0x8D63: 0x7687,
    0x8D64: 0x786C,
    0x8D65: 0x7A3F,
    0x8D66: 0x7CE0,
    0x8D67: 0x7D05,
    0x8D68: 0x7D18,
    0x8D69: 0x7D5E,
    0x8D6A: 0x7DB1,
    0x8D6B: 0x8015,
    0x8D6C: 0x8003,
    0x8D6D: 0x80AF,
    0x8D6E: 0x80B1,
    0x8D6F: 0x8154,
    0x8D70: 0x818F,
    0x8D71: 0x822A,
    0x8D72: 0x8352,
    0x8D73: 0x884C,
    0x8D74: 0x8861,
    0x8D75: 0x8B1B,
    0x8D76: 0x8CA2,
    0x8D77: 0x8CFC,
    0x8D78: 0x90CA,
    0x8D79: 0x9175,
    0x8D7A: 0x9271,
    0x8D7B: 0x783F,
    0x8D7C: 0x92FC,
    0x8D7D: 0x95A4,
    0x8D7E: 0x964D,
    0x8D80: 0x9805,
    0x8D81: 0x9999,
    0x8D82: 0x9AD8,
    0x8D83: 0x9D3B,
    0x8D84: 0x525B,
    0x8D85: 0x52AB,
    0x8D86: 0x53F7,
    0x8D87: 0x5408,
    0x8D88: 0x58D5,
    0x8D89: 0x62F7,
    0x8D8A: 0x6FE0,
    0x8D8B: 0x8C6A,
    0x8D8C: 0x8F5F,
    0x8D8D: 0x9EB9,
    0x8D8E: 0x514B,
    0x8D8F: 0x523B,
    0x8D90: 0x544A,
    0x8D91: 0x56FD,
    0x8D92: 0x7A40,
    0x8D93: 0x9177,
    0x8D94: 0x9D60,
    0x8D95: 0x9ED2,
    0x8D96: 0x7344,
    0x8D97: 0x6F09,
    0x8D98: 0x8170,
    0x8D99: 0x7511,
    0x8D9A: 0x5FFD,
    0x8D9B: 0x60DA,
    0x8D9C: 0x9AA8,
    0x8D9D: 0x72DB,
    0x8D9E: 0x8FBC,
    0x8D9F: 0x6B64,
    0x8DA0: 0x9803,
    0x8DA1: 0x4ECA,
    0x8DA2: 0x56F0,
    0x8DA3: 0x5764,
    0x8DA4: 0x58BE,
    0x8DA5: 0x5A5A,
    0x8DA6: 0x6068,
    0x8DA7: 0x61C7,
    0x8DA8: 0x660F,
    0x8DA9: 0x6606,
    0x8DAA: 0x6839,
    0x8DAB: 0x68B1,
    0x8DAC: 0x6DF7,
    0x8DAD: 0x75D5,
    0x8DAE: 0x7D3A,
    0x8DAF: 0x826E,
    0x8DB0: 0x9B42,
    0x8DB1: 0x4E9B,
    0x8DB2: 0x4F50,
    0x8DB3: 0x53C9,
    0x8DB4: 0x5506,
    0x8DB5: 0x5D6F,
    0x8DB6: 0x5DE6,
    0x8DB7: 0x5DEE,
    0x8DB8: 0x67FB,
    0x8DB9: 0x6C99,
    0x8DBA: 0x7473,
    0x8DBB: 0x7802,
    0x8DBC: 0x8A50,
    0x8DBD: 0x9396,
    0x8DBE: 0x88DF,
    0x8DBF: 0x5750,
    0x8DC0: 0x5EA7,
    0x8DC1: 0x632B,
    0x8DC2: 0x50B5,
    0x8DC3: 0x50AC,
    0x8DC4: 0x518D,
    0x8DC5: 0x6700,
    0x8DC6: 0x54C9,
    0x8DC7: 0x585E,
    0x8DC8: 0x59BB,
    0x8DC9: 0x5BB0,
    0x8DCA: 0x5F69,
    0x8DCB: 0x624D,
    0x8DCC: 0x63A1,
    0x8DCD: 0x683D,
    0x8DCE: 0x6B73,
    0x8DCF: 0x6E08,
    0x8DD0: 0x707D,
    0x8DD1: 0x91C7,
    0x8DD2: 0x7280,
    0x8DD3: 0x7815,
    0x8DD4: 0x7826,
    0x8DD5: 0x796D,
    0x8DD6: 0x658E,
    0x8DD7: 0x7D30,
    0x8DD8: 0x83DC,
    0x8DD9: 0x88C1,
    0x8DDA: 0x8F09,
    0x8DDB: 0x969B,
    0x8DDC: 0x5264,
    0x8DDD: 0x5728,
    0x8DDE: 0x6750,
    0x8DDF: 0x7F6A,
    0x8DE0: 0x8CA1,
    0x8DE1: 0x51B4,
    0x8DE2: 0x5742,
    0x8DE3: 0x962A,
    0x8DE4: 0x583A,
    0x8DE5: 0x698A,
    0x8DE6: 0x80B4,
    0x8DE7: 0x54B2,
    0x8DE8: 0x5D0E,
    0x8DE9: 0x57FC,
    0x8DEA: 0x7895,
    0x8DEB: 0x9DFA,
    0x8DEC: 0x4F5C,
    0x8DED: 0x524A,
    0x8DEE: 0x548B,
    0x8DEF: 0x643E,
    0x8DF0: 0x6628,
    0x8DF1: 0x6714,
    0x8DF2: 0x67F5,
    0x8DF3: 0x7A84,
    0x8DF4: 0x7B56,
    0x8DF5: 0x7D22,
    0x8DF6: 0x932F,
    0x8DF7: 0x685C,
    0x8DF8: 0x9BAD,
    0x8DF9: 0x7B39,
    0x8DFA: 0x5319,
    0x8DFB: 0x518A,
    0x8DFC: 0x5237,
    0x8E40: 0x5BDF,
    0x8E41: 0x62F6,
    0x8E42: 0x64AE,
    0x8E43: 0x64E6,
    0x8E44: 0x672D,
    0x8E45: 0x6BBA,
    0x8E46: 0x85A9,
    0x8E47: 0x96D1,
    0x8E48: 0x7690,
    0x8E49: 0x9BD6,
    0x8E4A: 0x634C,
    0x8E4B: 0x9306,
    0x8E4C: 0x9BAB,
    0x8E4D: 0x76BF,
    0x8E4E: 0x6652,
    0x8E4F: 0x4E09,
    0x8E50: 0x5098,
    0x8E51: 0x53C2,
    0x8E52: 0x5C71,
    0x8E53: 0x60E8,
    0x8E54: 0x6492,
    0x8E55: 0x6563,
    0x8E56: 0x685F,
    0x8E57: 0x71E6,
    0x8E58: 0x73CA,
    0x8E59: 0x7523,
    0x8E5A: 0x7B97,
    0x8E5B: 0x7E82,
    0x8E5C: 0x8695,
    0x8E5D: 0x8B83,
    0x8E5E: 0x8CDB,
    0x8E5F: 0x9178,
    0x8E60: 0x9910,
    0x8E61: 0x65AC,
    0x8E62: 0x66AB,
    0x8E63: 0x6B8B,
    0x8E64: 0x4ED5,
    0x8E65: 0x4ED4,
    0x8E66: 0x4F3A,
    0x8E67: 0x4F7F,
    0x8E68: 0x523A,
    0x8E69: 0x53F8,
    0x8E6A: 0x53F2,
    0x8E6B: 0x55E3,
    0x8E6C: 0x56DB,
    0x8E6D: 0x58EB,
    0x8E6E: 0x59CB,
    0x8E6F: 0x59C9,
    0x8E70: 0x59FF,
    0x8E71: 0x5B50,
    0x8E72: 0x5C4D,
    0x8E73: 0x5E02,
    0x8E74: 0x5E2B,
    0x8E75: 0x5FD7,
    0x8E76: 0x601D,
    0x8E77: 0x6307,
    0x8E78: 0x652F,
    0x8E79: 0x5B5C,
    0x8E7A: 0x65AF,
    0x8E7B: 0x65BD,
    0x8E7C: 0x65E8,
    0x8E7D: 0x679D,
    0x8E7E: 0x6B62,
    0x8E80: 0x6B7B,
    0x8E81: 0x6C0F,
    0x8E82: 0x7345,
    0x8E83: 0x7949,
    0x8E84: 0x79C1,
    0x8E85: 0x7CF8,
    0x8E86: 0x7D19,
    0x8E87: 0x7D2B,
    0x8E88: 0x80A2,
    0x8E89: 0x8102,
    0x8E8A: 0x81F3,
    0x8E8B: 0x8996,
    0x8E8C: 0x8A5E,
    0x8E8D: 0x8A69,
    0x8E8E: 0x8A66,
    0x8E8F: 0x8A8C,
    0x8E90: 0x8AEE,
    0x8E91: 0x8CC7,
    0x8E92: 0x8CDC,
    0x8E93: 0x96CC,
    0x8E94: 0x98FC,
    0x8E95: 0x6B6F,
    0x8E96: 0x4E8B,
    0x8E97: 0x4F3C,
    0x8E98: 0x4F8D,
    0x8E99: 0x5150,
    0x8E9A: 0x5B57,
    0x8E9B: 0x5BFA,
    0x8E9C: 0x6148,
    0x8E9D: 0x6301,
    0x8E9E: 0x6642,
    0x8E9F: 0x6B21,
    0x8EA0: 0x6ECB,
    0x8EA1: 0x6CBB,
    0x8EA2: 0x723E,
    0x8EA3: 0x74BD,
    0x8EA4: 0x75D4,
    0x8EA5: 0x78C1,
    0x8EA6: 0x793A,
    0x8EA7: 0x800C,
    0x8EA8: 0x8033,
    0x8EA9: 0x81EA,
    0x8EAA: 0x8494,
    0x8EAB: 0x8F9E,
    0x8EAC: 0x6C50,
    0x8EAD: 0x9E7F,
    0x8EAE: 0x5F0F,
    0x8EAF: 0x8B58,
    0x8EB0: 0x9D2B,
    0x8EB1: 0x7AFA,
    0x8EB2: 0x8EF8,
    0x8EB3: 0x5B8D,
    0x8EB4: 0x96EB,
    0x8EB5: 0x4E03,
    0x8EB6: 0x53F1,
    0x8EB7: 0x57F7,
    0x8EB8: 0x5931,
    0x8EB9: 0x5AC9,
    0x8EBA: 0x5BA4,
    0x8EBB: 0x6089,
    0x8EBC: 0x6E7F,
    0x8EBD: 0x6F06,
    0x8EBE: 0x75BE,
    0x8EBF: 0x8CEA,
    0x8EC0: 0x5B9F,
    0x8EC1: 0x8500,
    0x8EC2: 0x7BE0,
    0x8EC3: 0x5072,
    0x8EC4: 0x67F4,
    0x8EC5: 0x829D,
    0x8EC6: 0x5C61,
    0x8EC7: 0x854A,
    0x8EC8: 0x7E1E,
    0x8EC9: 0x820E,
    0x8ECA: 0x5199,
    0x8ECB: 0x5C04,
    0x8ECC: 0x6368,
    0x8ECD: 0x8D66,
    0x8ECE: 0x659C,
    0x8ECF: 0x716E,
    0x8ED0: 0x793E,
    0x8ED1: 0x7D17,
    0x8ED2: 0x8005,
    0x8ED3: 0x8B1D,
    0x8ED4: 0x8ECA,
    0x8ED5: 0x906E,
    0x8ED6: 0x86C7,
    0x8ED7: 0x90AA,
    0x8ED8: 0x501F,
    0x8ED9: 0x52FA,
    0x8EDA: 0x5C3A,
    0x8EDB: 0x6753,
    0x8EDC: 0x707C,
    0x8EDD: 0x7235,
    0x8EDE: 0x914C,
    0x8EDF: 0x91C8,
    0x8EE0: 0x932B,
    0x8EE1: 0x82E5,
    0x8EE2: 0x5BC2,
    0x8EE3: 0x5F31,
    0x8EE4: 0x60F9,
    0x8EE5: 0x4E3B,
    0x8EE6: 0x53D6,
    0x8EE7: 0x5B88,
    0x8EE8: 0x624B,
    0x8EE9: 0x6731,
    0x8EEA: 0x6B8A,
    0x8EEB: 0x72E9,
    0x8EEC: 0x73E0,
    0x8EED: 0x7A2E,
    0x8EEE: 0x816B,
    0x8EEF: 0x8DA3,
    0x8EF0: 0x9152,
    0x8EF1: 0x9996,
    0x8EF2: 0x5112,
    0x8EF3: 0x53D7,
    0x8EF4: 0x546A,
    0x8EF5: 0x5BFF,
    0x8EF6: 0x6388,
    0x8EF7: 0x6A39,
    0x8EF8: 0x7DAC,
    0x8EF9: 0x9700,
    0x8EFA: 0x56DA,
    0x8EFB: 0x53CE,
    0x8EFC: 0x5468,
    0x8F40: 0x5B97,
    0x8F41: 0x5C31,
    0x8F42: 0x5DDE,
    0x8F43: 0x4FEE,
    0x8F44: 0x6101,
    0x8F45: 0x62FE,
    0x8F46: 0x6D32,
    0x8F47: 0x79C0,
    0x8F48: 0x79CB,
    0x8F49: 0x7D42,
    0x8F4A: 0x7E4D,
    0x8F4B: 0x7FD2,
    0x8F4C: 0x81ED,
    0x8F4D: 0x821F,
    0x8F4E: 0x8490,
    0x8F4F: 0x8846,
    0x8F50: 0x8972,
    0x8F51: 0x8B90,
    0x8F52: 0x8E74,
    0x8F53: 0x8F2F,
    0x8F54: 0x9031,
    0x8F55: 0x914B,
    0x8F56: 0x916C,
    0x8F57: 0x96C6,
    0x8F58: 0x919C,
    0x8F59: 0x4EC0,
    0x8F5A: 0x4F4F,
    0x8F5B: 0x5145,
    0x8F5C: 0x5341,
    0x8F5D: 0x5F93,
    0x8F5E: 0x620E,
    0x8F5F: 0x67D4,
    0x8F60: 0x6C41,
    0x8F61: 0x6E0B,
    0x8F62: 0x7363,
    0x8F63: 0x7E26,
    0x8F64: 0x91CD,
    0x8F65: 0x9283,
    0x8F66: 0x53D4,
    0x8F67: 0x5919,
    0x8F68: 0x5BBF,
    0x8F69: 0x6DD1,
    0x8F6A: 0x795D,
    0x8F6B: 0x7E2E,
    0x8F6C: 0x7C9B,
    0x8F6D: 0x587E,
    0x8F6E: 0x719F,
    0x8F6F: 0x51FA,
    0x8F70: 0x8853,
    0x8F71: 0x8FF0,
    0x8F72: 0x4FCA,
    0x8F73: 0x5CFB,
    0x8F74: 0x6625,
    0x8F75: 0x77AC,
    0x8F76: 0x7AE3,
    0x8F77: 0x821C,
    0x8F78: 0x99FF,
    0x8F79: 0x51C6,
    0x8F7A: 0x5FAA,
    0x8F7B: 0x65EC,
    0x8F7C: 0x696F,
    0x8F7D: 0x6B89,
    0x8F7E: 0x6DF3,
    0x8F80: 0x6E96,
    0x8F81: 0x6F64,
    0x8F82: 0x76FE,
    0x8F83: 0x7D14,
    0x8F84: 0x5DE1,
    0x8F85: 0x9075,
    0x8F86: 0x9187,
    0x8F87: 0x9806,
    0x8F88: 0x51E6,
    0x8F89: 0x521D,
    0x8F8A: 0x6240,
    0x8F8B: 0x6691,
    0x8F8C: 0x66D9,
    0x8F8D: 0x6E1A,
    0x8F8E: 0x5EB6,
    0x8F8F: 0x7DD2,
    0x8F90: 0x7F72,
    0x8F91: 0x66F8,
    0x8F92: 0x85AF,
    0x8F93: 0x85F7,
    0x8F94: 0x8AF8,
    0x8F95: 0x52A9,
    0x8F96: 0x53D9,
    0x8F97: 0x5973,
    0x8F98: 0x5E8F,
    0x8F99: 0x5F90,
    0x8F9A: 0x6055,
    0x8F9B: 0x92E4,
    0x8F9C: 0x9664,
    0x8F9D: 0x50B7,
    0x8F9E: 0x511F,
    0x8F9F: 0x52DD,
    0x8FA0: 0x5320,
    0x8FA1: 0x5347,
    0x8FA2: 0x53EC,
    0x8FA3: 0x54E8,
    0x8FA4: 0x5546,
    0x8FA5: 0x5531,
    0x8FA6: 0x5617,
    0x8FA7: 0x5968,
    0x8FA8: 0x59BE,
    0x8FA9: 0x5A3C,
    0x8FAA: 0x5BB5,
    0x8FAB: 0x5C06,
    0x8FAC: 0x5C0F,
    0x8FAD: 0x5C11,
    0x8FAE: 0x5C1A,
    0x8FAF: 0x5E84,
    0x8FB0: 0x5E8A,
    0x8FB1: 0x5EE0,
    0x8FB2: 0x5F70,
    0x8FB3: 0x627F,
    0x8FB4: 0x6284,
    0x8FB5: 0x62DB,
    0x8FB6: 0x638C,
    0x8FB7: 0x6377,
    0x8FB8: 0x6607,
    0x8FB9: 0x660C,
    0x8FBA: 0x662D,
    0x8FBB: 0x6676,
    0x8FBC: 0x677E,
    0x8FBD: 0x68A2,
    0x8FBE: 0x6A1F,
    0x8FBF: 0x6A35,
    0x8FC0: 0x6CBC,
    0x8FC1: 0x6D88,
    0x8FC2: 0x6E09,
    0x8FC3: 0x6E58,
    0x8FC4: 0x713C,
    0x8FC5: 0x7126,
    0x8FC6: 0x7167,
    0x8FC7: 0x75C7,
    0x8FC8: 0x7701,
    0x8FC9: 0x785D,
    0x8FCA: 0x7901,
    0x8FCB: 0x7965,
    0x8FCC: 0x79F0,
    0x8FCD: 0x7AE0,
    0x8FCE: 0x7B11,
    0x8FCF: 0x7CA7,
    0x8FD0: 0x7D39,
    0x8FD1: 0x8096,
    0x8FD2: 0x83D6,
    0x8FD3: 0x848B,
    0x8FD4: 0x8549,
    0x8FD5: 0x885D,
    0x8FD6: 0x88F3,
    0x8FD7: 0x8A1F,
    0x8FD8: 0x8A3C,
    0x8FD9: 0x8A54,
    0x8FDA: 0x8A73,
    0x8FDB: 0x8C61,
    0x8FDC: 0x8CDE,
    0x8FDD: 0x91A4,
    0x8FDE: 0x9266,
    0x8FDF: 0x937E,
    0x8FE0: 0x9418,
    0x8FE1: 0x969C,
    0x8FE2: 0x9798,
    0x8FE3: 0x4E0A,
    0x8FE4: 0x4E08,
    0x8FE5: 0x4E1E,
    0x8FE6: 0x4E57,
    0x8FE7: 0x5197,
    0x8FE8: 0x5270,
    0x8FE9: 0x57CE,
    0x8FEA: 0x5834,
    0x8FEB: 0x58CC,
    0x8FEC: 0x5B22,
    0x8FED: 0x5E38,
    0x8FEE: 0x60C5,
    0x8FEF: 0x64FE,
    0x8FF0: 0x6761,
    0x8FF1: 0x6756,
    0x8FF2: 0x6D44,
    0x8FF3: 0x72B6,
    0x8FF4: 0x7573,
    0x8FF5: 0x7A63,
    0x8FF6: 0x84B8,
    0x8FF7: 0x8B72,
    0x8FF8: 0x91B8,
    0x8FF9: 0x9320,
    0x8FFA: 0x5631,
    0x8FFB: 0x57F4,
    0x8FFC: 0x98FE,
    0x9040: 0x62ED,
    0x9041: 0x690D,
    0x9042: 0x6B96,
    0x9043: 0x71ED,
    0x9044: 0x7E54,
    0x9045: 0x8077,
    0x9046: 0x8272,
    0x9047: 0x89E6,
    0x9048: 0x98DF,
    0x9049: 0x8755,
    0x904A: 0x8FB1,
    0x904B: 0x5C3B,
    0x904C: 0x4F38,
    0x904D: 0x4FE1,
    0x904E: 0x4FB5,
    0x904F: 0x5507,
    0x9050: 0x5A20,
    0x9051: 0x5BDD,
    0x9052: 0x5BE9,
    0x9053: 0x5FC3,
    0x9054: 0x614E,
    0x9055: 0x632F,
    0x9056: 0x65B0,
    0x9057: 0x664B,
    0x9058: 0x68EE,
    0x9059: 0x699B,
    0x905A: 0x6D78,
    0x905B: 0x6DF1,
    0x905C: 0x7533,
    0x905D: 0x75B9,
    0x905E: 0x771F,
    0x905F: 0x795E,
    0x9060: 0x79E6,
    0x9061: 0x7D33,
    0x9062: 0x81E3,
    0x9063: 0x82AF,
    0x9064: 0x85AA,
    0x9065: 0x89AA,
    0x9066: 0x8A3A,
    0x9067: 0x8EAB,
    0x9068: 0x8F9B,
    0x9069: 0x9032,
    0x906A: 0x91DD,
    0x906B: 0x9707,
    0x906C: 0x4EBA,
    0x906D: 0x4EC1,
    0x906E: 0x5203,
    0x906F: 0x5875,
    0x9070: 0x58EC,
    0x9071: 0x5C0B,
    0x9072: 0x751A,
    0x9073: 0x5C3D,
    0x9074: 0x814E,
    0x9075: 0x8A0A,
    0x9076: 0x8FC5,
    0x9077: 0x9663,
    0x9078: 0x976D,
    0x9079: 0x7B25,
    0x907A: 0x8ACF,
    0x907B: 0x9808,
    0x907C: 0x9162,
    0x907D: 0x56F3,
    0x907E: 0x53A8,
    0x9080: 0x9017,
    0x9081: 0x5439,
    0x9082: 0x5782,
    0x9083: 0x5E25,
    0x9084: 0x63A8,
    0x9085: 0x6C34,
    0x9086: 0x708A,
    0x9087: 0x7761,
    0x9088: 0x7C8B,
    0x9089: 0x7FE0,
    0x908A: 0x8870,
    0x908B: 0x9042,
    0x908C: 0x9154,
    0x908D: 0x9310,
    0x908E: 0x9318,
    0x908F: 0x968F,
    0x9090: 0x745E,
    0x9091: 0x9AC4,
    0x9092: 0x5D07,
    0x9093: 0x5D69,
    0x9094: 0x6570,
    0x9095: 0x67A2,
    0x9096: 0x8DA8,
    0x9097: 0x96DB,
    0x9098: 0x636E,
    0x9099: 0x6749,
    0x909A: 0x6919,
    0x909B: 0x83C5,
    0x909C: 0x9817,
    0x909D: 0x96C0,
    0x909E: 0x88FE,
    0x909F: 0x6F84,
    0x90A0: 0x647A,
    0x90A1: 0x5BF8,
    0x90A2: 0x4E16,
    0x90A3: 0x702C,
    0x90A4: 0x755D,
    0x90A5: 0x662F,
    0x90A6: 0x51C4,
    0x90A7: 0x5236,
    0x90A8: 0x52E2,
    0x90A9: 0x59D3,
    0x90AA: 0x5F81,
    0x90AB: 0x6027,
    0x90AC: 0x6210,
    0x90AD: 0x653F,
    0x90AE: 0x6574,
    0x90AF: 0x661F,
    0x90B0: 0x6674,
    0x90B1: 0x68F2,
    0x90B2: 0x6816,
    0x90B3: 0x6B63,
    0x90B4: 0x6E05,
    0x90B5: 0x7272,
    0x90B6: 0x751F,
    0x90B7: 0x76DB,
    0x90B8: 0x7CBE,
    0x90B9: 0x8056,
    0x90BA: 0x58F0,
    0x90BB: 0x88FD,
    0x90BC: 0x897F,
    0x90BD: 0x8AA0,
    0x90BE: 0x8A93,
    0x90BF: 0x8ACB,
    0x90C0: 0x901D,
    0x90C1: 0x9192,
    0x90C2: 0x9752,
    0x90C3: 0x9759,
    0x90C4: 0x6589,
    0x90C5: 0x7A0E,
    0x90C6: 0x8106,
    0x90C7: 0x96BB,
    0x90C8: 0x5E2D,
    0x90C9: 0x60DC,
    0x90CA: 0x621A,
    0x90CB: 0x65A5,
    0x90CC: 0x6614,
    0x90CD: 0x6790,
    0x90CE: 0x77F3,
    0x90CF: 0x7A4D,
    0x90D0: 0x7C4D,
    0x90D1: 0x7E3E,
    0x90D2: 0x810A,
    0x90D3: 0x8CAC,
    0x90D4: 0x8D64,
    0x90D5: 0x8DE1,
    0x90D6: 0x8E5F,
    0x90D7: 0x78A9,
    0x90D8: 0x5207,
    0x90D9: 0x62D9,
    0x90DA: 0x63A5,
    0x90DB: 0x6442,
    0x90DC: 0x6298,
    0x90DD: 0x8A2D,
    0x90DE: 0x7A83,
    0x90DF: 0x7BC0,
    0x90E0: 0x8AAC,
    0x90E1: 0x96EA,
    0x90E2: 0x7D76,
    0x90E3: 0x820C,
    0x90E4: 0x8749,
    0x90E5: 0x4ED9,
    0x90E6: 0x5148,
    0x90E7: 0x5343,
    0x90E8: 0x5360,
    0x90E9: 0x5BA3,
    0x90EA: 0x5C02,
    0x90EB: 0x5C16,
    0x90EC: 0x5DDD,
    0x90ED: 0x6226,
    0x90EE: 0x6247,
    0x90EF: 0x64B0,
    0x90F0: 0x6813,
    0x90F1: 0x6834,
    0x90F2: 0x6CC9,
    0x90F3: 0x6D45,
    0x90F4: 0x6D17,
    0x90F5: 0x67D3,
    0x90F6: 0x6F5C,
    0x90F7: 0x714E,
    0x90F8: 0x717D,
    0x90F9: 0x65CB,
    0x90FA: 0x7A7F,
    0x90FB: 0x7BAD,
    0x90FC: 0x7DDA,
    0x9140: 0x7E4A,
    0x9141: 0x7FA8,
    0x9142: 0x817A,
    0x9143: 0x821B,
    0x9144: 0x8239,
    0x9145: 0x85A6,
    0x9146: 0x8A6E,
    0x9147: 0x8CCE,
    0x9148: 0x8DF5,
    0x9149: 0x9078,
    0x914A: 0x9077,
    0x914B: 0x92AD,
    0x914C: 0x9291,
    0x914D: 0x9583,
    0x914E: 0x9BAE,
    0x914F: 0x524D,
    0x9150: 0x5584,
    0x9151: 0x6F38,
    0x9152: 0x7136,
    0x9153: 0x5168,
    0x9154: 0x7985,
    0x9155: 0x7E55,
    0x9156: 0x81B3,
    0x9157: 0x7CCE,
    0x9158: 0x564C,
    0x9159: 0x5851,
    0x915A: 0x5CA8,
    0x915B: 0x63AA,
    0x915C: 0x66FE,
    0x915D: 0x66FD,
    0x915E: 0x695A,
    0x915F: 0x72D9,
    0x9160: 0x758F,
    0x9161: 0x758E,
    0x9162: 0x790E,
    0x9163: 0x7956,
    0x9164: 0x79DF,
    0x9165: 0x7C97,
    0x9166: 0x7D20,
    0x9167: 0x7D44,
    0x9168: 0x8607,
    0x9169: 0x8A34,
    0x916A: 0x963B,
    0x916B: 0x9061,
    0x916C: 0x9F20,
    0x916D: 0x50E7,
    0x916E: 0x5275,
    0x916F: 0x53CC,
    0x9170: 0x53E2,
    0x9171: 0x5009,
    0x9172: 0x55AA,
    0x9173: 0x58EE,
    0x9174: 0x594F,
    0x9175: 0x723D,
    0x9176: 0x5B8B,
    0x9177: 0x5C64,
    0x9178: 0x531D,
    0x9179: 0x60E3,
    0x917A: 0x60F3,
    0x917B: 0x635C,
    0x917C: 0x6383,
    0x917D: 0x633F,
    0x917E: 0x63BB,
    0x9180: 0x64CD,
    0x9181: 0x65E9,
    0x9182: 0x66F9,
    0x9183: 0x5DE3,
    0x9184: 0x69CD,
    0x9185: 0x69FD,
    0x9186: 0x6F15,
    0x9187: 0x71E5,
    0x9188: 0x4E89,
    0x9189: 0x75E9,
    0x918A: 0x76F8,
    0x918B: 0x7A93,
    0x918C: 0x7CDF,
    0x918D: 0x7DCF,
    0x918E: 0x7D9C,
    0x918F: 0x8061,
    0x9190: 0x8349,
    0x9191: 0x8358,
    0x9192: 0x846C,
    0x9193: 0x84BC,
    0x9194: 0x85FB,
    0x9195: 0x88C5,
    0x9196: 0x8D70,
    0x9197: 0x9001,
    0x9198: 0x906D,
    0x9199: 0x9397,
    0x919A: 0x971C,
    0x919B: 0x9A12,
    0x919C: 0x50CF,
    0x919D: 0x5897,
    0x919E: 0x618E,
    0x919F: 0x81D3,
    0x91A0: 0x8535,
    0x91A1: 0x8D08,
    0x91A2: 0x9020,
    0x91A3: 0x4FC3,
    0x91A4: 0x5074,
    0x91A5: 0x5247,
    0x91A6: 0x5373,
    0x91A7: 0x606F,
    0x91A8: 0x6349,
    0x91A9: 0x675F,
    0x91AA: 0x6E2C,
    0x91AB: 0x8DB3,
    0x91AC: 0x901F,
    0x91AD: 0x4FD7,
    0x91AE: 0x5C5E,
    0x91AF: 0x8CCA,
    0x91B0: 0x65CF,
    0x91B1: 0x7D9A,
    0x91B2: 0x5352,
    0x91B3: 0x8896,
    0x91B4: 0x5176,
    0x91B5: 0x63C3,
    0x91B6: 0x5B58,
    0x91B7: 0x5B6B,
    0x91B8: 0x5C0A,
    0x91B9: 0x640D,
    0x91BA: 0x6751,
    0x91BB: 0x905C,
    0x91BC: 0x4ED6,
    0x91BD: 0x591A,
    0x91BE: 0x592A,
    0x91BF: 0x6C70,
    0x91C0: 0x8A51,
    0x91C1: 0x553E,
    0x91C2: 0x5815,
    0x91C3: 0x59A5,
    0x91C4: 0x60F0,
    0x91C5: 0x6253,
    0x91C6: 0x67C1,
    0x91C7: 0x8235,
    0x91C8: 0x6955,
    0x91C9: 0x9640,
    0x91CA: 0x99C4,
    0x91CB: 0x9A28,
    0x91CC: 0x4F53,
    0x91CD: 0x5806,
    0x91CE: 0x5BFE,
    0x91CF: 0x8010,
    0x91D0: 0x5CB1,
    0x91D1: 0x5E2F,
    0x91D2: 0x5F85,
    0x91D3: 0x6020,
    0x91D4: 0x614B,
    0x91D5: 0x6234,
    0x91D6: 0x66FF,
    0x91D7: 0x6CF0,
    0x91D8: 0x6EDE,
    0x91D9: 0x80CE,
    0x91DA: 0x817F,
    0x91DB: 0x82D4,
    0x91DC: 0x888B,
    0x91DD: 0x8CB8,
    0x91DE: 0x9000,
    0x91DF: 0x902E,
    0x91E0: 0x968A,
    0x91E1: 0x9EDB,
    0x91E2: 0x9BDB,
    0x91E3: 0x4EE3,
    0x91E4: 0x53F0,
    0x91E5: 0x5927,
    0x91E6: 0x7B2C,
    0x91E7: 0x918D,
    0x91E8: 0x984C,
    0x91E9: 0x9DF9,
    0x91EA: 0x6EDD,
    0x91EB: 0x7027,
    0x91EC: 0x5353,
    0x91ED: 0x5544,
    0x91EE: 0x5B85,
    0x91EF: 0x6258,
    0x91F0: 0x629E,
    0x91F1: 0x62D3,
    0x91F2: 0x6CA2,
    0x91F3: 0x6FEF,
    0x91F4: 0x7422,
    0x91F5: 0x8A17,
    0x91F6: 0x9438,
    0x91F7: 0x6FC1,
    0x91F8: 0x8AFE,
    0x91F9: 0x8338,
    0x91FA: 0x51E7,
    0x91FB: 0x86F8,
    0x91FC: 0x53EA,
    0x9240: 0x53E9,
    0x9241: 0x4F46,
    0x9242: 0x9054,
    0x9243: 0x8FB0,
    0x9244: 0x596A,
    0x9245: 0x8131,
    0x9246: 0x5DFD,
    0x9247: 0x7AEA,
    0x9248: 0x8FBF,
    0x9249: 0x68DA,
    0x924A: 0x8C37,
    0x924B: 0x72F8,
    0x924C: 0x9C48,
    0x924D: 0x6A3D,
    0x924E: 0x8AB0,
    0x924F: 0x4E39,
    0x9250: 0x5358,
    0x9251: 0x5606,
    0x9252: 0x5766,
    0x9253: 0x62C5,
    0x9254: 0x63A2,
    0x9255: 0x65E6,
    0x9256: 0x6B4E,
    0x9257: 0x6DE1,
    0x9258: 0x6E5B,
    0x9259: 0x70AD,
    0x925A: 0x77ED,
    0x925B: 0x7AEF,
    0x925C: 0x7BAA,
    0x925D: 0x7DBB,
    0x925E: 0x803D,
    0x925F: 0x80C6,
    0x9260: 0x86CB,
    0x9261: 0x8A95,
    0x9262: 0x935B,
    0x9263: 0x56E3,
    0x9264: 0x58C7,
    0x9265: 0x5F3E,
    0x9266: 0x65AD,
    0x9267: 0x6696,
    0x9268: 0x6A80,
    0x9269: 0x6BB5,
    0x926A: 0x7537,
    0x926B: 0x8AC7,
    0x926C: 0x5024,
    0x926D: 0x77E5,
    0x926E: 0x5730,
    0x926F: 0x5F1B,
    0x9270: 0x6065,
    0x9271: 0x667A,
    0x9272: 0x6C60,
    0x9273: 0x75F4,
    0x9274: 0x7A1A,
    0x9275: 0x7F6E,
    0x9276: 0x81F4,
    0x9277: 0x8718,
    0x9278: 0x9045,
    0x9279: 0x99B3,
    0x927A: 0x7BC9,
    0x927B: 0x755C,
    0x927C: 0x7AF9,
    0x927D: 0x7B51,
    0x927E: 0x84C4,
    0x9280: 0x9010,
    0x9281: 0x79E9,
    0x9282: 0x7A92,
    0x9283: 0x8336,
    0x9284: 0x5AE1,
    0x9285: 0x7740,
    0x9286: 0x4E2D,
    0x9287: 0x4EF2,
    0x9288: 0x5B99,
    0x9289: 0x5FE0,
    0x928A: 0x62BD,
    0x928B: 0x663C,
    0x928C: 0x67F1,
    0x928D: 0x6CE8,
    0x928E: 0x866B,
    0x928F: 0x8877,
    0x9290: 0x8A3B,
    0x9291: 0x914E,
    0x9292: 0x92F3,
    0x9293: 0x99D0,
    0x9294: 0x6A17,
    0x9295: 0x7026,
    0x9296: 0x732A,
    0x9297: 0x82E7,
    0x9298: 0x8457,
    0x9299: 0x8CAF,
    0x929A: 0x4E01,
    0x929B: 0x5146,
    0x929C: 0x51CB,
    0x929D: 0x558B,
    0x929E: 0x5BF5,
    0x929F: 0x5E16,
    0x92A0: 0x5E33,
    0x92A1: 0x5E81,
    0x92A2: 0x5F14,
    0x92A3: 0x5F35,
    0x92A4: 0x5F6B,
    0x92A5: 0x5FB4,
    0x92A6: 0x61F2,
    0x92A7: 0x6311,
    0x92A8: 0x66A2,
    0x92A9: 0x671D,
    0x92AA: 0x6F6E,
    0x92AB: 0x7252,
    0x92AC: 0x753A,
    0x92AD: 0x773A,
    0x92AE: 0x8074,
    0x92AF: 0x8139,
    0x92B0: 0x8178,
    0x92B1: 0x8776,
    0x92B2: 0x8ABF,
    0x92B3: 0x8ADC,
    0x92B4: 0x8D85,
    0x92B5: 0x8DF3,
    0x92B6: 0x929A,
    0x92B7: 0x9577,
    0x92B8: 0x9802,
    0x92B9: 0x9CE5,
    0x92BA: 0x52C5,
    0x92BB: 0x6357,
    0x92BC: 0x76F4,
    0x92BD: 0x6715,
    0x92BE: 0x6C88,
    0x92BF: 0x73CD,
    0x92C0: 0x8CC3,
    0x92C1: 0x93AE,
    0x92C2: 0x9673,
    0x92C3: 0x6D25,
    0x92C4: 0x589C,
    0x92C5: 0x690E,
    0x92C6: 0x69CC,
    0x92C7: 0x8FFD,
    0x92C8: 0x939A,
    0x92C9: 0x75DB,
    0x92CA: 0x901A,
    0x92CB: 0x585A,
    0x92CC: 0x6802,
    0x92CD: 0x63B4,
    0x92CE: 0x69FB,
    0x92CF: 0x4F43,
    0x92D0: 0x6F2C,
    0x92D1: 0x67D8,
    0x92D2: 0x8FBB,
    0x92D3: 0x8526,
    0x92D4: 0x7DB4,
    0x92D5: 0x9354,
    0x92D6: 0x693F,
    0x92D7: 0x6F70,
    0x92D8: 0x576A,
    0x92D9: 0x58F7,
    0x92DA: 0x5B2C,
    0x92DB: 0x7D2C,
    0x92DC: 0x722A,
    0x92DD: 0x540A,
    0x92DE: 0x91E3,
    0x92DF: 0x9DB4,
    0x92E0: 0x4EAD,
    0x92E1: 0x4F4E,
    0x92E2: 0x505C,
    0x92E3: 0x5075,
    0x92E4: 0x5243,
    0x92E5: 0x8C9E,
    0x92E6: 0x5448,
    0x92E7: 0x5824,
    0x92E8: 0x5B9A,
    0x92E9: 0x5E1D,
    0x92EA: 0x5E95,
    0x92EB: 0x5EAD,
    0x92EC: 0x5EF7,
    0x92ED: 0x5F1F,
    0x92EE: 0x608C,
    0x92EF: 0x62B5,
    0x92F0: 0x633A,
    0x92F1: 0x63D0,
    0x92F2: 0x68AF,
    0x92F3: 0x6C40,
    0x92F4: 0x7887,
    0x92F5: 0x798E,
    0x92F6: 0x7A0B,
    0x92F7: 0x7DE0,
    0x92F8: 0x8247,
    0x92F9: 0x8A02,
    0x92FA: 0x8AE6,
    0x92FB: 0x8E44,
    0x92FC: 0x9013,
    0x9340: 0x90B8,
    0x9341: 0x912D,
    0x9342: 0x91D8,
    0x9343: 0x9F0E,
    0x9344: 0x6CE5,
    0x9345: 0x6458,
    0x9346: 0x64E2,
    0x9347: 0x6575,
    0x9348: 0x6EF4,
    0x9349: 0x7684,
    0x934A: 0x7B1B,
    0x934B: 0x9069,
    0x934C: 0x93D1,
    0x934D: 0x6EBA,
    0x934E: 0x54F2,
    0x934F: 0x5FB9,
    0x9350: 0x64A4,
    0x9351: 0x8F4D,
    0x9352: 0x8FED,
    0x9353: 0x9244,
    0x9354: 0x5178,
    0x9355: 0x586B,
    0x9356: 0x5929,
    0x9357: 0x5C55,
    0x9358: 0x5E97,
    0x9359: 0x6DFB,
    0x935A: 0x7E8F,
    0x935B: 0x751C,
    0x935C: 0x8CBC,
    0x935D: 0x8EE2,
    0x935E: 0x985B,
    0x935F: 0x70B9,
    0x9360: 0x4F1D,
    0x9361: 0x6BBF,
    0x9362: 0x6FB1,
    0x9363: 0x7530,
    0x9364: 0x96FB,
    0x9365: 0x514E,
    0x9366: 0x5410,
    0x9367: 0x5835,
    0x9368: 0x5857,
    0x9369: 0x59AC,
    0x936A: 0x5C60,
    0x936B: 0x5F92,
    0x936C: 0x6597,
    0x936D: 0x675C,
    0x936E: 0x6E21,
    0x936F: 0x767B,
    0x9370: 0x83DF,
    0x9371: 0x8CED,
    0x9372: 0x9014,
    0x9373: 0x90FD,
    0x9374: 0x934D,
    0x9375: 0x7825,
    0x9376: 0x783A,
    0x9377: 0x52AA,
    0x9378: 0x5EA6,
    0x9379: 0x571F,
    0x937A: 0x5974,
    0x937B: 0x6012,
    0x937C: 0x5012,
    0x937D: 0x515A,
    0x937E: 0x51AC,
    0x9380: 0x51CD,
    0x9381: 0x5200,
    0x9382: 0x5510,
    0x9383: 0x5854,
    0x9384: 0x5858,
    0x9385: 0x5957,
    0x9386: 0x5B95,
    0x9387: 0x5CF6,
    0x9388: 0x5D8B,
    0x9389: 0x60BC,
    0x938A: 0x6295,
    0x938B: 0x642D,
    0x938C: 0x6771,
    0x938D: 0x6843,
    0x938E: 0x68BC,
    0x938F: 0x68DF,
    0x9390: 0x76D7,
    0x9391: 0x6DD8,
    0x9392: 0x6E6F,
    0x9393: 0x6D9B,
    0x9394: 0x706F,
    0x9395: 0x71C8,
    0x9396: 0x5F53,
    0x9397: 0x75D8,
    0x9398: 0x7977,
    0x9399: 0x7B49,
    0x939A: 0x7B54,
    0x939B: 0x7B52,
    0x939C: 0x7CD6,
    0x939D: 0x7D71,
    0x939E: 0x5230,
    0x939F: 0x8463,
    0x93A0: 0x8569,
    0x93A1: 0x85E4,
    0x93A2: 0x8A0E,
    0x93A3: 0x8B04,
    0x93A4: 0x8C46,
    0x93A5: 0x8E0F,
    0x93A6: 0x9003,
    0x93A7: 0x900F,
    0x93A8: 0x9419,
    0x93A9: 0x9676,
    0x93AA: 0x982D,
    0x93AB: 0x9A30,
    0x93AC: 0x95D8,
    0x93AD: 0x50CD,
    0x93AE: 0x52D5,
    0x93AF: 0x540C,
    0x93B0: 0x5802,
    0x93B1: 0x5C0E,
    0x93B2: 0x61A7,
    0x93B3: 0x649E,
    0x93B4: 0x6D1E,
    0x93B5: 0x77B3,
    0x93B6: 0x7AE5,
    0x93B7: 0x80F4,
    0x93B8: 0x8404,
    0x93B9: 0x9053,
    0x93BA: 0x9285,
    0x93BB: 0x5CE0,
    0x93BC: 0x9D07,
    0x93BD: 0x533F,
    0x93BE: 0x5F97,
    0x93BF: 0x5FB3,
    0x93C0: 0x6D9C,
    0x93C1: 0x7279,
    0x93C2: 0x7763,
    0x93C3: 0x79BF,
    0x93C4: 0x7BE4,
    0x93C5: 0x6BD2,
    0x93C6: 0x72EC,
    0x93C7: 0x8AAD,
    0x93C8: 0x6803,
    0x93C9: 0x6A61,
    0x93CA: 0x51F8,
    0x93CB: 0x7A81,
    0x93CC: 0x6934,
    0x93CD: 0x5C4A,
    0x93CE: 0x9CF6,
    0x93CF: 0x82EB,
    0x93D0: 0x5BC5,
    0x93D1: 0x9149,
    0x93D2: 0x701E,
    0x93D3: 0x5678,
    0x93D4: 0x5C6F,
    0x93D5: 0x60C7,
    0x93D6: 0x6566,
    0x93D7: 0x6C8C,
    0x93D8: 0x8C5A,
    0x93D9: 0x9041,
    0x93DA: 0x9813,
    0x93DB: 0x5451,
    0x93DC: 0x66C7,
    0x93DD: 0x920D,
    0x93DE: 0x5948,
    0x93DF: 0x90A3,
    0x93E0: 0x5185,
    0x93E1: 0x4E4D,
    0x93E2: 0x51EA,
    0x93E3: 0x8599,
    0x93E4: 0x8B0E,
    0x93E5: 0x7058,
    0x93E6: 0x637A,
    0x93E7: 0x934B,
    0x93E8: 0x6962,
    0x93E9: 0x99B4,
    0x93EA: 0x7E04,
    0x93EB: 0x7577,
    0x93EC: 0x5357,
    0x93ED: 0x6960,
    0x93EE: 0x8EDF,
    0x93EF: 0x96E3,
    0x93F0: 0x6C5D,
    0x93F1: 0x4E8C,
    0x93F2: 0x5C3C,
    0x93F3: 0x5F10,
    0x93F4: 0x8FE9,
    0x93F5: 0x5302,
    0x93F6: 0x8CD1,
    0x93F7: 0x8089,
    0x93F8: 0x8679,
    0x93F9: 0x5EFF,
    0x93FA: 0x65E5,
    0x93FB: 0x4E73,
    0x93FC: 0x5165,
    0x9440: 0x5982,
    0x9441: 0x5C3F,
    0x9442: 0x97EE,
    0x9443: 0x4EFB,
    0x9444: 0x598A,
    0x9445: 0x5FCD,
    0x9446: 0x8A8D,
    0x9447: 0x6FE1,
    0x9448: 0x79B0,
    0x9449: 0x7962,
    0x944A: 0x5BE7,
    0x944B: 0x8471,
    0x944C: 0x732B,
    0x944D: 0x71B1,
    0x944E: 0x5E74,
    0x944F: 0x5FF5,
    0x9450: 0x637B,
    0x9451: 0x649A,
    0x9452: 0x71C3,
    0x9453: 0x7C98,
    0x9454: 0x4E43,
    0x9455: 0x5EFC,
    0x9456: 0x4E4B,
    0x9457: 0x57DC,
    0x9458: 0x56A2,
    0x9459: 0x60A9,
    0x945A: 0x6FC3,
    0x945B: 0x7D0D,
    0x945C: 0x80FD,
    0x945D: 0x8133,
    0x945E: 0x81BF,
    0x945F: 0x8FB2,
    0x9460: 0x8997,
    0x9461: 0x86A4,
    0x9462: 0x5DF4,
    0x9463: 0x628A,
    0x9464: 0x64AD,
    0x9465: 0x8987,
    0x9466: 0x6777,
    0x9467: 0x6CE2,
    0x9468: 0x6D3E,
    0x9469: 0x7436,
    0x946A: 0x7834,
    0x946B: 0x5A46,
    0x946C: 0x7F75,
    0x946D: 0x82AD,
    0x946E: 0x99AC,
    0x946F: 0x4FF3,
    0x9470: 0x5EC3,
    0x9471: 0x62DD,
    0x9472: 0x6392,
    0x9473: 0x6557,
    0x9474: 0x676F,
    0x9475: 0x76C3,
    0x9476: 0x724C,
    0x9477: 0x80CC,
    0x9478: 0x80BA,
    0x9479: 0x8F29,
    0x947A: 0x914D,
    0x947B: 0x500D,
    0x947C: 0x57F9,
    0x947D: 0x5A92,
    0x947E: 0x6885,
    0x9480: 0x6973,
    0x9481: 0x7164,
    0x9482: 0x72FD,
    0x9483: 0x8CB7,
    0x9484: 0x58F2,
    0x9485: 0x8CE0,
    0x9486: 0x966A,
    0x9487: 0x9019,
    0x9488: 0x877F,
    0x9489: 0x79E4,
    0x948A: 0x77E7,
    0x948B: 0x8429,
    0x948C: 0x4F2F,
    0x948D: 0x5265,
    0x948E: 0x535A,
    0x948F: 0x62CD,
    0x9490: 0x67CF,
    0x9491: 0x6CCA,
    0x9492: 0x767D,
    0x9493: 0x7B94,
    0x9494: 0x7C95,
    0x9495: 0x8236,
    0x9496: 0x8584,
    0x9497: 0x8FEB,
    0x9498: 0x66DD,
    0x9499: 0x6F20,
    0x949A: 0x7206,
    0x949B: 0x7E1B,
    0x949C: 0x83AB,
    0x949D: 0x99C1,
    0x949E: 0x9EA6,
    0x949F: 0x51FD,
    0x94A0: 0x7BB1,
    0x94A1: 0x7872,
    0x94A2: 0x7BB8,
    0x94A3: 0x8087,
    0x94A4: 0x7B48,
    0x94A5: 0x6AE8,
    0x94A6: 0x5E61,
    0x94A7: 0x808C,
    0x94A8: 0x7551,
    0x94A9: 0x7560,
    0x94AA: 0x516B,
    0x94AB: 0x9262,
    0x94AC: 0x6E8C,
    0x94AD: 0x767A,
    0x94AE: 0x9197,
    0x94AF: 0x9AEA,
    0x94B0: 0x4F10,
    0x94B1: 0x7F70,
    0x94B2: 0x629C,
    0x94B3: 0x7B4F,
    0x94B4: 0x95A5,
    0x94B5: 0x9CE9,
    0x94B6: 0x567A,
    0x94B7: 0x5859,
    0x94B8: 0x86E4,
    0x94B9: 0x96BC,
    0x94BA: 0x4F34,
    0x94BB: 0x5224,
    0x94BC: 0x534A,
    0x94BD: 0x53CD,
    0x94BE: 0x53DB,
    0x94BF: 0x5E06,
    0x94C0: 0x642C,
    0x94C1: 0x6591,
    0x94C2: 0x677F,
    0x94C3: 0x6C3E,
    0x94C4: 0x6C4E,
    0x94C5: 0x7248,
    0x94C6: 0x72AF,
    0x94C7: 0x73ED,
    0x94C8: 0x7554,
    0x94C9: 0x7E41,
    0x94CA: 0x822C,
    0x94CB: 0x85E9,
    0x94CC: 0x8CA9,
    0x94CD: 0x7BC4,
    0x94CE: 0x91C6,
    0x94CF: 0x7169,
    0x94D0: 0x9812,
    0x94D1: 0x98EF,
    0x94D2: 0x633D,
    0x94D3: 0x6669,
    0x94D4: 0x756A,
    0x94D5: 0x76E4,
    0x94D6: 0x78D0,
    0x94D7: 0x8543,
    0x94D8: 0x86EE,
    0x94D9: 0x532A,
    0x94DA: 0x5351,
    0x94DB: 0x5426,
    0x94DC: 0x5983,
    0x94DD: 0x5E87,
    0x94DE: 0x5F7C,
    0x94DF: 0x60B2,
    0x94E0: 0x6249,
    0x94E1: 0x6279,
    0x94E2: 0x62AB,
    0x94E3: 0x6590,
    0x94E4: 0x6BD4,
    0x94E5: 0x6CCC,
    0x94E6: 0x75B2,
    0x94E7: 0x76AE,
    0x94E8: 0x7891,
    0x94E9: 0x79D8,
    0x94EA: 0x7DCB,
    0x94EB: 0x7F77,
    0x94EC: 0x80A5,
    0x94ED: 0x88AB,
    0x94EE: 0x8AB9,
    0x94EF: 0x8CBB,
    0x94F0: 0x907F,
    0x94F1: 0x975E,
    0x94F2: 0x98DB,
    0x94F3: 0x6A0B,
    0x94F4: 0x7C38,
    0x94F5: 0x5099,
    0x94F6: 0x5C3E,
    0x94F7: 0x5FAE,
    0x94F8: 0x6787,
    0x94F9: 0x6BD8,
    0x94FA: 0x7435,
    0x94FB: 0x7709,
    0x94FC: 0x7F8E,
    0x9540: 0x9F3B,
    0x9541: 0x67CA,
    0x9542: 0x7A17,
    0x9543: 0x5339,
    0x9544: 0x758B,
    0x9545: 0x9AED,
    0x9546: 0x5F66,
    0x9547: 0x819D,
    0x9548: 0x83F1,
    0x9549: 0x8098,
    0x954A: 0x5F3C,
    0x954B: 0x5FC5,
    0x954C: 0x7562,
    0x954D: 0x7B46,
    0x954E: 0x903C,
    0x954F: 0x6867,
    0x9550: 0x59EB,
    0x9551: 0x5A9B,
    0x9552: 0x7D10,
    0x9553: 0x767E,
    0x9554: 0x8B2C,
    0x9555: 0x4FF5,
    0x9556: 0x5F6A,
    0x9557: 0x6A19,
    0x9558: 0x6C37,
    0x9559: 0x6F02,
    0x955A: 0x74E2,
    0x955B: 0x7968,
    0x955C: 0x8868,
    0x955D: 0x8A55,
    0x955E: 0x8C79,
    0x955F: 0x5EDF,
    0x9560: 0x63CF,
    0x9561: 0x75C5,
    0x9562: 0x79D2,
    0x9563: 0x82D7,
    0x9564: 0x9328,
    0x9565: 0x92F2,
    0x9566: 0x849C,
    0x9567: 0x86ED,
    0x9568: 0x9C2D,
    0x9569: 0x54C1,
    0x956A: 0x5F6C,
    0x956B: 0x658C,
    0x956C: 0x6D5C,
    0x956D: 0x7015,
    0x956E: 0x8CA7,
    0x956F: 0x8CD3,
    0x9570: 0x983B,
    0x9571: 0x654F,
    0x9572: 0x74F6,
    0x9573: 0x4E0D,
    0x9574: 0x4ED8,
    0x9575: 0x57E0,
    0x9576: 0x592B,
    0x9577: 0x5A66,
    0x9578: 0x5BCC,
    0x9579: 0x51A8,
    0x957A: 0x5E03,
    0x957B: 0x5E9C,
    0x957C: 0x6016,
    0x957D: 0x6276,
    0x957E: 0x6577,
    0x9580: 0x65A7,
    0x9581: 0x666E,
    0x9582: 0x6D6E,
    0x9583: 0x7236,
    0x9584: 0x7B26,
    0x9585: 0x8150,
    0x9586: 0x819A,
    0x9587: 0x8299,
    0x9588: 0x8B5C,
    0x9589: 0x8CA0,
    0x958A: 0x8CE6,
    0x958B: 0x8D74,
    0x958C: 0x961C,
    0x958D: 0x9644,
    0x958E: 0x4FAE,
    0x958F: 0x64AB,
    0x9590: 0x6B66,
    0x9591: 0x821E,
    0x9592: 0x8461,
    0x9593: 0x856A,
    0x9594: 0x90E8,
    0x9595: 0x5C01,
    0x9596: 0x6953,
    0x9597: 0x98A8,
    0x9598: 0x847A,
    0x9599: 0x8557,
    0x959A: 0x4F0F,
    0x959B: 0x526F,
    0x959C: 0x5FA9,
    0x959D: 0x5E45,
    0x959E: 0x670D,
    0x959F: 0x798F,
    0x95A0: 0x8179,
    0x95A1: 0x8907,
    0x95A2: 0x8986,
    0x95A3: 0x6DF5,
    0x95A4: 0x5F17,
    0x95A5: 0x6255,
    0x95A6: 0x6CB8,
    0x95A7: 0x4ECF,
    0x95A8: 0x7269,
    0x95A9: 0x9B92,
    0x95AA: 0x5206,
    0x95AB: 0x543B,
    0x95AC: 0x5674,
    0x95AD: 0x58B3,
    0x95AE: 0x61A4,
    0x95AF: 0x626E,
    0x95B0: 0x711A,
    0x95B1: 0x596E,
    0x95B2: 0x7C89,
    0x95B3: 0x7CDE,
    0x95B4: 0x7D1B,
    0x95B5: 0x96F0,
    0x95B6: 0x6587,
    0x95B7: 0x805E,
    0x95B8: 0x4E19,
    0x95B9: 0x4F75,
    0x95BA: 0x5175,
    0x95BB: 0x5840,
    0x95BC: 0x5E63,
    0x95BD: 0x5E73,
    0x95BE: 0x5F0A,
    0x95BF: 0x67C4,
    0x95C0: 0x4E26,
    0x95C1: 0x853D,
    0x95C2: 0x9589,
    0x95C3: 0x965B,
    0x95C4: 0x7C73,
    0x95C5: 0x9801,
    0x95C6: 0x50FB,
    0x95C7: 0x58C1,
    0x95C8: 0x7656,
    0x95C9: 0x78A7,
    0x95CA: 0x5225,
    0x95CB: 0x77A5,
    0x95CC: 0x8511,
    0x95CD: 0x7B86,
    0x95CE: 0x504F,
    0x95CF: 0x5909,
    0x95D0: 0x7247,
    0x95D1: 0x7BC7,
    0x95D2: 0x7DE8,
    0x95D3: 0x8FBA,
    0x95D4: 0x8FD4,
    0x95D5: 0x904D,
    0x95D6: 0x4FBF,
    0x95D7: 0x52C9,
    0x95D8: 0x5A29,
    0x95D9: 0x5F01,
    0x95DA: 0x97AD,
    0x95DB: 0x4FDD,
    0x95DC: 0x8217,
    0x95DD: 0x92EA,
    0x95DE: 0x5703,
    0x95DF: 0x6355,
    0x95E0: 0x6B69,
    0x95E1: 0x752B,
    0x95E2: 0x88DC,
    0x95E3: 0x8F14,
    0x95E4: 0x7A42,
    0x95E5: 0x52DF,
    0x95E6: 0x5893,
    0x95E7: 0x6155,
    0x95E8: 0x620A,
    0x95E9: 0x66AE,
    0x95EA: 0x6BCD,
    0x95EB: 0x7C3F,
    0x95EC: 0x83E9,
    0x95ED: 0x5023,
    0x95EE: 0x4FF8,
    0x95EF: 0x5305,
    0x95F0: 0x5446,
    0x95F1: 0x5831,
    0x95F2: 0x5949,
    0x95F3: 0x5B9D,
    0x95F4: 0x5CF0,
    0x95F5: 0x5CEF,
    0x95F6: 0x5D29,
    0x95F7: 0x5E96,
    0x95F8: 0x62B1,
    0x95F9: 0x6367,
    0x95FA: 0x653E,
    0x95FB: 0x65B9,
    0x95FC: 0x670B,
    0x9640: 0x6CD5,
    0x9641: 0x6CE1,
    0x9642: 0x70F9,
    0x9643: 0x7832,
    0x9644: 0x7E2B,
    0x9645: 0x80DE,
    0x9646: 0x82B3,
    0x9647: 0x840C,
    0x9648: 0x84EC,
    0x9649: 0x8702,
    0x964A: 0x8912,
    0x964B: 0x8A2A,
    0x964C: 0x8C4A,
    0x964D: 0x90A6,
    0x964E: 0x92D2,
    0x964F: 0x98FD,
    0x9650: 0x9CF3,
    0x9651: 0x9D6C,
    0x9652: 0x4E4F,
    0x9653: 0x4EA1,
    0x9654: 0x508D,
    0x9655: 0x5256,
    0x9656: 0x574A,
    0x9657: 0x59A8,
    0x9658: 0x5E3D,
    0x9659: 0x5FD8,
    0x965A: 0x5FD9,
    0x965B: 0x623F,
    0x965C: 0x66B4,
    0x965D: 0x671B,
    0x965E: 0x67D0,
    0x965F: 0x68D2,
    0x9660: 0x5192,
    0x9661: 0x7D21,
    0x9662: 0x80AA,
    0x9663: 0x81A8,
    0x9664: 0x8B00,
    0x9665: 0x8C8C,
    0x9666: 0x8CBF,
    0x9667: 0x927E,
    0x9668: 0x9632,
    0x9669: 0x5420,
    0x966A: 0x982C,
    0x966B: 0x5317,
    0x966C: 0x50D5,
    0x966D: 0x535C,
    0x966E: 0x58A8,
    0x966F: 0x64B2,
    0x9670: 0x6734,
    0x9671: 0x7267,
    0x9672: 0x7766,
    0x9673: 0x7A46,
    0x9674: 0x91E6,
    0x9675: 0x52C3,
    0x9676: 0x6CA1,
    0x9677: 0x6B86,
    0x9678: 0x5800,
    0x9679: 0x5E4C,
    0x967A: 0x5954,
    0x967B: 0x672C,
    0x967C: 0x7FFB,
    0x967D: 0x51E1,
    0x967E: 0x76C6,
    0x9680: 0x6469,
    0x9681: 0x78E8,
    0x9682: 0x9B54,
    0x9683: 0x9EBB,
    0x9684: 0x57CB,
    0x9685: 0x59B9,
    0x9686: 0x6627,
    0x9687: 0x679A,
    0x9688: 0x6BCE,
    0x9689: 0x54E9,
    0x968A: 0x69D9,
    0x968B: 0x5E55,
    0x968C: 0x819C,
    0x968D: 0x6795,
    0x968E: 0x9BAA,
    0x968F: 0x67FE,
    0x9690: 0x9C52,
    0x9691: 0x685D,
    0x9692: 0x4EA6,
    0x9693: 0x4FE3,
    0x9694: 0x53C8,
    0x9695: 0x62B9,
    0x9696: 0x672B,
    0x9697: 0x6CAB,
    0x9698: 0x8FC4,
    0x9699: 0x4FAD,
    0x969A: 0x7E6D,
    0x969B: 0x9EBF,
    0x969C: 0x4E07,
    0x969D: 0x6162,
    0x969E: 0x6E80,
    0x969F: 0x6F2B,
    0x96A0: 0x8513,
    0x96A1: 0x5473,
    0x96A2: 0x672A,
    0x96A3: 0x9B45,
    0x96A4: 0x5DF3,
    0x96A5: 0x7B95,
    0x96A6: 0x5CAC,
    0x96A7: 0x5BC6,
    0x96A8: 0x871C,
    0x96A9: 0x6E4A,
    0x96AA: 0x84D1,
    0x96AB: 0x7A14,
    0x96AC: 0x8108,
    0x96AD: 0x5999,
    0x96AE: 0x7C8D,
    0x96AF: 0x6C11,
    0x96B0: 0x7720,
    0x96B1: 0x52D9,
    0x96B2: 0x5922,
    0x96B3: 0x7121,
    0x96B4: 0x725F,
    0x96B5: 0x77DB,
    0x96B6: 0x9727,
    0x96B7: 0x9D61,
    0x96B8: 0x690B,
    0x96B9: 0x5A7F,
    0x96BA: 0x5A18,
    0x96BB: 0x51A5,
    0x96BC: 0x540D,
    0x96BD: 0x547D,
    0x96BE: 0x660E,
    0x96BF: 0x76DF,
    0x96C0: 0x8FF7,
    0x96C1: 0x9298,
    0x96C2: 0x9CF4,
    0x96C3: 0x59EA,
    0x96C4: 0x725D,
    0x96C5: 0x6EC5,
    0x96C6: 0x514D,
    0x96C7: 0x68C9,
    0x96C8: 0x7DBF,
    0x96C9: 0x7DEC,
    0x96CA: 0x9762,
    0x96CB: 0x9EBA,
    0x96CC: 0x6478,
    0x96CD: 0x6A21,
    0x96CE: 0x8302,
    0x96CF: 0x5984,
    0x96D0: 0x5B5F,
    0x96D1: 0x6BDB,
    0x96D2: 0x731B,
    0x96D3: 0x76F2,
    0x96D4: 0x7DB2,
    0x96D5: 0x8017,
    0x96D6: 0x8499,
    0x96D7: 0x5132,
    0x96D8: 0x6728,
    0x96D9: 0x9ED9,
    0x96DA: 0x76EE,
    0x96DB: 0x6762,
    0x96DC: 0x52FF,
    0x96DD: 0x9905,
    0x96DE: 0x5C24,
    0x96DF: 0x623B,
    0x96E0: 0x7C7E,
    0x96E1: 0x8CB0,
    0x96E2: 0x554F,
    0x96E3: 0x60B6,
    0x96E4: 0x7D0B,
    0x96E5: 0x9580,
    0x96E6: 0x5301,
    0x96E7: 0x4E5F,
    0x96E8: 0x51B6,
    0x96E9: 0x591C,
    0x96EA: 0x723A,
    0x96EB: 0x8036,
    0x96EC: 0x91CE,
    0x96ED: 0x5F25,
    0x96EE: 0x77E2,
    0x96EF: 0x5384,
    0x96F0: 0x5F79,
    0x96F1: 0x7D04,
    0x96F2: 0x85AC,
    0x96F3: 0x8A33,
    0x96F4: 0x8E8D,
    0x96F5: 0x9756,
    0x96F6: 0x67F3,
    0x96F7: 0x85AE,
    0x96F8: 0x9453,
    0x96F9: 0x6109,
    0x96FA: 0x6108,
    0x96FB: 0x6CB9,
    0x96FC: 0x7652,
    0x9740: 0x8AED,
    0x9741: 0x8F38,
    0x9742: 0x552F,
    0x9743: 0x4F51,
    0x9744: 0x512A,
    0x9745: 0x52C7,
    0x9746: 0x53CB,
    0x9747: 0x5BA5,
    0x9748: 0x5E7D,
    0x9749: 0x60A0,
    0x974A: 0x6182,
    0x974B: 0x63D6,
    0x974C: 0x6709,
    0x974D: 0x67DA,
    0x974E: 0x6E67,
    0x974F: 0x6D8C,
    0x9750: 0x7336,
    0x9751: 0x7337,
    0x9752: 0x7531,
    0x9753: 0x7950,
    0x9754: 0x88D5,
    0x9755: 0x8A98,
    0x9756: 0x904A,
    0x9757: 0x9091,
    0x9758: 0x90F5,
    0x9759: 0x96C4,
    0x975A: 0x878D,
    0x975B: 0x5915,
    0x975C: 0x4E88,
    0x975D: 0x4F59,
    0x975E: 0x4E0E,
    0x975F: 0x8A89,
    0x9760: 0x8F3F,
    0x9761: 0x9810,
    0x9762: 0x50AD,
    0x9763: 0x5E7C,
    0x9764: 0x5996,
    0x9765: 0x5BB9,
    0x9766: 0x5EB8,
    0x9767: 0x63DA,
    0x9768: 0x63FA,
    0x9769: 0x64C1,
    0x976A: 0x66DC,
    0x976B: 0x694A,
    0x976C: 0x69D8,
    0x976D: 0x6D0B,
    0x976E: 0x6EB6,
    0x976F: 0x7194,
    0x9770: 0x7528,
    0x9771: 0x7AAF,
    0x9772: 0x7F8A,
    0x9773: 0x8000,
    0x9774: 0x8449,
    0x9775: 0x84C9,
    0x9776: 0x8981,
    0x9777: 0x8B21,
    0x9778: 0x8E0A,
    0x9779: 0x9065,
    0x977A: 0x967D,
    0x977B: 0x990A,
    0x977C: 0x617E,
    0x977D: 0x6291,
    0x977E: 0x6B32,
    0x9780: 0x6C83,
    0x9781: 0x6D74,
    0x9782: 0x7FCC,
    0x9783: 0x7FFC,
    0x9784: 0x6DC0,
    0x9785: 0x7F85,
    0x9786: 0x87BA,
    0x9787: 0x88F8,
    0x9788: 0x6765,
    0x9789: 0x83B1,
    0x978A: 0x983C,
    0x978B: 0x96F7,
    0x978C: 0x6D1B,
    0x978D: 0x7D61,
    0x978E: 0x843D,
    0x978F: 0x916A,
    0x9790: 0x4E71,
    0x9791: 0x5375,
    0x9792: 0x5D50,
    0x9793: 0x6B04,
    0x9794: 0x6FEB,
    0x9795: 0x85CD,
    0x9796: 0x862D,
    0x9797: 0x89A7,
    0x9798: 0x5229,
    0x9799: 0x540F,
    0x979A: 0x5C65,
    0x979B: 0x674E,
    0x979C: 0x68A8,
    0x979D: 0x7406,
    0x979E: 0x7483,
    0x979F: 0x75E2,
    0x97A0: 0x88CF,
    0x97A1: 0x88E1,
    0x97A2: 0x91CC,
    0x97A3: 0x96E2,
    0x97A4: 0x9678,
    0x97A5: 0x5F8B,
    0x97A6: 0x7387,
    0x97A7: 0x7ACB,
    0x97A8: 0x844E,
    0x97A9: 0x63A0,
    0x97AA: 0x7565,
    0x97AB: 0x5289,
    0x97AC: 0x6D41,
    0x97AD: 0x6E9C,
    0x97AE: 0x7409,
    0x97AF: 0x7559,
    0x97B0: 0x786B,
    0x97B1: 0x7C92,
    0x97B2: 0x9686,
    0x97B3: 0x7ADC,
    0x97B4: 0x9F8D,
    0x97B5: 0x4FB6,
    0x97B6: 0x616E,
    0x97B7: 0x65C5,
    0x97B8: 0x865C,
    0x97B9: 0x4E86,
    0x97BA: 0x4EAE,
    0x97BB: 0x50DA,
    0x97BC: 0x4E21,
    0x97BD: 0x51CC,
    0x97BE: 0x5BEE,
    0x97BF: 0x6599,
    0x97C0: 0x6881,
    0x97C1: 0x6DBC,
    0x97C2: 0x731F,
    0x97C3: 0x7642,
    0x97C4: 0x77AD,
    0x97C5: 0x7A1C,
    0x97C6: 0x7CE7,
    0x97C7: 0x826F,
    0x97C8: 0x8AD2,
    0x97C9: 0x907C,
    0x97CA: 0x91CF,
    0x97CB: 0x9675,
    0x97CC: 0x9818,
    0x97CD: 0x529B,
    0x97CE: 0x7DD1,
    0x97CF: 0x502B,
    0x97D0: 0x5398,
    0x97D1: 0x6797,
    0x97D2: 0x6DCB,
    0x97D3: 0x71D0,
    0x97D4: 0x7433,
    0x97D5: 0x81E8,
    0x97D6: 0x8F2A,
    0x97D7: 0x96A3,
    0x97D8: 0x9C57,
    0x97D9: 0x9E9F,
    0x97DA: 0x7460,
    0x97DB: 0x5841,
    0x97DC: 0x6D99,
    0x97DD: 0x7D2F,
    0x97DE: 0x985E,
    0x97DF: 0x4EE4,
    0x97E0: 0x4F36,
    0x97E1: 0x4F8B,
    0x97E2: 0x51B7,
    0x97E3: 0x52B1,
    0x97E4: 0x5DBA,
    0x97E5: 0x601C,
    0x97E6: 0x73B2,
    0x97E7: 0x793C,
    0x97E8: 0x82D3,
    0x97E9: 0x9234,
    0x97EA: 0x96B7,
    0x97EB: 0x96F6,
    0x97EC: 0x970A,
    0x97ED: 0x9E97,
    0x97EE: 0x9F62,
    0x97EF: 0x66A6,
    0x97F0: 0x6B74,
    0x97F1: 0x5217,
    0x97F2: 0x52A3,
    0x97F3: 0x70C8,
    0x97F4: 0x88C2,
    0x97F5: 0x5EC9,
    0x97F6: 0x604B,
    0x97F7: 0x6190,
    0x97F8: 0x6F23,
    0x97F9: 0x7149,
    0x97FA: 0x7C3E,
    0x97FB: 0x7DF4,
    0x97FC: 0x806F,
    0x9840: 0x84EE,
    0x9841: 0x9023,
    0x9842: 0x932C,
    0x9843: 0x5442,
    0x9844: 0x9B6F,
    0x9845: 0x6AD3,
    0x9846: 0x7089,
    0x9847: 0x8CC2,
    0x9848: 0x8DEF,
    0x9849: 0x9732,
    0x984A: 0x52B4,
    0x984B: 0x5A41,
    0x984C: 0x5ECA,
    0x984D: 0x5F04,
    0x984E: 0x6717,
    0x984F: 0x697C,
    0x9850: 0x6994,
    0x9851: 0x6D6A,
    0x9852: 0x6F0F,
    0x9853: 0x7262,
    0x9854: 0x72FC,
    0x9855: 0x7BED,
    0x9856: 0x8001,
    0x9857: 0x807E,
    0x9858: 0x874B,
    0x9859: 0x90CE,
    0x985A: 0x516D,
    0x985B: 0x9E93,
    0x985C: 0x7984,
    0x985D: 0x808B,
    0x985E: 0x9332,
    0x985F: 0x8AD6,
    0x9860: 0x502D,
    0x9861: 0x548C,
    0x9862: 0x8A71,
    0x9863: 0x6B6A,
    0x9864: 0x8CC4,
    0x9865: 0x8107,
    0x9866: 0x60D1,
    0x9867: 0x67A0,
    0x9868: 0x9DF2,
    0x9869: 0x4E99,
    0x986A: 0x4E98,
    0x986B: 0x9C10,
    0x986C: 0x8A6B,
    0x986D: 0x85C1,
    0x986E: 0x8568,
    0x986F: 0x6900,
    0x9870: 0x6E7E,
    0x9871: 0x7897,
    0x9872: 0x8155,
    0x989F: 0x5F0C,
    0x98A0: 0x4E10,
    0x98A1: 0x4E15,
    0x98A2: 0x4E2A,
    0x98A3: 0x4E31,
    0x98A4: 0x4E36,
    0x98A5: 0x4E3C,
    0x98A6: 0x4E3F,
    0x98A7: 0x4E42,
    0x98A8: 0x4E56,
    0x98A9: 0x4E58,
    0x98AA: 0x4E82,
    0x98AB: 0x4E85,
    0x98AC: 0x8C6B,
    0x98AD: 0x4E8A,
    0x98AE: 0x8212,
    0x98AF: 0x5F0D,
    0x98B0: 0x4E8E,
    0x98B1: 0x4E9E,
    0x98B2: 0x4E9F,
    0x98B3: 0x4EA0,
    0x98B4: 0x4EA2,
    0x98B5: 0x4EB0,
    0x98B6: 0x4EB3,
    0x98B7: 0x4EB6,
    0x98B8: 0x4ECE,
    0x98B9: 0x4ECD,
    0x98BA: 0x4EC4,
    0x98BB: 0x4EC6,
    0x98BC: 0x4EC2,
    0x98BD: 0x4ED7,
    0x98BE: 0x4EDE,
    0x98BF: 0x4EED,
    0x98C0: 0x4EDF,
    0x98C1: 0x4EF7,
    0x98C2: 0x4F09,
    0x98C3: 0x4F5A,
    0x98C4: 0x4F30,
    0x98C5: 0x4F5B,
    0x98C6: 0x4F5D,
    0x98C7: 0x4F57,
    0x98C8: 0x4F47,
    0x98C9: 0x4F76,
    0x98CA: 0x4F88,
    0x98CB: 0x4F8F,
    0x98CC: 0x4F98,
    0x98CD: 0x4F7B,
    0x98CE: 0x4F69,
    0x98CF: 0x4F70,
    0x98D0: 0x4F91,
    0x98D1: 0x4F6F,
    0x98D2: 0x4F86,
    0x98D3: 0x4F96,
    0x98D4: 0x5118,
    0x98D5: 0x4FD4,
    0x98D6: 0x4FDF,
    0x98D7: 0x4FCE,
    0x98D8: 0x4FD8,
    0x98D9: 0x4FDB,
    0x98DA: 0x4FD1,
    0x98DB: 0x4FDA,
    0x98DC: 0x4FD0,
    0x98DD: 0x4FE4,
    0x98DE: 0x4FE5,
    0x98DF: 0x501A,
    0x98E0: 0x5028,
    0x98E1: 0x5014,
    0x98E2: 0x502A,
    0x98E3: 0x5025,
    0x98E4: 0x5005,
    0x98E5: 0x4F1C,
    0x98E6: 0x4FF6,
    0x98E7: 0x5021,
    0x98E8: 0x5029,
    0x98E9: 0x502C,
    0x98EA: 0x4FFE,
    0x98EB: 0x4FEF,
    0x98EC: 0x5011,
    0x98ED: 0x5006,
    0x98EE: 0x5043,
    0x98EF: 0x5047,
    0x98F0: 0x6703,
    0x98F1: 0x5055,
    0x98F2: 0x5050,
    0x98F3: 0x5048,
    0x98F4: 0x505A,
    0x98F5: 0x5056,
    0x98F6: 0x506C,
    0x98F7: 0x5078,
    0x98F8: 0x5080,
    0x98F9: 0x509A,
    0x98FA: 0x5085,
    0x98FB: 0x50B4,
    0x98FC: 0x50B2,
    0x9940: 0x50C9,
    0x9941: 0x50CA,
    0x9942: 0x50B3,
    0x9943: 0x50C2,
    0x9944: 0x50D6,
    0x9945: 0x50DE,
    0x9946: 0x50E5,
    0x9947: 0x50ED,
    0x9948: 0x50E3,
    0x9949: 0x50EE,
    0x994A: 0x50F9,
    0x994B: 0x50F5,
    0x994C: 0x5109,
    0x994D: 0x5101,
    0x994E: 0x5102,
    0x994F: 0x5116,
    0x9950: 0x5115,
    0x9951: 0x5114,
    0x9952: 0x511A,
    0x9953: 0x5121,
    0x9954: 0x513A,
    0x9955: 0x5137,
    0x9956: 0x513C,
    0x9957: 0x513B,
    0x9958: 0x513F,
    0x9959: 0x5140,
    0x995A: 0x5152,
    0x995B: 0x514C,
    0x995C: 0x5154,
    0x995D: 0x5162,
    0x995E: 0x7AF8,
    0x995F: 0x5169,
    0x9960: 0x516A,
    0x9961: 0x516E,
    0x9962: 0x5180,
    0x9963: 0x5182,
    0x9964: 0x56D8,
    0x9965: 0x518C,
    0x9966: 0x5189,
    0x9967: 0x518F,
    0x9968: 0x5191,
    0x9969: 0x5193,
    0x996A: 0x5195,
    0x996B: 0x5196,
    0x996C: 0x51A4,
    0x996D: 0x51A6,
    0x996E: 0x51A2,
    0x996F: 0x51A9,
    0x9970: 0x51AA,
    0x9971: 0x51AB,
    0x9972: 0x51B3,
    0x9973: 0x51B1,
    0x9974: 0x51B2,
    0x9975: 0x51B0,
    0x9976: 0x51B5,
    0x9977: 0x51BD,
    0x9978: 0x51C5,
    0x9979: 0x51C9,
    0x997A: 0x51DB,
    0x997B: 0x51E0,
    0x997C: 0x8655,
    0x997D: 0x51E9,
    0x997E: 0x51ED,
    0x9980: 0x51F0,
    0x9981: 0x51F5,
    0x9982: 0x51FE,
    0x9983: 0x5204,
    0x9984: 0x520B,
    0x9985: 0x5214,
    0x9986: 0x520E,
    0x9987: 0x5227,
    0x9988: 0x522A,
    0x9989: 0x522E,
    0x998A: 0x5233,
    0x998B: 0x5239,
    0x998C: 0x524F,
    0x998D: 0x5244,
    0x998E: 0x524B,
    0x998F: 0x524C,
    0x9990: 0x525E,
    0x9991: 0x5254,
    0x9992: 0x526A,
    0x9993: 0x5274,
    0x9994: 0x5269,
    0x9995: 0x5273,
    0x9996: 0x527F,
    0x9997: 0x527D,
    0x9998: 0x528D,
    0x9999: 0x5294,
    0x999A: 0x5292,
    0x999B: 0x5271,
    0x999C: 0x5288,
    0x999D: 0x5291,
    0x999E: 0x8FA8,
    0x999F: 0x8FA7,
    0x99A0: 0x52AC,
    0x99A1: 0x52AD,
    0x99A2: 0x52BC,
    0x99A3: 0x52B5,
    0x99A4: 0x52C1,
    0x99A5: 0x52CD,
    0x99A6: 0x52D7,
    0x99A7: 0x52DE,
    0x99A8: 0x52E3,
    0x99A9: 0x52E6,
    0x99AA: 0x98ED,
    0x99AB: 0x52E0,
    0x99AC: 0x52F3,
    0x99AD: 0x52F5,
    0x99AE: 0x52F8,
    0x99AF: 0x52F9,
    0x99B0: 0x5306,
    0x99B1: 0x5308,
    0x99B2: 0x7538,
    0x99B3: 0x530D,
    0x99B4: 0x5310,
    0x99B5: 0x530F,
    0x99B6: 0x5315,
    0x99B7: 0x531A,
    0x99B8: 0x5323,
    0x99B9: 0x532F,
    0x99BA: 0x5331,
    0x99BB: 0x5333,
    0x99BC: 0x5338,
    0x99BD: 0x5340,
    0x99BE: 0x5346,
    0x99BF: 0x5345,
    0x99C0: 0x4E17,
    0x99C1: 0x5349,
    0x99C2: 0x534D,
    0x99C3: 0x51D6,
    0x99C4: 0x535E,
    0x99C5: 0x5369,
    0x99C6: 0x536E,
    0x99C7: 0x5918,
    0x99C8: 0x537B,
    0x99C9: 0x5377,
    0x99CA: 0x5382,
    0x99CB: 0x5396,
    0x99CC: 0x53A0,
    0x99CD: 0x53A6,
    0x99CE: 0x53A5,
    0x99CF: 0x53AE,
    0x99D0: 0x53B0,
    0x99D1: 0x53B6,
    0x99D2: 0x53C3,
    0x99D3: 0x7C12,
    0x99D4: 0x96D9,
    0x99D5: 0x53DF,
    0x99D6: 0x66FC,
    0x99D7: 0x71EE,
    0x99D8: 0x53EE,
    0x99D9: 0x53E8,
    0x99DA: 0x53ED,
    0x99DB: 0x53FA,
    0x99DC: 0x5401,
    0x99DD: 0x543D,
    0x99DE: 0x5440,
    0x99DF: 0x542C,
    0x99E0: 0x542D,
    0x99E1: 0x543C,
    0x99E2: 0x542E,
    0x99E3: 0x5436,
    0x99E4: 0x5429,
    0x99E5: 0x541D,
    0x99E6: 0x544E,
    0x99E7: 0x548F,
    0x99E8: 0x5475,
    0x99E9: 0x548E,
    0x99EA: 0x545F,
    0x99EB: 0x5471,
    0x99EC: 0x5477,
    0x99ED: 0x5470,
    0x99EE: 0x5492,
    0x99EF: 0x547B,
    0x99F0: 0x5480,
    0x99F1: 0x5476,
    0x99F2: 0x5484,
    0x99F3: 0x5490,
    0x99F4: 0x5486,
    0x99F5: 0x54C7,
    0x99F6: 0x54A2,
    0x99F7: 0x54B8,
    0x99F8: 0x54A5,
    0x99F9: 0x54AC,
    0x99FA: 0x54C4,
    0x99FB: 0x54C8,
    0x99FC: 0x54A8,
    0x9A40: 0x54AB,
    0x9A41: 0x54C2,
    0x9A42: 0x54A4,
    0x9A43: 0x54BE,
    0x9A44: 0x54BC,
    0x9A45: 0x54D8,
    0x9A46: 0x54E5,
    0x9A47: 0x54E6,
    0x9A48: 0x550F,
    0x9A49: 0x5514,
    0x9A4A: 0x54FD,
    0x9A4B: 0x54EE,
    0x9A4C: 0x54ED,
    0x9A4D: 0x54FA,
    0x9A4E: 0x54E2,
    0x9A4F: 0x5539,
    0x9A50: 0x5540,
    0x9A51: 0x5563,
    0x9A52: 0x554C,
    0x9A53: 0x552E,
    0x9A54: 0x555C,
    0x9A55: 0x5545,
    0x9A56: 0x5556,
    0x9A57: 0x5557,
    0x9A58: 0x5538,
    0x9A59: 0x5533,
    0x9A5A: 0x555D,
    0x9A5B: 0x5599,
    0x9A5C: 0x5580,
    0x9A5D: 0x54AF,
    0x9A5E: 0x558A,
    0x9A5F: 0x559F,
    0x9A60: 0x557B,
    0x9A61: 0x557E,
    0x9A62: 0x5598,
    0x9A63: 0x559E,
    0x9A64: 0x55AE,
    0x9A65: 0x557C,
    0x9A66: 0x5583,
    0x9A67: 0x55A9,
    0x9A68: 0x5587,
    0x9A69: 0x55A8,
    0x9A6A: 0x55DA,
    0x9A6B: 0x55C5,
    0x9A6C: 0x55DF,
    0x9A6D: 0x55C4,
    0x9A6E: 0x55DC,
    0x9A6F: 0x55E4,
    0x9A70: 0x55D4,
    0x9A71: 0x5614,
    0x9A72: 0x55F7,
    0x9A73: 0x5616,
    0x9A74: 0x55FE,
    0x9A75: 0x55FD,
    0x9A76: 0x561B,
    0x9A77: 0x55F9,
    0x9A78: 0x564E,
    0x9A79: 0x5650,
    0x9A7A: 0x71DF,
    0x9A7B: 0x5634,
    0x9A7C: 0x5636,
    0x9A7D: 0x5632,
    0x9A7E: 0x5638,
    0x9A80: 0x566B,
    0x9A81: 0x5664,
    0x9A82: 0x562F,
    0x9A83: 0x566C,
    0x9A84: 0x566A,
    0x9A85: 0x5686,
    0x9A86: 0x5680,
    0x9A87: 0x568A,
    0x9A88: 0x56A0,
    0x9A89: 0x5694,
    0x9A8A: 0x568F,
    0x9A8B: 0x56A5,
    0x9A8C: 0x56AE,
    0x9A8D: 0x56B6,
    0x9A8E: 0x56B4,
    0x9A8F: 0x56C2,
    0x9A90: 0x56BC,
    0x9A91: 0x56C1,
    0x9A92: 0x56C3,
    0x9A93: 0x56C0,
    0x9A94: 0x56C8,
    0x9A95: 0x56CE,
    0x9A96: 0x56D1,
    0x9A97: 0x56D3,
    0x9A98: 0x56D7,
    0x9A99: 0x56EE,
    0x9A9A: 0x56F9,
    0x9A9B: 0x5700,
    0x9A9C: 0x56FF,
    0x9A9D: 0x5704,
    0x9A9E: 0x5709,
    0x9A9F: 0x5708,
    0x9AA0: 0x570B,
    0x9AA1: 0x570D,
    0x9AA2: 0x5713,
    0x9AA3: 0x5718,
    0x9AA4: 0x5716,
    0x9AA5: 0x55C7,
    0x9AA6: 0x571C,
    0x9AA7: 0x5726,
    0x9AA8: 0x5737,
    0x9AA9: 0x5738,
    0x9AAA: 0x574E,
    0x9AAB: 0x573B,
    0x9AAC: 0x5740,
    0x9AAD: 0x574F,
    0x9AAE: 0x5769,
    0x9AAF: 0x57C0,
    0x9AB0: 0x5788,
    0x9AB1: 0x5761,
    0x9AB2: 0x577F,
    0x9AB3: 0x5789,
    0x9AB4: 0x5793,
    0x9AB5: 0x57A0,
    0x9AB6: 0x57B3,
    0x9AB7: 0x57A4,
    0x9AB8: 0x57AA,
    0x9AB9: 0x57B0,
    0x9ABA: 0x57C3,
    0x9ABB: 0x57C6,
    0x9ABC: 0x57D4,
    0x9ABD: 0x57D2,
    0x9ABE: 0x57D3,
    0x9ABF: 0x580A,
    0x9AC0: 0x57D6,
    0x9AC1: 0x57E3,
    0x9AC2: 0x580B,
    0x9AC3: 0x5819,
    0x9AC4: 0x581D,
    0x9AC5: 0x5872,
    0x9AC6: 0x5821,
    0x9AC7: 0x5862,
    0x9AC8: 0x584B,
    0x9AC9: 0x5870,
    0x9ACA: 0x6BC0,
    0x9ACB: 0x5852,
    0x9ACC: 0x583D,
    0x9ACD: 0x5879,
    0x9ACE: 0x5885,
    0x9ACF: 0x58B9,
    0x9AD0: 0x589F,
    0x9AD1: 0x58AB,
    0x9AD2: 0x58BA,
    0x9AD3: 0x58DE,
    0x9AD4: 0x58BB,
    0x9AD5: 0x58B8,
    0x9AD6: 0x58AE,
    0x9AD7: 0x58C5,
    0x9AD8: 0x58D3,
    0x9AD9: 0x58D1,
    0x9ADA: 0x58D7,
    0x9ADB: 0x58D9,
    0x9ADC: 0x58D8,
    0x9ADD: 0x58E5,
    0x9ADE: 0x58DC,
    0x9ADF: 0x58E4,
    0x9AE0: 0x58DF,
    0x9AE1: 0x58EF,
    0x9AE2: 0x58FA,
    0x9AE3: 0x58F9,
    0x9AE4: 0x58FB,
    0x9AE5: 0x58FC,
    0x9AE6: 0x58FD,
    0x9AE7: 0x5902,
    0x9AE8: 0x590A,
    0x9AE9: 0x5910,
    0x9AEA: 0x591B,
    0x9AEB: 0x68A6,
    0x9AEC: 0x5925,
    0x9AED: 0x592C,
    0x9AEE: 0x592D,
    0x9AEF: 0x5932,
    0x9AF0: 0x5938,
    0x9AF1: 0x593E,
    0x9AF2: 0x7AD2,
    0x9AF3: 0x5955,
    0x9AF4: 0x5950,
    0x9AF5: 0x594E,
    0x9AF6: 0x595A,
    0x9AF7: 0x5958,
    0x9AF8: 0x5962,
    0x9AF9: 0x5960,
    0x9AFA: 0x5967,
    0x9AFB: 0x596C,
    0x9AFC: 0x5969,
    0x9B40: 0x5978,
    0x9B41: 0x5981,
    0x9B42: 0x599D,
    0x9B43: 0x4F5E,
    0x9B44: 0x4FAB,
    0x9B45: 0x59A3,
    0x9B46: 0x59B2,
    0x9B47: 0x59C6,
    0x9B48: 0x59E8,
    0x9B49: 0x59DC,
    0x9B4A: 0x598D,
    0x9B4B: 0x59D9,
    0x9B4C: 0x59DA,
    0x9B4D: 0x5A25,
    0x9B4E: 0x5A1F,
    0x9B4F: 0x5A11,
    0x9B50: 0x5A1C,
    0x9B51: 0x5A09,
    0x9B52: 0x5A1A,
    0x9B53: 0x5A40,
    0x9B54: 0x5A6C,
    0x9B55: 0x5A49,
    0x9B56: 0x5A35,
    0x9B57: 0x5A36,
    0x9B58: 0x5A62,
    0x9B59: 0x5A6A,
    0x9B5A: 0x5A9A,
    0x9B5B: 0x5ABC,
    0x9B5C: 0x5ABE,
    0x9B5D: 0x5ACB,
    0x9B5E: 0x5AC2,
    0x9B5F: 0x5ABD,
    0x9B60: 0x5AE3,
    0x9B61: 0x5AD7,
    0x9B62: 0x5AE6,
    0x9B63: 0x5AE9,
    0x9B64: 0x5AD6,
    0x9B65: 0x5AFA,
    0x9B66: 0x5AFB,
    0x9B67: 0x5B0C,
    0x9B68: 0x5B0B,
    0x9B69: 0x5B16,
    0x9B6A: 0x5B32,
    0x9B6B: 0x5AD0,
    0x9B6C: 0x5B2A,
    0x9B6D: 0x5B36,
    0x9B6E: 0x5B3E,
    0x9B6F: 0x5B43,
    0x9B70: 0x5B45,
    0x9B71: 0x5B40,
    0x9B72: 0x5B51,
    0x9B73: 0x5B55,
    0x9B74: 0x5B5A,
    0x9B75: 0x5B5B,
    0x9B76: 0x5B65,
    0x9B77: 0x5B69,
    0x9B78: 0x5B70,
    0x9B79: 0x5B73,
    0x9B7A: 0x5B75,
    0x9B7B: 0x5B78,
    0x9B7C: 0x6588,
    0x9B7D: 0x5B7A,
    0x9B7E: 0x5B80,
    0x9B80: 0x5B83,
    0x9B81: 0x5BA6,
    0x9B82: 0x5BB8,
    0x9B83: 0x5BC3,
    0x9B84: 0x5BC7,
    0x9B85: 0x5BC9,
    0x9B86: 0x5BD4,
    0x9B87: 0x5BD0,
    0x9B88: 0x5BE4,
    0x9B89: 0x5BE6,
    0x9B8A: 0x5BE2,
    0x9B8B: 0x5BDE,
    0x9B8C: 0x5BE5,
    0x9B8D: 0x5BEB,
    0x9B8E: 0x5BF0,
    0x9B8F: 0x5BF6,
    0x9B90: 0x5BF3,
    0x9B91: 0x5C05,
    0x9B92: 0x5C07,
    0x9B93: 0x5C08,
    0x9B94: 0x5C0D,
    0x9B95: 0x5C13,
    0x9B96: 0x5C20,
    0x9B97: 0x5C22,
    0x9B98: 0x5C28,
    0x9B99: 0x5C38,
    0x9B9A: 0x5C39,
    0x9B9B: 0x5C41,
    0x9B9C: 0x5C46,
    0x9B9D: 0x5C4E,
    0x9B9E: 0x5C53,
    0x9B9F: 0x5C50,
    0x9BA0: 0x5C4F,
    0x9BA1: 0x5B71,
    0x9BA2: 0x5C6C,
    0x9BA3: 0x5C6E,
    0x9BA4: 0x4E62,
    0x9BA5: 0x5C76,
    0x9BA6: 0x5C79,
    0x9BA7: 0x5C8C,
    0x9BA8: 0x5C91,
    0x9BA9: 0x5C94,
    0x9BAA: 0x599B,
    0x9BAB: 0x5CAB,
    0x9BAC: 0x5CBB,
    0x9BAD: 0x5CB6,
    0x9BAE: 0x5CBC,
    0x9BAF: 0x5CB7,
    0x9BB0: 0x5CC5,
    0x9BB1: 0x5CBE,
    0x9BB2: 0x5CC7,
    0x9BB3: 0x5CD9,
    0x9BB4: 0x5CE9,
    0x9BB5: 0x5CFD,
    0x9BB6: 0x5CFA,
    0x9BB7: 0x5CED,
    0x9BB8: 0x5D8C,
    0x9BB9: 0x5CEA,
    0x9BBA: 0x5D0B,
    0x9BBB: 0x5D15,
    0x9BBC: 0x5D17,
    0x9BBD: 0x5D5C,
    0x9BBE: 0x5D1F,
    0x9BBF: 0x5D1B,
    0x9BC0: 0x5D11,
    0x9BC1: 0x5D14,
    0x9BC2: 0x5D22,
    0x9BC3: 0x5D1A,
    0x9BC4: 0x5D19,
    0x9BC5: 0x5D18,
    0x9BC6: 0x5D4C,
    0x9BC7: 0x5D52,
    0x9BC8: 0x5D4E,
    0x9BC9: 0x5D4B,
    0x9BCA: 0x5D6C,
    0x9BCB: 0x5D73,
    0x9BCC: 0x5D76,
    0x9BCD: 0x5D87,
    0x9BCE: 0x5D84,
    0x9BCF: 0x5D82,
    0x9BD0: 0x5DA2,
    0x9BD1: 0x5D9D,
    0x9BD2: 0x5DAC,
    0x9BD3: 0x5DAE,
    0x9BD4: 0x5DBD,
    0x9BD5: 0x5D90,
    0x9BD6: 0x5DB7,
    0x9BD7: 0x5DBC,
    0x9BD8: 0x5DC9,
    0x9BD9: 0x5DCD,
    0x9BDA: 0x5DD3,
    0x9BDB: 0x5DD2,
    0x9BDC: 0x5DD6,
    0x9BDD: 0x5DDB,
    0x9BDE: 0x5DEB,
    0x9BDF: 0x5DF2,
    0x9BE0: 0x5DF5,
    0x9BE1: 0x5E0B,
    0x9BE2: 0x5E1A,
    0x9BE3: 0x5E19,
    0x9BE4: 0x5E11,
    0x9BE5: 0x5E1B,
    0x9BE6: 0x5E36,
    0x9BE7: 0x5E37,
    0x9BE8: 0x5E44,
    0x9BE9: 0x5E43,
    0x9BEA: 0x5E40,
    0x9BEB: 0x5E4E,
    0x9BEC: 0x5E57,
    0x9BED: 0x5E54,
    0x9BEE: 0x5E5F,
    0x9BEF: 0x5E62,
    0x9BF0: 0x5E64,
    0x9BF1: 0x5E47,
    0x9BF2: 0x5E75,
    0x9BF3: 0x5E76,
    0x9BF4: 0x5E7A,
    0x9BF5: 0x9EBC,
    0x9BF6: 0x5E7F,
    0x9BF7: 0x5EA0,
    0x9BF8: 0x5EC1,
    0x9BF9: 0x5EC2,
    0x9BFA: 0x5EC8,
    0x9BFB: 0x5ED0,
    0x9BFC: 0x5ECF,
    0x9C40: 0x5ED6,
    0x9C41: 0x5EE3,
    0x9C42: 0x5EDD,
    0x9C43: 0x5EDA,
    0x9C44: 0x5EDB,
    0x9C45: 0x5EE2,
    0x9C46: 0x5EE1,
    0x9C47: 0x5EE8,
    0x9C48: 0x5EE9,
    0x9C49: 0x5EEC,
    0x9C4A: 0x5EF1,
    0x9C4B: 0x5EF3,
    0x9C4C: 0x5EF0,
    0x9C4D: 0x5EF4,
    0x9C4E: 0x5EF8,
    0x9C4F: 0x5EFE,
    0x9C50: 0x5F03,
    0x9C51: 0x5F09,
    0x9C52: 0x5F5D,
    0x9C53: 0x5F5C,
    0x9C54: 0x5F0B,
    0x9C55: 0x5F11,
    0x9C56: 0x5F16,
    0x9C57: 0x5F29,
    0x9C58: 0x5F2D,
    0x9C59: 0x5F38,
    0x9C5A: 0x5F41,
    0x9C5B: 0x5F48,
    0x9C5C: 0x5F4C,
    0x9C5D: 0x5F4E,
    0x9C5E: 0x5F2F,
    0x9C5F: 0x5F51,
    0x9C60: 0x5F56,
    0x9C61: 0x5F57,
    0x9C62: 0x5F59,
    0x9C63: 0x5F61,
    0x9C64: 0x5F6D,
    0x9C65: 0x5F73,
    0x9C66: 0x5F77,
    0x9C67: 0x5F83,
    0x9C68: 0x5F82,
    0x9C69: 0x5F7F,
    0x9C6A: 0x5F8A,
    0x9C6B: 0x5F88,
    0x9C6C: 0x5F91,
    0x9C6D: 0x5F87,
    0x9C6E: 0x5F9E,
    0x9C6F: 0x5F99,
    0x9C70: 0x5F98,
    0x9C71: 0x5FA0,
    0x9C72: 0x5FA8,
    0x9C73: 0x5FAD,
    0x9C74: 0x5FBC,
    0x9C75: 0x5FD6,
    0x9C76: 0x5FFB,
    0x9C77: 0x5FE4,
    0x9C78: 0x5FF8,
    0x9C79: 0x5FF1,
    0x9C7A: 0x5FDD,
    0x9C7B: 0x60B3,
    0x9C7C: 0x5FFF,
    0x9C7D: 0x6021,
    0x9C7E: 0x6060,
    0x9C80: 0x6019,
    0x9C81: 0x6010,
    0x9C82: 0x6029,
    0x9C83: 0x600E,
    0x9C84: 0x6031,
    0x9C85: 0x601B,
    0x9C86: 0x6015,
    0x9C87: 0x602B,
    0x9C88: 0x6026,
    0x9C89: 0x600F,
    0x9C8A: 0x603A,
    0x9C8B: 0x605A,
    0x9C8C: 0x6041,
    0x9C8D: 0x606A,
    0x9C8E: 0x6077,
    0x9C8F: 0x605F,
    0x9C90: 0x604A,
    0x9C91: 0x6046,
    0x9C92: 0x604D,
    0x9C93: 0x6063,
    0x9C94: 0x6043,
    0x9C95: 0x6064,
    0x9C96: 0x6042,
    0x9C97: 0x606C,
    0x9C98: 0x606B,
    0x9C99: 0x6059,
    0x9C9A: 0x6081,
    0x9C9B: 0x608D,
    0x9C9C: 0x60E7,
    0x9C9D: 0x6083,
    0x9C9E: 0x609A,
    0x9C9F: 0x6084,
    0x9CA0: 0x609B,
    0x9CA1: 0x6096,
    0x9CA2: 0x6097,
    0x9CA3: 0x6092,
    0x9CA4: 0x60A7,
    0x9CA5: 0x608B,
    0x9CA6: 0x60E1,
    0x9CA7: 0x60B8,
    0x9CA8: 0x60E0,
    0x9CA9: 0x60D3,
    0x9CAA: 0x60B4,
    0x9CAB: 0x5FF0,
    0x9CAC: 0x60BD,
    0x9CAD: 0x60C6,
    0x9CAE: 0x60B5,
    0x9CAF: 0x60D8,
    0x9CB0: 0x614D,
    0x9CB1: 0x6115,
    0x9CB2: 0x6106,
    0x9CB3: 0x60F6,
    0x9CB4: 0x60F7,
    0x9CB5: 0x6100,
    0x9CB6: 0x60F4,
    0x9CB7: 0x60FA,
    0x9CB8: 0x6103,
    0x9CB9: 0x6121,
    0x9CBA: 0x60FB,
    0x9CBB: 0x60F1,
    0x9CBC: 0x610D,
    0x9CBD: 0x610E,
    0x9CBE: 0x6147,
    0x9CBF: 0x613E,
    0x9CC0: 0x6128,
    0x9CC1: 0x6127,
    0x9CC2: 0x614A,
    0x9CC3: 0x613F,
    0x9CC4: 0x613C,
    0x9CC5: 0x612C,
    0x9CC6: 0x6134,
    0x9CC7: 0x613D,
    0x9CC8: 0x6142,
    0x9CC9: 0x6144,
    0x9CCA: 0x6173,
    0x9CCB: 0x6177,
    0x9CCC: 0x6158,
    0x9CCD: 0x6159,
    0x9CCE: 0x615A,
    0x9CCF: 0x616B,
    0x9CD0: 0x6174,
    0x9CD1: 0x616F,
    0x9CD2: 0x6165,
    0x9CD3: 0x6171,
    0x9CD4: 0x615F,
    0x9CD5: 0x615D,
    0x9CD6: 0x6153,
    0x9CD7: 0x6175,
    0x9CD8: 0x6199,
    0x9CD9: 0x6196,
    0x9CDA: 0x6187,
    0x9CDB: 0x61AC,
    0x9CDC: 0x6194,
    0x9CDD: 0x619A,
    0x9CDE: 0x618A,
    0x9CDF: 0x6191,
    0x9CE0: 0x61AB,
    0x9CE1: 0x61AE,
    0x9CE2: 0x61CC,
    0x9CE3: 0x61CA,
    0x9CE4: 0x61C9,
    0x9CE5: 0x61F7,
    0x9CE6: 0x61C8,
    0x9CE7: 0x61C3,
    0x9CE8: 0x61C6,
    0x9CE9: 0x61BA,
    0x9CEA: 0x61CB,
    0x9CEB: 0x7F79,
    0x9CEC: 0x61CD,
    0x9CED: 0x61E6,
    0x9CEE: 0x61E3,
    0x9CEF: 0x61F6,
    0x9CF0: 0x61FA,
    0x9CF1: 0x61F4,
    0x9CF2: 0x61FF,
    0x9CF3: 0x61FD,
    0x9CF4: 0x61FC,
    0x9CF5: 0x61FE,
    0x9CF6: 0x6200,
    0x9CF7: 0x6208,
    0x9CF8: 0x6209,
    0x9CF9: 0x620D,
    0x9CFA: 0x620C,
    0x9CFB: 0x6214,
    0x9CFC: 0x621B,
    0x9D40: 0x621E,
    0x9D41: 0x6221,
    0x9D42: 0x622A,
    0x9D43: 0x622E,
    0x9D44: 0x6230,
    0x9D45: 0x6232,
    0x9D46: 0x6233,
    0x9D47: 0x6241,
    0x9D48: 0x624E,
    0x9D49: 0x625E,
    0x9D4A: 0x6263,
    0x9D4B: 0x625B,
    0x9D4C: 0x6260,
    0x9D4D: 0x6268,
    0x9D4E: 0x627C,
    0x9D4F: 0x6282,
    0x9D50: 0x6289,
    0x9D51: 0x627E,
    0x9D52: 0x6292,
    0x9D53: 0x6293,
    0x9D54: 0x6296,
    0x9D55: 0x62D4,
    0x9D56: 0x6283,
    0x9D57: 0x6294,
    0x9D58: 0x62D7,
    0x9D59: 0x62D1,
    0x9D5A: 0x62BB,
    0x9D5B: 0x62CF,
    0x9D5C: 0x62FF,
    0x9D5D: 0x62C6,
    0x9D5E: 0x64D4,
    0x9D5F: 0x62C8,
    0x9D60: 0x62DC,
    0x9D61: 0x62CC,
    0x9D62: 0x62CA,
    0x9D63: 0x62C2,
    0x9D64: 0x62C7,
    0x9D65: 0x629B,
    0x9D66: 0x62C9,
    0x9D67: 0x630C,
    0x9D68: 0x62EE,
    0x9D69: 0x62F1,
    0x9D6A: 0x6327,
    0x9D6B: 0x6302,
    0x9D6C: 0x6308,
    0x9D6D: 0x62EF,
    0x9D6E: 0x62F5,
    0x9D6F: 0x6350,
    0x9D70: 0x633E,
    0x9D71: 0x634D,
    0x9D72: 0x641C,
    0x9D73: 0x634F,
    0x9D74: 0x6396,
    0x9D75: 0x638E,
    0x9D76: 0x6380,
    0x9D77: 0x63AB,
    0x9D78: 0x6376,
    0x9D79: 0x63A3,
    0x9D7A: 0x638F,
    0x9D7B: 0x6389,
    0x9D7C: 0x639F,
    0x9D7D: 0x63B5,
    0x9D7E: 0x636B,
    0x9D80: 0x6369,
    0x9D81: 0x63BE,
    0x9D82: 0x63E9,
    0x9D83: 0x63C0,
    0x9D84: 0x63C6,
    0x9D85: 0x63E3,
    0x9D86: 0x63C9,
    0x9D87: 0x63D2,
    0x9D88: 0x63F6,
    0x9D89: 0x63C4,
    0x9D8A: 0x6416,
    0x9D8B: 0x6434,
    0x9D8C: 0x6406,
    0x9D8D: 0x6413,
    0x9D8E: 0x6426,
    0x9D8F: 0x6436,
    0x9D90: 0x651D,
    0x9D91: 0x6417,
    0x9D92: 0x6428,
    0x9D93: 0x640F,
    0x9D94: 0x6467,
    0x9D95: 0x646F,
    0x9D96: 0x6476,
    0x9D97: 0x644E,
    0x9D98: 0x652A,
    0x9D99: 0x6495,
    0x9D9A: 0x6493,
    0x9D9B: 0x64A5,
    0x9D9C: 0x64A9,
    0x9D9D: 0x6488,
    0x9D9E: 0x64BC,
    0x9D9F: 0x64DA,
    0x9DA0: 0x64D2,
    0x9DA1: 0x64C5,
    0x9DA2: 0x64C7,
    0x9DA3: 0x64BB,
    0x9DA4: 0x64D8,
    0x9DA5: 0x64C2,
    0x9DA6: 0x64F1,
    0x9DA7: 0x64E7,
    0x9DA8: 0x8209,
    0x9DA9: 0x64E0,
    0x9DAA: 0x64E1,
    0x9DAB: 0x62AC,
    0x9DAC: 0x64E3,
    0x9DAD: 0x64EF,
    0x9DAE: 0x652C,
    0x9DAF: 0x64F6,
    0x9DB0: 0x64F4,
    0x9DB1: 0x64F2,
    0x9DB2: 0x64FA,
    0x9DB3: 0x6500,
    0x9DB4: 0x64FD,
    0x9DB5: 0x6518,
    0x9DB6: 0x651C,
    0x9DB7: 0x6505,
    0x9DB8: 0x6524,
    0x9DB9: 0x6523,
    0x9DBA: 0x652B,
    0x9DBB: 0x6534,
    0x9DBC: 0x6535,
    0x9DBD: 0x6537,
    0x9DBE: 0x6536,
    0x9DBF: 0x6538,
    0x9DC0: 0x754B,
    0x9DC1: 0x6548,
    0x9DC2: 0x6556,
    0x9DC3: 0x6555,
    0x9DC4: 0x654D,
    0x9DC5: 0x6558,
    0x9DC6: 0x655E,
    0x9DC7: 0x655D,
    0x9DC8: 0x6572,
    0x9DC9: 0x6578,
    0x9DCA: 0x6582,
    0x9DCB: 0x6583,
    0x9DCC: 0x8B8A,
    0x9DCD: 0x659B,
    0x9DCE: 0x659F,
    0x9DCF: 0x65AB,
    0x9DD0: 0x65B7,
    0x9DD1: 0x65C3,
    0x9DD2: 0x65C6,
    0x9DD3: 0x65C1,
    0x9DD4: 0x65C4,
    0x9DD5: 0x65CC,
    0x9DD6: 0x65D2,
    0x9DD7: 0x65DB,
    0x9DD8: 0x65D9,
    0x9DD9: 0x65E0,
    0x9DDA: 0x65E1,
    0x9DDB: 0x65F1,
    0x9DDC: 0x6772,
    0x9DDD: 0x660A,
    0x9DDE: 0x6603,
    0x9DDF: 0x65FB,
    0x9DE0: 0x6773,
    0x9DE1: 0x6635,
    0x9DE2: 0x6636,
    0x9DE3: 0x6634,
    0x9DE4: 0x661C,
    0x9DE5: 0x664F,
    0x9DE6: 0x6644,
    0x9DE7: 0x6649,
    0x9DE8: 0x6641,
    0x9DE9: 0x665E,
    0x9DEA: 0x665D,
    0x9DEB: 0x6664,
    0x9DEC: 0x6667,
    0x9DED: 0x6668,
    0x9DEE: 0x665F,
    0x9DEF: 0x6662,
    0x9DF0: 0x6670,
    0x9DF1: 0x6683,
    0x9DF2: 0x6688,
    0x9DF3: 0x668E,
    0x9DF4: 0x6689,
    0x9DF5: 0x6684,
    0x9DF6: 0x6698,
    0x9DF7: 0x669D,
    0x9DF8: 0x66C1,
    0x9DF9: 0x66B9,
    0x9DFA: 0x66C9,
    0x9DFB: 0x66BE,
    0x9DFC: 0x66BC,
    0x9E40: 0x66C4,
    0x9E41: 0x66B8,
    0x9E42: 0x66D6,
    0x9E43: 0x66DA,
    0x9E44: 0x66E0,
    0x9E45: 0x663F,
    0x9E46: 0x66E6,
    0x9E47: 0x66E9,
    0x9E48: 0x66F0,
    0x9E49: 0x66F5,
    0x9E4A: 0x66F7,
    0x9E4B: 0x670F,
    0x9E4C: 0x6716,
    0x9E4D: 0x671E,
    0x9E4E: 0x6726,
    0x9E4F: 0x6727,
    0x9E50: 0x9738,
    0x9E51: 0x672E,
    0x9E52: 0x673F,
    0x9E53: 0x6736,
    0x9E54: 0x6741,
    0x9E55: 0x6738,
    0x9E56: 0x6737,
    0x9E57: 0x6746,
    0x9E58: 0x675E,
    0x9E59: 0x6760,
    0x9E5A: 0x6759,
    0x9E5B: 0x6763,
    0x9E5C: 0x6764,
    0x9E5D: 0x6789,
    0x9E5E: 0x6770,
    0x9E5F: 0x67A9,
    0x9E60: 0x677C,
    0x9E61: 0x676A,
    0x9E62: 0x678C,
    0x9E63: 0x678B,
    0x9E64: 0x67A6,
    0x9E65: 0x67A1,
    0x9E66: 0x6785,
    0x9E67: 0x67B7,
    0x9E68: 0x67EF,
    0x9E69: 0x67B4,
    0x9E6A: 0x67EC,
    0x9E6B: 0x67B3,
    0x9E6C: 0x67E9,
    0x9E6D: 0x67B8,
    0x9E6E: 0x67E4,
    0x9E6F: 0x67DE,
    0x9E70: 0x67DD,
    0x9E71: 0x67E2,
    0x9E72: 0x67EE,
    0x9E73: 0x67B9,
    0x9E74: 0x67CE,
    0x9E75: 0x67C6,
    0x9E76: 0x67E7,
    0x9E77: 0x6A9C,
    0x9E78: 0x681E,
    0x9E79: 0x6846,
    0x9E7A: 0x6829,
    0x9E7B: 0x6840,
    0x9E7C: 0x684D,
    0x9E7D: 0x6832,
    0x9E7E: 0x684E,
    0x9E80: 0x68B3,
    0x9E81: 0x682B,
    0x9E82: 0x6859,
    0x9E83: 0x6863,
    0x9E84: 0x6877,
    0x9E85: 0x687F,
    0x9E86: 0x689F,
    0x9E87: 0x688F,
    0x9E88: 0x68AD,
    0x9E89: 0x6894,
    0x9E8A: 0x689D,
    0x9E8B: 0x689B,
    0x9E8C: 0x6883,
    0x9E8D: 0x6AAE,
    0x9E8E: 0x68B9,
    0x9E8F: 0x6874,
    0x9E90: 0x68B5,
    0x9E91: 0x68A0,
    0x9E92: 0x68BA,
    0x9E93: 0x690F,
    0x9E94: 0x688D,
    0x9E95: 0x687E,
    0x9E96: 0x6901,
    0x9E97: 0x68CA,
    0x9E98: 0x6908,
    0x9E99: 0x68D8,
    0x9E9A: 0x6922,
    0x9E9B: 0x6926,
    0x9E9C: 0x68E1,
    0x9E9D: 0x690C,
    0x9E9E: 0x68CD,
    0x9E9F: 0x68D4,
    0x9EA0: 0x68E7,
    0x9EA1: 0x68D5,
    0x9EA2: 0x6936,
    0x9EA3: 0x6912,
    0x9EA4: 0x6904,
    0x9EA5: 0x68D7,
    0x9EA6: 0x68E3,
    0x9EA7: 0x6925,
    0x9EA8: 0x68F9,
    0x9EA9: 0x68E0,
    0x9EAA: 0x68EF,
    0x9EAB: 0x6928,
    0x9EAC: 0x692A,
    0x9EAD: 0x691A,
    0x9EAE: 0x6923,
    0x9EAF: 0x6921,
    0x9EB0: 0x68C6,
    0x9EB1: 0x6979,
    0x9EB2: 0x6977,
    0x9EB3: 0x695C,
    0x9EB4: 0x6978,
    0x9EB5: 0x696B,
    0x9EB6: 0x6954,
    0x9EB7: 0x697E,
    0x9EB8: 0x696E,
    0x9EB9: 0x6939,
    0x9EBA: 0x6974,
    0x9EBB: 0x693D,
    0x9EBC: 0x6959,
    0x9EBD: 0x6930,
    0x9EBE: 0x6961,
    0x9EBF: 0x695E,
    0x9EC0: 0x695D,
    0x9EC1: 0x6981,
    0x9EC2: 0x696A,
    0x9EC3: 0x69B2,
    0x9EC4: 0x69AE,
    0x9EC5: 0x69D0,
    0x9EC6: 0x69BF,
    0x9EC7: 0x69C1,
    0x9EC8: 0x69D3,
    0x9EC9: 0x69BE,
    0x9ECA: 0x69CE,
    0x9ECB: 0x5BE8,
    0x9ECC: 0x69CA,
    0x9ECD: 0x69DD,
    0x9ECE: 0x69BB,
    0x9ECF: 0x69C3,
    0x9ED0: 0x69A7,
    0x9ED1: 0x6A2E,
    0x9ED2: 0x6991,
    0x9ED3: 0x69A0,
    0x9ED4: 0x699C,
    0x9ED5: 0x6995,
    0x9ED6: 0x69B4,
    0x9ED7: 0x69DE,
    0x9ED8: 0x69E8,
    0x9ED9: 0x6A02,
    0x9EDA: 0x6A1B,
    0x9EDB: 0x69FF,
    0x9EDC: 0x6B0A,
    0x9EDD: 0x69F9,
    0x9EDE: 0x69F2,
    0x9EDF: 0x69E7,
    0x9EE0: 0x6A05,
    0x9EE1: 0x69B1,
    0x9EE2: 0x6A1E,
    0x9EE3: 0x69ED,
    0x9EE4: 0x6A14,
    0x9EE5: 0x69EB,
    0x9EE6: 0x6A0A,
    0x9EE7: 0x6A12,
    0x9EE8: 0x6AC1,
    0x9EE9: 0x6A23,
    0x9EEA: 0x6A13,
    0x9EEB: 0x6A44,
    0x9EEC: 0x6A0C,
    0x9EED: 0x6A72,
    0x9EEE: 0x6A36,
    0x9EEF: 0x6A78,
    0x9EF0: 0x6A47,
    0x9EF1: 0x6A62,
    0x9EF2: 0x6A59,
    0x9EF3: 0x6A66,
    0x9EF4: 0x6A48,
    0x9EF5: 0x6A38,
    0x9EF6: 0x6A22,
    0x9EF7: 0x6A90,
    0x9EF8: 0x6A8D,
    0x9EF9: 0x6AA0,
    0x9EFA: 0x6A84,
    0x9EFB: 0x6AA2,
    0x9EFC: 0x6AA3,
    0x9F40: 0x6A97,
    0x9F41: 0x8617,
    0x9F42: 0x6ABB,
    0x9F43: 0x6AC3,
    0x9F44: 0x6AC2,
    0x9F45: 0x6AB8,
    0x9F46: 0x6AB3,
    0x9F47: 0x6AAC,
    0x9F48: 0x6ADE,
    0x9F49: 0x6AD1,
    0x9F4A: 0x6ADF,
    0x9F4B: 0x6AAA,
    0x9F4C: 0x6ADA,
    0x9F4D: 0x6AEA,
    0x9F4E: 0x6AFB,
    0x9F4F: 0x6B05,
    0x9F50: 0x8616,
    0x9F51: 0x6AFA,
    0x9F52: 0x6B12,
    0x9F53: 0x6B16,
    0x9F54: 0x9B31,
    0x9F55: 0x6B1F,
    0x9F56: 0x6B38,
    0x9F57: 0x6B37,
    0x9F58: 0x76DC,
    0x9F59: 0x6B39,
    0x9F5A: 0x98EE,
    0x9F5B: 0x6B47,
    0x9F5C: 0x6B43,
    0x9F5D: 0x6B49,
    0x9F5E: 0x6B50,
    0x9F5F: 0x6B59,
    0x9F60: 0x6B54,
    0x9F61: 0x6B5B,
    0x9F62: 0x6B5F,
    0x9F63: 0x6B61,
    0x9F64: 0x6B78,
    0x9F65: 0x6B79,
    0x9F66: 0x6B7F,
    0x9F67: 0x6B80,
    0x9F68: 0x6B84,
    0x9F69: 0x6B83,
    0x9F6A: 0x6B8D,
    0x9F6B: 0x6B98,
    0x9F6C: 0x6B95,
    0x9F6D: 0x6B9E,
    0x9F6E: 0x6BA4,
    0x9F6F: 0x6BAA,
    0x9F70: 0x6BAB,
    0x9F71: 0x6BAF,
    0x9F72: 0x6BB2,
    0x9F73: 0x6BB1,
    0x9F74: 0x6BB3,
    0x9F75: 0x6BB7,
    0x9F76: 0x6BBC,
    0x9F77: 0x6BC6,
    0x9F78: 0x6BCB,
    0x9F79: 0x6BD3,
    0x9F7A: 0x6BDF,
    0x9F7B: 0x6BEC,
    0x9F7C: 0x6BEB,
    0x9F7D: 0x6BF3,
    0x9F7E: 0x6BEF,
    0x9F80: 0x9EBE,
    0x9F81: 0x6C08,
    0x9F82: 0x6C13,
    0x9F83: 0x6C14,
    0x9F84: 0x6C1B,
    0x9F85: 0x6C24,
    0x9F86: 0x6C23,
    0x9F87: 0x6C5E,
    0x9F88: 0x6C55,
    0x9F89: 0x6C62,
    0x9F8A: 0x6C6A,
    0x9F8B: 0x6C82,
    0x9F8C: 0x6C8D,
    0x9F8D: 0x6C9A,
    0x9F8E: 0x6C81,
    0x9F8F: 0x6C9B,
    0x9F90: 0x6C7E,
    0x9F91: 0x6C68,
    0x9F92: 0x6C73,
    0x9F93: 0x6C92,
    0x9F94: 0x6C90,
    0x9F95: 0x6CC4,
    0x9F96: 0x6CF1,
    0x9F97: 0x6CD3,
    0x9F98: 0x6CBD,
    0x9F99: 0x6CD7,
    0x9F9A: 0x6CC5,
    0x9F9B: 0x6CDD,
    0x9F9C: 0x6CAE,
    0x9F9D: 0x6CB1,
    0x9F9E: 0x6CBE,
    0x9F9F: 0x6CBA,
    0x9FA0: 0x6CDB,
    0x9FA1: 0x6CEF,
    0x9FA2: 0x6CD9,
    0x9FA3: 0x6CEA,
    0x9FA4: 0x6D1F,
    0x9FA5: 0x884D,
    0x9FA6: 0x6D36,
    0x9FA7: 0x6D2B,
    0x9FA8: 0x6D3D,
    0x9FA9: 0x6D38,
    0x9FAA: 0x6D19,
    0x9FAB: 0x6D35,
    0x9FAC: 0x6D33,
    0x9FAD: 0x6D12,
    0x9FAE: 0x6D0C,
    0x9FAF: 0x6D63,
    0x9FB0: 0x6D93,
    0x9FB1: 0x6D64,
    0x9FB2: 0x6D5A,
    0x9FB3: 0x6D79,
    0x9FB4: 0x6D59,
    0x9FB5: 0x6D8E,
    0x9FB6: 0x6D95,
    0x9FB7: 0x6FE4,
    0x9FB8: 0x6D85,
    0x9FB9: 0x6DF9,
    0x9FBA: 0x6E15,
    0x9FBB: 0x6E0A,
    0x9FBC: 0x6DB5,
    0x9FBD: 0x6DC7,
    0x9FBE: 0x6DE6,
    0x9FBF: 0x6DB8,
    0x9FC0: 0x6DC6,
    0x9FC1: 0x6DEC,
    0x9FC2: 0x6DDE,
    0x9FC3: 0x6DCC,
    0x9FC4: 0x6DE8,
    0x9FC5: 0x6DD2,
    0x9FC6: 0x6DC5,
    0x9FC7: 0x6DFA,
    0x9FC8: 0x6DD9,
    0x9FC9: 0x6DE4,
    0x9FCA: 0x6DD5,
    0x9FCB: 0x6DEA,
    0x9FCC: 0x6DEE,
    0x9FCD: 0x6E2D,
    0x9FCE: 0x6E6E,
    0x9FCF: 0x6E2E,
    0x9FD0: 0x6E19,
    0x9FD1: 0x6E72,
    0x9FD2: 0x6E5F,
    0x9FD3: 0x6E3E,
    0x9FD4: 0x6E23,
    0x9FD5: 0x6E6B,
    0x9FD6: 0x6E2B,
    0x9FD7: 0x6E76,
    0x9FD8: 0x6E4D,
    0x9FD9: 0x6E1F,
    0x9FDA: 0x6E43,
    0x9FDB: 0x6E3A,
    0x9FDC: 0x6E4E,
    0x9FDD: 0x6E24,
    0x9FDE: 0x6EFF,
    0x9FDF: 0x6E1D,
    0x9FE0: 0x6E38,
    0x9FE1: 0x6E82,
    0x9FE2: 0x6EAA,
    0x9FE3: 0x6E98,
    0x9FE4: 0x6EC9,
    0x9FE5: 0x6EB7,
    0x9FE6: 0x6ED3,
    0x9FE7: 0x6EBD,
    0x9FE8: 0x6EAF,
    0x9FE9: 0x6EC4,
    0x9FEA: 0x6EB2,
    0x9FEB: 0x6ED4,
    0x9FEC: 0x6ED5,
    0x9FED: 0x6E8F,
    0x9FEE: 0x6EA5,
    0x9FEF: 0x6EC2,
    0x9FF0: 0x6E9F,
    0x9FF1: 0x6F41,
    0x9FF2: 0x6F11,
    0x9FF3: 0x704C,
    0x9FF4: 0x6EEC,
    0x9FF5: 0x6EF8,
    0x9FF6: 0x6EFE,
    0x9FF7: 0x6F3F,
    0x9FF8: 0x6EF2,
    0x9FF9: 0x6F31,
    0x9FFA: 0x6EEF,
    0x9FFB: 0x6F32,
    0x9FFC: 0x6ECC,
    0xA1: 0xFF61,
    0xA2: 0xFF62,
    0xA3: 0xFF63,
    0xA4: 0xFF64,
    0xA5: 0xFF65,
    0xA6: 0xFF66,
    0xA7: 0xFF67,
    0xA8: 0xFF68,
    0xA9: 0xFF69,
    0xAA: 0xFF6A,
    0xAB: 0xFF6B,
    0xAC: 0xFF6C,
    0xAD: 0xFF6D,
    0xAE: 0xFF6E,
    0xAF: 0xFF6F,
    0xB0: 0xFF70,
    0xB1: 0xFF71,
    0xB2: 0xFF72,
    0xB3: 0xFF73,
    0xB4: 0xFF74,
    0xB5: 0xFF75,
    0xB6: 0xFF76,
    0xB7: 0xFF77,
    0xB8: 0xFF78,
    0xB9: 0xFF79,
    0xBA: 0xFF7A,
    0xBB: 0xFF7B,
    0xBC: 0xFF7C,
    0xBD: 0xFF7D,
    0xBE: 0xFF7E,
    0xBF: 0xFF7F,
    0xC0: 0xFF80,
    0xC1: 0xFF81,
    0xC2: 0xFF82,
    0xC3: 0xFF83,
    0xC4: 0xFF84,
    0xC5: 0xFF85,
    0xC6: 0xFF86,
    0xC7: 0xFF87,
    0xC8: 0xFF88,
    0xC9: 0xFF89,
    0xCA: 0xFF8A,
    0xCB: 0xFF8B,
    0xCC: 0xFF8C,
    0xCD: 0xFF8D,
    0xCE: 0xFF8E,
    0xCF: 0xFF8F,
    0xD0: 0xFF90,
    0xD1: 0xFF91,
    0xD2: 0xFF92,
    0xD3: 0xFF93,
    0xD4: 0xFF94,
    0xD5: 0xFF95,
    0xD6: 0xFF96,
    0xD7: 0xFF97,
    0xD8: 0xFF98,
    0xD9: 0xFF99,
    0xDA: 0xFF9A,
    0xDB: 0xFF9B,
    0xDC: 0xFF9C,
    0xDD: 0xFF9D,
    0xDE: 0xFF9E,
    0xDF: 0xFF9F,
    0xE040: 0x6F3E,
    0xE041: 0x6F13,
    0xE042: 0x6EF7,
    0xE043: 0x6F86,
    0xE044: 0x6F7A,
    0xE045: 0x6F78,
    0xE046: 0x6F81,
    0xE047: 0x6F80,
    0xE048: 0x6F6F,
    0xE049: 0x6F5B,
    0xE04A: 0x6FF3,
    0xE04B: 0x6F6D,
    0xE04C: 0x6F82,
    0xE04D: 0x6F7C,
    0xE04E: 0x6F58,
    0xE04F: 0x6F8E,
    0xE050: 0x6F91,
    0xE051: 0x6FC2,
    0xE052: 0x6F66,
    0xE053: 0x6FB3,
    0xE054: 0x6FA3,
    0xE055: 0x6FA1,
    0xE056: 0x6FA4,
    0xE057: 0x6FB9,
    0xE058: 0x6FC6,
    0xE059: 0x6FAA,
    0xE05A: 0x6FDF,
    0xE05B: 0x6FD5,
    0xE05C: 0x6FEC,
    0xE05D: 0x6FD4,
    0xE05E: 0x6FD8,
    0xE05F: 0x6FF1,
    0xE060: 0x6FEE,
    0xE061: 0x6FDB,
    0xE062: 0x7009,
    0xE063: 0x700B,
    0xE064: 0x6FFA,
    0xE065: 0x7011,
    0xE066: 0x7001,
    0xE067: 0x700F,
    0xE068: 0x6FFE,
    0xE069: 0x701B,
    0xE06A: 0x701A,
    0xE06B: 0x6F74,
    0xE06C: 0x701D,
    0xE06D: 0x7018,
    0xE06E: 0x701F,
    0xE06F: 0x7030,
    0xE070: 0x703E,
    0xE071: 0x7032,
    0xE072: 0x7051,
    0xE073: 0x7063,
    0xE074: 0x7099,
    0xE075: 0x7092,
    0xE076: 0x70AF,
    0xE077: 0x70F1,
    0xE078: 0x70AC,
    0xE079: 0x70B8,
    0xE07A: 0x70B3,
    0xE07B: 0x70AE,
    0xE07C: 0x70DF,
    0xE07D: 0x70CB,
    0xE07E: 0x70DD,
    0xE080: 0x70D9,
    0xE081: 0x7109,
    0xE082: 0x70FD,
    0xE083: 0x711C,
    0xE084: 0x7119,
    0xE085: 0x7165,
    0xE086: 0x7155,
    0xE087: 0x7188,
    0xE088: 0x7166,
    0xE089: 0x7162,
    0xE08A: 0x714C,
    0xE08B: 0x7156,
    0xE08C: 0x716C,
    0xE08D: 0x718F,
    0xE08E: 0x71FB,
    0xE08F: 0x7184,
    0xE090: 0x7195,
    0xE091: 0x71A8,
    0xE092: 0x71AC,
    0xE093: 0x71D7,
    0xE094: 0x71B9,
    0xE095: 0x71BE,
    0xE096: 0x71D2,
    0xE097: 0x71C9,
    0xE098: 0x71D4,
    0xE099: 0x71CE,
    0xE09A: 0x71E0,
    0xE09B: 0x71EC,
    0xE09C: 0x71E7,
    0xE09D: 0x71F5,
    0xE09E: 0x71FC,
    0xE09F: 0x71F9,
    0xE0A0: 0x71FF,
    0xE0A1: 0x720D,
    0xE0A2: 0x7210,
    0xE0A3: 0x721B,
    0xE0A4: 0x7228,
    0xE0A5: 0x722D,
    0xE0A6: 0x722C,
    0xE0A7: 0x7230,
    0xE0A8: 0x7232,
    0xE0A9: 0x723B,
    0xE0AA: 0x723C,
    0xE0AB: 0x723F,
    0xE0AC: 0x7240,
    0xE0AD: 0x7246,
    0xE0AE: 0x724B,
    0xE0AF: 0x7258,
    0xE0B0: 0x7274,
    0xE0B1: 0x727E,
    0xE0B2: 0x7282,
    0xE0B3: 0x7281,
    0xE0B4: 0x7287,
    0xE0B5: 0x7292,
    0xE0B6: 0x7296,
    0xE0B7: 0x72A2,
    0xE0B8: 0x72A7,
    0xE0B9: 0x72B9,
    0xE0BA: 0x72B2,
    0xE0BB: 0x72C3,
    0xE0BC: 0x72C6,
    0xE0BD: 0x72C4,
    0xE0BE: 0x72CE,
    0xE0BF: 0x72D2,
    0xE0C0: 0x72E2,
    0xE0C1: 0x72E0,
    0xE0C2: 0x72E1,
    0xE0C3: 0x72F9,
    0xE0C4: 0x72F7,
    0xE0C5: 0x500F,
    0xE0C6: 0x7317,
    0xE0C7: 0x730A,
    0xE0C8: 0x731C,
    0xE0C9: 0x7316,
    0xE0CA: 0x731D,
    0xE0CB: 0x7334,
    0xE0CC: 0x732F,
    0xE0CD: 0x7329,
    0xE0CE: 0x7325,
    0xE0CF: 0x733E,
    0xE0D0: 0x734E,
    0xE0D1: 0x734F,
    0xE0D2: 0x9ED8,
    0xE0D3: 0x7357,
    0xE0D4: 0x736A,
    0xE0D5: 0x7368,
    0xE0D6: 0x7370,
    0xE0D7: 0x7378,
    0xE0D8: 0x7375,
    0xE0D9: 0x737B,
    0xE0DA: 0x737A,
    0xE0DB: 0x73C8,
    0xE0DC: 0x73B3,
    0xE0DD: 0x73CE,
    0xE0DE: 0x73BB,
    0xE0DF: 0x73C0,
    0xE0E0: 0x73E5,
    0xE0E1: 0x73EE,
    0xE0E2: 0x73DE,
    0xE0E3: 0x74A2,
    0xE0E4: 0x7405,
    0xE0E5: 0x746F,
    0xE0E6: 0x7425,
    0xE0E7: 0x73F8,
    0xE0E8: 0x7432,
    0xE0E9: 0x743A,
    0xE0EA: 0x7455,
    0xE0EB: 0x743F,
    0xE0EC: 0x745F,
    0xE0ED: 0x7459,
    0xE0EE: 0x7441,
    0xE0EF: 0x745C,
    0xE0F0: 0x7469,
    0xE0F1: 0x7470,
    0xE0F2: 0x7463,
    0xE0F3: 0x746A,
    0xE0F4: 0x7476,
    0xE0F5: 0x747E,
    0xE0F6: 0x748B,
    0xE0F7: 0x749E,
    0xE0F8: 0x74A7,
    0xE0F9: 0x74CA,
    0xE0FA: 0x74CF,
    0xE0FB: 0x74D4,
    0xE0FC: 0x73F1,
    0xE140: 0x74E0,
    0xE141: 0x74E3,
    0xE142: 0x74E7,
    0xE143: 0x74E9,
    0xE144: 0x74EE,
    0xE145: 0x74F2,
    0xE146: 0x74F0,
    0xE147: 0x74F1,
    0xE148: 0x74F8,
    0xE149: 0x74F7,
    0xE14A: 0x7504,
    0xE14B: 0x7503,
    0xE14C: 0x7505,
    0xE14D: 0x750C,
    0xE14E: 0x750E,
    0xE14F: 0x750D,
    0xE150: 0x7515,
    0xE151: 0x7513,
    0xE152: 0x751E,
    0xE153: 0x7526,
    0xE154: 0x752C,
    0xE155: 0x753C,
    0xE156: 0x7544,
    0xE157: 0x754D,
    0xE158: 0x754A,
    0xE159: 0x7549,
    0xE15A: 0x755B,
    0xE15B: 0x7546,
    0xE15C: 0x755A,
    0xE15D: 0x7569,
    0xE15E: 0x7564,
    0xE15F: 0x7567,
    0xE160: 0x756B,
    0xE161: 0x756D,
    0xE162: 0x7578,
    0xE163: 0x7576,
    0xE164: 0x7586,
    0xE165: 0x7587,
    0xE166: 0x7574,
    0xE167: 0x758A,
    0xE168: 0x7589,
    0xE169: 0x7582,
    0xE16A: 0x7594,
    0xE16B: 0x759A,
    0xE16C: 0x759D,
    0xE16D: 0x75A5,
    0xE16E: 0x75A3,
    0xE16F: 0x75C2,
    0xE170: 0x75B3,
    0xE171: 0x75C3,
    0xE172: 0x75B5,
    0xE173: 0x75BD,
    0xE174: 0x75B8,
    0xE175: 0x75BC,
    0xE176: 0x75B1,
    0xE177: 0x75CD,
    0xE178: 0x75CA,
    0xE179: 0x75D2,
    0xE17A: 0x75D9,
    0xE17B: 0x75E3,
    0xE17C: 0x75DE,
    0xE17D: 0x75FE,
    0xE17E: 0x75FF,
    0xE180: 0x75FC,
    0xE181: 0x7601,
    0xE182: 0x75F0,
    0xE183: 0x75FA,
    0xE184: 0x75F2,
    0xE185: 0x75F3,
    0xE186: 0x760B,
    0xE187: 0x760D,
    0xE188: 0x7609,
    0xE189: 0x761F,
    0xE18A: 0x7627,
    0xE18B: 0x7620,
    0xE18C: 0x7621,
    0xE18D: 0x7622,
    0xE18E: 0x7624,
    0xE18F: 0x7634,
    0xE190: 0x7630,
    0xE191: 0x763B,
    0xE192: 0x7647,
    0xE193: 0x7648,
    0xE194: 0x7646,
    0xE195: 0x765C,
    0xE196: 0x7658,
    0xE197: 0x7661,
    0xE198: 0x7662,
    0xE199: 0x7668,
    0xE19A: 0x7669,
    0xE19B: 0x766A,
    0xE19C: 0x7667,
    0xE19D: 0x766C,
    0xE19E: 0x7670,
    0xE19F: 0x7672,
    0xE1A0: 0x7676,
    0xE1A1: 0x7678,
    0xE1A2: 0x767C,
    0xE1A3: 0x7680,
    0xE1A4: 0x7683,
    0xE1A5: 0x7688,
    0xE1A6: 0x768B,
    0xE1A7: 0x768E,
    0xE1A8: 0x7696,
    0xE1A9: 0x7693,
    0xE1AA: 0x7699,
    0xE1AB: 0x769A,
    0xE1AC: 0x76B0,
    0xE1AD: 0x76B4,
    0xE1AE: 0x76B8,
    0xE1AF: 0x76B9,
    0xE1B0: 0x76BA,
    0xE1B1: 0x76C2,
    0xE1B2: 0x76CD,
    0xE1B3: 0x76D6,
    0xE1B4: 0x76D2,
    0xE1B5: 0x76DE,
    0xE1B6: 0x76E1,
    0xE1B7: 0x76E5,
    0xE1B8: 0x76E7,
    0xE1B9: 0x76EA,
    0xE1BA: 0x862F,
    0xE1BB: 0x76FB,
    0xE1BC: 0x7708,
    0xE1BD: 0x7707,
    0xE1BE: 0x7704,
    0xE1BF: 0x7729,
    0xE1C0: 0x7724,
    0xE1C1: 0x771E,
    0xE1C2: 0x7725,
    0xE1C3: 0x7726,
    0xE1C4: 0x771B,
    0xE1C5: 0x7737,
    0xE1C6: 0x7738,
    0xE1C7: 0x7747,
    0xE1C8: 0x775A,
    0xE1C9: 0x7768,
    0xE1CA: 0x776B,
    0xE1CB: 0x775B,
    0xE1CC: 0x7765,
    0xE1CD: 0x777F,
    0xE1CE: 0x777E,
    0xE1CF: 0x7779,
    0xE1D0: 0x778E,
    0xE1D1: 0x778B,
    0xE1D2: 0x7791,
    0xE1D3: 0x77A0,
    0xE1D4: 0x779E,
    0xE1D5: 0x77B0,
    0xE1D6: 0x77B6,
    0xE1D7: 0x77B9,
    0xE1D8: 0x77BF,
    0xE1D9: 0x77BC,
    0xE1DA: 0x77BD,
    0xE1DB: 0x77BB,
    0xE1DC: 0x77C7,
    0xE1DD: 0x77CD,
    0xE1DE: 0x77D7,
    0xE1DF: 0x77DA,
    0xE1E0: 0x77DC,
    0xE1E1: 0x77E3,
    0xE1E2: 0x77EE,
    0xE1E3: 0x77FC,
    0xE1E4: 0x780C,
    0xE1E5: 0x7812,
    0xE1E6: 0x7926,
    0xE1E7: 0x7820,
    0xE1E8: 0x792A,
    0xE1E9: 0x7845,
    0xE1EA: 0x788E,
    0xE1EB: 0x7874,
    0xE1EC: 0x7886,
    0xE1ED: 0x787C,
    0xE1EE: 0x789A,
    0xE1EF: 0x788C,
    0xE1F0: 0x78A3,
    0xE1F1: 0x78B5,
    0xE1F2: 0x78AA,
    0xE1F3: 0x78AF,
    0xE1F4: 0x78D1,
    0xE1F5: 0x78C6,
    0xE1F6: 0x78CB,
    0xE1F7: 0x78D4,
    0xE1F8: 0x78BE,
    0xE1F9: 0x78BC,
    0xE1FA: 0x78C5,
    0xE1FB: 0x78CA,
    0xE1FC: 0x78EC,
    0xE240: 0x78E7,
    0xE241: 0x78DA,
    0xE242: 0x78FD,
    0xE243: 0x78F4,
    0xE244: 0x7907,
    0xE245: 0x7912,
    0xE246: 0x7911,
    0xE247: 0x7919,
    0xE248: 0x792C,
    0xE249: 0x792B,
    0xE24A: 0x7940,
    0xE24B: 0x7960,
    0xE24C: 0x7957,
    0xE24D: 0x795F,
    0xE24E: 0x795A,
    0xE24F: 0x7955,
    0xE250: 0x7953,
    0xE251: 0x797A,
    0xE252: 0x797F,
    0xE253: 0x798A,
    0xE254: 0x799D,
    0xE255: 0x79A7,
    0xE256: 0x9F4B,
    0xE257: 0x79AA,
    0xE258: 0x79AE,
    0xE259: 0x79B3,
    0xE25A: 0x79B9,
    0xE25B: 0x79BA,
    0xE25C: 0x79C9,
    0xE25D: 0x79D5,
    0xE25E: 0x79E7,
    0xE25F: 0x79EC,
    0xE260: 0x79E1,
    0xE261: 0x79E3,
    0xE262: 0x7A08,
    0xE263: 0x7A0D,
    0xE264: 0x7A18,
    0xE265: 0x7A19,
    0xE266: 0x7A20,
    0xE267: 0x7A1F,
    0xE268: 0x7980,
    0xE269: 0x7A31,
    0xE26A: 0x7A3B,
    0xE26B: 0x7A3E,
    0xE26C: 0x7A37,
    0xE26D: 0x7A43,
    0xE26E: 0x7A57,
    0xE26F: 0x7A49,
    0xE270: 0x7A61,
    0xE271: 0x7A62,
    0xE272: 0x7A69,
    0xE273: 0x9F9D,
    0xE274: 0x7A70,
    0xE275: 0x7A79,
    0xE276: 0x7A7D,
    0xE277: 0x7A88,
    0xE278: 0x7A97,
    0xE279: 0x7A95,
    0xE27A: 0x7A98,
    0xE27B: 0x7A96,
    0xE27C: 0x7AA9,
    0xE27D: 0x7AC8,
    0xE27E: 0x7AB0,
    0xE280: 0x7AB6,
    0xE281: 0x7AC5,
    0xE282: 0x7AC4,
    0xE283: 0x7ABF,
    0xE284: 0x9083,
    0xE285: 0x7AC7,
    0xE286: 0x7ACA,
    0xE287: 0x7ACD,
    0xE288: 0x7ACF,
    0xE289: 0x7AD5,
    0xE28A: 0x7AD3,
    0xE28B: 0x7AD9,
    0xE28C: 0x7ADA,
    0xE28D: 0x7ADD,
    0xE28E: 0x7AE1,
    0xE28F: 0x7AE2,
    0xE290: 0x7AE6,
    0xE291: 0x7AED,
    0xE292: 0x7AF0,
    0xE293: 0x7B02,
    0xE294: 0x7B0F,
    0xE295: 0x7B0A,
    0xE296: 0x7B06,
    0xE297: 0x7B33,
    0xE298: 0x7B18,
    0xE299: 0x7B19,
    0xE29A: 0x7B1E,
    0xE29B: 0x7B35,
    0xE29C: 0x7B28,
    0xE29D: 0x7B36,
    0xE29E: 0x7B50,
    0xE29F: 0x7B7A,
    0xE2A0: 0x7B04,
    0xE2A1: 0x7B4D,
    0xE2A2: 0x7B0B,
    0xE2A3: 0x7B4C,
    0xE2A4: 0x7B45,
    0xE2A5: 0x7B75,
    0xE2A6: 0x7B65,
    0xE2A7: 0x7B74,
    0xE2A8: 0x7B67,
    0xE2A9: 0x7B70,
    0xE2AA: 0x7B71,
    0xE2AB: 0x7B6C,
    0xE2AC: 0x7B6E,
    0xE2AD: 0x7B9D,
    0xE2AE: 0x7B98,
    0xE2AF: 0x7B9F,
    0xE2B0: 0x7B8D,
    0xE2B1: 0x7B9C,
    0xE2B2: 0x7B9A,
    0xE2B3: 0x7B8B,
    0xE2B4: 0x7B92,
    0xE2B5: 0x7B8F,
    0xE2B6: 0x7B5D,
    0xE2B7: 0x7B99,
    0xE2B8: 0x7BCB,
    0xE2B9: 0x7BC1,
    0xE2BA: 0x7BCC,
    0xE2BB: 0x7BCF,
    0xE2BC: 0x7BB4,
    0xE2BD: 0x7BC6,
    0xE2BE: 0x7BDD,
    0xE2BF: 0x7BE9,
    0xE2C0: 0x7C11,
    0xE2C1: 0x7C14,
    0xE2C2: 0x7BE6,
    0xE2C3: 0x7BE5,
    0xE2C4: 0x7C60,
    0xE2C5: 0x7C00,
    0xE2C6: 0x7C07,
    0xE2C7: 0x7C13,
    0xE2C8: 0x7BF3,
    0xE2C9: 0x7BF7,
    0xE2CA: 0x7C17,
    0xE2CB: 0x7C0D,
    0xE2CC: 0x7BF6,
    0xE2CD: 0x7C23,
    0xE2CE: 0x7C27,
    0xE2CF: 0x7C2A,
    0xE2D0: 0x7C1F,
    0xE2D1: 0x7C37,
    0xE2D2: 0x7C2B,
    0xE2D3: 0x7C3D,
    0xE2D4: 0x7C4C,
    0xE2D5: 0x7C43,
    0xE2D6: 0x7C54,
    0xE2D7: 0x7C4F,
    0xE2D8: 0x7C40,
    0xE2D9: 0x7C50,
    0xE2DA: 0x7C58,
    0xE2DB: 0x7C5F,
    0xE2DC: 0x7C64,
    0xE2DD: 0x7C56,
    0xE2DE: 0x7C65,
    0xE2DF: 0x7C6C,
    0xE2E0: 0x7C75,
    0xE2E1: 0x7C83,
    0xE2E2: 0x7C90,
    0xE2E3: 0x7CA4,
    0xE2E4: 0x7CAD,
    0xE2E5: 0x7CA2,
    0xE2E6: 0x7CAB,
    0xE2E7: 0x7CA1,
    0xE2E8: 0x7CA8,
    0xE2E9: 0x7CB3,
    0xE2EA: 0x7CB2,
    0xE2EB: 0x7CB1,
    0xE2EC: 0x7CAE,
    0xE2ED: 0x7CB9,
    0xE2EE: 0x7CBD,
    0xE2EF: 0x7CC0,
    0xE2F0: 0x7CC5,
    0xE2F1: 0x7CC2,
    0xE2F2: 0x7CD8,
    0xE2F3: 0x7CD2,
    0xE2F4: 0x7CDC,
    0xE2F5: 0x7CE2,
    0xE2F6: 0x9B3B,
    0xE2F7: 0x7CEF,
    0xE2F8: 0x7CF2,
    0xE2F9: 0x7CF4,
    0xE2FA: 0x7CF6,
    0xE2FB: 0x7CFA,
    0xE2FC: 0x7D06,
    0xE340: 0x7D02,
    0xE341: 0x7D1C,
    0xE342: 0x7D15,
    0xE343: 0x7D0A,
    0xE344: 0x7D45,
    0xE345: 0x7D4B,
    0xE346: 0x7D2E,
    0xE347: 0x7D32,
    0xE348: 0x7D3F,
    0xE349: 0x7D35,
    0xE34A: 0x7D46,
    0xE34B: 0x7D73,
    0xE34C: 0x7D56,
    0xE34D: 0x7D4E,
    0xE34E: 0x7D72,
    0xE34F: 0x7D68,
    0xE350: 0x7D6E,
    0xE351: 0x7D4F,
    0xE352: 0x7D63,
    0xE353: 0x7D93,
    0xE354: 0x7D89,
    0xE355: 0x7D5B,
    0xE356: 0x7D8F,
    0xE357: 0x7D7D,
    0xE358: 0x7D9B,
    0xE359: 0x7DBA,
    0xE35A: 0x7DAE,
    0xE35B: 0x7DA3,
    0xE35C: 0x7DB5,
    0xE35D: 0x7DC7,
    0xE35E: 0x7DBD,
    0xE35F: 0x7DAB,
    0xE360: 0x7E3D,
    0xE361: 0x7DA2,
    0xE362: 0x7DAF,
    0xE363: 0x7DDC,
    0xE364: 0x7DB8,
    0xE365: 0x7D9F,
    0xE366: 0x7DB0,
    0xE367: 0x7DD8,
    0xE368: 0x7DDD,
    0xE369: 0x7DE4,
    0xE36A: 0x7DDE,
    0xE36B: 0x7DFB,
    0xE36C: 0x7DF2,
    0xE36D: 0x7DE1,
    0xE36E: 0x7E05,
    0xE36F: 0x7E0A,
    0xE370: 0x7E23,
    0xE371: 0x7E21,
    0xE372: 0x7E12,
    0xE373: 0x7E31,
    0xE374: 0x7E1F,
    0xE375: 0x7E09,
    0xE376: 0x7E0B,
    0xE377: 0x7E22,
    0xE378: 0x7E46,
    0xE379: 0x7E66,
    0xE37A: 0x7E3B,
    0xE37B: 0x7E35,
    0xE37C: 0x7E39,
    0xE37D: 0x7E43,
    0xE37E: 0x7E37,
    0xE380: 0x7E32,
    0xE381: 0x7E3A,
    0xE382: 0x7E67,
    0xE383: 0x7E5D,
    0xE384: 0x7E56,
    0xE385: 0x7E5E,
    0xE386: 0x7E59,
    0xE387: 0x7E5A,
    0xE388: 0x7E79,
    0xE389: 0x7E6A,
    0xE38A: 0x7E69,
    0xE38B: 0x7E7C,
    0xE38C: 0x7E7B,
    0xE38D: 0x7E83,
    0xE38E: 0x7DD5,
    0xE38F: 0x7E7D,
    0xE390: 0x8FAE,
    0xE391: 0x7E7F,
    0xE392: 0x7E88,
    0xE393: 0x7E89,
    0xE394: 0x7E8C,
    0xE395: 0x7E92,
    0xE396: 0x7E90,
    0xE397: 0x7E93,
    0xE398: 0x7E94,
    0xE399: 0x7E96,
    0xE39A: 0x7E8E,
    0xE39B: 0x7E9B,
    0xE39C: 0x7E9C,
    0xE39D: 0x7F38,
    0xE39E: 0x7F3A,
    0xE39F: 0x7F45,
    0xE3A0: 0x7F4C,
    0xE3A1: 0x7F4D,
    0xE3A2: 0x7F4E,
    0xE3A3: 0x7F50,
    0xE3A4: 0x7F51,
    0xE3A5: 0x7F55,
    0xE3A6: 0x7F54,
    0xE3A7: 0x7F58,
    0xE3A8: 0x7F5F,
    0xE3A9: 0x7F60,
    0xE3AA: 0x7F68,
    0xE3AB: 0x7F69,
    0xE3AC: 0x7F67,
    0xE3AD: 0x7F78,
    0xE3AE: 0x7F82,
    0xE3AF: 0x7F86,
    0xE3B0: 0x7F83,
    0xE3B1: 0x7F88,
    0xE3B2: 0x7F87,
    0xE3B3: 0x7F8C,
    0xE3B4: 0x7F94,
    0xE3B5: 0x7F9E,
    0xE3B6: 0x7F9D,
    0xE3B7: 0x7F9A,
    0xE3B8: 0x7FA3,
    0xE3B9: 0x7FAF,
    0xE3BA: 0x7FB2,
    0xE3BB: 0x7FB9,
    0xE3BC: 0x7FAE,
    0xE3BD: 0x7FB6,
    0xE3BE: 0x7FB8,
    0xE3BF: 0x8B71,
    0xE3C0: 0x7FC5,
    0xE3C1: 0x7FC6,
    0xE3C2: 0x7FCA,
    0xE3C3: 0x7FD5,
    0xE3C4: 0x7FD4,
    0xE3C5: 0x7FE1,
    0xE3C6: 0x7FE6,
    0xE3C7: 0x7FE9,
    0xE3C8: 0x7FF3,
    0xE3C9: 0x7FF9,
    0xE3CA: 0x98DC,
    0xE3CB: 0x8006,
    0xE3CC: 0x8004,
    0xE3CD: 0x800B,
    0xE3CE: 0x8012,
    0xE3CF: 0x8018,
    0xE3D0: 0x8019,
    0xE3D1: 0x801C,
    0xE3D2: 0x8021,
    0xE3D3: 0x8028,
    0xE3D4: 0x803F,
    0xE3D5: 0x803B,
    0xE3D6: 0x804A,
    0xE3D7: 0x8046,
    0xE3D8: 0x8052,
    0xE3D9: 0x8058,
    0xE3DA: 0x805A,
    0xE3DB: 0x805F,
    0xE3DC: 0x8062,
    0xE3DD: 0x8068,
    0xE3DE: 0x8073,
    0xE3DF: 0x8072,
    0xE3E0: 0x8070,
    0xE3E1: 0x8076,
    0xE3E2: 0x8079,
    0xE3E3: 0x807D,
    0xE3E4: 0x807F,
    0xE3E5: 0x8084,
    0xE3E6: 0x8086,
    0xE3E7: 0x8085,
    0xE3E8: 0x809B,
    0xE3E9: 0x8093,
    0xE3EA: 0x809A,
    0xE3EB: 0x80AD,
    0xE3EC: 0x5190,
    0xE3ED: 0x80AC,
    0xE3EE: 0x80DB,
    0xE3EF: 0x80E5,
    0xE3F0: 0x80D9,
    0xE3F1: 0x80DD,
    0xE3F2: 0x80C4,
    0xE3F3: 0x80DA,
    0xE3F4: 0x80D6,
    0xE3F5: 0x8109,
    0xE3F6: 0x80EF,
    0xE3F7: 0x80F1,
    0xE3F8: 0x811B,
    0xE3F9: 0x8129,
    0xE3FA: 0x8123,
    0xE3FB: 0x812F,
    0xE3FC: 0x814B,
    0xE440: 0x968B,
    0xE441: 0x8146,
    0xE442: 0x813E,
    0xE443: 0x8153,
    0xE444: 0x8151,
    0xE445: 0x80FC,
    0xE446: 0x8171,
    0xE447: 0x816E,
    0xE448: 0x8165,
    0xE449: 0x8166,
    0xE44A: 0x8174,
    0xE44B: 0x8183,
    0xE44C: 0x8188,
    0xE44D: 0x818A,
    0xE44E: 0x8180,
    0xE44F: 0x8182,
    0xE450: 0x81A0,
    0xE451: 0x8195,
    0xE452: 0x81A4,
    0xE453: 0x81A3,
    0xE454: 0x815F,
    0xE455: 0x8193,
    0xE456: 0x81A9,
    0xE457: 0x81B0,
    0xE458: 0x81B5,
    0xE459: 0x81BE,
    0xE45A: 0x81B8,
    0xE45B: 0x81BD,
    0xE45C: 0x81C0,
    0xE45D: 0x81C2,
    0xE45E: 0x81BA,
    0xE45F: 0x81C9,
    0xE460: 0x81CD,
    0xE461: 0x81D1,
    0xE462: 0x81D9,
    0xE463: 0x81D8,
    0xE464: 0x81C8,
    0xE465: 0x81DA,
    0xE466: 0x81DF,
    0xE467: 0x81E0,
    0xE468: 0x81E7,
    0xE469: 0x81FA,
    0xE46A: 0x81FB,
    0xE46B: 0x81FE,
    0xE46C: 0x8201,
    0xE46D: 0x8202,
    0xE46E: 0x8205,
    0xE46F: 0x8207,
    0xE470: 0x820A,
    0xE471: 0x820D,
    0xE472: 0x8210,
    0xE473: 0x8216,
    0xE474: 0x8229,
    0xE475: 0x822B,
    0xE476: 0x8238,
    0xE477: 0x8233,
    0xE478: 0x8240,
    0xE479: 0x8259,
    0xE47A: 0x8258,
    0xE47B: 0x825D,
    0xE47C: 0x825A,
    0xE47D: 0x825F,
    0xE47E: 0x8264,
    0xE480: 0x8262,
    0xE481: 0x8268,
    0xE482: 0x826A,
    0xE483: 0x826B,
    0xE484: 0x822E,
    0xE485: 0x8271,
    0xE486: 0x8277,
    0xE487: 0x8278,
    0xE488: 0x827E,
    0xE489: 0x828D,
    0xE48A: 0x8292,
    0xE48B: 0x82AB,
    0xE48C: 0x829F,
    0xE48D: 0x82BB,
    0xE48E: 0x82AC,
    0xE48F: 0x82E1,
    0xE490: 0x82E3,
    0xE491: 0x82DF,
    0xE492: 0x82D2,
    0xE493: 0x82F4,
    0xE494: 0x82F3,
    0xE495: 0x82FA,
    0xE496: 0x8393,
    0xE497: 0x8303,
    0xE498: 0x82FB,
    0xE499: 0x82F9,
    0xE49A: 0x82DE,
    0xE49B: 0x8306,
    0xE49C: 0x82DC,
    0xE49D: 0x8309,
    0xE49E: 0x82D9,
    0xE49F: 0x8335,
    0xE4A0: 0x8334,
    0xE4A1: 0x8316,
    0xE4A2: 0x8332,
    0xE4A3: 0x8331,
    0xE4A4: 0x8340,
    0xE4A5: 0x8339,
    0xE4A6: 0x8350,
    0xE4A7: 0x8345,
    0xE4A8: 0x832F,
    0xE4A9: 0x832B,
    0xE4AA: 0x8317,
    0xE4AB: 0x8318,
    0xE4AC: 0x8385,
    0xE4AD: 0x839A,
    0xE4AE: 0x83AA,
    0xE4AF: 0x839F,
    0xE4B0: 0x83A2,
    0xE4B1: 0x8396,
    0xE4B2: 0x8323,
    0xE4B3: 0x838E,
    0xE4B4: 0x8387,
    0xE4B5: 0x838A,
    0xE4B6: 0x837C,
    0xE4B7: 0x83B5,
    0xE4B8: 0x8373,
    0xE4B9: 0x8375,
    0xE4BA: 0x83A0,
    0xE4BB: 0x8389,
    0xE4BC: 0x83A8,
    0xE4BD: 0x83F4,
    0xE4BE: 0x8413,
    0xE4BF: 0x83EB,
    0xE4C0: 0x83CE,
    0xE4C1: 0x83FD,
    0xE4C2: 0x8403,
    0xE4C3: 0x83D8,
    0xE4C4: 0x840B,
    0xE4C5: 0x83C1,
    0xE4C6: 0x83F7,
    0xE4C7: 0x8407,
    0xE4C8: 0x83E0,
    0xE4C9: 0x83F2,
    0xE4CA: 0x840D,
    0xE4CB: 0x8422,
    0xE4CC: 0x8420,
    0xE4CD: 0x83BD,
    0xE4CE: 0x8438,
    0xE4CF: 0x8506,
    0xE4D0: 0x83FB,
    0xE4D1: 0x846D,
    0xE4D2: 0x842A,
    0xE4D3: 0x843C,
    0xE4D4: 0x855A,
    0xE4D5: 0x8484,
    0xE4D6: 0x8477,
    0xE4D7: 0x846B,
    0xE4D8: 0x84AD,
    0xE4D9: 0x846E,
    0xE4DA: 0x8482,
    0xE4DB: 0x8469,
    0xE4DC: 0x8446,
    0xE4DD: 0x842C,
    0xE4DE: 0x846F,
    0xE4DF: 0x8479,
    0xE4E0: 0x8435,
    0xE4E1: 0x84CA,
    0xE4E2: 0x8462,
    0xE4E3: 0x84B9,
    0xE4E4: 0x84BF,
    0xE4E5: 0x849F,
    0xE4E6: 0x84D9,
    0xE4E7: 0x84CD,
    0xE4E8: 0x84BB,
    0xE4E9: 0x84DA,
    0xE4EA: 0x84D0,
    0xE4EB: 0x84C1,
    0xE4EC: 0x84C6,
    0xE4ED: 0x84D6,
    0xE4EE: 0x84A1,
    0xE4EF: 0x8521,
    0xE4F0: 0x84FF,
    0xE4F1: 0x84F4,
    0xE4F2: 0x8517,
    0xE4F3: 0x8518,
    0xE4F4: 0x852C,
    0xE4F5: 0x851F,
    0xE4F6: 0x8515,
    0xE4F7: 0x8514,
    0xE4F8: 0x84FC,
    0xE4F9: 0x8540,
    0xE4FA: 0x8563,
    0xE4FB: 0x8558,
    0xE4FC: 0x8548,
    0xE540: 0x8541,
    0xE541: 0x8602,
    0xE542: 0x854B,
    0xE543: 0x8555,
    0xE544: 0x8580,
    0xE545: 0x85A4,
    0xE546: 0x8588,
    0xE547: 0x8591,
    0xE548: 0x858A,
    0xE549: 0x85A8,
    0xE54A: 0x856D,
    0xE54B: 0x8594,
    0xE54C: 0x859B,
    0xE54D: 0x85EA,
    0xE54E: 0x8587,
    0xE54F: 0x859C,
    0xE550: 0x8577,
    0xE551: 0x857E,
    0xE552: 0x8590,
    0xE553: 0x85C9,
    0xE554: 0x85BA,
    0xE555: 0x85CF,
    0xE556: 0x85B9,
    0xE557: 0x85D0,
    0xE558: 0x85D5,
    0xE559: 0x85DD,
    0xE55A: 0x85E5,
    0xE55B: 0x85DC,
    0xE55C: 0x85F9,
    0xE55D: 0x860A,
    0xE55E: 0x8613,
    0xE55F: 0x860B,
    0xE560: 0x85FE,
    0xE561: 0x85FA,
    0xE562: 0x8606,
    0xE563: 0x8622,
    0xE564: 0x861A,
    0xE565: 0x8630,
    0xE566: 0x863F,
    0xE567: 0x864D,
    0xE568: 0x4E55,
    0xE569: 0x8654,
    0xE56A: 0x865F,
    0xE56B: 0x8667,
    0xE56C: 0x8671,
    0xE56D: 0x8693,
    0xE56E: 0x86A3,
    0xE56F: 0x86A9,
    0xE570: 0x86AA,
    0xE571: 0x868B,
    0xE572: 0x868C,
    0xE573: 0x86B6,
    0xE574: 0x86AF,
    0xE575: 0x86C4,
    0xE576: 0x86C6,
    0xE577: 0x86B0,
    0xE578: 0x86C9,
    0xE579: 0x8823,
    0xE57A: 0x86AB,
    0xE57B: 0x86D4,
    0xE57C: 0x86DE,
    0xE57D: 0x86E9,
    0xE57E: 0x86EC,
    0xE580: 0x86DF,
    0xE581: 0x86DB,
    0xE582: 0x86EF,
    0xE583: 0x8712,
    0xE584: 0x8706,
    0xE585: 0x8708,
    0xE586: 0x8700,
    0xE587: 0x8703,
    0xE588: 0x86FB,
    0xE589: 0x8711,
    0xE58A: 0x8709,
    0xE58B: 0x870D,
    0xE58C: 0x86F9,
    0xE58D: 0x870A,
    0xE58E: 0x8734,
    0xE58F: 0x873F,
    0xE590: 0x8737,
    0xE591: 0x873B,
    0xE592: 0x8725,
    0xE593: 0x8729,
    0xE594: 0x871A,
    0xE595: 0x8760,
    0xE596: 0x875F,
    0xE597: 0x8778,
    0xE598: 0x874C,
    0xE599: 0x874E,
    0xE59A: 0x8774,
    0xE59B: 0x8757,
    0xE59C: 0x8768,
    0xE59D: 0x876E,
    0xE59E: 0x8759,
    0xE59F: 0x8753,
    0xE5A0: 0x8763,
    0xE5A1: 0x876A,
    0xE5A2: 0x8805,
    0xE5A3: 0x87A2,
    0xE5A4: 0x879F,
    0xE5A5: 0x8782,
    0xE5A6: 0x87AF,
    0xE5A7: 0x87CB,
    0xE5A8: 0x87BD,
    0xE5A9: 0x87C0,
    0xE5AA: 0x87D0,
    0xE5AB: 0x96D6,
    0xE5AC: 0x87AB,
    0xE5AD: 0x87C4,
    0xE5AE: 0x87B3,
    0xE5AF: 0x87C7,
    0xE5B0: 0x87C6,
    0xE5B1: 0x87BB,
    0xE5B2: 0x87EF,
    0xE5B3: 0x87F2,
    0xE5B4: 0x87E0,
    0xE5B5: 0x880F,
    0xE5B6: 0x880D,
    0xE5B7: 0x87FE,
    0xE5B8: 0x87F6,
    0xE5B9: 0x87F7,
    0xE5BA: 0x880E,
    0xE5BB: 0x87D2,
    0xE5BC: 0x8811,
    0xE5BD: 0x8816,
    0xE5BE: 0x8815,
    0xE5BF: 0x8822,
    0xE5C0: 0x8821,
    0xE5C1: 0x8831,
    0xE5C2: 0x8836,
    0xE5C3: 0x8839,
    0xE5C4: 0x8827,
    0xE5C5: 0x883B,
    0xE5C6: 0x8844,
    0xE5C7: 0x8842,
    0xE5C8: 0x8852,
    0xE5C9: 0x8859,
    0xE5CA: 0x885E,
    0xE5CB: 0x8862,
    0xE5CC: 0x886B,
    0xE5CD: 0x8881,
    0xE5CE: 0x887E,
    0xE5CF: 0x889E,
    0xE5D0: 0x8875,
    0xE5D1: 0x887D,
    0xE5D2: 0x88B5,
    0xE5D3: 0x8872,
    0xE5D4: 0x8882,
    0xE5D5: 0x8897,
    0xE5D6: 0x8892,
    0xE5D7: 0x88AE,
    0xE5D8: 0x8899,
    0xE5D9: 0x88A2,
    0xE5DA: 0x888D,
    0xE5DB: 0x88A4,
    0xE5DC: 0x88B0,
    0xE5DD: 0x88BF,
    0xE5DE: 0x88B1,
    0xE5DF: 0x88C3,
    0xE5E0: 0x88C4,
    0xE5E1: 0x88D4,
    0xE5E2: 0x88D8,
    0xE5E3: 0x88D9,
    0xE5E4: 0x88DD,
    0xE5E5: 0x88F9,
    0xE5E6: 0x8902,
    0xE5E7: 0x88FC,
    0xE5E8: 0x88F4,
    0xE5E9: 0x88E8,
    0xE5EA: 0x88F2,
    0xE5EB: 0x8904,
    0xE5EC: 0x890C,
    0xE5ED: 0x890A,
    0xE5EE: 0x8913,
    0xE5EF: 0x8943,
    0xE5F0: 0x891E,
    0xE5F1: 0x8925,
    0xE5F2: 0x892A,
    0xE5F3: 0x892B,
    0xE5F4: 0x8941,
    0xE5F5: 0x8944,
    0xE5F6: 0x893B,
    0xE5F7: 0x8936,
    0xE5F8: 0x8938,
    0xE5F9: 0x894C,
    0xE5FA: 0x891D,
    0xE5FB: 0x8960,
    0xE5FC: 0x895E,
    0xE640: 0x8966,
    0xE641: 0x8964,
    0xE642: 0x896D,
    0xE643: 0x896A,
    0xE644: 0x896F,
    0xE645: 0x8974,
    0xE646: 0x8977,
    0xE647: 0x897E,
    0xE648: 0x8983,
    0xE649: 0x8988,
    0xE64A: 0x898A,
    0xE64B: 0x8993,
    0xE64C: 0x8998,
    0xE64D: 0x89A1,
    0xE64E: 0x89A9,
    0xE64F: 0x89A6,
    0xE650: 0x89AC,
    0xE651: 0x89AF,
    0xE652: 0x89B2,
    0xE653: 0x89BA,
    0xE654: 0x89BD,
    0xE655: 0x89BF,
    0xE656: 0x89C0,
    0xE657: 0x89DA,
    0xE658: 0x89DC,
    0xE659: 0x89DD,
    0xE65A: 0x89E7,
    0xE65B: 0x89F4,
    0xE65C: 0x89F8,
    0xE65D: 0x8A03,
    0xE65E: 0x8A16,
    0xE65F: 0x8A10,
    0xE660: 0x8A0C,
    0xE661: 0x8A1B,
    0xE662: 0x8A1D,
    0xE663: 0x8A25,
    0xE664: 0x8A36,
    0xE665: 0x8A41,
    0xE666: 0x8A5B,
    0xE667: 0x8A52,
    0xE668: 0x8A46,
    0xE669: 0x8A48,
    0xE66A: 0x8A7C,
    0xE66B: 0x8A6D,
    0xE66C: 0x8A6C,
    0xE66D: 0x8A62,
    0xE66E: 0x8A85,
    0xE66F: 0x8A82,
    0xE670: 0x8A84,
    0xE671: 0x8AA8,
    0xE672: 0x8AA1,
    0xE673: 0x8A91,
    0xE674: 0x8AA5,
    0xE675: 0x8AA6,
    0xE676: 0x8A9A,
    0xE677: 0x8AA3,
    0xE678: 0x8AC4,
    0xE679: 0x8ACD,
    0xE67A: 0x8AC2,
    0xE67B: 0x8ADA,
    0xE67C: 0x8AEB,
    0xE67D: 0x8AF3,
    0xE67E: 0x8AE7,
    0xE680: 0x8AE4,
    0xE681: 0x8AF1,
    0xE682: 0x8B14,
    0xE683: 0x8AE0,
    0xE684: 0x8AE2,
    0xE685: 0x8AF7,
    0xE686: 0x8ADE,
    0xE687: 0x8ADB,
    0xE688: 0x8B0C,
    0xE689: 0x8B07,
    0xE68A: 0x8B1A,
    0xE68B: 0x8AE1,
    0xE68C: 0x8B16,
    0xE68D: 0x8B10,
    0xE68E: 0x8B17,
    0xE68F: 0x8B20,
    0xE690: 0x8B33,
    0xE691: 0x97AB,
    0xE692: 0x8B26,
    0xE693: 0x8B2B,
    0xE694: 0x8B3E,
    0xE695: 0x8B28,
    0xE696: 0x8B41,
    0xE697: 0x8B4C,
    0xE698: 0x8B4F,
    0xE699: 0x8B4E,
    0xE69A: 0x8B49,
    0xE69B: 0x8B56,
    0xE69C: 0x8B5B,
    0xE69D: 0x8B5A,
    0xE69E: 0x8B6B,
    0xE69F: 0x8B5F,
    0xE6A0: 0x8B6C,
    0xE6A1: 0x8B6F,
    0xE6A2: 0x8B74,
    0xE6A3: 0x8B7D,
    0xE6A4: 0x8B80,
    0xE6A5: 0x8B8C,
    0xE6A6: 0x8B8E,
    0xE6A7: 0x8B92,
    0xE6A8: 0x8B93,
    0xE6A9: 0x8B96,
    0xE6AA: 0x8B99,
    0xE6AB: 0x8B9A,
    0xE6AC: 0x8C3A,
    0xE6AD: 0x8C41,
    0xE6AE: 0x8C3F,
    0xE6AF: 0x8C48,
    0xE6B0: 0x8C4C,
    0xE6B1: 0x8C4E,
    0xE6B2: 0x8C50,
    0xE6B3: 0x8C55,
    0xE6B4: 0x8C62,
    0xE6B5: 0x8C6C,
    0xE6B6: 0x8C78,
    0xE6B7: 0x8C7A,
    0xE6B8: 0x8C82,
    0xE6B9: 0x8C89,
    0xE6BA: 0x8C85,
    0xE6BB: 0x8C8A,
    0xE6BC: 0x8C8D,
    0xE6BD: 0x8C8E,
    0xE6BE: 0x8C94,
    0xE6BF: 0x8C7C,
    0xE6C0: 0x8C98,
    0xE6C1: 0x621D,
    0xE6C2: 0x8CAD,
    0xE6C3: 0x8CAA,
    0xE6C4: 0x8CBD,
    0xE6C5: 0x8CB2,
    0xE6C6: 0x8CB3,
    0xE6C7: 0x8CAE,
    0xE6C8: 0x8CB6,
    0xE6C9: 0x8CC8,
    0xE6CA: 0x8CC1,
    0xE6CB: 0x8CE4,
    0xE6CC: 0x8CE3,
    0xE6CD: 0x8CDA,
    0xE6CE: 0x8CFD,
    0xE6CF: 0x8CFA,
    0xE6D0: 0x8CFB,
    0xE6D1: 0x8D04,
    0xE6D2: 0x8D05,
    0xE6D3: 0x8D0A,
    0xE6D4: 0x8D07,
    0xE6D5: 0x8D0F,
    0xE6D6: 0x8D0D,
    0xE6D7: 0x8D10,
    0xE6D8: 0x9F4E,
    0xE6D9: 0x8D13,
    0xE6DA: 0x8CCD,
    0xE6DB: 0x8D14,
    0xE6DC: 0x8D16,
    0xE6DD: 0x8D67,
    0xE6DE: 0x8D6D,
    0xE6DF: 0x8D71,
    0xE6E0: 0x8D73,
    0xE6E1: 0x8D81,
    0xE6E2: 0x8D99,
    0xE6E3: 0x8DC2,
    0xE6E4: 0x8DBE,
    0xE6E5: 0x8DBA,
    0xE6E6: 0x8DCF,
    0xE6E7: 0x8DDA,
    0xE6E8: 0x8DD6,
    0xE6E9: 0x8DCC,
    0xE6EA: 0x8DDB,
    0xE6EB: 0x8DCB,
    0xE6EC: 0x8DEA,
    0xE6ED: 0x8DEB,
    0xE6EE: 0x8DDF,
    0xE6EF: 0x8DE3,
    0xE6F0: 0x8DFC,
    0xE6F1: 0x8E08,
    0xE6F2: 0x8E09,
    0xE6F3: 0x8DFF,
    0xE6F4: 0x8E1D,
    0xE6F5: 0x8E1E,
    0xE6F6: 0x8E10,
    0xE6F7: 0x8E1F,
    0xE6F8: 0x8E42,
    0xE6F9: 0x8E35,
    0xE6FA: 0x8E30,
    0xE6FB: 0x8E34,
    0xE6FC: 0x8E4A,
    0xE740: 0x8E47,
    0xE741: 0x8E49,
    0xE742: 0x8E4C,
    0xE743: 0x8E50,
    0xE744: 0x8E48,
    0xE745: 0x8E59,
    0xE746: 0x8E64,
    0xE747: 0x8E60,
    0xE748: 0x8E2A,
    0xE749: 0x8E63,
    0xE74A: 0x8E55,
    0xE74B: 0x8E76,
    0xE74C: 0x8E72,
    0xE74D: 0x8E7C,
    0xE74E: 0x8E81,
    0xE74F: 0x8E87,
    0xE750: 0x8E85,
    0xE751: 0x8E84,
    0xE752: 0x8E8B,
    0xE753: 0x8E8A,
    0xE754: 0x8E93,
    0xE755: 0x8E91,
    0xE756: 0x8E94,
    0xE757: 0x8E99,
    0xE758: 0x8EAA,
    0xE759: 0x8EA1,
    0xE75A: 0x8EAC,
    0xE75B: 0x8EB0,
    0xE75C: 0x8EC6,
    0xE75D: 0x8EB1,
    0xE75E: 0x8EBE,
    0xE75F: 0x8EC5,
    0xE760: 0x8EC8,
    0xE761: 0x8ECB,
    0xE762: 0x8EDB,
    0xE763: 0x8EE3,
    0xE764: 0x8EFC,
    0xE765: 0x8EFB,
    0xE766: 0x8EEB,
    0xE767: 0x8EFE,
    0xE768: 0x8F0A,
    0xE769: 0x8F05,
    0xE76A: 0x8F15,
    0xE76B: 0x8F12,
    0xE76C: 0x8F19,
    0xE76D: 0x8F13,
    0xE76E: 0x8F1C,
    0xE76F: 0x8F1F,
    0xE770: 0x8F1B,
    0xE771: 0x8F0C,
    0xE772: 0x8F26,
    0xE773: 0x8F33,
    0xE774: 0x8F3B,
    0xE775: 0x8F39,
    0xE776: 0x8F45,
    0xE777: 0x8F42,
    0xE778: 0x8F3E,
    0xE779: 0x8F4C,
    0xE77A: 0x8F49,
    0xE77B: 0x8F46,
    0xE77C: 0x8F4E,
    0xE77D: 0x8F57,
    0xE77E: 0x8F5C,
    0xE780: 0x8F62,
    0xE781: 0x8F63,
    0xE782: 0x8F64,
    0xE783: 0x8F9C,
    0xE784: 0x8F9F,
    0xE785: 0x8FA3,
    0xE786: 0x8FAD,
    0xE787: 0x8FAF,
    0xE788: 0x8FB7,
    0xE789: 0x8FDA,
    0xE78A: 0x8FE5,
    0xE78B: 0x8FE2,
    0xE78C: 0x8FEA,
    0xE78D: 0x8FEF,
    0xE78E: 0x9087,
    0xE78F: 0x8FF4,
    0xE790: 0x9005,
    0xE791: 0x8FF9,
    0xE792: 0x8FFA,
    0xE793: 0x9011,
    0xE794: 0x9015,
    0xE795: 0x9021,
    0xE796: 0x900D,
    0xE797: 0x901E,
    0xE798: 0x9016,
    0xE799: 0x900B,
    0xE79A: 0x9027,
    0xE79B: 0x9036,
    0xE79C: 0x9035,
    0xE79D: 0x9039,
    0xE79E: 0x8FF8,
    0xE79F: 0x904F,
    0xE7A0: 0x9050,
    0xE7A1: 0x9051,
    0xE7A2: 0x9052,
    0xE7A3: 0x900E,
    0xE7A4: 0x9049,
    0xE7A5: 0x903E,
    0xE7A6: 0x9056,
    0xE7A7: 0x9058,
    0xE7A8: 0x905E,
    0xE7A9: 0x9068,
    0xE7AA: 0x906F,
    0xE7AB: 0x9076,
    0xE7AC: 0x96A8,
    0xE7AD: 0x9072,
    0xE7AE: 0x9082,
    0xE7AF: 0x907D,
    0xE7B0: 0x9081,
    0xE7B1: 0x9080,
    0xE7B2: 0x908A,
    0xE7B3: 0x9089,
    0xE7B4: 0x908F,
    0xE7B5: 0x90A8,
    0xE7B6: 0x90AF,
    0xE7B7: 0x90B1,
    0xE7B8: 0x90B5,
    0xE7B9: 0x90E2,
    0xE7BA: 0x90E4,
    0xE7BB: 0x6248,
    0xE7BC: 0x90DB,
    0xE7BD: 0x9102,
    0xE7BE: 0x9112,
    0xE7BF: 0x9119,
    0xE7C0: 0x9132,
    0xE7C1: 0x9130,
    0xE7C2: 0x914A,
    0xE7C3: 0x9156,
    0xE7C4: 0x9158,
    0xE7C5: 0x9163,
    0xE7C6: 0x9165,
    0xE7C7: 0x9169,
    0xE7C8: 0x9173,
    0xE7C9: 0x9172,
    0xE7CA: 0x918B,
    0xE7CB: 0x9189,
    0xE7CC: 0x9182,
    0xE7CD: 0x91A2,
    0xE7CE: 0x91AB,
    0xE7CF: 0x91AF,
    0xE7D0: 0x91AA,
    0xE7D1: 0x91B5,
    0xE7D2: 0x91B4,
    0xE7D3: 0x91BA,
    0xE7D4: 0x91C0,
    0xE7D5: 0x91C1,
    0xE7D6: 0x91C9,
    0xE7D7: 0x91CB,
    0xE7D8: 0x91D0,
    0xE7D9: 0x91D6,
    0xE7DA: 0x91DF,
    0xE7DB: 0x91E1,
    0xE7DC: 0x91DB,
    0xE7DD: 0x91FC,
    0xE7DE: 0x91F5,
    0xE7DF: 0x91F6,
    0xE7E0: 0x921E,
    0xE7E1: 0x91FF,
    0xE7E2: 0x9214,
    0xE7E3: 0x922C,
    0xE7E4: 0x9215,
    0xE7E5: 0x9211,
    0xE7E6: 0x925E,
    0xE7E7: 0x9257,
    0xE7E8: 0x9245,
    0xE7E9: 0x9249,
    0xE7EA: 0x9264,
    0xE7EB: 0x9248,
    0xE7EC: 0x9295,
    0xE7ED: 0x923F,
    0xE7EE: 0x924B,
    0xE7EF: 0x9250,
    0xE7F0: 0x929C,
    0xE7F1: 0x9296,
    0xE7F2: 0x9293,
    0xE7F3: 0x929B,
    0xE7F4: 0x925A,
    0xE7F5: 0x92CF,
    0xE7F6: 0x92B9,
    0xE7F7: 0x92B7,
    0xE7F8: 0x92E9,
    0xE7F9: 0x930F,
    0xE7FA: 0x92FA,
    0xE7FB: 0x9344,
    0xE7FC: 0x932E,
    0xE840: 0x9319,
    0xE841: 0x9322,
    0xE842: 0x931A,
    0xE843: 0x9323,
    0xE844: 0x933A,
    0xE845: 0x9335,
    0xE846: 0x933B,
    0xE847: 0x935C,
    0xE848: 0x9360,
    0xE849: 0x937C,
    0xE84A: 0x936E,
    0xE84B: 0x9356,
    0xE84C: 0x93B0,
    0xE84D: 0x93AC,
    0xE84E: 0x93AD,
    0xE84F: 0x9394,
    0xE850: 0x93B9,
    0xE851: 0x93D6,
    0xE852: 0x93D7,
    0xE853: 0x93E8,
    0xE854: 0x93E5,
    0xE855: 0x93D8,
    0xE856: 0x93C3,
    0xE857: 0x93DD,
    0xE858: 0x93D0,
    0xE859: 0x93C8,
    0xE85A: 0x93E4,
    0xE85B: 0x941A,
    0xE85C: 0x9414,
    0xE85D: 0x9413,
    0xE85E: 0x9403,
    0xE85F: 0x9407,
    0xE860: 0x9410,
    0xE861: 0x9436,
    0xE862: 0x942B,
    0xE863: 0x9435,
    0xE864: 0x9421,
    0xE865: 0x943A,
    0xE866: 0x9441,
    0xE867: 0x9452,
    0xE868: 0x9444,
    0xE869: 0x945B,
    0xE86A: 0x9460,
    0xE86B: 0x9462,
    0xE86C: 0x945E,
    0xE86D: 0x946A,
    0xE86E: 0x9229,
    0xE86F: 0x9470,
    0xE870: 0x9475,
    0xE871: 0x9477,
    0xE872: 0x947D,
    0xE873: 0x945A,
    0xE874: 0x947C,
    0xE875: 0x947E,
    0xE876: 0x9481,
    0xE877: 0x947F,
    0xE878: 0x9582,
    0xE879: 0x9587,
    0xE87A: 0x958A,
    0xE87B: 0x9594,
    0xE87C: 0x9596,
    0xE87D: 0x9598,
    0xE87E: 0x9599,
    0xE880: 0x95A0,
    0xE881: 0x95A8,
    0xE882: 0x95A7,
    0xE883: 0x95AD,
    0xE884: 0x95BC,
    0xE885: 0x95BB,
    0xE886: 0x95B9,
    0xE887: 0x95BE,
    0xE888: 0x95CA,
    0xE889: 0x6FF6,
    0xE88A: 0x95C3,
    0xE88B: 0x95CD,
    0xE88C: 0x95CC,
    0xE88D: 0x95D5,
    0xE88E: 0x95D4,
    0xE88F: 0x95D6,
    0xE890: 0x95DC,
    0xE891: 0x95E1,
    0xE892: 0x95E5,
    0xE893: 0x95E2,
    0xE894: 0x9621,
    0xE895: 0x9628,
    0xE896: 0x962E,
    0xE897: 0x962F,
    0xE898: 0x9642,
    0xE899: 0x964C,
    0xE89A: 0x964F,
    0xE89B: 0x964B,
    0xE89C: 0x9677,
    0xE89D: 0x965C,
    0xE89E: 0x965E,
    0xE89F: 0x965D,
    0xE8A0: 0x965F,
    0xE8A1: 0x9666,
    0xE8A2: 0x9672,
    0xE8A3: 0x966C,
    0xE8A4: 0x968D,
    0xE8A5: 0x9698,
    0xE8A6: 0x9695,
    0xE8A7: 0x9697,
    0xE8A8: 0x96AA,
    0xE8A9: 0x96A7,
    0xE8AA: 0x96B1,
    0xE8AB: 0x96B2,
    0xE8AC: 0x96B0,
    0xE8AD: 0x96B4,
    0xE8AE: 0x96B6,
    0xE8AF: 0x96B8,
    0xE8B0: 0x96B9,
    0xE8B1: 0x96CE,
    0xE8B2: 0x96CB,
    0xE8B3: 0x96C9,
    0xE8B4: 0x96CD,
    0xE8B5: 0x894D,
    0xE8B6: 0x96DC,
    0xE8B7: 0x970D,
    0xE8B8: 0x96D5,
    0xE8B9: 0x96F9,
    0xE8BA: 0x9704,
    0xE8BB: 0x9706,
    0xE8BC: 0x9708,
    0xE8BD: 0x9713,
    0xE8BE: 0x970E,
    0xE8BF: 0x9711,
    0xE8C0: 0x970F,
    0xE8C1: 0x9716,
    0xE8C2: 0x9719,
    0xE8C3: 0x9724,
    0xE8C4: 0x972A,
    0xE8C5: 0x9730,
    0xE8C6: 0x9739,
    0xE8C7: 0x973D,
    0xE8C8: 0x973E,
    0xE8C9: 0x9744,
    0xE8CA: 0x9746,
    0xE8CB: 0x9748,
    0xE8CC: 0x9742,
    0xE8CD: 0x9749,
    0xE8CE: 0x975C,
    0xE8CF: 0x9760,
    0xE8D0: 0x9764,
    0xE8D1: 0x9766,
    0xE8D2: 0x9768,
    0xE8D3: 0x52D2,
    0xE8D4: 0x976B,
    0xE8D5: 0x9771,
    0xE8D6: 0x9779,
    0xE8D7: 0x9785,
    0xE8D8: 0x977C,
    0xE8D9: 0x9781,
    0xE8DA: 0x977A,
    0xE8DB: 0x9786,
    0xE8DC: 0x978B,
    0xE8DD: 0x978F,
    0xE8DE: 0x9790,
    0xE8DF: 0x979C,
    0xE8E0: 0x97A8,
    0xE8E1: 0x97A6,
    0xE8E2: 0x97A3,
    0xE8E3: 0x97B3,
    0xE8E4: 0x97B4,
    0xE8E5: 0x97C3,
    0xE8E6: 0x97C6,
    0xE8E7: 0x97C8,
    0xE8E8: 0x97CB,
    0xE8E9: 0x97DC,
    0xE8EA: 0x97ED,
    0xE8EB: 0x9F4F,
    0xE8EC: 0x97F2,
    0xE8ED: 0x7ADF,
    0xE8EE: 0x97F6,
    0xE8EF: 0x97F5,
    0xE8F0: 0x980F,
    0xE8F1: 0x980C,
    0xE8F2: 0x9838,
    0xE8F3: 0x9824,
    0xE8F4: 0x9821,
    0xE8F5: 0x9837,
    0xE8F6: 0x983D,
    0xE8F7: 0x9846,
    0xE8F8: 0x984F,
    0xE8F9: 0x984B,
    0xE8FA: 0x986B,
    0xE8FB: 0x986F,
    0xE8FC: 0x9870,
    0xE940: 0x9871,
    0xE941: 0x9874,
    0xE942: 0x9873,
    0xE943: 0x98AA,
    0xE944: 0x98AF,
    0xE945: 0x98B1,
    0xE946: 0x98B6,
    0xE947: 0x98C4,
    0xE948: 0x98C3,
    0xE949: 0x98C6,
    0xE94A: 0x98E9,
    0xE94B: 0x98EB,
    0xE94C: 0x9903,
    0xE94D: 0x9909,
    0xE94E: 0x9912,
    0xE94F: 0x9914,
    0xE950: 0x9918,
    0xE951: 0x9921,
    0xE952: 0x991D,
    0xE953: 0x991E,
    0xE954: 0x9924,
    0xE955: 0x9920,
    0xE956: 0x992C,
    0xE957: 0x992E,
    0xE958: 0x993D,
    0xE959: 0x993E,
    0xE95A: 0x9942,
    0xE95B: 0x9949,
    0xE95C: 0x9945,
    0xE95D: 0x9950,
    0xE95E: 0x994B,
    0xE95F: 0x9951,
    0xE960: 0x9952,
    0xE961: 0x994C,
    0xE962: 0x9955,
    0xE963: 0x9997,
    0xE964: 0x9998,
    0xE965: 0x99A5,
    0xE966: 0x99AD,
    0xE967: 0x99AE,
    0xE968: 0x99BC,
    0xE969: 0x99DF,
    0xE96A: 0x99DB,
    0xE96B: 0x99DD,
    0xE96C: 0x99D8,
    0xE96D: 0x99D1,
    0xE96E: 0x99ED,
    0xE96F: 0x99EE,
    0xE970: 0x99F1,
    0xE971: 0x99F2,
    0xE972: 0x99FB,
    0xE973: 0x99F8,
    0xE974: 0x9A01,
    0xE975: 0x9A0F,
    0xE976: 0x9A05,
    0xE977: 0x99E2,
    0xE978: 0x9A19,
    0xE979: 0x9A2B,
    0xE97A: 0x9A37,
    0xE97B: 0x9A45,
    0xE97C: 0x9A42,
    0xE97D: 0x9A40,
    0xE97E: 0x9A43,
    0xE980: 0x9A3E,
    0xE981: 0x9A55,
    0xE982: 0x9A4D,
    0xE983: 0x9A5B,
    0xE984: 0x9A57,
    0xE985: 0x9A5F,
    0xE986: 0x9A62,
    0xE987: 0x9A65,
    0xE988: 0x9A64,
    0xE989: 0x9A69,
    0xE98A: 0x9A6B,
    0xE98B: 0x9A6A,
    0xE98C: 0x9AAD,
    0xE98D: 0x9AB0,
    0xE98E: 0x9ABC,
    0xE98F: 0x9AC0,
    0xE990: 0x9ACF,
    0xE991: 0x9AD1,
    0xE992: 0x9AD3,
    0xE993: 0x9AD4,
    0xE994: 0x9ADE,
    0xE995: 0x9ADF,
    0xE996: 0x9AE2,
    0xE997: 0x9AE3,
    0xE998: 0x9AE6,
    0xE999: 0x9AEF,
    0xE99A: 0x9AEB,
    0xE99B: 0x9AEE,
    0xE99C: 0x9AF4,
    0xE99D: 0x9AF1,
    0xE99E: 0x9AF7,
    0xE99F: 0x9AFB,
    0xE9A0: 0x9B06,
    0xE9A1: 0x9B18,
    0xE9A2: 0x9B1A,
    0xE9A3: 0x9B1F,
    0xE9A4: 0x9B22,
    0xE9A5: 0x9B23,
    0xE9A6: 0x9B25,
    0xE9A7: 0x9B27,
    0xE9A8: 0x9B28,
    0xE9A9: 0x9B29,
    0xE9AA: 0x9B2A,
    0xE9AB: 0x9B2E,
    0xE9AC: 0x9B2F,
    0xE9AD: 0x9B32,
    0xE9AE: 0x9B44,
    0xE9AF: 0x9B43,
    0xE9B0: 0x9B4F,
    0xE9B1: 0x9B4D,
    0xE9B2: 0x9B4E,
    0xE9B3: 0x9B51,
    0xE9B4: 0x9B58,
    0xE9B5: 0x9B74,
    0xE9B6: 0x9B93,
    0xE9B7: 0x9B83,
    0xE9B8: 0x9B91,
    0xE9B9: 0x9B96,
    0xE9BA: 0x9B97,
    0xE9BB: 0x9B9F,
    0xE9BC: 0x9BA0,
    0xE9BD: 0x9BA8,
    0xE9BE: 0x9BB4,
    0xE9BF: 0x9BC0,
    0xE9C0: 0x9BCA,
    0xE9C1: 0x9BB9,
    0xE9C2: 0x9BC6,
    0xE9C3: 0x9BCF,
    0xE9C4: 0x9BD1,
    0xE9C5: 0x9BD2,
    0xE9C6: 0x9BE3,
    0xE9C7: 0x9BE2,
    0xE9C8: 0x9BE4,
    0xE9C9: 0x9BD4,
    0xE9CA: 0x9BE1,
    0xE9CB: 0x9C3A,
    0xE9CC: 0x9BF2,
    0xE9CD: 0x9BF1,
    0xE9CE: 0x9BF0,
    0xE9CF: 0x9C15,
    0xE9D0: 0x9C14,
    0xE9D1: 0x9C09,
    0xE9D2: 0x9C13,
    0xE9D3: 0x9C0C,
    0xE9D4: 0x9C06,
    0xE9D5: 0x9C08,
    0xE9D6: 0x9C12,
    0xE9D7: 0x9C0A,
    0xE9D8: 0x9C04,
    0xE9D9: 0x9C2E,
    0xE9DA: 0x9C1B,
    0xE9DB: 0x9C25,
    0xE9DC: 0x9C24,
    0xE9DD: 0x9C21,
    0xE9DE: 0x9C30,
    0xE9DF: 0x9C47,
    0xE9E0: 0x9C32,
    0xE9E1: 0x9C46,
    0xE9E2: 0x9C3E,
    0xE9E3: 0x9C5A,
    0xE9E4: 0x9C60,
    0xE9E5: 0x9C67,
    0xE9E6: 0x9C76,
    0xE9E7: 0x9C78,
    0xE9E8: 0x9CE7,
    0xE9E9: 0x9CEC,
    0xE9EA: 0x9CF0,
    0xE9EB: 0x9D09,
    0xE9EC: 0x9D08,
    0xE9ED: 0x9CEB,
    0xE9EE: 0x9D03,
    0xE9EF: 0x9D06,
    0xE9F0: 0x9D2A,
    0xE9F1: 0x9D26,
    0xE9F2: 0x9DAF,
    0xE9F3: 0x9D23,
    0xE9F4: 0x9D1F,
    0xE9F5: 0x9D44,
    0xE9F6: 0x9D15,
    0xE9F7: 0x9D12,
    0xE9F8: 0x9D41,
    0xE9F9: 0x9D3F,
    0xE9FA: 0x9D3E,
    0xE9FB: 0x9D46,
    0xE9FC: 0x9D48,
    0xEA40: 0x9D5D,
    0xEA41: 0x9D5E,
    0xEA42: 0x9D64,
    0xEA43: 0x9D51,
    0xEA44: 0x9D50,
    0xEA45: 0x9D59,
    0xEA46: 0x9D72,
    0xEA47: 0x9D89,
    0xEA48: 0x9D87,
    0xEA49: 0x9DAB,
    0xEA4A: 0x9D6F,
    0xEA4B: 0x9D7A,
    0xEA4C: 0x9D9A,
    0xEA4D: 0x9DA4,
    0xEA4E: 0x9DA9,
    0xEA4F: 0x9DB2,
    0xEA50: 0x9DC4,
    0xEA51: 0x9DC1,
    0xEA52: 0x9DBB,
    0xEA53: 0x9DB8,
    0xEA54: 0x9DBA,
    0xEA55: 0x9DC6,
    0xEA56: 0x9DCF,
    0xEA57: 0x9DC2,
    0xEA58: 0x9DD9,
    0xEA59: 0x9DD3,
    0xEA5A: 0x9DF8,
    0xEA5B: 0x9DE6,
    0xEA5C: 0x9DED,
    0xEA5D: 0x9DEF,
    0xEA5E: 0x9DFD,
    0xEA5F: 0x9E1A,
    0xEA60: 0x9E1B,
    0xEA61: 0x9E1E,
    0xEA62: 0x9E75,
    0xEA63: 0x9E79,
    0xEA64: 0x9E7D,
    0xEA65: 0x9E81,
    0xEA66: 0x9E88,
    0xEA67: 0x9E8B,
    0xEA68: 0x9E8C,
    0xEA69: 0x9E92,
    0xEA6A: 0x9E95,
    0xEA6B: 0x9E91,
    0xEA6C: 0x9E9D,
    0xEA6D: 0x9EA5,
    0xEA6E: 0x9EA9,
    0xEA6F: 0x9EB8,
    0xEA70: 0x9EAA,
    0xEA71: 0x9EAD,
    0xEA72: 0x9761,
    0xEA73: 0x9ECC,
    0xEA74: 0x9ECE,
    0xEA75: 0x9ECF,
    0xEA76: 0x9ED0,
    0xEA77: 0x9ED4,
    0xEA78: 0x9EDC,
    0xEA79: 0x9EDE,
    0xEA7A: 0x9EDD,
    0xEA7B: 0x9EE0,
    0xEA7C: 0x9EE5,
    0xEA7D: 0x9EE8,
    0xEA7E: 0x9EEF,
    0xEA80: 0x9EF4,
    0xEA81: 0x9EF6,
    0xEA82: 0x9EF7,
    0xEA83: 0x9EF9,
    0xEA84: 0x9EFB,
    0xEA85: 0x9EFC,
    0xEA86: 0x9EFD,
    0xEA87: 0x9F07,
    0xEA88: 0x9F08,
    0xEA89: 0x76B7,
    0xEA8A: 0x9F15,
    0xEA8B: 0x9F21,
    0xEA8C: 0x9F2C,
    0xEA8D: 0x9F3E,
    0xEA8E: 0x9F4A,
    0xEA8F: 0x9F52,
    0xEA90: 0x9F54,
    0xEA91: 0x9F63,
    0xEA92: 0x9F5F,
    0xEA93: 0x9F60,
    0xEA94: 0x9F61,
    0xEA95: 0x9F66,
    0xEA96: 0x9F67,
    0xEA97: 0x9F6C,
    0xEA98: 0x9F6A,
    0xEA99: 0x9F77,
    0xEA9A: 0x9F72,
    0xEA9B: 0x9F76,
    0xEA9C: 0x9F95,
    0xEA9D: 0x9F9C,
    0xEA9E: 0x9FA0,
    0xEA9F: 0x582F,
    0xEAA0: 0x69C7,
    0xEAA1: 0x9059,
    0xEAA2: 0x7464,
    0xEAA3: 0x51DC,
    0xEAA4: 0x7199,
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GenericGF_1 = __webpack_require__(1);
var GenericGFPoly_1 = __webpack_require__(2);
function runEuclideanAlgorithm(field, a, b, R) {
    // Assume a's degree is >= b's
    if (a.degree() < b.degree()) {
        _a = [b, a], a = _a[0], b = _a[1];
    }
    var rLast = a;
    var r = b;
    var tLast = field.zero;
    var t = field.one;
    // Run Euclidean algorithm until r's degree is less than R/2
    while (r.degree() >= R / 2) {
        var rLastLast = rLast;
        var tLastLast = tLast;
        rLast = r;
        tLast = t;
        // Divide rLastLast by rLast, with quotient in q and remainder in r
        if (rLast.isZero()) {
            // Euclidean algorithm already terminated?
            return null;
        }
        r = rLastLast;
        var q = field.zero;
        var denominatorLeadingTerm = rLast.getCoefficient(rLast.degree());
        var dltInverse = field.inverse(denominatorLeadingTerm);
        while (r.degree() >= rLast.degree() && !r.isZero()) {
            var degreeDiff = r.degree() - rLast.degree();
            var scale = field.multiply(r.getCoefficient(r.degree()), dltInverse);
            q = q.addOrSubtract(field.buildMonomial(degreeDiff, scale));
            r = r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff, scale));
        }
        t = q.multiplyPoly(tLast).addOrSubtract(tLastLast);
        if (r.degree() >= rLast.degree()) {
            return null;
        }
    }
    var sigmaTildeAtZero = t.getCoefficient(0);
    if (sigmaTildeAtZero === 0) {
        return null;
    }
    var inverse = field.inverse(sigmaTildeAtZero);
    return [t.multiply(inverse), r.multiply(inverse)];
    var _a;
}
function findErrorLocations(field, errorLocator) {
    // This is a direct application of Chien's search
    var numErrors = errorLocator.degree();
    if (numErrors === 1) {
        return [errorLocator.getCoefficient(1)];
    }
    var result = new Array(numErrors);
    var errorCount = 0;
    for (var i = 1; i < field.size && errorCount < numErrors; i++) {
        if (errorLocator.evaluateAt(i) === 0) {
            result[errorCount] = field.inverse(i);
            errorCount++;
        }
    }
    if (errorCount !== numErrors) {
        return null;
    }
    return result;
}
function findErrorMagnitudes(field, errorEvaluator, errorLocations) {
    // This is directly applying Forney's Formula
    var s = errorLocations.length;
    var result = new Array(s);
    for (var i = 0; i < s; i++) {
        var xiInverse = field.inverse(errorLocations[i]);
        var denominator = 1;
        for (var j = 0; j < s; j++) {
            if (i !== j) {
                denominator = field.multiply(denominator, GenericGF_1.addOrSubtractGF(1, field.multiply(errorLocations[j], xiInverse)));
            }
        }
        result[i] = field.multiply(errorEvaluator.evaluateAt(xiInverse), field.inverse(denominator));
        if (field.generatorBase !== 0) {
            result[i] = field.multiply(result[i], xiInverse);
        }
    }
    return result;
}
function decode(bytes, twoS) {
    var outputBytes = new Uint8ClampedArray(bytes.length);
    outputBytes.set(bytes);
    var field = new GenericGF_1.default(0x011D, 256, 0); // x^8 + x^4 + x^3 + x^2 + 1
    var poly = new GenericGFPoly_1.default(field, outputBytes);
    var syndromeCoefficients = new Uint8ClampedArray(twoS);
    var error = false;
    for (var s = 0; s < twoS; s++) {
        var evaluation = poly.evaluateAt(field.exp(s + field.generatorBase));
        syndromeCoefficients[syndromeCoefficients.length - 1 - s] = evaluation;
        if (evaluation !== 0) {
            error = true;
        }
    }
    if (!error) {
        return outputBytes;
    }
    var syndrome = new GenericGFPoly_1.default(field, syndromeCoefficients);
    var sigmaOmega = runEuclideanAlgorithm(field, field.buildMonomial(twoS, 1), syndrome, twoS);
    if (sigmaOmega === null) {
        return null;
    }
    var errorLocations = findErrorLocations(field, sigmaOmega[0]);
    if (errorLocations == null) {
        return null;
    }
    var errorMagnitudes = findErrorMagnitudes(field, sigmaOmega[1], errorLocations);
    for (var i = 0; i < errorLocations.length; i++) {
        var position = outputBytes.length - 1 - field.log(errorLocations[i]);
        if (position < 0) {
            return null;
        }
        outputBytes[position] = GenericGF_1.addOrSubtractGF(outputBytes[position], errorMagnitudes[i]);
    }
    return outputBytes;
}
exports.decode = decode;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSIONS = [
    {
        infoBits: null,
        versionNumber: 1,
        alignmentPatternCenters: [],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 7,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 19 }],
            },
            {
                ecCodewordsPerBlock: 10,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 16 }],
            },
            {
                ecCodewordsPerBlock: 13,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 13 }],
            },
            {
                ecCodewordsPerBlock: 17,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 9 }],
            },
        ],
    },
    {
        infoBits: null,
        versionNumber: 2,
        alignmentPatternCenters: [6, 18],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 10,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 34 }],
            },
            {
                ecCodewordsPerBlock: 16,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 28 }],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 22 }],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 16 }],
            },
        ],
    },
    {
        infoBits: null,
        versionNumber: 3,
        alignmentPatternCenters: [6, 22],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 15,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 55 }],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 44 }],
            },
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 17 }],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 13 }],
            },
        ],
    },
    {
        infoBits: null,
        versionNumber: 4,
        alignmentPatternCenters: [6, 26],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 20,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 80 }],
            },
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 32 }],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 24 }],
            },
            {
                ecCodewordsPerBlock: 16,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 9 }],
            },
        ],
    },
    {
        infoBits: null,
        versionNumber: 5,
        alignmentPatternCenters: [6, 30],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 108 }],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 43 }],
            },
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 15 },
                    { numBlocks: 2, dataCodewordsPerBlock: 16 },
                ],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 11 },
                    { numBlocks: 2, dataCodewordsPerBlock: 12 },
                ],
            },
        ],
    },
    {
        infoBits: null,
        versionNumber: 6,
        alignmentPatternCenters: [6, 34],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 68 }],
            },
            {
                ecCodewordsPerBlock: 16,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 27 }],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 19 }],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 15 }],
            },
        ],
    },
    {
        infoBits: 0x07C94,
        versionNumber: 7,
        alignmentPatternCenters: [6, 22, 38],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 20,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 78 }],
            },
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 31 }],
            },
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 14 },
                    { numBlocks: 4, dataCodewordsPerBlock: 15 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 13 },
                    { numBlocks: 1, dataCodewordsPerBlock: 14 },
                ],
            },
        ],
    },
    {
        infoBits: 0x085BC,
        versionNumber: 8,
        alignmentPatternCenters: [6, 24, 42],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 97 }],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 38 },
                    { numBlocks: 2, dataCodewordsPerBlock: 39 },
                ],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 18 },
                    { numBlocks: 2, dataCodewordsPerBlock: 19 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 14 },
                    { numBlocks: 2, dataCodewordsPerBlock: 15 },
                ],
            },
        ],
    },
    {
        infoBits: 0x09A99,
        versionNumber: 9,
        alignmentPatternCenters: [6, 26, 46],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 116 }],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 36 },
                    { numBlocks: 2, dataCodewordsPerBlock: 37 },
                ],
            },
            {
                ecCodewordsPerBlock: 20,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 16 },
                    { numBlocks: 4, dataCodewordsPerBlock: 17 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 12 },
                    { numBlocks: 4, dataCodewordsPerBlock: 13 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0A4D3,
        versionNumber: 10,
        alignmentPatternCenters: [6, 28, 50],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 18,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 68 },
                    { numBlocks: 2, dataCodewordsPerBlock: 69 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 43 },
                    { numBlocks: 1, dataCodewordsPerBlock: 44 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 19 },
                    { numBlocks: 2, dataCodewordsPerBlock: 20 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 15 },
                    { numBlocks: 2, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0BBF6,
        versionNumber: 11,
        alignmentPatternCenters: [6, 30, 54],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 20,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 81 }],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 1, dataCodewordsPerBlock: 50 },
                    { numBlocks: 4, dataCodewordsPerBlock: 51 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 22 },
                    { numBlocks: 4, dataCodewordsPerBlock: 23 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 12 },
                    { numBlocks: 8, dataCodewordsPerBlock: 13 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0C762,
        versionNumber: 12,
        alignmentPatternCenters: [6, 32, 58],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 92 },
                    { numBlocks: 2, dataCodewordsPerBlock: 93 },
                ],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 36 },
                    { numBlocks: 2, dataCodewordsPerBlock: 37 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 20 },
                    { numBlocks: 6, dataCodewordsPerBlock: 21 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 14 },
                    { numBlocks: 4, dataCodewordsPerBlock: 15 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0D847,
        versionNumber: 13,
        alignmentPatternCenters: [6, 34, 62],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 107 }],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 37 },
                    { numBlocks: 1, dataCodewordsPerBlock: 38 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 20 },
                    { numBlocks: 4, dataCodewordsPerBlock: 21 },
                ],
            },
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 12, dataCodewordsPerBlock: 11 },
                    { numBlocks: 4, dataCodewordsPerBlock: 12 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0E60D,
        versionNumber: 14,
        alignmentPatternCenters: [6, 26, 46, 66],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 115 },
                    { numBlocks: 1, dataCodewordsPerBlock: 116 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 40 },
                    { numBlocks: 5, dataCodewordsPerBlock: 41 },
                ],
            },
            {
                ecCodewordsPerBlock: 20,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 16 },
                    { numBlocks: 5, dataCodewordsPerBlock: 17 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 12 },
                    { numBlocks: 5, dataCodewordsPerBlock: 13 },
                ],
            },
        ],
    },
    {
        infoBits: 0x0F928,
        versionNumber: 15,
        alignmentPatternCenters: [6, 26, 48, 70],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 22,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 87 },
                    { numBlocks: 1, dataCodewordsPerBlock: 88 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 41 },
                    { numBlocks: 5, dataCodewordsPerBlock: 42 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 24 },
                    { numBlocks: 7, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 12 },
                    { numBlocks: 7, dataCodewordsPerBlock: 13 },
                ],
            },
        ],
    },
    {
        infoBits: 0x10B78,
        versionNumber: 16,
        alignmentPatternCenters: [6, 26, 50, 74],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 98 },
                    { numBlocks: 1, dataCodewordsPerBlock: 99 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 45 },
                    { numBlocks: 3, dataCodewordsPerBlock: 46 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [
                    { numBlocks: 15, dataCodewordsPerBlock: 19 },
                    { numBlocks: 2, dataCodewordsPerBlock: 20 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 15 },
                    { numBlocks: 13, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1145D,
        versionNumber: 17,
        alignmentPatternCenters: [6, 30, 54, 78],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 1, dataCodewordsPerBlock: 107 },
                    { numBlocks: 5, dataCodewordsPerBlock: 108 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 46 },
                    { numBlocks: 1, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 1, dataCodewordsPerBlock: 22 },
                    { numBlocks: 15, dataCodewordsPerBlock: 23 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 14 },
                    { numBlocks: 17, dataCodewordsPerBlock: 15 },
                ],
            },
        ],
    },
    {
        infoBits: 0x12A17,
        versionNumber: 18,
        alignmentPatternCenters: [6, 30, 56, 82],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 120 },
                    { numBlocks: 1, dataCodewordsPerBlock: 121 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 9, dataCodewordsPerBlock: 43 },
                    { numBlocks: 4, dataCodewordsPerBlock: 44 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 22 },
                    { numBlocks: 1, dataCodewordsPerBlock: 23 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 14 },
                    { numBlocks: 19, dataCodewordsPerBlock: 15 },
                ],
            },
        ],
    },
    {
        infoBits: 0x13532,
        versionNumber: 19,
        alignmentPatternCenters: [6, 30, 58, 86],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 113 },
                    { numBlocks: 4, dataCodewordsPerBlock: 114 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 44 },
                    { numBlocks: 11, dataCodewordsPerBlock: 45 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 21 },
                    { numBlocks: 4, dataCodewordsPerBlock: 22 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 9, dataCodewordsPerBlock: 13 },
                    { numBlocks: 16, dataCodewordsPerBlock: 14 },
                ],
            },
        ],
    },
    {
        infoBits: 0x149A6,
        versionNumber: 20,
        alignmentPatternCenters: [6, 34, 62, 90],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 107 },
                    { numBlocks: 5, dataCodewordsPerBlock: 108 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 41 },
                    { numBlocks: 13, dataCodewordsPerBlock: 42 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 15, dataCodewordsPerBlock: 24 },
                    { numBlocks: 5, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 15, dataCodewordsPerBlock: 15 },
                    { numBlocks: 10, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x15683,
        versionNumber: 21,
        alignmentPatternCenters: [6, 28, 50, 72, 94],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 116 },
                    { numBlocks: 4, dataCodewordsPerBlock: 117 },
                ],
            },
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [{ numBlocks: 17, dataCodewordsPerBlock: 42 }],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 22 },
                    { numBlocks: 6, dataCodewordsPerBlock: 23 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 16 },
                    { numBlocks: 6, dataCodewordsPerBlock: 17 },
                ],
            },
        ],
    },
    {
        infoBits: 0x168C9,
        versionNumber: 22,
        alignmentPatternCenters: [6, 26, 50, 74, 98],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 111 },
                    { numBlocks: 7, dataCodewordsPerBlock: 112 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [{ numBlocks: 17, dataCodewordsPerBlock: 46 }],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 24 },
                    { numBlocks: 16, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 24,
                ecBlocks: [{ numBlocks: 34, dataCodewordsPerBlock: 13 }],
            },
        ],
    },
    {
        infoBits: 0x177EC,
        versionNumber: 23,
        alignmentPatternCenters: [6, 30, 54, 74, 102],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 121 },
                    { numBlocks: 5, dataCodewordsPerBlock: 122 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 47 },
                    { numBlocks: 14, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 24 },
                    { numBlocks: 14, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 16, dataCodewordsPerBlock: 15 },
                    { numBlocks: 14, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x18EC4,
        versionNumber: 24,
        alignmentPatternCenters: [6, 28, 54, 80, 106],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 117 },
                    { numBlocks: 4, dataCodewordsPerBlock: 118 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 45 },
                    { numBlocks: 14, dataCodewordsPerBlock: 46 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 24 },
                    { numBlocks: 16, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 30, dataCodewordsPerBlock: 16 },
                    { numBlocks: 2, dataCodewordsPerBlock: 17 },
                ],
            },
        ],
    },
    {
        infoBits: 0x191E1,
        versionNumber: 25,
        alignmentPatternCenters: [6, 32, 58, 84, 110],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 26,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 106 },
                    { numBlocks: 4, dataCodewordsPerBlock: 107 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 47 },
                    { numBlocks: 13, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 24 },
                    { numBlocks: 22, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 22, dataCodewordsPerBlock: 15 },
                    { numBlocks: 13, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1AFAB,
        versionNumber: 26,
        alignmentPatternCenters: [6, 30, 58, 86, 114],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 114 },
                    { numBlocks: 2, dataCodewordsPerBlock: 115 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 46 },
                    { numBlocks: 4, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 28, dataCodewordsPerBlock: 22 },
                    { numBlocks: 6, dataCodewordsPerBlock: 23 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 33, dataCodewordsPerBlock: 16 },
                    { numBlocks: 4, dataCodewordsPerBlock: 17 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1B08E,
        versionNumber: 27,
        alignmentPatternCenters: [6, 34, 62, 90, 118],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 122 },
                    { numBlocks: 4, dataCodewordsPerBlock: 123 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 22, dataCodewordsPerBlock: 45 },
                    { numBlocks: 3, dataCodewordsPerBlock: 46 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 8, dataCodewordsPerBlock: 23 },
                    { numBlocks: 26, dataCodewordsPerBlock: 24 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 12, dataCodewordsPerBlock: 15 },
                    { numBlocks: 28, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1CC1A,
        versionNumber: 28,
        alignmentPatternCenters: [6, 26, 50, 74, 98, 122],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 117 },
                    { numBlocks: 10, dataCodewordsPerBlock: 118 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 3, dataCodewordsPerBlock: 45 },
                    { numBlocks: 23, dataCodewordsPerBlock: 46 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 24 },
                    { numBlocks: 31, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 15 },
                    { numBlocks: 31, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1D33F,
        versionNumber: 29,
        alignmentPatternCenters: [6, 30, 54, 78, 102, 126],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 7, dataCodewordsPerBlock: 116 },
                    { numBlocks: 7, dataCodewordsPerBlock: 117 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 21, dataCodewordsPerBlock: 45 },
                    { numBlocks: 7, dataCodewordsPerBlock: 46 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 1, dataCodewordsPerBlock: 23 },
                    { numBlocks: 37, dataCodewordsPerBlock: 24 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 15 },
                    { numBlocks: 26, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1ED75,
        versionNumber: 30,
        alignmentPatternCenters: [6, 26, 52, 78, 104, 130],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 5, dataCodewordsPerBlock: 115 },
                    { numBlocks: 10, dataCodewordsPerBlock: 116 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 47 },
                    { numBlocks: 10, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 15, dataCodewordsPerBlock: 24 },
                    { numBlocks: 25, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 23, dataCodewordsPerBlock: 15 },
                    { numBlocks: 25, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x1F250,
        versionNumber: 31,
        alignmentPatternCenters: [6, 30, 56, 82, 108, 134],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 13, dataCodewordsPerBlock: 115 },
                    { numBlocks: 3, dataCodewordsPerBlock: 116 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 46 },
                    { numBlocks: 29, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 42, dataCodewordsPerBlock: 24 },
                    { numBlocks: 1, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 23, dataCodewordsPerBlock: 15 },
                    { numBlocks: 28, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x209D5,
        versionNumber: 32,
        alignmentPatternCenters: [6, 34, 60, 86, 112, 138],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [{ numBlocks: 17, dataCodewordsPerBlock: 115 }],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 46 },
                    { numBlocks: 23, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 24 },
                    { numBlocks: 35, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 15 },
                    { numBlocks: 35, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x216F0,
        versionNumber: 33,
        alignmentPatternCenters: [6, 30, 58, 86, 114, 142],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 115 },
                    { numBlocks: 1, dataCodewordsPerBlock: 116 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 14, dataCodewordsPerBlock: 46 },
                    { numBlocks: 21, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 29, dataCodewordsPerBlock: 24 },
                    { numBlocks: 19, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 11, dataCodewordsPerBlock: 15 },
                    { numBlocks: 46, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x228BA,
        versionNumber: 34,
        alignmentPatternCenters: [6, 34, 62, 90, 118, 146],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 13, dataCodewordsPerBlock: 115 },
                    { numBlocks: 6, dataCodewordsPerBlock: 116 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 14, dataCodewordsPerBlock: 46 },
                    { numBlocks: 23, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 44, dataCodewordsPerBlock: 24 },
                    { numBlocks: 7, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 59, dataCodewordsPerBlock: 16 },
                    { numBlocks: 1, dataCodewordsPerBlock: 17 },
                ],
            },
        ],
    },
    {
        infoBits: 0x2379F,
        versionNumber: 35,
        alignmentPatternCenters: [6, 30, 54, 78, 102, 126, 150],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 12, dataCodewordsPerBlock: 121 },
                    { numBlocks: 7, dataCodewordsPerBlock: 122 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 12, dataCodewordsPerBlock: 47 },
                    { numBlocks: 26, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 39, dataCodewordsPerBlock: 24 },
                    { numBlocks: 14, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 22, dataCodewordsPerBlock: 15 },
                    { numBlocks: 41, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x24B0B,
        versionNumber: 36,
        alignmentPatternCenters: [6, 24, 50, 76, 102, 128, 154],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 121 },
                    { numBlocks: 14, dataCodewordsPerBlock: 122 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 6, dataCodewordsPerBlock: 47 },
                    { numBlocks: 34, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 46, dataCodewordsPerBlock: 24 },
                    { numBlocks: 10, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 2, dataCodewordsPerBlock: 15 },
                    { numBlocks: 64, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x2542E,
        versionNumber: 37,
        alignmentPatternCenters: [6, 28, 54, 80, 106, 132, 158],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 17, dataCodewordsPerBlock: 122 },
                    { numBlocks: 4, dataCodewordsPerBlock: 123 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 29, dataCodewordsPerBlock: 46 },
                    { numBlocks: 14, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 49, dataCodewordsPerBlock: 24 },
                    { numBlocks: 10, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 24, dataCodewordsPerBlock: 15 },
                    { numBlocks: 46, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x26A64,
        versionNumber: 38,
        alignmentPatternCenters: [6, 32, 58, 84, 110, 136, 162],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 4, dataCodewordsPerBlock: 122 },
                    { numBlocks: 18, dataCodewordsPerBlock: 123 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 13, dataCodewordsPerBlock: 46 },
                    { numBlocks: 32, dataCodewordsPerBlock: 47 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 48, dataCodewordsPerBlock: 24 },
                    { numBlocks: 14, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 42, dataCodewordsPerBlock: 15 },
                    { numBlocks: 32, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x27541,
        versionNumber: 39,
        alignmentPatternCenters: [6, 26, 54, 82, 110, 138, 166],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 20, dataCodewordsPerBlock: 117 },
                    { numBlocks: 4, dataCodewordsPerBlock: 118 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 40, dataCodewordsPerBlock: 47 },
                    { numBlocks: 7, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 43, dataCodewordsPerBlock: 24 },
                    { numBlocks: 22, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 10, dataCodewordsPerBlock: 15 },
                    { numBlocks: 67, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
    {
        infoBits: 0x28C69,
        versionNumber: 40,
        alignmentPatternCenters: [6, 30, 58, 86, 114, 142, 170],
        errorCorrectionLevels: [
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 19, dataCodewordsPerBlock: 118 },
                    { numBlocks: 6, dataCodewordsPerBlock: 119 },
                ],
            },
            {
                ecCodewordsPerBlock: 28,
                ecBlocks: [
                    { numBlocks: 18, dataCodewordsPerBlock: 47 },
                    { numBlocks: 31, dataCodewordsPerBlock: 48 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 34, dataCodewordsPerBlock: 24 },
                    { numBlocks: 34, dataCodewordsPerBlock: 25 },
                ],
            },
            {
                ecCodewordsPerBlock: 30,
                ecBlocks: [
                    { numBlocks: 20, dataCodewordsPerBlock: 15 },
                    { numBlocks: 61, dataCodewordsPerBlock: 16 },
                ],
            },
        ],
    },
];


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BitMatrix_1 = __webpack_require__(0);
function squareToQuadrilateral(p1, p2, p3, p4) {
    var dx3 = p1.x - p2.x + p3.x - p4.x;
    var dy3 = p1.y - p2.y + p3.y - p4.y;
    if (dx3 === 0 && dy3 === 0) {
        return {
            a11: p2.x - p1.x,
            a12: p2.y - p1.y,
            a13: 0,
            a21: p3.x - p2.x,
            a22: p3.y - p2.y,
            a23: 0,
            a31: p1.x,
            a32: p1.y,
            a33: 1,
        };
    }
    else {
        var dx1 = p2.x - p3.x;
        var dx2 = p4.x - p3.x;
        var dy1 = p2.y - p3.y;
        var dy2 = p4.y - p3.y;
        var denominator = dx1 * dy2 - dx2 * dy1;
        var a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
        var a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
        return {
            a11: p2.x - p1.x + a13 * p2.x,
            a12: p2.y - p1.y + a13 * p2.y,
            a13: a13,
            a21: p4.x - p1.x + a23 * p4.x,
            a22: p4.y - p1.y + a23 * p4.y,
            a23: a23,
            a31: p1.x,
            a32: p1.y,
            a33: 1,
        };
    }
}
function quadrilateralToSquare(p1, p2, p3, p4) {
    // Here, the adjoint serves as the inverse:
    var sToQ = squareToQuadrilateral(p1, p2, p3, p4);
    return {
        a11: sToQ.a22 * sToQ.a33 - sToQ.a23 * sToQ.a32,
        a12: sToQ.a13 * sToQ.a32 - sToQ.a12 * sToQ.a33,
        a13: sToQ.a12 * sToQ.a23 - sToQ.a13 * sToQ.a22,
        a21: sToQ.a23 * sToQ.a31 - sToQ.a21 * sToQ.a33,
        a22: sToQ.a11 * sToQ.a33 - sToQ.a13 * sToQ.a31,
        a23: sToQ.a13 * sToQ.a21 - sToQ.a11 * sToQ.a23,
        a31: sToQ.a21 * sToQ.a32 - sToQ.a22 * sToQ.a31,
        a32: sToQ.a12 * sToQ.a31 - sToQ.a11 * sToQ.a32,
        a33: sToQ.a11 * sToQ.a22 - sToQ.a12 * sToQ.a21,
    };
}
function times(a, b) {
    return {
        a11: a.a11 * b.a11 + a.a21 * b.a12 + a.a31 * b.a13,
        a12: a.a12 * b.a11 + a.a22 * b.a12 + a.a32 * b.a13,
        a13: a.a13 * b.a11 + a.a23 * b.a12 + a.a33 * b.a13,
        a21: a.a11 * b.a21 + a.a21 * b.a22 + a.a31 * b.a23,
        a22: a.a12 * b.a21 + a.a22 * b.a22 + a.a32 * b.a23,
        a23: a.a13 * b.a21 + a.a23 * b.a22 + a.a33 * b.a23,
        a31: a.a11 * b.a31 + a.a21 * b.a32 + a.a31 * b.a33,
        a32: a.a12 * b.a31 + a.a22 * b.a32 + a.a32 * b.a33,
        a33: a.a13 * b.a31 + a.a23 * b.a32 + a.a33 * b.a33,
    };
}
function extract(image, location) {
    var qToS = quadrilateralToSquare({ x: 3.5, y: 3.5 }, { x: location.dimension - 3.5, y: 3.5 }, { x: location.dimension - 6.5, y: location.dimension - 6.5 }, { x: 3.5, y: location.dimension - 3.5 });
    var sToQ = squareToQuadrilateral(location.topLeft, location.topRight, location.alignmentPattern, location.bottomLeft);
    var transform = times(sToQ, qToS);
    var matrix = BitMatrix_1.BitMatrix.createEmpty(location.dimension, location.dimension);
    var mappingFunction = function (x, y) {
        var denominator = transform.a13 * x + transform.a23 * y + transform.a33;
        return {
            x: (transform.a11 * x + transform.a21 * y + transform.a31) / denominator,
            y: (transform.a12 * x + transform.a22 * y + transform.a32) / denominator,
        };
    };
    for (var y = 0; y < location.dimension; y++) {
        for (var x = 0; x < location.dimension; x++) {
            var xValue = x + 0.5;
            var yValue = y + 0.5;
            var sourcePixel = mappingFunction(xValue, yValue);
            matrix.set(x, y, image.get(Math.floor(sourcePixel.x), Math.floor(sourcePixel.y)));
        }
    }
    return {
        matrix: matrix,
        mappingFunction: mappingFunction,
    };
}
exports.extract = extract;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MAX_FINDERPATTERNS_TO_SEARCH = 4;
var MIN_QUAD_RATIO = 0.5;
var MAX_QUAD_RATIO = 1.5;
var distance = function (a, b) { return Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2)); };
function sum(values) {
    return values.reduce(function (a, b) { return a + b; });
}
// Takes three finder patterns and organizes them into topLeft, topRight, etc
function reorderFinderPatterns(pattern1, pattern2, pattern3) {
    // Find distances between pattern centers
    var oneTwoDistance = distance(pattern1, pattern2);
    var twoThreeDistance = distance(pattern2, pattern3);
    var oneThreeDistance = distance(pattern1, pattern3);
    var bottomLeft;
    var topLeft;
    var topRight;
    // Assume one closest to other two is B; A and C will just be guesses at first
    if (twoThreeDistance >= oneTwoDistance && twoThreeDistance >= oneThreeDistance) {
        _a = [pattern2, pattern1, pattern3], bottomLeft = _a[0], topLeft = _a[1], topRight = _a[2];
    }
    else if (oneThreeDistance >= twoThreeDistance && oneThreeDistance >= oneTwoDistance) {
        _b = [pattern1, pattern2, pattern3], bottomLeft = _b[0], topLeft = _b[1], topRight = _b[2];
    }
    else {
        _c = [pattern1, pattern3, pattern2], bottomLeft = _c[0], topLeft = _c[1], topRight = _c[2];
    }
    // Use cross product to figure out whether bottomLeft (A) and topRight (C) are correct or flipped in relation to topLeft (B)
    // This asks whether BC x BA has a positive z component, which is the arrangement we want. If it's negative, then
    // we've got it flipped around and should swap topRight and bottomLeft.
    if (((topRight.x - topLeft.x) * (bottomLeft.y - topLeft.y)) - ((topRight.y - topLeft.y) * (bottomLeft.x - topLeft.x)) < 0) {
        _d = [topRight, bottomLeft], bottomLeft = _d[0], topRight = _d[1];
    }
    return { bottomLeft: bottomLeft, topLeft: topLeft, topRight: topRight };
    var _a, _b, _c, _d;
}
// Computes the dimension (number of modules on a side) of the QR Code based on the position of the finder patterns
function computeDimension(topLeft, topRight, bottomLeft, matrix) {
    var moduleSize = (sum(countBlackWhiteRun(topLeft, bottomLeft, matrix, 5)) / 7 + // Divide by 7 since the ratio is 1:1:3:1:1
        sum(countBlackWhiteRun(topLeft, topRight, matrix, 5)) / 7 +
        sum(countBlackWhiteRun(bottomLeft, topLeft, matrix, 5)) / 7 +
        sum(countBlackWhiteRun(topRight, topLeft, matrix, 5)) / 7) / 4;
    if (moduleSize < 1) {
        throw new Error("Invalid module size");
    }
    var topDimension = Math.round(distance(topLeft, topRight) / moduleSize);
    var sideDimension = Math.round(distance(topLeft, bottomLeft) / moduleSize);
    var dimension = Math.floor((topDimension + sideDimension) / 2) + 7;
    switch (dimension % 4) {
        case 0:
            dimension++;
            break;
        case 2:
            dimension--;
            break;
    }
    return { dimension: dimension, moduleSize: moduleSize };
}
// Takes an origin point and an end point and counts the sizes of the black white run from the origin towards the end point.
// Returns an array of elements, representing the pixel size of the black white run.
// Uses a variant of http://en.wikipedia.org/wiki/Bresenham's_line_algorithm
function countBlackWhiteRunTowardsPoint(origin, end, matrix, length) {
    var switchPoints = [{ x: Math.floor(origin.x), y: Math.floor(origin.y) }];
    var steep = Math.abs(end.y - origin.y) > Math.abs(end.x - origin.x);
    var fromX;
    var fromY;
    var toX;
    var toY;
    if (steep) {
        fromX = Math.floor(origin.y);
        fromY = Math.floor(origin.x);
        toX = Math.floor(end.y);
        toY = Math.floor(end.x);
    }
    else {
        fromX = Math.floor(origin.x);
        fromY = Math.floor(origin.y);
        toX = Math.floor(end.x);
        toY = Math.floor(end.y);
    }
    var dx = Math.abs(toX - fromX);
    var dy = Math.abs(toY - fromY);
    var error = Math.floor(-dx / 2);
    var xStep = fromX < toX ? 1 : -1;
    var yStep = fromY < toY ? 1 : -1;
    var currentPixel = true;
    // Loop up until x == toX, but not beyond
    for (var x = fromX, y = fromY; x !== toX + xStep; x += xStep) {
        // Does current pixel mean we have moved white to black or vice versa?
        // Scanning black in state 0,2 and white in state 1, so if we find the wrong
        // color, advance to next state or end if we are in state 2 already
        var realX = steep ? y : x;
        var realY = steep ? x : y;
        if (matrix.get(realX, realY) !== currentPixel) {
            currentPixel = !currentPixel;
            switchPoints.push({ x: realX, y: realY });
            if (switchPoints.length === length + 1) {
                break;
            }
        }
        error += dy;
        if (error > 0) {
            if (y === toY) {
                break;
            }
            y += yStep;
            error -= dx;
        }
    }
    var distances = [];
    for (var i = 0; i < length; i++) {
        if (switchPoints[i] && switchPoints[i + 1]) {
            distances.push(distance(switchPoints[i], switchPoints[i + 1]));
        }
        else {
            distances.push(0);
        }
    }
    return distances;
}
// Takes an origin point and an end point and counts the sizes of the black white run in the origin point
// along the line that intersects with the end point. Returns an array of elements, representing the pixel sizes
// of the black white run. Takes a length which represents the number of switches from black to white to look for.
function countBlackWhiteRun(origin, end, matrix, length) {
    var rise = end.y - origin.y;
    var run = end.x - origin.x;
    var towardsEnd = countBlackWhiteRunTowardsPoint(origin, end, matrix, Math.ceil(length / 2));
    var awayFromEnd = countBlackWhiteRunTowardsPoint(origin, { x: origin.x - run, y: origin.y - rise }, matrix, Math.ceil(length / 2));
    var middleValue = towardsEnd.shift() + awayFromEnd.shift() - 1; // Substract one so we don't double count a pixel
    return (_a = awayFromEnd.concat(middleValue)).concat.apply(_a, towardsEnd);
    var _a;
}
// Takes in a black white run and an array of expected ratios. Returns the average size of the run as well as the "error" -
// that is the amount the run diverges from the expected ratio
function scoreBlackWhiteRun(sequence, ratios) {
    var averageSize = sum(sequence) / sum(ratios);
    var error = 0;
    ratios.forEach(function (ratio, i) {
        error += Math.pow((sequence[i] - ratio * averageSize), 2);
    });
    return { averageSize: averageSize, error: error };
}
// Takes an X,Y point and an array of sizes and scores the point against those ratios.
// For example for a finder pattern takes the ratio list of 1:1:3:1:1 and checks horizontal, vertical and diagonal ratios
// against that.
function scorePattern(point, ratios, matrix) {
    try {
        var horizontalRun = countBlackWhiteRun(point, { x: -1, y: point.y }, matrix, ratios.length);
        var verticalRun = countBlackWhiteRun(point, { x: point.x, y: -1 }, matrix, ratios.length);
        var topLeftPoint = {
            x: Math.max(0, point.x - point.y) - 1,
            y: Math.max(0, point.y - point.x) - 1,
        };
        var topLeftBottomRightRun = countBlackWhiteRun(point, topLeftPoint, matrix, ratios.length);
        var bottomLeftPoint = {
            x: Math.min(matrix.width, point.x + point.y) + 1,
            y: Math.min(matrix.height, point.y + point.x) + 1,
        };
        var bottomLeftTopRightRun = countBlackWhiteRun(point, bottomLeftPoint, matrix, ratios.length);
        var horzError = scoreBlackWhiteRun(horizontalRun, ratios);
        var vertError = scoreBlackWhiteRun(verticalRun, ratios);
        var diagDownError = scoreBlackWhiteRun(topLeftBottomRightRun, ratios);
        var diagUpError = scoreBlackWhiteRun(bottomLeftTopRightRun, ratios);
        var ratioError = Math.sqrt(horzError.error * horzError.error +
            vertError.error * vertError.error +
            diagDownError.error * diagDownError.error +
            diagUpError.error * diagUpError.error);
        var avgSize = (horzError.averageSize + vertError.averageSize + diagDownError.averageSize + diagUpError.averageSize) / 4;
        var sizeError = (Math.pow((horzError.averageSize - avgSize), 2) +
            Math.pow((vertError.averageSize - avgSize), 2) +
            Math.pow((diagDownError.averageSize - avgSize), 2) +
            Math.pow((diagUpError.averageSize - avgSize), 2)) / avgSize;
        return ratioError + sizeError;
    }
    catch (_a) {
        return Infinity;
    }
}
function locate(matrix) {
    var finderPatternQuads = [];
    var activeFinderPatternQuads = [];
    var alignmentPatternQuads = [];
    var activeAlignmentPatternQuads = [];
    var _loop_1 = function (y) {
        var length_1 = 0;
        var lastBit = false;
        var scans = [0, 0, 0, 0, 0];
        var _loop_2 = function (x) {
            var v = matrix.get(x, y);
            if (v === lastBit) {
                length_1++;
            }
            else {
                scans = [scans[1], scans[2], scans[3], scans[4], length_1];
                length_1 = 1;
                lastBit = v;
                // Do the last 5 color changes ~ match the expected ratio for a finder pattern? 1:1:3:1:1 of b:w:b:w:b
                var averageFinderPatternBlocksize = sum(scans) / 7;
                var validFinderPattern = Math.abs(scans[0] - averageFinderPatternBlocksize) < averageFinderPatternBlocksize &&
                    Math.abs(scans[1] - averageFinderPatternBlocksize) < averageFinderPatternBlocksize &&
                    Math.abs(scans[2] - 3 * averageFinderPatternBlocksize) < 3 * averageFinderPatternBlocksize &&
                    Math.abs(scans[3] - averageFinderPatternBlocksize) < averageFinderPatternBlocksize &&
                    Math.abs(scans[4] - averageFinderPatternBlocksize) < averageFinderPatternBlocksize &&
                    !v; // And make sure the current pixel is white since finder patterns are bordered in white
                // Do the last 3 color changes ~ match the expected ratio for an alignment pattern? 1:1:1 of w:b:w
                var averageAlignmentPatternBlocksize = sum(scans.slice(-3)) / 3;
                var validAlignmentPattern = Math.abs(scans[2] - averageAlignmentPatternBlocksize) < averageAlignmentPatternBlocksize &&
                    Math.abs(scans[3] - averageAlignmentPatternBlocksize) < averageAlignmentPatternBlocksize &&
                    Math.abs(scans[4] - averageAlignmentPatternBlocksize) < averageAlignmentPatternBlocksize &&
                    v; // Is the current pixel black since alignment patterns are bordered in black
                if (validFinderPattern) {
                    // Compute the start and end x values of the large center black square
                    var endX_1 = x - scans[3] - scans[4];
                    var startX_1 = endX_1 - scans[2];
                    var line = { startX: startX_1, endX: endX_1, y: y };
                    // Is there a quad directly above the current spot? If so, extend it with the new line. Otherwise, create a new quad with
                    // that line as the starting point.
                    var matchingQuads = activeFinderPatternQuads.filter(function (q) {
                        return (startX_1 >= q.bottom.startX && startX_1 <= q.bottom.endX) ||
                            (endX_1 >= q.bottom.startX && startX_1 <= q.bottom.endX) ||
                            (startX_1 <= q.bottom.startX && endX_1 >= q.bottom.endX && ((scans[2] / (q.bottom.endX - q.bottom.startX)) < MAX_QUAD_RATIO &&
                                (scans[2] / (q.bottom.endX - q.bottom.startX)) > MIN_QUAD_RATIO));
                    });
                    if (matchingQuads.length > 0) {
                        matchingQuads[0].bottom = line;
                    }
                    else {
                        activeFinderPatternQuads.push({ top: line, bottom: line });
                    }
                }
                if (validAlignmentPattern) {
                    // Compute the start and end x values of the center black square
                    var endX_2 = x - scans[4];
                    var startX_2 = endX_2 - scans[3];
                    var line = { startX: startX_2, y: y, endX: endX_2 };
                    // Is there a quad directly above the current spot? If so, extend it with the new line. Otherwise, create a new quad with
                    // that line as the starting point.
                    var matchingQuads = activeAlignmentPatternQuads.filter(function (q) {
                        return (startX_2 >= q.bottom.startX && startX_2 <= q.bottom.endX) ||
                            (endX_2 >= q.bottom.startX && startX_2 <= q.bottom.endX) ||
                            (startX_2 <= q.bottom.startX && endX_2 >= q.bottom.endX && ((scans[2] / (q.bottom.endX - q.bottom.startX)) < MAX_QUAD_RATIO &&
                                (scans[2] / (q.bottom.endX - q.bottom.startX)) > MIN_QUAD_RATIO));
                    });
                    if (matchingQuads.length > 0) {
                        matchingQuads[0].bottom = line;
                    }
                    else {
                        activeAlignmentPatternQuads.push({ top: line, bottom: line });
                    }
                }
            }
        };
        for (var x = -1; x <= matrix.width; x++) {
            _loop_2(x);
        }
        finderPatternQuads.push.apply(finderPatternQuads, activeFinderPatternQuads.filter(function (q) { return q.bottom.y !== y && q.bottom.y - q.top.y >= 2; }));
        activeFinderPatternQuads = activeFinderPatternQuads.filter(function (q) { return q.bottom.y === y; });
        alignmentPatternQuads.push.apply(alignmentPatternQuads, activeAlignmentPatternQuads.filter(function (q) { return q.bottom.y !== y; }));
        activeAlignmentPatternQuads = activeAlignmentPatternQuads.filter(function (q) { return q.bottom.y === y; });
    };
    for (var y = 0; y <= matrix.height; y++) {
        _loop_1(y);
    }
    finderPatternQuads.push.apply(finderPatternQuads, activeFinderPatternQuads.filter(function (q) { return q.bottom.y - q.top.y >= 2; }));
    alignmentPatternQuads.push.apply(alignmentPatternQuads, activeAlignmentPatternQuads);
    var finderPatternGroups = finderPatternQuads
        .filter(function (q) { return q.bottom.y - q.top.y >= 2; }) // All quads must be at least 2px tall since the center square is larger than a block
        .map(function (q) {
        var x = (q.top.startX + q.top.endX + q.bottom.startX + q.bottom.endX) / 4;
        var y = (q.top.y + q.bottom.y + 1) / 2;
        if (!matrix.get(Math.round(x), Math.round(y))) {
            return;
        }
        var lengths = [q.top.endX - q.top.startX, q.bottom.endX - q.bottom.startX, q.bottom.y - q.top.y + 1];
        var size = sum(lengths) / lengths.length;
        var score = scorePattern({ x: Math.round(x), y: Math.round(y) }, [1, 1, 3, 1, 1], matrix);
        return { score: score, x: x, y: y, size: size };
    })
        .filter(function (q) { return !!q; }) // Filter out any rejected quads from above
        .sort(function (a, b) { return a.score - b.score; })
        .map(function (point, i, finderPatterns) {
        if (i > MAX_FINDERPATTERNS_TO_SEARCH) {
            return null;
        }
        var otherPoints = finderPatterns
            .filter(function (p, ii) { return i !== ii; })
            .map(function (p) { return ({ x: p.x, y: p.y, score: p.score + (Math.pow((p.size - point.size), 2)) / point.size, size: p.size }); })
            .sort(function (a, b) { return a.score - b.score; });
        if (otherPoints.length < 2) {
            return null;
        }
        var score = point.score + otherPoints[0].score + otherPoints[1].score;
        return { points: [point].concat(otherPoints.slice(0, 2)), score: score };
    })
        .filter(function (q) { return !!q; }) // Filter out any rejected finder patterns from above
        .sort(function (a, b) { return a.score - b.score; });
    if (finderPatternGroups.length === 0) {
        return null;
    }
    var _a = reorderFinderPatterns(finderPatternGroups[0].points[0], finderPatternGroups[0].points[1], finderPatternGroups[0].points[2]), topRight = _a.topRight, topLeft = _a.topLeft, bottomLeft = _a.bottomLeft;
    // Now that we've found the three finder patterns we can determine the blockSize and the size of the QR code.
    // We'll use these to help find the alignment pattern but also later when we do the extraction.
    var dimension;
    var moduleSize;
    try {
        (_b = computeDimension(topLeft, topRight, bottomLeft, matrix), dimension = _b.dimension, moduleSize = _b.moduleSize);
    }
    catch (e) {
        return null;
    }
    // Now find the alignment pattern
    var bottomRightFinderPattern = {
        x: topRight.x - topLeft.x + bottomLeft.x,
        y: topRight.y - topLeft.y + bottomLeft.y,
    };
    var modulesBetweenFinderPatterns = ((distance(topLeft, bottomLeft) + distance(topLeft, topRight)) / 2 / moduleSize);
    var correctionToTopLeft = 1 - (3 / modulesBetweenFinderPatterns);
    var expectedAlignmentPattern = {
        x: topLeft.x + correctionToTopLeft * (bottomRightFinderPattern.x - topLeft.x),
        y: topLeft.y + correctionToTopLeft * (bottomRightFinderPattern.y - topLeft.y),
    };
    var alignmentPatterns = alignmentPatternQuads
        .map(function (q) {
        var x = (q.top.startX + q.top.endX + q.bottom.startX + q.bottom.endX) / 4;
        var y = (q.top.y + q.bottom.y + 1) / 2;
        if (!matrix.get(Math.floor(x), Math.floor(y))) {
            return;
        }
        var lengths = [q.top.endX - q.top.startX, q.bottom.endX - q.bottom.startX, (q.bottom.y - q.top.y + 1)];
        var size = sum(lengths) / lengths.length;
        var sizeScore = scorePattern({ x: Math.floor(x), y: Math.floor(y) }, [1, 1, 1], matrix);
        var score = sizeScore + distance({ x: x, y: y }, expectedAlignmentPattern);
        return { x: x, y: y, score: score };
    })
        .filter(function (v) { return !!v; })
        .sort(function (a, b) { return a.score - b.score; });
    // If there are less than 15 modules between finder patterns it's a version 1 QR code and as such has no alignmemnt pattern
    // so we can only use our best guess.
    var alignmentPattern = modulesBetweenFinderPatterns >= 15 && alignmentPatterns.length ? alignmentPatterns[0] : expectedAlignmentPattern;
    return {
        alignmentPattern: { x: alignmentPattern.x, y: alignmentPattern.y },
        bottomLeft: { x: bottomLeft.x, y: bottomLeft.y },
        dimension: dimension,
        topLeft: { x: topLeft.x, y: topLeft.y },
        topRight: { x: topRight.x, y: topRight.y },
    };
    var _b;
}
exports.locate = locate;


/***/ })
/******/ ])["default"];
});
},{}],"../node_modules/ms/index.js":[function(require,module,exports) {
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

},{}],"../node_modules/debug/src/common.js":[function(require,module,exports) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = require('ms');

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* Active `debug` instances.
	*/
	createDebug.instances = [];

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return match;
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.enabled = createDebug.enabled(namespace);
		debug.useColors = createDebug.useColors();
		debug.color = selectColor(namespace);
		debug.destroy = destroy;
		debug.extend = extend;
		// Debug.formatArgs = formatArgs;
		// debug.rawLog = rawLog;

		// env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		createDebug.instances.push(debug);

		return debug;
	}

	function destroy() {
		const index = createDebug.instances.indexOf(this);
		if (index !== -1) {
			createDebug.instances.splice(index, 1);
			return true;
		}
		return false;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}

		for (i = 0; i < createDebug.instances.length; i++) {
			const instance = createDebug.instances[i];
			instance.enabled = createDebug.enabled(instance.namespace);
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;

},{"ms":"../node_modules/ms/index.js"}],"../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../node_modules/debug/src/browser.js":[function(require,module,exports) {
var process = require("process");
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  const c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  let index = 0;
  let lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, match => {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log(...args) {
  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return typeof console === 'object' && console.log && console.log(...args);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  let r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = undefined;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = require('./common')(exports);
const {
  formatters
} = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};
},{"./common":"../node_modules/debug/src/common.js","process":"../node_modules/process/browser.js"}],"../node_modules/get-browser-rtc/index.js":[function(require,module,exports) {
// originally pulled out of simple-peer

module.exports = function getBrowserRTC () {
  if (typeof window === 'undefined') return null
  var wrtc = {
    RTCPeerConnection: window.RTCPeerConnection || window.mozRTCPeerConnection ||
      window.webkitRTCPeerConnection,
    RTCSessionDescription: window.RTCSessionDescription ||
      window.mozRTCSessionDescription || window.webkitRTCSessionDescription,
    RTCIceCandidate: window.RTCIceCandidate || window.mozRTCIceCandidate ||
      window.webkitRTCIceCandidate
  }
  if (!wrtc.RTCPeerConnection) return null
  return wrtc
}

},{}],"../node_modules/inherits/inherits_browser.js":[function(require,module,exports) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"../node_modules/base64-js/index.js":[function(require,module,exports) {
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],"../node_modules/ieee754/index.js":[function(require,module,exports) {
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],"../node_modules/isarray/index.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"../node_modules/buffer/index.js":[function(require,module,exports) {

var global = arguments[3];
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

},{"base64-js":"../node_modules/base64-js/index.js","ieee754":"../node_modules/ieee754/index.js","isarray":"../node_modules/isarray/index.js","buffer":"../node_modules/buffer/index.js"}],"../node_modules/safe-buffer/index.js":[function(require,module,exports) {

/* eslint-disable node/no-deprecated-api */
var buffer = require('buffer')
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}

},{"buffer":"../node_modules/buffer/index.js"}],"../node_modules/randombytes/browser.js":[function(require,module,exports) {

var global = arguments[3];
var process = require("process");
'use strict'

function oldBrowser () {
  throw new Error('Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11')
}

var Buffer = require('safe-buffer').Buffer
var crypto = global.crypto || global.msCrypto

if (crypto && crypto.getRandomValues) {
  module.exports = randomBytes
} else {
  module.exports = oldBrowser
}

function randomBytes (size, cb) {
  // phantomjs needs to throw
  if (size > 65536) throw new Error('requested too many random bytes')
  // in case browserify  isn't using the Uint8Array version
  var rawBytes = new global.Uint8Array(size)

  // This will not work in older browsers.
  // See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
  if (size > 0) {  // getRandomValues fails on IE if size == 0
    crypto.getRandomValues(rawBytes)
  }

  // XXX: phantomjs doesn't like a buffer being passed here
  var bytes = Buffer.from(rawBytes.buffer)

  if (typeof cb === 'function') {
    return process.nextTick(function () {
      cb(null, bytes)
    })
  }

  return bytes
}

},{"safe-buffer":"../node_modules/safe-buffer/index.js","process":"../node_modules/process/browser.js"}],"../node_modules/process-nextick-args/index.js":[function(require,module,exports) {
var process = require("process");
'use strict';

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = { nextTick: nextTick };
} else {
  module.exports = process
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}


},{"process":"../node_modules/process/browser.js"}],"../node_modules/events/events.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}

module.exports = EventEmitter; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

EventEmitter.defaultMaxListeners = 10; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.

EventEmitter.prototype.setMaxListeners = function (n) {
  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function (type) {
  var er, handler, len, args, i, listeners;
  if (!this._events) this._events = {}; // If there is no 'error' event listener then throw.

  if (type === 'error') {
    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
      er = arguments[1];

      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];
  if (isUndefined(handler)) return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;

      case 2:
        handler.call(this, arguments[1]);
        break;

      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower

      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;

    for (i = 0; i < len; i++) listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function (type, listener) {
  var m;
  if (!isFunction(listener)) throw TypeError('listener must be a function');
  if (!this._events) this._events = {}; // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".

  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
  if (!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;else if (isObject(this._events[type])) // If we've already got an array, just append.
    this._events[type].push(listener);else // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener]; // Check for listener leak

  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);

      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function (type, listener) {
  if (!isFunction(listener)) throw TypeError('listener must be a function');
  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);
  return this;
}; // emits a 'removeListener' event iff the listener was removed


EventEmitter.prototype.removeListener = function (type, listener) {
  var list, position, length, i;
  if (!isFunction(listener)) throw TypeError('listener must be a function');
  if (!this._events || !this._events[type]) return this;
  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener || isFunction(list.listener) && list.listener === listener) {
    delete this._events[type];
    if (this._events.removeListener) this.emit('removeListener', type, listener);
  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener) this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function (type) {
  var key, listeners;
  if (!this._events) return this; // not listening for removeListener, no need to emit

  if (!this._events.removeListener) {
    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
  }

  delete this._events[type];
  return this;
};

EventEmitter.prototype.listeners = function (type) {
  var ret;
  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function (type) {
  if (this._events) {
    var evlistener = this._events[type];
    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
  }

  return 0;
};

EventEmitter.listenerCount = function (emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}
},{}],"../node_modules/readable-stream/lib/internal/streams/stream-browser.js":[function(require,module,exports) {
module.exports = require('events').EventEmitter;

},{"events":"../node_modules/events/events.js"}],"../node_modules/core-util-is/lib/util.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

},{"buffer":"../node_modules/buffer/index.js"}],"../node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../node_modules/readable-stream/lib/internal/streams/BufferList.js":[function(require,module,exports) {

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = require('safe-buffer').Buffer;
var util = require('util');

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

if (util && util.inspect && util.inspect.custom) {
  module.exports.prototype[util.inspect.custom] = function () {
    var obj = util.inspect({ length: this.length });
    return this.constructor.name + ' ' + obj;
  };
}
},{"safe-buffer":"../node_modules/safe-buffer/index.js","util":"../node_modules/parcel-bundler/src/builtins/_empty.js"}],"../node_modules/readable-stream/lib/internal/streams/destroy.js":[function(require,module,exports) {
'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      pna.nextTick(emitErrorNT, this, err);
    }
    return this;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      pna.nextTick(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });

  return this;
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};
},{"process-nextick-args":"../node_modules/process-nextick-args/index.js"}],"../node_modules/util-deprecate/browser.js":[function(require,module,exports) {
var global = arguments[3];

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

},{}],"../node_modules/readable-stream/lib/_stream_writable.js":[function(require,module,exports) {
var process = require("process");

var global = arguments[3];
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.

'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: require('util-deprecate')
};
/*</replacement>*/

/*<replacement>*/
var Stream = require('./internal/streams/stream');
/*</replacement>*/

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

var destroyImpl = require('./internal/streams/destroy');

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var writableHwm = options.writableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;

    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  pna.nextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    pna.nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    pna.nextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    pna.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      pna.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
},{"process-nextick-args":"../node_modules/process-nextick-args/index.js","core-util-is":"../node_modules/core-util-is/lib/util.js","inherits":"../node_modules/inherits/inherits_browser.js","util-deprecate":"../node_modules/util-deprecate/browser.js","./internal/streams/stream":"../node_modules/readable-stream/lib/internal/streams/stream-browser.js","safe-buffer":"../node_modules/safe-buffer/index.js","./internal/streams/destroy":"../node_modules/readable-stream/lib/internal/streams/destroy.js","./_stream_duplex":"../node_modules/readable-stream/lib/_stream_duplex.js","process":"../node_modules/process/browser.js"}],"../node_modules/readable-stream/lib/_stream_duplex.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

{
  // avoid scope creep, the keys array can then be collected
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  pna.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  pna.nextTick(cb, err);
};
},{"process-nextick-args":"../node_modules/process-nextick-args/index.js","core-util-is":"../node_modules/core-util-is/lib/util.js","inherits":"../node_modules/inherits/inherits_browser.js","./_stream_readable":"../node_modules/readable-stream/lib/_stream_readable.js","./_stream_writable":"../node_modules/readable-stream/lib/_stream_writable.js"}],"../node_modules/string_decoder/lib/string_decoder.js":[function(require,module,exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}
},{"safe-buffer":"../node_modules/safe-buffer/index.js"}],"../node_modules/readable-stream/lib/_stream_readable.js":[function(require,module,exports) {

var global = arguments[3];
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = require('events').EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = require('./internal/streams/stream');
/*</replacement>*/

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var debugUtil = require('util');
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = require('./internal/streams/BufferList');
var destroyImpl = require('./internal/streams/destroy');
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var readableHwm = options.readableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    pna.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        pna.nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    pna.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;

  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  this._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    pna.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
},{"process-nextick-args":"../node_modules/process-nextick-args/index.js","isarray":"../node_modules/isarray/index.js","events":"../node_modules/events/events.js","./internal/streams/stream":"../node_modules/readable-stream/lib/internal/streams/stream-browser.js","safe-buffer":"../node_modules/safe-buffer/index.js","core-util-is":"../node_modules/core-util-is/lib/util.js","inherits":"../node_modules/inherits/inherits_browser.js","util":"../node_modules/parcel-bundler/src/builtins/_empty.js","./internal/streams/BufferList":"../node_modules/readable-stream/lib/internal/streams/BufferList.js","./internal/streams/destroy":"../node_modules/readable-stream/lib/internal/streams/destroy.js","./_stream_duplex":"../node_modules/readable-stream/lib/_stream_duplex.js","string_decoder/":"../node_modules/string_decoder/lib/string_decoder.js","process":"../node_modules/process/browser.js"}],"../node_modules/readable-stream/lib/_stream_transform.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

'use strict';

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return this.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);

  cb(er);

  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function') {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this2 = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this2.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');

  if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}
},{"./_stream_duplex":"../node_modules/readable-stream/lib/_stream_duplex.js","core-util-is":"../node_modules/core-util-is/lib/util.js","inherits":"../node_modules/inherits/inherits_browser.js"}],"../node_modules/readable-stream/lib/_stream_passthrough.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

'use strict';

module.exports = PassThrough;

var Transform = require('./_stream_transform');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};
},{"./_stream_transform":"../node_modules/readable-stream/lib/_stream_transform.js","core-util-is":"../node_modules/core-util-is/lib/util.js","inherits":"../node_modules/inherits/inherits_browser.js"}],"../node_modules/readable-stream/readable-browser.js":[function(require,module,exports) {
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

},{"./lib/_stream_readable.js":"../node_modules/readable-stream/lib/_stream_readable.js","./lib/_stream_writable.js":"../node_modules/readable-stream/lib/_stream_writable.js","./lib/_stream_duplex.js":"../node_modules/readable-stream/lib/_stream_duplex.js","./lib/_stream_transform.js":"../node_modules/readable-stream/lib/_stream_transform.js","./lib/_stream_passthrough.js":"../node_modules/readable-stream/lib/_stream_passthrough.js"}],"../node_modules/simple-peer/index.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
module.exports = Peer

var debug = require('debug')('simple-peer')
var getBrowserRTC = require('get-browser-rtc')
var inherits = require('inherits')
var randombytes = require('randombytes')
var stream = require('readable-stream')

var MAX_BUFFERED_AMOUNT = 64 * 1024
var ICECOMPLETE_TIMEOUT = 5 * 1000
var CHANNEL_CLOSING_TIMEOUT = 5 * 1000

inherits(Peer, stream.Duplex)

/**
 * WebRTC peer connection. Same API as node core `net.Socket`, plus a few extra methods.
 * Duplex stream.
 * @param {Object} opts
 */
function Peer (opts) {
  var self = this
  if (!(self instanceof Peer)) return new Peer(opts)

  self._id = randombytes(4).toString('hex').slice(0, 7)
  self._debug('new peer %o', opts)

  opts = Object.assign({
    allowHalfOpen: false
  }, opts)

  stream.Duplex.call(self, opts)

  self.channelName = opts.initiator
    ? opts.channelName || randombytes(20).toString('hex')
    : null

  // Needed by _transformConstraints, so set this early
  self._isChromium = typeof window !== 'undefined' && !!window.webkitRTCPeerConnection

  self.initiator = opts.initiator || false
  self.channelConfig = opts.channelConfig || Peer.channelConfig
  self.config = opts.config || Peer.config
  self.constraints = self._transformConstraints(opts.constraints || Peer.constraints)
  self.offerConstraints = self._transformConstraints(opts.offerConstraints || {})
  self.answerConstraints = self._transformConstraints(opts.answerConstraints || {})
  self.sdpTransform = opts.sdpTransform || function (sdp) { return sdp }
  self.streams = opts.streams || (opts.stream ? [opts.stream] : []) // support old "stream" option
  self.trickle = opts.trickle !== undefined ? opts.trickle : true
  self.allowHalfTrickle = opts.allowHalfTrickle !== undefined ? opts.allowHalfTrickle : false
  self.iceCompleteTimeout = opts.iceCompleteTimeout || ICECOMPLETE_TIMEOUT

  self.destroyed = false
  self.connected = false

  self.remoteAddress = undefined
  self.remoteFamily = undefined
  self.remotePort = undefined
  self.localAddress = undefined
  self.localPort = undefined

  self._wrtc = (opts.wrtc && typeof opts.wrtc === 'object')
    ? opts.wrtc
    : getBrowserRTC()

  if (!self._wrtc) {
    if (typeof window === 'undefined') {
      throw makeError('No WebRTC support: Specify `opts.wrtc` option in this environment', 'ERR_WEBRTC_SUPPORT')
    } else {
      throw makeError('No WebRTC support: Not a supported browser', 'ERR_WEBRTC_SUPPORT')
    }
  }

  self._pcReady = false
  self._channelReady = false
  self._iceComplete = false // ice candidate trickle done (got null candidate)
  self._iceCompleteTimer = null // send an offer/answer anyway after some timeout
  self._channel = null
  self._pendingCandidates = []

  self._isNegotiating = !self.initiator // is this peer waiting for negotiation to complete?
  self._batchedNegotiation = false // batch synchronous negotiations
  self._queuedNegotiation = false // is there a queued negotiation request?
  self._sendersAwaitingStable = []
  self._senderMap = new WeakMap()
  self._firstStable = true
  self._closingInterval = null

  self._remoteTracks = []
  self._remoteStreams = []

  self._chunk = null
  self._cb = null
  self._interval = null

  self._pc = new (self._wrtc.RTCPeerConnection)(self.config, self.constraints)
  if (self._isChromium || (self._wrtc && self._wrtc.electronDaemon)) { // HACK: Electron and Chromium need a promise shim
    shimPromiseAPI(self._wrtc.RTCPeerConnection, self._pc)
  }

  // We prefer feature detection whenever possible, but sometimes that's not
  // possible for certain implementations.
  self._isReactNativeWebrtc = typeof self._pc._peerConnectionId === 'number'

  self._pc.oniceconnectionstatechange = function () {
    self._onIceStateChange()
  }
  self._pc.onicegatheringstatechange = function () {
    self._onIceStateChange()
  }
  self._pc.onsignalingstatechange = function () {
    self._onSignalingStateChange()
  }
  self._pc.onicecandidate = function (event) {
    self._onIceCandidate(event)
  }

  // Other spec events, unused by this implementation:
  // - onconnectionstatechange
  // - onicecandidateerror
  // - onfingerprintfailure
  // - onnegotiationneeded

  if (self.initiator) {
    self._setupData({
      channel: self._pc.createDataChannel(self.channelName, self.channelConfig)
    })
  } else {
    self._pc.ondatachannel = function (event) {
      self._setupData(event)
    }
  }

  if ('addTrack' in self._pc) {
    if (self.streams) {
      self.streams.forEach(function (stream) {
        self.addStream(stream)
      })
    }
    self._pc.ontrack = function (event) {
      self._onTrack(event)
    }
  }

  if (self.initiator) {
    self._needsNegotiation()
  }

  self._onFinishBound = function () {
    self._onFinish()
  }
  self.once('finish', self._onFinishBound)
}

Peer.WEBRTC_SUPPORT = !!getBrowserRTC()

/**
 * Expose config, constraints, and data channel config for overriding all Peer
 * instances. Otherwise, just set opts.config, opts.constraints, or opts.channelConfig
 * when constructing a Peer.
 */
Peer.config = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302'
    },
    {
      urls: 'stun:global.stun.twilio.com:3478?transport=udp'
    }
  ]
}
Peer.constraints = {}
Peer.channelConfig = {}

Object.defineProperty(Peer.prototype, 'bufferSize', {
  get: function () {
    var self = this
    return (self._channel && self._channel.bufferedAmount) || 0
  }
})

Peer.prototype.address = function () {
  var self = this
  return { port: self.localPort, family: 'IPv4', address: self.localAddress }
}

Peer.prototype.signal = function (data) {
  var self = this
  if (self.destroyed) throw makeError('cannot signal after peer is destroyed', 'ERR_SIGNALING')
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (err) {
      data = {}
    }
  }
  self._debug('signal()')

  if (data.renegotiate && self.initiator) {
    self._debug('got request to renegotiate')
    self._needsNegotiation()
  }
  if (data.candidate) {
    if (self._pc.remoteDescription && self._pc.remoteDescription.type) self._addIceCandidate(data.candidate)
    else self._pendingCandidates.push(data.candidate)
  }
  if (data.sdp) {
    self._pc.setRemoteDescription(new (self._wrtc.RTCSessionDescription)(data)).then(function () {
      if (self.destroyed) return

      self._pendingCandidates.forEach(function (candidate) {
        self._addIceCandidate(candidate)
      })
      self._pendingCandidates = []

      if (self._pc.remoteDescription.type === 'offer') self._createAnswer()
    }).catch(function (err) { self.destroy(makeError(err, 'ERR_SET_REMOTE_DESCRIPTION')) })
  }
  if (!data.sdp && !data.candidate && !data.renegotiate) {
    self.destroy(makeError('signal() called with invalid signal data', 'ERR_SIGNALING'))
  }
}

Peer.prototype._addIceCandidate = function (candidate) {
  var self = this
  try {
    self._pc.addIceCandidate(
      new self._wrtc.RTCIceCandidate(candidate),
      noop,
      function (err) { self.destroy(makeError(err, 'ERR_ADD_ICE_CANDIDATE')) }
    )
  } catch (err) {
    self.destroy(makeError('error adding candidate: ' + err.message, 'ERR_ADD_ICE_CANDIDATE'))
  }
}

/**
 * Send text/binary data to the remote peer.
 * @param {ArrayBufferView|ArrayBuffer|Buffer|string|Blob} chunk
 */
Peer.prototype.send = function (chunk) {
  var self = this
  self._channel.send(chunk)
}

/**
 * Add a MediaStream to the connection.
 * @param {MediaStream} stream
 */
Peer.prototype.addStream = function (stream) {
  var self = this

  self._debug('addStream()')

  stream.getTracks().forEach(function (track) {
    self.addTrack(track, stream)
  })
}

/**
 * Add a MediaStreamTrack to the connection.
 * @param {MediaStreamTrack} track
 * @param {MediaStream} stream
 */
Peer.prototype.addTrack = function (track, stream) {
  var self = this

  self._debug('addTrack()')

  var sender = self._pc.addTrack(track, stream)
  var submap = self._senderMap.get(track) || new WeakMap() // nested WeakMaps map [track, stream] to sender
  submap.set(stream, sender)
  self._senderMap.set(track, submap)
  self._needsNegotiation()
}

/**
 * Replace a MediaStreamTrack by another in the connection.
 * @param {MediaStreamTrack} oldTrack
 * @param {MediaStreamTrack} newTrack
 * @param {MediaStream} stream
 */
Peer.prototype.replaceTrack = async function (oldTrack, newTrack, stream) {
  var self = this

  self._debug('replaceTrack()')

  var submap = self._senderMap.get(oldTrack)
  var sender = submap ? submap.get(stream) : null
  if (!sender) {
    self.destroy(new Error('Cannot replace track that was never added.'))
  }
  if (newTrack) self._senderMap.set(newTrack, submap)

  if (sender.replaceTrack != null) {
    await sender.replaceTrack(newTrack)
  } else {
    self.destroy(makeError('replaceTrack is not supported in this browser', 'ERR_UNSUPPORTED_REPLACETRACK'))
  }
}

/**
 * Remove a MediaStreamTrack from the connection.
 * @param {MediaStreamTrack} track
 * @param {MediaStream} stream
 */
Peer.prototype.removeTrack = function (track, stream) {
  var self = this

  self._debug('removeSender()')

  var submap = self._senderMap.get(track)
  var sender = submap ? submap.get(stream) : null
  if (!sender) {
    self.destroy(new Error('Cannot remove track that was never added.'))
  }
  try {
    self._pc.removeTrack(sender)
  } catch (err) {
    if (err.name === 'NS_ERROR_UNEXPECTED') {
      self._sendersAwaitingStable.push(sender) // HACK: Firefox must wait until (signalingState === stable) https://bugzilla.mozilla.org/show_bug.cgi?id=1133874
    } else {
      self.destroy(err)
    }
  }
}

/**
 * Remove a MediaStream from the connection.
 * @param {MediaStream} stream
 */
Peer.prototype.removeStream = function (stream) {
  var self = this

  self._debug('removeSenders()')

  stream.getTracks().forEach(function (track) {
    self.removeTrack(track, stream)
  })
}

Peer.prototype._needsNegotiation = function () {
  var self = this

  self._debug('_needsNegotiation')
  if (self._batchedNegotiation) return // batch synchronous renegotiations
  self._batchedNegotiation = true
  setTimeout(function () {
    self._batchedNegotiation = false
    self._debug('starting batched negotiation')
    self.negotiate()
  }, 0)
}

Peer.prototype.negotiate = function () {
  var self = this

  if (self.initiator) {
    if (self._isNegotiating) {
      self._queuedNegotiation = true
      self._debug('already negotiating, queueing')
    } else {
      self._debug('start negotiation')
      self._createOffer()
    }
  } else {
    if (!self._isNegotiating) {
      self._debug('requesting negotiation from initiator')
      self.emit('signal', { // request initiator to renegotiate
        renegotiate: true
      })
    }
  }
  self._isNegotiating = true
}

// TODO: Delete this method once readable-stream is updated to contain a default
// implementation of destroy() that automatically calls _destroy()
// See: https://github.com/nodejs/readable-stream/issues/283
Peer.prototype.destroy = function (err) {
  var self = this
  self._destroy(err, function () {})
}

Peer.prototype._destroy = function (err, cb) {
  var self = this
  if (self.destroyed) return

  self._debug('destroy (error: %s)', err && (err.message || err))

  self.readable = self.writable = false

  if (!self._readableState.ended) self.push(null)
  if (!self._writableState.finished) self.end()

  self.destroyed = true
  self.connected = false
  self._pcReady = false
  self._channelReady = false
  self._remoteTracks = null
  self._remoteStreams = null
  self._senderMap = null

  clearInterval(self._closingInterval)
  self._closingInterval = null

  clearInterval(self._interval)
  self._interval = null
  self._chunk = null
  self._cb = null

  if (self._onFinishBound) self.removeListener('finish', self._onFinishBound)
  self._onFinishBound = null

  if (self._channel) {
    try {
      self._channel.close()
    } catch (err) {}

    self._channel.onmessage = null
    self._channel.onopen = null
    self._channel.onclose = null
    self._channel.onerror = null
  }
  if (self._pc) {
    try {
      self._pc.close()
    } catch (err) {}

    self._pc.oniceconnectionstatechange = null
    self._pc.onicegatheringstatechange = null
    self._pc.onsignalingstatechange = null
    self._pc.onicecandidate = null
    if ('addTrack' in self._pc) {
      self._pc.ontrack = null
    }
    self._pc.ondatachannel = null
  }
  self._pc = null
  self._channel = null

  if (err) self.emit('error', err)
  self.emit('close')
  cb()
}

Peer.prototype._setupData = function (event) {
  var self = this
  if (!event.channel) {
    // In some situations `pc.createDataChannel()` returns `undefined` (in wrtc),
    // which is invalid behavior. Handle it gracefully.
    // See: https://github.com/feross/simple-peer/issues/163
    return self.destroy(makeError('Data channel event is missing `channel` property', 'ERR_DATA_CHANNEL'))
  }

  self._channel = event.channel
  self._channel.binaryType = 'arraybuffer'

  if (typeof self._channel.bufferedAmountLowThreshold === 'number') {
    self._channel.bufferedAmountLowThreshold = MAX_BUFFERED_AMOUNT
  }

  self.channelName = self._channel.label

  self._channel.onmessage = function (event) {
    self._onChannelMessage(event)
  }
  self._channel.onbufferedamountlow = function () {
    self._onChannelBufferedAmountLow()
  }
  self._channel.onopen = function () {
    self._onChannelOpen()
  }
  self._channel.onclose = function () {
    self._onChannelClose()
  }
  self._channel.onerror = function (err) {
    self.destroy(makeError(err, 'ERR_DATA_CHANNEL'))
  }

  // HACK: Chrome will sometimes get stuck in readyState "closing", let's check for this condition
  // https://bugs.chromium.org/p/chromium/issues/detail?id=882743
  var isClosing = false
  self._closingInterval = setInterval(function () { // No "onclosing" event
    if (self._channel && self._channel.readyState === 'closing') {
      if (isClosing) self._onChannelClose() // closing timed out: equivalent to onclose firing
      isClosing = true
    } else {
      isClosing = false
    }
  }, CHANNEL_CLOSING_TIMEOUT)
}

Peer.prototype._read = function () {}

Peer.prototype._write = function (chunk, encoding, cb) {
  var self = this
  if (self.destroyed) return cb(makeError('cannot write after peer is destroyed', 'ERR_DATA_CHANNEL'))

  if (self.connected) {
    try {
      self.send(chunk)
    } catch (err) {
      return self.destroy(makeError(err, 'ERR_DATA_CHANNEL'))
    }
    if (self._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
      self._debug('start backpressure: bufferedAmount %d', self._channel.bufferedAmount)
      self._cb = cb
    } else {
      cb(null)
    }
  } else {
    self._debug('write before connect')
    self._chunk = chunk
    self._cb = cb
  }
}

// When stream finishes writing, close socket. Half open connections are not
// supported.
Peer.prototype._onFinish = function () {
  var self = this
  if (self.destroyed) return

  if (self.connected) {
    destroySoon()
  } else {
    self.once('connect', destroySoon)
  }

  // Wait a bit before destroying so the socket flushes.
  // TODO: is there a more reliable way to accomplish this?
  function destroySoon () {
    setTimeout(function () {
      self.destroy()
    }, 1000)
  }
}

Peer.prototype._startIceCompleteTimeout = function () {
  debug('started iceComplete timeout')
  var self = this
  if (self.destroyed) return
  if (self._iceCompleteTimer) return
  self._iceCompleteTimer = setTimeout(function () {
    if (!self._iceComplete) {
      self._iceComplete = true
      self.emit('iceTimeout')
      self.emit('_iceComplete')
    }
  }, this.iceCompleteTimeout)
}

Peer.prototype._createOffer = function () {
  var self = this
  if (self.destroyed) return

  self._pc.createOffer(self.offerConstraints).then(function (offer) {
    if (self.destroyed) return
    if (!self.trickle && !self.allowHalfTrickle) offer.sdp = filterTrickle(offer.sdp)
    offer.sdp = self.sdpTransform(offer.sdp)
    self._pc.setLocalDescription(offer).then(onSuccess).catch(onError)

    function onSuccess () {
      self._debug('createOffer success')
      if (self.destroyed) return
      if (self.trickle || self._iceComplete) sendOffer()
      else self.once('_iceComplete', sendOffer) // wait for candidates
    }

    function onError (err) {
      self.destroy(makeError(err, 'ERR_SET_LOCAL_DESCRIPTION'))
    }

    function sendOffer () {
      if (self.destroyed) return
      var signal = self._pc.localDescription || offer
      self._debug('signal')
      self.emit('signal', {
        type: signal.type,
        sdp: signal.sdp
      })
    }
  }).catch(function (err) { self.destroy(makeError(err, 'ERR_CREATE_OFFER')) })
}

Peer.prototype._createAnswer = function () {
  var self = this
  if (self.destroyed) return

  self._pc.createAnswer(self.answerConstraints).then(function (answer) {
    if (self.destroyed) return
    if (!self.trickle && !self.allowHalfTrickle) answer.sdp = filterTrickle(answer.sdp)
    answer.sdp = self.sdpTransform(answer.sdp)
    self._pc.setLocalDescription(answer).then(onSuccess).catch(onError)

    function onSuccess () {
      if (self.destroyed) return
      if (self.trickle || self._iceComplete) sendAnswer()
      else self.once('_iceComplete', sendAnswer)
    }

    function onError (err) {
      self.destroy(makeError(err, 'ERR_SET_LOCAL_DESCRIPTION'))
    }

    function sendAnswer () {
      if (self.destroyed) return
      var signal = self._pc.localDescription || answer
      self._debug('signal')
      self.emit('signal', {
        type: signal.type,
        sdp: signal.sdp
      })
    }
  }).catch(function (err) { self.destroy(makeError(err, 'ERR_CREATE_ANSWER')) })
}

Peer.prototype._onIceStateChange = function () {
  var self = this
  if (self.destroyed) return
  var iceConnectionState = self._pc.iceConnectionState
  var iceGatheringState = self._pc.iceGatheringState

  self._debug(
    'iceStateChange (connection: %s) (gathering: %s)',
    iceConnectionState,
    iceGatheringState
  )
  self.emit('iceStateChange', iceConnectionState, iceGatheringState)

  if (iceConnectionState === 'connected' || iceConnectionState === 'completed') {
    self._pcReady = true
    self._maybeReady()
  }
  if (iceConnectionState === 'failed') {
    self.destroy(makeError('Ice connection failed.', 'ERR_ICE_CONNECTION_FAILURE'))
  }
  if (iceConnectionState === 'closed') {
    self.destroy(new Error('Ice connection closed.'))
  }
}

Peer.prototype.getStats = function (cb) {
  var self = this

  // Promise-based getStats() (standard)
  if (self._pc.getStats.length === 0) {
    self._pc.getStats().then(function (res) {
      var reports = []
      res.forEach(function (report) {
        reports.push(report)
      })
      cb(null, reports)
    }, function (err) { cb(err) })

  // Two-parameter callback-based getStats() (deprecated, former standard)
  } else if (self._isReactNativeWebrtc) {
    self._pc.getStats(null, function (res) {
      var reports = []
      res.forEach(function (report) {
        reports.push(report)
      })
      cb(null, reports)
    }, function (err) { cb(err) })

  // Single-parameter callback-based getStats() (non-standard)
  } else if (self._pc.getStats.length > 0) {
    self._pc.getStats(function (res) {
      // If we destroy connection in `connect` callback this code might happen to run when actual connection is already closed
      if (self.destroyed) return

      var reports = []
      res.result().forEach(function (result) {
        var report = {}
        result.names().forEach(function (name) {
          report[name] = result.stat(name)
        })
        report.id = result.id
        report.type = result.type
        report.timestamp = result.timestamp
        reports.push(report)
      })
      cb(null, reports)
    }, function (err) { cb(err) })

  // Unknown browser, skip getStats() since it's anyone's guess which style of
  // getStats() they implement.
  } else {
    cb(null, [])
  }
}

Peer.prototype._maybeReady = function () {
  var self = this
  self._debug('maybeReady pc %s channel %s', self._pcReady, self._channelReady)
  if (self.connected || self._connecting || !self._pcReady || !self._channelReady) return

  self._connecting = true

  // HACK: We can't rely on order here, for details see https://github.com/js-platform/node-webrtc/issues/339
  function findCandidatePair () {
    if (self.destroyed) return

    self.getStats(function (err, items) {
      if (self.destroyed) return

      // Treat getStats error as non-fatal. It's not essential.
      if (err) items = []

      var remoteCandidates = {}
      var localCandidates = {}
      var candidatePairs = {}
      var foundSelectedCandidatePair = false

      items.forEach(function (item) {
        // TODO: Once all browsers support the hyphenated stats report types, remove
        // the non-hypenated ones
        if (item.type === 'remotecandidate' || item.type === 'remote-candidate') {
          remoteCandidates[item.id] = item
        }
        if (item.type === 'localcandidate' || item.type === 'local-candidate') {
          localCandidates[item.id] = item
        }
        if (item.type === 'candidatepair' || item.type === 'candidate-pair') {
          candidatePairs[item.id] = item
        }
      })

      items.forEach(function (item) {
        // Spec-compliant
        if (item.type === 'transport' && item.selectedCandidatePairId) {
          setSelectedCandidatePair(candidatePairs[item.selectedCandidatePairId])
        }

        // Old implementations
        if (
          (item.type === 'googCandidatePair' && item.googActiveConnection === 'true') ||
          ((item.type === 'candidatepair' || item.type === 'candidate-pair') && item.selected)
        ) {
          setSelectedCandidatePair(item)
        }
      })

      function setSelectedCandidatePair (selectedCandidatePair) {
        foundSelectedCandidatePair = true

        var local = localCandidates[selectedCandidatePair.localCandidateId]

        if (local && local.ip) {
          // Spec
          self.localAddress = local.ip
          self.localPort = Number(local.port)
        } else if (local && local.ipAddress) {
          // Firefox
          self.localAddress = local.ipAddress
          self.localPort = Number(local.portNumber)
        } else if (typeof selectedCandidatePair.googLocalAddress === 'string') {
          // TODO: remove this once Chrome 58 is released
          local = selectedCandidatePair.googLocalAddress.split(':')
          self.localAddress = local[0]
          self.localPort = Number(local[1])
        }

        var remote = remoteCandidates[selectedCandidatePair.remoteCandidateId]

        if (remote && remote.ip) {
          // Spec
          self.remoteAddress = remote.ip
          self.remotePort = Number(remote.port)
        } else if (remote && remote.ipAddress) {
          // Firefox
          self.remoteAddress = remote.ipAddress
          self.remotePort = Number(remote.portNumber)
        } else if (typeof selectedCandidatePair.googRemoteAddress === 'string') {
          // TODO: remove this once Chrome 58 is released
          remote = selectedCandidatePair.googRemoteAddress.split(':')
          self.remoteAddress = remote[0]
          self.remotePort = Number(remote[1])
        }
        self.remoteFamily = 'IPv4'

        self._debug(
          'connect local: %s:%s remote: %s:%s',
          self.localAddress, self.localPort, self.remoteAddress, self.remotePort
        )
      }

      // Ignore candidate pair selection in browsers like Safari 11 that do not have any local or remote candidates
      // But wait until at least 1 candidate pair is available
      if (!foundSelectedCandidatePair && (!Object.keys(candidatePairs).length || Object.keys(localCandidates).length)) {
        setTimeout(findCandidatePair, 100)
        return
      } else {
        self._connecting = false
        self.connected = true
      }

      if (self._chunk) {
        try {
          self.send(self._chunk)
        } catch (err) {
          return self.destroy(makeError(err, 'ERR_DATA_CHANNEL'))
        }
        self._chunk = null
        self._debug('sent chunk from "write before connect"')

        var cb = self._cb
        self._cb = null
        cb(null)
      }

      // If `bufferedAmountLowThreshold` and 'onbufferedamountlow' are unsupported,
      // fallback to using setInterval to implement backpressure.
      if (typeof self._channel.bufferedAmountLowThreshold !== 'number') {
        self._interval = setInterval(function () { self._onInterval() }, 150)
        if (self._interval.unref) self._interval.unref()
      }

      self._debug('connect')
      self.emit('connect')
    })
  }
  findCandidatePair()
}

Peer.prototype._onInterval = function () {
  var self = this
  if (!self._cb || !self._channel || self._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
    return
  }
  self._onChannelBufferedAmountLow()
}

Peer.prototype._onSignalingStateChange = function () {
  var self = this
  if (self.destroyed) return

  if (self._pc.signalingState === 'stable' && !self._firstStable) {
    self._isNegotiating = false

    // HACK: Firefox doesn't yet support removing tracks when signalingState !== 'stable'
    self._debug('flushing sender queue', self._sendersAwaitingStable)
    self._sendersAwaitingStable.forEach(function (sender) {
      self._pc.removeTrack(sender)
      self._queuedNegotiation = true
    })
    self._sendersAwaitingStable = []

    if (self._queuedNegotiation) {
      self._debug('flushing negotiation queue')
      self._queuedNegotiation = false
      self._needsNegotiation() // negotiate again
    }

    self._debug('negotiate')
    self.emit('negotiate')
  }
  self._firstStable = false

  self._debug('signalingStateChange %s', self._pc.signalingState)
  self.emit('signalingStateChange', self._pc.signalingState)
}

Peer.prototype._onIceCandidate = function (event) {
  var self = this
  if (self.destroyed) return
  if (event.candidate && self.trickle) {
    self.emit('signal', {
      candidate: {
        candidate: event.candidate.candidate,
        sdpMLineIndex: event.candidate.sdpMLineIndex,
        sdpMid: event.candidate.sdpMid
      }
    })
  } else if (!event.candidate && !self._iceComplete) {
    self._iceComplete = true
    self.emit('_iceComplete')
  }
  // as soon as we've received one valid candidate start timeout
  if (event.candidate) {
    self._startIceCompleteTimeout()
  }
}

Peer.prototype._onChannelMessage = function (event) {
  var self = this
  if (self.destroyed) return
  var data = event.data
  if (data instanceof ArrayBuffer) data = Buffer.from(data)
  self.push(data)
}

Peer.prototype._onChannelBufferedAmountLow = function () {
  var self = this
  if (self.destroyed || !self._cb) return
  self._debug('ending backpressure: bufferedAmount %d', self._channel.bufferedAmount)
  var cb = self._cb
  self._cb = null
  cb(null)
}

Peer.prototype._onChannelOpen = function () {
  var self = this
  if (self.connected || self.destroyed) return
  self._debug('on channel open')
  self._channelReady = true
  self._maybeReady()
}

Peer.prototype._onChannelClose = function () {
  var self = this
  if (self.destroyed) return
  self._debug('on channel close')
  self.destroy()
}

Peer.prototype._onTrack = function (event) {
  var self = this
  if (self.destroyed) return

  event.streams.forEach(function (eventStream) {
    self._debug('on track')
    self.emit('track', event.track, eventStream)

    self._remoteTracks.push({
      track: event.track,
      stream: eventStream
    })

    if (self._remoteStreams.some(function (remoteStream) {
      return remoteStream.id === eventStream.id
    })) return // Only fire one 'stream' event, even though there may be multiple tracks per stream

    self._remoteStreams.push(eventStream)
    setTimeout(function () {
      self.emit('stream', eventStream) // ensure all tracks have been added
    }, 0)
  })
}

Peer.prototype.setConstraints = function (constraints) {
  var self = this
  if (self.initiator) {
    self.offerConstraints = self._transformConstraints(constraints)
  } else {
    self.answerConstraints = self._transformConstraints(constraints)
  }
}

Peer.prototype._debug = function () {
  var self = this
  var args = [].slice.call(arguments)
  args[0] = '[' + self._id + '] ' + args[0]
  debug.apply(null, args)
}

// Transform constraints objects into the new format (unless Chromium)
// TODO: This can be removed when Chromium supports the new format
Peer.prototype._transformConstraints = function (constraints) {
  var self = this

  if (Object.keys(constraints).length === 0) {
    return constraints
  }

  if ((constraints.mandatory || constraints.optional) && !self._isChromium) {
    // convert to new format

    // Merge mandatory and optional objects, prioritizing mandatory
    var newConstraints = Object.assign({}, constraints.optional, constraints.mandatory)

    // fix casing
    if (newConstraints.OfferToReceiveVideo !== undefined) {
      newConstraints.offerToReceiveVideo = newConstraints.OfferToReceiveVideo
      delete newConstraints['OfferToReceiveVideo']
    }

    if (newConstraints.OfferToReceiveAudio !== undefined) {
      newConstraints.offerToReceiveAudio = newConstraints.OfferToReceiveAudio
      delete newConstraints['OfferToReceiveAudio']
    }

    return newConstraints
  } else if (!constraints.mandatory && !constraints.optional && self._isChromium) {
    // convert to old format

    // fix casing
    if (constraints.offerToReceiveVideo !== undefined) {
      constraints.OfferToReceiveVideo = constraints.offerToReceiveVideo
      delete constraints['offerToReceiveVideo']
    }

    if (constraints.offerToReceiveAudio !== undefined) {
      constraints.OfferToReceiveAudio = constraints.offerToReceiveAudio
      delete constraints['offerToReceiveAudio']
    }

    return {
      mandatory: constraints // NOTE: All constraints are upgraded to mandatory
    }
  }

  return constraints
}

// HACK: Minimal shim to force Chrome and WRTC to use their more reliable callback API
function shimPromiseAPI (RTCPeerConnection, pc) {
  pc.createOffer = function (constraints) {
    return new Promise((resolve, reject) => {
      RTCPeerConnection.prototype.createOffer.call(this, resolve, reject, constraints)
    })
  }
  pc.createAnswer = function (constraints) {
    return new Promise((resolve, reject) => {
      RTCPeerConnection.prototype.createAnswer.call(this, resolve, reject, constraints)
    })
  }
  pc.setLocalDescription = function (description) {
    return new Promise((resolve, reject) => {
      RTCPeerConnection.prototype.setLocalDescription.call(this, description, resolve, reject)
    })
  }
  pc.setRemoteDescription = function (description) {
    return new Promise((resolve, reject) => {
      RTCPeerConnection.prototype.setRemoteDescription.call(this, description, resolve, reject)
    })
  }
}

// HACK: Filter trickle lines when trickle is disabled #354
function filterTrickle (sdp) {
  return sdp.replace(/a=ice-options:trickle\s\n/g, '')
}

function makeError (message, code) {
  var err = new Error(message)
  err.code = code
  return err
}

function noop () {}

},{"debug":"../node_modules/debug/src/browser.js","get-browser-rtc":"../node_modules/get-browser-rtc/index.js","inherits":"../node_modules/inherits/inherits_browser.js","randombytes":"../node_modules/randombytes/browser.js","readable-stream":"../node_modules/readable-stream/readable-browser.js","buffer":"../node_modules/buffer/index.js"}],"../node_modules/parseuri/index.js":[function(require,module,exports) {
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};

},{}],"../node_modules/socket.io-client/node_modules/ms/index.js":[function(require,module,exports) {
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],"../node_modules/socket.io-client/node_modules/debug/src/debug.js":[function(require,module,exports) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require('ms');

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":"../node_modules/socket.io-client/node_modules/ms/index.js"}],"../node_modules/socket.io-client/node_modules/debug/src/browser.js":[function(require,module,exports) {
var process = require("process");
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */


exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors) return;
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;

    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.debug;
  } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = undefined;
  }

  return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */


exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
},{"./debug":"../node_modules/socket.io-client/node_modules/debug/src/debug.js","process":"../node_modules/process/browser.js"}],"../node_modules/socket.io-client/lib/url.js":[function(require,module,exports) {

/**
 * Module dependencies.
 */

var parseuri = require('parseuri');
var debug = require('debug')('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url (uri, loc) {
  var obj = uri;

  // default to window.location
  loc = loc || (typeof location !== 'undefined' && location);
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));

  return obj;
}

},{"parseuri":"../node_modules/parseuri/index.js","debug":"../node_modules/socket.io-client/node_modules/debug/src/browser.js"}],"../node_modules/socket.io-parser/node_modules/ms/index.js":[function(require,module,exports) {
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],"../node_modules/socket.io-parser/node_modules/debug/src/debug.js":[function(require,module,exports) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require('ms');

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":"../node_modules/socket.io-parser/node_modules/ms/index.js"}],"../node_modules/socket.io-parser/node_modules/debug/src/browser.js":[function(require,module,exports) {
var process = require("process");
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */


exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors) return;
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;

    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.debug;
  } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = undefined;
  }

  return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */


exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
},{"./debug":"../node_modules/socket.io-parser/node_modules/debug/src/debug.js","process":"../node_modules/process/browser.js"}],"../node_modules/component-emitter/index.js":[function(require,module,exports) {

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],"../node_modules/socket.io-parser/node_modules/isarray/index.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"../node_modules/socket.io-parser/is-buffer.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;

module.exports = isBuf;

var withNativeBuffer = typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof ArrayBuffer === 'function';

var isView = function (obj) {
  return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : (obj.buffer instanceof ArrayBuffer);
};

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (withNativeBuffer && Buffer.isBuffer(obj)) ||
          (withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)));
}

},{"buffer":"../node_modules/buffer/index.js"}],"../node_modules/socket.io-parser/binary.js":[function(require,module,exports) {
/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = require('isarray');
var isBuf = require('./is-buffer');
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || (typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]');
var withNativeFile = typeof File === 'function' || (typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]');

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};
    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }
    return newData;
  }
  return data;
}

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful
  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

},{"isarray":"../node_modules/socket.io-parser/node_modules/isarray/index.js","./is-buffer":"../node_modules/socket.io-parser/is-buffer.js"}],"../node_modules/socket.io-parser/index.js":[function(require,module,exports) {

/**
 * Module dependencies.
 */

var debug = require('debug')('socket.io-parser');
var Emitter = require('component-emitter');
var binary = require('./binary');
var isArray = require('isarray');
var isBuf = require('./is-buffer');

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'ACK',
  'ERROR',
  'BINARY_EVENT',
  'BINARY_ACK'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

var ERROR_PACKET = exports.ERROR + '"encode error"';

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  } else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {

  // first is type
  var str = '' + obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  }

  // immediately followed by the id
  if (null != obj.id) {
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    var payload = tryStringify(obj.data);
    if (payload !== false) {
      str += payload;
    } else {
      return ERROR_PACKET;
    }
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

function tryStringify(str) {
  try {
    return JSON.stringify(str);
  } catch(e){
    return false;
  }
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an encoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if (typeof obj === 'string') {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  } else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  } else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var i = 0;
  // look up type
  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) {
    return error('unknown packet type ' + p.type);
  }

  // look up attachments if type binary
  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';
    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i === str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    var payload = tryParse(str.substr(i));
    var isPayloadValid = payload !== false && (p.type === exports.ERROR || isArray(payload));
    if (isPayloadValid) {
      p.data = payload;
    } else {
      return error('invalid payload');
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch(e){
    return false;
  }
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length === this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error(msg) {
  return {
    type: exports.ERROR,
    data: 'parser error: ' + msg
  };
}

},{"debug":"../node_modules/socket.io-parser/node_modules/debug/src/browser.js","component-emitter":"../node_modules/component-emitter/index.js","./binary":"../node_modules/socket.io-parser/binary.js","isarray":"../node_modules/socket.io-parser/node_modules/isarray/index.js","./is-buffer":"../node_modules/socket.io-parser/is-buffer.js"}],"../node_modules/has-cors/index.js":[function(require,module,exports) {

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

},{}],"../node_modules/engine.io-client/lib/xmlhttprequest.js":[function(require,module,exports) {
// browser shim for xmlhttprequest module

var hasCORS = require('has-cors');

module.exports = function (opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new self[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) { }
  }
};

},{"has-cors":"../node_modules/has-cors/index.js"}],"../node_modules/engine.io-parser/lib/keys.js":[function(require,module,exports) {

/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};

},{}],"../node_modules/has-binary2/node_modules/isarray/index.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"../node_modules/has-binary2/index.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
/* global Blob File */

/*
 * Module requirements.
 */

var isArray = require('isarray');

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' ||
                        typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' ||
                        typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary (obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }

  if ((typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj)) ||
    (typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
    (withNativeBlob && obj instanceof Blob) ||
    (withNativeFile && obj instanceof File)
  ) {
    return true;
  }

  // see: https://github.com/Automattic/has-binary/pull/4
  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}

},{"isarray":"../node_modules/has-binary2/node_modules/isarray/index.js","buffer":"../node_modules/buffer/index.js"}],"../node_modules/arraybuffer.slice/index.js":[function(require,module,exports) {
/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};

},{}],"../node_modules/after/index.js":[function(require,module,exports) {
module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}

},{}],"../node_modules/engine.io-parser/lib/utf8.js":[function(require,module,exports) {
/*! https://mths.be/utf8js v2.1.2 by @mathias */

var stringFromCharCode = String.fromCharCode;

// Taken from https://mths.be/punycode
function ucs2decode(string) {
	var output = [];
	var counter = 0;
	var length = string.length;
	var value;
	var extra;
	while (counter < length) {
		value = string.charCodeAt(counter++);
		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
			// high surrogate, and there is a next character
			extra = string.charCodeAt(counter++);
			if ((extra & 0xFC00) == 0xDC00) { // low surrogate
				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
			} else {
				// unmatched surrogate; only append this code unit, in case the next
				// code unit is the high surrogate of a surrogate pair
				output.push(value);
				counter--;
			}
		} else {
			output.push(value);
		}
	}
	return output;
}

// Taken from https://mths.be/punycode
function ucs2encode(array) {
	var length = array.length;
	var index = -1;
	var value;
	var output = '';
	while (++index < length) {
		value = array[index];
		if (value > 0xFFFF) {
			value -= 0x10000;
			output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
			value = 0xDC00 | value & 0x3FF;
		}
		output += stringFromCharCode(value);
	}
	return output;
}

function checkScalarValue(codePoint, strict) {
	if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
		if (strict) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
		return false;
	}
	return true;
}
/*--------------------------------------------------------------------------*/

function createByte(codePoint, shift) {
	return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
}

function encodeCodePoint(codePoint, strict) {
	if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
		return stringFromCharCode(codePoint);
	}
	var symbol = '';
	if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
		symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
	}
	else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
		if (!checkScalarValue(codePoint, strict)) {
			codePoint = 0xFFFD;
		}
		symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
		symbol += createByte(codePoint, 6);
	}
	else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
		symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
		symbol += createByte(codePoint, 12);
		symbol += createByte(codePoint, 6);
	}
	symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
	return symbol;
}

function utf8encode(string, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	var codePoints = ucs2decode(string);
	var length = codePoints.length;
	var index = -1;
	var codePoint;
	var byteString = '';
	while (++index < length) {
		codePoint = codePoints[index];
		byteString += encodeCodePoint(codePoint, strict);
	}
	return byteString;
}

/*--------------------------------------------------------------------------*/

function readContinuationByte() {
	if (byteIndex >= byteCount) {
		throw Error('Invalid byte index');
	}

	var continuationByte = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	if ((continuationByte & 0xC0) == 0x80) {
		return continuationByte & 0x3F;
	}

	// If we end up here, it’s not a continuation byte
	throw Error('Invalid continuation byte');
}

function decodeSymbol(strict) {
	var byte1;
	var byte2;
	var byte3;
	var byte4;
	var codePoint;

	if (byteIndex > byteCount) {
		throw Error('Invalid byte index');
	}

	if (byteIndex == byteCount) {
		return false;
	}

	// Read first byte
	byte1 = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	// 1-byte sequence (no continuation bytes)
	if ((byte1 & 0x80) == 0) {
		return byte1;
	}

	// 2-byte sequence
	if ((byte1 & 0xE0) == 0xC0) {
		byte2 = readContinuationByte();
		codePoint = ((byte1 & 0x1F) << 6) | byte2;
		if (codePoint >= 0x80) {
			return codePoint;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 3-byte sequence (may include unpaired surrogates)
	if ((byte1 & 0xF0) == 0xE0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
		if (codePoint >= 0x0800) {
			return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 4-byte sequence
	if ((byte1 & 0xF8) == 0xF0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		byte4 = readContinuationByte();
		codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
			(byte3 << 0x06) | byte4;
		if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
			return codePoint;
		}
	}

	throw Error('Invalid UTF-8 detected');
}

var byteArray;
var byteCount;
var byteIndex;
function utf8decode(byteString, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	byteArray = ucs2decode(byteString);
	byteCount = byteArray.length;
	byteIndex = 0;
	var codePoints = [];
	var tmp;
	while ((tmp = decodeSymbol(strict)) !== false) {
		codePoints.push(tmp);
	}
	return ucs2encode(codePoints);
}

module.exports = {
	version: '2.1.2',
	encode: utf8encode,
	decode: utf8decode
};

},{}],"../node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":[function(require,module,exports) {
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function () {
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; // Use a lookup table to find the index.

  var lookup = new Uint8Array(256);

  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
      base64 += chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode = function (base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;

      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i + 1)];
      encoded3 = lookup[base64.charCodeAt(i + 2)];
      encoded4 = lookup[base64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return arraybuffer;
  };
})();
},{}],"../node_modules/blob/index.js":[function(require,module,exports) {
/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = typeof BlobBuilder !== 'undefined' ? BlobBuilder :
  typeof WebKitBlobBuilder !== 'undefined' ? WebKitBlobBuilder :
  typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder :
  typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : 
  false;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  return ary.map(function(chunk) {
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      return buf;
    }

    return chunk;
  });
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary).forEach(function(part) {
    bb.append(part);
  });

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  return new Blob(mapArrayBufferViews(ary), options || {});
};

if (typeof Blob !== 'undefined') {
  BlobBuilderConstructor.prototype = Blob.prototype;
  BlobConstructor.prototype = Blob.prototype;
}

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

},{}],"../node_modules/engine.io-parser/lib/browser.js":[function(require,module,exports) {
/**
 * Module dependencies.
 */

var keys = require('./keys');
var hasBinary = require('has-binary2');
var sliceBuffer = require('arraybuffer.slice');
var after = require('after');
var utf8 = require('./utf8');

var base64encoder;
if (typeof ArrayBuffer !== 'undefined') {
  base64encoder = require('base64-arraybuffer');
}

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = require('blob');

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    exports.encodePacket({ type: packet.type, data: fr.result }, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (typeof Blob !== 'undefined' && packet.data instanceof Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  }
  // String data
  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);
      if (data === false) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, { strict: false });
  } catch (e) {
    return false;
  }
  return data;
}

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!base64encoder) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '', n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || (length != (n = Number(length)))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    }

    // advance cursor
    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] === 255) break;

      // 310 = char length of Number.MAX_VALUE
      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

},{"./keys":"../node_modules/engine.io-parser/lib/keys.js","has-binary2":"../node_modules/has-binary2/index.js","arraybuffer.slice":"../node_modules/arraybuffer.slice/index.js","after":"../node_modules/after/index.js","./utf8":"../node_modules/engine.io-parser/lib/utf8.js","base64-arraybuffer":"../node_modules/base64-arraybuffer/lib/base64-arraybuffer.js","blob":"../node_modules/blob/index.js"}],"../node_modules/engine.io-client/lib/transport.js":[function(require,module,exports) {
/**
 * Module dependencies.
 */

var parser = require('engine.io-parser');
var Emitter = require('component-emitter');

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode;

  // results of ReactNative environment detection
  this.isReactNative = opts.isReactNative;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

},{"engine.io-parser":"../node_modules/engine.io-parser/lib/browser.js","component-emitter":"../node_modules/component-emitter/index.js"}],"../node_modules/parseqs/index.js":[function(require,module,exports) {
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};

},{}],"../node_modules/component-inherit/index.js":[function(require,module,exports) {

module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};
},{}],"../node_modules/yeast/index.js":[function(require,module,exports) {
'use strict';

var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

},{}],"../node_modules/engine.io-client/node_modules/ms/index.js":[function(require,module,exports) {
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],"../node_modules/engine.io-client/node_modules/debug/src/debug.js":[function(require,module,exports) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require('ms');

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":"../node_modules/engine.io-client/node_modules/ms/index.js"}],"../node_modules/engine.io-client/node_modules/debug/src/browser.js":[function(require,module,exports) {
var process = require("process");
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */


exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors) return;
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;

    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.debug;
  } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = undefined;
  }

  return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */


exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
},{"./debug":"../node_modules/engine.io-client/node_modules/debug/src/debug.js","process":"../node_modules/process/browser.js"}],"../node_modules/engine.io-client/lib/transports/polling.js":[function(require,module,exports) {
/**
 * Module dependencies.
 */

var Transport = require('../transport');
var parseqs = require('parseqs');
var parser = require('engine.io-parser');
var inherit = require('component-inherit');
var yeast = require('yeast');
var debug = require('debug')('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function () {
  var XMLHttpRequest = require('xmlhttprequest-ssl');
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function (onPause) {
  var self = this;

  this.readyState = 'pausing';

  function pause () {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);
  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' === packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function () {
  var self = this;

  function close () {
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;
  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
     ('http' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

},{"../transport":"../node_modules/engine.io-client/lib/transport.js","parseqs":"../node_modules/parseqs/index.js","engine.io-parser":"../node_modules/engine.io-parser/lib/browser.js","component-inherit":"../node_modules/component-inherit/index.js","yeast":"../node_modules/yeast/index.js","debug":"../node_modules/engine.io-client/node_modules/debug/src/browser.js","xmlhttprequest-ssl":"../node_modules/engine.io-client/lib/xmlhttprequest.js"}],"../node_modules/engine.io-client/lib/transports/polling-xhr.js":[function(require,module,exports) {
/* global attachEvent */

/**
 * Module requirements.
 */

var XMLHttpRequest = require('xmlhttprequest-ssl');
var Polling = require('./polling');
var Emitter = require('component-emitter');
var inherit = require('component-inherit');
var debug = require('debug')('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty () {}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR (opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = (typeof location !== 'undefined' && opts.hostname !== location.hostname) ||
      port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request (opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.requestTimeout = opts.requestTimeout;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {}

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };
      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          try {
            var contentType = xhr.getResponseHeader('Content-Type');
            if (self.supportsBinary && contentType === 'application/octet-stream') {
              xhr.responseType = 'arraybuffer';
            }
          } catch (e) {}
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (typeof document !== 'undefined') {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (typeof document !== 'undefined') {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function () {
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function () {
  return typeof XDomainRequest !== 'undefined' && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function () {
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== 'undefined') {
  if (typeof attachEvent === 'function') {
    attachEvent('onunload', unloadHandler);
  } else if (typeof addEventListener === 'function') {
    var terminationEvent = 'onpagehide' in self ? 'pagehide' : 'unload';
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler () {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

},{"xmlhttprequest-ssl":"../node_modules/engine.io-client/lib/xmlhttprequest.js","./polling":"../node_modules/engine.io-client/lib/transports/polling.js","component-emitter":"../node_modules/component-emitter/index.js","component-inherit":"../node_modules/component-inherit/index.js","debug":"../node_modules/engine.io-client/node_modules/debug/src/browser.js"}],"../node_modules/engine.io-client/lib/transports/polling-jsonp.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * Module requirements.
 */

var Polling = require('./polling');
var inherit = require('component-inherit');

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Noop.
 */

function empty () { }

/**
 * Until https://github.com/tc39/proposal-global is shipped.
 */
function glob () {
  return typeof self !== 'undefined' ? self
      : typeof window !== 'undefined' ? window
      : typeof global !== 'undefined' ? global : {};
}

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    var global = glob();
    callbacks = global.___eio = (global.___eio || []);
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (typeof addEventListener === 'function') {
    addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

},{"./polling":"../node_modules/engine.io-client/lib/transports/polling.js","component-inherit":"../node_modules/component-inherit/index.js"}],"../node_modules/engine.io-client/lib/transports/websocket.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
/**
 * Module dependencies.
 */

var Transport = require('../transport');
var parser = require('engine.io-parser');
var parseqs = require('parseqs');
var inherit = require('component-inherit');
var yeast = require('yeast');
var debug = require('debug')('engine.io-client:websocket');
var BrowserWebSocket, NodeWebSocket;
if (typeof self === 'undefined') {
  try {
    NodeWebSocket = require('ws');
  } catch (e) { }
} else {
  BrowserWebSocket = self.WebSocket || self.MozWebSocket;
}

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocket = BrowserWebSocket || NodeWebSocket;

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;
  if (!this.usingBrowserWebSocket) {
    WebSocket = NodeWebSocket;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }
  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket && !this.isReactNative ? (protocols ? new WebSocket(uri, protocols) : new WebSocket(uri)) : new WebSocket(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };
  this.ws.onclose = function () {
    self.onClose();
  };
  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };
  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done () {
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
    ('ws' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function () {
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};

},{"../transport":"../node_modules/engine.io-client/lib/transport.js","engine.io-parser":"../node_modules/engine.io-parser/lib/browser.js","parseqs":"../node_modules/parseqs/index.js","component-inherit":"../node_modules/component-inherit/index.js","yeast":"../node_modules/yeast/index.js","debug":"../node_modules/engine.io-client/node_modules/debug/src/browser.js","ws":"../node_modules/parcel-bundler/src/builtins/_empty.js","buffer":"../node_modules/buffer/index.js"}],"../node_modules/engine.io-client/lib/transports/index.js":[function(require,module,exports) {
/**
 * Module dependencies
 */

var XMLHttpRequest = require('xmlhttprequest-ssl');
var XHR = require('./polling-xhr');
var JSONP = require('./polling-jsonp');
var websocket = require('./websocket');

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling (opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

},{"xmlhttprequest-ssl":"../node_modules/engine.io-client/lib/xmlhttprequest.js","./polling-xhr":"../node_modules/engine.io-client/lib/transports/polling-xhr.js","./polling-jsonp":"../node_modules/engine.io-client/lib/transports/polling-jsonp.js","./websocket":"../node_modules/engine.io-client/lib/transports/websocket.js"}],"../node_modules/indexof/index.js":[function(require,module,exports) {

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],"../node_modules/engine.io-client/lib/socket.js":[function(require,module,exports) {
/**
 * Module dependencies.
 */

var transports = require('./transports/index');
var Emitter = require('component-emitter');
var debug = require('debug')('engine.io-client:socket');
var index = require('indexof');
var parser = require('engine.io-parser');
var parseuri = require('parseuri');
var parseqs = require('parseqs');

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket (uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure
    : (typeof location !== 'undefined' && 'https:' === location.protocol);

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (typeof location !== 'undefined' ? location.hostname : 'localhost');
  this.port = opts.port || (typeof location !== 'undefined' && location.port
      ? location.port
      : (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode;

  // detect ReactNative environment
  this.isReactNative = (typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative');

  // other options for Node.js or ReactNative client
  if (typeof self === 'undefined' || this.isReactNative) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  }

  // set on handshake
  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null;

  // set on heartbeat
  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = require('./transport');
Socket.transports = require('./transports/index');
Socket.parser = require('engine.io-parser');

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // per-transport options
  var options = this.transportOptions[name] || {};

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void (0),
    isReactNative: this.isReactNative
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function () {
    self.onDrain();
  })
  .on('packet', function (packet) {
    self.onPacket(packet);
  })
  .on('error', function (e) {
    self.onError(e);
  })
  .on('close', function () {
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 });
  var failed = false;
  var self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen () {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport () {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  // Handle any error that happens while probing
  function onerror (err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose () {
    onerror('transport closed');
  }

  // When the socket is closed while we're probing
  function onclose () {
    onerror('socket closed');
  }

  // When the socket is upgraded while we're probing
  function onupgrade (to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  // Remove all listeners on the transport and on self
  function cleanup () {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();
};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState ||
      'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if ('closed' === this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close () {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose () {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade () {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

},{"./transports/index":"../node_modules/engine.io-client/lib/transports/index.js","component-emitter":"../node_modules/component-emitter/index.js","debug":"../node_modules/engine.io-client/node_modules/debug/src/browser.js","indexof":"../node_modules/indexof/index.js","engine.io-parser":"../node_modules/engine.io-parser/lib/browser.js","parseuri":"../node_modules/parseuri/index.js","parseqs":"../node_modules/parseqs/index.js","./transport":"../node_modules/engine.io-client/lib/transport.js"}],"../node_modules/engine.io-client/lib/index.js":[function(require,module,exports) {

module.exports = require('./socket');

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = require('engine.io-parser');

},{"./socket":"../node_modules/engine.io-client/lib/socket.js","engine.io-parser":"../node_modules/engine.io-parser/lib/browser.js"}],"../node_modules/to-array/index.js":[function(require,module,exports) {
module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}

},{}],"../node_modules/socket.io-client/lib/on.js":[function(require,module,exports) {

/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on (obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}

},{}],"../node_modules/component-bind/index.js":[function(require,module,exports) {
/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};

},{}],"../node_modules/socket.io-client/lib/socket.js":[function(require,module,exports) {

/**
 * Module dependencies.
 */

var parser = require('socket.io-parser');
var Emitter = require('component-emitter');
var toArray = require('to-array');
var on = require('./on');
var bind = require('component-bind');
var debug = require('debug')('socket.io-client:socket');
var parseqs = require('parseqs');
var hasBin = require('has-binary2');

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket (io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  this.flags = {};
  if (opts && opts.query) {
    this.query = opts.query;
  }
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function () {
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = {
    type: (this.flags.binary !== undefined ? this.flags.binary : hasBin(args)) ? parser.BINARY_EVENT : parser.EVENT,
    data: args
  };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  this.flags = {};

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function () {
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({type: parser.CONNECT, query: query});
    } else {
      this.packet({type: parser.CONNECT});
    }
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function (packet) {
  var sameNamespace = packet.nsp === this.nsp;
  var rootNamespaceError = packet.type === parser.ERROR && packet.nsp === '/';

  if (!sameNamespace && !rootNamespaceError) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    self.packet({
      type: hasBin(args) ? parser.BINARY_ACK : parser.ACK,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];
  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function () {
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function (compress) {
  this.flags.compress = compress;
  return this;
};

/**
 * Sets the binary flag
 *
 * @param {Boolean} whether the emitted data contains binary
 * @return {Socket} self
 * @api public
 */

Socket.prototype.binary = function (binary) {
  this.flags.binary = binary;
  return this;
};

},{"socket.io-parser":"../node_modules/socket.io-parser/index.js","component-emitter":"../node_modules/component-emitter/index.js","to-array":"../node_modules/to-array/index.js","./on":"../node_modules/socket.io-client/lib/on.js","component-bind":"../node_modules/component-bind/index.js","debug":"../node_modules/socket.io-client/node_modules/debug/src/browser.js","parseqs":"../node_modules/parseqs/index.js","has-binary2":"../node_modules/has-binary2/index.js"}],"../node_modules/backo2/index.js":[function(require,module,exports) {

/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};


},{}],"../node_modules/socket.io-client/lib/manager.js":[function(require,module,exports) {

/**
 * Module dependencies.
 */

var eio = require('engine.io-client');
var Socket = require('./socket');
var Emitter = require('component-emitter');
var parser = require('socket.io-parser');
var on = require('./on');
var bind = require('component-bind');
var debug = require('debug')('socket.io-client:manager');
var indexOf = require('indexof');
var Backoff = require('backo2');

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager (uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' === typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  var _parser = opts.parser || parser;
  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};

/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */

Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : (nsp + '#')) + this.engine.id;
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};

/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function () {
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting () {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function () {
  debug('cleanup');

  var subsLength = this.subs.length;
  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function (reason) {
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

},{"engine.io-client":"../node_modules/engine.io-client/lib/index.js","./socket":"../node_modules/socket.io-client/lib/socket.js","component-emitter":"../node_modules/component-emitter/index.js","socket.io-parser":"../node_modules/socket.io-parser/index.js","./on":"../node_modules/socket.io-client/lib/on.js","component-bind":"../node_modules/component-bind/index.js","debug":"../node_modules/socket.io-client/node_modules/debug/src/browser.js","indexof":"../node_modules/indexof/index.js","backo2":"../node_modules/backo2/index.js"}],"../node_modules/socket.io-client/lib/index.js":[function(require,module,exports) {

/**
 * Module dependencies.
 */

var url = require('./url');
var parser = require('socket.io-parser');
var Manager = require('./manager');
var debug = require('debug')('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup (uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] ||
                      false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }
  return io.socket(parsed.path, opts);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = require('./manager');
exports.Socket = require('./socket');

},{"./url":"../node_modules/socket.io-client/lib/url.js","socket.io-parser":"../node_modules/socket.io-parser/index.js","./manager":"../node_modules/socket.io-client/lib/manager.js","debug":"../node_modules/socket.io-client/node_modules/debug/src/browser.js","./socket":"../node_modules/socket.io-client/lib/socket.js"}],"index.js":[function(require,module,exports) {
var jsQR = require('jsqr');

var Peer = require('simple-peer');

var io = require('socket.io-client');

var state = {
  isConnected: false,
  isCamera: false,
  peerId: '',
  error: {
    show: false,
    message: ''
  },
  qr: {
    output: false,
    data: false
  },
  stream: false,
  video: false,
  log: [],
  socket: false,
  peer: false,
  peerConnected: false,
  searchText: '',
  controls: [{
    action: 'play_video',
    icon: 'play_arrow'
  }, {
    action: 'pause_video',
    icon: 'pause'
  }, {
    action: 'replay_video',
    icon: 'replay_10'
  }, {
    action: 'forward_video',
    icon: 'forward_10'
  }, {
    action: 'fullscreen_video',
    icon: 'fullscreen'
  }, {
    action: 'fullscreen_exit_video',
    icon: 'fullscreen_exit'
  }, {
    action: 'next_episode',
    icon: 'fast_forward'
  }]
};
var app = new Vue({
  el: '#app',
  data: function data() {
    return state;
  },
  mounted: function mounted() {
    var _this = this;

    var peer = new Peer({
      initiator: false,
      trickle: false
    }); // const socket = io('http://localhost:3030/');

    var socket = io('https://netflix-signal.herokuapp.com/');
    this.socket = socket;
    this.peer = peer;
    socket.on('connect', function () {
      console.log(socket.id);
    });
    socket.on('incoming-signal', function (data) {
      peer.signal(data);
    });
    peer.on('signal', function (data) {
      socket.emit('set-answer', {
        signal: data,
        id: _this.peerId
      });
    });
    peer.on('connect', function () {
      _this.peerConnected = true; //peer.send('whatever' + Math.random());
    });
    peer.on('data', function (data) {
      console.log('data: ', data.toString());

      _this.handleIncoming(data.toString());
    });
    peer.on('error', function (e) {
      _this.peerConnected = false;

      _this.showError(e.message);
    });
    peer.on('close', function (err) {
      this.peerConnected = false;
    });
  },
  watch: {
    qr: function qr(newVal, oldVal) {
      this.log.push(newVal);

      if (newVal.output) {
        this.peerId = newVal.data;
      }
    }
  },
  methods: {
    sendPeer: function sendPeer(data) {
      this.peer.send(JSON.stringify(data));
    },
    showError: function showError(message) {
      this.error.show = true;
      this.error.message = message;
    },
    scanCode: function scanCode() {
      var _this2 = this;

      var video = this.$refs.video;
      navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment'
        }
      }).then(function (stream) {
        _this2.stream = stream;
        _this2.isCamera = true;
        video.srcObject = stream;
        video.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen

        video.play();
        requestAnimationFrame(tick);
      }).catch(function (e) {
        _this2.showError(e.message);
      });
    },
    connectRemote: function connectRemote() {
      this.socket.emit('get-signal', this.peerId);
    },
    searchNetflix: function searchNetflix() {
      this.sendPeer({
        action: 'search',
        payload: {
          text: this.searchText
        }
      });
    },
    videoAction: function videoAction(action) {
      this.sendPeer({
        action: 'video_action',
        payload: {
          action: action
        }
      });
    },
    handleIncoming: function handleIncoming(dataString) {
      var data = JSON.parse(dataString);

      if (Object.keys(data).includes('error')) {
        this.showError(data.error);
      }

      if (Object.keys(data).includes('success')) {
        this.error.show = false;
      }
    }
  }
});

function tick() {
  try {
    var video = app.$refs.video;

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      var canvasElement = app.$refs.canvas;
      var canvas = canvasElement.getContext('2d');
      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
      var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
      var code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      if (code) {
        app.stream.getTracks().forEach(function (track) {
          return track.stop();
        });
        app.isCamera = false;
        app.qr.output = true;
        app.qr.data = code.data;
        app.peerId = code.data;
      } else {
        app.qr.output = false;
        app.qr.data = '';
      }
    }

    if (!app.qr.output) {
      requestAnimationFrame(tick);
    }
  } catch (e) {
    app.error.show = true;
    app.error.message = e.message;
  }
}
},{"jsqr":"../node_modules/jsqr/dist/jsQR.js","simple-peer":"../node_modules/simple-peer/index.js","socket.io-client":"../node_modules/socket.io-client/lib/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35969" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.map