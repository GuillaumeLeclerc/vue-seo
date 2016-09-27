(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueSEO"] = factory();
	else
		root["VueSEO"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _merge2 = __webpack_require__(1);

	var _merge3 = _interopRequireDefault(_merge2);

	var _find2 = __webpack_require__(114);

	var _find3 = _interopRequireDefault(_find2);

	var _head = __webpack_require__(154);

	var _head2 = _interopRequireDefault(_head);

	var _title = __webpack_require__(183);

	var _title2 = _interopRequireDefault(_title);

	var _organization = __webpack_require__(186);

	var _organization2 = _interopRequireDefault(_organization);

	var _breadcrumbs = __webpack_require__(189);

	var _breadcrumbs2 = _interopRequireDefault(_breadcrumbs);

	var _vueStore = __webpack_require__(176);

	var _vueStore2 = _interopRequireDefault(_vueStore);

	var _type = __webpack_require__(191);

	var _type2 = _interopRequireDefault(_type);

	var _lang = __webpack_require__(193);

	var _lang2 = _interopRequireDefault(_lang);

	var _description = __webpack_require__(195);

	var _description2 = _interopRequireDefault(_description);

	var _image = __webpack_require__(197);

	var _image2 = _interopRequireDefault(_image);

	var _autoLang = __webpack_require__(199);

	var _autoLang2 = _interopRequireDefault(_autoLang);

	var _twitterCard = __webpack_require__(275);

	var _twitterCard2 = _interopRequireDefault(_twitterCard);

	var _store = __webpack_require__(169);

	var _displayer = __webpack_require__(201);

	var _displayer2 = _interopRequireDefault(_displayer);

	var _displayer3 = __webpack_require__(226);

	var _displayer4 = _interopRequireDefault(_displayer3);

	var _displayer5 = __webpack_require__(256);

	var _displayer6 = _interopRequireDefault(_displayer5);

	var _displayer7 = __webpack_require__(249);

	var _displayer8 = _interopRequireDefault(_displayer7);

	var _urlChanged = __webpack_require__(181);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  policies: _store.policies,
	  install: function install(Vue) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


	    var titleChild = document.head.childNodes;
	    var originalTitle = (0, _find3.default)(titleChild, function (el) {
	      return el.tagName === 'TITLE';
	    });
	    if (originalTitle) {
	      document.head.removeChild(originalTitle);
	    }
	    _vueStore2.default.Vue = Vue;
	    (0, _merge3.default)(_vueStore2.default.options, {
	      openGraph: true,
	      html: true,
	      schemaOrg: true
	    }, options, {
	      policies: {
	        breadcrumbs: _store.policies.identity,
	        'lang': _store.policies.repeat,
	        'image': _store.policies.repeat
	      }
	    });

	    Vue.component('seoTitle', _title2.default);
	    Vue.component('seoOrganization', _organization2.default);
	    Vue.component('seoBreadcrumb', _breadcrumbs2.default);
	    Vue.component('seoImage', _image2.default);
	    Vue.component('seoType', _type2.default);
	    Vue.component('seoLang', _lang2.default);
	    Vue.component('seoDescription', _description2.default);
	    Vue.component('seoAutoLang', _autoLang2.default);
	    Vue.component('seoTwitterCard', _twitterCard2.default);

	    _head2.default.el = 'head';
	    _head2.default.comps.push(Vue.extend(_displayer2.default));
	    _head2.default.comps.push(Vue.extend(_displayer4.default));
	    _head2.default.comps.push(Vue.extend(_displayer6.default));
	    _head2.default.comps.push(Vue.extend(_displayer8.default));
	    new Vue(_head2.default);
	  },

	  urlChangedNotify: _urlChanged.notify
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(2),
	    createAssigner = __webpack_require__(110);

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	module.exports = merge;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(3),
	    arrayEach = __webpack_require__(44),
	    assignMergeValue = __webpack_require__(45),
	    baseKeysIn = __webpack_require__(46),
	    baseMergeDeep = __webpack_require__(49),
	    isArray = __webpack_require__(62),
	    isObject = __webpack_require__(21),
	    isTypedArray = __webpack_require__(104);

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  if (!(isArray(source) || isTypedArray(source))) {
	    var props = baseKeysIn(source);
	  }
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  });
	}

	module.exports = baseMerge;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(4),
	    stackClear = __webpack_require__(12),
	    stackDelete = __webpack_require__(13),
	    stackGet = __webpack_require__(14),
	    stackHas = __webpack_require__(15),
	    stackSet = __webpack_require__(16);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(5),
	    listCacheDelete = __webpack_require__(6),
	    listCacheGet = __webpack_require__(9),
	    listCacheHas = __webpack_require__(10),
	    listCacheSet = __webpack_require__(11);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	module.exports = listCacheClear;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(7);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(8);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(7);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(7);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(7);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(4);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	module.exports = stackClear;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	module.exports = stackDelete;


/***/ },
/* 14 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(4),
	    Map = __webpack_require__(17),
	    MapCache = __webpack_require__(29);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(18),
	    root = __webpack_require__(25);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(19),
	    getValue = __webpack_require__(28);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(20),
	    isHostObject = __webpack_require__(22),
	    isMasked = __webpack_require__(23),
	    isObject = __webpack_require__(21),
	    toSource = __webpack_require__(27);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(24);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(25);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(26);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 27 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(30),
	    mapCacheDelete = __webpack_require__(38),
	    mapCacheGet = __webpack_require__(41),
	    mapCacheHas = __webpack_require__(42),
	    mapCacheSet = __webpack_require__(43);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(31),
	    ListCache = __webpack_require__(4),
	    Map = __webpack_require__(17);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(32),
	    hashDelete = __webpack_require__(34),
	    hashGet = __webpack_require__(35),
	    hashHas = __webpack_require__(36),
	    hashSet = __webpack_require__(37);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(33);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	module.exports = hashClear;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(18);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	module.exports = hashDelete;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(33);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(33);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(33);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(39);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	module.exports = mapCacheDelete;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(40);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 40 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(39);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(39);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(39);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 44 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(8);

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (typeof key == 'number' && value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	module.exports = assignMergeValue;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21),
	    isPrototype = __webpack_require__(47),
	    nativeKeysIn = __webpack_require__(48);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ },
/* 47 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var assignMergeValue = __webpack_require__(45),
	    baseClone = __webpack_require__(50),
	    copyArray = __webpack_require__(68),
	    isArguments = __webpack_require__(57),
	    isArray = __webpack_require__(62),
	    isArrayLikeObject = __webpack_require__(58),
	    isFunction = __webpack_require__(20),
	    isObject = __webpack_require__(21),
	    isPlainObject = __webpack_require__(103),
	    isTypedArray = __webpack_require__(104),
	    toPlainObject = __webpack_require__(108);

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    newValue = srcValue;
	    if (isArray(srcValue) || isTypedArray(srcValue)) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	      else {
	        newValue = objValue;
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}

	module.exports = baseMergeDeep;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(3),
	    arrayEach = __webpack_require__(44),
	    assignValue = __webpack_require__(51),
	    baseAssign = __webpack_require__(52),
	    cloneBuffer = __webpack_require__(67),
	    copyArray = __webpack_require__(68),
	    copySymbols = __webpack_require__(69),
	    getAllKeys = __webpack_require__(72),
	    getTag = __webpack_require__(75),
	    initCloneArray = __webpack_require__(81),
	    initCloneByTag = __webpack_require__(82),
	    initCloneObject = __webpack_require__(97),
	    isArray = __webpack_require__(62),
	    isBuffer = __webpack_require__(100),
	    isHostObject = __webpack_require__(22),
	    isObject = __webpack_require__(21),
	    keys = __webpack_require__(54);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	module.exports = baseClone;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(8);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	module.exports = assignValue;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(53),
	    keys = __webpack_require__(54);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(51);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(55),
	    baseKeys = __webpack_require__(64),
	    isArrayLike = __webpack_require__(59);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(56),
	    isArguments = __webpack_require__(57),
	    isArray = __webpack_require__(62),
	    isIndex = __webpack_require__(63);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(58);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(59),
	    isObjectLike = __webpack_require__(61);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(20),
	    isLength = __webpack_require__(60);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 60 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 61 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 62 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 63 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(47),
	    nativeKeys = __webpack_require__(65);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(66);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;


/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(53),
	    getSymbols = __webpack_require__(70);

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	module.exports = copySymbols;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(66),
	    stubArray = __webpack_require__(71);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

	module.exports = getSymbols;


/***/ },
/* 71 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(73),
	    getSymbols = __webpack_require__(70),
	    keys = __webpack_require__(54);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(74),
	    isArray = __webpack_require__(62);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ },
/* 74 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(76),
	    Map = __webpack_require__(17),
	    Promise = __webpack_require__(77),
	    Set = __webpack_require__(78),
	    WeakMap = __webpack_require__(79),
	    baseGetTag = __webpack_require__(80),
	    toSource = __webpack_require__(27);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(18),
	    root = __webpack_require__(25);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(18),
	    root = __webpack_require__(25);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(18),
	    root = __webpack_require__(25);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(18),
	    root = __webpack_require__(25);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 80 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	module.exports = initCloneArray;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(83),
	    cloneDataView = __webpack_require__(85),
	    cloneMap = __webpack_require__(86),
	    cloneRegExp = __webpack_require__(90),
	    cloneSet = __webpack_require__(91),
	    cloneSymbol = __webpack_require__(94),
	    cloneTypedArray = __webpack_require__(96);

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	module.exports = initCloneByTag;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(84);

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	module.exports = cloneArrayBuffer;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(25);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(83);

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	module.exports = cloneDataView;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(87),
	    arrayReduce = __webpack_require__(88),
	    mapToArray = __webpack_require__(89);

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	module.exports = cloneMap;


/***/ },
/* 87 */
/***/ function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	module.exports = addMapEntry;


