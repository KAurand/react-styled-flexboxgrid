"use strict";

exports.__esModule = true;
exports["default"] = config;
exports.DIMENSION_NAMES = exports.BASE_CONF = void 0;

var _core = require("@emotion/core");

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    @media ", " {\n      ", "\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var THEME_CONF = 'flexboxgrid';
var BASE_CONF = {
  gridSize: 12,
  gutterWidth: 1,
  outerMargin: 2,
  mediaQuery: 'only screen',
  container: {
    sm: 46,
    md: 61,
    lg: 76
  },
  breakpoints: {
    xs: 0,
    sm: 48,
    md: 64,
    lg: 75
  }
};
exports.BASE_CONF = BASE_CONF;
var configCache = [];

var makeCacheId = function makeCacheId(props) {
  return JSON.stringify(props.theme && props.theme[THEME_CONF] || {});
};

var resolveConfig = function resolveConfig(props) {
  var themeConf = props.theme && props.theme[THEME_CONF] || {};

  var conf = _objectSpread({}, BASE_CONF, themeConf, {
    container: _objectSpread({}, BASE_CONF.container, themeConf.container),
    breakpoints: _objectSpread({}, BASE_CONF.breakpoints, themeConf.breakpoints)
  });

  conf.media = Object.keys(conf.breakpoints).reduce(function (media, breakpoint) {
    var breakpointWidth = conf.breakpoints[breakpoint];
    media[breakpoint] = makeMedia([conf.mediaQuery, breakpoint !== 0 && "(min-width: " + breakpointWidth + "em)"].filter(Boolean).join(' and '));
    return media;
  }, {});
  return conf;
};

var DIMENSION_NAMES = ['xs', 'sm', 'md', 'lg'];
exports.DIMENSION_NAMES = DIMENSION_NAMES;

function config(props) {
  var cacheId = makeCacheId(props);

  if (configCache[0] === cacheId) {
    return configCache[1];
  }

  var conf = resolveConfig(props);
  configCache[0] = cacheId;
  configCache[1] = conf;
  return conf;
}

function makeMedia(media) {
  return function () {
    return (0, _core.css)(_templateObject(), media, _core.css.apply(void 0, arguments));
  };
}