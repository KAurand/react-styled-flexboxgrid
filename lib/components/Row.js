"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _config = _interopRequireWildcard(require("../config"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject11() {
  var data = _taggedTemplateLiteralLoose(["\n    order: 1;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteralLoose(["\n    order: -1;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteralLoose(["\n    justify-content: space-between;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n    justify-content: space-around;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n    align-items: flex-end;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n    align-items: center;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n    align-items: flex-start;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n    justify-content: flex-end;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n    justify-content: center;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n    justify-content: flex-start;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-right: ", "rem;\n  margin-left: ", "rem;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var ModificatorType = _propTypes["default"].oneOf(_config.DIMENSION_NAMES);

var Row = _styled["default"].div(_templateObject(), function (p) {
  return (0, _config["default"])(p).gutterWidth / 2 * -1;
}, function (p) {
  return (0, _config["default"])(p).gutterWidth / 2 * -1;
}, function (p) {
  return p.reverse && "\n    flex-direction: row-reverse;\n  ";
}, function (p) {
  return p.start && (0, _config["default"])(p).media[p.start](_templateObject2());
}, function (p) {
  return p.center && (0, _config["default"])(p).media[p.center](_templateObject3());
}, function (p) {
  return p.end && (0, _config["default"])(p).media[p.end](_templateObject4());
}, function (p) {
  return p.top && (0, _config["default"])(p).media[p.top](_templateObject5());
}, function (p) {
  return p.middle && (0, _config["default"])(p).media[p.middle](_templateObject6());
}, function (p) {
  return p.bottom && (0, _config["default"])(p).media[p.bottom](_templateObject7());
}, function (p) {
  return p.around && (0, _config["default"])(p).media[p.around](_templateObject8());
}, function (p) {
  return p.between && (0, _config["default"])(p).media[p.between](_templateObject9());
}, function (p) {
  return p.first && (0, _config["default"])(p).media[p.first](_templateObject10());
}, function (p) {
  return p.last && (0, _config["default"])(p).media[p.last](_templateObject11());
});

Row.displayName = 'Row';
Row.propTypes = {
  reverse: _propTypes["default"].bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType,
  first: ModificatorType,
  last: ModificatorType,
  children: _propTypes["default"].node
};
var _default = Row;
exports["default"] = _default;