/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ },
/* 89 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 90 */
/***/ function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	module.exports = cloneRegExp;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(92),
	    arrayReduce = __webpack_require__(88),
	    setToArray = __webpack_require__(93);

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	module.exports = cloneSet;


/***/ },
/* 92 */
/***/ function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}

	module.exports = addSetEntry;


/***/ },
/* 93 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(95);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	module.exports = cloneSymbol;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(25);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(83);

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	module.exports = cloneTypedArray;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(98),
	    getPrototype = __webpack_require__(99),
	    isPrototype = __webpack_require__(47);

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}

	module.exports = baseCreate;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(66);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(25),
	    stubFalse = __webpack_require__(102);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(101)(module)))

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 102 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(99),
	    isHostObject = __webpack_require__(22),
	    isObjectLike = __webpack_require__(61);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(105),
	    baseUnary = __webpack_require__(106),
	    nodeUtil = __webpack_require__(107);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(60),
	    isObjectLike = __webpack_require__(61);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 106 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(26);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(101)(module)))

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(53),
	    keysIn = __webpack_require__(109);

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}

	module.exports = toPlainObject;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(55),
	    baseKeysIn = __webpack_require__(46),
	    isArrayLike = __webpack_require__(59);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(111),
	    isIterateeCall = __webpack_require__(113);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(112);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = baseRest;


/***/ },
/* 112 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(8),
	    isArrayLike = __webpack_require__(59),
	    isIndex = __webpack_require__(63),
	    isObject = __webpack_require__(21);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var createFind = __webpack_require__(115),
	    findIndex = __webpack_require__(149);

	/**
	 * Iterates over elements of `collection`, returning the first element
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to inspect.
	 * @param {Function} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {*} Returns the matched element, else `undefined`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': true },
	 *   { 'user': 'fred',    'age': 40, 'active': false },
	 *   { 'user': 'pebbles', 'age': 1,  'active': true }
	 * ];
	 *
	 * _.find(users, function(o) { return o.age < 40; });
	 * // => object for 'barney'
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.find(users, { 'age': 1, 'active': true });
	 * // => object for 'pebbles'
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.find(users, ['active', false]);
	 * // => object for 'fred'
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.find(users, 'active');
	 * // => object for 'barney'
	 */
	var find = createFind(findIndex);

	module.exports = find;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var baseIteratee = __webpack_require__(116),
	    isArrayLike = __webpack_require__(59),
	    keys = __webpack_require__(54);

	/**
	 * Creates a `_.find` or `_.findLast` function.
	 *
	 * @private
	 * @param {Function} findIndexFunc The function to find the collection index.
	 * @returns {Function} Returns the new find function.
	 */
	function createFind(findIndexFunc) {
	  return function(collection, predicate, fromIndex) {
	    var iterable = Object(collection);
	    if (!isArrayLike(collection)) {
	      var iteratee = baseIteratee(predicate, 3);
	      collection = keys(collection);
	      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
	    }
	    var index = findIndexFunc(collection, predicate, fromIndex);
	    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	  };
	}

	module.exports = createFind;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(117),
	    baseMatchesProperty = __webpack_require__(131),
	    identity = __webpack_require__(145),
	    isArray = __webpack_require__(62),
	    property = __webpack_require__(146);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(118),
	    getMatchData = __webpack_require__(128),
	    matchesStrictComparable = __webpack_require__(130);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(3),
	    baseIsEqual = __webpack_require__(119);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(120),
	    isObject = __webpack_require__(21),
	    isObjectLike = __webpack_require__(61);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(3),
	    equalArrays = __webpack_require__(121),
	    equalByTag = __webpack_require__(126),
	    equalObjects = __webpack_require__(127),
	    getTag = __webpack_require__(75),
	    isArray = __webpack_require__(62),
	    isHostObject = __webpack_require__(22),
	    isTypedArray = __webpack_require__(104);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(122),
	    arraySome = __webpack_require__(125);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(29),
	    setCacheAdd = __webpack_require__(123),
	    setCacheHas = __webpack_require__(124);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 123 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 124 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 125 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(95),
	    Uint8Array = __webpack_require__(84),
	    eq = __webpack_require__(8),
	    equalArrays = __webpack_require__(121),
	    mapToArray = __webpack_require__(89),
	    setToArray = __webpack_require__(93);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(54);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(129),
	    keys = __webpack_require__(54);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 130 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(119),
	    get = __webpack_require__(132),
	    hasIn = __webpack_require__(142),
	    isKey = __webpack_require__(140),
	    isStrictComparable = __webpack_require__(129),
	    matchesStrictComparable = __webpack_require__(130),
	    toKey = __webpack_require__(141);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(133);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(134),
	    isKey = __webpack_require__(140),
	    toKey = __webpack_require__(141);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(62),
	    stringToPath = __webpack_require__(135);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = castPath;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(136),
	    toString = __webpack_require__(137);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(29);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(138);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(95),
	    isSymbol = __webpack_require__(139);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(61);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(62),
	    isSymbol = __webpack_require__(139);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(139);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(143),
	    hasPath = __webpack_require__(144);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 143 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(134),
	    isArguments = __webpack_require__(57),
	    isArray = __webpack_require__(62),
	    isIndex = __webpack_require__(63),
	    isKey = __webpack_require__(140),
	    isLength = __webpack_require__(60),
	    toKey = __webpack_require__(141);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var result,
	      index = -1,
	      length = path.length;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 145 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(147),
	    basePropertyDeep = __webpack_require__(148),
	    isKey = __webpack_require__(140),
	    toKey = __webpack_require__(141);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 147 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(133);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(150),
	    baseIteratee = __webpack_require__(116),
	    toInteger = __webpack_require__(151);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array ? array.length : 0;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return baseFindIndex(array, baseIteratee(predicate, 3), index);
	}

	module.exports = findIndex;


/***/ },
/* 150 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(152);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(153);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21),
	    isSymbol = __webpack_require__(139);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(155)
	__vue_template__ = __webpack_require__(182)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/components/head.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _has2 = __webpack_require__(156);

	var _has3 = _interopRequireDefault(_has2);

	var _map2 = __webpack_require__(158);

	var _map3 = _interopRequireDefault(_map2);

	var _flatten2 = __webpack_require__(166);

	var _flatten3 = _interopRequireDefault(_flatten2);

	var _store = __webpack_require__(169);

	var _optionAccess = __webpack_require__(175);

	var _optionAccess2 = _interopRequireDefault(_optionAccess);

	var _writer = __webpack_require__(177);

	var _writer2 = _interopRequireDefault(_writer);

	var _urlChanged = __webpack_require__(181);

	var _urlChanged2 = _interopRequireDefault(_urlChanged);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <slot></slot>
	//   <component
	//     v-for="possib in cartesian"
	//     :key="possib.key"
	//     :policy="policyForKey(possib.key)"
	//     :is="possib.comp"
	//   ></component>
	// </template>
	//
	// <script>
	var comps = [];

	exports.default = {
	  mixins: [_optionAccess2.default, _writer2.default],
	  replace: false,
	  comps: comps,

	  created: function created() {
	    var _this = this;

	    (0, _store.setKeysListener)(function (keys) {
	      _this.allKeys = keys;
	    });
	    var update = function update() {
	      _this.href = window.location.href;
	    };
	    (0, _urlChanged2.default)(update);
	  },
	  data: function data() {
	    return {
	      allKeys: [],
	      href: window.location.href
	    };
	  },


	  computed: {
	    keys: function keys() {
	      return {
	        href: ['href']
	      };
	    },
	    cartesian: function cartesian() {
	      return (0, _flatten3.default)((0, _map3.default)(this.allKeys, function (key) {
	        return (0, _map3.default)(comps, function (comp) {
	          return {
	            key: key,
	            comp: comp
	          };
	        });
	      }));
	    }
	  },

	  methods: {
	    policyForKey: function policyForKey(key) {
	      if ((0, _has3.default)(this.seoOptions, 'policies') && (0, _has3.default)(this.seoOptions.policies, key)) {
	        return this.seoOptions.policies[key];
	      } else {
	        return undefined;
	      }
	    }
	  }

	};
	// </script>
	//

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(157),
	    hasPath = __webpack_require__(144);

	/**
	 * Checks if `path` is a direct property of `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = { 'a': { 'b': 2 } };
	 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.has(object, 'a');
	 * // => true
	 *
	 * _.has(object, 'a.b');
	 * // => true
	 *
	 * _.has(object, ['a', 'b']);
	 * // => true
	 *
	 * _.has(other, 'a');
	 * // => false
	 */
	function has(object, path) {
	  return object != null && hasPath(object, path, baseHas);
	}

	module.exports = has;


