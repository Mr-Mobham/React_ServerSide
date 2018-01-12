
          window.__NEXT_REGISTER_CHUNK('jalali_date_b1347b71660b1574189617511ff5ef63.js', function() {
            webpackJsonp([7],{

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("jdate", [], factory);
	else if(typeof exports === 'object')
		exports["jdate"] = factory();
	else
		root["jdate"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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


var _constants = __webpack_require__(1);

function div(a, b) {
  return Math.floor(a / b);
} /* eslint-disable no-unused-vars */

function mod(a, b) {
  return a - Math.floor(a / b) * b;
}

function fixMonth(year, month) {
  if (month > 12 || month <= 0) {
    var yearDiff = Math.floor((month - 1) / 12);
    var newYear = year - yearDiff;
    var newMonth = month - yearDiff * 12;

    return [newYear, newMonth];
  }

  return [year, month];
}

function zeroLeading(str) {
  if (str && str.length === 1) {
    return '0' + str;
  }
  return str;
}

function replaceYear(str, date) {
  var match = str.match(/[yY]+/);
  if (!match) {
    return str;
  }
  switch (match[0]) {
    case 'YYYY':
    case 'YYY':
      {
        var value = replaceYear(str.replace(match, date.getFullYear()), date);
        return value;
      }
    case 'YY':
      {
        var _value = replaceYear(str.replace(match, String(date.getFullYear()).slice(2)), date);
        return _value;
      }
    default:
      {
        return str;
      }
  }
}

function replaceMonth(str, date) {
  var match = str.match(/[mM]+/);
  if (!match) {
    return str;
  }
  switch (match[0]) {
    case 'M':
      {
        var value = replaceMonth(str.replace(match, date.getMonth()), date);
        return value;
      }
    case 'MM':
      {
        var zeroLeadingMonth = zeroLeading(date.getMonth().toString());
        var _value2 = replaceMonth(str.replace(match, zeroLeadingMonth), date);
        return _value2;
      }
    case 'MMM':
    case 'MMMM':
      {
        var _value3 = replaceMonth(str.replace(match, _constants.MONTH_NAMES[date.getMonth() - 1]), date);
        return _value3;
      }
    default:
      {
        return str;
      }
  }
}

function replaceDay(str, date) {
  var match = str.match(/[dD]+/);
  if (!match) {
    return str;
  }
  switch (match[0]) {
    case 'D':
      {
        var value = replaceDay(str.replace(match, date.getDate()), date);
        return value;
      }
    case 'DD':
      {
        var zeroLeadingDate = zeroLeading(date.getDate().toString());
        var _value4 = replaceDay(str.replace(match, zeroLeadingDate), date);
        return _value4;
      }
    case 'd':
    case 'dd':
      {
        var _value5 = replaceDay(str.replace(match, _constants.ABBR_DAYS[date.getDay()]), date);
        return _value5;
      }
    case 'ddd':
    case 'dddd':
      {
        var _value6 = replaceDay(str.replace(match, _constants.DAYS_NAMES[date.getDay()]), date);
        return _value6;
      }
    default:
      {
        return str;
      }
  }
}

module.exports = {
  mod: mod,
  div: div,
  replaceDay: replaceDay,
  replaceMonth: replaceMonth,
  replaceYear: replaceYear
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  MONTH_NAMES: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'امرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
  ABBR_DAYS: ['۱ش', '۲ش', '۳ش', '۴ش', '۵ش', 'ج', 'ش'],
  DAYS_NAMES: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'],
  GREGORIAN_EPOCH: 1721425.5,
  PERSIAN_EPOCH: 1948320.5
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(0);

var _constants = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Converter = function () {
  function Converter() {
    _classCallCheck(this, Converter);
  }

  _createClass(Converter, null, [{
    key: 'leapGregorian',

    //  LEAP_GREGORIAN  --  Is a given year in the Gregorian calendar a leap year?
    value: function leapGregorian(year) {
      return year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0);
    }

    // GREGORIAN_TO_JD  --  Determine Julian day number from Gregorian calendar date

  }, {
    key: 'gregorianToJulian',
    value: function gregorianToJulian(year, month, day) {
      var pad = void 0;
      if (month <= 2) {
        pad = 0;
      } else if (Converter.leapGregorian(year)) {
        pad = -1;
      } else {
        pad = -2;
      }

      return _constants.GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) + -Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor((367 * month - 362) / 12 + (pad + day));
    }

    //  JD_TO_GREGORIAN  --  Calculate Gregorian calendar date from Julian day

  }, {
    key: 'julianToGregorian',
    value: function julianToGregorian(jd) {
      var wjd = Math.floor(jd - 0.5) + 0.5;
      var depoch = wjd - _constants.GREGORIAN_EPOCH;
      var quadricent = Math.floor(depoch / 146097);
      var dqc = (0, _helpers.mod)(depoch, 146097);
      var cent = Math.floor(dqc / 36524);
      var dcent = (0, _helpers.mod)(dqc, 36524);
      var quad = Math.floor(dcent / 1461);
      var dquad = (0, _helpers.mod)(dcent, 1461);
      var yindex = Math.floor(dquad / 365);
      var year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
      if (!(cent === 4 || yindex === 4)) {
        year += 1;
      }
      var yearday = wjd - Converter.gregorianToJulian(year, 1, 1);
      var leapadj = void 0;
      if (wjd < Converter.gregorianToJulian(year, 3, 1)) {
        leapadj = 0;
      } else if (Converter.leapGregorian(year) ? 1 : 2) {
        leapadj = 1;
      } else {
        leapadj = 2;
      }
      var month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
      var day = wjd - Converter.gregorianToJulian(year, month, 1) + 1;

      return [year, month, day];
    }

    //  LEAP_PERSIAN  --  Is a given year a leap year in the Persian calendar ?

  }, {
    key: 'leapPersian',
    value: function leapPersian(year) {
      return ((year - (year > 0 ? 474 : 473)) % 2820 + 474 + 38) * 682 % 2816 < 682;
    }

    //  PERSIAN_TO_JD  --  Determine Julian day from Persian date

  }, {
    key: 'persianToJulian',
    value: function persianToJulian(year, month, day) {
      var epbase = year - (year >= 0 ? 474 : 473);
      var epyear = 474 + (0, _helpers.mod)(epbase, 2820);

      return day + (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) + Math.floor((epyear * 682 - 110) / 2816) + (epyear - 1) * 365 + Math.floor(epbase / 2820) * 1029983 + (_constants.PERSIAN_EPOCH - 1);
    }

    //  JD_TO_PERSIAN  --  Calculate Persian date from Julian day

  }, {
    key: 'julianToPersian',
    value: function julianToPersian(jd) {
      var njd = Math.floor(jd) + 0.5;
      var depoch = njd - Converter.persianToJulian(475, 1, 1);
      var cycle = Math.floor(depoch / 1029983);
      var cyear = (0, _helpers.mod)(depoch, 1029983);
      var ycycle = void 0;
      if (cyear === 1029982) {
        ycycle = 2820;
      } else {
        var aux1 = Math.floor(cyear / 366);
        var aux2 = (0, _helpers.mod)(cyear, 366);
        ycycle = Math.floor((2134 * aux1 + 2816 * aux2 + 2815) / 1028522) + aux1 + 1;
      }
      var year = ycycle + 2820 * cycle + 474;
      if (year <= 0) {
        year -= 1;
      }
      var yday = njd - Converter.persianToJulian(year, 1, 1) + 1;
      var month = yday <= 186 ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
      var day = njd - Converter.persianToJulian(year, month, 1) + 1;

      return [year, month, day];
    }
  }, {
    key: 'persianToGregorian',
    value: function persianToGregorian(year, month, day) {
      var julian = Converter.persianToJulian(year, month, day);

      return Converter.julianToGregorian(julian);
    }
  }, {
    key: 'gregorianToPersian',
    value: function gregorianToPersian(year, month, day) {
      var julian = Converter.gregorianToJulian(year, month, day);

      return Converter.julianToPersian(julian);
    }
  }]);

  return Converter;
}();

exports.default = Converter;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://github.com/arashm/JDate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author: Arash Mousavi
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @version: 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _converter = __webpack_require__(2);

var _converter2 = _interopRequireDefault(_converter);

var _helpers = __webpack_require__(0);

var helpers = _interopRequireWildcard(_helpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JDate = function () {
  function JDate() {
    var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

    _classCallCheck(this, JDate);

    this.input = input;
    if (Array.isArray(input)) {
      this.date = input.map(function (num) {
        return parseInt(num, 10);
      });
      this._d = this.toGregorian();
    } else if (input instanceof Date) {
      this._d = input;
      this.date = JDate.toJalali(this.input);
    }
  }

  /*
   * Coverts a Gregorian date to Jalali date
   *
   * @params {Date} date
   * @return {Array}
   */


  _createClass(JDate, [{
    key: 'toGregorian',


    /*
     * Converts JDate date to Gregorian
     */
    value: function toGregorian() {
      return JDate.toGregorian(this.date[0], this.date[1], this.date[2]);
    }

    /*
     * Shows Jalali's full year, ex: 1393
     *
     * @return {Integer}
     */

  }, {
    key: 'getFullYear',
    value: function getFullYear() {
      return this.date[0];
    }

    /*
     * Sets the Jalali full year
     *
     * @params {Number} year
     * @return {JDate}
     */

  }, {
    key: 'setFullYear',
    value: function setFullYear(year) {
      this.date[0] = parseInt(year, 10);
      this.input = this.toGregorian();
      return this;
    }

    /*
     * Shows Jalali month number.
     *
     * @return {Number} Jalali month number
     */

  }, {
    key: 'getMonth',
    value: function getMonth() {
      return this.date[1];
    }

    /*
     * Sets the Jalali month number. An integer between 0 and 11
     *
     * @params {Number} month
     * @returns {JDate}
     */

  }, {
    key: 'setMonth',
    value: function setMonth(month) {
      var fixed = helpers.fixMonth(this.getFullYear(), parseInt(month, 10));
      this.date[0] = fixed[0];
      this.date[1] = fixed[1];
      this.input = this.toGregorian();

      return this;
    }

    /*
     * Shows Jalali day number. A number between 0 to 31
     *
     * @return {Number} Jalali day number
     */

  }, {
    key: 'getDate',
    value: function getDate() {
      return this.date[2];
    }

    /*
     * Sets Jalali day number. A number between 0 to 31
     *
     * @params {Number} date
     * @return {JDate}
     */

  }, {
    key: 'setDate',
    value: function setDate(date) {
      this.date[2] = parseInt(date, 10);
      this.input = this.toGregorian();

      return this;
    }

    /*
     * Returns the day of the week for the specified date. A number between 0 to 6
     *
     * @returns {Number}
     */

  }, {
    key: 'getDay',
    value: function getDay() {
      return this._d.getDay();
    }

    /*
     * Returns a formated output of current date
     *
     * @params {String} format
     * @return {String}
     */

  }, {
    key: 'format',
    value: function format(_format) {
      var result = helpers.replaceYear(_format, this);
      result = helpers.replaceMonth(result, this);
      result = helpers.replaceDay(result, this);

      return result;
    }
  }], [{
    key: 'toJalali',
    value: function toJalali(date) {
      var julianDate = _converter2.default.gregorianToJulian(date.getFullYear(), date.getMonth() + 1, date.getDate());
      var jdate = _converter2.default.julianToPersian(julianDate);

      return jdate;
    }
    // eslint-disable-next-line camelcase

  }, {
    key: 'to_jalali',
    value: function to_jalali(date) {
      return JDate.toJalali(date);
    }

    /*
     * converts a Jalali date to Gregorian
     *
     * @params {Number} year
     * @params {Number} month
     * @params {Number} day
     * @return {Date}
     */

  }, {
    key: 'toGregorian',
    value: function toGregorian(year, month, day) {
      var gdate = _converter2.default.julianToGregorian(_converter2.default.persianToJulian(year, month, day));

      return new Date(gdate[0], gdate[1] - 1, gdate[2]);
    }
    // eslint-disable-next-line camelcase

  }, {
    key: 'to_gregorian',
    value: function to_gregorian(year, month, day) {
      return JDate.toGregorian(year, month, day);
    }

    /*
     * Checks if a given year is a leap year or not
     *
     * @params {Number} year
     * @return {Boolean}
     */

  }, {
    key: 'isLeapYear',
    value: function isLeapYear(year) {
      return _converter2.default.leapPersian(year);
    }

    /*
     * Returns month length.
     *
     * @params {Number} year
     * @params {Number} month zero based
     * @return {Number}
     */

  }, {
    key: 'daysInMonth',
    value: function daysInMonth(year, month) {
      var calcedYear = year - Math.floor(month / 12);
      var calcedMonth = month - Math.floor(month / 12) * 12;

      if (calcedMonth < 0) {
        calcedMonth += 12;
        calcedYear -= 1;
      } else if (calcedMonth === 0) {
        calcedMonth = 12;
      }

      if (calcedMonth < 6) {
        return 31;
      } else if (calcedMonth < 11) {
        return 30;
      } else if (JDate.isLeapYear(calcedYear)) {
        return 30;
      }
      return 29;
    }
  }]);

  return JDate;
}();

exports.default = JDate;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=jdate.js.map

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2phbGFsaV9kYXRlX2IxMzQ3YjcxNjYwYjE1NzQxODk2MTc1MTFmZjVlZjYzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2phbGFsaS1kYXRlL2xpYi9qZGF0ZS5qcz9hZjA5ZDVmIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiamRhdGVcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiamRhdGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiamRhdGVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIF9jb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5mdW5jdGlvbiBkaXYoYSwgYikge1xuICByZXR1cm4gTWF0aC5mbG9vcihhIC8gYik7XG59IC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbmZ1bmN0aW9uIG1vZChhLCBiKSB7XG4gIHJldHVybiBhIC0gTWF0aC5mbG9vcihhIC8gYikgKiBiO1xufVxuXG5mdW5jdGlvbiBmaXhNb250aCh5ZWFyLCBtb250aCkge1xuICBpZiAobW9udGggPiAxMiB8fCBtb250aCA8PSAwKSB7XG4gICAgdmFyIHllYXJEaWZmID0gTWF0aC5mbG9vcigobW9udGggLSAxKSAvIDEyKTtcbiAgICB2YXIgbmV3WWVhciA9IHllYXIgLSB5ZWFyRGlmZjtcbiAgICB2YXIgbmV3TW9udGggPSBtb250aCAtIHllYXJEaWZmICogMTI7XG5cbiAgICByZXR1cm4gW25ld1llYXIsIG5ld01vbnRoXTtcbiAgfVxuXG4gIHJldHVybiBbeWVhciwgbW9udGhdO1xufVxuXG5mdW5jdGlvbiB6ZXJvTGVhZGluZyhzdHIpIHtcbiAgaWYgKHN0ciAmJiBzdHIubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuICcwJyArIHN0cjtcbiAgfVxuICByZXR1cm4gc3RyO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWWVhcihzdHIsIGRhdGUpIHtcbiAgdmFyIG1hdGNoID0gc3RyLm1hdGNoKC9beVldKy8pO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuICBzd2l0Y2ggKG1hdGNoWzBdKSB7XG4gICAgY2FzZSAnWVlZWSc6XG4gICAgY2FzZSAnWVlZJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcmVwbGFjZVllYXIoc3RyLnJlcGxhY2UobWF0Y2gsIGRhdGUuZ2V0RnVsbFllYXIoKSksIGRhdGUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgY2FzZSAnWVknOlxuICAgICAge1xuICAgICAgICB2YXIgX3ZhbHVlID0gcmVwbGFjZVllYXIoc3RyLnJlcGxhY2UobWF0Y2gsIFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpLnNsaWNlKDIpKSwgZGF0ZSk7XG4gICAgICAgIHJldHVybiBfdmFsdWU7XG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlTW9udGgoc3RyLCBkYXRlKSB7XG4gIHZhciBtYXRjaCA9IHN0ci5tYXRjaCgvW21NXSsvKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgc3dpdGNoIChtYXRjaFswXSkge1xuICAgIGNhc2UgJ00nOlxuICAgICAge1xuICAgICAgICB2YXIgdmFsdWUgPSByZXBsYWNlTW9udGgoc3RyLnJlcGxhY2UobWF0Y2gsIGRhdGUuZ2V0TW9udGgoKSksIGRhdGUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgY2FzZSAnTU0nOlxuICAgICAge1xuICAgICAgICB2YXIgemVyb0xlYWRpbmdNb250aCA9IHplcm9MZWFkaW5nKGRhdGUuZ2V0TW9udGgoKS50b1N0cmluZygpKTtcbiAgICAgICAgdmFyIF92YWx1ZTIgPSByZXBsYWNlTW9udGgoc3RyLnJlcGxhY2UobWF0Y2gsIHplcm9MZWFkaW5nTW9udGgpLCBkYXRlKTtcbiAgICAgICAgcmV0dXJuIF92YWx1ZTI7XG4gICAgICB9XG4gICAgY2FzZSAnTU1NJzpcbiAgICBjYXNlICdNTU1NJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIF92YWx1ZTMgPSByZXBsYWNlTW9udGgoc3RyLnJlcGxhY2UobWF0Y2gsIF9jb25zdGFudHMuTU9OVEhfTkFNRVNbZGF0ZS5nZXRNb250aCgpIC0gMV0pLCBkYXRlKTtcbiAgICAgICAgcmV0dXJuIF92YWx1ZTM7XG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlRGF5KHN0ciwgZGF0ZSkge1xuICB2YXIgbWF0Y2ggPSBzdHIubWF0Y2goL1tkRF0rLyk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG4gIHN3aXRjaCAobWF0Y2hbMF0pIHtcbiAgICBjYXNlICdEJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcmVwbGFjZURheShzdHIucmVwbGFjZShtYXRjaCwgZGF0ZS5nZXREYXRlKCkpLCBkYXRlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIGNhc2UgJ0REJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHplcm9MZWFkaW5nRGF0ZSA9IHplcm9MZWFkaW5nKGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpO1xuICAgICAgICB2YXIgX3ZhbHVlNCA9IHJlcGxhY2VEYXkoc3RyLnJlcGxhY2UobWF0Y2gsIHplcm9MZWFkaW5nRGF0ZSksIGRhdGUpO1xuICAgICAgICByZXR1cm4gX3ZhbHVlNDtcbiAgICAgIH1cbiAgICBjYXNlICdkJzpcbiAgICBjYXNlICdkZCc6XG4gICAgICB7XG4gICAgICAgIHZhciBfdmFsdWU1ID0gcmVwbGFjZURheShzdHIucmVwbGFjZShtYXRjaCwgX2NvbnN0YW50cy5BQkJSX0RBWVNbZGF0ZS5nZXREYXkoKV0pLCBkYXRlKTtcbiAgICAgICAgcmV0dXJuIF92YWx1ZTU7XG4gICAgICB9XG4gICAgY2FzZSAnZGRkJzpcbiAgICBjYXNlICdkZGRkJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIF92YWx1ZTYgPSByZXBsYWNlRGF5KHN0ci5yZXBsYWNlKG1hdGNoLCBfY29uc3RhbnRzLkRBWVNfTkFNRVNbZGF0ZS5nZXREYXkoKV0pLCBkYXRlKTtcbiAgICAgICAgcmV0dXJuIF92YWx1ZTY7XG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbW9kOiBtb2QsXG4gIGRpdjogZGl2LFxuICByZXBsYWNlRGF5OiByZXBsYWNlRGF5LFxuICByZXBsYWNlTW9udGg6IHJlcGxhY2VNb250aCxcbiAgcmVwbGFjZVllYXI6IHJlcGxhY2VZZWFyXG59O1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIE1PTlRIX05BTUVTOiBbJ9mB2LHZiNix2K/bjNmGJywgJ9in2LHYr9uM2KjZh9i02KonLCAn2K7Ysdiv2KfYrycsICfYqtuM2LEnLCAn2KfZhdix2K/Yp9ivJywgJ9i02YfYsduM2YjYsScsICfZhdmH2LEnLCAn2KLYqNin2YYnLCAn2KLYsNixJywgJ9iv24wnLCAn2KjZh9mF2YYnLCAn2KfYs9mB2YbYryddLFxuICBBQkJSX0RBWVM6IFsn27HYtCcsICfbsti0JywgJ9uz2LQnLCAn27TYtCcsICfbtdi0JywgJ9isJywgJ9i0J10sXG4gIERBWVNfTkFNRVM6IFsn24zaqdi02YbYqNmHJywgJ9iv2YjYtNmG2KjZhycsICfYs9mH4oCM2LTZhtio2YcnLCAn2obZh9in2LHYtNmG2KjZhycsICfZvtmG2KzigIzYtNmG2KjZhycsICfYrNmF2LnZhycsICfYtNmG2KjZhyddLFxuICBHUkVHT1JJQU5fRVBPQ0g6IDE3MjE0MjUuNSxcbiAgUEVSU0lBTl9FUE9DSDogMTk0ODMyMC41XG59O1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9oZWxwZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9jb25zdGFudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQ29udmVydGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb252ZXJ0ZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnZlcnRlcik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29udmVydGVyLCBudWxsLCBbe1xuICAgIGtleTogJ2xlYXBHcmVnb3JpYW4nLFxuXG4gICAgLy8gIExFQVBfR1JFR09SSUFOICAtLSAgSXMgYSBnaXZlbiB5ZWFyIGluIHRoZSBHcmVnb3JpYW4gY2FsZW5kYXIgYSBsZWFwIHllYXI/XG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXBHcmVnb3JpYW4oeWVhcikge1xuICAgICAgcmV0dXJuIHllYXIgJSA0ID09PSAwICYmICEoeWVhciAlIDEwMCA9PT0gMCAmJiB5ZWFyICUgNDAwICE9PSAwKTtcbiAgICB9XG5cbiAgICAvLyBHUkVHT1JJQU5fVE9fSkQgIC0tICBEZXRlcm1pbmUgSnVsaWFuIGRheSBudW1iZXIgZnJvbSBHcmVnb3JpYW4gY2FsZW5kYXIgZGF0ZVxuXG4gIH0sIHtcbiAgICBrZXk6ICdncmVnb3JpYW5Ub0p1bGlhbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdyZWdvcmlhblRvSnVsaWFuKHllYXIsIG1vbnRoLCBkYXkpIHtcbiAgICAgIHZhciBwYWQgPSB2b2lkIDA7XG4gICAgICBpZiAobW9udGggPD0gMikge1xuICAgICAgICBwYWQgPSAwO1xuICAgICAgfSBlbHNlIGlmIChDb252ZXJ0ZXIubGVhcEdyZWdvcmlhbih5ZWFyKSkge1xuICAgICAgICBwYWQgPSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZCA9IC0yO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX2NvbnN0YW50cy5HUkVHT1JJQU5fRVBPQ0ggLSAxICsgMzY1ICogKHllYXIgLSAxKSArIE1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDQpICsgLU1hdGguZmxvb3IoKHllYXIgLSAxKSAvIDEwMCkgKyBNYXRoLmZsb29yKCh5ZWFyIC0gMSkgLyA0MDApICsgTWF0aC5mbG9vcigoMzY3ICogbW9udGggLSAzNjIpIC8gMTIgKyAocGFkICsgZGF5KSk7XG4gICAgfVxuXG4gICAgLy8gIEpEX1RPX0dSRUdPUklBTiAgLS0gIENhbGN1bGF0ZSBHcmVnb3JpYW4gY2FsZW5kYXIgZGF0ZSBmcm9tIEp1bGlhbiBkYXlcblxuICB9LCB7XG4gICAga2V5OiAnanVsaWFuVG9HcmVnb3JpYW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBqdWxpYW5Ub0dyZWdvcmlhbihqZCkge1xuICAgICAgdmFyIHdqZCA9IE1hdGguZmxvb3IoamQgLSAwLjUpICsgMC41O1xuICAgICAgdmFyIGRlcG9jaCA9IHdqZCAtIF9jb25zdGFudHMuR1JFR09SSUFOX0VQT0NIO1xuICAgICAgdmFyIHF1YWRyaWNlbnQgPSBNYXRoLmZsb29yKGRlcG9jaCAvIDE0NjA5Nyk7XG4gICAgICB2YXIgZHFjID0gKDAsIF9oZWxwZXJzLm1vZCkoZGVwb2NoLCAxNDYwOTcpO1xuICAgICAgdmFyIGNlbnQgPSBNYXRoLmZsb29yKGRxYyAvIDM2NTI0KTtcbiAgICAgIHZhciBkY2VudCA9ICgwLCBfaGVscGVycy5tb2QpKGRxYywgMzY1MjQpO1xuICAgICAgdmFyIHF1YWQgPSBNYXRoLmZsb29yKGRjZW50IC8gMTQ2MSk7XG4gICAgICB2YXIgZHF1YWQgPSAoMCwgX2hlbHBlcnMubW9kKShkY2VudCwgMTQ2MSk7XG4gICAgICB2YXIgeWluZGV4ID0gTWF0aC5mbG9vcihkcXVhZCAvIDM2NSk7XG4gICAgICB2YXIgeWVhciA9IHF1YWRyaWNlbnQgKiA0MDAgKyBjZW50ICogMTAwICsgcXVhZCAqIDQgKyB5aW5kZXg7XG4gICAgICBpZiAoIShjZW50ID09PSA0IHx8IHlpbmRleCA9PT0gNCkpIHtcbiAgICAgICAgeWVhciArPSAxO1xuICAgICAgfVxuICAgICAgdmFyIHllYXJkYXkgPSB3amQgLSBDb252ZXJ0ZXIuZ3JlZ29yaWFuVG9KdWxpYW4oeWVhciwgMSwgMSk7XG4gICAgICB2YXIgbGVhcGFkaiA9IHZvaWQgMDtcbiAgICAgIGlmICh3amQgPCBDb252ZXJ0ZXIuZ3JlZ29yaWFuVG9KdWxpYW4oeWVhciwgMywgMSkpIHtcbiAgICAgICAgbGVhcGFkaiA9IDA7XG4gICAgICB9IGVsc2UgaWYgKENvbnZlcnRlci5sZWFwR3JlZ29yaWFuKHllYXIpID8gMSA6IDIpIHtcbiAgICAgICAgbGVhcGFkaiA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWFwYWRqID0gMjtcbiAgICAgIH1cbiAgICAgIHZhciBtb250aCA9IE1hdGguZmxvb3IoKCh5ZWFyZGF5ICsgbGVhcGFkaikgKiAxMiArIDM3MykgLyAzNjcpO1xuICAgICAgdmFyIGRheSA9IHdqZCAtIENvbnZlcnRlci5ncmVnb3JpYW5Ub0p1bGlhbih5ZWFyLCBtb250aCwgMSkgKyAxO1xuXG4gICAgICByZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldO1xuICAgIH1cblxuICAgIC8vICBMRUFQX1BFUlNJQU4gIC0tICBJcyBhIGdpdmVuIHllYXIgYSBsZWFwIHllYXIgaW4gdGhlIFBlcnNpYW4gY2FsZW5kYXIgP1xuXG4gIH0sIHtcbiAgICBrZXk6ICdsZWFwUGVyc2lhbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXBQZXJzaWFuKHllYXIpIHtcbiAgICAgIHJldHVybiAoKHllYXIgLSAoeWVhciA+IDAgPyA0NzQgOiA0NzMpKSAlIDI4MjAgKyA0NzQgKyAzOCkgKiA2ODIgJSAyODE2IDwgNjgyO1xuICAgIH1cblxuICAgIC8vICBQRVJTSUFOX1RPX0pEICAtLSAgRGV0ZXJtaW5lIEp1bGlhbiBkYXkgZnJvbSBQZXJzaWFuIGRhdGVcblxuICB9LCB7XG4gICAga2V5OiAncGVyc2lhblRvSnVsaWFuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGVyc2lhblRvSnVsaWFuKHllYXIsIG1vbnRoLCBkYXkpIHtcbiAgICAgIHZhciBlcGJhc2UgPSB5ZWFyIC0gKHllYXIgPj0gMCA/IDQ3NCA6IDQ3Myk7XG4gICAgICB2YXIgZXB5ZWFyID0gNDc0ICsgKDAsIF9oZWxwZXJzLm1vZCkoZXBiYXNlLCAyODIwKTtcblxuICAgICAgcmV0dXJuIGRheSArIChtb250aCA8PSA3ID8gKG1vbnRoIC0gMSkgKiAzMSA6IChtb250aCAtIDEpICogMzAgKyA2KSArIE1hdGguZmxvb3IoKGVweWVhciAqIDY4MiAtIDExMCkgLyAyODE2KSArIChlcHllYXIgLSAxKSAqIDM2NSArIE1hdGguZmxvb3IoZXBiYXNlIC8gMjgyMCkgKiAxMDI5OTgzICsgKF9jb25zdGFudHMuUEVSU0lBTl9FUE9DSCAtIDEpO1xuICAgIH1cblxuICAgIC8vICBKRF9UT19QRVJTSUFOICAtLSAgQ2FsY3VsYXRlIFBlcnNpYW4gZGF0ZSBmcm9tIEp1bGlhbiBkYXlcblxuICB9LCB7XG4gICAga2V5OiAnanVsaWFuVG9QZXJzaWFuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24ganVsaWFuVG9QZXJzaWFuKGpkKSB7XG4gICAgICB2YXIgbmpkID0gTWF0aC5mbG9vcihqZCkgKyAwLjU7XG4gICAgICB2YXIgZGVwb2NoID0gbmpkIC0gQ29udmVydGVyLnBlcnNpYW5Ub0p1bGlhbig0NzUsIDEsIDEpO1xuICAgICAgdmFyIGN5Y2xlID0gTWF0aC5mbG9vcihkZXBvY2ggLyAxMDI5OTgzKTtcbiAgICAgIHZhciBjeWVhciA9ICgwLCBfaGVscGVycy5tb2QpKGRlcG9jaCwgMTAyOTk4Myk7XG4gICAgICB2YXIgeWN5Y2xlID0gdm9pZCAwO1xuICAgICAgaWYgKGN5ZWFyID09PSAxMDI5OTgyKSB7XG4gICAgICAgIHljeWNsZSA9IDI4MjA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYXV4MSA9IE1hdGguZmxvb3IoY3llYXIgLyAzNjYpO1xuICAgICAgICB2YXIgYXV4MiA9ICgwLCBfaGVscGVycy5tb2QpKGN5ZWFyLCAzNjYpO1xuICAgICAgICB5Y3ljbGUgPSBNYXRoLmZsb29yKCgyMTM0ICogYXV4MSArIDI4MTYgKiBhdXgyICsgMjgxNSkgLyAxMDI4NTIyKSArIGF1eDEgKyAxO1xuICAgICAgfVxuICAgICAgdmFyIHllYXIgPSB5Y3ljbGUgKyAyODIwICogY3ljbGUgKyA0NzQ7XG4gICAgICBpZiAoeWVhciA8PSAwKSB7XG4gICAgICAgIHllYXIgLT0gMTtcbiAgICAgIH1cbiAgICAgIHZhciB5ZGF5ID0gbmpkIC0gQ29udmVydGVyLnBlcnNpYW5Ub0p1bGlhbih5ZWFyLCAxLCAxKSArIDE7XG4gICAgICB2YXIgbW9udGggPSB5ZGF5IDw9IDE4NiA/IE1hdGguY2VpbCh5ZGF5IC8gMzEpIDogTWF0aC5jZWlsKCh5ZGF5IC0gNikgLyAzMCk7XG4gICAgICB2YXIgZGF5ID0gbmpkIC0gQ29udmVydGVyLnBlcnNpYW5Ub0p1bGlhbih5ZWFyLCBtb250aCwgMSkgKyAxO1xuXG4gICAgICByZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BlcnNpYW5Ub0dyZWdvcmlhbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBlcnNpYW5Ub0dyZWdvcmlhbih5ZWFyLCBtb250aCwgZGF5KSB7XG4gICAgICB2YXIganVsaWFuID0gQ29udmVydGVyLnBlcnNpYW5Ub0p1bGlhbih5ZWFyLCBtb250aCwgZGF5KTtcblxuICAgICAgcmV0dXJuIENvbnZlcnRlci5qdWxpYW5Ub0dyZWdvcmlhbihqdWxpYW4pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dyZWdvcmlhblRvUGVyc2lhbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdyZWdvcmlhblRvUGVyc2lhbih5ZWFyLCBtb250aCwgZGF5KSB7XG4gICAgICB2YXIganVsaWFuID0gQ29udmVydGVyLmdyZWdvcmlhblRvSnVsaWFuKHllYXIsIG1vbnRoLCBkYXkpO1xuXG4gICAgICByZXR1cm4gQ29udmVydGVyLmp1bGlhblRvUGVyc2lhbihqdWxpYW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb252ZXJ0ZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENvbnZlcnRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTsgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vYXJhc2htL0pEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogQGF1dGhvcjogQXJhc2ggTW91c2F2aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEB2ZXJzaW9uOiAxLjAuMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG52YXIgX2NvbnZlcnRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbnZhciBfY29udmVydGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbnZlcnRlcik7XG5cbnZhciBfaGVscGVycyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBoZWxwZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2hlbHBlcnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgSkRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEpEYXRlKCkge1xuICAgIHZhciBpbnB1dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbmV3IERhdGUoKTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBKRGF0ZSk7XG5cbiAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICB0aGlzLmRhdGUgPSBpbnB1dC5tYXAoZnVuY3Rpb24gKG51bSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobnVtLCAxMCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2QgPSB0aGlzLnRvR3JlZ29yaWFuKCk7XG4gICAgfSBlbHNlIGlmIChpbnB1dCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHRoaXMuX2QgPSBpbnB1dDtcbiAgICAgIHRoaXMuZGF0ZSA9IEpEYXRlLnRvSmFsYWxpKHRoaXMuaW5wdXQpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIENvdmVydHMgYSBHcmVnb3JpYW4gZGF0ZSB0byBKYWxhbGkgZGF0ZVxuICAgKlxuICAgKiBAcGFyYW1zIHtEYXRlfSBkYXRlXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhKRGF0ZSwgW3tcbiAgICBrZXk6ICd0b0dyZWdvcmlhbicsXG5cblxuICAgIC8qXG4gICAgICogQ29udmVydHMgSkRhdGUgZGF0ZSB0byBHcmVnb3JpYW5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9HcmVnb3JpYW4oKSB7XG4gICAgICByZXR1cm4gSkRhdGUudG9HcmVnb3JpYW4odGhpcy5kYXRlWzBdLCB0aGlzLmRhdGVbMV0sIHRoaXMuZGF0ZVsyXSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTaG93cyBKYWxhbGkncyBmdWxsIHllYXIsIGV4OiAxMzkzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtJbnRlZ2VyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRGdWxsWWVhcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZ1bGxZZWFyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZVswXTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNldHMgdGhlIEphbGFsaSBmdWxsIHllYXJcbiAgICAgKlxuICAgICAqIEBwYXJhbXMge051bWJlcn0geWVhclxuICAgICAqIEByZXR1cm4ge0pEYXRlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXRGdWxsWWVhcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEZ1bGxZZWFyKHllYXIpIHtcbiAgICAgIHRoaXMuZGF0ZVswXSA9IHBhcnNlSW50KHllYXIsIDEwKTtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLnRvR3JlZ29yaWFuKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNob3dzIEphbGFsaSBtb250aCBudW1iZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEphbGFsaSBtb250aCBudW1iZXJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0TW9udGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNb250aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGVbMV07XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBTZXRzIHRoZSBKYWxhbGkgbW9udGggbnVtYmVyLiBBbiBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMTFcbiAgICAgKlxuICAgICAqIEBwYXJhbXMge051bWJlcn0gbW9udGhcbiAgICAgKiBAcmV0dXJucyB7SkRhdGV9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldE1vbnRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TW9udGgobW9udGgpIHtcbiAgICAgIHZhciBmaXhlZCA9IGhlbHBlcnMuZml4TW9udGgodGhpcy5nZXRGdWxsWWVhcigpLCBwYXJzZUludChtb250aCwgMTApKTtcbiAgICAgIHRoaXMuZGF0ZVswXSA9IGZpeGVkWzBdO1xuICAgICAgdGhpcy5kYXRlWzFdID0gZml4ZWRbMV07XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy50b0dyZWdvcmlhbigpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIFNob3dzIEphbGFsaSBkYXkgbnVtYmVyLiBBIG51bWJlciBiZXR3ZWVuIDAgdG8gMzFcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gSmFsYWxpIGRheSBudW1iZXJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0RGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRlWzJdO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogU2V0cyBKYWxhbGkgZGF5IG51bWJlci4gQSBudW1iZXIgYmV0d2VlbiAwIHRvIDMxXG4gICAgICpcbiAgICAgKiBAcGFyYW1zIHtOdW1iZXJ9IGRhdGVcbiAgICAgKiBAcmV0dXJuIHtKRGF0ZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2V0RGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldERhdGUoZGF0ZSkge1xuICAgICAgdGhpcy5kYXRlWzJdID0gcGFyc2VJbnQoZGF0ZSwgMTApO1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMudG9HcmVnb3JpYW4oKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZXR1cm5zIHRoZSBkYXkgb2YgdGhlIHdlZWsgZm9yIHRoZSBzcGVjaWZpZWQgZGF0ZS4gQSBudW1iZXIgYmV0d2VlbiAwIHRvIDZcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldERheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERheSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kLmdldERheSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogUmV0dXJucyBhIGZvcm1hdGVkIG91dHB1dCBvZiBjdXJyZW50IGRhdGVcbiAgICAgKlxuICAgICAqIEBwYXJhbXMge1N0cmluZ30gZm9ybWF0XG4gICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdmb3JtYXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXQoX2Zvcm1hdCkge1xuICAgICAgdmFyIHJlc3VsdCA9IGhlbHBlcnMucmVwbGFjZVllYXIoX2Zvcm1hdCwgdGhpcyk7XG4gICAgICByZXN1bHQgPSBoZWxwZXJzLnJlcGxhY2VNb250aChyZXN1bHQsIHRoaXMpO1xuICAgICAgcmVzdWx0ID0gaGVscGVycy5yZXBsYWNlRGF5KHJlc3VsdCwgdGhpcyk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICd0b0phbGFsaScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvSmFsYWxpKGRhdGUpIHtcbiAgICAgIHZhciBqdWxpYW5EYXRlID0gX2NvbnZlcnRlcjIuZGVmYXVsdC5ncmVnb3JpYW5Ub0p1bGlhbihkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDEsIGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICAgIHZhciBqZGF0ZSA9IF9jb252ZXJ0ZXIyLmRlZmF1bHQuanVsaWFuVG9QZXJzaWFuKGp1bGlhbkRhdGUpO1xuXG4gICAgICByZXR1cm4gamRhdGU7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcblxuICB9LCB7XG4gICAga2V5OiAndG9famFsYWxpJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9famFsYWxpKGRhdGUpIHtcbiAgICAgIHJldHVybiBKRGF0ZS50b0phbGFsaShkYXRlKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIGNvbnZlcnRzIGEgSmFsYWxpIGRhdGUgdG8gR3JlZ29yaWFuXG4gICAgICpcbiAgICAgKiBAcGFyYW1zIHtOdW1iZXJ9IHllYXJcbiAgICAgKiBAcGFyYW1zIHtOdW1iZXJ9IG1vbnRoXG4gICAgICogQHBhcmFtcyB7TnVtYmVyfSBkYXlcbiAgICAgKiBAcmV0dXJuIHtEYXRlfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd0b0dyZWdvcmlhbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvR3JlZ29yaWFuKHllYXIsIG1vbnRoLCBkYXkpIHtcbiAgICAgIHZhciBnZGF0ZSA9IF9jb252ZXJ0ZXIyLmRlZmF1bHQuanVsaWFuVG9HcmVnb3JpYW4oX2NvbnZlcnRlcjIuZGVmYXVsdC5wZXJzaWFuVG9KdWxpYW4oeWVhciwgbW9udGgsIGRheSkpO1xuXG4gICAgICByZXR1cm4gbmV3IERhdGUoZ2RhdGVbMF0sIGdkYXRlWzFdIC0gMSwgZ2RhdGVbMl0pO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cbiAgfSwge1xuICAgIGtleTogJ3RvX2dyZWdvcmlhbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvX2dyZWdvcmlhbih5ZWFyLCBtb250aCwgZGF5KSB7XG4gICAgICByZXR1cm4gSkRhdGUudG9HcmVnb3JpYW4oeWVhciwgbW9udGgsIGRheSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBDaGVja3MgaWYgYSBnaXZlbiB5ZWFyIGlzIGEgbGVhcCB5ZWFyIG9yIG5vdFxuICAgICAqXG4gICAgICogQHBhcmFtcyB7TnVtYmVyfSB5ZWFyXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaXNMZWFwWWVhcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcikge1xuICAgICAgcmV0dXJuIF9jb252ZXJ0ZXIyLmRlZmF1bHQubGVhcFBlcnNpYW4oeWVhcik7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBSZXR1cm5zIG1vbnRoIGxlbmd0aC5cbiAgICAgKlxuICAgICAqIEBwYXJhbXMge051bWJlcn0geWVhclxuICAgICAqIEBwYXJhbXMge051bWJlcn0gbW9udGggemVybyBiYXNlZFxuICAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGF5c0luTW9udGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICAgICAgdmFyIGNhbGNlZFllYXIgPSB5ZWFyIC0gTWF0aC5mbG9vcihtb250aCAvIDEyKTtcbiAgICAgIHZhciBjYWxjZWRNb250aCA9IG1vbnRoIC0gTWF0aC5mbG9vcihtb250aCAvIDEyKSAqIDEyO1xuXG4gICAgICBpZiAoY2FsY2VkTW9udGggPCAwKSB7XG4gICAgICAgIGNhbGNlZE1vbnRoICs9IDEyO1xuICAgICAgICBjYWxjZWRZZWFyIC09IDE7XG4gICAgICB9IGVsc2UgaWYgKGNhbGNlZE1vbnRoID09PSAwKSB7XG4gICAgICAgIGNhbGNlZE1vbnRoID0gMTI7XG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxjZWRNb250aCA8IDYpIHtcbiAgICAgICAgcmV0dXJuIDMxO1xuICAgICAgfSBlbHNlIGlmIChjYWxjZWRNb250aCA8IDExKSB7XG4gICAgICAgIHJldHVybiAzMDtcbiAgICAgIH0gZWxzZSBpZiAoSkRhdGUuaXNMZWFwWWVhcihjYWxjZWRZZWFyKSkge1xuICAgICAgICByZXR1cm4gMzA7XG4gICAgICB9XG4gICAgICByZXR1cm4gMjk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEpEYXRlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBKRGF0ZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpkYXRlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2phbGFsaS1kYXRlL2xpYi9qZGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gNyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
          })
        