/***/ },
/* 157 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  return object != null && hasOwnProperty.call(object, key);
	}

	module.exports = baseHas;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(159),
	    baseIteratee = __webpack_require__(116),
	    baseMap = __webpack_require__(160),
	    isArray = __webpack_require__(62);

	/**
	 * Creates an array of values by running each element in `collection` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * _.map([4, 8], square);
	 * // => [16, 64]
	 *
	 * _.map({ 'a': 4, 'b': 8 }, square);
	 * // => [16, 64] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  return func(collection, baseIteratee(iteratee, 3));
	}

	module.exports = map;


/***/ },
/* 159 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(161),
	    isArrayLike = __webpack_require__(59);

	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];

	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}

	module.exports = baseMap;


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(162),
	    createBaseEach = __webpack_require__(165);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(163),
	    keys = __webpack_require__(54);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(164);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 164 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(59);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(167);

	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */
	function flatten(array) {
	  var length = array ? array.length : 0;
	  return length ? baseFlatten(array, 1) : [];
	}

	module.exports = flatten;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(74),
	    isFlattenable = __webpack_require__(168);

	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;

	  predicate || (predicate = isFlattenable);
	  result || (result = []);

	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(95),
	    isArguments = __webpack_require__(57),
	    isArray = __webpack_require__(62);

	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}

	module.exports = isFlattenable;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setKeysListener = exports.toWatch = exports.remove = exports.set = exports.get = exports.policies = exports.firstPolicy = undefined;

	var _findIndex2 = __webpack_require__(149);

	var _findIndex3 = _interopRequireDefault(_findIndex2);

	var _find2 = __webpack_require__(114);

	var _find3 = _interopRequireDefault(_find2);

	var _has2 = __webpack_require__(156);

	var _has3 = _interopRequireDefault(_has2);

	var _zipObject2 = __webpack_require__(170);

	var _zipObject3 = _interopRequireDefault(_zipObject2);

	var _map2 = __webpack_require__(158);

	var _map3 = _interopRequireDefault(_map2);

	var _last2 = __webpack_require__(172);

	var _last3 = _interopRequireDefault(_last2);

	var _first2 = __webpack_require__(173);

	var _first3 = _interopRequireDefault(_first2);

	var _keys2 = __webpack_require__(54);

	var _keys3 = _interopRequireDefault(_keys2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = {};
	var listener = null;

	var warnKeyChange = function warnKeyChange() {
	  if (typeof listener === 'function') {
	    listener((0, _keys3.default)(store));
	  }
	};

	var firstPolicy = exports.firstPolicy = function firstPolicy(data) {
	  return [(0, _first3.default)(data).value];
	};

	var lastPolicy = function lastPolicy(data) {
	  return [(0, _last3.default)(data).value];
	};

	var joinPolicy = function joinPolicy(separator) {
	  var reversed = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	  return function (arr) {
	    if (arr.length === 0) return [];
	    var ks = (0, _keys3.default)(arr[0].value);
	    var values = (0, _map3.default)(ks, function (key) {
	      var data = (0, _map3.default)((0, _map3.default)(arr, 'value'), key);
	      if (reversed) {
	        data.reverse();
	      }
	      return data.join(separator);
	    });
	    var zipped = [(0, _zipObject3.default)(ks, values)];
	    return zipped;
	  };
	};

	var identityPolicy = function identityPolicy(data) {
	  return [data];
	};

	var repeatPolicy = function repeatPolicy(data) {
	  return (0, _map3.default)(data, 'value');
	};

	var defaultPolicy = lastPolicy;

	var policies = exports.policies = {
	  last: lastPolicy,
	  first: firstPolicy,
	  join: joinPolicy,
	  identity: identityPolicy,
	  repeat: repeatPolicy
	};

	var get = exports.get = function get(key) {
	  var policy = arguments.length <= 1 || arguments[1] === undefined ? defaultPolicy : arguments[1];

	  if ((0, _has3.default)(store, key) && store[key].length > 0) {
	    return policy(store[key]);
	  } else {
	    return "";
	  }
	};

	var set = exports.set = function set(id, key, value) {
	  createKeyIfNotExist(key);
	  var found = (0, _find3.default)(store[key], { id: id });
	  if (found) {
	    found.value = value;
	  } else {
	    store[key].push({ id: id, value: value });
	  }
	};

	var remove = exports.remove = function remove(id, key) {
	  if ((0, _has3.default)(store, key)) {
	    var index = (0, _findIndex3.default)(store[key], { id: id });
	    store[key].splice(index, 1);
	  }
	};

	var createKeyIfNotExist = function createKeyIfNotExist(key) {
	  if (!(0, _has3.default)(store, key)) {
	    store[key] = [];
	    warnKeyChange();
	  }
	};

	var toWatch = exports.toWatch = function toWatch(key) {
	  return store[key];
	};

	var setKeysListener = exports.setKeysListener = function setKeysListener(cb) {
	  listener = cb;
	};
	window.store = store;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(51),
	    baseZipObject = __webpack_require__(171);

	/**
	 * This method is like `_.fromPairs` except that it accepts two arrays,
	 * one of property identifiers and one of corresponding values.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.4.0
	 * @category Array
	 * @param {Array} [props=[]] The property identifiers.
	 * @param {Array} [values=[]] The property values.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * _.zipObject(['a', 'b'], [1, 2]);
	 * // => { 'a': 1, 'b': 2 }
	 */
	function zipObject(props, values) {
	  return baseZipObject(props || [], values || [], assignValue);
	}

	module.exports = zipObject;


/***/ },
/* 171 */
/***/ function(module, exports) {

	/**
	 * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
	 *
	 * @private
	 * @param {Array} props The property identifiers.
	 * @param {Array} values The property values.
	 * @param {Function} assignFunc The function to assign values.
	 * @returns {Object} Returns the new object.
	 */
	function baseZipObject(props, values, assignFunc) {
	  var index = -1,
	      length = props.length,
	      valsLength = values.length,
	      result = {};

	  while (++index < length) {
	    var value = index < valsLength ? values[index] : undefined;
	    assignFunc(result, props[index], value);
	  }
	  return result;
	}

	module.exports = baseZipObject;


/***/ },
/* 172 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}

	module.exports = last;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(174);


/***/ },
/* 174 */
/***/ function(module, exports) {

	/**
	 * Gets the first element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias first
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the first element of `array`.
	 * @example
	 *
	 * _.head([1, 2, 3]);
	 * // => 1
	 *
	 * _.head([]);
	 * // => undefined
	 */
	function head(array) {
	  return (array && array.length) ? array[0] : undefined;
	}

	module.exports = head;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vueStore = __webpack_require__(176);

	var _vueStore2 = _interopRequireDefault(_vueStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  created: function created() {
	    this.seoOptions = _vueStore2.default.options;
	  }
	};

/***/ },
/* 176 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  Vue: null,
	  options: {}
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _each2 = __webpack_require__(178);

	var _each3 = _interopRequireDefault(_each2);

	var _storeAccess = __webpack_require__(180);

	var _storeAccess2 = _interopRequireDefault(_storeAccess);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_storeAccess2.default],

	  ready: function ready() {
	    var _this = this;

	    (0, _each3.default)(this.keys, function (values) {
	      (0, _each3.default)(values, function (toWatch) {
	        _this.$watch(toWatch, _this.save);
	      });
	    });
	    this.save();
	  },


	  methods: {
	    save: function save() {
	      var _this2 = this;

	      (0, _each3.default)(this.keys, function (propsToSave, key) {
	        var data = {};
	        (0, _each3.default)(propsToSave, function (prop) {
	          data[prop] = _this2[prop];
	        });
	        _this2.setInStore(key, data);
	      });
	    }
	  },

	  beforeDestroy: function beforeDestroy() {
	    var _this3 = this;

	    (0, _each3.default)(this.keys, function (props, key) {
	      _this3.removeFromStore(key);
	    });
	  }
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(179);


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(44),
	    baseEach = __webpack_require__(161),
	    baseIteratee = __webpack_require__(116),
	    isArray = __webpack_require__(62);

	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _([1, 2]).forEach(function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  var func = isArray(collection) ? arrayEach : baseEach;
	  return func(collection, baseIteratee(iteratee, 3));
	}

	module.exports = forEach;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _store = __webpack_require__(169);

	var lastAccessorId = 0;

	exports.default = {
	  created: function created() {
	    this._seoaid = lastAccessorId++;
	  },


	  methods: {
	    setInStore: function setInStore(key, value) {
	      (0, _store.set)(this._seoaid, key, value);
	    },
	    removeFromStore: function removeFromStore(key) {
	      (0, _store.remove)(this._seoaid, key);
	    }
	  }
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.notify = undefined;

	var _each2 = __webpack_require__(178);

	var _each3 = _interopRequireDefault(_each2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var listeners = [];

	exports.default = function (callback) {
	  window.addEventListener('hashchange', callback);
	  window.addEventListener('popstate', callback);
	  listeners.push(callback);
	};

	var notify = exports.notify = function notify() {
	  (0, _each3.default)(listeners, function (listener) {
	    listener();
	  });
	};

/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports = "\n  <slot></slot>\n  <component\n    v-for=\"possib in cartesian\"\n    :key=\"possib.key\"\n    :policy=\"policyForKey(possib.key)\"\n    :is=\"possib.comp\"\n  ></component>\n";

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(184)
	__vue_template__ = __webpack_require__(185)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/components/title.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _writer = __webpack_require__(177);

	var _writer2 = _interopRequireDefault(_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_writer2.default],
	  props: {
	    value: {
	      required: true,
	      type: String
	    }
	  },
	  computed: {
	    keys: function keys() {
	      return {
	        title: ['value']
	      };
	    }
	  }
	};

	// </script>
	//
	// <template>
	//   <div></div>
	// </template>
	// <script>

/***/ },
/* 185 */
/***/ function(module, exports) {

	module.exports = "\n  <div></div>\n";

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(187)
	__vue_template__ = __webpack_require__(188)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/components/organization.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _writer = __webpack_require__(177);

	var _writer2 = _interopRequireDefault(_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_writer2.default],
	  props: {
	    url: String,
	    logo: String,
	    name: String,
	    alternateName: String,
	    contacts: Array,
	    socialAccounts: Array,
	    enableWebsite: {
	      type: Boolean,
	      required: false,
	      default: true
	    },
	    enableOrganization: {
	      type: Boolean,
	      required: false,
	      default: true
	    }
	  },
	  computed: {
	    keys: function keys() {
	      var keys = {};
	      if (this.enableWebsite) {
	        keys.website = ['webInfo'];
	      }
	      if (this.enableOrganization) {
	        keys.organization = ['orgInfo'];
	      }
	      return keys;
	    },
	    webInfo: function webInfo() {
	      var data = {
	        "name": this.name,
	        "url": this.url,
	        "image": this.logo
	      };

	      if (this.alternateName) {
	        data.alternateName = this.alternateName;
	      }

	      return data;
	    },
	    orgInfo: function orgInfo() {
	      var data = {};

	      if (this.url) {
	        data.url = this.url;
	      }

	      if (this.name) {
	        data.name = this.name;
	      }

	      if (this.logo) {
	        data.logo = this.logo;
	      }

	      if (this.contacts && this.contacts.length > 0) {
	        data.contactPoint = this.contacts;
	      }

	      if (this.socialAccounts && this.socialAccounts.length > 0) {
	        data.sameAs = this.socialAccounts;
	      }

	      return data;
	    }
	  }
	};

	// </script>
	//
	// <template>
	//   <div></div>
	// </template>
	// <script>

/***/ },
/* 188 */
/***/ function(module, exports) {

	module.exports = "\n  <div></div>\n";

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(190)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/components/breadcrumbs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _writer = __webpack_require__(177);

	var _writer2 = _interopRequireDefault(_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <script>
	exports.default = {
	  mixins: [_writer2.default],
	  props: {
	    position: {
	      required: false,
	      type: Number
	    },
	    url: {
	      required: true,
	      type: String
	    },
	    name: {
	      required: true,
	      type: String
	    }
	  },
	  computed: {
	    keys: function keys() {
	      return {
	        'breadcrumbs': ['position', 'url', 'name']
	      };
	    }
	  }
	};

	// </script>
	//

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(192)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/components/type.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _writer = __webpack_require__(177);

	var _writer2 = _interopRequireDefault(_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_writer2.default],

	  props: {
	    value: {
	      type: String,
	      required: true
	    }
	  },

	  computed: {
	    keys: function keys() {
	      return {
	        type: ['value']
	      };
	    }
	  }
	};

	// </script>
	//
	// <script>

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(194)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/components/lang.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _writer = __webpack_require__(177);

	var _writer2 = _interopRequireDefault(_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_writer2.default],
	  props: {
	    code: {
	      type: String,
	      required: true
	    },
	    url: {
	      type: String,
	      required: false
	    },
	    current: {
	      type: Boolean,
	      default: false
	    }
	  },
	  computed: {
	    keys: function keys() {
	      return {
	        lang: ['code', 'url', 'current']
	      };
	    }
	  }
	};

	// </script>
	//
	// <script>

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(196)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/components/description.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _writer = __webpack_require__(177);

	var _writer2 = _interopRequireDefault(_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_writer2.default],
	  props: {
	    value: {
	      required: true,
	      type: String
	    }
	  },
	  computed: {
	    keys: function keys() {
	      return {
	        description: ['value']
	      };
	    }
	  }
	};

	// </script>
	//
	// <script>

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(198)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/components/image.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _writer = __webpack_require__(177);

	var _writer2 = _interopRequireDefault(_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_writer2.default],
	  props: {
	    url: {
	      required: true,
	      type: String
	    },

	    width: {
	      required: false,
	      type: String
	    },

	    height: {
	      required: false,
	      type: String
	    }
	  },
	  computed: {
	    keys: function keys() {
	      return {
	        image: ['url', 'width', 'height']
	      };
	    }
	  }
	};

	// </script>
	//
	// <script>

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(200)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/components/autoLang.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _writer = __webpack_require__(177);

	var _writer2 = _interopRequireDefault(_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_writer2.default],
	  props: {
	    langs: {
	      type: Array,
	      required: true
	    },
	    mode: {
	      type: String },
	    default: {
	      type: String,
	      required: false,
	      default: null
	    }
	  },

	  computed: {
	    keys: function keys() {
	      return {
	        autoLang: ['langs', 'mode', 'default']
	      };
	    }
	  }
	};
	// </script>
	//
	// <script>

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(202)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/google/displayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _displayer = __webpack_require__(203);

	var _displayer2 = _interopRequireDefault(_displayer);

	var _titleDisplayer = __webpack_require__(206);

	var _titleDisplayer2 = _interopRequireDefault(_titleDisplayer);

	var _organizationDisplayer = __webpack_require__(209);

	var _organizationDisplayer2 = _interopRequireDefault(_organizationDisplayer);

	var _websiteDisplayer = __webpack_require__(215);

	var _websiteDisplayer2 = _interopRequireDefault(_websiteDisplayer);

	var _breadcrumbsDisplayer = __webpack_require__(217);

	var _breadcrumbsDisplayer2 = _interopRequireDefault(_breadcrumbsDisplayer);

	var _langDisplayer = __webpack_require__(220);

	var _langDisplayer2 = _interopRequireDefault(_langDisplayer);

	var _descriptionDisplayer = __webpack_require__(223);

	var _descriptionDisplayer2 = _interopRequireDefault(_descriptionDisplayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_displayer2.default],
	  created: function created() {
	    this.supportedDisplayers = [_titleDisplayer2.default, _organizationDisplayer2.default, _websiteDisplayer2.default, _breadcrumbsDisplayer2.default, _langDisplayer2.default, _descriptionDisplayer2.default];
	  }
	};
	// </script>
	//
	// <script>

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(204)
	__vue_template__ = __webpack_require__(205)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/mixins/displayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _find2 = __webpack_require__(114);

	var _find3 = _interopRequireDefault(_find2);

	var _store = __webpack_require__(169);

	var _vueStore = __webpack_require__(176);

	var _vueStore2 = _interopRequireDefault(_vueStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: {
	    key: {
	      type: String,
	      required: true
	    },
	    policy: {}
	  },

	  data: function data() {
	    return {
	      dd: (0, _store.toWatch)(this.key),
	      val: this.computeVal(),
	      component: null
	    };
	  },
	  ready: function ready() {
	    var _this = this;

	    //find the component responsible for displaying the content
	    var selectedComponent = (0, _find3.default)(this.supportedDisplayers, function (_ref) {
	      var checker = _ref.wantsKey;

	      return checker(_this.key);
	    });

	    if (selectedComponent) {
	      this.component = _vueStore2.default.Vue.extend(selectedComponent);
	    } else {
	      this.component = false;
	    }
	  },


	  watch: {
	    dd: {
	      handler: function handler() {
	        this.val = this.computeVal();
	      },

	      deep: true
	    }
	  },

	  methods: {
	    computeVal: function computeVal() {
	      return (0, _store.get)(this.key, this.policy);
	    }
	  }
	};

	// </script>
	//
	// <template>
	//   <component v-if="dd.length > 0 && component" v-for="current in val" :is="component" :value="current"></component>
	// </template>
	//
	// <script>

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = "\n  <component v-if=\"dd.length > 0 && component\" v-for=\"current in val\" :is=\"component\" :value=\"current\"></component>\n";

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(207)
	__vue_template__ = __webpack_require__(208)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/google/titleDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 207 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <title>{{value.value}}</title>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: Object,
	      required: true
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'title';
	  }
	};
	// </script>
	//

/***/ },
/* 208 */
/***/ function(module, exports) {

	module.exports = "\n  <title>{{value.value}}</title>\n";

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(210)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/google/organizationDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _each2 = __webpack_require__(178);

	var _each3 = _interopRequireDefault(_each2);

	var _merge2 = __webpack_require__(1);

	var _merge3 = _interopRequireDefault(_merge2);

	var _ldDisplayer = __webpack_require__(211);

	var _ldDisplayer2 = _interopRequireDefault(_ldDisplayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var header = {
	  "@context": "http://schema.org",
	  "@type": "Organization"
	}; // <script>

	exports.default = {
	  mixins: [_ldDisplayer2.default],
	  props: {
	    value: {
	      require: true,
	      type: Object
	    }
	  },

	  computed: {
	    ld: function ld() {
	      var data = (0, _merge3.default)(header, this.value.orgInfo);
	      data.contactPoint = (0, _each3.default)(data.contactPoint, function (o) {
	        o["@type"] = "ContactPoint";
	      });
	      return data;
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'organization';
	  }
	};
	// </script>
	//

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(212);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  ready: function ready() {
	    var _this = this;

	    this.ldElem = document.createElement('script');
	    this.ldElem.type = 'application/ld+json';
	    document.head.appendChild(this.ldElem);
	    var save = function save() {
	      _this.ldElem.innerHTML = (0, _stringify2.default)(_this.ld);
	    };
	    this.$watch('ld', {
	      handler: save,
	      deep: true
	    });
	    save();
	  },
	  destroyed: function destroyed() {
	    document.head.removeChild(this.ldElem);
	  }
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(213), __esModule: true };

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(214);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 214 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(216)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/google/websiteDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _merge2 = __webpack_require__(1);

	var _merge3 = _interopRequireDefault(_merge2);

	var _ldDisplayer = __webpack_require__(211);

	var _ldDisplayer2 = _interopRequireDefault(_ldDisplayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var header = {
	  "@context": "http://schema.org",
	  "@type": "Website"
	}; // <script>

	exports.default = {
	  mixins: [_ldDisplayer2.default],
	  props: {
	    value: {
	      require: true,
	      type: Object
	    }
	  },

	  computed: {
	    ld: function ld() {
	      var data = (0, _merge3.default)(header, this.value.webInfo);
	      return data;
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'website';
	  }
	};
	// </script>
	//

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(218)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/google/breadcrumbsDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _map2 = __webpack_require__(158);

	var _map3 = _interopRequireDefault(_map2);

	var _clone2 = __webpack_require__(219);

	var _clone3 = _interopRequireDefault(_clone2);

	var _ldDisplayer = __webpack_require__(211);

	var _ldDisplayer2 = _interopRequireDefault(_ldDisplayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var header = {
	  "@context": "http://schema.org",
	  "@type": "BreadcrumbList"
	}; // <script>

	exports.default = {
	  mixins: [_ldDisplayer2.default],
	  props: {
	    value: {
	      require: true,
	      type: Array
	    }
	  },

	  computed: {
	    ld: function ld() {
	      var data = (0, _clone3.default)(header);
	      data.itemListElement = (0, _map3.default)(this.value, function (item, pos) {
	        return {
	          "@type": "ListItem",
	          "position": item.position || pos + 1,
	          "item": {
	            "@id": item.url,
	            "name": item.name
	          }
	        };
	      });
	      return data;
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'breadcrumbs';
	  }
	};
	// </script>
	//

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(50);

	/**
	 * Creates a shallow clone of `value`.
	 *
	 * **Note:** This method is loosely based on the
	 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	 * and supports cloning arrays, array buffers, booleans, date objects, maps,
	 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	 * arrays. The own enumerable properties of `arguments` objects are cloned
	 * as plain objects. An empty object is returned for uncloneable values such
	 * as error objects, functions, DOM nodes, and WeakMaps.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to clone.
	 * @returns {*} Returns the cloned value.
	 * @see _.cloneDeep
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var shallow = _.clone(objects);
	 * console.log(shallow[0] === objects[0]);
	 * // => true
	 */
	function clone(value) {
	  return baseClone(value, false, true);
	}

	module.exports = clone;


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(221)
	__vue_template__ = __webpack_require__(222)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/google/langDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 221 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <link rel="alternate" :hreflang="value.code" :href="value.url"></link>
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    value: {
	      required: true,
	      type: Object
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'lang';
	  }
	};
	// </script>
	//

/***/ },
/* 222 */
/***/ function(module, exports) {

	module.exports = "\n  <link rel=\"alternate\" :hreflang=\"value.code\" :href=\"value.url\"></link>\n";

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(224)
	__vue_template__ = __webpack_require__(225)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/google/descriptionDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 224 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <meta property="description" :content="value.value">
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: Object,
	      required: true
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'description';
	  }
	};
	// </script>
	//

/***/ },
/* 225 */
/***/ function(module, exports) {

	module.exports = "\n  <meta property=\"description\" :content=\"value.value\">\n";

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(227)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/openGraph/displayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _displayer = __webpack_require__(203);

	var _displayer2 = _interopRequireDefault(_displayer);

	var _imageDisplayer = __webpack_require__(228);

	var _imageDisplayer2 = _interopRequireDefault(_imageDisplayer);

	var _titleDisplayer = __webpack_require__(231);

	var _titleDisplayer2 = _interopRequireDefault(_titleDisplayer);

	var _urlDisplayer = __webpack_require__(234);

	var _urlDisplayer2 = _interopRequireDefault(_urlDisplayer);

	var _typeDisplayer = __webpack_require__(237);

	var _typeDisplayer2 = _interopRequireDefault(_typeDisplayer);

	var _langDisplayer = __webpack_require__(240);

	var _langDisplayer2 = _interopRequireDefault(_langDisplayer);

	var _descriptionDisplayer = __webpack_require__(243);

	var _descriptionDisplayer2 = _interopRequireDefault(_descriptionDisplayer);

	var _organizationDisplayer = __webpack_require__(246);

	var _organizationDisplayer2 = _interopRequireDefault(_organizationDisplayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <script>
	exports.default = {
	  mixins: [_displayer2.default],
	  created: function created() {
	    this.supportedDisplayers = [_imageDisplayer2.default, _titleDisplayer2.default, _urlDisplayer2.default, _typeDisplayer2.default, _langDisplayer2.default, _descriptionDisplayer2.default, _organizationDisplayer2.default];
	  }
	};
	// </script>
	//

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(229)
	__vue_template__ = __webpack_require__(230)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/openGraph/imageDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 229 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <meta property="og:image" :content="value.url">
	//   <meta v-if="value.width" property="og:image:width" :content="value.width">
	//   <meta v-if="value.height" property="og:image:height" :content="value.height">
	// </template>
	// <script>

	exports.default = {
	  props: {
	    value: {
	      type: Object,
	      required: true
	    }
	  },
	  wantsKey: function wantsKey(key) {
	    return key === 'image';
	  }
	};
	// </script>
	//

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = "\n  <meta property=\"og:image\" :content=\"value.url\">\n  <meta v-if=\"value.width\" property=\"og:image:width\" :content=\"value.width\">\n  <meta v-if=\"value.height\" property=\"og:image:height\" :content=\"value.height\">\n";

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(232)
	__vue_template__ = __webpack_require__(233)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/openGraph/titleDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 232 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <meta property="og:title" :content="value.value">
	// </template>
	//
	// <script>

	exports.default = {
	  props: {
	    value: {
	      type: Object,
	      required: true
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'title';
	  }
	};

	// </script>
	//

/***/ },
/* 233 */
/***/ function(module, exports) {

	module.exports = "\n  <meta property=\"og:title\" :content=\"value.value\">\n";

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(235)
	__vue_template__ = __webpack_require__(236)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/openGraph/urlDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 235 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <meta property="og:url" :content="value.href">
	// </template>
	// <script>
	exports.default = {
	  props: {
	    value: {
	      required: true,
	      type: Object
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'href';
	  }
	};
	// </script>
	//

/***/ },
/* 236 */
/***/ function(module, exports) {

	module.exports = "\n  <meta property=\"og:url\" :content=\"value.href\">\n";

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(238)
	__vue_template__ = __webpack_require__(239)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/openGraph/typeDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 238 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <meta property="og:type" :content="value.value">
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: Object,
	      required: true
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'type';
	  }
	};
	// </script>
	//

/***/ },
/* 239 */
/***/ function(module, exports) {

	module.exports = "\n  <meta property=\"og:type\" :content=\"value.value\">\n";

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(241)
	__vue_template__ = __webpack_require__(242)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/openGraph/langDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 241 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <meta :property="property" :content="value.code">
	// </template>
	//
	// <script>

	exports.default = {
	  props: {
	    value: {
	      required: true,
	      type: Object
	    }
	  },

	  computed: {
	    property: function property() {
	      if (this.value.current) {
	        return 'og:locale';
	      } else {
	        return 'og:locale:alternate';
	      }
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'lang';
	  }
	};

	// </script>
	//

/***/ },
/* 242 */
/***/ function(module, exports) {

	module.exports = "\n  <meta :property=\"property\" :content=\"value.code\">\n";

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(244)
	__vue_template__ = __webpack_require__(245)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/openGraph/descriptionDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 244 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <meta property="og:description" :content="value.value">
	// </template>
	//
	// <script>

	exports.default = {
	  props: {
	    value: {
	      type: Object,
	      required: true
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'description';
	  }
	};

	// </script>
	//

/***/ },
/* 245 */
/***/ function(module, exports) {

	module.exports = "\n  <meta property=\"og:description\" :content=\"value.value\">\n";

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(247)
	__vue_template__ = __webpack_require__(248)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/openGraph/organizationDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 247 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <meta property="og:site_name" :value="value.orgInfo.name">
	// </template>
	//
	// <script>
	exports.default = {
	  props: {
	    value: {
	      type: Object,
	      required: true
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'organization';
	  }
	};
	// </script>
	//

/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = "\n  <meta property=\"og:site_name\" :value=\"value.orgInfo.name\">\n";

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(250)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/middlewares/displayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _displayer = __webpack_require__(203);

	var _displayer2 = _interopRequireDefault(_displayer);

	var _autoLangDisplayer = __webpack_require__(251);

	var _autoLangDisplayer2 = _interopRequireDefault(_autoLangDisplayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <script>
	exports.default = {
	  mixins: [_displayer2.default],
	  created: function created() {
	    this.supportedDisplayers = [_autoLangDisplayer2.default];
	  }
	};
	// </script>
	//

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(252)
	__vue_template__ = __webpack_require__(255)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/middlewares/autoLangDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _map2 = __webpack_require__(158);

	var _map3 = _interopRequireDefault(_map2);

	var _iso = __webpack_require__(253);

	var _iso2 = _interopRequireDefault(_iso);

	var _urlChanged = __webpack_require__(181);

	var _urlChanged2 = _interopRequireDefault(_urlChanged);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var domainGenerator = function domainGenerator(code, def) {
	  var host = window.location.hostname;
	  var hostParts = host.split('.');
	  var first = hostParts[0];
	  var curr = null;
	  if (_iso2.default.validate(first)) {
	    curr = hostParts.shift();
	  }
	  hostParts.unshift(code);
	  var current = curr === null ? code === def : code === curr;
	  if (hostParts[0] === def) {
	    hostParts.shift();
	  }
	  return {
	    url: window.location.href.replace(host, hostParts.join('.')),
	    current: current,
	    code: code
	  };
	}; // <template>
	//   <seo-lang v-for="lang in langs" :code="lang.code" :url="lang.url" :current="lang.current"></seo-lang>
	// </template>
	//
	// <script>


	var dirGenerator = function dirGenerator(code, def) {
	  throw "Not Implemented";
	};

	exports.default = {
	  props: {
	    value: {
	      type: Object,
	      required: true
	    }
	  },
	  data: function data() {
	    return {
	      langs: []
	    };
	  },
	  ready: function ready() {
	    var recomp = this.compute.bind(this);
	    (0, _urlChanged2.default)(recomp);
	    this.$watch('value', recomp, {
	      deep: true
	    });
	    recomp();
	  },

	  methods: {
	    compute: function compute() {
	      var _this = this;

	      var allLangs = this.value.langs;
	      var generator = null;
	      switch (this.value.mode) {
	        case 'domain':
	          generator = domainGenerator;
	          break;
	        default:
	          generator = dirGenerator;
	      }
	      this.langs = (0, _map3.default)(allLangs, function (code) {
	        return generator(code, _this.value.default);
	      });
	    }
	  },
	  wantsKey: function wantsKey(key) {
	    return key === 'autoLang';
	  }
	};
	// </script>
	//

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _data = __webpack_require__(254);

	var DATA = _interopRequireWildcard(_data);

	var ISO6391 = (function () {
	  function ISO6391() {
	    _classCallCheck(this, ISO6391);
	  }

	  _createClass(ISO6391, null, [{
	    key: 'getLanguages',
	    value: function getLanguages(codes) {
	      var list = [];
	      for (var i = 0; i < codes.length; i++) {
	        list.push({
	          code: codes[i],
	          name: ISO6391.getName(codes[i]),
	          nativeName: ISO6391.getNativeName(codes[i])
	        });
	      }
	      return list;
	    }
	  }, {
	    key: 'getName',
	    value: function getName(code) {
	      if (!ISO6391.validate(code)) return '';
	      return DATA.LANGUAGES_LIST[code].name;
	    }
	  }, {
	    key: 'getAllNames',
	    value: function getAllNames() {
	      var list = [];
	      for (var code in DATA.LANGUAGES_LIST) {
	        list.push(DATA.LANGUAGES_LIST[code].name);
	      }
	      return list;
	    }
	  }, {
	    key: 'getNativeName',
	    value: function getNativeName(code) {
	      if (!ISO6391.validate(code)) return '';
	      return DATA.LANGUAGES_LIST[code].nativeName;
	    }
	  }, {
	    key: 'getAllNativeNames',
	    value: function getAllNativeNames() {
	      var list = [];
	      for (var code in DATA.LANGUAGES_LIST) {
	        list.push(DATA.LANGUAGES_LIST[code].nativeName);
	      }
	      return list;
	    }
	  }, {
	    key: 'getCode',
	    value: function getCode(name) {
	      for (var i = 0; i < DATA.CODE_LIST.length; i++) {
	        var code = DATA.CODE_LIST[i];
	        var language = DATA.LANGUAGES_LIST[code];
	        if (language.name === name || language.nativeName === name) return code;
	      }
	      return '';
	    }
	  }, {
	    key: 'getAllCodes',
	    value: function getAllCodes() {
	      return DATA.CODE_LIST;
	    }
	  }, {
	    key: 'validate',
	    value: function validate(code) {
	      if (DATA.CODE_LIST.indexOf(code) === -1) {
	        return false;
	      } else {
	        return true;
	      }
	    }
	  }]);

	  return ISO6391;
	})();

	exports['default'] = ISO6391;
	module.exports = exports['default'];

/***/ },
/* 254 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var CODE_LIST = ['aa', 'ab', 'ae', 'af', 'ak', 'am', 'an', 'ar', 'as', 'av', 'ay', 'az', 'ba', 'be', 'bg', 'bh', 'bi', 'bm', 'bn', 'bo', 'br', 'bs', 'ca', 'ce', 'ch', 'co', 'cr', 'cs', 'cu', 'cv', 'cy', 'da', 'de', 'dv', 'dz', 'ee', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fa', 'ff', 'fi', 'fj', 'fo', 'fr', 'fy', 'ga', 'gd', 'gl', 'gn', 'gu', 'gv', 'ha', 'he', 'hi', 'ho', 'hr', 'ht', 'hu', 'hy', 'hz', 'ia', 'id', 'ie', 'ig', 'ii', 'ik', 'io', 'is', 'it', 'iu', 'ja', 'jv', 'ka', 'kg', 'ki', 'kj', 'kk', 'kl', 'km', 'kn', 'ko', 'kr', 'ks', 'ku', 'kv', 'kw', 'ky', 'la', 'lb', 'lg', 'li', 'ln', 'lo', 'lt', 'lu', 'lv', 'mg', 'mh', 'mi', 'mk', 'ml', 'mn', 'mr', 'ms', 'mt', 'my', 'na', 'nb', 'nd', 'ne', 'ng', 'nl', 'nn', 'no', 'nr', 'nv', 'ny', 'oc', 'oj', 'om', 'or', 'os', 'pa', 'pi', 'pl', 'ps', 'pt', 'qu', 'rm', 'rn', 'ro', 'ru', 'rw', 'sa', 'sc', 'sd', 'se', 'sg', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sq', 'sr', 'ss', 'st', 'su', 'sv', 'sw', 'ta', 'te', 'tg', 'th', 'ti', 'tk', 'tl', 'tn', 'to', 'tr', 'ts', 'tt', 'tw', 'ty', 'ug', 'uk', 'ur', 'uz', 've', 'vi', 'vo', 'wa', 'wo', 'xh', 'yi', 'yo', 'za', 'zh', 'zu'];

	exports.CODE_LIST = CODE_LIST;
	var LANGUAGES_LIST = {
	  aa: {
	    name: 'Afar',
	    nativeName: 'Afaraf'
	  },
	  ab: {
	    name: 'Abkhaz',
	    nativeName: 'аҧсуа бызшәа'
	  },
	  ae: {
	    name: 'Avestan',
	    nativeName: 'avesta'
	  },
	  af: {
	    name: 'Afrikaans',
	    nativeName: 'Afrikaans'
	  },
	  ak: {
	    name: 'Akan',
	    nativeName: 'Akan'
	  },
	  am: {
	    name: 'Amharic',
	    nativeName: 'አማርኛ'
	  },
	  an: {
	    name: 'Aragonese',
	    nativeName: 'aragonés'
	  },
	  ar: {
	    name: 'Arabic',
	    nativeName: 'اللغة العربية'
	  },
	  as: {
	    name: 'Assamese',
	    nativeName: 'অসমীয়া'
	  },
	  av: {
	    name: 'Avaric',
	    nativeName: 'авар мацӀ'
	  },
	  ay: {
	    name: 'Aymara',
	    nativeName: 'aymar aru'
	  },
	  az: {
	    name: 'Azerbaijani',
	    nativeName: 'azərbaycan dili'
	  },
	  ba: {
	    name: 'Bashkir',
	    nativeName: 'башҡорт теле'
	  },
	  be: {
	    name: 'Belarusian',
	    nativeName: 'беларуская мова'
	  },
	  bg: {
	    name: 'Bulgarian',
	    nativeName: 'български език'
	  },
	  bh: {
	    name: 'Bihari',
	    nativeName: 'भोजपुरी'
	  },
	  bi: {
	    name: 'Bislama',
	    nativeName: 'Bislama'
	  },
	  bm: {
	    name: 'Bambara',
	    nativeName: 'bamanankan'
	  },
	  bn: {
	    name: 'Bengali',
	    nativeName: 'বাংলা'
	  },
	  bo: {
	    name: 'Tibetan Standard',
	    nativeName: 'བོད་ཡིག'
	  },
	  br: {
	    name: 'Breton',
	    nativeName: 'brezhoneg'
	  },
	  bs: {
	    name: 'Bosnian',
	    nativeName: 'bosanski jezik'
	  },
	  ca: {
	    name: 'Catalan',
	    nativeName: 'català'
	  },
	  ce: {
	    name: 'Chechen',
	    nativeName: 'нохчийн мотт'
	  },
	  ch: {
	    name: 'Chamorro',
	    nativeName: 'Chamoru'
	  },
	  co: {
	    name: 'Corsican',
	    nativeName: 'corsu'
	  },
	  cr: {
	    name: 'Cree',
	    nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ'
	  },
	  cs: {
	    name: 'Czech',
	    nativeName: 'čeština'
	  },
	  cu: {
	    name: 'Old Church Slavonic',
	    nativeName: 'ѩзыкъ словѣньскъ'
	  },
	  cv: {
	    name: 'Chuvash',
	    nativeName: 'чӑваш чӗлхи'
	  },
	  cy: {
	    name: 'Welsh',
	    nativeName: 'Cymraeg'
	  },
	  da: {
	    name: 'Danish',
	    nativeName: 'dansk'
	  },
	  de: {
	    name: 'German',
	    nativeName: 'Deutsch'
	  },
	  dv: {
	    name: 'Divehi',
	    nativeName: 'Dhivehi'
	  },
	  dz: {
	    name: 'Dzongkha',
	    nativeName: 'རྫོང་ཁ'
	  },
	  ee: {
	    name: 'Ewe',
	    nativeName: 'Eʋegbe'
	  },
	  el: {
	    name: 'Greek',
	    nativeName: 'ελληνικά'
	  },
	  en: {
	    name: 'English',
	    nativeName: 'English'
	  },
	  eo: {
	    name: 'Esperanto',
	    nativeName: 'Esperanto'
	  },
	  es: {
	    name: 'Spanish',
	    nativeName: 'Español'
	  },
	  et: {
	    name: 'Estonian',
	    nativeName: 'eesti'
	  },
	  eu: {
	    name: 'Basque',
	    nativeName: 'euskara'
	  },
	  fa: {
	    name: 'Persian',
	    nativeName: 'فارسی'
	  },
	  ff: {
	    name: 'Fula',
	    nativeName: 'Fulfulde'
	  },
	  fi: {
	    name: 'Finnish',
	    nativeName: 'suomi'
	  },
	  fj: {
	    name: 'Fijian',
	    nativeName: 'Vakaviti'
	  },
	  fo: {
	    name: 'Faroese',
	    nativeName: 'føroyskt'
	  },
	  fr: {
	    name: 'French',
	    nativeName: 'Français'
	  },
	  fy: {
	    name: 'Western Frisian',
	    nativeName: 'Frysk'
	  },
	  ga: {
	    name: 'Irish',
	    nativeName: 'Gaeilge'
	  },
	  gd: {
	    name: 'Scottish Gaelic',
	    nativeName: 'Gàidhlig'
	  },
	  gl: {
	    name: 'Galician',
	    nativeName: 'galego'
	  },
	  gn: {
	    name: 'Guaraní',
	    nativeName: 'Avañe\'ẽ'
	  },
	  gu: {
	    name: 'Gujarati',
	    nativeName: 'ગુજરાતી'
	  },
	  gv: {
	    name: 'Manx',
	    nativeName: 'Gaelg'
	  },
	  ha: {
	    name: 'Hausa',
	    nativeName: 'هَوُسَ'
	  },
	  he: {
	    name: 'Hebrew',
	    nativeName: 'עברית'
	  },
	  hi: {
	    name: 'Hindi',
	    nativeName: 'हिन्दी'
	  },
	  ho: {
	    name: 'Hiri Motu',
	    nativeName: 'Hiri Motu'
	  },
	  hr: {
	    name: 'Croatian',
	    nativeName: 'hrvatski jezik'
	  },
	  ht: {
	    name: 'Haitian',
	    nativeName: 'Kreyòl ayisyen'
	  },
	  hu: {
	    name: 'Hungarian',
	    nativeName: 'magyar'
	  },
	  hy: {
	    name: 'Armenian',
	    nativeName: 'Հայերեն'
	  },
	  hz: {
	    name: 'Herero',
	    nativeName: 'Otjiherero'
	  },
	  ia: {
	    name: 'Interlingua',
	    nativeName: 'Interlingua'
	  },
	  id: {
	    name: 'Indonesian',
	    nativeName: 'Indonesian'
	  },
	  ie: {
	    name: 'Interlingue',
	    nativeName: 'Interlingue'
	  },
	  ig: {
	    name: 'Igbo',
	    nativeName: 'Asụsụ Igbo'
	  },
	  ii: {
	    name: 'Nuosu',
	    nativeName: 'ꆈꌠ꒿ Nuosuhxop'
	  },
	  ik: {
	    name: 'Inupiaq',
	    nativeName: 'Iñupiaq'
	  },
	  io: {
	    name: 'Ido',
	    nativeName: 'Ido'
	  },
	  is: {
	    name: 'Icelandic',
	    nativeName: 'Íslenska'
	  },
	  it: {
	    name: 'Italian',
	    nativeName: 'Italiano'
	  },
	  iu: {
	    name: 'Inuktitut',
	    nativeName: 'ᐃᓄᒃᑎᑐᑦ'
	  },
	  ja: {
	    name: 'Japanese',
	    nativeName: '日本語'
	  },
	  jv: {
	    name: 'Javanese',
	    nativeName: 'basa Jawa'
	  },
	  ka: {
	    name: 'Georgian',
	    nativeName: 'ქართული'
	  },
	  kg: {
	    name: 'Kongo',
	    nativeName: 'Kikongo'
	  },
	  ki: {
	    name: 'Kikuyu',
	    nativeName: 'Gĩkũyũ'
	  },
	  kj: {
	    name: 'Kwanyama',
	    nativeName: 'Kuanyama'
	  },
	  kk: {
	    name: 'Kazakh',
	    nativeName: 'қазақ тілі'
	  },
	  kl: {
	    name: 'Kalaallisut',
	    nativeName: 'kalaallisut'
	  },
	  km: {
	    name: 'Khmer',
	    nativeName: 'ខេមរភាសា'
	  },
	  kn: {
	    name: 'Kannada',
	    nativeName: 'ಕನ್ನಡ'
	  },
	  ko: {
	    name: 'Korean',
	    nativeName: '한국어'
	  },
	  kr: {
	    name: 'Kanuri',
	    nativeName: 'Kanuri'
	  },
	  ks: {
	    name: 'Kashmiri',
	    nativeName: 'कश्मीरी'
	  },
	  ku: {
	    name: 'Kurdish',
	    nativeName: 'Kurdî'
	  },
	  kv: {
	    name: 'Komi',
	    nativeName: 'коми кыв'
	  },
	  kw: {
	    name: 'Cornish',
	    nativeName: 'Kernewek'
	  },
	  ky: {
	    name: 'Kyrgyz',
	    nativeName: 'Кыргызча'
	  },
	  la: {
	    name: 'Latin',
	    nativeName: 'latine'
	  },
	  lb: {
	    name: 'Luxembourgish',
	    nativeName: 'Lëtzebuergesch'
	  },
	  lg: {
	    name: 'Ganda',
	    nativeName: 'Luganda'
	  },
	  li: {
	    name: 'Limburgish',
	    nativeName: 'Limburgs'
	  },
	  ln: {
	    name: 'Lingala',
	    nativeName: 'Lingála'
	  },
	  lo: {
	    name: 'Lao',
	    nativeName: 'ພາສາ'
	  },
	  lt: {
	    name: 'Lithuanian',
	    nativeName: 'lietuvių kalba'
	  },
	  lu: {
	    name: 'Luba-Katanga',
	    nativeName: 'Tshiluba'
	  },
	  lv: {
	    name: 'Latvian',
	    nativeName: 'latviešu valoda'
	  },
	  mg: {
	    name: 'Malagasy',
	    nativeName: 'fiteny malagasy'
	  },
	  mh: {
	    name: 'Marshallese',
	    nativeName: 'Kajin M̧ajeļ'
	  },
	  mi: {
	    name: 'Māori',
	    nativeName: 'te reo Māori'
	  },
	  mk: {
	    name: 'Macedonian',
	    nativeName: 'македонски јазик'
	  },
	  ml: {
	    name: 'Malayalam',
	    nativeName: 'മലയാളം'
	  },
	  mn: {
	    name: 'Mongolian',
	    nativeName: 'Монгол хэл'
	  },
	  mr: {
	    name: 'Marathi',
	    nativeName: 'मराठी'
	  },
	  ms: {
	    name: 'Malay',
	    nativeName: 'هاس ملايو‎'
	  },
	  mt: {
	    name: 'Maltese',
	    nativeName: 'Malti'
	  },
	  my: {
	    name: 'Burmese',
	    nativeName: 'ဗမာစာ'
	  },
	  na: {
	    name: 'Nauru',
	    nativeName: 'Ekakairũ Naoero'
	  },
	  nb: {
	    name: 'Norwegian Bokmål',
	    nativeName: 'Norsk bokmål'
	  },
	  nd: {
	    name: 'Northern Ndebele',
	    nativeName: 'isiNdebele'
	  },
	  ne: {
	    name: 'Nepali',
	    nativeName: 'नेपाली'
	  },
	  ng: {
	    name: 'Ndonga',
	    nativeName: 'Owambo'
	  },
	  nl: {
	    name: 'Dutch',
	    nativeName: 'Nederlands'
	  },
	  nn: {
	    name: 'Norwegian Nynorsk',
	    nativeName: 'Norsk nynorsk'
	  },
	  no: {
	    name: 'Norwegian',
	    nativeName: 'Norsk'
	  },
	  nr: {
	    name: 'Southern Ndebele',
	    nativeName: 'isiNdebele'
	  },
	  nv: {
	    name: 'Navajo',
	    nativeName: 'Diné bizaad'
	  },
	  ny: {
	    name: 'Chichewa',
	    nativeName: 'chiCheŵa'
	  },
	  oc: {
	    name: 'Occitan',
	    nativeName: 'occitan'
	  },
	  oj: {
	    name: 'Ojibwe',
	    nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ'
	  },
	  om: {
	    name: 'Oromo',
	    nativeName: 'Afaan Oromoo'
	  },
	  or: {
	    name: 'Oriya',
	    nativeName: 'ଓଡ଼ିଆ'
	  },
	  os: {
	    name: 'Ossetian',
	    nativeName: 'ирон æвзаг'
	  },
	  pa: {
	    name: 'Panjabi',
	    nativeName: 'ਪੰਜਾਬੀ'
	  },
	  pi: {
	    name: 'Pāli',
	    nativeName: 'पाऴि'
	  },
	  pl: {
	    name: 'Polish',
	    nativeName: 'język polski'
	  },
	  ps: {
	    name: 'Pashto',
	    nativeName: 'پښتو'
	  },
	  pt: {
	    name: 'Portuguese',
	    nativeName: 'Português'
	  },
	  qu: {
	    name: 'Quechua',
	    nativeName: 'Runa Simi'
	  },
	  rm: {
	    name: 'Romansh',
	    nativeName: 'rumantsch grischun'
	  },
	  rn: {
	    name: 'Kirundi',
	    nativeName: 'Ikirundi'
	  },
	  ro: {
	    name: 'Romanian',
	    nativeName: 'limba română'
	  },
	  ru: {
	    name: 'Russian',
	    nativeName: 'Русский'
	  },
	  rw: {
	    name: 'Kinyarwanda',
	    nativeName: 'Ikinyarwanda'
	  },
	  sa: {
	    name: 'Sanskrit',
	    nativeName: 'संस्कृतम्'
	  },
	  sc: {
	    name: 'Sardinian',
	    nativeName: 'sardu'
	  },
	  sd: {
	    name: 'Sindhi',
	    nativeName: 'सिन्धी'
	  },
	  se: {
	    name: 'Northern Sami',
	    nativeName: 'Davvisámegiella'
	  },
	  sg: {
	    name: 'Sango',
	    nativeName: 'yângâ tî sängö'
	  },
	  si: {
	    name: 'Sinhala',
	    nativeName: 'සිංහල'
	  },
	  sk: {
	    name: 'Slovak',
	    nativeName: 'slovenčina'
	  },
	  sl: {
	    name: 'Slovene',
	    nativeName: 'slovenski jezik'
	  },
	  sm: {
	    name: 'Samoan',
	    nativeName: 'gagana fa\'a Samoa'
	  },
	  sn: {
	    name: 'Shona',
	    nativeName: 'chiShona'
	  },
	  so: {
	    name: 'Somali',
	    nativeName: 'Soomaaliga'
	  },
	  sq: {
	    name: 'Albanian',
	    nativeName: 'Shqip'
	  },
	  sr: {
	    name: 'Serbian',
	    nativeName: 'српски језик'
	  },
	  ss: {
	    name: 'Swati',
	    nativeName: 'SiSwati'
	  },
	  st: {
	    name: 'Southern Sotho',
	    nativeName: 'Sesotho'
	  },
	  su: {
	    name: 'Sundanese',
	    nativeName: 'Basa Sunda'
	  },
	  sv: {
	    name: 'Swedish',
	    nativeName: 'svenska'
	  },
	  sw: {
	    name: 'Swahili',
	    nativeName: 'Kiswahili'
	  },
	  ta: {
	    name: 'Tamil',
	    nativeName: 'தமிழ்'
	  },
	  te: {
	    name: 'Telugu',
	    nativeName: 'తెలుగు'
	  },
	  tg: {
	    name: 'Tajik',
	    nativeName: 'тоҷикӣ'
	  },
	  th: {
	    name: 'Thai',
	    nativeName: 'ไทย'
	  },
	  ti: {
	    name: 'Tigrinya',
	    nativeName: 'ትግርኛ'
	  },
	  tk: {
	    name: 'Turkmen',
	    nativeName: 'Türkmen'
	  },
	  tl: {
	    name: 'Tagalog',
	    nativeName: 'Wikang Tagalog'
	  },
	  tn: {
	    name: 'Tswana',
	    nativeName: 'Setswana'
	  },
	  to: {
	    name: 'Tonga',
	    nativeName: 'faka Tonga'
	  },
	  tr: {
	    name: 'Turkish',
	    nativeName: 'Türkçe'
	  },
	  ts: {
	    name: 'Tsonga',
	    nativeName: 'Xitsonga'
	  },
	  tt: {
	    name: 'Tatar',
	    nativeName: 'татар теле'
	  },
	  tw: {
	    name: 'Twi',
	    nativeName: 'Twi'
	  },
	  ty: {
	    name: 'Tahitian',
	    nativeName: 'Reo Tahiti'
	  },
	  ug: {
	    name: 'Uyghur',
	    nativeName: 'ئۇيغۇرچە‎'
	  },
	  uk: {
	    name: 'Ukrainian',
	    nativeName: 'українська мова'
	  },
	  ur: {
	    name: 'Urdu',
	    nativeName: 'اردو'
	  },
	  uz: {
	    name: 'Uzbek',
	    nativeName: 'Ўзбек'
	  },
	  ve: {
	    name: 'Venda',
	    nativeName: 'Tshivenḓa'
	  },
	  vi: {
	    name: 'Vietnamese',
	    nativeName: 'Việt Nam'
	  },
	  vo: {
	    name: 'Volapük',
	    nativeName: 'Volapük'
	  },
	  wa: {
	    name: 'Walloon',
	    nativeName: 'walon'
	  },
	  wo: {
	    name: 'Wolof',
	    nativeName: 'Wollof'
	  },
	  xh: {
	    name: 'Xhosa',
	    nativeName: 'isiXhosa'
	  },
	  yi: {
	    name: 'Yiddish',
	    nativeName: 'ייִדיש'
	  },
	  yo: {
	    name: 'Yoruba',
	    nativeName: 'Yorùbá'
	  },
	  za: {
	    name: 'Zhuang',
	    nativeName: 'Saɯ cueŋƅ'
	  },
	  zh: {
	    name: 'Chinese',
	    nativeName: '中文'
	  },
	  zu: {
	    name: 'Zulu',
	    nativeName: 'isiZulu'
	  }
	};
	exports.LANGUAGES_LIST = LANGUAGES_LIST;

/***/ },
/* 255 */
/***/ function(module, exports) {

	module.exports = "\n  <seo-lang v-for=\"lang in langs\" :code=\"lang.code\" :url=\"lang.url\" :current=\"lang.current\"></seo-lang>\n";

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(257)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/twitter/displayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _displayer = __webpack_require__(203);

	var _displayer2 = _interopRequireDefault(_displayer);

	var _siteDisplayer = __webpack_require__(277);

	var _siteDisplayer2 = _interopRequireDefault(_siteDisplayer);

	var _titleDisplayer = __webpack_require__(258);

	var _titleDisplayer2 = _interopRequireDefault(_titleDisplayer);

	var _creatorDisplayer = __webpack_require__(261);

	var _creatorDisplayer2 = _interopRequireDefault(_creatorDisplayer);

	var _descriptionDisplayer = __webpack_require__(264);

	var _descriptionDisplayer2 = _interopRequireDefault(_descriptionDisplayer);

	var _imageDisplayer = __webpack_require__(267);

	var _imageDisplayer2 = _interopRequireDefault(_imageDisplayer);

	var _cardDisplayer = __webpack_require__(270);

	var _cardDisplayer2 = _interopRequireDefault(_cardDisplayer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_displayer2.default],
	  created: function created() {
	    this.supportedDisplayers = [_siteDisplayer2.default, _titleDisplayer2.default, _creatorDisplayer2.default, _descriptionDisplayer2.default, _imageDisplayer2.default, _cardDisplayer2.default];
	  }
	};
	// </script>
	//
	// <script>

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(259)
	__vue_template__ = __webpack_require__(260)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/twitter/titleDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 259 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <meta name="twitter:title" :content="value.value">
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'TwitterTitleDisplayer',

	  props: {
	    value: {
	      type: Object,
	      required: true
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'title';
	  }
	};
	// </script>
	//

/***/ },
/* 260 */
/***/ function(module, exports) {

	module.exports = "\n  <meta name=\"twitter:title\" :content=\"value.value\">\n";

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(262)
	__vue_template__ = __webpack_require__(263)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/twitter/creatorDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 262 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <meta name="twitter:creator" :content="value.value">
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'TwitterCreatorDisplayer',

	  props: {
	    value: {
	      type: Object,
	      required: true
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'creator';
	  }
	};
	// </script>
	//

/***/ },
/* 263 */
/***/ function(module, exports) {

	module.exports = "\n  <meta name=\"twitter:creator\" :content=\"value.value\">\n";

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(265)
	__vue_template__ = __webpack_require__(266)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/twitter/descriptionDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 265 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <meta name="twitter:description" :content="value.value">
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'TwitterDescriptionDisplayer',

	  props: {
	    value: {
	      type: Object,
	      required: true
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'description';
	  }
	};
	// </script>
	//

/***/ },
/* 266 */
/***/ function(module, exports) {

	module.exports = "\n  <meta name=\"twitter:description\" :content=\"value.value\">\n";

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(268)
	__vue_template__ = __webpack_require__(269)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/twitter/imageDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 268 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <meta property="twitter:image" :content="value.url">
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'TwitterImageDisplayer',

	  props: {
	    value: {
	      type: Object,
	      required: true
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'image';
	  }
	};
	// </script>
	//

/***/ },
/* 269 */
/***/ function(module, exports) {

	module.exports = "\n  <meta property=\"twitter:image\" :content=\"value.url\">\n";

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(271)
	__vue_template__ = __webpack_require__(272)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/twitter/cardDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 271 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <meta name="twitter:card" :content="value.type">
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'TwitterCardDisplayer',

	  props: {
	    value: {
	      type: Object,
	      required: true
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'type';
	  }
	};
	// </script>
	//

/***/ },
/* 272 */
/***/ function(module, exports) {

	module.exports = "\n  <meta name=\"twitter:card\" :content=\"value.type\">\n";

/***/ },
/* 273 */,
/* 274 */,
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(276)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/components/twitterCard.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _writer = __webpack_require__(177);

	var _writer2 = _interopRequireDefault(_writer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'SeoTwitterCard',

	  mixins: [_writer2.default],

	  props: {
	    type: {
	      type: String,
	      required: true
	    },

	    site: {
	      type: String,
	      required: true
	    }
	  },

	  computed: {
	    keys: function keys() {
	      return {
	        card: ['type', 'site']
	      };
	    }
	  }
	};
	// </script>
	//
	// <script>

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(278)
	__vue_template__ = __webpack_require__(279)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/seanwash/Sites/vue-seo/src/twitter/siteDisplayer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 278 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <meta name="twitter:site" :content="value.site">
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'TwitterSiteDisplayer',

	  props: {
	    value: {
	      type: Object,
	      required: true
	    }
	  },

	  wantsKey: function wantsKey(key) {
	    return key === 'card';
	  }
	};
	// </script>
	//

/***/ },
/* 279 */
/***/ function(module, exports) {

	module.exports = "\n  <meta name=\"twitter:site\" :content=\"value.site\">\n";

/***/ }
/******/ ])
});
;