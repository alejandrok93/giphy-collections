(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactDnD"] = factory(require("react"));
	else
		root["ReactDnD"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../dnd-core/lib/cjs/DragDropManagerImpl.js":
/*!**************************************************!*\
  !*** ../dnd-core/lib/cjs/DragDropManagerImpl.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar reducers_1 = __webpack_require__(/*! ./reducers */ \"../dnd-core/lib/cjs/reducers/index.js\");\n\nvar dragDrop_1 = __webpack_require__(/*! ./actions/dragDrop */ \"../dnd-core/lib/cjs/actions/dragDrop/index.js\");\n\nvar DragDropMonitorImpl_1 = __webpack_require__(/*! ./DragDropMonitorImpl */ \"../dnd-core/lib/cjs/DragDropMonitorImpl.js\");\n\nvar HandlerRegistryImpl_1 = __webpack_require__(/*! ./HandlerRegistryImpl */ \"../dnd-core/lib/cjs/HandlerRegistryImpl.js\");\n\nfunction makeStoreInstance(debugMode) {\n  // TODO: if we ever make a react-native version of this,\n  // we'll need to consider how to pull off dev-tooling\n  var reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;\n  return redux_1.createStore(reducers_1.default, debugMode && reduxDevTools && reduxDevTools({\n    name: 'dnd-core',\n    instanceId: 'dnd-core'\n  }));\n}\n\nvar DragDropManagerImpl =\n/** @class */\nfunction () {\n  function DragDropManagerImpl(createBackend, context, debugMode) {\n    if (context === void 0) {\n      context = {};\n    }\n\n    if (debugMode === void 0) {\n      debugMode = false;\n    }\n\n    var _this = this;\n\n    this.context = context;\n    this.isSetUp = false;\n\n    this.handleRefCountChange = function () {\n      var shouldSetUp = _this.store.getState().refCount > 0;\n\n      if (shouldSetUp && !_this.isSetUp) {\n        _this.backend.setup();\n\n        _this.isSetUp = true;\n      } else if (!shouldSetUp && _this.isSetUp) {\n        _this.backend.teardown();\n\n        _this.isSetUp = false;\n      }\n    };\n\n    var store = makeStoreInstance(debugMode);\n    this.store = store;\n    this.monitor = new DragDropMonitorImpl_1.default(store, new HandlerRegistryImpl_1.default(store));\n    this.backend = createBackend(this);\n    store.subscribe(this.handleRefCountChange);\n  }\n\n  DragDropManagerImpl.prototype.getContext = function () {\n    return this.context;\n  };\n\n  DragDropManagerImpl.prototype.getMonitor = function () {\n    return this.monitor;\n  };\n\n  DragDropManagerImpl.prototype.getBackend = function () {\n    return this.backend;\n  };\n\n  DragDropManagerImpl.prototype.getRegistry = function () {\n    return this.monitor.registry;\n  };\n\n  DragDropManagerImpl.prototype.getActions = function () {\n    var manager = this;\n    var dispatch = this.store.dispatch;\n\n    function bindActionCreator(actionCreator) {\n      return function () {\n        var args = [];\n\n        for (var _i = 0; _i < arguments.length; _i++) {\n          args[_i] = arguments[_i];\n        }\n\n        var action = actionCreator.apply(manager, args);\n\n        if (typeof action !== 'undefined') {\n          dispatch(action);\n        }\n      };\n    }\n\n    var actions = dragDrop_1.default(this);\n    return Object.keys(actions).reduce(function (boundActions, key) {\n      var action = actions[key];\n      boundActions[key] = bindActionCreator(action);\n      return boundActions;\n    }, {});\n  };\n\n  DragDropManagerImpl.prototype.dispatch = function (action) {\n    this.store.dispatch(action);\n  };\n\n  return DragDropManagerImpl;\n}();\n\nexports.default = DragDropManagerImpl;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/DragDropManagerImpl.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/DragDropMonitorImpl.js":
/*!**************************************************!*\
  !*** ../dnd-core/lib/cjs/DragDropMonitorImpl.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar matchesType_1 = __webpack_require__(/*! ./utils/matchesType */ \"../dnd-core/lib/cjs/utils/matchesType.js\");\n\nvar coords_1 = __webpack_require__(/*! ./utils/coords */ \"../dnd-core/lib/cjs/utils/coords.js\");\n\nvar dirtiness_1 = __webpack_require__(/*! ./utils/dirtiness */ \"../dnd-core/lib/cjs/utils/dirtiness.js\");\n\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n\nvar DragDropMonitorImpl =\n/** @class */\nfunction () {\n  function DragDropMonitorImpl(store, registry) {\n    this.store = store;\n    this.registry = registry;\n  }\n\n  DragDropMonitorImpl.prototype.subscribeToStateChange = function (listener, options) {\n    var _this = this;\n\n    if (options === void 0) {\n      options = {\n        handlerIds: undefined\n      };\n    }\n\n    var handlerIds = options.handlerIds;\n    invariant(typeof listener === 'function', 'listener must be a function.');\n    invariant(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');\n    var prevStateId = this.store.getState().stateId;\n\n    var handleChange = function () {\n      var state = _this.store.getState();\n\n      var currentStateId = state.stateId;\n\n      try {\n        var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !dirtiness_1.areDirty(state.dirtyHandlerIds, handlerIds);\n\n        if (!canSkipListener) {\n          listener();\n        }\n      } finally {\n        prevStateId = currentStateId;\n      }\n    };\n\n    return this.store.subscribe(handleChange);\n  };\n\n  DragDropMonitorImpl.prototype.subscribeToOffsetChange = function (listener) {\n    var _this = this;\n\n    invariant(typeof listener === 'function', 'listener must be a function.');\n    var previousState = this.store.getState().dragOffset;\n\n    var handleChange = function () {\n      var nextState = _this.store.getState().dragOffset;\n\n      if (nextState === previousState) {\n        return;\n      }\n\n      previousState = nextState;\n      listener();\n    };\n\n    return this.store.subscribe(handleChange);\n  };\n\n  DragDropMonitorImpl.prototype.canDragSource = function (sourceId) {\n    if (!sourceId) {\n      return false;\n    }\n\n    var source = this.registry.getSource(sourceId);\n    invariant(source, 'Expected to find a valid source.');\n\n    if (this.isDragging()) {\n      return false;\n    }\n\n    return source.canDrag(this, sourceId);\n  };\n\n  DragDropMonitorImpl.prototype.canDropOnTarget = function (targetId) {\n    // undefined on initial render\n    if (!targetId) {\n      return false;\n    }\n\n    var target = this.registry.getTarget(targetId);\n    invariant(target, 'Expected to find a valid target.');\n\n    if (!this.isDragging() || this.didDrop()) {\n      return false;\n    }\n\n    var targetType = this.registry.getTargetType(targetId);\n    var draggedItemType = this.getItemType();\n    return matchesType_1.default(targetType, draggedItemType) && target.canDrop(this, targetId);\n  };\n\n  DragDropMonitorImpl.prototype.isDragging = function () {\n    return Boolean(this.getItemType());\n  };\n\n  DragDropMonitorImpl.prototype.isDraggingSource = function (sourceId) {\n    // undefined on initial render\n    if (!sourceId) {\n      return false;\n    }\n\n    var source = this.registry.getSource(sourceId, true);\n    invariant(source, 'Expected to find a valid source.');\n\n    if (!this.isDragging() || !this.isSourcePublic()) {\n      return false;\n    }\n\n    var sourceType = this.registry.getSourceType(sourceId);\n    var draggedItemType = this.getItemType();\n\n    if (sourceType !== draggedItemType) {\n      return false;\n    }\n\n    return source.isDragging(this, sourceId);\n  };\n\n  DragDropMonitorImpl.prototype.isOverTarget = function (targetId, options) {\n    if (options === void 0) {\n      options = {\n        shallow: false\n      };\n    } // undefined on initial render\n\n\n    if (!targetId) {\n      return false;\n    }\n\n    var shallow = options.shallow;\n\n    if (!this.isDragging()) {\n      return false;\n    }\n\n    var targetType = this.registry.getTargetType(targetId);\n    var draggedItemType = this.getItemType();\n\n    if (draggedItemType && !matchesType_1.default(targetType, draggedItemType)) {\n      return false;\n    }\n\n    var targetIds = this.getTargetIds();\n\n    if (!targetIds.length) {\n      return false;\n    }\n\n    var index = targetIds.indexOf(targetId);\n\n    if (shallow) {\n      return index === targetIds.length - 1;\n    } else {\n      return index > -1;\n    }\n  };\n\n  DragDropMonitorImpl.prototype.getItemType = function () {\n    return this.store.getState().dragOperation.itemType;\n  };\n\n  DragDropMonitorImpl.prototype.getItem = function () {\n    return this.store.getState().dragOperation.item;\n  };\n\n  DragDropMonitorImpl.prototype.getSourceId = function () {\n    return this.store.getState().dragOperation.sourceId;\n  };\n\n  DragDropMonitorImpl.prototype.getTargetIds = function () {\n    return this.store.getState().dragOperation.targetIds;\n  };\n\n  DragDropMonitorImpl.prototype.getDropResult = function () {\n    return this.store.getState().dragOperation.dropResult;\n  };\n\n  DragDropMonitorImpl.prototype.didDrop = function () {\n    return this.store.getState().dragOperation.didDrop;\n  };\n\n  DragDropMonitorImpl.prototype.isSourcePublic = function () {\n    return this.store.getState().dragOperation.isSourcePublic;\n  };\n\n  DragDropMonitorImpl.prototype.getInitialClientOffset = function () {\n    return this.store.getState().dragOffset.initialClientOffset;\n  };\n\n  DragDropMonitorImpl.prototype.getInitialSourceClientOffset = function () {\n    return this.store.getState().dragOffset.initialSourceClientOffset;\n  };\n\n  DragDropMonitorImpl.prototype.getClientOffset = function () {\n    return this.store.getState().dragOffset.clientOffset;\n  };\n\n  DragDropMonitorImpl.prototype.getSourceClientOffset = function () {\n    return coords_1.getSourceClientOffset(this.store.getState().dragOffset);\n  };\n\n  DragDropMonitorImpl.prototype.getDifferenceFromInitialOffset = function () {\n    return coords_1.getDifferenceFromInitialOffset(this.store.getState().dragOffset);\n  };\n\n  return DragDropMonitorImpl;\n}();\n\nexports.default = DragDropMonitorImpl;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/DragDropMonitorImpl.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/HandlerRegistryImpl.js":
/*!**************************************************!*\
  !*** ../dnd-core/lib/cjs/HandlerRegistryImpl.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar registry_1 = __webpack_require__(/*! ./actions/registry */ \"../dnd-core/lib/cjs/actions/registry.js\");\n\nvar getNextUniqueId_1 = __webpack_require__(/*! ./utils/getNextUniqueId */ \"../dnd-core/lib/cjs/utils/getNextUniqueId.js\");\n\nvar interfaces_1 = __webpack_require__(/*! ./interfaces */ \"../dnd-core/lib/cjs/interfaces.js\");\n\nvar contracts_1 = __webpack_require__(/*! ./contracts */ \"../dnd-core/lib/cjs/contracts.js\");\n\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n\nvar asap = __webpack_require__(/*! asap */ \"./node_modules/asap/browser-asap.js\");\n\nfunction getNextHandlerId(role) {\n  var id = getNextUniqueId_1.default().toString();\n\n  switch (role) {\n    case interfaces_1.HandlerRole.SOURCE:\n      return \"S\" + id;\n\n    case interfaces_1.HandlerRole.TARGET:\n      return \"T\" + id;\n\n    default:\n      throw new Error(\"Unknown Handler Role: \" + role);\n  }\n}\n\nfunction parseRoleFromHandlerId(handlerId) {\n  switch (handlerId[0]) {\n    case 'S':\n      return interfaces_1.HandlerRole.SOURCE;\n\n    case 'T':\n      return interfaces_1.HandlerRole.TARGET;\n\n    default:\n      invariant(false, \"Cannot parse handler ID: \" + handlerId);\n  }\n}\n\nfunction mapContainsValue(map, searchValue) {\n  var entries = map.entries();\n  var isDone = false;\n\n  do {\n    var _a = entries.next(),\n        done = _a.done,\n        _b = _a.value,\n        value = _b[1];\n\n    if (value === searchValue) {\n      return true;\n    }\n\n    isDone = done;\n  } while (!isDone);\n\n  return false;\n}\n\nvar HandlerRegistryImpl =\n/** @class */\nfunction () {\n  function HandlerRegistryImpl(store) {\n    this.store = store;\n    this.types = new Map();\n    this.dragSources = new Map();\n    this.dropTargets = new Map();\n    this.pinnedSourceId = null;\n    this.pinnedSource = null;\n  }\n\n  HandlerRegistryImpl.prototype.addSource = function (type, source) {\n    contracts_1.validateType(type);\n    contracts_1.validateSourceContract(source);\n    var sourceId = this.addHandler(interfaces_1.HandlerRole.SOURCE, type, source);\n    this.store.dispatch(registry_1.addSource(sourceId));\n    return sourceId;\n  };\n\n  HandlerRegistryImpl.prototype.addTarget = function (type, target) {\n    contracts_1.validateType(type, true);\n    contracts_1.validateTargetContract(target);\n    var targetId = this.addHandler(interfaces_1.HandlerRole.TARGET, type, target);\n    this.store.dispatch(registry_1.addTarget(targetId));\n    return targetId;\n  };\n\n  HandlerRegistryImpl.prototype.containsHandler = function (handler) {\n    return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);\n  };\n\n  HandlerRegistryImpl.prototype.getSource = function (sourceId, includePinned) {\n    if (includePinned === void 0) {\n      includePinned = false;\n    }\n\n    invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');\n    var isPinned = includePinned && sourceId === this.pinnedSourceId;\n    var source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);\n    return source;\n  };\n\n  HandlerRegistryImpl.prototype.getTarget = function (targetId) {\n    invariant(this.isTargetId(targetId), 'Expected a valid target ID.');\n    return this.dropTargets.get(targetId);\n  };\n\n  HandlerRegistryImpl.prototype.getSourceType = function (sourceId) {\n    invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');\n    return this.types.get(sourceId);\n  };\n\n  HandlerRegistryImpl.prototype.getTargetType = function (targetId) {\n    invariant(this.isTargetId(targetId), 'Expected a valid target ID.');\n    return this.types.get(targetId);\n  };\n\n  HandlerRegistryImpl.prototype.isSourceId = function (handlerId) {\n    var role = parseRoleFromHandlerId(handlerId);\n    return role === interfaces_1.HandlerRole.SOURCE;\n  };\n\n  HandlerRegistryImpl.prototype.isTargetId = function (handlerId) {\n    var role = parseRoleFromHandlerId(handlerId);\n    return role === interfaces_1.HandlerRole.TARGET;\n  };\n\n  HandlerRegistryImpl.prototype.removeSource = function (sourceId) {\n    var _this = this;\n\n    invariant(this.getSource(sourceId), 'Expected an existing source.');\n    this.store.dispatch(registry_1.removeSource(sourceId));\n    asap(function () {\n      _this.dragSources.delete(sourceId);\n\n      _this.types.delete(sourceId);\n    });\n  };\n\n  HandlerRegistryImpl.prototype.removeTarget = function (targetId) {\n    invariant(this.getTarget(targetId), 'Expected an existing target.');\n    this.store.dispatch(registry_1.removeTarget(targetId));\n    this.dropTargets.delete(targetId);\n    this.types.delete(targetId);\n  };\n\n  HandlerRegistryImpl.prototype.pinSource = function (sourceId) {\n    var source = this.getSource(sourceId);\n    invariant(source, 'Expected an existing source.');\n    this.pinnedSourceId = sourceId;\n    this.pinnedSource = source;\n  };\n\n  HandlerRegistryImpl.prototype.unpinSource = function () {\n    invariant(this.pinnedSource, 'No source is pinned at the time.');\n    this.pinnedSourceId = null;\n    this.pinnedSource = null;\n  };\n\n  HandlerRegistryImpl.prototype.addHandler = function (role, type, handler) {\n    var id = getNextHandlerId(role);\n    this.types.set(id, type);\n\n    if (role === interfaces_1.HandlerRole.SOURCE) {\n      this.dragSources.set(id, handler);\n    } else if (role === interfaces_1.HandlerRole.TARGET) {\n      this.dropTargets.set(id, handler);\n    }\n\n    return id;\n  };\n\n  return HandlerRegistryImpl;\n}();\n\nexports.default = HandlerRegistryImpl;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/HandlerRegistryImpl.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/actions/dragDrop/beginDrag.js":
/*!*********************************************************!*\
  !*** ../dnd-core/lib/cjs/actions/dragDrop/beginDrag.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar setClientOffset_1 = __webpack_require__(/*! ./local/setClientOffset */ \"../dnd-core/lib/cjs/actions/dragDrop/local/setClientOffset.js\");\n\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n\nvar isObject = __webpack_require__(/*! lodash/isObject */ \"./node_modules/lodash/isObject.js\");\n\nvar types_1 = __webpack_require__(/*! ./types */ \"../dnd-core/lib/cjs/actions/dragDrop/types.js\");\n\nvar ResetCoordinatesAction = {\n  type: types_1.INIT_COORDS,\n  payload: {\n    clientOffset: null,\n    sourceClientOffset: null\n  }\n};\n\nfunction createBeginDrag(manager) {\n  return function beginDrag(sourceIds, options) {\n    if (sourceIds === void 0) {\n      sourceIds = [];\n    }\n\n    if (options === void 0) {\n      options = {\n        publishSource: true\n      };\n    }\n\n    var _a = options.publishSource,\n        publishSource = _a === void 0 ? true : _a,\n        clientOffset = options.clientOffset,\n        getSourceClientOffset = options.getSourceClientOffset;\n    var monitor = manager.getMonitor();\n    var registry = manager.getRegistry(); // Initialize the coordinates using the client offset\n\n    manager.dispatch(setClientOffset_1.setClientOffset(clientOffset));\n    verifyInvariants(sourceIds, monitor, registry); // Get the draggable source\n\n    var sourceId = getDraggableSource(sourceIds, monitor);\n\n    if (sourceId === null) {\n      manager.dispatch(ResetCoordinatesAction);\n      return;\n    } // Get the source client offset\n\n\n    var sourceClientOffset = null;\n\n    if (clientOffset) {\n      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);\n      sourceClientOffset = getSourceClientOffset(sourceId);\n    } // Initialize the full coordinates\n\n\n    manager.dispatch(setClientOffset_1.setClientOffset(clientOffset, sourceClientOffset));\n    var source = registry.getSource(sourceId);\n    var item = source.beginDrag(monitor, sourceId);\n    verifyItemIsObject(item);\n    registry.pinSource(sourceId);\n    var itemType = registry.getSourceType(sourceId);\n    return {\n      type: types_1.BEGIN_DRAG,\n      payload: {\n        itemType: itemType,\n        item: item,\n        sourceId: sourceId,\n        clientOffset: clientOffset || null,\n        sourceClientOffset: sourceClientOffset || null,\n        isSourcePublic: !!publishSource\n      }\n    };\n  };\n}\n\nexports.default = createBeginDrag;\n\nfunction verifyInvariants(sourceIds, monitor, registry) {\n  invariant(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');\n\n  for (var _i = 0, sourceIds_1 = sourceIds; _i < sourceIds_1.length; _i++) {\n    var s = sourceIds_1[_i];\n    invariant(registry.getSource(s), 'Expected sourceIds to be registered.');\n  }\n}\n\nfunction verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {\n  invariant(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');\n}\n\nfunction verifyItemIsObject(item) {\n  invariant(isObject(item), 'Item must be an object.');\n}\n\nfunction getDraggableSource(sourceIds, monitor) {\n  var sourceId = null;\n\n  for (var i = sourceIds.length - 1; i >= 0; i--) {\n    if (monitor.canDragSource(sourceIds[i])) {\n      sourceId = sourceIds[i];\n      break;\n    }\n  }\n\n  return sourceId;\n}\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/actions/dragDrop/beginDrag.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/actions/dragDrop/drop.js":
/*!****************************************************!*\
  !*** ../dnd-core/lib/cjs/actions/dragDrop/drop.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __assign = this && this.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar types_1 = __webpack_require__(/*! ./types */ \"../dnd-core/lib/cjs/actions/dragDrop/types.js\");\n\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n\nvar isObject = __webpack_require__(/*! lodash/isObject */ \"./node_modules/lodash/isObject.js\");\n\nfunction createDrop(manager) {\n  return function drop(options) {\n    if (options === void 0) {\n      options = {};\n    }\n\n    var monitor = manager.getMonitor();\n    var registry = manager.getRegistry();\n    verifyInvariants(monitor);\n    var targetIds = getDroppableTargets(monitor); // Multiple actions are dispatched here, which is why this doesn't return an action\n\n    targetIds.forEach(function (targetId, index) {\n      var dropResult = determineDropResult(targetId, index, registry, monitor);\n      var action = {\n        type: types_1.DROP,\n        payload: {\n          dropResult: __assign({}, options, dropResult)\n        }\n      };\n      manager.dispatch(action);\n    });\n  };\n}\n\nexports.default = createDrop;\n\nfunction verifyInvariants(monitor) {\n  invariant(monitor.isDragging(), 'Cannot call drop while not dragging.');\n  invariant(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');\n}\n\nfunction determineDropResult(targetId, index, registry, monitor) {\n  var target = registry.getTarget(targetId);\n  var dropResult = target.drop(monitor, targetId);\n  verifyDropResultType(dropResult);\n\n  if (typeof dropResult === 'undefined') {\n    dropResult = index === 0 ? {} : monitor.getDropResult();\n  }\n\n  return dropResult;\n}\n\nfunction verifyDropResultType(dropResult) {\n  invariant(typeof dropResult === 'undefined' || isObject(dropResult), 'Drop result must either be an object or undefined.');\n}\n\nfunction getDroppableTargets(monitor) {\n  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);\n  targetIds.reverse();\n  return targetIds;\n}\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/actions/dragDrop/drop.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/actions/dragDrop/endDrag.js":
/*!*******************************************************!*\
  !*** ../dnd-core/lib/cjs/actions/dragDrop/endDrag.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar types_1 = __webpack_require__(/*! ./types */ \"../dnd-core/lib/cjs/actions/dragDrop/types.js\");\n\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n\nfunction createEndDrag(manager) {\n  return function endDrag() {\n    var monitor = manager.getMonitor();\n    var registry = manager.getRegistry();\n    verifyIsDragging(monitor);\n    var sourceId = monitor.getSourceId();\n    var source = registry.getSource(sourceId, true);\n    source.endDrag(monitor, sourceId);\n    registry.unpinSource();\n    return {\n      type: types_1.END_DRAG\n    };\n  };\n}\n\nexports.default = createEndDrag;\n\nfunction verifyIsDragging(monitor) {\n  invariant(monitor.isDragging(), 'Cannot call endDrag while not dragging.');\n}\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/actions/dragDrop/endDrag.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/actions/dragDrop/hover.js":
/*!*****************************************************!*\
  !*** ../dnd-core/lib/cjs/actions/dragDrop/hover.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar matchesType_1 = __webpack_require__(/*! ../../utils/matchesType */ \"../dnd-core/lib/cjs/utils/matchesType.js\");\n\nvar types_1 = __webpack_require__(/*! ./types */ \"../dnd-core/lib/cjs/actions/dragDrop/types.js\");\n\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n\nfunction createHover(manager) {\n  return function hover(targetIdsArg, _a) {\n    var clientOffset = (_a === void 0 ? {} : _a).clientOffset;\n    verifyTargetIdsIsArray(targetIdsArg);\n    var targetIds = targetIdsArg.slice(0);\n    var monitor = manager.getMonitor();\n    var registry = manager.getRegistry();\n    checkInvariants(targetIds, monitor, registry);\n    var draggedItemType = monitor.getItemType();\n    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);\n    hoverAllTargets(targetIds, monitor, registry);\n    return {\n      type: types_1.HOVER,\n      payload: {\n        targetIds: targetIds,\n        clientOffset: clientOffset || null\n      }\n    };\n  };\n}\n\nexports.default = createHover;\n\nfunction verifyTargetIdsIsArray(targetIdsArg) {\n  invariant(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');\n}\n\nfunction checkInvariants(targetIds, monitor, registry) {\n  invariant(monitor.isDragging(), 'Cannot call hover while not dragging.');\n  invariant(!monitor.didDrop(), 'Cannot call hover after drop.');\n\n  for (var i = 0; i < targetIds.length; i++) {\n    var targetId = targetIds[i];\n    invariant(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');\n    var target = registry.getTarget(targetId);\n    invariant(target, 'Expected targetIds to be registered.');\n  }\n}\n\nfunction removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {\n  // Remove those targetIds that don't match the targetType.  This\n  // fixes shallow isOver which would only be non-shallow because of\n  // non-matching targets.\n  for (var i = targetIds.length - 1; i >= 0; i--) {\n    var targetId = targetIds[i];\n    var targetType = registry.getTargetType(targetId);\n\n    if (!matchesType_1.default(targetType, draggedItemType)) {\n      targetIds.splice(i, 1);\n    }\n  }\n}\n\nfunction hoverAllTargets(targetIds, monitor, registry) {\n  // Finally call hover on all matching targets.\n  for (var _i = 0, targetIds_1 = targetIds; _i < targetIds_1.length; _i++) {\n    var targetId = targetIds_1[_i];\n    var target = registry.getTarget(targetId);\n    target.hover(monitor, targetId);\n  }\n}\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/actions/dragDrop/hover.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/actions/dragDrop/index.js":
/*!*****************************************************!*\
  !*** ../dnd-core/lib/cjs/actions/dragDrop/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction __export(m) {\n  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar beginDrag_1 = __webpack_require__(/*! ./beginDrag */ \"../dnd-core/lib/cjs/actions/dragDrop/beginDrag.js\");\n\nvar publishDragSource_1 = __webpack_require__(/*! ./publishDragSource */ \"../dnd-core/lib/cjs/actions/dragDrop/publishDragSource.js\");\n\nvar hover_1 = __webpack_require__(/*! ./hover */ \"../dnd-core/lib/cjs/actions/dragDrop/hover.js\");\n\nvar drop_1 = __webpack_require__(/*! ./drop */ \"../dnd-core/lib/cjs/actions/dragDrop/drop.js\");\n\nvar endDrag_1 = __webpack_require__(/*! ./endDrag */ \"../dnd-core/lib/cjs/actions/dragDrop/endDrag.js\");\n\n__export(__webpack_require__(/*! ./types */ \"../dnd-core/lib/cjs/actions/dragDrop/types.js\"));\n\nfunction createDragDropActions(manager) {\n  return {\n    beginDrag: beginDrag_1.default(manager),\n    publishDragSource: publishDragSource_1.default(manager),\n    hover: hover_1.default(manager),\n    drop: drop_1.default(manager),\n    endDrag: endDrag_1.default(manager)\n  };\n}\n\nexports.default = createDragDropActions;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/actions/dragDrop/index.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/actions/dragDrop/local/setClientOffset.js":
/*!*********************************************************************!*\
  !*** ../dnd-core/lib/cjs/actions/dragDrop/local/setClientOffset.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar types_1 = __webpack_require__(/*! ../types */ \"../dnd-core/lib/cjs/actions/dragDrop/types.js\");\n\nfunction setClientOffset(clientOffset, sourceClientOffset) {\n  return {\n    type: types_1.INIT_COORDS,\n    payload: {\n      sourceClientOffset: sourceClientOffset || null,\n      clientOffset: clientOffset || null\n    }\n  };\n}\n\nexports.setClientOffset = setClientOffset;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/actions/dragDrop/local/setClientOffset.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/actions/dragDrop/publishDragSource.js":
/*!*****************************************************************!*\
  !*** ../dnd-core/lib/cjs/actions/dragDrop/publishDragSource.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar types_1 = __webpack_require__(/*! ./types */ \"../dnd-core/lib/cjs/actions/dragDrop/types.js\");\n\nfunction createPublishDragSource(manager) {\n  return function publishDragSource() {\n    var monitor = manager.getMonitor();\n\n    if (monitor.isDragging()) {\n      return {\n        type: types_1.PUBLISH_DRAG_SOURCE\n      };\n    }\n  };\n}\n\nexports.default = createPublishDragSource;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/actions/dragDrop/publishDragSource.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/actions/dragDrop/types.js":
/*!*****************************************************!*\
  !*** ../dnd-core/lib/cjs/actions/dragDrop/types.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.INIT_COORDS = 'dnd-core/INIT_COORDS';\nexports.BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';\nexports.PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';\nexports.HOVER = 'dnd-core/HOVER';\nexports.DROP = 'dnd-core/DROP';\nexports.END_DRAG = 'dnd-core/END_DRAG';\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/actions/dragDrop/types.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/actions/registry.js":
/*!***********************************************!*\
  !*** ../dnd-core/lib/cjs/actions/registry.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ADD_SOURCE = 'dnd-core/ADD_SOURCE';\nexports.ADD_TARGET = 'dnd-core/ADD_TARGET';\nexports.REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';\nexports.REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';\n\nfunction addSource(sourceId) {\n  return {\n    type: exports.ADD_SOURCE,\n    payload: {\n      sourceId: sourceId\n    }\n  };\n}\n\nexports.addSource = addSource;\n\nfunction addTarget(targetId) {\n  return {\n    type: exports.ADD_TARGET,\n    payload: {\n      targetId: targetId\n    }\n  };\n}\n\nexports.addTarget = addTarget;\n\nfunction removeSource(sourceId) {\n  return {\n    type: exports.REMOVE_SOURCE,\n    payload: {\n      sourceId: sourceId\n    }\n  };\n}\n\nexports.removeSource = removeSource;\n\nfunction removeTarget(targetId) {\n  return {\n    type: exports.REMOVE_TARGET,\n    payload: {\n      targetId: targetId\n    }\n  };\n}\n\nexports.removeTarget = removeTarget;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/actions/registry.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/contracts.js":
/*!****************************************!*\
  !*** ../dnd-core/lib/cjs/contracts.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n\nfunction validateSourceContract(source) {\n  invariant(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');\n  invariant(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');\n  invariant(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');\n}\n\nexports.validateSourceContract = validateSourceContract;\n\nfunction validateTargetContract(target) {\n  invariant(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');\n  invariant(typeof target.hover === 'function', 'Expected hover to be a function.');\n  invariant(typeof target.drop === 'function', 'Expected beginDrag to be a function.');\n}\n\nexports.validateTargetContract = validateTargetContract;\n\nfunction validateType(type, allowArray) {\n  if (allowArray && Array.isArray(type)) {\n    type.forEach(function (t) {\n      return validateType(t, false);\n    });\n    return;\n  }\n\n  invariant(typeof type === 'string' || typeof type === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');\n}\n\nexports.validateType = validateType;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/contracts.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/factories.js":
/*!****************************************!*\
  !*** ../dnd-core/lib/cjs/factories.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar DragDropManagerImpl_1 = __webpack_require__(/*! ./DragDropManagerImpl */ \"../dnd-core/lib/cjs/DragDropManagerImpl.js\");\n\nfunction createDragDropManager(backend, context, debugMode) {\n  return new DragDropManagerImpl_1.default(backend, context, debugMode);\n}\n\nexports.createDragDropManager = createDragDropManager;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/factories.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/index.js":
/*!************************************!*\
  !*** ../dnd-core/lib/cjs/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction __export(m) {\n  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n__export(__webpack_require__(/*! ./interfaces */ \"../dnd-core/lib/cjs/interfaces.js\"));\n\n__export(__webpack_require__(/*! ./factories */ \"../dnd-core/lib/cjs/factories.js\"));\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/index.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/interfaces.js":
/*!*****************************************!*\
  !*** ../dnd-core/lib/cjs/interfaces.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar HandlerRole;\n\n(function (HandlerRole) {\n  HandlerRole[\"SOURCE\"] = \"SOURCE\";\n  HandlerRole[\"TARGET\"] = \"TARGET\";\n})(HandlerRole = exports.HandlerRole || (exports.HandlerRole = {}));\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/interfaces.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/reducers/dirtyHandlerIds.js":
/*!*******************************************************!*\
  !*** ../dnd-core/lib/cjs/reducers/dirtyHandlerIds.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar dragDrop_1 = __webpack_require__(/*! ../actions/dragDrop */ \"../dnd-core/lib/cjs/actions/dragDrop/index.js\");\n\nvar registry_1 = __webpack_require__(/*! ../actions/registry */ \"../dnd-core/lib/cjs/actions/registry.js\");\n\nvar equality_1 = __webpack_require__(/*! ../utils/equality */ \"../dnd-core/lib/cjs/utils/equality.js\");\n\nvar dirtiness_1 = __webpack_require__(/*! ../utils/dirtiness */ \"../dnd-core/lib/cjs/utils/dirtiness.js\");\n\nvar xor = __webpack_require__(/*! lodash/xor */ \"./node_modules/lodash/xor.js\");\n\nfunction dirtyHandlerIds(state, action) {\n  if (state === void 0) {\n    state = dirtiness_1.NONE;\n  }\n\n  switch (action.type) {\n    case dragDrop_1.HOVER:\n      break;\n\n    case registry_1.ADD_SOURCE:\n    case registry_1.ADD_TARGET:\n    case registry_1.REMOVE_TARGET:\n    case registry_1.REMOVE_SOURCE:\n      return dirtiness_1.NONE;\n\n    case dragDrop_1.BEGIN_DRAG:\n    case dragDrop_1.PUBLISH_DRAG_SOURCE:\n    case dragDrop_1.END_DRAG:\n    case dragDrop_1.DROP:\n    default:\n      return dirtiness_1.ALL;\n  }\n\n  var _a = action.payload,\n      _b = _a.targetIds,\n      targetIds = _b === void 0 ? [] : _b,\n      _c = _a.prevTargetIds,\n      prevTargetIds = _c === void 0 ? [] : _c;\n  var result = xor(targetIds, prevTargetIds);\n  var didChange = result.length > 0 || !equality_1.areArraysEqual(targetIds, prevTargetIds);\n\n  if (!didChange) {\n    return dirtiness_1.NONE;\n  } // Check the target ids at the innermost position. If they are valid, add them\n  // to the result\n\n\n  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];\n  var innermostTargetId = targetIds[targetIds.length - 1];\n\n  if (prevInnermostTargetId !== innermostTargetId) {\n    if (prevInnermostTargetId) {\n      result.push(prevInnermostTargetId);\n    }\n\n    if (innermostTargetId) {\n      result.push(innermostTargetId);\n    }\n  }\n\n  return result;\n}\n\nexports.default = dirtyHandlerIds;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/reducers/dirtyHandlerIds.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/reducers/dragOffset.js":
/*!**************************************************!*\
  !*** ../dnd-core/lib/cjs/reducers/dragOffset.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __assign = this && this.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar dragDrop_1 = __webpack_require__(/*! ../actions/dragDrop */ \"../dnd-core/lib/cjs/actions/dragDrop/index.js\");\n\nvar equality_1 = __webpack_require__(/*! ../utils/equality */ \"../dnd-core/lib/cjs/utils/equality.js\");\n\nvar initialState = {\n  initialSourceClientOffset: null,\n  initialClientOffset: null,\n  clientOffset: null\n};\n\nfunction dragOffset(state, action) {\n  if (state === void 0) {\n    state = initialState;\n  }\n\n  var payload = action.payload;\n\n  switch (action.type) {\n    case dragDrop_1.INIT_COORDS:\n    case dragDrop_1.BEGIN_DRAG:\n      return {\n        initialSourceClientOffset: payload.sourceClientOffset,\n        initialClientOffset: payload.clientOffset,\n        clientOffset: payload.clientOffset\n      };\n\n    case dragDrop_1.HOVER:\n      if (equality_1.areCoordsEqual(state.clientOffset, payload.clientOffset)) {\n        return state;\n      }\n\n      return __assign({}, state, {\n        clientOffset: payload.clientOffset\n      });\n\n    case dragDrop_1.END_DRAG:\n    case dragDrop_1.DROP:\n      return initialState;\n\n    default:\n      return state;\n  }\n}\n\nexports.default = dragOffset;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/reducers/dragOffset.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/reducers/dragOperation.js":
/*!*****************************************************!*\
  !*** ../dnd-core/lib/cjs/reducers/dragOperation.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __assign = this && this.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar dragDrop_1 = __webpack_require__(/*! ../actions/dragDrop */ \"../dnd-core/lib/cjs/actions/dragDrop/index.js\");\n\nvar registry_1 = __webpack_require__(/*! ../actions/registry */ \"../dnd-core/lib/cjs/actions/registry.js\");\n\nvar without = __webpack_require__(/*! lodash/without */ \"./node_modules/lodash/without.js\");\n\nvar initialState = {\n  itemType: null,\n  item: null,\n  sourceId: null,\n  targetIds: [],\n  dropResult: null,\n  didDrop: false,\n  isSourcePublic: null\n};\n\nfunction dragOperation(state, action) {\n  if (state === void 0) {\n    state = initialState;\n  }\n\n  var payload = action.payload;\n\n  switch (action.type) {\n    case dragDrop_1.BEGIN_DRAG:\n      return __assign({}, state, {\n        itemType: payload.itemType,\n        item: payload.item,\n        sourceId: payload.sourceId,\n        isSourcePublic: payload.isSourcePublic,\n        dropResult: null,\n        didDrop: false\n      });\n\n    case dragDrop_1.PUBLISH_DRAG_SOURCE:\n      return __assign({}, state, {\n        isSourcePublic: true\n      });\n\n    case dragDrop_1.HOVER:\n      return __assign({}, state, {\n        targetIds: payload.targetIds\n      });\n\n    case registry_1.REMOVE_TARGET:\n      if (state.targetIds.indexOf(payload.targetId) === -1) {\n        return state;\n      }\n\n      return __assign({}, state, {\n        targetIds: without(state.targetIds, payload.targetId)\n      });\n\n    case dragDrop_1.DROP:\n      return __assign({}, state, {\n        dropResult: payload.dropResult,\n        didDrop: true,\n        targetIds: []\n      });\n\n    case dragDrop_1.END_DRAG:\n      return __assign({}, state, {\n        itemType: null,\n        item: null,\n        sourceId: null,\n        dropResult: null,\n        didDrop: false,\n        isSourcePublic: null,\n        targetIds: []\n      });\n\n    default:\n      return state;\n  }\n}\n\nexports.default = dragOperation;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/reducers/dragOperation.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/reducers/index.js":
/*!*********************************************!*\
  !*** ../dnd-core/lib/cjs/reducers/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __assign = this && this.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar dragOffset_1 = __webpack_require__(/*! ./dragOffset */ \"../dnd-core/lib/cjs/reducers/dragOffset.js\");\n\nvar dragOperation_1 = __webpack_require__(/*! ./dragOperation */ \"../dnd-core/lib/cjs/reducers/dragOperation.js\");\n\nvar refCount_1 = __webpack_require__(/*! ./refCount */ \"../dnd-core/lib/cjs/reducers/refCount.js\");\n\nvar dirtyHandlerIds_1 = __webpack_require__(/*! ./dirtyHandlerIds */ \"../dnd-core/lib/cjs/reducers/dirtyHandlerIds.js\");\n\nvar stateId_1 = __webpack_require__(/*! ./stateId */ \"../dnd-core/lib/cjs/reducers/stateId.js\");\n\nvar get = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n\nfunction reduce(state, action) {\n  if (state === void 0) {\n    state = {};\n  }\n\n  return {\n    dirtyHandlerIds: dirtyHandlerIds_1.default(state.dirtyHandlerIds, {\n      type: action.type,\n      payload: __assign({}, action.payload, {\n        prevTargetIds: get(state, 'dragOperation.targetIds', [])\n      })\n    }),\n    dragOffset: dragOffset_1.default(state.dragOffset, action),\n    refCount: refCount_1.default(state.refCount, action),\n    dragOperation: dragOperation_1.default(state.dragOperation, action),\n    stateId: stateId_1.default(state.stateId)\n  };\n}\n\nexports.default = reduce;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/reducers/index.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/reducers/refCount.js":
/*!************************************************!*\
  !*** ../dnd-core/lib/cjs/reducers/refCount.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar registry_1 = __webpack_require__(/*! ../actions/registry */ \"../dnd-core/lib/cjs/actions/registry.js\");\n\nfunction refCount(state, action) {\n  if (state === void 0) {\n    state = 0;\n  }\n\n  switch (action.type) {\n    case registry_1.ADD_SOURCE:\n    case registry_1.ADD_TARGET:\n      return state + 1;\n\n    case registry_1.REMOVE_SOURCE:\n    case registry_1.REMOVE_TARGET:\n      return state - 1;\n\n    default:\n      return state;\n  }\n}\n\nexports.default = refCount;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/reducers/refCount.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/reducers/stateId.js":
/*!***********************************************!*\
  !*** ../dnd-core/lib/cjs/reducers/stateId.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction stateId(state) {\n  if (state === void 0) {\n    state = 0;\n  }\n\n  return state + 1;\n}\n\nexports.default = stateId;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/reducers/stateId.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/utils/coords.js":
/*!*******************************************!*\
  !*** ../dnd-core/lib/cjs/utils/coords.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * Coordinate addition\n * @param a The first coordinate\n * @param b The second coordinate\n */\n\nfunction add(a, b) {\n  return {\n    x: a.x + b.x,\n    y: a.y + b.y\n  };\n}\n\nexports.add = add;\n/**\n * Coordinate subtraction\n * @param a The first coordinate\n * @param b The second coordinate\n */\n\nfunction subtract(a, b) {\n  return {\n    x: a.x - b.x,\n    y: a.y - b.y\n  };\n}\n\nexports.subtract = subtract;\n/**\n * Returns the cartesian distance of the drag source component's position, based on its position\n * at the time when the current drag operation has started, and the movement difference.\n *\n * Returns null if no item is being dragged.\n *\n * @param state The offset state to compute from\n */\n\nfunction getSourceClientOffset(state) {\n  var clientOffset = state.clientOffset,\n      initialClientOffset = state.initialClientOffset,\n      initialSourceClientOffset = state.initialSourceClientOffset;\n\n  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {\n    return null;\n  }\n\n  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);\n}\n\nexports.getSourceClientOffset = getSourceClientOffset;\n/**\n * Determines the x,y offset between the client offset and the initial client offset\n *\n * @param state The offset state to compute from\n */\n\nfunction getDifferenceFromInitialOffset(state) {\n  var clientOffset = state.clientOffset,\n      initialClientOffset = state.initialClientOffset;\n\n  if (!clientOffset || !initialClientOffset) {\n    return null;\n  }\n\n  return subtract(clientOffset, initialClientOffset);\n}\n\nexports.getDifferenceFromInitialOffset = getDifferenceFromInitialOffset;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/utils/coords.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/utils/dirtiness.js":
/*!**********************************************!*\
  !*** ../dnd-core/lib/cjs/utils/dirtiness.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar intersection = __webpack_require__(/*! lodash/intersection */ \"./node_modules/lodash/intersection.js\");\n\nexports.NONE = [];\nexports.ALL = [];\n/**\n * Determines if the given handler IDs are dirty or not.\n *\n * @param dirtyIds The set of dirty handler ids\n * @param handlerIds The set of handler ids to check\n */\n\nfunction areDirty(dirtyIds, handlerIds) {\n  if (dirtyIds === exports.NONE) {\n    return false;\n  }\n\n  if (dirtyIds === exports.ALL || typeof handlerIds === 'undefined') {\n    return true;\n  }\n\n  return intersection(handlerIds, dirtyIds).length > 0;\n}\n\nexports.areDirty = areDirty;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/utils/dirtiness.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/utils/equality.js":
/*!*********************************************!*\
  !*** ../dnd-core/lib/cjs/utils/equality.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.strictEquality = function (a, b) {\n  return a === b;\n};\n/**\n * Determine if two cartesian coordinate offsets are equal\n * @param offsetA\n * @param offsetB\n */\n\n\nfunction areCoordsEqual(offsetA, offsetB) {\n  if (!offsetA && !offsetB) {\n    return true;\n  } else if (!offsetA || !offsetB) {\n    return false;\n  } else {\n    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;\n  }\n}\n\nexports.areCoordsEqual = areCoordsEqual;\n/**\n * Determines if two arrays of items are equal\n * @param a The first array of items\n * @param b The second array of items\n */\n\nfunction areArraysEqual(a, b, isEqual) {\n  if (isEqual === void 0) {\n    isEqual = exports.strictEquality;\n  }\n\n  if (a.length !== b.length) {\n    return false;\n  }\n\n  for (var i = 0; i < a.length; ++i) {\n    if (!isEqual(a[i], b[i])) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nexports.areArraysEqual = areArraysEqual;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/utils/equality.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/utils/getNextUniqueId.js":
/*!****************************************************!*\
  !*** ../dnd-core/lib/cjs/utils/getNextUniqueId.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar nextUniqueId = 0;\n\nfunction getNextUniqueId() {\n  return nextUniqueId++;\n}\n\nexports.default = getNextUniqueId;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/utils/getNextUniqueId.js?");

/***/ }),

/***/ "../dnd-core/lib/cjs/utils/matchesType.js":
/*!************************************************!*\
  !*** ../dnd-core/lib/cjs/utils/matchesType.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction matchesType(targetType, draggedItemType) {\n  if (draggedItemType === null) {\n    return targetType === null;\n  }\n\n  return Array.isArray(targetType) ? targetType.some(function (t) {\n    return t === draggedItemType;\n  }) : targetType === draggedItemType;\n}\n\nexports.default = matchesType;\n\n//# sourceURL=webpack://ReactDnD/../dnd-core/lib/cjs/utils/matchesType.js?");

/***/ }),

/***/ "./node_modules/asap/browser-asap.js":
/*!*******************************************!*\
  !*** ./node_modules/asap/browser-asap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// rawAsap provides everything we need except exception management.\nvar rawAsap = __webpack_require__(/*! ./raw */ \"./node_modules/asap/browser-raw.js\");\n// RawTasks are recycled to reduce GC churn.\nvar freeTasks = [];\n// We queue errors to ensure they are thrown in right order (FIFO).\n// Array-as-queue is good enough here, since we are just dealing with exceptions.\nvar pendingErrors = [];\nvar requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);\n\nfunction throwFirstError() {\n    if (pendingErrors.length) {\n        throw pendingErrors.shift();\n    }\n}\n\n/**\n * Calls a task as soon as possible after returning, in its own event, with priority\n * over other events like animation, reflow, and repaint. An error thrown from an\n * event will not interrupt, nor even substantially slow down the processing of\n * other events, but will be rather postponed to a lower priority event.\n * @param {{call}} task A callable object, typically a function that takes no\n * arguments.\n */\nmodule.exports = asap;\nfunction asap(task) {\n    var rawTask;\n    if (freeTasks.length) {\n        rawTask = freeTasks.pop();\n    } else {\n        rawTask = new RawTask();\n    }\n    rawTask.task = task;\n    rawAsap(rawTask);\n}\n\n// We wrap tasks with recyclable task objects.  A task object implements\n// `call`, just like a function.\nfunction RawTask() {\n    this.task = null;\n}\n\n// The sole purpose of wrapping the task is to catch the exception and recycle\n// the task object after its single use.\nRawTask.prototype.call = function () {\n    try {\n        this.task.call();\n    } catch (error) {\n        if (asap.onerror) {\n            // This hook exists purely for testing purposes.\n            // Its name will be periodically randomized to break any code that\n            // depends on its existence.\n            asap.onerror(error);\n        } else {\n            // In a web browser, exceptions are not fatal. However, to avoid\n            // slowing down the queue of pending tasks, we rethrow the error in a\n            // lower priority turn.\n            pendingErrors.push(error);\n            requestErrorThrow();\n        }\n    } finally {\n        this.task = null;\n        freeTasks[freeTasks.length] = this;\n    }\n};\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/asap/browser-asap.js?");

/***/ }),

/***/ "./node_modules/asap/browser-raw.js":
/*!******************************************!*\
  !*** ./node_modules/asap/browser-raw.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\n// Use the fastest means possible to execute a task in its own turn, with\n// priority over other events including IO, animation, reflow, and redraw\n// events in browsers.\n//\n// An exception thrown by a task will permanently interrupt the processing of\n// subsequent tasks. The higher level `asap` function ensures that if an\n// exception is thrown by a task, that the task queue will continue flushing as\n// soon as possible, but if you use `rawAsap` directly, you are responsible to\n// either ensure that no exceptions are thrown from your task, or to manually\n// call `rawAsap.requestFlush` if an exception is thrown.\nmodule.exports = rawAsap;\nfunction rawAsap(task) {\n    if (!queue.length) {\n        requestFlush();\n        flushing = true;\n    }\n    // Equivalent to push, but avoids a function call.\n    queue[queue.length] = task;\n}\n\nvar queue = [];\n// Once a flush has been requested, no further calls to `requestFlush` are\n// necessary until the next `flush` completes.\nvar flushing = false;\n// `requestFlush` is an implementation-specific method that attempts to kick\n// off a `flush` event as quickly as possible. `flush` will attempt to exhaust\n// the event queue before yielding to the browser's own event loop.\nvar requestFlush;\n// The position of the next task to execute in the task queue. This is\n// preserved between calls to `flush` so that it can be resumed if\n// a task throws an exception.\nvar index = 0;\n// If a task schedules additional tasks recursively, the task queue can grow\n// unbounded. To prevent memory exhaustion, the task queue will periodically\n// truncate already-completed tasks.\nvar capacity = 1024;\n\n// The flush function processes all tasks that have been scheduled with\n// `rawAsap` unless and until one of those tasks throws an exception.\n// If a task throws an exception, `flush` ensures that its state will remain\n// consistent and will resume where it left off when called again.\n// However, `flush` does not make any arrangements to be called again if an\n// exception is thrown.\nfunction flush() {\n    while (index < queue.length) {\n        var currentIndex = index;\n        // Advance the index before calling the task. This ensures that we will\n        // begin flushing on the next task the task throws an error.\n        index = index + 1;\n        queue[currentIndex].call();\n        // Prevent leaking memory for long chains of recursive calls to `asap`.\n        // If we call `asap` within tasks scheduled by `asap`, the queue will\n        // grow, but to avoid an O(n) walk for every task we execute, we don't\n        // shift tasks off the queue after they have been executed.\n        // Instead, we periodically shift 1024 tasks off the queue.\n        if (index > capacity) {\n            // Manually shift all values starting at the index back to the\n            // beginning of the queue.\n            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {\n                queue[scan] = queue[scan + index];\n            }\n            queue.length -= index;\n            index = 0;\n        }\n    }\n    queue.length = 0;\n    index = 0;\n    flushing = false;\n}\n\n// `requestFlush` is implemented using a strategy based on data collected from\n// every available SauceLabs Selenium web driver worker at time of writing.\n// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593\n\n// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that\n// have WebKitMutationObserver but not un-prefixed MutationObserver.\n// Must use `global` or `self` instead of `window` to work in both frames and web\n// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.\n\n/* globals self */\nvar scope = typeof global !== \"undefined\" ? global : self;\nvar BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;\n\n// MutationObservers are desirable because they have high priority and work\n// reliably everywhere they are implemented.\n// They are implemented in all modern browsers.\n//\n// - Android 4-4.3\n// - Chrome 26-34\n// - Firefox 14-29\n// - Internet Explorer 11\n// - iPad Safari 6-7.1\n// - iPhone Safari 7-7.1\n// - Safari 6-7\nif (typeof BrowserMutationObserver === \"function\") {\n    requestFlush = makeRequestCallFromMutationObserver(flush);\n\n// MessageChannels are desirable because they give direct access to the HTML\n// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera\n// 11-12, and in web workers in many engines.\n// Although message channels yield to any queued rendering and IO tasks, they\n// would be better than imposing the 4ms delay of timers.\n// However, they do not work reliably in Internet Explorer or Safari.\n\n// Internet Explorer 10 is the only browser that has setImmediate but does\n// not have MutationObservers.\n// Although setImmediate yields to the browser's renderer, it would be\n// preferrable to falling back to setTimeout since it does not have\n// the minimum 4ms penalty.\n// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and\n// Desktop to a lesser extent) that renders both setImmediate and\n// MessageChannel useless for the purposes of ASAP.\n// https://github.com/kriskowal/q/issues/396\n\n// Timers are implemented universally.\n// We fall back to timers in workers in most engines, and in foreground\n// contexts in the following browsers.\n// However, note that even this simple case requires nuances to operate in a\n// broad spectrum of browsers.\n//\n// - Firefox 3-13\n// - Internet Explorer 6-9\n// - iPad Safari 4.3\n// - Lynx 2.8.7\n} else {\n    requestFlush = makeRequestCallFromTimer(flush);\n}\n\n// `requestFlush` requests that the high priority event queue be flushed as\n// soon as possible.\n// This is useful to prevent an error thrown in a task from stalling the event\n// queue if the exception handled by Node.js’s\n// `process.on(\"uncaughtException\")` or by a domain.\nrawAsap.requestFlush = requestFlush;\n\n// To request a high priority event, we induce a mutation observer by toggling\n// the text of a text node between \"1\" and \"-1\".\nfunction makeRequestCallFromMutationObserver(callback) {\n    var toggle = 1;\n    var observer = new BrowserMutationObserver(callback);\n    var node = document.createTextNode(\"\");\n    observer.observe(node, {characterData: true});\n    return function requestCall() {\n        toggle = -toggle;\n        node.data = toggle;\n    };\n}\n\n// The message channel technique was discovered by Malte Ubl and was the\n// original foundation for this library.\n// http://www.nonblocking.io/2011/06/windownexttick.html\n\n// Safari 6.0.5 (at least) intermittently fails to create message ports on a\n// page's first load. Thankfully, this version of Safari supports\n// MutationObservers, so we don't need to fall back in that case.\n\n// function makeRequestCallFromMessageChannel(callback) {\n//     var channel = new MessageChannel();\n//     channel.port1.onmessage = callback;\n//     return function requestCall() {\n//         channel.port2.postMessage(0);\n//     };\n// }\n\n// For reasons explained above, we are also unable to use `setImmediate`\n// under any circumstances.\n// Even if we were, there is another bug in Internet Explorer 10.\n// It is not sufficient to assign `setImmediate` to `requestFlush` because\n// `setImmediate` must be called *by name* and therefore must be wrapped in a\n// closure.\n// Never forget.\n\n// function makeRequestCallFromSetImmediate(callback) {\n//     return function requestCall() {\n//         setImmediate(callback);\n//     };\n// }\n\n// Safari 6.0 has a problem where timers will get lost while the user is\n// scrolling. This problem does not impact ASAP because Safari 6.0 supports\n// mutation observers, so that implementation is used instead.\n// However, if we ever elect to use timers in Safari, the prevalent work-around\n// is to add a scroll event listener that calls for a flush.\n\n// `setTimeout` does not call the passed callback if the delay is less than\n// approximately 7 in web workers in Firefox 8 through 18, and sometimes not\n// even then.\n\nfunction makeRequestCallFromTimer(callback) {\n    return function requestCall() {\n        // We dispatch a timeout with a specified delay of 0 for engines that\n        // can reliably accommodate that request. This will usually be snapped\n        // to a 4 milisecond delay, but once we're flushing, there's no delay\n        // between events.\n        var timeoutHandle = setTimeout(handleTimer, 0);\n        // However, since this timer gets frequently dropped in Firefox\n        // workers, we enlist an interval handle that will try to fire\n        // an event 20 times per second until it succeeds.\n        var intervalHandle = setInterval(handleTimer, 50);\n\n        function handleTimer() {\n            // Whichever timer succeeds will cancel both timers and\n            // execute the callback.\n            clearTimeout(timeoutHandle);\n            clearInterval(intervalHandle);\n            callback();\n        }\n    };\n}\n\n// This is for `asap.js` only.\n// Its name will be periodically randomized to break any code that depends on\n// its existence.\nrawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;\n\n// ASAP was originally a nextTick shim included in Q. This was factored out\n// into this ASAP package. It was later adapted to RSVP which made further\n// amendments. These decisions, particularly to marginalize MessageChannel and\n// to capture the MutationObserver implementation in a closure, were integrated\n// back into ASAP proper.\n// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://ReactDnD/./node_modules/asap/browser-raw.js?");

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Copyright 2015, Yahoo! Inc.\n * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.\n */\nvar ReactIs = __webpack_require__(/*! react-is */ \"./node_modules/react-is/index.js\");\nvar REACT_STATICS = {\n    childContextTypes: true,\n    contextType: true,\n    contextTypes: true,\n    defaultProps: true,\n    displayName: true,\n    getDefaultProps: true,\n    getDerivedStateFromError: true,\n    getDerivedStateFromProps: true,\n    mixins: true,\n    propTypes: true,\n    type: true\n};\n\nvar KNOWN_STATICS = {\n    name: true,\n    length: true,\n    prototype: true,\n    caller: true,\n    callee: true,\n    arguments: true,\n    arity: true\n};\n\nvar FORWARD_REF_STATICS = {\n    '$$typeof': true,\n    render: true,\n    defaultProps: true,\n    displayName: true,\n    propTypes: true\n};\n\nvar MEMO_STATICS = {\n    '$$typeof': true,\n    compare: true,\n    defaultProps: true,\n    displayName: true,\n    propTypes: true,\n    type: true\n};\n\nvar TYPE_STATICS = {};\nTYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;\n\nfunction getStatics(component) {\n    if (ReactIs.isMemo(component)) {\n        return MEMO_STATICS;\n    }\n    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;\n}\n\nvar defineProperty = Object.defineProperty;\nvar getOwnPropertyNames = Object.getOwnPropertyNames;\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\nvar getPrototypeOf = Object.getPrototypeOf;\nvar objectPrototype = Object.prototype;\n\nfunction hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {\n    if (typeof sourceComponent !== 'string') {\n        // don't hoist over string (html) components\n\n        if (objectPrototype) {\n            var inheritedComponent = getPrototypeOf(sourceComponent);\n            if (inheritedComponent && inheritedComponent !== objectPrototype) {\n                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);\n            }\n        }\n\n        var keys = getOwnPropertyNames(sourceComponent);\n\n        if (getOwnPropertySymbols) {\n            keys = keys.concat(getOwnPropertySymbols(sourceComponent));\n        }\n\n        var targetStatics = getStatics(targetComponent);\n        var sourceStatics = getStatics(sourceComponent);\n\n        for (var i = 0; i < keys.length; ++i) {\n            var key = keys[i];\n            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {\n                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);\n                try {\n                    // Avoid failures from read-only properties\n                    defineProperty(targetComponent, key, descriptor);\n                } catch (e) {}\n            }\n        }\n\n        return targetComponent;\n    }\n\n    return targetComponent;\n}\n\nmodule.exports = hoistNonReactStatics;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js?");

/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar invariant = function(condition, format, a, b, c, d, e, f) {\n  if (false) {}\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error(\n        'Minified exception occurred; use the non-minified dev environment ' +\n        'for the full error message and additional helpful warnings.'\n      );\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(\n        format.replace(/%s/g, function() { return args[argIndex++]; })\n      );\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n};\n\nmodule.exports = invariant;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/invariant/browser.js?");

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hashClear = __webpack_require__(/*! ./_hashClear */ \"./node_modules/lodash/_hashClear.js\"),\n    hashDelete = __webpack_require__(/*! ./_hashDelete */ \"./node_modules/lodash/_hashDelete.js\"),\n    hashGet = __webpack_require__(/*! ./_hashGet */ \"./node_modules/lodash/_hashGet.js\"),\n    hashHas = __webpack_require__(/*! ./_hashHas */ \"./node_modules/lodash/_hashHas.js\"),\n    hashSet = __webpack_require__(/*! ./_hashSet */ \"./node_modules/lodash/_hashSet.js\");\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\nmodule.exports = Hash;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_Hash.js?");

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ \"./node_modules/lodash/_listCacheClear.js\"),\n    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ \"./node_modules/lodash/_listCacheDelete.js\"),\n    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ \"./node_modules/lodash/_listCacheGet.js\"),\n    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ \"./node_modules/lodash/_listCacheHas.js\"),\n    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ \"./node_modules/lodash/_listCacheSet.js\");\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\nmodule.exports = ListCache;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_ListCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Map = getNative(root, 'Map');\n\nmodule.exports = Map;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_Map.js?");

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ \"./node_modules/lodash/_mapCacheClear.js\"),\n    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ \"./node_modules/lodash/_mapCacheDelete.js\"),\n    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ \"./node_modules/lodash/_mapCacheGet.js\"),\n    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ \"./node_modules/lodash/_mapCacheHas.js\"),\n    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ \"./node_modules/lodash/_mapCacheSet.js\");\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\nmodule.exports = MapCache;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_MapCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Set = getNative(root, 'Set');\n\nmodule.exports = Set;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_Set.js?");

/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\"),\n    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ \"./node_modules/lodash/_setCacheAdd.js\"),\n    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ \"./node_modules/lodash/_setCacheHas.js\");\n\n/**\n *\n * Creates an array cache object to store unique values.\n *\n * @private\n * @constructor\n * @param {Array} [values] The values to cache.\n */\nfunction SetCache(values) {\n  var index = -1,\n      length = values == null ? 0 : values.length;\n\n  this.__data__ = new MapCache;\n  while (++index < length) {\n    this.add(values[index]);\n  }\n}\n\n// Add methods to `SetCache`.\nSetCache.prototype.add = SetCache.prototype.push = setCacheAdd;\nSetCache.prototype.has = setCacheHas;\n\nmodule.exports = SetCache;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_SetCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A faster alternative to `Function#apply`, this function invokes `func`\n * with the `this` binding of `thisArg` and the arguments of `args`.\n *\n * @private\n * @param {Function} func The function to invoke.\n * @param {*} thisArg The `this` binding of `func`.\n * @param {Array} args The arguments to invoke `func` with.\n * @returns {*} Returns the result of `func`.\n */\nfunction apply(func, thisArg, args) {\n  switch (args.length) {\n    case 0: return func.call(thisArg);\n    case 1: return func.call(thisArg, args[0]);\n    case 2: return func.call(thisArg, args[0], args[1]);\n    case 3: return func.call(thisArg, args[0], args[1], args[2]);\n  }\n  return func.apply(thisArg, args);\n}\n\nmodule.exports = apply;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_apply.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.filter` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {Array} Returns the new filtered array.\n */\nfunction arrayFilter(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      resIndex = 0,\n      result = [];\n\n  while (++index < length) {\n    var value = array[index];\n    if (predicate(value, index, array)) {\n      result[resIndex++] = value;\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayFilter;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_arrayFilter.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ \"./node_modules/lodash/_baseIndexOf.js\");\n\n/**\n * A specialized version of `_.includes` for arrays without support for\n * specifying an index to search from.\n *\n * @private\n * @param {Array} [array] The array to inspect.\n * @param {*} target The value to search for.\n * @returns {boolean} Returns `true` if `target` is found, else `false`.\n */\nfunction arrayIncludes(array, value) {\n  var length = array == null ? 0 : array.length;\n  return !!length && baseIndexOf(array, value, 0) > -1;\n}\n\nmodule.exports = arrayIncludes;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_arrayIncludes.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This function is like `arrayIncludes` except that it accepts a comparator.\n *\n * @private\n * @param {Array} [array] The array to inspect.\n * @param {*} target The value to search for.\n * @param {Function} comparator The comparator invoked per element.\n * @returns {boolean} Returns `true` if `target` is found, else `false`.\n */\nfunction arrayIncludesWith(array, value, comparator) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (comparator(value, array[index])) {\n      return true;\n    }\n  }\n  return false;\n}\n\nmodule.exports = arrayIncludesWith;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_arrayIncludesWith.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Appends the elements of `values` to `array`.\n *\n * @private\n * @param {Array} array The array to modify.\n * @param {Array} values The values to append.\n * @returns {Array} Returns `array`.\n */\nfunction arrayPush(array, values) {\n  var index = -1,\n      length = values.length,\n      offset = array.length;\n\n  while (++index < length) {\n    array[offset + index] = values[index];\n  }\n  return array;\n}\n\nmodule.exports = arrayPush;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_arrayPush.js?");

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = assocIndexOf;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_assocIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseDifference.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseDifference.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var SetCache = __webpack_require__(/*! ./_SetCache */ \"./node_modules/lodash/_SetCache.js\"),\n    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ \"./node_modules/lodash/_arrayIncludes.js\"),\n    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ \"./node_modules/lodash/_arrayIncludesWith.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    cacheHas = __webpack_require__(/*! ./_cacheHas */ \"./node_modules/lodash/_cacheHas.js\");\n\n/** Used as the size to enable large array optimizations. */\nvar LARGE_ARRAY_SIZE = 200;\n\n/**\n * The base implementation of methods like `_.difference` without support\n * for excluding multiple arrays or iteratee shorthands.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {Array} values The values to exclude.\n * @param {Function} [iteratee] The iteratee invoked per element.\n * @param {Function} [comparator] The comparator invoked per element.\n * @returns {Array} Returns the new array of filtered values.\n */\nfunction baseDifference(array, values, iteratee, comparator) {\n  var index = -1,\n      includes = arrayIncludes,\n      isCommon = true,\n      length = array.length,\n      result = [],\n      valuesLength = values.length;\n\n  if (!length) {\n    return result;\n  }\n  if (iteratee) {\n    values = arrayMap(values, baseUnary(iteratee));\n  }\n  if (comparator) {\n    includes = arrayIncludesWith;\n    isCommon = false;\n  }\n  else if (values.length >= LARGE_ARRAY_SIZE) {\n    includes = cacheHas;\n    isCommon = false;\n    values = new SetCache(values);\n  }\n  outer:\n  while (++index < length) {\n    var value = array[index],\n        computed = iteratee == null ? value : iteratee(value);\n\n    value = (comparator || value !== 0) ? value : 0;\n    if (isCommon && computed === computed) {\n      var valuesIndex = valuesLength;\n      while (valuesIndex--) {\n        if (values[valuesIndex] === computed) {\n          continue outer;\n        }\n      }\n      result.push(value);\n    }\n    else if (!includes(values, computed, comparator)) {\n      result.push(value);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseDifference;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_baseDifference.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.findIndex` and `_.findLastIndex` without\n * support for iteratee shorthands.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {Function} predicate The function invoked per iteration.\n * @param {number} fromIndex The index to search from.\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction baseFindIndex(array, predicate, fromIndex, fromRight) {\n  var length = array.length,\n      index = fromIndex + (fromRight ? 1 : -1);\n\n  while ((fromRight ? index-- : ++index < length)) {\n    if (predicate(array[index], index, array)) {\n      return index;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = baseFindIndex;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_baseFindIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayPush = __webpack_require__(/*! ./_arrayPush */ \"./node_modules/lodash/_arrayPush.js\"),\n    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ \"./node_modules/lodash/_isFlattenable.js\");\n\n/**\n * The base implementation of `_.flatten` with support for restricting flattening.\n *\n * @private\n * @param {Array} array The array to flatten.\n * @param {number} depth The maximum recursion depth.\n * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.\n * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.\n * @param {Array} [result=[]] The initial result value.\n * @returns {Array} Returns the new flattened array.\n */\nfunction baseFlatten(array, depth, predicate, isStrict, result) {\n  var index = -1,\n      length = array.length;\n\n  predicate || (predicate = isFlattenable);\n  result || (result = []);\n\n  while (++index < length) {\n    var value = array[index];\n    if (depth > 0 && predicate(value)) {\n      if (depth > 1) {\n        // Recursively flatten arrays (susceptible to call stack limits).\n        baseFlatten(value, depth - 1, predicate, isStrict, result);\n      } else {\n        arrayPush(result, value);\n      }\n    } else if (!isStrict) {\n      result[result.length] = value;\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseFlatten;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_baseFlatten.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * The base implementation of `_.get` without support for default values.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @returns {*} Returns the resolved value.\n */\nfunction baseGet(object, path) {\n  path = castPath(path, object);\n\n  var index = 0,\n      length = path.length;\n\n  while (object != null && index < length) {\n    object = object[toKey(path[index++])];\n  }\n  return (index && index == length) ? object : undefined;\n}\n\nmodule.exports = baseGet;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_baseGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ \"./node_modules/lodash/_baseFindIndex.js\"),\n    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ \"./node_modules/lodash/_baseIsNaN.js\"),\n    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ \"./node_modules/lodash/_strictIndexOf.js\");\n\n/**\n * The base implementation of `_.indexOf` without `fromIndex` bounds checks.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} value The value to search for.\n * @param {number} fromIndex The index to search from.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction baseIndexOf(array, value, fromIndex) {\n  return value === value\n    ? strictIndexOf(array, value, fromIndex)\n    : baseFindIndex(array, baseIsNaN, fromIndex);\n}\n\nmodule.exports = baseIndexOf;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_baseIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIntersection.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIntersection.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var SetCache = __webpack_require__(/*! ./_SetCache */ \"./node_modules/lodash/_SetCache.js\"),\n    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ \"./node_modules/lodash/_arrayIncludes.js\"),\n    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ \"./node_modules/lodash/_arrayIncludesWith.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    cacheHas = __webpack_require__(/*! ./_cacheHas */ \"./node_modules/lodash/_cacheHas.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMin = Math.min;\n\n/**\n * The base implementation of methods like `_.intersection`, without support\n * for iteratee shorthands, that accepts an array of arrays to inspect.\n *\n * @private\n * @param {Array} arrays The arrays to inspect.\n * @param {Function} [iteratee] The iteratee invoked per element.\n * @param {Function} [comparator] The comparator invoked per element.\n * @returns {Array} Returns the new array of shared values.\n */\nfunction baseIntersection(arrays, iteratee, comparator) {\n  var includes = comparator ? arrayIncludesWith : arrayIncludes,\n      length = arrays[0].length,\n      othLength = arrays.length,\n      othIndex = othLength,\n      caches = Array(othLength),\n      maxLength = Infinity,\n      result = [];\n\n  while (othIndex--) {\n    var array = arrays[othIndex];\n    if (othIndex && iteratee) {\n      array = arrayMap(array, baseUnary(iteratee));\n    }\n    maxLength = nativeMin(array.length, maxLength);\n    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))\n      ? new SetCache(othIndex && array)\n      : undefined;\n  }\n  array = arrays[0];\n\n  var index = -1,\n      seen = caches[0];\n\n  outer:\n  while (++index < length && result.length < maxLength) {\n    var value = array[index],\n        computed = iteratee ? iteratee(value) : value;\n\n    value = (comparator || value !== 0) ? value : 0;\n    if (!(seen\n          ? cacheHas(seen, computed)\n          : includes(result, computed, comparator)\n        )) {\n      othIndex = othLength;\n      while (--othIndex) {\n        var cache = caches[othIndex];\n        if (!(cache\n              ? cacheHas(cache, computed)\n              : includes(arrays[othIndex], computed, comparator))\n            ) {\n          continue outer;\n        }\n      }\n      if (seen) {\n        seen.push(computed);\n      }\n      result.push(value);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseIntersection;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_baseIntersection.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]';\n\n/**\n * The base implementation of `_.isArguments`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n */\nfunction baseIsArguments(value) {\n  return isObjectLike(value) && baseGetTag(value) == argsTag;\n}\n\nmodule.exports = baseIsArguments;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_baseIsArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.isNaN` without support for number objects.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.\n */\nfunction baseIsNaN(value) {\n  return value !== value;\n}\n\nmodule.exports = baseIsNaN;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_baseIsNaN.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isMasked = __webpack_require__(/*! ./_isMasked */ \"./node_modules/lodash/_isMasked.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\nmodule.exports = baseIsNative;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_baseIsNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\"),\n    overRest = __webpack_require__(/*! ./_overRest */ \"./node_modules/lodash/_overRest.js\"),\n    setToString = __webpack_require__(/*! ./_setToString */ \"./node_modules/lodash/_setToString.js\");\n\n/**\n * The base implementation of `_.rest` which doesn't validate or coerce arguments.\n *\n * @private\n * @param {Function} func The function to apply a rest parameter to.\n * @param {number} [start=func.length-1] The start position of the rest parameter.\n * @returns {Function} Returns the new function.\n */\nfunction baseRest(func, start) {\n  return setToString(overRest(func, start, identity), func + '');\n}\n\nmodule.exports = baseRest;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_baseRest.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var constant = __webpack_require__(/*! ./constant */ \"./node_modules/lodash/constant.js\"),\n    defineProperty = __webpack_require__(/*! ./_defineProperty */ \"./node_modules/lodash/_defineProperty.js\"),\n    identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\");\n\n/**\n * The base implementation of `setToString` without support for hot loop shorting.\n *\n * @private\n * @param {Function} func The function to modify.\n * @param {Function} string The `toString` result.\n * @returns {Function} Returns `func`.\n */\nvar baseSetToString = !defineProperty ? identity : function(func, string) {\n  return defineProperty(func, 'toString', {\n    'configurable': true,\n    'enumerable': false,\n    'value': constant(string),\n    'writable': true\n  });\n};\n\nmodule.exports = baseSetToString;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_baseSetToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n  if (isArray(value)) {\n    // Recursively convert values (susceptible to call stack limits).\n    return arrayMap(value, baseToString) + '';\n  }\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = baseToString;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_baseToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.unary` without support for storing metadata.\n *\n * @private\n * @param {Function} func The function to cap arguments for.\n * @returns {Function} Returns the new capped function.\n */\nfunction baseUnary(func) {\n  return function(value) {\n    return func(value);\n  };\n}\n\nmodule.exports = baseUnary;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_baseUnary.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseUniq.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseUniq.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var SetCache = __webpack_require__(/*! ./_SetCache */ \"./node_modules/lodash/_SetCache.js\"),\n    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ \"./node_modules/lodash/_arrayIncludes.js\"),\n    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ \"./node_modules/lodash/_arrayIncludesWith.js\"),\n    cacheHas = __webpack_require__(/*! ./_cacheHas */ \"./node_modules/lodash/_cacheHas.js\"),\n    createSet = __webpack_require__(/*! ./_createSet */ \"./node_modules/lodash/_createSet.js\"),\n    setToArray = __webpack_require__(/*! ./_setToArray */ \"./node_modules/lodash/_setToArray.js\");\n\n/** Used as the size to enable large array optimizations. */\nvar LARGE_ARRAY_SIZE = 200;\n\n/**\n * The base implementation of `_.uniqBy` without support for iteratee shorthands.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {Function} [iteratee] The iteratee invoked per element.\n * @param {Function} [comparator] The comparator invoked per element.\n * @returns {Array} Returns the new duplicate free array.\n */\nfunction baseUniq(array, iteratee, comparator) {\n  var index = -1,\n      includes = arrayIncludes,\n      length = array.length,\n      isCommon = true,\n      result = [],\n      seen = result;\n\n  if (comparator) {\n    isCommon = false;\n    includes = arrayIncludesWith;\n  }\n  else if (length >= LARGE_ARRAY_SIZE) {\n    var set = iteratee ? null : createSet(array);\n    if (set) {\n      return setToArray(set);\n    }\n    isCommon = false;\n    includes = cacheHas;\n    seen = new SetCache;\n  }\n  else {\n    seen = iteratee ? [] : result;\n  }\n  outer:\n  while (++index < length) {\n    var value = array[index],\n        computed = iteratee ? iteratee(value) : value;\n\n    value = (comparator || value !== 0) ? value : 0;\n    if (isCommon && computed === computed) {\n      var seenIndex = seen.length;\n      while (seenIndex--) {\n        if (seen[seenIndex] === computed) {\n          continue outer;\n        }\n      }\n      if (iteratee) {\n        seen.push(computed);\n      }\n      result.push(value);\n    }\n    else if (!includes(seen, computed, comparator)) {\n      if (seen !== result) {\n        seen.push(computed);\n      }\n      result.push(value);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseUniq;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_baseUniq.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseXor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseXor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseDifference = __webpack_require__(/*! ./_baseDifference */ \"./node_modules/lodash/_baseDifference.js\"),\n    baseFlatten = __webpack_require__(/*! ./_baseFlatten */ \"./node_modules/lodash/_baseFlatten.js\"),\n    baseUniq = __webpack_require__(/*! ./_baseUniq */ \"./node_modules/lodash/_baseUniq.js\");\n\n/**\n * The base implementation of methods like `_.xor`, without support for\n * iteratee shorthands, that accepts an array of arrays to inspect.\n *\n * @private\n * @param {Array} arrays The arrays to inspect.\n * @param {Function} [iteratee] The iteratee invoked per element.\n * @param {Function} [comparator] The comparator invoked per element.\n * @returns {Array} Returns the new array of values.\n */\nfunction baseXor(arrays, iteratee, comparator) {\n  var length = arrays.length;\n  if (length < 2) {\n    return length ? baseUniq(arrays[0]) : [];\n  }\n  var index = -1,\n      result = Array(length);\n\n  while (++index < length) {\n    var array = arrays[index],\n        othIndex = -1;\n\n    while (++othIndex < length) {\n      if (othIndex != index) {\n        result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);\n      }\n    }\n  }\n  return baseUniq(baseFlatten(result, 1), iteratee, comparator);\n}\n\nmodule.exports = baseXor;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_baseXor.js?");

/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if a `cache` value for `key` exists.\n *\n * @private\n * @param {Object} cache The cache to query.\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction cacheHas(cache, key) {\n  return cache.has(key);\n}\n\nmodule.exports = cacheHas;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_cacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_castArrayLikeObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_castArrayLikeObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ \"./node_modules/lodash/isArrayLikeObject.js\");\n\n/**\n * Casts `value` to an empty array if it's not an array like object.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {Array|Object} Returns the cast array-like object.\n */\nfunction castArrayLikeObject(value) {\n  return isArrayLikeObject(value) ? value : [];\n}\n\nmodule.exports = castArrayLikeObject;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_castArrayLikeObject.js?");

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    stringToPath = __webpack_require__(/*! ./_stringToPath */ \"./node_modules/lodash/_stringToPath.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Casts `value` to a path array if it's not one.\n *\n * @private\n * @param {*} value The value to inspect.\n * @param {Object} [object] The object to query keys on.\n * @returns {Array} Returns the cast property path array.\n */\nfunction castPath(value, object) {\n  if (isArray(value)) {\n    return value;\n  }\n  return isKey(value, object) ? [value] : stringToPath(toString(value));\n}\n\nmodule.exports = castPath;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_castPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\nmodule.exports = coreJsData;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_coreJsData.js?");

/***/ }),

/***/ "./node_modules/lodash/_createSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_createSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Set = __webpack_require__(/*! ./_Set */ \"./node_modules/lodash/_Set.js\"),\n    noop = __webpack_require__(/*! ./noop */ \"./node_modules/lodash/noop.js\"),\n    setToArray = __webpack_require__(/*! ./_setToArray */ \"./node_modules/lodash/_setToArray.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/**\n * Creates a set object of `values`.\n *\n * @private\n * @param {Array} values The values to add to the set.\n * @returns {Object} Returns the new set.\n */\nvar createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {\n  return new Set(values);\n};\n\nmodule.exports = createSet;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_createSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\nvar defineProperty = (function() {\n  try {\n    var func = getNative(Object, 'defineProperty');\n    func({}, '', {});\n    return func;\n  } catch (e) {}\n}());\n\nmodule.exports = defineProperty;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_defineProperty.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isKeyable = __webpack_require__(/*! ./_isKeyable */ \"./node_modules/lodash/_isKeyable.js\");\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\nmodule.exports = getMapData;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_getMapData.js?");

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ \"./node_modules/lodash/_baseIsNative.js\"),\n    getValue = __webpack_require__(/*! ./_getValue */ \"./node_modules/lodash/_getValue.js\");\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\nmodule.exports = getNative;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_getNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/** Built-in value references. */\nvar getPrototype = overArg(Object.getPrototypeOf, Object);\n\nmodule.exports = getPrototype;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_getPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\nmodule.exports = getValue;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_getValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n  this.size = 0;\n}\n\nmodule.exports = hashClear;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_hashClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  var result = this.has(key) && delete this.__data__[key];\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = hashDelete;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_hashDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\nmodule.exports = hashGet;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_hashGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);\n}\n\nmodule.exports = hashHas;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_hashHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  this.size += this.has(key) ? 0 : 1;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\nmodule.exports = hashSet;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_hashSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/** Built-in value references. */\nvar spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;\n\n/**\n * Checks if `value` is a flattenable `arguments` object or array.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.\n */\nfunction isFlattenable(value) {\n  return isArray(value) || isArguments(value) ||\n    !!(spreadableSymbol && value && value[spreadableSymbol]);\n}\n\nmodule.exports = isFlattenable;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_isFlattenable.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used to match property names within property paths. */\nvar reIsDeepProp = /\\.|\\[(?:[^[\\]]*|([\"'])(?:(?!\\1)[^\\\\]|\\\\.)*?\\1)\\]/,\n    reIsPlainProp = /^\\w*$/;\n\n/**\n * Checks if `value` is a property name and not a property path.\n *\n * @private\n * @param {*} value The value to check.\n * @param {Object} [object] The object to query keys on.\n * @returns {boolean} Returns `true` if `value` is a property name, else `false`.\n */\nfunction isKey(value, object) {\n  if (isArray(value)) {\n    return false;\n  }\n  var type = typeof value;\n  if (type == 'number' || type == 'symbol' || type == 'boolean' ||\n      value == null || isSymbol(value)) {\n    return true;\n  }\n  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||\n    (object != null && value in Object(object));\n}\n\nmodule.exports = isKey;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_isKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\nmodule.exports = isKeyable;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_isKeyable.js?");

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var coreJsData = __webpack_require__(/*! ./_coreJsData */ \"./node_modules/lodash/_coreJsData.js\");\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\nmodule.exports = isMasked;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_isMasked.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n  this.size = 0;\n}\n\nmodule.exports = listCacheClear;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_listCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype;\n\n/** Built-in value references. */\nvar splice = arrayProto.splice;\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  --this.size;\n  return true;\n}\n\nmodule.exports = listCacheDelete;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_listCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\nmodule.exports = listCacheGet;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_listCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\nmodule.exports = listCacheHas;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_listCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    ++this.size;\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\nmodule.exports = listCacheSet;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_listCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Hash = __webpack_require__(/*! ./_Hash */ \"./node_modules/lodash/_Hash.js\"),\n    ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\");\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.size = 0;\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\nmodule.exports = mapCacheClear;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_mapCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  var result = getMapData(this, key)['delete'](key);\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = mapCacheDelete;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_mapCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\nmodule.exports = mapCacheGet;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_mapCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\nmodule.exports = mapCacheHas;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_mapCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  var data = getMapData(this, key),\n      size = data.size;\n\n  data.set(key, value);\n  this.size += data.size == size ? 0 : 1;\n  return this;\n}\n\nmodule.exports = mapCacheSet;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_mapCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var memoize = __webpack_require__(/*! ./memoize */ \"./node_modules/lodash/memoize.js\");\n\n/** Used as the maximum memoize cache size. */\nvar MAX_MEMOIZE_SIZE = 500;\n\n/**\n * A specialized version of `_.memoize` which clears the memoized function's\n * cache when it exceeds `MAX_MEMOIZE_SIZE`.\n *\n * @private\n * @param {Function} func The function to have its output memoized.\n * @returns {Function} Returns the new memoized function.\n */\nfunction memoizeCapped(func) {\n  var result = memoize(func, function(key) {\n    if (cache.size === MAX_MEMOIZE_SIZE) {\n      cache.clear();\n    }\n    return key;\n  });\n\n  var cache = result.cache;\n  return result;\n}\n\nmodule.exports = memoizeCapped;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_memoizeCapped.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\n/* Built-in method references that are verified to be native. */\nvar nativeCreate = getNative(Object, 'create');\n\nmodule.exports = nativeCreate;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_nativeCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\nmodule.exports = overArg;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_overArg.js?");

/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var apply = __webpack_require__(/*! ./_apply */ \"./node_modules/lodash/_apply.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max;\n\n/**\n * A specialized version of `baseRest` which transforms the rest array.\n *\n * @private\n * @param {Function} func The function to apply a rest parameter to.\n * @param {number} [start=func.length-1] The start position of the rest parameter.\n * @param {Function} transform The rest array transform.\n * @returns {Function} Returns the new function.\n */\nfunction overRest(func, start, transform) {\n  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);\n  return function() {\n    var args = arguments,\n        index = -1,\n        length = nativeMax(args.length - start, 0),\n        array = Array(length);\n\n    while (++index < length) {\n      array[index] = args[start + index];\n    }\n    index = -1;\n    var otherArgs = Array(start + 1);\n    while (++index < start) {\n      otherArgs[index] = args[index];\n    }\n    otherArgs[start] = transform(array);\n    return apply(func, this, otherArgs);\n  };\n}\n\nmodule.exports = overRest;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_overRest.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Adds `value` to the array cache.\n *\n * @private\n * @name add\n * @memberOf SetCache\n * @alias push\n * @param {*} value The value to cache.\n * @returns {Object} Returns the cache instance.\n */\nfunction setCacheAdd(value) {\n  this.__data__.set(value, HASH_UNDEFINED);\n  return this;\n}\n\nmodule.exports = setCacheAdd;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_setCacheAdd.js?");

/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is in the array cache.\n *\n * @private\n * @name has\n * @memberOf SetCache\n * @param {*} value The value to search for.\n * @returns {number} Returns `true` if `value` is found, else `false`.\n */\nfunction setCacheHas(value) {\n  return this.__data__.has(value);\n}\n\nmodule.exports = setCacheHas;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_setCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Converts `set` to an array of its values.\n *\n * @private\n * @param {Object} set The set to convert.\n * @returns {Array} Returns the values.\n */\nfunction setToArray(set) {\n  var index = -1,\n      result = Array(set.size);\n\n  set.forEach(function(value) {\n    result[++index] = value;\n  });\n  return result;\n}\n\nmodule.exports = setToArray;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_setToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ \"./node_modules/lodash/_baseSetToString.js\"),\n    shortOut = __webpack_require__(/*! ./_shortOut */ \"./node_modules/lodash/_shortOut.js\");\n\n/**\n * Sets the `toString` method of `func` to return `string`.\n *\n * @private\n * @param {Function} func The function to modify.\n * @param {Function} string The `toString` result.\n * @returns {Function} Returns `func`.\n */\nvar setToString = shortOut(baseSetToString);\n\nmodule.exports = setToString;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_setToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used to detect hot functions by number of calls within a span of milliseconds. */\nvar HOT_COUNT = 800,\n    HOT_SPAN = 16;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeNow = Date.now;\n\n/**\n * Creates a function that'll short out and invoke `identity` instead\n * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`\n * milliseconds.\n *\n * @private\n * @param {Function} func The function to restrict.\n * @returns {Function} Returns the new shortable function.\n */\nfunction shortOut(func) {\n  var count = 0,\n      lastCalled = 0;\n\n  return function() {\n    var stamp = nativeNow(),\n        remaining = HOT_SPAN - (stamp - lastCalled);\n\n    lastCalled = stamp;\n    if (remaining > 0) {\n      if (++count >= HOT_COUNT) {\n        return arguments[0];\n      }\n    } else {\n      count = 0;\n    }\n    return func.apply(undefined, arguments);\n  };\n}\n\nmodule.exports = shortOut;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_shortOut.js?");

/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.indexOf` which performs strict equality\n * comparisons of values, i.e. `===`.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} value The value to search for.\n * @param {number} fromIndex The index to search from.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction strictIndexOf(array, value, fromIndex) {\n  var index = fromIndex - 1,\n      length = array.length;\n\n  while (++index < length) {\n    if (array[index] === value) {\n      return index;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = strictIndexOf;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_strictIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ \"./node_modules/lodash/_memoizeCapped.js\");\n\n/** Used to match property names within property paths. */\nvar rePropName = /[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))/g;\n\n/** Used to match backslashes in property paths. */\nvar reEscapeChar = /\\\\(\\\\)?/g;\n\n/**\n * Converts `string` to a property path array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the property path array.\n */\nvar stringToPath = memoizeCapped(function(string) {\n  var result = [];\n  if (string.charCodeAt(0) === 46 /* . */) {\n    result.push('');\n  }\n  string.replace(rePropName, function(match, number, quote, subString) {\n    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));\n  });\n  return result;\n});\n\nmodule.exports = stringToPath;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_stringToPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/**\n * Converts `value` to a string key if it's not a string or symbol.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {string|symbol} Returns the key.\n */\nfunction toKey(value) {\n  if (typeof value == 'string' || isSymbol(value)) {\n    return value;\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = toKey;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_toKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar funcProto = Function.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to convert.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\nmodule.exports = toSource;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/_toSource.js?");

/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates a function that returns `value`.\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Util\n * @param {*} value The value to return from the new function.\n * @returns {Function} Returns the new constant function.\n * @example\n *\n * var objects = _.times(2, _.constant({ 'a': 1 }));\n *\n * console.log(objects);\n * // => [{ 'a': 1 }, { 'a': 1 }]\n *\n * console.log(objects[0] === objects[1]);\n * // => true\n */\nfunction constant(value) {\n  return function() {\n    return value;\n  };\n}\n\nmodule.exports = constant;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/constant.js?");

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\nmodule.exports = eq;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/eq.js?");

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\");\n\n/**\n * Gets the value at `path` of `object`. If the resolved value is\n * `undefined`, the `defaultValue` is returned in its place.\n *\n * @static\n * @memberOf _\n * @since 3.7.0\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @param {*} [defaultValue] The value returned for `undefined` resolved values.\n * @returns {*} Returns the resolved value.\n * @example\n *\n * var object = { 'a': [{ 'b': { 'c': 3 } }] };\n *\n * _.get(object, 'a[0].b.c');\n * // => 3\n *\n * _.get(object, ['a', '0', 'b', 'c']);\n * // => 3\n *\n * _.get(object, 'a.b.c', 'default');\n * // => 'default'\n */\nfunction get(object, path, defaultValue) {\n  var result = object == null ? undefined : baseGet(object, path);\n  return result === undefined ? defaultValue : result;\n}\n\nmodule.exports = get;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/get.js?");

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/identity.js?");

/***/ }),

/***/ "./node_modules/lodash/intersection.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/intersection.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    baseIntersection = __webpack_require__(/*! ./_baseIntersection */ \"./node_modules/lodash/_baseIntersection.js\"),\n    baseRest = __webpack_require__(/*! ./_baseRest */ \"./node_modules/lodash/_baseRest.js\"),\n    castArrayLikeObject = __webpack_require__(/*! ./_castArrayLikeObject */ \"./node_modules/lodash/_castArrayLikeObject.js\");\n\n/**\n * Creates an array of unique values that are included in all given arrays\n * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * for equality comparisons. The order and references of result values are\n * determined by the first array.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Array\n * @param {...Array} [arrays] The arrays to inspect.\n * @returns {Array} Returns the new array of intersecting values.\n * @example\n *\n * _.intersection([2, 1], [2, 3]);\n * // => [2]\n */\nvar intersection = baseRest(function(arrays) {\n  var mapped = arrayMap(arrays, castArrayLikeObject);\n  return (mapped.length && mapped[0] === arrays[0])\n    ? baseIntersection(mapped)\n    : [];\n});\n\nmodule.exports = intersection;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/intersection.js?");

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ \"./node_modules/lodash/_baseIsArguments.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nvar isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {\n  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&\n    !propertyIsEnumerable.call(value, 'callee');\n};\n\nmodule.exports = isArguments;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/isArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\");\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\nmodule.exports = isArrayLike;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/isArrayLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/**\n * This method is like `_.isArrayLike` except that it also checks if `value`\n * is an object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array-like object,\n *  else `false`.\n * @example\n *\n * _.isArrayLikeObject([1, 2, 3]);\n * // => true\n *\n * _.isArrayLikeObject(document.body.children);\n * // => true\n *\n * _.isArrayLikeObject('abc');\n * // => false\n *\n * _.isArrayLikeObject(_.noop);\n * // => false\n */\nfunction isArrayLikeObject(value) {\n  return isObjectLike(value) && isArrayLike(value);\n}\n\nmodule.exports = isArrayLikeObject;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/isArrayLikeObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\nmodule.exports = isLength;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/isLength.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    getPrototype = __webpack_require__(/*! ./_getPrototype */ \"./node_modules/lodash/_getPrototype.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar objectTag = '[object Object]';\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to infer the `Object` constructor. */\nvar objectCtorString = funcToString.call(Object);\n\n/**\n * Checks if `value` is a plain object, that is, an object created by the\n * `Object` constructor or one with a `[[Prototype]]` of `null`.\n *\n * @static\n * @memberOf _\n * @since 0.8.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n * }\n *\n * _.isPlainObject(new Foo);\n * // => false\n *\n * _.isPlainObject([1, 2, 3]);\n * // => false\n *\n * _.isPlainObject({ 'x': 0, 'y': 0 });\n * // => true\n *\n * _.isPlainObject(Object.create(null));\n * // => true\n */\nfunction isPlainObject(value) {\n  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {\n    return false;\n  }\n  var proto = getPrototype(value);\n  if (proto === null) {\n    return true;\n  }\n  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;\n  return typeof Ctor == 'function' && Ctor instanceof Ctor &&\n    funcToString.call(Ctor) == objectCtorString;\n}\n\nmodule.exports = isPlainObject;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/isPlainObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/**\n * Creates a function that memoizes the result of `func`. If `resolver` is\n * provided, it determines the cache key for storing the result based on the\n * arguments provided to the memoized function. By default, the first argument\n * provided to the memoized function is used as the map cache key. The `func`\n * is invoked with the `this` binding of the memoized function.\n *\n * **Note:** The cache is exposed as the `cache` property on the memoized\n * function. Its creation may be customized by replacing the `_.memoize.Cache`\n * constructor with one whose instances implement the\n * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)\n * method interface of `clear`, `delete`, `get`, `has`, and `set`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to have its output memoized.\n * @param {Function} [resolver] The function to resolve the cache key.\n * @returns {Function} Returns the new memoized function.\n * @example\n *\n * var object = { 'a': 1, 'b': 2 };\n * var other = { 'c': 3, 'd': 4 };\n *\n * var values = _.memoize(_.values);\n * values(object);\n * // => [1, 2]\n *\n * values(other);\n * // => [3, 4]\n *\n * object.a = 2;\n * values(object);\n * // => [1, 2]\n *\n * // Modify the result cache.\n * values.cache.set(object, ['a', 'b']);\n * values(object);\n * // => ['a', 'b']\n *\n * // Replace `_.memoize.Cache`.\n * _.memoize.Cache = WeakMap;\n */\nfunction memoize(func, resolver) {\n  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  var memoized = function() {\n    var args = arguments,\n        key = resolver ? resolver.apply(this, args) : args[0],\n        cache = memoized.cache;\n\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    var result = func.apply(this, args);\n    memoized.cache = cache.set(key, result) || cache;\n    return result;\n  };\n  memoized.cache = new (memoize.Cache || MapCache);\n  return memoized;\n}\n\n// Expose `MapCache`.\nmemoize.Cache = MapCache;\n\nmodule.exports = memoize;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/memoize.js?");

/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns `undefined`.\n *\n * @static\n * @memberOf _\n * @since 2.3.0\n * @category Util\n * @example\n *\n * _.times(2, _.noop);\n * // => [undefined, undefined]\n */\nfunction noop() {\n  // No operation performed.\n}\n\nmodule.exports = noop;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/noop.js?");

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\");\n\n/**\n * Converts `value` to a string. An empty string is returned for `null`\n * and `undefined` values. The sign of `-0` is preserved.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.toString(null);\n * // => ''\n *\n * _.toString(-0);\n * // => '-0'\n *\n * _.toString([1, 2, 3]);\n * // => '1,2,3'\n */\nfunction toString(value) {\n  return value == null ? '' : baseToString(value);\n}\n\nmodule.exports = toString;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/toString.js?");

/***/ }),

/***/ "./node_modules/lodash/without.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/without.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseDifference = __webpack_require__(/*! ./_baseDifference */ \"./node_modules/lodash/_baseDifference.js\"),\n    baseRest = __webpack_require__(/*! ./_baseRest */ \"./node_modules/lodash/_baseRest.js\"),\n    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ \"./node_modules/lodash/isArrayLikeObject.js\");\n\n/**\n * Creates an array excluding all given values using\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * for equality comparisons.\n *\n * **Note:** Unlike `_.pull`, this method returns a new array.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Array\n * @param {Array} array The array to inspect.\n * @param {...*} [values] The values to exclude.\n * @returns {Array} Returns the new array of filtered values.\n * @see _.difference, _.xor\n * @example\n *\n * _.without([2, 1, 2, 3], 1, 2);\n * // => [3]\n */\nvar without = baseRest(function(array, values) {\n  return isArrayLikeObject(array)\n    ? baseDifference(array, values)\n    : [];\n});\n\nmodule.exports = without;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/without.js?");

/***/ }),

/***/ "./node_modules/lodash/xor.js":
/*!************************************!*\
  !*** ./node_modules/lodash/xor.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ \"./node_modules/lodash/_arrayFilter.js\"),\n    baseRest = __webpack_require__(/*! ./_baseRest */ \"./node_modules/lodash/_baseRest.js\"),\n    baseXor = __webpack_require__(/*! ./_baseXor */ \"./node_modules/lodash/_baseXor.js\"),\n    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ \"./node_modules/lodash/isArrayLikeObject.js\");\n\n/**\n * Creates an array of unique values that is the\n * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)\n * of the given arrays. The order of result values is determined by the order\n * they occur in the arrays.\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Array\n * @param {...Array} [arrays] The arrays to inspect.\n * @returns {Array} Returns the new array of filtered values.\n * @see _.difference, _.without\n * @example\n *\n * _.xor([2, 1], [2, 3]);\n * // => [1, 3]\n */\nvar xor = baseRest(function(arrays) {\n  return baseXor(arrayFilter(arrays, isArrayLikeObject));\n});\n\nmodule.exports = xor;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/lodash/xor.js?");

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/object-assign/index.js?");

/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/** @license React v16.8.4\n * react-dom.production.min.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n/*\n Modernizr 3.0.0pre (Custom Build) | MIT\n*/\nvar aa=__webpack_require__(/*! react */ \"react\"),n=__webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\"),r=__webpack_require__(/*! scheduler */ \"./node_modules/scheduler/index.js\");function ba(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error(\"Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.\");else{var l=[c,d,e,f,g,h],k=0;a=Error(b.replace(/%s/g,function(){return l[k++]}));a.name=\"Invariant Violation\"}a.framesToPop=1;throw a;}}\nfunction x(a){for(var b=arguments.length-1,c=\"https://reactjs.org/docs/error-decoder.html?invariant=\"+a,d=0;d<b;d++)c+=\"&args[]=\"+encodeURIComponent(arguments[d+1]);ba(!1,\"Minified React error #\"+a+\"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. \",c)}aa?void 0:x(\"227\");function ca(a,b,c,d,e,f,g,h,l){var k=Array.prototype.slice.call(arguments,3);try{b.apply(c,k)}catch(m){this.onError(m)}}\nvar da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,l){da=!1;ea=null;ca.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,l){ja.apply(this,arguments);if(da){if(da){var k=ea;da=!1;ea=null}else x(\"198\"),k=void 0;fa||(fa=!0,ha=k)}}var la=null,ma={};\nfunction na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:x(\"96\",a);if(!oa[c]){b.extractEvents?void 0:x(\"97\",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?x(\"99\",h):void 0;pa[h]=f;var l=f.phasedRegistrationNames;if(l){for(e in l)l.hasOwnProperty(e)&&qa(l[e],g,h);e=!0}else f.registrationName?(qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:x(\"98\",d,a)}}}}\nfunction qa(a,b,c){ra[a]?x(\"100\",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies}var oa=[],pa={},ra={},sa={},ta=null,ua=null,va=null;function wa(a,b,c){var d=a.type||\"unknown-event\";a.currentTarget=va(c);ka(d,b,void 0,a);a.currentTarget=null}function xa(a,b){null==b?x(\"30\"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}\nfunction ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}\nvar Ba={injectEventPluginOrder:function(a){la?x(\"101\"):void 0;la=Array.prototype.slice.call(a);na()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?x(\"102\",c):void 0,ma[c]=d,b=!0)}b&&na()}};\nfunction Ca(a,b){var c=a.stateNode;if(!c)return null;var d=ta(c);if(!d)return null;c=d[b];a:switch(b){case \"onClick\":case \"onClickCapture\":case \"onDoubleClick\":case \"onDoubleClickCapture\":case \"onMouseDown\":case \"onMouseDownCapture\":case \"onMouseMove\":case \"onMouseMoveCapture\":case \"onMouseUp\":case \"onMouseUpCapture\":(d=!d.disabled)||(a=a.type,d=!(\"button\"===a||\"input\"===a||\"select\"===a||\"textarea\"===a));a=!d;break a;default:a=!1}if(a)return null;c&&\"function\"!==typeof c?x(\"231\",b,typeof c):void 0;\nreturn c}function Da(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a&&(ya(a,Aa),za?x(\"95\"):void 0,fa))throw a=ha,fa=!1,ha=null,a;}var Ea=Math.random().toString(36).slice(2),Fa=\"__reactInternalInstance$\"+Ea,Ga=\"__reactEventHandlers$\"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return!a||5!==a.tag&&6!==a.tag?null:a}\nfunction Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;x(\"33\")}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ma(a,b,c){if(b=Ca(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}\nfunction Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],\"captured\",a);for(b=0;b<c.length;b++)Ma(c[b],\"bubbled\",a)}}function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ca(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a)}\nfunction Qa(a){ya(a,Na)}var Ra=!(\"undefined\"===typeof window||!window.document||!window.document.createElement);function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c[\"Webkit\"+a]=\"webkit\"+b;c[\"Moz\"+a]=\"moz\"+b;return c}var Ta={animationend:Sa(\"Animation\",\"AnimationEnd\"),animationiteration:Sa(\"Animation\",\"AnimationIteration\"),animationstart:Sa(\"Animation\",\"AnimationStart\"),transitionend:Sa(\"Transition\",\"TransitionEnd\")},Ua={},Va={};\nRa&&(Va=document.createElement(\"div\").style,\"AnimationEvent\"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),\"TransitionEvent\"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}\nvar Xa=Wa(\"animationend\"),Ya=Wa(\"animationiteration\"),Za=Wa(\"animationstart\"),$a=Wa(\"transitionend\"),ab=\"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting\".split(\" \"),bb=null,cb=null,db=null;\nfunction eb(){if(db)return db;var a,b=cb,c=b.length,d,e=\"value\"in bb?bb.value:bb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return db=e.slice(a,1<d?1-d:void 0)}function fb(){return!0}function gb(){return!1}\nfunction y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):\"target\"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?fb:gb;this.isPropagationStopped=gb;return this}\nn(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():\"unknown\"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=fb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():\"unknown\"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=fb)},persist:function(){this.isPersistent=fb},isPersistent:gb,destructor:function(){var a=this.constructor.Interface,\nb;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=gb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};\ny.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;hb(c);return c};hb(y);function ib(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function jb(a){a instanceof this?void 0:x(\"279\");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}\nfunction hb(a){a.eventPool=[];a.getPooled=ib;a.release=jb}var kb=y.extend({data:null}),lb=y.extend({data:null}),mb=[9,13,27,32],nb=Ra&&\"CompositionEvent\"in window,ob=null;Ra&&\"documentMode\"in document&&(ob=document.documentMode);\nvar pb=Ra&&\"TextEvent\"in window&&!ob,qb=Ra&&(!nb||ob&&8<ob&&11>=ob),rb=String.fromCharCode(32),sb={beforeInput:{phasedRegistrationNames:{bubbled:\"onBeforeInput\",captured:\"onBeforeInputCapture\"},dependencies:[\"compositionend\",\"keypress\",\"textInput\",\"paste\"]},compositionEnd:{phasedRegistrationNames:{bubbled:\"onCompositionEnd\",captured:\"onCompositionEndCapture\"},dependencies:\"blur compositionend keydown keypress keyup mousedown\".split(\" \")},compositionStart:{phasedRegistrationNames:{bubbled:\"onCompositionStart\",\ncaptured:\"onCompositionStartCapture\"},dependencies:\"blur compositionstart keydown keypress keyup mousedown\".split(\" \")},compositionUpdate:{phasedRegistrationNames:{bubbled:\"onCompositionUpdate\",captured:\"onCompositionUpdateCapture\"},dependencies:\"blur compositionupdate keydown keypress keyup mousedown\".split(\" \")}},tb=!1;\nfunction ub(a,b){switch(a){case \"keyup\":return-1!==mb.indexOf(b.keyCode);case \"keydown\":return 229!==b.keyCode;case \"keypress\":case \"mousedown\":case \"blur\":return!0;default:return!1}}function vb(a){a=a.detail;return\"object\"===typeof a&&\"data\"in a?a.data:null}var wb=!1;function xb(a,b){switch(a){case \"compositionend\":return vb(b);case \"keypress\":if(32!==b.which)return null;tb=!0;return rb;case \"textInput\":return a=b.data,a===rb&&tb?null:a;default:return null}}\nfunction yb(a,b){if(wb)return\"compositionend\"===a||!nb&&ub(a,b)?(a=eb(),db=cb=bb=null,wb=!1,a):null;switch(a){case \"paste\":return null;case \"keypress\":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case \"compositionend\":return qb&&\"ko\"!==b.locale?null:b.data;default:return null}}\nvar zb={eventTypes:sb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(nb)b:{switch(a){case \"compositionstart\":e=sb.compositionStart;break b;case \"compositionend\":e=sb.compositionEnd;break b;case \"compositionupdate\":e=sb.compositionUpdate;break b}e=void 0}else wb?ub(a,c)&&(e=sb.compositionEnd):\"keydown\"===a&&229===c.keyCode&&(e=sb.compositionStart);e?(qb&&\"ko\"!==c.locale&&(wb||e!==sb.compositionStart?e===sb.compositionEnd&&wb&&(f=eb()):(bb=d,cb=\"value\"in bb?bb.value:bb.textContent,wb=\n!0)),e=kb.getPooled(e,b,c,d),f?e.data=f:(f=vb(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=pb?xb(a,c):yb(a,c))?(b=lb.getPooled(sb.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Ab=null,Bb=null,Cb=null;function Db(a){if(a=ua(a)){\"function\"!==typeof Ab?x(\"280\"):void 0;var b=ta(a.stateNode);Ab(a.stateNode,a.type,b)}}function Eb(a){Bb?Cb?Cb.push(a):Cb=[a]:Bb=a}function Fb(){if(Bb){var a=Bb,b=Cb;Cb=Bb=null;Db(a);if(b)for(a=0;a<b.length;a++)Db(b[a])}}\nfunction Gb(a,b){return a(b)}function Hb(a,b,c){return a(b,c)}function Ib(){}var Jb=!1;function Kb(a,b){if(Jb)return a(b);Jb=!0;try{return Gb(a,b)}finally{if(Jb=!1,null!==Bb||null!==Cb)Ib(),Fb()}}var Lb={color:!0,date:!0,datetime:!0,\"datetime-local\":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return\"input\"===b?!!Lb[a.type]:\"textarea\"===b?!0:!1}\nfunction Nb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Ob(a){if(!Ra)return!1;a=\"on\"+a;var b=a in document;b||(b=document.createElement(\"div\"),b.setAttribute(a,\"return;\"),b=\"function\"===typeof b[a]);return b}function Pb(a){var b=a.type;return(a=a.nodeName)&&\"input\"===a.toLowerCase()&&(\"checkbox\"===b||\"radio\"===b)}\nfunction Qb(a){var b=Pb(a)?\"checked\":\"value\",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=\"\"+a[b];if(!a.hasOwnProperty(b)&&\"undefined\"!==typeof c&&\"function\"===typeof c.get&&\"function\"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=\"\"+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=\"\"+a},stopTracking:function(){a._valueTracker=\nnull;delete a[b]}}}}function Rb(a){a._valueTracker||(a._valueTracker=Qb(a))}function Sb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d=\"\";a&&(d=Pb(a)?a.checked?\"true\":\"false\":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Tb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Tb.hasOwnProperty(\"ReactCurrentDispatcher\")||(Tb.ReactCurrentDispatcher={current:null});\nvar Ub=/^(.*)[\\\\\\/]/,z=\"function\"===typeof Symbol&&Symbol.for,Vb=z?Symbol.for(\"react.element\"):60103,Wb=z?Symbol.for(\"react.portal\"):60106,Xb=z?Symbol.for(\"react.fragment\"):60107,Yb=z?Symbol.for(\"react.strict_mode\"):60108,Zb=z?Symbol.for(\"react.profiler\"):60114,$b=z?Symbol.for(\"react.provider\"):60109,ac=z?Symbol.for(\"react.context\"):60110,bc=z?Symbol.for(\"react.concurrent_mode\"):60111,cc=z?Symbol.for(\"react.forward_ref\"):60112,dc=z?Symbol.for(\"react.suspense\"):60113,ec=z?Symbol.for(\"react.memo\"):\n60115,fc=z?Symbol.for(\"react.lazy\"):60116,gc=\"function\"===typeof Symbol&&Symbol.iterator;function hc(a){if(null===a||\"object\"!==typeof a)return null;a=gc&&a[gc]||a[\"@@iterator\"];return\"function\"===typeof a?a:null}\nfunction ic(a){if(null==a)return null;if(\"function\"===typeof a)return a.displayName||a.name||null;if(\"string\"===typeof a)return a;switch(a){case bc:return\"ConcurrentMode\";case Xb:return\"Fragment\";case Wb:return\"Portal\";case Zb:return\"Profiler\";case Yb:return\"StrictMode\";case dc:return\"Suspense\"}if(\"object\"===typeof a)switch(a.$$typeof){case ac:return\"Context.Consumer\";case $b:return\"Context.Provider\";case cc:var b=a.render;b=b.displayName||b.name||\"\";return a.displayName||(\"\"!==b?\"ForwardRef(\"+b+\n\")\":\"ForwardRef\");case ec:return ic(a.type);case fc:if(a=1===a._status?a._result:null)return ic(a)}return null}function jc(a){var b=\"\";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c=\"\";break a;default:var d=a._debugOwner,e=a._debugSource,f=ic(a.type);c=null;d&&(c=ic(d.type));d=f;f=\"\";e?f=\" (at \"+e.fileName.replace(Ub,\"\")+\":\"+e.lineNumber+\")\":c&&(f=\" (created by \"+c+\")\");c=\"\\n    in \"+(d||\"Unknown\")+f}b+=c;a=a.return}while(a);return b}\nvar kc=/^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$/,lc=Object.prototype.hasOwnProperty,mc={},nc={};\nfunction oc(a){if(lc.call(nc,a))return!0;if(lc.call(mc,a))return!1;if(kc.test(a))return nc[a]=!0;mc[a]=!0;return!1}function pc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case \"function\":case \"symbol\":return!0;case \"boolean\":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return\"data-\"!==a&&\"aria-\"!==a;default:return!1}}\nfunction qc(a,b,c,d){if(null===b||\"undefined\"===typeof b||pc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function C(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var D={};\n\"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style\".split(\" \").forEach(function(a){D[a]=new C(a,0,!1,a,null)});[[\"acceptCharset\",\"accept-charset\"],[\"className\",\"class\"],[\"htmlFor\",\"for\"],[\"httpEquiv\",\"http-equiv\"]].forEach(function(a){var b=a[0];D[b]=new C(b,1,!1,a[1],null)});[\"contentEditable\",\"draggable\",\"spellCheck\",\"value\"].forEach(function(a){D[a]=new C(a,2,!1,a.toLowerCase(),null)});\n[\"autoReverse\",\"externalResourcesRequired\",\"focusable\",\"preserveAlpha\"].forEach(function(a){D[a]=new C(a,2,!1,a,null)});\"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope\".split(\" \").forEach(function(a){D[a]=new C(a,3,!1,a.toLowerCase(),null)});[\"checked\",\"multiple\",\"muted\",\"selected\"].forEach(function(a){D[a]=new C(a,3,!0,a,null)});\n[\"capture\",\"download\"].forEach(function(a){D[a]=new C(a,4,!1,a,null)});[\"cols\",\"rows\",\"size\",\"span\"].forEach(function(a){D[a]=new C(a,6,!1,a,null)});[\"rowSpan\",\"start\"].forEach(function(a){D[a]=new C(a,5,!1,a.toLowerCase(),null)});var rc=/[\\-:]([a-z])/g;function sc(a){return a[1].toUpperCase()}\n\"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height\".split(\" \").forEach(function(a){var b=a.replace(rc,\nsc);D[b]=new C(b,1,!1,a,null)});\"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type\".split(\" \").forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,\"http://www.w3.org/1999/xlink\")});[\"xml:base\",\"xml:lang\",\"xml:space\"].forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,\"http://www.w3.org/XML/1998/namespace\")});[\"tabIndex\",\"crossOrigin\"].forEach(function(a){D[a]=new C(a,1,!1,a.toLowerCase(),null)});\nfunction tc(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||\"o\"!==b[0]&&\"O\"!==b[0]||\"n\"!==b[1]&&\"N\"!==b[1]?!1:!0;f||(qc(b,c,e,d)&&(c=null),d||null===e?oc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,\"\"+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:\"\":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?\"\":\"\"+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}\nfunction uc(a){switch(typeof a){case \"boolean\":case \"number\":case \"object\":case \"string\":case \"undefined\":return a;default:return\"\"}}function vc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}\nfunction wc(a,b){var c=null==b.defaultValue?\"\":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=uc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:\"checkbox\"===b.type||\"radio\"===b.type?null!=b.checked:null!=b.value}}function xc(a,b){b=b.checked;null!=b&&tc(a,\"checked\",b,!1)}\nfunction yc(a,b){xc(a,b);var c=uc(b.value),d=b.type;if(null!=c)if(\"number\"===d){if(0===c&&\"\"===a.value||a.value!=c)a.value=\"\"+c}else a.value!==\"\"+c&&(a.value=\"\"+c);else if(\"submit\"===d||\"reset\"===d){a.removeAttribute(\"value\");return}b.hasOwnProperty(\"value\")?zc(a,b.type,c):b.hasOwnProperty(\"defaultValue\")&&zc(a,b.type,uc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}\nfunction Ac(a,b,c){if(b.hasOwnProperty(\"value\")||b.hasOwnProperty(\"defaultValue\")){var d=b.type;if(!(\"submit\"!==d&&\"reset\"!==d||void 0!==b.value&&null!==b.value))return;b=\"\"+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;\"\"!==c&&(a.name=\"\");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;\"\"!==c&&(a.name=c)}\nfunction zc(a,b,c){if(\"number\"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=\"\"+a._wrapperState.initialValue:a.defaultValue!==\"\"+c&&(a.defaultValue=\"\"+c)}var Bc={change:{phasedRegistrationNames:{bubbled:\"onChange\",captured:\"onChangeCapture\"},dependencies:\"blur change click focus input keydown keyup selectionchange\".split(\" \")}};function Cc(a,b,c){a=y.getPooled(Bc.change,a,b,c);a.type=\"change\";Eb(c);Qa(a);return a}var Dc=null,Ec=null;function Fc(a){Da(a)}\nfunction Gc(a){var b=Ja(a);if(Sb(b))return a}function Hc(a,b){if(\"change\"===a)return b}var Ic=!1;Ra&&(Ic=Ob(\"input\")&&(!document.documentMode||9<document.documentMode));function Jc(){Dc&&(Dc.detachEvent(\"onpropertychange\",Kc),Ec=Dc=null)}function Kc(a){\"value\"===a.propertyName&&Gc(Ec)&&(a=Cc(Ec,a,Nb(a)),Kb(Fc,a))}function Lc(a,b,c){\"focus\"===a?(Jc(),Dc=b,Ec=c,Dc.attachEvent(\"onpropertychange\",Kc)):\"blur\"===a&&Jc()}function Mc(a){if(\"selectionchange\"===a||\"keyup\"===a||\"keydown\"===a)return Gc(Ec)}\nfunction Nc(a,b){if(\"click\"===a)return Gc(b)}function Oc(a,b){if(\"input\"===a||\"change\"===a)return Gc(b)}\nvar Pc={eventTypes:Bc,_isInputEventSupported:Ic,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();\"select\"===h||\"input\"===h&&\"file\"===e.type?f=Hc:Mb(e)?Ic?f=Oc:(f=Mc,g=Lc):(h=e.nodeName)&&\"input\"===h.toLowerCase()&&(\"checkbox\"===e.type||\"radio\"===e.type)&&(f=Nc);if(f&&(f=f(a,b)))return Cc(f,c,d);g&&g(a,e,b);\"blur\"===a&&(a=e._wrapperState)&&a.controlled&&\"number\"===e.type&&zc(e,\"number\",e.value)}},Qc=y.extend({view:null,detail:null}),Rc={Alt:\"altKey\",\nControl:\"ctrlKey\",Meta:\"metaKey\",Shift:\"shiftKey\"};function Sc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Rc[a])?!!b[a]:!1}function Tc(){return Sc}\nvar Uc=0,Vc=0,Wc=!1,Xc=!1,Yc=Qc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Tc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if(\"movementX\"in a)return a.movementX;var b=Uc;Uc=a.screenX;return Wc?\"mousemove\"===a.type?a.screenX-b:0:(Wc=!0,0)},movementY:function(a){if(\"movementY\"in a)return a.movementY;\nvar b=Vc;Vc=a.screenY;return Xc?\"mousemove\"===a.type?a.screenY-b:0:(Xc=!0,0)}}),Zc=Yc.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),$c={mouseEnter:{registrationName:\"onMouseEnter\",dependencies:[\"mouseout\",\"mouseover\"]},mouseLeave:{registrationName:\"onMouseLeave\",dependencies:[\"mouseout\",\"mouseover\"]},pointerEnter:{registrationName:\"onPointerEnter\",dependencies:[\"pointerout\",\"pointerover\"]},pointerLeave:{registrationName:\"onPointerLeave\",\ndependencies:[\"pointerout\",\"pointerover\"]}},ad={eventTypes:$c,extractEvents:function(a,b,c,d){var e=\"mouseover\"===a||\"pointerover\"===a,f=\"mouseout\"===a||\"pointerout\"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,l=void 0,k=void 0;if(\"mouseout\"===a||\"mouseover\"===a)g=Yc,h=$c.mouseLeave,l=$c.mouseEnter,k=\"mouse\";\nelse if(\"pointerout\"===a||\"pointerover\"===a)g=Zc,h=$c.pointerLeave,l=$c.pointerEnter,k=\"pointer\";var m=null==f?e:Ja(f);e=null==b?e:Ja(b);a=g.getPooled(h,f,c,d);a.type=k+\"leave\";a.target=m;a.relatedTarget=e;c=g.getPooled(l,b,c,d);c.type=k+\"enter\";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;k=0;for(g=b;g;g=La(g))k++;g=0;for(l=e;l;l=La(l))g++;for(;0<k-g;)b=La(b),k--;for(;0<g-k;)e=La(e),g--;for(;k--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){k=\nf.alternate;if(null!==k&&k===e)break;b.push(f);f=La(f)}for(f=[];d&&d!==e;){k=d.alternate;if(null!==k&&k===e)break;f.push(d);d=La(d)}for(d=0;d<b.length;d++)Oa(b[d],\"bubbled\",a);for(d=f.length;0<d--;)Oa(f[d],\"captured\",c);return[a,c]}};function bd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var cd=Object.prototype.hasOwnProperty;\nfunction dd(a,b){if(bd(a,b))return!0;if(\"object\"!==typeof a||null===a||\"object\"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!cd.call(b,c[d])||!bd(a[c[d]],b[c[d]]))return!1;return!0}function ed(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function fd(a){2!==ed(a)?x(\"188\"):void 0}\nfunction gd(a){var b=a.alternate;if(!b)return b=ed(a),3===b?x(\"188\"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return fd(e),a;if(g===d)return fd(e),b;g=g.sibling}x(\"188\")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?\nvoid 0:x(\"189\")}}c.alternate!==d?x(\"190\"):void 0}3!==c.tag?x(\"188\"):void 0;return c.stateNode.current===c?a:b}function hd(a){a=gd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}\nvar id=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),jd=y.extend({clipboardData:function(a){return\"clipboardData\"in a?a.clipboardData:window.clipboardData}}),kd=Qc.extend({relatedTarget:null});function ld(a){var b=a.keyCode;\"charCode\"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}\nvar md={Esc:\"Escape\",Spacebar:\" \",Left:\"ArrowLeft\",Up:\"ArrowUp\",Right:\"ArrowRight\",Down:\"ArrowDown\",Del:\"Delete\",Win:\"OS\",Menu:\"ContextMenu\",Apps:\"ContextMenu\",Scroll:\"ScrollLock\",MozPrintableKey:\"Unidentified\"},nd={8:\"Backspace\",9:\"Tab\",12:\"Clear\",13:\"Enter\",16:\"Shift\",17:\"Control\",18:\"Alt\",19:\"Pause\",20:\"CapsLock\",27:\"Escape\",32:\" \",33:\"PageUp\",34:\"PageDown\",35:\"End\",36:\"Home\",37:\"ArrowLeft\",38:\"ArrowUp\",39:\"ArrowRight\",40:\"ArrowDown\",45:\"Insert\",46:\"Delete\",112:\"F1\",113:\"F2\",114:\"F3\",115:\"F4\",\n116:\"F5\",117:\"F6\",118:\"F7\",119:\"F8\",120:\"F9\",121:\"F10\",122:\"F11\",123:\"F12\",144:\"NumLock\",145:\"ScrollLock\",224:\"Meta\"},od=Qc.extend({key:function(a){if(a.key){var b=md[a.key]||a.key;if(\"Unidentified\"!==b)return b}return\"keypress\"===a.type?(a=ld(a),13===a?\"Enter\":String.fromCharCode(a)):\"keydown\"===a.type||\"keyup\"===a.type?nd[a.keyCode]||\"Unidentified\":\"\"},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Tc,charCode:function(a){return\"keypress\"===\na.type?ld(a):0},keyCode:function(a){return\"keydown\"===a.type||\"keyup\"===a.type?a.keyCode:0},which:function(a){return\"keypress\"===a.type?ld(a):\"keydown\"===a.type||\"keyup\"===a.type?a.keyCode:0}}),pd=Yc.extend({dataTransfer:null}),qd=Qc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Tc}),rd=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),sd=Yc.extend({deltaX:function(a){return\"deltaX\"in a?a.deltaX:\"wheelDeltaX\"in\na?-a.wheelDeltaX:0},deltaY:function(a){return\"deltaY\"in a?a.deltaY:\"wheelDeltaY\"in a?-a.wheelDeltaY:\"wheelDelta\"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[[\"abort\",\"abort\"],[Xa,\"animationEnd\"],[Ya,\"animationIteration\"],[Za,\"animationStart\"],[\"canplay\",\"canPlay\"],[\"canplaythrough\",\"canPlayThrough\"],[\"drag\",\"drag\"],[\"dragenter\",\"dragEnter\"],[\"dragexit\",\"dragExit\"],[\"dragleave\",\"dragLeave\"],[\"dragover\",\"dragOver\"],[\"durationchange\",\"durationChange\"],[\"emptied\",\"emptied\"],[\"encrypted\",\"encrypted\"],\n[\"ended\",\"ended\"],[\"error\",\"error\"],[\"gotpointercapture\",\"gotPointerCapture\"],[\"load\",\"load\"],[\"loadeddata\",\"loadedData\"],[\"loadedmetadata\",\"loadedMetadata\"],[\"loadstart\",\"loadStart\"],[\"lostpointercapture\",\"lostPointerCapture\"],[\"mousemove\",\"mouseMove\"],[\"mouseout\",\"mouseOut\"],[\"mouseover\",\"mouseOver\"],[\"playing\",\"playing\"],[\"pointermove\",\"pointerMove\"],[\"pointerout\",\"pointerOut\"],[\"pointerover\",\"pointerOver\"],[\"progress\",\"progress\"],[\"scroll\",\"scroll\"],[\"seeking\",\"seeking\"],[\"stalled\",\"stalled\"],\n[\"suspend\",\"suspend\"],[\"timeupdate\",\"timeUpdate\"],[\"toggle\",\"toggle\"],[\"touchmove\",\"touchMove\"],[$a,\"transitionEnd\"],[\"waiting\",\"waiting\"],[\"wheel\",\"wheel\"]],ud={},vd={};function wd(a,b){var c=a[0];a=a[1];var d=\"on\"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+\"Capture\"},dependencies:[c],isInteractive:b};ud[a]=b;vd[c]=b}\n[[\"blur\",\"blur\"],[\"cancel\",\"cancel\"],[\"click\",\"click\"],[\"close\",\"close\"],[\"contextmenu\",\"contextMenu\"],[\"copy\",\"copy\"],[\"cut\",\"cut\"],[\"auxclick\",\"auxClick\"],[\"dblclick\",\"doubleClick\"],[\"dragend\",\"dragEnd\"],[\"dragstart\",\"dragStart\"],[\"drop\",\"drop\"],[\"focus\",\"focus\"],[\"input\",\"input\"],[\"invalid\",\"invalid\"],[\"keydown\",\"keyDown\"],[\"keypress\",\"keyPress\"],[\"keyup\",\"keyUp\"],[\"mousedown\",\"mouseDown\"],[\"mouseup\",\"mouseUp\"],[\"paste\",\"paste\"],[\"pause\",\"pause\"],[\"play\",\"play\"],[\"pointercancel\",\"pointerCancel\"],\n[\"pointerdown\",\"pointerDown\"],[\"pointerup\",\"pointerUp\"],[\"ratechange\",\"rateChange\"],[\"reset\",\"reset\"],[\"seeked\",\"seeked\"],[\"submit\",\"submit\"],[\"touchcancel\",\"touchCancel\"],[\"touchend\",\"touchEnd\"],[\"touchstart\",\"touchStart\"],[\"volumechange\",\"volumeChange\"]].forEach(function(a){wd(a,!0)});td.forEach(function(a){wd(a,!1)});\nvar xd={eventTypes:ud,isInteractiveTopLevelEventType:function(a){a=vd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case \"keypress\":if(0===ld(c))return null;case \"keydown\":case \"keyup\":a=od;break;case \"blur\":case \"focus\":a=kd;break;case \"click\":if(2===c.button)return null;case \"auxclick\":case \"dblclick\":case \"mousedown\":case \"mousemove\":case \"mouseup\":case \"mouseout\":case \"mouseover\":case \"contextmenu\":a=Yc;break;case \"drag\":case \"dragend\":case \"dragenter\":case \"dragexit\":case \"dragleave\":case \"dragover\":case \"dragstart\":case \"drop\":a=\npd;break;case \"touchcancel\":case \"touchend\":case \"touchmove\":case \"touchstart\":a=qd;break;case Xa:case Ya:case Za:a=id;break;case $a:a=rd;break;case \"scroll\":a=Qc;break;case \"wheel\":a=sd;break;case \"copy\":case \"cut\":case \"paste\":a=jd;break;case \"gotpointercapture\":case \"lostpointercapture\":case \"pointercancel\":case \"pointerdown\":case \"pointermove\":case \"pointerout\":case \"pointerover\":case \"pointerup\":a=Zc;break;default:a=y}b=a.getPooled(e,b,c,d);Qa(b);return b}},yd=xd.isInteractiveTopLevelEventType,\nzd=[];function Ad(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Nb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<oa.length;h++){var l=oa[h];l&&(l=l.extractEvents(d,b,f,e))&&(g=xa(g,l))}Da(g)}}var Bd=!0;\nfunction E(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!1)}function Ed(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!0)}function Cd(a,b){Hb(Dd,a,b)}\nfunction Dd(a,b){if(Bd){var c=Nb(b);c=Ha(c);null===c||\"number\"!==typeof c.tag||2===ed(c)||(c=null);if(zd.length){var d=zd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Kb(Ad,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>zd.length&&zd.push(a)}}}var Fd={},Gd=0,Hd=\"_reactListenersID\"+(\"\"+Math.random()).slice(2);\nfunction Id(a){Object.prototype.hasOwnProperty.call(a,Hd)||(a[Hd]=Gd++,Fd[a[Hd]]={});return Fd[a[Hd]]}function Jd(a){a=a||(\"undefined\"!==typeof document?document:void 0);if(\"undefined\"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Kd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}\nfunction Ld(a,b){var c=Kd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Kd(c)}}function Md(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Md(a,b.parentNode):\"contains\"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}\nfunction Nd(){for(var a=window,b=Jd();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView}catch(c){break}b=Jd(a.document)}return b}function Od(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&(\"input\"===b&&(\"text\"===a.type||\"search\"===a.type||\"tel\"===a.type||\"url\"===a.type||\"password\"===a.type)||\"textarea\"===b||\"true\"===a.contentEditable)}\nfunction Pd(){var a=Nd();if(Od(a)){if(\"selectionStart\"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{b=(b=a.ownerDocument)&&b.defaultView||window;var c=b.getSelection&&b.getSelection();if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType,e.nodeType}catch(A){b=null;break a}var f=0,g=-1,h=-1,l=0,k=0,m=a,p=null;b:for(;;){for(var t;;){m!==b||0!==d&&3!==m.nodeType||(g=f+d);m!==e||0!==c&&3!==m.nodeType||(h=f+c);3===m.nodeType&&(f+=m.nodeValue.length);\nif(null===(t=m.firstChild))break;p=m;m=t}for(;;){if(m===a)break b;p===b&&++l===d&&(g=f);p===e&&++k===c&&(h=f);if(null!==(t=m.nextSibling))break;m=p;p=m.parentNode}m=t}b=-1===g||-1===h?null:{start:g,end:h}}else b=null}b=b||{start:0,end:0}}else b=null;return{focusedElem:a,selectionRange:b}}\nfunction Qd(a){var b=Nd(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Md(c.ownerDocument.documentElement,c)){if(null!==d&&Od(c))if(b=d.start,a=d.end,void 0===a&&(a=b),\"selectionStart\"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ld(c,f);var g=Ld(c,\nd);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});\"function\"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}\nvar Rd=Ra&&\"documentMode\"in document&&11>=document.documentMode,Sd={select:{phasedRegistrationNames:{bubbled:\"onSelect\",captured:\"onSelectCapture\"},dependencies:\"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange\".split(\" \")}},Td=null,Ud=null,Vd=null,Wd=!1;\nfunction Xd(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Wd||null==Td||Td!==Jd(c))return null;c=Td;\"selectionStart\"in c&&Od(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Vd&&dd(Vd,c)?null:(Vd=c,a=y.getPooled(Sd.select,Ud,a,b),a.type=\"select\",a.target=Td,Qa(a),a)}\nvar Yd={eventTypes:Sd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Id(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ja(b):window;switch(a){case \"focus\":if(Mb(e)||\"true\"===e.contentEditable)Td=e,Ud=b,Vd=null;break;case \"blur\":Vd=Ud=Td=null;break;case \"mousedown\":Wd=!0;break;case \"contextmenu\":case \"mouseup\":case \"dragend\":return Wd=!1,Xd(c,d);case \"selectionchange\":if(Rd)break;\ncase \"keydown\":case \"keyup\":return Xd(c,d)}return null}};Ba.injectEventPluginOrder(\"ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin\".split(\" \"));ta=Ka;ua=Ia;va=Ja;Ba.injectEventPluginsByName({SimpleEventPlugin:xd,EnterLeaveEventPlugin:ad,ChangeEventPlugin:Pc,SelectEventPlugin:Yd,BeforeInputEventPlugin:zb});function Zd(a){var b=\"\";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}\nfunction $d(a,b){a=n({children:void 0},b);if(b=Zd(b.children))a.children=b;return a}function ae(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b[\"$\"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty(\"$\"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=\"\"+uc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}\nfunction be(a,b){null!=b.dangerouslySetInnerHTML?x(\"91\"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:\"\"+a._wrapperState.initialValue})}function ce(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?x(\"92\"):void 0,Array.isArray(b)&&(1>=b.length?void 0:x(\"93\"),b=b[0]),c=b),null==c&&(c=\"\"));a._wrapperState={initialValue:uc(c)}}\nfunction de(a,b){var c=uc(b.value),d=uc(b.defaultValue);null!=c&&(c=\"\"+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=\"\"+d)}function ee(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var fe={html:\"http://www.w3.org/1999/xhtml\",mathml:\"http://www.w3.org/1998/Math/MathML\",svg:\"http://www.w3.org/2000/svg\"};\nfunction ge(a){switch(a){case \"svg\":return\"http://www.w3.org/2000/svg\";case \"math\":return\"http://www.w3.org/1998/Math/MathML\";default:return\"http://www.w3.org/1999/xhtml\"}}function he(a,b){return null==a||\"http://www.w3.org/1999/xhtml\"===a?ge(b):\"http://www.w3.org/2000/svg\"===a&&\"foreignObject\"===b?\"http://www.w3.org/1999/xhtml\":a}\nvar ie=void 0,je=function(a){return\"undefined\"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==fe.svg||\"innerHTML\"in a)a.innerHTML=b;else{ie=ie||document.createElement(\"div\");ie.innerHTML=\"<svg>\"+b+\"</svg>\";for(b=ie.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});\nfunction ke(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}\nvar le={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,\nfloodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=[\"Webkit\",\"ms\",\"Moz\",\"O\"];Object.keys(le).forEach(function(a){me.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);le[b]=le[a]})});function ne(a,b,c){return null==b||\"boolean\"===typeof b||\"\"===b?\"\":c||\"number\"!==typeof b||0===b||le.hasOwnProperty(a)&&le[a]?(\"\"+b).trim():b+\"px\"}\nfunction oe(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf(\"--\"),e=ne(c,b[c],d);\"float\"===c&&(c=\"cssFloat\");d?a.setProperty(c,e):a[c]=e}}var pe=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});\nfunction qe(a,b){b&&(pe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?x(\"137\",a,\"\"):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?x(\"60\"):void 0,\"object\"===typeof b.dangerouslySetInnerHTML&&\"__html\"in b.dangerouslySetInnerHTML?void 0:x(\"61\")),null!=b.style&&\"object\"!==typeof b.style?x(\"62\",\"\"):void 0)}\nfunction re(a,b){if(-1===a.indexOf(\"-\"))return\"string\"===typeof b.is;switch(a){case \"annotation-xml\":case \"color-profile\":case \"font-face\":case \"font-face-src\":case \"font-face-uri\":case \"font-face-format\":case \"font-face-name\":case \"missing-glyph\":return!1;default:return!0}}\nfunction se(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Id(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case \"scroll\":Ed(\"scroll\",a);break;case \"focus\":case \"blur\":Ed(\"focus\",a);Ed(\"blur\",a);c.blur=!0;c.focus=!0;break;case \"cancel\":case \"close\":Ob(e)&&Ed(e,a);break;case \"invalid\":case \"submit\":case \"reset\":break;default:-1===ab.indexOf(e)&&E(e,a)}c[e]=!0}}}function te(){}var ue=null,ve=null;\nfunction we(a,b){switch(a){case \"button\":case \"input\":case \"select\":case \"textarea\":return!!b.autoFocus}return!1}function xe(a,b){return\"textarea\"===a||\"option\"===a||\"noscript\"===a||\"string\"===typeof b.children||\"number\"===typeof b.children||\"object\"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}\nvar ye=\"function\"===typeof setTimeout?setTimeout:void 0,ze=\"function\"===typeof clearTimeout?clearTimeout:void 0,Ae=r.unstable_scheduleCallback,Be=r.unstable_cancelCallback;\nfunction Ce(a,b,c,d,e){a[Ga]=e;\"input\"===c&&\"radio\"===e.type&&null!=e.name&&xc(a,e);re(c,d);d=re(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];\"style\"===g?oe(a,h):\"dangerouslySetInnerHTML\"===g?je(a,h):\"children\"===g?ke(a,h):tc(a,g,h,d)}switch(c){case \"input\":yc(a,e);break;case \"textarea\":de(a,e);break;case \"select\":b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?ae(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?ae(a,!!e.multiple,e.defaultValue,\n!0):ae(a,!!e.multiple,e.multiple?[]:\"\",!1))}}function De(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Ee(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var Fe=[],Ge=-1;function F(a){0>Ge||(a.current=Fe[Ge],Fe[Ge]=null,Ge--)}function G(a,b){Ge++;Fe[Ge]=a.current;a.current=b}var He={},H={current:He},I={current:!1},Ie=He;\nfunction Je(a,b){var c=a.type.contextTypes;if(!c)return He;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function J(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ke(a){F(I,a);F(H,a)}function Le(a){F(I,a);F(H,a)}\nfunction Me(a,b,c){H.current!==He?x(\"168\"):void 0;G(H,b,a);G(I,c,a)}function Ne(a,b,c){var d=a.stateNode;a=b.childContextTypes;if(\"function\"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:x(\"108\",ic(b)||\"Unknown\",e);return n({},c,d)}function Oe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||He;Ie=H.current;G(H,b,a);G(I,I.current,a);return!0}\nfunction Pe(a,b,c){var d=a.stateNode;d?void 0:x(\"169\");c?(b=Ne(a,b,Ie),d.__reactInternalMemoizedMergedChildContext=b,F(I,a),F(H,a),G(H,b,a)):F(I,a);G(I,c,a)}var Qe=null,Re=null;function Se(a){return function(b){try{return a(b)}catch(c){}}}\nfunction Te(a){if(\"undefined\"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Qe=Se(function(a){return b.onCommitFiberRoot(c,a)});Re=Se(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}\nfunction Ue(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function K(a,b,c,d){return new Ue(a,b,c,d)}\nfunction Ve(a){a=a.prototype;return!(!a||!a.isReactComponent)}function We(a){if(\"function\"===typeof a)return Ve(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===cc)return 11;if(a===ec)return 14}return 2}\nfunction Xe(a,b){var c=a.alternate;null===c?(c=K(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.contextDependencies=a.contextDependencies;c.sibling=a.sibling;\nc.index=a.index;c.ref=a.ref;return c}\nfunction Ye(a,b,c,d,e,f){var g=2;d=a;if(\"function\"===typeof a)Ve(a)&&(g=1);else if(\"string\"===typeof a)g=5;else a:switch(a){case Xb:return Ze(c.children,e,f,b);case bc:return $e(c,e|3,f,b);case Yb:return $e(c,e|2,f,b);case Zb:return a=K(12,c,b,e|4),a.elementType=Zb,a.type=Zb,a.expirationTime=f,a;case dc:return a=K(13,c,b,e),a.elementType=dc,a.type=dc,a.expirationTime=f,a;default:if(\"object\"===typeof a&&null!==a)switch(a.$$typeof){case $b:g=10;break a;case ac:g=9;break a;case cc:g=11;break a;case ec:g=\n14;break a;case fc:g=16;d=null;break a}x(\"130\",null==a?a:typeof a,\"\")}b=K(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ze(a,b,c,d){a=K(7,a,d,b);a.expirationTime=c;return a}function $e(a,b,c,d){a=K(8,a,d,b);b=0===(b&1)?Yb:bc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function af(a,b,c){a=K(6,a,null,b);a.expirationTime=c;return a}\nfunction bf(a,b,c){b=K(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function cf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);df(b,a)}\nfunction ef(a,b){a.didError=!1;if(0===b)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0;else{b<a.latestPingedTime&&(a.latestPingedTime=0);var c=a.latestPendingTime;0!==c&&(c>b?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>b&&(a.earliestPendingTime=a.latestPendingTime));c=a.earliestSuspendedTime;0===c?cf(a,b):b<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,cf(a,b)):\nb>c&&cf(a,b)}df(0,a)}function ff(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);df(b,a)}\nfunction gf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}function df(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}function L(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}\nfunction hf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var jf=(new aa.Component).refs;\nfunction kf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}\nvar tf={isMounted:function(a){return(a=a._reactInternalFiber)?2===ed(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.tag=rf;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=lf();c=mf(c,a);var d=nf(c);d.tag=\nsf;void 0!==b&&null!==b&&(d.callback=b);of();pf(a,d);qf(a,c)}};function uf(a,b,c,d,e,f,g){a=a.stateNode;return\"function\"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!dd(c,d)||!dd(e,f):!0}\nfunction vf(a,b,c){var d=!1,e=He;var f=b.contextType;\"object\"===typeof f&&null!==f?f=M(f):(e=J(b)?Ie:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Je(a,e):He);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=tf;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}\nfunction wf(a,b,c,d){a=b.state;\"function\"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);\"function\"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&tf.enqueueReplaceState(b,b.state,null)}\nfunction xf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jf;var f=b.contextType;\"object\"===typeof f&&null!==f?e.context=M(f):(f=J(b)?Ie:H.current,e.context=Je(a,f));f=a.updateQueue;null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;\"function\"===typeof f&&(kf(a,b,f,c),e.state=a.memoizedState);\"function\"===typeof b.getDerivedStateFromProps||\"function\"===typeof e.getSnapshotBeforeUpdate||\"function\"!==typeof e.UNSAFE_componentWillMount&&\"function\"!==\ntypeof e.componentWillMount||(b=e.state,\"function\"===typeof e.componentWillMount&&e.componentWillMount(),\"function\"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&tf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState));\"function\"===typeof e.componentDidMount&&(a.effectTag|=4)}var zf=Array.isArray;\nfunction Af(a,b,c){a=c.ref;if(null!==a&&\"function\"!==typeof a&&\"object\"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?x(\"309\"):void 0,d=c.stateNode);d?void 0:x(\"147\",a);var e=\"\"+a;if(null!==b&&null!==b.ref&&\"function\"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===jf&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}\"string\"!==typeof a?x(\"284\"):void 0;c._owner?void 0:x(\"290\",a)}return a}\nfunction Bf(a,b){\"textarea\"!==a.type&&x(\"31\",\"[object Object]\"===Object.prototype.toString.call(b)?\"object with keys {\"+Object.keys(b).join(\", \")+\"}\":b,\"\")}\nfunction Cf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Xe(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=\n2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=af(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function l(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Af(a,b,c),d.return=a,d;d=Ye(c.type,c.key,c.props,null,a.mode,d);d.ref=Af(a,b,c);d.return=a;return d}function k(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==\nc.implementation)return b=bf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ze(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function p(a,b,c){if(\"string\"===typeof b||\"number\"===typeof b)return b=af(\"\"+b,a.mode,c),b.return=a,b;if(\"object\"===typeof b&&null!==b){switch(b.$$typeof){case Vb:return c=Ye(b.type,b.key,b.props,null,a.mode,c),c.ref=Af(a,null,b),c.return=a,c;case Wb:return b=bf(b,a.mode,c),b.return=a,b}if(zf(b)||\nhc(b))return b=Ze(b,a.mode,c,null),b.return=a,b;Bf(a,b)}return null}function t(a,b,c,d){var e=null!==b?b.key:null;if(\"string\"===typeof c||\"number\"===typeof c)return null!==e?null:h(a,b,\"\"+c,d);if(\"object\"===typeof c&&null!==c){switch(c.$$typeof){case Vb:return c.key===e?c.type===Xb?m(a,b,c.props.children,d,e):l(a,b,c,d):null;case Wb:return c.key===e?k(a,b,c,d):null}if(zf(c)||hc(c))return null!==e?null:m(a,b,c,d,null);Bf(a,c)}return null}function A(a,b,c,d,e){if(\"string\"===typeof d||\"number\"===typeof d)return a=\na.get(c)||null,h(b,a,\"\"+d,e);if(\"object\"===typeof d&&null!==d){switch(d.$$typeof){case Vb:return a=a.get(null===d.key?c:d.key)||null,d.type===Xb?m(b,a,d.props.children,e,d.key):l(b,a,d,e);case Wb:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e)}if(zf(d)||hc(d))return a=a.get(c)||null,m(b,a,d,e,null);Bf(b,d)}return null}function v(e,g,h,k){for(var l=null,m=null,q=g,u=g=0,B=null;null!==q&&u<h.length;u++){q.index>u?(B=q,q=null):B=q.sibling;var w=t(e,q,h[u],k);if(null===w){null===q&&(q=B);break}a&&\nq&&null===w.alternate&&b(e,q);g=f(w,g,u);null===m?l=w:m.sibling=w;m=w;q=B}if(u===h.length)return c(e,q),l;if(null===q){for(;u<h.length;u++)if(q=p(e,h[u],k))g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;return l}for(q=d(e,q);u<h.length;u++)if(B=A(q,e,u,h[u],k))a&&null!==B.alternate&&q.delete(null===B.key?u:B.key),g=f(B,g,u),null===m?l=B:m.sibling=B,m=B;a&&q.forEach(function(a){return b(e,a)});return l}function R(e,g,h,k){var l=hc(h);\"function\"!==typeof l?x(\"150\"):void 0;h=l.call(h);null==h?x(\"151\"):void 0;\nfor(var m=l=null,q=g,u=g=0,B=null,w=h.next();null!==q&&!w.done;u++,w=h.next()){q.index>u?(B=q,q=null):B=q.sibling;var v=t(e,q,w.value,k);if(null===v){q||(q=B);break}a&&q&&null===v.alternate&&b(e,q);g=f(v,g,u);null===m?l=v:m.sibling=v;m=v;q=B}if(w.done)return c(e,q),l;if(null===q){for(;!w.done;u++,w=h.next())w=p(e,w.value,k),null!==w&&(g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);return l}for(q=d(e,q);!w.done;u++,w=h.next())w=A(q,e,u,w.value,k),null!==w&&(a&&null!==w.alternate&&q.delete(null===w.key?u:\nw.key),g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k=\"object\"===typeof f&&null!==f&&f.type===Xb&&null===f.key;k&&(f=f.props.children);var l=\"object\"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Vb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Xb:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Xb?f.props.children:f.props,h);d.ref=Af(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=\nk.sibling}f.type===Xb?(d=Ze(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ye(f.type,f.key,f.props,null,a.mode,h),h.ref=Af(a,d,f),h.return=a,a=h)}return g(a);case Wb:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=bf(f,a.mode,h);d.return=a;a=d}return g(a)}if(\"string\"===typeof f||\"number\"===typeof f)return f=\n\"\"+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=af(f,a.mode,h),d.return=a,a=d),g(a);if(zf(f))return v(a,d,f,h);if(hc(f))return R(a,d,f,h);l&&Bf(a,f);if(\"undefined\"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,x(\"152\",h.displayName||h.name||\"Component\")}return c(a,d)}}var Df=Cf(!0),Ef=Cf(!1),Ff={},N={current:Ff},Gf={current:Ff},Hf={current:Ff};function If(a){a===Ff?x(\"174\"):void 0;return a}\nfunction Jf(a,b){G(Hf,b,a);G(Gf,a,a);G(N,Ff,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:he(null,\"\");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=he(b,c)}F(N,a);G(N,b,a)}function Kf(a){F(N,a);F(Gf,a);F(Hf,a)}function Lf(a){If(Hf.current);var b=If(N.current);var c=he(b,a.type);b!==c&&(G(Gf,a,a),G(N,c,a))}function Mf(a){Gf.current===a&&(F(N,a),F(Gf,a))}\nvar Nf=0,Of=2,Pf=4,Qf=8,Rf=16,Sf=32,Tf=64,Uf=128,Vf=Tb.ReactCurrentDispatcher,Wf=0,Xf=null,O=null,P=null,Yf=null,Q=null,Zf=null,$f=0,ag=null,bg=0,cg=!1,dg=null,eg=0;function fg(){x(\"307\")}function gg(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!bd(a[c],b[c]))return!1;return!0}\nfunction hg(a,b,c,d,e,f){Wf=f;Xf=b;P=null!==a?a.memoizedState:null;Vf.current=null===P?ig:jg;b=c(d,e);if(cg){do cg=!1,eg+=1,P=null!==a?a.memoizedState:null,Zf=Yf,ag=Q=O=null,Vf.current=jg,b=c(d,e);while(cg);dg=null;eg=0}Vf.current=kg;a=Xf;a.memoizedState=Yf;a.expirationTime=$f;a.updateQueue=ag;a.effectTag|=bg;a=null!==O&&null!==O.next;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;a?x(\"300\"):void 0;return b}function lg(){Vf.current=kg;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;cg=!1;dg=null;eg=0}\nfunction mg(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===Q?Yf=Q=a:Q=Q.next=a;return Q}function ng(){if(null!==Zf)Q=Zf,Zf=Q.next,O=P,P=null!==O?O.next:null;else{null===P?x(\"310\"):void 0;O=P;var a={memoizedState:O.memoizedState,baseState:O.baseState,queue:O.queue,baseUpdate:O.baseUpdate,next:null};Q=null===Q?Yf=a:Q.next=a;P=O.next}return Q}function og(a,b){return\"function\"===typeof b?b(a):b}\nfunction pg(a){var b=ng(),c=b.queue;null===c?x(\"311\"):void 0;if(0<eg){var d=c.dispatch;if(null!==dg){var e=dg.get(c);if(void 0!==e){dg.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.eagerReducer=a;c.eagerState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==d){var h=e=null,\nl=d,k=!1;do{var m=l.expirationTime;m<Wf?(k||(k=!0,h=g,e=f),m>$f&&($f=m)):f=l.eagerReducer===a?l.eagerState:a(f,l.action);g=l;l=l.next}while(null!==l&&l!==d);k||(h=g,e=f);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.eagerReducer=a;c.eagerState=f}return[b.memoizedState,c.dispatch]}\nfunction rg(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===ag?(ag={lastEffect:null},ag.lastEffect=a.next=a):(b=ag.lastEffect,null===b?ag.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,ag.lastEffect=a));return a}function sg(a,b,c,d){var e=mg();bg|=a;e.memoizedState=rg(b,c,void 0,void 0===d?null:d)}\nfunction tg(a,b,c,d){var e=ng();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&gg(d,g.deps)){rg(Nf,c,f,d);return}}bg|=a;e.memoizedState=rg(b,c,f,d)}function ug(a,b){if(\"function\"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function vg(){}\nfunction wg(a,b,c){25>eg?void 0:x(\"301\");var d=a.alternate;if(a===Xf||null!==d&&d===Xf)if(cg=!0,a={expirationTime:Wf,action:c,eagerReducer:null,eagerState:null,next:null},null===dg&&(dg=new Map),c=dg.get(b),void 0===c)dg.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{of();var e=lf();e=mf(e,a);var f={expirationTime:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===\nd||0===d.expirationTime)&&(d=b.eagerReducer,null!==d))try{var l=b.eagerState,k=d(l,c);f.eagerReducer=d;f.eagerState=k;if(bd(k,l))return}catch(m){}finally{}qf(a,e)}}\nvar kg={readContext:M,useCallback:fg,useContext:fg,useEffect:fg,useImperativeHandle:fg,useLayoutEffect:fg,useMemo:fg,useReducer:fg,useRef:fg,useState:fg,useDebugValue:fg},ig={readContext:M,useCallback:function(a,b){mg().memoizedState=[a,void 0===b?null:b];return a},useContext:M,useEffect:function(a,b){return sg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return sg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,b){return sg(4,Pf|Sf,a,b)},\nuseMemo:function(a,b){var c=mg();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=mg();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,eagerReducer:a,eagerState:b};a=a.dispatch=wg.bind(null,Xf,a);return[d.memoizedState,a]},useRef:function(a){var b=mg();a={current:a};return b.memoizedState=a},useState:function(a){var b=mg();\"function\"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,eagerReducer:og,\neagerState:a};a=a.dispatch=wg.bind(null,Xf,a);return[b.memoizedState,a]},useDebugValue:vg},jg={readContext:M,useCallback:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:M,useEffect:function(a,b){return tg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return tg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,b){return tg(4,Pf|Sf,a,b)},\nuseMemo:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:pg,useRef:function(){return ng().memoizedState},useState:function(a){return pg(og,a)},useDebugValue:vg},xg=null,yg=null,zg=!1;\nfunction Ag(a,b){var c=K(5,null,null,0);c.elementType=\"DELETED\";c.type=\"DELETED\";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Bg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=\"\"===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}\nfunction Cg(a){if(zg){var b=yg;if(b){var c=b;if(!Bg(a,b)){b=De(c);if(!b||!Bg(a,b)){a.effectTag|=2;zg=!1;xg=a;return}Ag(xg,c)}xg=a;yg=Ee(b)}else a.effectTag|=2,zg=!1,xg=a}}function Dg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;xg=a}function Eg(a){if(a!==xg)return!1;if(!zg)return Dg(a),zg=!0,!1;var b=a.type;if(5!==a.tag||\"head\"!==b&&\"body\"!==b&&!xe(b,a.memoizedProps))for(b=yg;b;)Ag(a,b),b=De(b);Dg(a);yg=xg?De(a.stateNode):null;return!0}function Fg(){yg=xg=null;zg=!1}\nvar Gg=Tb.ReactCurrentOwner,qg=!1;function S(a,b,c,d){b.child=null===a?Ef(b,null,c,d):Df(b,a.child,c,d)}function Hg(a,b,c,d,e){c=c.render;var f=b.ref;Ig(b,e);d=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,d,e);return b.child}\nfunction Kg(a,b,c,d,e,f){if(null===a){var g=c.type;if(\"function\"===typeof g&&!Ve(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Lg(a,b,g,d,e,f);a=Ye(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:dd,c(e,d)&&a.ref===b.ref))return Jg(a,b,f);b.effectTag|=1;a=Xe(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}\nfunction Lg(a,b,c,d,e,f){return null!==a&&dd(a.memoizedProps,d)&&a.ref===b.ref&&(qg=!1,e<f)?Jg(a,b,f):Mg(a,b,c,d,f)}function Ng(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Mg(a,b,c,d,e){var f=J(c)?Ie:H.current;f=Je(b,f);Ig(b,e);c=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,c,e);return b.child}\nfunction Og(a,b,c,d,e){if(J(c)){var f=!0;Oe(b)}else f=!1;Ig(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),vf(b,c,d,e),xf(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var l=g.context,k=c.contextType;\"object\"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k));var m=c.getDerivedStateFromProps,p=\"function\"===typeof m||\"function\"===typeof g.getSnapshotBeforeUpdate;p||\"function\"!==typeof g.UNSAFE_componentWillReceiveProps&&\n\"function\"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k);Pg=!1;var t=b.memoizedState;l=g.state=t;var A=b.updateQueue;null!==A&&(yf(b,A,d,g,e),l=b.memoizedState);h!==d||t!==l||I.current||Pg?(\"function\"===typeof m&&(kf(b,c,m,d),l=b.memoizedState),(h=Pg||uf(b,c,h,d,t,l,k))?(p||\"function\"!==typeof g.UNSAFE_componentWillMount&&\"function\"!==typeof g.componentWillMount||(\"function\"===typeof g.componentWillMount&&g.componentWillMount(),\"function\"===typeof g.UNSAFE_componentWillMount&&\ng.UNSAFE_componentWillMount()),\"function\"===typeof g.componentDidMount&&(b.effectTag|=4)):(\"function\"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=l),g.props=d,g.state=l,g.context=k,d=h):(\"function\"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:L(b.type,h),l=g.context,k=c.contextType,\"object\"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k)),m=c.getDerivedStateFromProps,(p=\"function\"===\ntypeof m||\"function\"===typeof g.getSnapshotBeforeUpdate)||\"function\"!==typeof g.UNSAFE_componentWillReceiveProps&&\"function\"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k),Pg=!1,l=b.memoizedState,t=g.state=l,A=b.updateQueue,null!==A&&(yf(b,A,d,g,e),t=b.memoizedState),h!==d||l!==t||I.current||Pg?(\"function\"===typeof m&&(kf(b,c,m,d),t=b.memoizedState),(m=Pg||uf(b,c,h,d,l,t,k))?(p||\"function\"!==typeof g.UNSAFE_componentWillUpdate&&\"function\"!==typeof g.componentWillUpdate||(\"function\"===\ntypeof g.componentWillUpdate&&g.componentWillUpdate(d,t,k),\"function\"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,t,k)),\"function\"===typeof g.componentDidUpdate&&(b.effectTag|=4),\"function\"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):(\"function\"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),\"function\"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=\nt),g.props=d,g.state=t,g.context=k,d=m):(\"function\"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),\"function\"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),d=!1);return Qg(a,b,c,d,f,e)}\nfunction Qg(a,b,c,d,e,f){Ng(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Pe(b,c,!1),Jg(a,b,f);d=b.stateNode;Gg.current=b;var h=g&&\"function\"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Df(b,a.child,null,f),b.child=Df(b,null,h,f)):S(a,b,h,f);b.memoizedState=d.state;e&&Pe(b,c,!0);return b.child}function Rg(a){var b=a.stateNode;b.pendingContext?Me(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Me(a,b.context,!1);Jf(a,b.containerInfo)}\nfunction Sg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=Ze(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=Ze(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b}else c=d=Ef(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=Xe(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==\nb.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=Xe(h,c,h.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=Df(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=Ze(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=Ze(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=Df(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}\nfunction Jg(a,b,c){null!==a&&(b.contextDependencies=a.contextDependencies);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?x(\"153\"):void 0;if(null!==b.child){a=b.child;c=Xe(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Xe(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}\nfunction Tg(a,b,c){var d=b.expirationTime;if(null!==a)if(a.memoizedProps!==b.pendingProps||I.current)qg=!0;else{if(d<c){qg=!1;switch(b.tag){case 3:Rg(b);Fg();break;case 5:Lf(b);break;case 1:J(b.type)&&Oe(b);break;case 4:Jf(b,b.stateNode.containerInfo);break;case 10:Ug(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Sg(a,b,c);b=Jg(a,b,c);return null!==b?b.sibling:null}}return Jg(a,b,c)}}else qg=!1;b.expirationTime=0;switch(b.tag){case 2:d=\nb.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Je(b,H.current);Ig(b,c);e=hg(null,b,d,a,e,c);b.effectTag|=1;if(\"object\"===typeof e&&null!==e&&\"function\"===typeof e.render&&void 0===e.$$typeof){b.tag=1;lg();if(J(d)){var f=!0;Oe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;\"function\"===typeof g&&kf(b,d,g,a);e.updater=tf;b.stateNode=e;e._reactInternalFiber=b;xf(b,d,a,c);b=Qg(null,b,d,!0,f,\nc)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=hf(e);b.type=a;e=b.tag=We(a);f=L(a,f);g=void 0;switch(e){case 0:g=Mg(null,b,a,f,c);break;case 1:g=Og(null,b,a,f,c);break;case 11:g=Hg(null,b,a,f,c);break;case 14:g=Kg(null,b,a,L(a.type,f),d,c);break;default:x(\"306\",a,\"\")}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Mg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,\ne=b.elementType===d?e:L(d,e),Og(a,b,d,e,c);case 3:Rg(b);d=b.updateQueue;null===d?x(\"282\"):void 0;e=b.memoizedState;e=null!==e?e.element:null;yf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Fg(),b=Jg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)yg=Ee(b.stateNode.containerInfo),xg=b,e=zg=!0;e?(b.effectTag|=2,b.child=Ef(b,null,d,c)):(S(a,b,d,c),Fg());b=b.child}return b;case 5:return Lf(b),null===a&&Cg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,\ng=e.children,xe(d,e)?g=null:null!==f&&xe(d,f)&&(b.effectTag|=16),Ng(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(S(a,b,g,c),b=b.child),b;case 6:return null===a&&Cg(b),null;case 13:return Sg(a,b,c);case 4:return Jf(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Df(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Hg(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,\nc),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Ug(b,f);if(null!==g){var h=g.value;f=bd(h,f)?0:(\"function\"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!I.current){b=Jg(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var l=h.contextDependencies;if(null!==l){g=h.child;for(var k=l.first;null!==k;){if(k.context===d&&0!==\n(k.observedBits&f)){1===h.tag&&(k=nf(c),k.tag=sf,pf(h,k));h.expirationTime<c&&(h.expirationTime=c);k=h.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);k=c;for(var m=h.return;null!==m;){var p=m.alternate;if(m.childExpirationTime<k)m.childExpirationTime=k,null!==p&&p.childExpirationTime<k&&(p.childExpirationTime=k);else if(null!==p&&p.childExpirationTime<k)p.childExpirationTime=k;else break;m=m.return}l.expirationTime<c&&(l.expirationTime=c);break}k=k.next}}else g=10===h.tag?h.type===b.type?\nnull:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Ig(b,c),e=M(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return e=b.type,f=L(e,b.pendingProps),f=L(e.type,f),Kg(a,b,e,f,d,c);case 15:return Lg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===\nd?e:L(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,J(d)?(a=!0,Oe(b)):a=!1,Ig(b,c),vf(b,d,e,c),xf(b,d,e,c),Qg(null,b,d,!0,a,c)}x(\"156\")}var Vg={current:null},Wg=null,Xg=null,Yg=null;function Ug(a,b){var c=a.type._context;G(Vg,c._currentValue,a);c._currentValue=b}function Zg(a){var b=Vg.current;F(Vg,a);a.type._context._currentValue=b}function Ig(a,b){Wg=a;Yg=Xg=null;var c=a.contextDependencies;null!==c&&c.expirationTime>=b&&(qg=!0);a.contextDependencies=null}\nfunction M(a,b){if(Yg!==a&&!1!==b&&0!==b){if(\"number\"!==typeof b||1073741823===b)Yg=a,b=1073741823;b={context:a,observedBits:b,next:null};null===Xg?(null===Wg?x(\"308\"):void 0,Xg=b,Wg.contextDependencies={first:b,expirationTime:0}):Xg=Xg.next=b}return a._currentValue}var $g=0,rf=1,sf=2,ah=3,Pg=!1;function bh(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}\nfunction ch(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function nf(a){return{expirationTime:a,tag:$g,payload:null,callback:null,next:null,nextEffect:null}}function dh(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}\nfunction pf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bh(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bh(a.memoizedState),e=c.updateQueue=bh(c.memoizedState)):d=a.updateQueue=ch(e):null===e&&(e=c.updateQueue=ch(d));null===e||d===e?dh(d,b):null===d.lastUpdate||null===e.lastUpdate?(dh(d,b),dh(e,b)):(dh(d,b),e.lastUpdate=b)}\nfunction eh(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bh(a.memoizedState):fh(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function fh(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=ch(b));return b}\nfunction gh(a,b,c,d,e,f){switch(c.tag){case rf:return a=c.payload,\"function\"===typeof a?a.call(f,d,e):a;case ah:a.effectTag=a.effectTag&-2049|64;case $g:a=c.payload;e=\"function\"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case sf:Pg=!0}return d}\nfunction yf(a,b,c,d,e){Pg=!1;b=fh(a,b);for(var f=b.baseState,g=null,h=0,l=b.firstUpdate,k=f;null!==l;){var m=l.expirationTime;m<e?(null===g&&(g=l,f=k),h<m&&(h=m)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=32,l.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=l:(b.lastEffect.nextEffect=l,b.lastEffect=l)));l=l.next}m=null;for(l=b.firstCapturedUpdate;null!==l;){var p=l.expirationTime;p<e?(null===m&&(m=l,null===g&&(f=k)),h<p&&(h=p)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=\n32,l.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=l:(b.lastCapturedEffect.nextEffect=l,b.lastCapturedEffect=l)));l=l.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=k);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=k}\nfunction hh(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);ih(b.firstEffect,c);b.firstEffect=b.lastEffect=null;ih(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function ih(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;\"function\"!==typeof c?x(\"191\",c):void 0;c.call(d)}a=a.nextEffect}}\nfunction jh(a,b){return{value:a,source:b,stack:jc(b)}}function kh(a){a.effectTag|=4}var lh=void 0,mh=void 0,nh=void 0,oh=void 0;lh=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};mh=function(){};\nnh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;If(N.current);a=null;switch(c){case \"input\":f=vc(g,f);d=vc(g,d);a=[];break;case \"option\":f=$d(g,f);d=$d(g,d);a=[];break;case \"select\":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case \"textarea\":f=be(g,f);d=be(g,d);a=[];break;default:\"function\"!==typeof f.onClick&&\"function\"===typeof d.onClick&&(g.onclick=te)}qe(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if(\"style\"===\nc){var l=f[c];for(g in l)l.hasOwnProperty(g)&&(h||(h={}),h[g]=\"\")}else\"dangerouslySetInnerHTML\"!==c&&\"children\"!==c&&\"suppressContentEditableWarning\"!==c&&\"suppressHydrationWarning\"!==c&&\"autoFocus\"!==c&&(ra.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var k=d[c];l=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&k!==l&&(null!=k||null!=l))if(\"style\"===c)if(l){for(g in l)!l.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(h||(h={}),h[g]=\"\");for(g in k)k.hasOwnProperty(g)&&l[g]!==k[g]&&(h||\n(h={}),h[g]=k[g])}else h||(a||(a=[]),a.push(c,h)),h=k;else\"dangerouslySetInnerHTML\"===c?(k=k?k.__html:void 0,l=l?l.__html:void 0,null!=k&&l!==k&&(a=a||[]).push(c,\"\"+k)):\"children\"===c?l===k||\"string\"!==typeof k&&\"number\"!==typeof k||(a=a||[]).push(c,\"\"+k):\"suppressContentEditableWarning\"!==c&&\"suppressHydrationWarning\"!==c&&(ra.hasOwnProperty(c)?(null!=k&&se(e,c),a||l===k||(a=[])):(a=a||[]).push(c,k))}h&&(a=a||[]).push(\"style\",h);e=a;(b.updateQueue=e)&&kh(b)}};oh=function(a,b,c,d){c!==d&&kh(b)};\nvar ph=\"function\"===typeof WeakSet?WeakSet:Set;function qh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=jc(c));null!==c&&ic(c.type);b=b.value;null!==a&&1===a.tag&&ic(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function rh(a){var b=a.ref;if(null!==b)if(\"function\"===typeof b)try{b(null)}catch(c){sh(a,c)}else b.current=null}\nfunction th(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Nf){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==Nf&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}\nfunction uh(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display=\"none\";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty(\"display\")?e.display:null;d.style.display=ne(\"display\",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?\"\":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||\nc.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}\nfunction vh(a){\"function\"===typeof Re&&Re(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(void 0!==d){var e=a;try{d()}catch(f){sh(e,f)}}c=c.next}while(c!==b)}break;case 1:rh(a);b=a.stateNode;if(\"function\"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){sh(a,f)}break;case 5:rh(a);break;case 4:wh(a)}}\nfunction xh(a){return 5===a.tag||3===a.tag||4===a.tag}\nfunction yh(a){a:{for(var b=a.return;null!==b;){if(xh(b)){var c=b;break a}b=b.return}x(\"160\");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:x(\"161\")}c.effectTag&16&&(ke(b,\"\"),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||xh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&\n2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=te)):b.appendChild(e.stateNode);\nelse if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}\nfunction wh(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?x(\"160\"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(vh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?\n(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag){if(null!==b.child){d=b.stateNode.containerInfo;e=!0;b.child.return=b;b=b.child;continue}}else if(vh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}\nfunction zh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:th(Pf,Qf,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Ce(c,f,e,a,d,b)}break;case 6:null===b.stateNode?x(\"162\"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=lf()));null!==a&&uh(a,d);c=\nb.updateQueue;if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new ph);c.forEach(function(a){var c=Ah.bind(null,b,a);g.has(a)||(g.add(a),a.then(c,c))})}break;case 17:break;default:x(\"163\")}}var Bh=\"function\"===typeof WeakMap?WeakMap:Map;function Ch(a,b,c){c=nf(c);c.tag=ah;c.payload={element:null};var d=b.value;c.callback=function(){Dh(d);qh(a,b)};return c}\nfunction Eh(a,b,c){c=nf(c);c.tag=ah;var d=a.type.getDerivedStateFromError;if(\"function\"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&\"function\"===typeof f.componentDidCatch&&(c.callback=function(){\"function\"!==typeof d&&(null===Fh?Fh=new Set([this]):Fh.add(this));var c=b.value,e=b.stack;qh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:\"\"})});return c}\nfunction Gh(a){switch(a.tag){case 1:J(a.type)&&Ke(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return Kf(a),Le(a),b=a.effectTag,0!==(b&64)?x(\"285\"):void 0,a.effectTag=b&-2049|64,a;case 5:return Mf(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 4:return Kf(a),null;case 10:return Zg(a),null;default:return null}}\nvar Hh=Tb.ReactCurrentDispatcher,Ih=Tb.ReactCurrentOwner,Jh=1073741822,Kh=!1,T=null,Lh=null,U=0,Mh=-1,Nh=!1,V=null,Oh=!1,Ph=null,Qh=null,Rh=null,Fh=null;function Sh(){if(null!==T)for(var a=T.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ke(b);break;case 3:Kf(b);Le(b);break;case 5:Mf(b);break;case 4:Kf(b);break;case 10:Zg(b)}a=a.return}Lh=null;U=0;Mh=-1;Nh=!1;T=null}\nfunction Th(){for(;null!==V;){var a=V.effectTag;a&16&&ke(V.stateNode,\"\");if(a&128){var b=V.alternate;null!==b&&(b=b.ref,null!==b&&(\"function\"===typeof b?b(null):b.current=null))}switch(a&14){case 2:yh(V);V.effectTag&=-3;break;case 6:yh(V);V.effectTag&=-3;zh(V.alternate,V);break;case 4:zh(V.alternate,V);break;case 8:a=V,wh(a),a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null,a=a.alternate,null!==a&&(a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null)}V=V.nextEffect}}\nfunction Uh(){for(;null!==V;){if(V.effectTag&256)a:{var a=V.alternate,b=V;switch(b.tag){case 0:case 11:case 15:th(Of,Nf,b);break a;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:L(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break a;case 3:case 5:case 6:case 4:case 17:break a;default:x(\"163\")}}V=V.nextEffect}}\nfunction Vh(a,b){for(;null!==V;){var c=V.effectTag;if(c&36){var d=V.alternate,e=V,f=b;switch(e.tag){case 0:case 11:case 15:th(Rf,Sf,e);break;case 1:var g=e.stateNode;if(e.effectTag&4)if(null===d)g.componentDidMount();else{var h=e.elementType===e.type?d.memoizedProps:L(e.type,d.memoizedProps);g.componentDidUpdate(h,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate)}d=e.updateQueue;null!==d&&hh(e,d,g,f);break;case 3:d=e.updateQueue;if(null!==d){g=null;if(null!==e.child)switch(e.child.tag){case 5:g=\ne.child.stateNode;break;case 1:g=e.child.stateNode}hh(e,d,g,f)}break;case 5:f=e.stateNode;null===d&&e.effectTag&4&&we(e.type,e.memoizedProps)&&f.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:x(\"163\")}}c&128&&(e=V.ref,null!==e&&(f=V.stateNode,\"function\"===typeof e?e(f):e.current=f));c&512&&(Ph=a);V=V.nextEffect}}\nfunction Wh(a,b){Rh=Qh=Ph=null;var c=W;W=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;th(Uf,Nf,f);th(Nf,Tf,f)}catch(g){d=!0,e=g}d&&sh(b,e)}b=b.nextEffect}while(null!==b);W=c;c=a.expirationTime;0!==c&&Xh(a,c);X||W||Yh(1073741823,!1)}function of(){null!==Qh&&Be(Qh);null!==Rh&&Rh()}\nfunction Zh(a,b){Oh=Kh=!0;a.current===b?x(\"177\"):void 0;var c=a.pendingCommitExpirationTime;0===c?x(\"261\"):void 0;a.pendingCommitExpirationTime=0;var d=b.expirationTime,e=b.childExpirationTime;ef(a,e>d?e:d);Ih.current=null;d=void 0;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ue=Bd;ve=Pd();Bd=!1;for(V=d;null!==V;){e=!1;var f=void 0;try{Uh()}catch(h){e=!0,f=h}e&&(null===V?x(\"178\"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}for(V=d;null!==V;){e=!1;\nf=void 0;try{Th()}catch(h){e=!0,f=h}e&&(null===V?x(\"178\"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}Qd(ve);ve=null;Bd=!!ue;ue=null;a.current=b;for(V=d;null!==V;){e=!1;f=void 0;try{Vh(a,c)}catch(h){e=!0,f=h}e&&(null===V?x(\"178\"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}if(null!==d&&null!==Ph){var g=Wh.bind(null,a,d);Qh=r.unstable_runWithPriority(r.unstable_NormalPriority,function(){return Ae(g)});Rh=g}Kh=Oh=!1;\"function\"===typeof Qe&&Qe(b.stateNode);c=b.expirationTime;b=b.childExpirationTime;b=\nb>c?b:c;0===b&&(Fh=null);$h(a,b)}\nfunction ai(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){T=a;a:{var e=b;b=a;var f=U;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:J(b.type)&&Ke(b);break;case 3:Kf(b);Le(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)Eg(b),b.effectTag&=-3;mh(b);break;case 5:Mf(b);var h=If(Hf.current);f=b.type;if(null!==e&&null!=b.stateNode)nh(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=\n128);else if(g){var l=If(N.current);if(Eg(b)){g=b;e=g.stateNode;var k=g.type,m=g.memoizedProps,p=h;e[Fa]=g;e[Ga]=m;f=void 0;h=k;switch(h){case \"iframe\":case \"object\":E(\"load\",e);break;case \"video\":case \"audio\":for(k=0;k<ab.length;k++)E(ab[k],e);break;case \"source\":E(\"error\",e);break;case \"img\":case \"image\":case \"link\":E(\"error\",e);E(\"load\",e);break;case \"form\":E(\"reset\",e);E(\"submit\",e);break;case \"details\":E(\"toggle\",e);break;case \"input\":wc(e,m);E(\"invalid\",e);se(p,\"onChange\");break;case \"select\":e._wrapperState=\n{wasMultiple:!!m.multiple};E(\"invalid\",e);se(p,\"onChange\");break;case \"textarea\":ce(e,m),E(\"invalid\",e),se(p,\"onChange\")}qe(h,m);k=null;for(f in m)m.hasOwnProperty(f)&&(l=m[f],\"children\"===f?\"string\"===typeof l?e.textContent!==l&&(k=[\"children\",l]):\"number\"===typeof l&&e.textContent!==\"\"+l&&(k=[\"children\",\"\"+l]):ra.hasOwnProperty(f)&&null!=l&&se(p,f));switch(h){case \"input\":Rb(e);Ac(e,m,!0);break;case \"textarea\":Rb(e);ee(e,m);break;case \"select\":case \"option\":break;default:\"function\"===typeof m.onClick&&\n(e.onclick=te)}f=k;g.updateQueue=f;g=null!==f?!0:!1;g&&kh(b)}else{m=b;e=f;p=g;k=9===h.nodeType?h:h.ownerDocument;l===fe.html&&(l=ge(e));l===fe.html?\"script\"===e?(e=k.createElement(\"div\"),e.innerHTML=\"<script>\\x3c/script>\",k=e.removeChild(e.firstChild)):\"string\"===typeof p.is?k=k.createElement(e,{is:p.is}):(k=k.createElement(e),\"select\"===e&&p.multiple&&(k.multiple=!0)):k=k.createElementNS(l,e);e=k;e[Fa]=m;e[Ga]=g;lh(e,b,!1,!1);p=e;k=f;m=g;var t=h,A=re(k,m);switch(k){case \"iframe\":case \"object\":E(\"load\",\np);h=m;break;case \"video\":case \"audio\":for(h=0;h<ab.length;h++)E(ab[h],p);h=m;break;case \"source\":E(\"error\",p);h=m;break;case \"img\":case \"image\":case \"link\":E(\"error\",p);E(\"load\",p);h=m;break;case \"form\":E(\"reset\",p);E(\"submit\",p);h=m;break;case \"details\":E(\"toggle\",p);h=m;break;case \"input\":wc(p,m);h=vc(p,m);E(\"invalid\",p);se(t,\"onChange\");break;case \"option\":h=$d(p,m);break;case \"select\":p._wrapperState={wasMultiple:!!m.multiple};h=n({},m,{value:void 0});E(\"invalid\",p);se(t,\"onChange\");break;case \"textarea\":ce(p,\nm);h=be(p,m);E(\"invalid\",p);se(t,\"onChange\");break;default:h=m}qe(k,h);l=void 0;var v=k,R=p,u=h;for(l in u)if(u.hasOwnProperty(l)){var q=u[l];\"style\"===l?oe(R,q):\"dangerouslySetInnerHTML\"===l?(q=q?q.__html:void 0,null!=q&&je(R,q)):\"children\"===l?\"string\"===typeof q?(\"textarea\"!==v||\"\"!==q)&&ke(R,q):\"number\"===typeof q&&ke(R,\"\"+q):\"suppressContentEditableWarning\"!==l&&\"suppressHydrationWarning\"!==l&&\"autoFocus\"!==l&&(ra.hasOwnProperty(l)?null!=q&&se(t,l):null!=q&&tc(R,l,q,A))}switch(k){case \"input\":Rb(p);\nAc(p,m,!1);break;case \"textarea\":Rb(p);ee(p,m);break;case \"option\":null!=m.value&&p.setAttribute(\"value\",\"\"+uc(m.value));break;case \"select\":h=p;h.multiple=!!m.multiple;p=m.value;null!=p?ae(h,!!m.multiple,p,!1):null!=m.defaultValue&&ae(h,!!m.multiple,m.defaultValue,!0);break;default:\"function\"===typeof h.onClick&&(p.onclick=te)}(g=we(f,g))&&kh(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?x(\"166\"):void 0;break;case 6:e&&null!=b.stateNode?oh(e,b,e.memoizedProps,g):(\"string\"!==\ntypeof g&&(null===b.stateNode?x(\"166\"):void 0),e=If(Hf.current),If(N.current),Eg(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[Fa]=g,(g=f.nodeValue!==e)&&kh(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[Fa]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;T=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=\nb.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Kf(b);mh(b);break;case 10:Zg(b);break;case 9:break;case 14:break;case 17:J(b.type)&&Ke(b);break;case 18:break;default:x(\"156\")}T=null}b=a;if(1===U||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g}if(null!==T)return T;null!==c&&0===(c.effectTag&1024)&&(null===c.firstEffect&&\n(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Gh(a,U);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}\nfunction bi(a){var b=Tg(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=ai(a));Ih.current=null;return b}\nfunction ci(a,b){Kh?x(\"243\"):void 0;of();Kh=!0;var c=Hh.current;Hh.current=kg;var d=a.nextExpirationTimeToWorkOn;if(d!==U||a!==Lh||null===T)Sh(),Lh=a,U=d,T=Xe(Lh.current,null,U),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==T&&!di();)T=bi(T);else for(;null!==T;)T=bi(T)}catch(u){if(Yg=Xg=Wg=null,lg(),null===T)e=!0,Dh(u);else{null===T?x(\"271\"):void 0;var f=T,g=f.return;if(null===g)e=!0,Dh(u);else{a:{var h=a,l=g,k=f,m=u;g=U;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==\nm&&\"object\"===typeof m&&\"function\"===typeof m.then){var p=m;m=l;var t=-1,A=-1;do{if(13===m.tag){var v=m.alternate;if(null!==v&&(v=v.memoizedState,null!==v)){A=10*(1073741822-v.timedOutAt);break}v=m.pendingProps.maxDuration;if(\"number\"===typeof v)if(0>=v)t=0;else if(-1===t||v<t)t=v}m=m.return}while(null!==m);m=l;do{if(v=13===m.tag)v=void 0===m.memoizedProps.fallback?!1:null===m.memoizedState;if(v){l=m.updateQueue;null===l?(l=new Set,l.add(p),m.updateQueue=l):l.add(p);if(0===(m.mode&1)){m.effectTag|=\n64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(g=nf(1073741823),g.tag=sf,pf(k,g)));k.expirationTime=1073741823;break a}k=h;l=g;var R=k.pingCache;null===R?(R=k.pingCache=new Bh,v=new Set,R.set(p,v)):(v=R.get(p),void 0===v&&(v=new Set,R.set(p,v)));v.has(l)||(v.add(l),k=ei.bind(null,k,p,l),p.then(k,k));-1===t?h=1073741823:(-1===A&&(A=10*(1073741822-gf(h,g))-5E3),h=A+t);0<=h&&Mh<h&&(Mh=h);m.effectTag|=2048;m.expirationTime=g;break a}m=m.return}while(null!==m);m=Error((ic(k.type)||\"A React component\")+\n\" suspended while rendering, but no fallback UI was specified.\\n\\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.\"+jc(k))}Nh=!0;m=jh(m,k);h=l;do{switch(h.tag){case 3:h.effectTag|=2048;h.expirationTime=g;g=Ch(h,m,g);eh(h,g);break a;case 1:if(t=m,A=h.type,k=h.stateNode,0===(h.effectTag&64)&&(\"function\"===typeof A.getDerivedStateFromError||null!==k&&\"function\"===typeof k.componentDidCatch&&(null===Fh||!Fh.has(k)))){h.effectTag|=2048;\nh.expirationTime=g;g=Eh(h,t,g);eh(h,g);break a}}h=h.return}while(null!==h)}T=ai(f);continue}}}break}while(1);Kh=!1;Hh.current=c;Yg=Xg=Wg=null;lg();if(e)Lh=null,a.finishedWork=null;else if(null!==T)a.finishedWork=null;else{c=a.current.alternate;null===c?x(\"281\"):void 0;Lh=null;if(Nh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<d||0!==f&&f<d||0!==g&&g<d){ff(a,d);fi(a,c,d,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;\nb=a.expirationTime=1073741823;fi(a,c,d,b,-1);return}}b&&-1!==Mh?(ff(a,d),b=10*(1073741822-gf(a,d)),b<Mh&&(Mh=b),b=10*(1073741822-lf()),b=Mh-b,fi(a,c,d,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=d,a.finishedWork=c)}}\nfunction sh(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if(\"function\"===typeof c.type.getDerivedStateFromError||\"function\"===typeof d.componentDidCatch&&(null===Fh||!Fh.has(d))){a=jh(b,a);a=Eh(c,a,1073741823);pf(c,a);qf(c,1073741823);return}break;case 3:a=jh(b,a);a=Ch(c,a,1073741823);pf(c,a);qf(c,1073741823);return}c=c.return}3===a.tag&&(c=jh(b,a),c=Ch(a,c,1073741823),pf(a,c),qf(a,1073741823))}\nfunction mf(a,b){var c=r.unstable_getCurrentPriorityLevel(),d=void 0;if(0===(b.mode&1))d=1073741823;else if(Kh&&!Oh)d=U;else{switch(c){case r.unstable_ImmediatePriority:d=1073741823;break;case r.unstable_UserBlockingPriority:d=1073741822-10*(((1073741822-a+15)/10|0)+1);break;case r.unstable_NormalPriority:d=1073741822-25*(((1073741822-a+500)/25|0)+1);break;case r.unstable_LowPriority:case r.unstable_IdlePriority:d=1;break;default:x(\"313\")}null!==Lh&&d===U&&--d}c===r.unstable_UserBlockingPriority&&\n(0===gi||d<gi)&&(gi=d);return d}function ei(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==Lh&&U===c)Lh=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=c;df(c,a);c=a.expirationTime;0!==c&&Xh(a,c)}}function Ah(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=lf();b=mf(b,a);a=hi(a,b);null!==a&&(cf(a,b),b=a.expirationTime,0!==b&&Xh(a,b))}\nfunction hi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return e}\nfunction qf(a,b){a=hi(a,b);null!==a&&(!Kh&&0!==U&&b>U&&Sh(),cf(a,b),Kh&&!Oh&&Lh===a||Xh(a,a.expirationTime),ii>ji&&(ii=0,x(\"185\")))}function ki(a,b,c,d,e){return r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){return a(b,c,d,e)})}var li=null,Y=null,mi=0,ni=void 0,W=!1,oi=null,Z=0,gi=0,pi=!1,qi=null,X=!1,ri=!1,si=null,ti=r.unstable_now(),ui=1073741822-(ti/10|0),vi=ui,ji=50,ii=0,wi=null;function xi(){ui=1073741822-((r.unstable_now()-ti)/10|0)}\nfunction yi(a,b){if(0!==mi){if(b<mi)return;null!==ni&&r.unstable_cancelCallback(ni)}mi=b;a=r.unstable_now()-ti;ni=r.unstable_scheduleCallback(zi,{timeout:10*(1073741822-b)-a})}function fi(a,b,c,d,e){a.expirationTime=d;0!==e||di()?0<e&&(a.timeoutHandle=ye(Ai.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Ai(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;xi();vi=ui;Bi(a,c)}function $h(a,b){a.expirationTime=b;a.finishedWork=null}\nfunction lf(){if(W)return vi;Ci();if(0===Z||1===Z)xi(),vi=ui;return vi}function Xh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===Y?(li=Y=a,a.nextScheduledRoot=a):(Y=Y.nextScheduledRoot=a,Y.nextScheduledRoot=li)):b>a.expirationTime&&(a.expirationTime=b);W||(X?ri&&(oi=a,Z=1073741823,Di(a,1073741823,!1)):1073741823===b?Yh(1073741823,!1):yi(a,b))}\nfunction Ci(){var a=0,b=null;if(null!==Y)for(var c=Y,d=li;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===Y?x(\"244\"):void 0;if(d===d.nextScheduledRoot){li=Y=d.nextScheduledRoot=null;break}else if(d===li)li=e=d.nextScheduledRoot,Y.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===Y){Y=c;Y.nextScheduledRoot=li;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{e>a&&(a=e,b=d);if(d===Y)break;if(1073741823===\na)break;c=d;d=d.nextScheduledRoot}}oi=b;Z=a}var Ei=!1;function di(){return Ei?!0:r.unstable_shouldYield()?Ei=!0:!1}function zi(){try{if(!di()&&null!==li){xi();var a=li;do{var b=a.expirationTime;0!==b&&ui<=b&&(a.nextExpirationTimeToWorkOn=ui);a=a.nextScheduledRoot}while(a!==li)}Yh(0,!0)}finally{Ei=!1}}\nfunction Yh(a,b){Ci();if(b)for(xi(),vi=ui;null!==oi&&0!==Z&&a<=Z&&!(Ei&&ui>Z);)Di(oi,Z,ui>Z),Ci(),xi(),vi=ui;else for(;null!==oi&&0!==Z&&a<=Z;)Di(oi,Z,!1),Ci();b&&(mi=0,ni=null);0!==Z&&yi(oi,Z);ii=0;wi=null;if(null!==si)for(a=si,si=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){pi||(pi=!0,qi=d)}}if(pi)throw a=qi,qi=null,pi=!1,a;}function Bi(a,b){W?x(\"253\"):void 0;oi=a;Z=b;Di(a,b,!1);Yh(1073741823,!1)}\nfunction Di(a,b,c){W?x(\"245\"):void 0;W=!0;if(c){var d=a.finishedWork;null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&(di()?a.finishedWork=d:Fi(a,d,b)))}else d=a.finishedWork,null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&Fi(a,d,b));W=!1}\nfunction Fi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===si?si=[d]:si.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===wi?ii++:(wi=a,ii=0);r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){Zh(a,b)})}function Dh(a){null===oi?x(\"246\"):void 0;oi.expirationTime=0;pi||(pi=!0,qi=a)}function Gi(a,b){var c=X;X=!0;try{return a(b)}finally{(X=c)||W||Yh(1073741823,!1)}}\nfunction Hi(a,b){if(X&&!ri){ri=!0;try{return a(b)}finally{ri=!1}}return a(b)}function Ii(a,b,c){X||W||0===gi||(Yh(gi,!1),gi=0);var d=X;X=!0;try{return r.unstable_runWithPriority(r.unstable_UserBlockingPriority,function(){return a(b,c)})}finally{(X=d)||W||Yh(1073741823,!1)}}\nfunction Ji(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===ed(c)&&1===c.tag?void 0:x(\"170\");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(J(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);x(\"171\");g=void 0}if(1===c.tag){var h=c.type;if(J(h)){c=Ne(c,h,g);break a}}c=g}else c=He;null===b.context?b.context=c:b.pendingContext=c;b=e;e=nf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);\nof();pf(f,e);qf(f,d);return d}function Ki(a,b,c,d){var e=b.current,f=lf();e=mf(f,e);return Ji(a,b,c,e,d)}function Li(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Mi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Wb,key:null==d?null:\"\"+d,children:a,containerInfo:b,implementation:c}}\nAb=function(a,b,c){switch(b){case \"input\":yc(a,c);b=c.name;if(\"radio\"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll(\"input[name=\"+JSON.stringify(\"\"+b)+'][type=\"radio\"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);e?void 0:x(\"90\");Sb(d);yc(d,e)}}}break;case \"textarea\":de(a,c);break;case \"select\":b=c.value,null!=b&&ae(a,!!c.multiple,b,!1)}};\nfunction Ni(a){var b=1073741822-25*(((1073741822-lf()+500)/25|0)+1);b>=Jh&&(b=Jh-1);this._expirationTime=Jh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Ni.prototype.render=function(a){this._defer?void 0:x(\"250\");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Oi;Ji(a,b,null,c,d._onCommit);return d};\nNi.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};\nNi.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:x(\"251\");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?x(\"251\"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Bi(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=\nnull,this._defer=!1};Ni.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Oi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Oi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};\nOi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];\"function\"!==typeof c?x(\"191\",c):void 0;c()}}};\nfunction Pi(a,b,c){b=K(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}\nPi.prototype.render=function(a,b){var c=this._internalRoot,d=new Oi;b=void 0===b?null:b;null!==b&&d.then(b);Ki(a,c,null,d._onCommit);return d};Pi.prototype.unmount=function(a){var b=this._internalRoot,c=new Oi;a=void 0===a?null:a;null!==a&&c.then(a);Ki(null,b,null,c._onCommit);return c};Pi.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Oi;c=void 0===c?null:c;null!==c&&e.then(c);Ki(b,d,a,e._onCommit);return e};\nPi.prototype.createBatch=function(){var a=new Ni(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Qi(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||\" react-mount-point-unstable \"!==a.nodeValue))}Gb=Gi;Hb=Ii;Ib=function(){W||0===gi||(Yh(gi,!1),gi=0)};\nfunction Ri(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute(\"data-reactroot\")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Pi(a,!1,b)}\nfunction Si(a,b,c,d,e){var f=c._reactRootContainer;if(f){if(\"function\"===typeof e){var g=e;e=function(){var a=Li(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Ri(c,d);if(\"function\"===typeof e){var h=e;e=function(){var a=Li(f._internalRoot);h.call(a)}}Hi(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Li(f._internalRoot)}\nfunction Ti(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Qi(b)?void 0:x(\"200\");return Mi(a,b,null,c)}\nvar Vi={createPortal:Ti,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&(\"function\"===typeof a.render?x(\"188\"):x(\"268\",Object.keys(a)));a=hd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){Qi(b)?void 0:x(\"200\");return Si(null,a,b,!0,c)},render:function(a,b,c){Qi(b)?void 0:x(\"200\");return Si(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){Qi(c)?void 0:x(\"200\");null==a||void 0===a._reactInternalFiber?\nx(\"38\"):void 0;return Si(a,b,c,!1,d)},unmountComponentAtNode:function(a){Qi(a)?void 0:x(\"40\");return a._reactRootContainer?(Hi(function(){Si(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Ti.apply(void 0,arguments)},unstable_batchedUpdates:Gi,unstable_interactiveUpdates:Ii,flushSync:function(a,b){W?x(\"187\"):void 0;var c=X;X=!0;try{return ki(a,b)}finally{X=c,Yh(1073741823,!1)}},unstable_createRoot:Ui,unstable_flushControlled:function(a){var b=\nX;X=!0;try{ki(a)}finally{(X=b)||W||Yh(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ba.injectEventPluginsByName,pa,Qa,function(a){ya(a,Pa)},Eb,Fb,Dd,Da]}};function Ui(a,b){Qi(a)?void 0:x(\"299\",\"unstable_createRoot\");return new Pi(a,!0,null!=b&&!0===b.hydrate)}\n(function(a){var b=a.findFiberByHostInstance;return Te(n({},a,{overrideProps:null,currentDispatcherRef:Tb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ha,bundleType:0,version:\"16.8.4\",rendererPackageName:\"react-dom\"});var Wi={default:Vi},Xi=Wi&&Vi||Wi;module.exports=Xi.default||Xi;\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/react-dom/cjs/react-dom.production.min.js?");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction checkDCE() {\n  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */\n  if (\n    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||\n    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'\n  ) {\n    return;\n  }\n  if (false) {}\n  try {\n    // Verify that the code above has been dead code eliminated (DCE'd).\n    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);\n  } catch (err) {\n    // DevTools shouldn't crash React, no matter what.\n    // We should still report in case we break this code.\n    console.error(err);\n  }\n}\n\nif (true) {\n  // DCE check should happen before ReactDOM bundle executes so that\n  // DevTools can report bad minification during injection.\n  checkDCE();\n  module.exports = __webpack_require__(/*! ./cjs/react-dom.production.min.js */ \"./node_modules/react-dom/cjs/react-dom.production.min.js\");\n} else {}\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/react-dom/index.js?");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.production.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.production.min.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/** @license React v16.8.4\n * react-is.production.min.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nObject.defineProperty(exports,\"__esModule\",{value:!0});\nvar b=\"function\"===typeof Symbol&&Symbol.for,c=b?Symbol.for(\"react.element\"):60103,d=b?Symbol.for(\"react.portal\"):60106,e=b?Symbol.for(\"react.fragment\"):60107,f=b?Symbol.for(\"react.strict_mode\"):60108,g=b?Symbol.for(\"react.profiler\"):60114,h=b?Symbol.for(\"react.provider\"):60109,k=b?Symbol.for(\"react.context\"):60110,l=b?Symbol.for(\"react.async_mode\"):60111,m=b?Symbol.for(\"react.concurrent_mode\"):60111,n=b?Symbol.for(\"react.forward_ref\"):60112,p=b?Symbol.for(\"react.suspense\"):60113,q=b?Symbol.for(\"react.memo\"):\n60115,r=b?Symbol.for(\"react.lazy\"):60116;function t(a){if(\"object\"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;\nexports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return\"string\"===typeof a||\"function\"===typeof a||a===e||a===m||a===g||a===f||a===p||\"object\"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};\nexports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return\"object\"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};\nexports.isSuspense=function(a){return t(a)===p};\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/react-is/cjs/react-is.production.min.js?");

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif (true) {\n  module.exports = __webpack_require__(/*! ./cjs/react-is.production.min.js */ \"./node_modules/react-is/cjs/react-is.production.min.js\");\n} else {}\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/react-is/index.js?");

/***/ }),

/***/ "./node_modules/recompose/isClassComponent.js":
/*!****************************************************!*\
  !*** ./node_modules/recompose/isClassComponent.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar isClassComponent = function isClassComponent(Component) {\n  return Boolean(Component && Component.prototype && typeof Component.prototype.render === 'function');\n};\n\nvar _default = isClassComponent;\nexports.default = _default;\n\n//# sourceURL=webpack://ReactDnD/./node_modules/recompose/isClassComponent.js?");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStore\", function() { return createStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"combineReducers\", function() { return combineReducers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindActionCreators\", function() { return bindActionCreators; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyMiddleware\", function() { return applyMiddleware; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return compose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__DO_NOT_USE__ActionTypes\", function() { return ActionTypes; });\n/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\");\n\n\n/**\n * These are private action types reserved by Redux.\n * For any unknown actions, you must return the current state.\n * If the current state is undefined, you must return the initial state.\n * Do not reference these action types directly in your code.\n */\nvar randomString = function randomString() {\n  return Math.random().toString(36).substring(7).split('').join('.');\n};\n\nvar ActionTypes = {\n  INIT: \"@@redux/INIT\" + randomString(),\n  REPLACE: \"@@redux/REPLACE\" + randomString(),\n  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {\n    return \"@@redux/PROBE_UNKNOWN_ACTION\" + randomString();\n  }\n};\n\n/**\n * @param {any} obj The object to inspect.\n * @returns {boolean} True if the argument appears to be a plain object.\n */\nfunction isPlainObject(obj) {\n  if (typeof obj !== 'object' || obj === null) return false;\n  var proto = obj;\n\n  while (Object.getPrototypeOf(proto) !== null) {\n    proto = Object.getPrototypeOf(proto);\n  }\n\n  return Object.getPrototypeOf(obj) === proto;\n}\n\n/**\n * Creates a Redux store that holds the state tree.\n * The only way to change the data in the store is to call `dispatch()` on it.\n *\n * There should only be a single store in your app. To specify how different\n * parts of the state tree respond to actions, you may combine several reducers\n * into a single reducer function by using `combineReducers`.\n *\n * @param {Function} reducer A function that returns the next state tree, given\n * the current state tree and the action to handle.\n *\n * @param {any} [preloadedState] The initial state. You may optionally specify it\n * to hydrate the state from the server in universal apps, or to restore a\n * previously serialized user session.\n * If you use `combineReducers` to produce the root reducer function, this must be\n * an object with the same shape as `combineReducers` keys.\n *\n * @param {Function} [enhancer] The store enhancer. You may optionally specify it\n * to enhance the store with third-party capabilities such as middleware,\n * time travel, persistence, etc. The only store enhancer that ships with Redux\n * is `applyMiddleware()`.\n *\n * @returns {Store} A Redux store that lets you read the state, dispatch actions\n * and subscribe to changes.\n */\n\nfunction createStore(reducer, preloadedState, enhancer) {\n  var _ref2;\n\n  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {\n    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');\n  }\n\n  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {\n    enhancer = preloadedState;\n    preloadedState = undefined;\n  }\n\n  if (typeof enhancer !== 'undefined') {\n    if (typeof enhancer !== 'function') {\n      throw new Error('Expected the enhancer to be a function.');\n    }\n\n    return enhancer(createStore)(reducer, preloadedState);\n  }\n\n  if (typeof reducer !== 'function') {\n    throw new Error('Expected the reducer to be a function.');\n  }\n\n  var currentReducer = reducer;\n  var currentState = preloadedState;\n  var currentListeners = [];\n  var nextListeners = currentListeners;\n  var isDispatching = false;\n\n  function ensureCanMutateNextListeners() {\n    if (nextListeners === currentListeners) {\n      nextListeners = currentListeners.slice();\n    }\n  }\n  /**\n   * Reads the state tree managed by the store.\n   *\n   * @returns {any} The current state tree of your application.\n   */\n\n\n  function getState() {\n    if (isDispatching) {\n      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');\n    }\n\n    return currentState;\n  }\n  /**\n   * Adds a change listener. It will be called any time an action is dispatched,\n   * and some part of the state tree may potentially have changed. You may then\n   * call `getState()` to read the current state tree inside the callback.\n   *\n   * You may call `dispatch()` from a change listener, with the following\n   * caveats:\n   *\n   * 1. The subscriptions are snapshotted just before every `dispatch()` call.\n   * If you subscribe or unsubscribe while the listeners are being invoked, this\n   * will not have any effect on the `dispatch()` that is currently in progress.\n   * However, the next `dispatch()` call, whether nested or not, will use a more\n   * recent snapshot of the subscription list.\n   *\n   * 2. The listener should not expect to see all state changes, as the state\n   * might have been updated multiple times during a nested `dispatch()` before\n   * the listener is called. It is, however, guaranteed that all subscribers\n   * registered before the `dispatch()` started will be called with the latest\n   * state by the time it exits.\n   *\n   * @param {Function} listener A callback to be invoked on every dispatch.\n   * @returns {Function} A function to remove this change listener.\n   */\n\n\n  function subscribe(listener) {\n    if (typeof listener !== 'function') {\n      throw new Error('Expected the listener to be a function.');\n    }\n\n    if (isDispatching) {\n      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');\n    }\n\n    var isSubscribed = true;\n    ensureCanMutateNextListeners();\n    nextListeners.push(listener);\n    return function unsubscribe() {\n      if (!isSubscribed) {\n        return;\n      }\n\n      if (isDispatching) {\n        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');\n      }\n\n      isSubscribed = false;\n      ensureCanMutateNextListeners();\n      var index = nextListeners.indexOf(listener);\n      nextListeners.splice(index, 1);\n    };\n  }\n  /**\n   * Dispatches an action. It is the only way to trigger a state change.\n   *\n   * The `reducer` function, used to create the store, will be called with the\n   * current state tree and the given `action`. Its return value will\n   * be considered the **next** state of the tree, and the change listeners\n   * will be notified.\n   *\n   * The base implementation only supports plain object actions. If you want to\n   * dispatch a Promise, an Observable, a thunk, or something else, you need to\n   * wrap your store creating function into the corresponding middleware. For\n   * example, see the documentation for the `redux-thunk` package. Even the\n   * middleware will eventually dispatch plain object actions using this method.\n   *\n   * @param {Object} action A plain object representing “what changed”. It is\n   * a good idea to keep actions serializable so you can record and replay user\n   * sessions, or use the time travelling `redux-devtools`. An action must have\n   * a `type` property which may not be `undefined`. It is a good idea to use\n   * string constants for action types.\n   *\n   * @returns {Object} For convenience, the same action object you dispatched.\n   *\n   * Note that, if you use a custom middleware, it may wrap `dispatch()` to\n   * return something else (for example, a Promise you can await).\n   */\n\n\n  function dispatch(action) {\n    if (!isPlainObject(action)) {\n      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');\n    }\n\n    if (typeof action.type === 'undefined') {\n      throw new Error('Actions may not have an undefined \"type\" property. ' + 'Have you misspelled a constant?');\n    }\n\n    if (isDispatching) {\n      throw new Error('Reducers may not dispatch actions.');\n    }\n\n    try {\n      isDispatching = true;\n      currentState = currentReducer(currentState, action);\n    } finally {\n      isDispatching = false;\n    }\n\n    var listeners = currentListeners = nextListeners;\n\n    for (var i = 0; i < listeners.length; i++) {\n      var listener = listeners[i];\n      listener();\n    }\n\n    return action;\n  }\n  /**\n   * Replaces the reducer currently used by the store to calculate the state.\n   *\n   * You might need this if your app implements code splitting and you want to\n   * load some of the reducers dynamically. You might also need this if you\n   * implement a hot reloading mechanism for Redux.\n   *\n   * @param {Function} nextReducer The reducer for the store to use instead.\n   * @returns {void}\n   */\n\n\n  function replaceReducer(nextReducer) {\n    if (typeof nextReducer !== 'function') {\n      throw new Error('Expected the nextReducer to be a function.');\n    }\n\n    currentReducer = nextReducer;\n    dispatch({\n      type: ActionTypes.REPLACE\n    });\n  }\n  /**\n   * Interoperability point for observable/reactive libraries.\n   * @returns {observable} A minimal observable of state changes.\n   * For more information, see the observable proposal:\n   * https://github.com/tc39/proposal-observable\n   */\n\n\n  function observable() {\n    var _ref;\n\n    var outerSubscribe = subscribe;\n    return _ref = {\n      /**\n       * The minimal observable subscription method.\n       * @param {Object} observer Any object that can be used as an observer.\n       * The observer object should have a `next` method.\n       * @returns {subscription} An object with an `unsubscribe` method that can\n       * be used to unsubscribe the observable from the store, and prevent further\n       * emission of values from the observable.\n       */\n      subscribe: function subscribe(observer) {\n        if (typeof observer !== 'object' || observer === null) {\n          throw new TypeError('Expected the observer to be an object.');\n        }\n\n        function observeState() {\n          if (observer.next) {\n            observer.next(getState());\n          }\n        }\n\n        observeState();\n        var unsubscribe = outerSubscribe(observeState);\n        return {\n          unsubscribe: unsubscribe\n        };\n      }\n    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]] = function () {\n      return this;\n    }, _ref;\n  } // When a store is created, an \"INIT\" action is dispatched so that every\n  // reducer returns their initial state. This effectively populates\n  // the initial state tree.\n\n\n  dispatch({\n    type: ActionTypes.INIT\n  });\n  return _ref2 = {\n    dispatch: dispatch,\n    subscribe: subscribe,\n    getState: getState,\n    replaceReducer: replaceReducer\n  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]] = observable, _ref2;\n}\n\n/**\n * Prints a warning in the console if it exists.\n *\n * @param {String} message The warning message.\n * @returns {void}\n */\nfunction warning(message) {\n  /* eslint-disable no-console */\n  if (typeof console !== 'undefined' && typeof console.error === 'function') {\n    console.error(message);\n  }\n  /* eslint-enable no-console */\n\n\n  try {\n    // This error was thrown as a convenience so that if you enable\n    // \"break on all exceptions\" in your console,\n    // it would pause the execution at this line.\n    throw new Error(message);\n  } catch (e) {} // eslint-disable-line no-empty\n\n}\n\nfunction getUndefinedStateErrorMessage(key, action) {\n  var actionType = action && action.type;\n  var actionDescription = actionType && \"action \\\"\" + String(actionType) + \"\\\"\" || 'an action';\n  return \"Given \" + actionDescription + \", reducer \\\"\" + key + \"\\\" returned undefined. \" + \"To ignore an action, you must explicitly return the previous state. \" + \"If you want this reducer to hold no value, you can return null instead of undefined.\";\n}\n\nfunction getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {\n  var reducerKeys = Object.keys(reducers);\n  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';\n\n  if (reducerKeys.length === 0) {\n    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';\n  }\n\n  if (!isPlainObject(inputState)) {\n    return \"The \" + argumentName + \" has unexpected type of \\\"\" + {}.toString.call(inputState).match(/\\s([a-z|A-Z]+)/)[1] + \"\\\". Expected argument to be an object with the following \" + (\"keys: \\\"\" + reducerKeys.join('\", \"') + \"\\\"\");\n  }\n\n  var unexpectedKeys = Object.keys(inputState).filter(function (key) {\n    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];\n  });\n  unexpectedKeys.forEach(function (key) {\n    unexpectedKeyCache[key] = true;\n  });\n  if (action && action.type === ActionTypes.REPLACE) return;\n\n  if (unexpectedKeys.length > 0) {\n    return \"Unexpected \" + (unexpectedKeys.length > 1 ? 'keys' : 'key') + \" \" + (\"\\\"\" + unexpectedKeys.join('\", \"') + \"\\\" found in \" + argumentName + \". \") + \"Expected to find one of the known reducer keys instead: \" + (\"\\\"\" + reducerKeys.join('\", \"') + \"\\\". Unexpected keys will be ignored.\");\n  }\n}\n\nfunction assertReducerShape(reducers) {\n  Object.keys(reducers).forEach(function (key) {\n    var reducer = reducers[key];\n    var initialState = reducer(undefined, {\n      type: ActionTypes.INIT\n    });\n\n    if (typeof initialState === 'undefined') {\n      throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined during initialization. \" + \"If the state passed to the reducer is undefined, you must \" + \"explicitly return the initial state. The initial state may \" + \"not be undefined. If you don't want to set a value for this reducer, \" + \"you can use null instead of undefined.\");\n    }\n\n    if (typeof reducer(undefined, {\n      type: ActionTypes.PROBE_UNKNOWN_ACTION()\n    }) === 'undefined') {\n      throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined when probed with a random type. \" + (\"Don't try to handle \" + ActionTypes.INIT + \" or other actions in \\\"redux/*\\\" \") + \"namespace. They are considered private. Instead, you must return the \" + \"current state for any unknown actions, unless it is undefined, \" + \"in which case you must return the initial state, regardless of the \" + \"action type. The initial state may not be undefined, but can be null.\");\n    }\n  });\n}\n/**\n * Turns an object whose values are different reducer functions, into a single\n * reducer function. It will call every child reducer, and gather their results\n * into a single state object, whose keys correspond to the keys of the passed\n * reducer functions.\n *\n * @param {Object} reducers An object whose values correspond to different\n * reducer functions that need to be combined into one. One handy way to obtain\n * it is to use ES6 `import * as reducers` syntax. The reducers may never return\n * undefined for any action. Instead, they should return their initial state\n * if the state passed to them was undefined, and the current state for any\n * unrecognized action.\n *\n * @returns {Function} A reducer function that invokes every reducer inside the\n * passed object, and builds a state object with the same shape.\n */\n\n\nfunction combineReducers(reducers) {\n  var reducerKeys = Object.keys(reducers);\n  var finalReducers = {};\n\n  for (var i = 0; i < reducerKeys.length; i++) {\n    var key = reducerKeys[i];\n\n    if (false) {}\n\n    if (typeof reducers[key] === 'function') {\n      finalReducers[key] = reducers[key];\n    }\n  }\n\n  var finalReducerKeys = Object.keys(finalReducers);\n  var unexpectedKeyCache;\n\n  if (false) {}\n\n  var shapeAssertionError;\n\n  try {\n    assertReducerShape(finalReducers);\n  } catch (e) {\n    shapeAssertionError = e;\n  }\n\n  return function combination(state, action) {\n    if (state === void 0) {\n      state = {};\n    }\n\n    if (shapeAssertionError) {\n      throw shapeAssertionError;\n    }\n\n    if (false) { var warningMessage; }\n\n    var hasChanged = false;\n    var nextState = {};\n\n    for (var _i = 0; _i < finalReducerKeys.length; _i++) {\n      var _key = finalReducerKeys[_i];\n      var reducer = finalReducers[_key];\n      var previousStateForKey = state[_key];\n      var nextStateForKey = reducer(previousStateForKey, action);\n\n      if (typeof nextStateForKey === 'undefined') {\n        var errorMessage = getUndefinedStateErrorMessage(_key, action);\n        throw new Error(errorMessage);\n      }\n\n      nextState[_key] = nextStateForKey;\n      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;\n    }\n\n    return hasChanged ? nextState : state;\n  };\n}\n\nfunction bindActionCreator(actionCreator, dispatch) {\n  return function () {\n    return dispatch(actionCreator.apply(this, arguments));\n  };\n}\n/**\n * Turns an object whose values are action creators, into an object with the\n * same keys, but with every function wrapped into a `dispatch` call so they\n * may be invoked directly. This is just a convenience method, as you can call\n * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.\n *\n * For convenience, you can also pass a single function as the first argument,\n * and get a function in return.\n *\n * @param {Function|Object} actionCreators An object whose values are action\n * creator functions. One handy way to obtain it is to use ES6 `import * as`\n * syntax. You may also pass a single function.\n *\n * @param {Function} dispatch The `dispatch` function available on your Redux\n * store.\n *\n * @returns {Function|Object} The object mimicking the original object, but with\n * every action creator wrapped into the `dispatch` call. If you passed a\n * function as `actionCreators`, the return value will also be a single\n * function.\n */\n\n\nfunction bindActionCreators(actionCreators, dispatch) {\n  if (typeof actionCreators === 'function') {\n    return bindActionCreator(actionCreators, dispatch);\n  }\n\n  if (typeof actionCreators !== 'object' || actionCreators === null) {\n    throw new Error(\"bindActionCreators expected an object or a function, instead received \" + (actionCreators === null ? 'null' : typeof actionCreators) + \". \" + \"Did you write \\\"import ActionCreators from\\\" instead of \\\"import * as ActionCreators from\\\"?\");\n  }\n\n  var keys = Object.keys(actionCreators);\n  var boundActionCreators = {};\n\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    var actionCreator = actionCreators[key];\n\n    if (typeof actionCreator === 'function') {\n      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);\n    }\n  }\n\n  return boundActionCreators;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      _defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\n/**\n * Composes single-argument functions from right to left. The rightmost\n * function can take multiple arguments as it provides the signature for\n * the resulting composite function.\n *\n * @param {...Function} funcs The functions to compose.\n * @returns {Function} A function obtained by composing the argument functions\n * from right to left. For example, compose(f, g, h) is identical to doing\n * (...args) => f(g(h(...args))).\n */\nfunction compose() {\n  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {\n    funcs[_key] = arguments[_key];\n  }\n\n  if (funcs.length === 0) {\n    return function (arg) {\n      return arg;\n    };\n  }\n\n  if (funcs.length === 1) {\n    return funcs[0];\n  }\n\n  return funcs.reduce(function (a, b) {\n    return function () {\n      return a(b.apply(void 0, arguments));\n    };\n  });\n}\n\n/**\n * Creates a store enhancer that applies middleware to the dispatch method\n * of the Redux store. This is handy for a variety of tasks, such as expressing\n * asynchronous actions in a concise manner, or logging every action payload.\n *\n * See `redux-thunk` package as an example of the Redux middleware.\n *\n * Because middleware is potentially asynchronous, this should be the first\n * store enhancer in the composition chain.\n *\n * Note that each middleware will be given the `dispatch` and `getState` functions\n * as named arguments.\n *\n * @param {...Function} middlewares The middleware chain to be applied.\n * @returns {Function} A store enhancer applying the middleware.\n */\n\nfunction applyMiddleware() {\n  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {\n    middlewares[_key] = arguments[_key];\n  }\n\n  return function (createStore) {\n    return function () {\n      var store = createStore.apply(void 0, arguments);\n\n      var _dispatch = function dispatch() {\n        throw new Error(\"Dispatching while constructing your middleware is not allowed. \" + \"Other middleware would not be applied to this dispatch.\");\n      };\n\n      var middlewareAPI = {\n        getState: store.getState,\n        dispatch: function dispatch() {\n          return _dispatch.apply(void 0, arguments);\n        }\n      };\n      var chain = middlewares.map(function (middleware) {\n        return middleware(middlewareAPI);\n      });\n      _dispatch = compose.apply(void 0, chain)(store.dispatch);\n      return _objectSpread({}, store, {\n        dispatch: _dispatch\n      });\n    };\n  };\n}\n\n/*\n * This is a dummy function to check if the function name has been altered by minification.\n * If the function has been minified and NODE_ENV !== 'production', warn the user.\n */\n\nfunction isCrushed() {}\n\nif (false) {}\n\n\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/redux/es/redux.js?");

/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {/** @license React v0.13.4\n * scheduler.production.min.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nObject.defineProperty(exports,\"__esModule\",{value:!0});var d=null,e=!1,g=3,k=-1,l=-1,m=!1,n=!1;function p(){if(!m){var a=d.expirationTime;n?q():n=!0;r(t,a)}}\nfunction u(){var a=d,b=d.next;if(d===b)d=null;else{var c=d.previous;d=c.next=b;b.previous=c}a.next=a.previous=null;c=a.callback;b=a.expirationTime;a=a.priorityLevel;var f=g,Q=l;g=a;l=b;try{var h=c()}finally{g=f,l=Q}if(\"function\"===typeof h)if(h={callback:h,priorityLevel:a,expirationTime:b,next:null,previous:null},null===d)d=h.next=h.previous=h;else{c=null;a=d;do{if(a.expirationTime>=b){c=a;break}a=a.next}while(a!==d);null===c?c=d:c===d&&(d=h,p());b=c.previous;b.next=c.previous=h;h.next=c;h.previous=\nb}}function v(){if(-1===k&&null!==d&&1===d.priorityLevel){m=!0;try{do u();while(null!==d&&1===d.priorityLevel)}finally{m=!1,null!==d?p():n=!1}}}function t(a){m=!0;var b=e;e=a;try{if(a)for(;null!==d;){var c=exports.unstable_now();if(d.expirationTime<=c){do u();while(null!==d&&d.expirationTime<=c)}else break}else if(null!==d){do u();while(null!==d&&!w())}}finally{m=!1,e=b,null!==d?p():n=!1,v()}}\nvar x=Date,y=\"function\"===typeof setTimeout?setTimeout:void 0,z=\"function\"===typeof clearTimeout?clearTimeout:void 0,A=\"function\"===typeof requestAnimationFrame?requestAnimationFrame:void 0,B=\"function\"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,C,D;function E(a){C=A(function(b){z(D);a(b)});D=y(function(){B(C);a(exports.unstable_now())},100)}\nif(\"object\"===typeof performance&&\"function\"===typeof performance.now){var F=performance;exports.unstable_now=function(){return F.now()}}else exports.unstable_now=function(){return x.now()};var r,q,w,G=null;\"undefined\"!==typeof window?G=window:\"undefined\"!==typeof global&&(G=global);\nif(G&&G._schedMock){var H=G._schedMock;r=H[0];q=H[1];w=H[2];exports.unstable_now=H[3]}else if(\"undefined\"===typeof window||\"function\"!==typeof MessageChannel){var I=null,J=function(a){if(null!==I)try{I(a)}finally{I=null}};r=function(a){null!==I?setTimeout(r,0,a):(I=a,setTimeout(J,0,!1))};q=function(){I=null};w=function(){return!1}}else{\"undefined\"!==typeof console&&(\"function\"!==typeof A&&console.error(\"This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills\"),\n\"function\"!==typeof B&&console.error(\"This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills\"));var K=null,L=!1,M=-1,N=!1,O=!1,P=0,R=33,S=33;w=function(){return P<=exports.unstable_now()};var T=new MessageChannel,U=T.port2;T.port1.onmessage=function(){L=!1;var a=K,b=M;K=null;M=-1;var c=exports.unstable_now(),f=!1;if(0>=P-c)if(-1!==b&&b<=c)f=!0;else{N||(N=!0,E(V));K=a;M=b;return}if(null!==a){O=!0;try{a(f)}finally{O=!1}}};\nvar V=function(a){if(null!==K){E(V);var b=a-P+S;b<S&&R<S?(8>b&&(b=8),S=b<R?R:b):R=b;P=a+S;L||(L=!0,U.postMessage(void 0))}else N=!1};r=function(a,b){K=a;M=b;O||0>b?U.postMessage(void 0):N||(N=!0,E(V))};q=function(){K=null;L=!1;M=-1}}exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;\nexports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=g,f=k;g=a;k=exports.unstable_now();try{return b()}finally{g=c,k=f,v()}};exports.unstable_next=function(a){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var c=g,f=k;g=b;k=exports.unstable_now();try{return a()}finally{g=c,k=f,v()}};\nexports.unstable_scheduleCallback=function(a,b){var c=-1!==k?k:exports.unstable_now();if(\"object\"===typeof b&&null!==b&&\"number\"===typeof b.timeout)b=c+b.timeout;else switch(g){case 1:b=c+-1;break;case 2:b=c+250;break;case 5:b=c+1073741823;break;case 4:b=c+1E4;break;default:b=c+5E3}a={callback:a,priorityLevel:g,expirationTime:b,next:null,previous:null};if(null===d)d=a.next=a.previous=a,p();else{c=null;var f=d;do{if(f.expirationTime>b){c=f;break}f=f.next}while(f!==d);null===c?c=d:c===d&&(d=a,p());\nb=c.previous;b.next=c.previous=a;a.next=c;a.previous=b}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)d=null;else{a===d&&(d=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=g;return function(){var c=g,f=k;g=b;k=exports.unstable_now();try{return a.apply(this,arguments)}finally{g=c,k=f,v()}}};exports.unstable_getCurrentPriorityLevel=function(){return g};\nexports.unstable_shouldYield=function(){return!e&&(null!==d&&d.expirationTime<l||w())};exports.unstable_continueExecution=function(){null!==d&&p()};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return d};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://ReactDnD/./node_modules/scheduler/cjs/scheduler.production.min.js?");

/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif (true) {\n  module.exports = __webpack_require__(/*! ./cjs/scheduler.production.min.js */ \"./node_modules/scheduler/cjs/scheduler.production.min.js\");\n} else {}\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/scheduler/index.js?");

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//\n\nmodule.exports = function shallowEqual(objA, objB, compare, compareContext) {\n  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;\n\n  if (ret !== void 0) {\n    return !!ret;\n  }\n\n  if (objA === objB) {\n    return true;\n  }\n\n  if (typeof objA !== \"object\" || !objA || typeof objB !== \"object\" || !objB) {\n    return false;\n  }\n\n  var keysA = Object.keys(objA);\n  var keysB = Object.keys(objB);\n\n  if (keysA.length !== keysB.length) {\n    return false;\n  }\n\n  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);\n\n  // Test for A's keys different from B.\n  for (var idx = 0; idx < keysA.length; idx++) {\n    var key = keysA[idx];\n\n    if (!bHasOwnProperty(key)) {\n      return false;\n    }\n\n    var valueA = objA[key];\n    var valueB = objB[key];\n\n    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;\n\n    if (ret === false || (ret === void 0 && valueA !== valueB)) {\n      return false;\n    }\n  }\n\n  return true;\n};\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/shallowequal/index.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ \"./node_modules/symbol-observable/es/ponyfill.js\");\n/* global window */\n\n\nvar root;\n\nif (typeof self !== 'undefined') {\n  root = self;\n} else if (typeof window !== 'undefined') {\n  root = window;\n} else if (typeof global !== 'undefined') {\n  root = global;\n} else if (true) {\n  root = module;\n} else {}\n\nvar result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(root);\n/* harmony default export */ __webpack_exports__[\"default\"] = (result);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack://ReactDnD/./node_modules/symbol-observable/es/index.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return symbolObservablePonyfill; });\nfunction symbolObservablePonyfill(root) {\n\tvar result;\n\tvar Symbol = root.Symbol;\n\n\tif (typeof Symbol === 'function') {\n\t\tif (Symbol.observable) {\n\t\t\tresult = Symbol.observable;\n\t\t} else {\n\t\t\tresult = Symbol('observable');\n\t\t\tSymbol.observable = result;\n\t\t}\n\t} else {\n\t\tresult = '@@observable';\n\t}\n\n\treturn result;\n};\n\n\n//# sourceURL=webpack://ReactDnD/./node_modules/symbol-observable/es/ponyfill.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://ReactDnD/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://ReactDnD/(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/DragDropContext.tsx":
/*!*********************************!*\
  !*** ./src/DragDropContext.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar dnd_core_1 = __webpack_require__(/*! dnd-core */ \"../dnd-core/lib/cjs/index.js\");\nvar checkDecoratorArguments_1 = __webpack_require__(/*! ./utils/checkDecoratorArguments */ \"./src/utils/checkDecoratorArguments.ts\");\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\nvar hoistStatics = __webpack_require__(/*! hoist-non-react-statics */ \"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\");\nvar isClassComponent = __webpack_require__(/*! recompose/isClassComponent */ \"./node_modules/recompose/isClassComponent.js\").default;\n/**\n * Create the React Context\n */\nexports.context = React.createContext({\n    dragDropManager: undefined,\n});\nexports.Consumer = exports.context.Consumer, exports.Provider = exports.context.Provider;\n/**\n * Creates the context object we're providing\n * @param backend\n * @param context\n */\nfunction createChildContext(backend, context, debugMode) {\n    return {\n        dragDropManager: dnd_core_1.createDragDropManager(backend, context, debugMode),\n    };\n}\nexports.createChildContext = createChildContext;\n/**\n * A React component that provides the React-DnD context\n */\nexports.DragDropContextProvider = function (_a) {\n    var backend = _a.backend, context = _a.context, debugMode = _a.debugMode, children = _a.children;\n    var contextValue = createChildContext(backend, context, debugMode);\n    React.useEffect(function () {\n        return function () {\n            return contextValue.dragDropManager.dispatch({\n                type: 'DragDropContextProvider::Exiting',\n            });\n        };\n    });\n    return React.createElement(exports.Provider, { value: contextValue }, children);\n};\n/**\n * Wrap the root component of your application with DragDropContext decorator to set up React DnD.\n * This lets you specify the backend, and sets up the shared DnD state behind the scenes.\n * @param backendFactory The DnD backend factory\n * @param backendContext The backend context\n */\nfunction DragDropContext(backendFactory, backendContext, debugMode) {\n    checkDecoratorArguments_1.default('DragDropContext', 'backend', backendFactory);\n    var childContext = createChildContext(backendFactory, backendContext, debugMode);\n    return function decorateContext(DecoratedComponent) {\n        var Decorated = DecoratedComponent;\n        var displayName = Decorated.displayName || Decorated.name || 'Component';\n        var DragDropContextContainer = /** @class */ (function (_super) {\n            __extends(DragDropContextContainer, _super);\n            function DragDropContextContainer() {\n                var _this = _super !== null && _super.apply(this, arguments) || this;\n                _this.ref = React.createRef();\n                _this.getManager = function () { return childContext.dragDropManager; };\n                return _this;\n            }\n            DragDropContextContainer.prototype.getDecoratedComponentInstance = function () {\n                invariant(this.ref.current, 'In order to access an instance of the decorated component it can not be a stateless component.');\n                return this.ref.current;\n            };\n            DragDropContextContainer.prototype.render = function () {\n                return (React.createElement(exports.Provider, { value: childContext },\n                    React.createElement(Decorated, __assign({}, this.props, { ref: isClassComponent(Decorated) ? this.ref : undefined }))));\n            };\n            DragDropContextContainer.DecoratedComponent = DecoratedComponent;\n            DragDropContextContainer.displayName = \"DragDropContext(\" + displayName + \")\";\n            return DragDropContextContainer;\n        }(React.Component));\n        return hoistStatics(DragDropContextContainer, DecoratedComponent);\n    };\n}\nexports.DragDropContext = DragDropContext;\n\n\n//# sourceURL=webpack://ReactDnD/./src/DragDropContext.tsx?");

/***/ }),

/***/ "./src/DragLayer.tsx":
/*!***************************!*\
  !*** ./src/DragLayer.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar checkDecoratorArguments_1 = __webpack_require__(/*! ./utils/checkDecoratorArguments */ \"./src/utils/checkDecoratorArguments.ts\");\nvar DragDropContext_1 = __webpack_require__(/*! ./DragDropContext */ \"./src/DragDropContext.tsx\");\nvar hoistStatics = __webpack_require__(/*! hoist-non-react-statics */ \"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\");\nvar isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ \"./node_modules/lodash/isPlainObject.js\");\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\nvar shallowEqual = __webpack_require__(/*! shallowequal */ \"./node_modules/shallowequal/index.js\");\nvar isClassComponent = __webpack_require__(/*! recompose/isClassComponent */ \"./node_modules/recompose/isClassComponent.js\").default;\nfunction DragLayer(collect, options) {\n    if (options === void 0) { options = {}; }\n    checkDecoratorArguments_1.default('DragLayer', 'collect[, options]', collect, options);\n    invariant(typeof collect === 'function', 'Expected \"collect\" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ', 'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', collect);\n    invariant(isPlainObject(options), 'Expected \"options\" provided as the second argument to DragLayer to be a plain object when specified. ' +\n        'Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs-drag-layer.html', options);\n    return function decorateLayer(DecoratedComponent) {\n        var Decorated = DecoratedComponent;\n        var _a = options.arePropsEqual, arePropsEqual = _a === void 0 ? shallowEqual : _a;\n        var displayName = Decorated.displayName || Decorated.name || 'Component';\n        var DragLayerContainer = /** @class */ (function (_super) {\n            __extends(DragLayerContainer, _super);\n            function DragLayerContainer() {\n                var _this = _super !== null && _super.apply(this, arguments) || this;\n                _this.isCurrentlyMounted = false;\n                _this.ref = React.createRef();\n                _this.handleChange = function () {\n                    if (!_this.isCurrentlyMounted) {\n                        return;\n                    }\n                    var nextState = _this.getCurrentState();\n                    if (!shallowEqual(nextState, _this.state)) {\n                        _this.setState(nextState);\n                    }\n                };\n                return _this;\n            }\n            DragLayerContainer.prototype.getDecoratedComponentInstance = function () {\n                invariant(this.ref.current, 'In order to access an instance of the decorated component it can not be a stateless component.');\n                return this.ref.current;\n            };\n            DragLayerContainer.prototype.shouldComponentUpdate = function (nextProps, nextState) {\n                return (!arePropsEqual(nextProps, this.props) ||\n                    !shallowEqual(nextState, this.state));\n            };\n            DragLayerContainer.prototype.componentDidMount = function () {\n                this.isCurrentlyMounted = true;\n                this.handleChange();\n            };\n            DragLayerContainer.prototype.componentWillUnmount = function () {\n                this.isCurrentlyMounted = false;\n                if (this.unsubscribeFromOffsetChange) {\n                    this.unsubscribeFromOffsetChange();\n                    this.unsubscribeFromOffsetChange = undefined;\n                }\n                if (this.unsubscribeFromStateChange) {\n                    this.unsubscribeFromStateChange();\n                    this.unsubscribeFromStateChange = undefined;\n                }\n            };\n            DragLayerContainer.prototype.render = function () {\n                var _this = this;\n                return (React.createElement(DragDropContext_1.Consumer, null, function (_a) {\n                    var dragDropManager = _a.dragDropManager;\n                    if (dragDropManager === undefined) {\n                        return null;\n                    }\n                    _this.receiveDragDropManager(dragDropManager);\n                    // Let componentDidMount fire to initialize the collected state\n                    if (!_this.isCurrentlyMounted) {\n                        return null;\n                    }\n                    return (React.createElement(Decorated, __assign({}, _this.props, _this.state, { ref: isClassComponent(Decorated) ? _this.ref : undefined })));\n                }));\n            };\n            DragLayerContainer.prototype.receiveDragDropManager = function (dragDropManager) {\n                if (this.manager !== undefined) {\n                    return;\n                }\n                this.manager = dragDropManager;\n                invariant(typeof dragDropManager === 'object', 'Could not find the drag and drop manager in the context of %s. ' +\n                    'Make sure to wrap the top-level component of your app with DragDropContext. ' +\n                    'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);\n                var monitor = this.manager.getMonitor();\n                this.unsubscribeFromOffsetChange = monitor.subscribeToOffsetChange(this.handleChange);\n                this.unsubscribeFromStateChange = monitor.subscribeToStateChange(this.handleChange);\n            };\n            DragLayerContainer.prototype.getCurrentState = function () {\n                if (!this.manager) {\n                    return {};\n                }\n                var monitor = this.manager.getMonitor();\n                return collect(monitor, this.props);\n            };\n            DragLayerContainer.displayName = \"DragLayer(\" + displayName + \")\";\n            DragLayerContainer.DecoratedComponent = DecoratedComponent;\n            return DragLayerContainer;\n        }(React.Component));\n        return hoistStatics(DragLayerContainer, DecoratedComponent);\n    };\n}\nexports.default = DragLayer;\n\n\n//# sourceURL=webpack://ReactDnD/./src/DragLayer.tsx?");

/***/ }),

/***/ "./src/DragSource.ts":
/*!***************************!*\
  !*** ./src/DragSource.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar checkDecoratorArguments_1 = __webpack_require__(/*! ./utils/checkDecoratorArguments */ \"./src/utils/checkDecoratorArguments.ts\");\nvar decorateHandler_1 = __webpack_require__(/*! ./decorateHandler */ \"./src/decorateHandler.tsx\");\nvar registerSource_1 = __webpack_require__(/*! ./registerSource */ \"./src/registerSource.ts\");\nvar createSourceFactory_1 = __webpack_require__(/*! ./createSourceFactory */ \"./src/createSourceFactory.ts\");\nvar DragSourceMonitorImpl_1 = __webpack_require__(/*! ./DragSourceMonitorImpl */ \"./src/DragSourceMonitorImpl.ts\");\nvar createSourceConnector_1 = __webpack_require__(/*! ./createSourceConnector */ \"./src/createSourceConnector.ts\");\nvar isValidType_1 = __webpack_require__(/*! ./utils/isValidType */ \"./src/utils/isValidType.ts\");\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\nvar isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ \"./node_modules/lodash/isPlainObject.js\");\n/**\n * Decorates a component as a dragsource\n * @param type The dragsource type\n * @param spec The drag source specification\n * @param collect The props collector function\n * @param options DnD options\n */\nfunction DragSource(type, spec, collect, options) {\n    if (options === void 0) { options = {}; }\n    checkDecoratorArguments_1.default('DragSource', 'type, spec, collect[, options]', type, spec, collect, options);\n    var getType = type;\n    if (typeof type !== 'function') {\n        invariant(isValidType_1.default(type), 'Expected \"type\" provided as the first argument to DragSource to be ' +\n            'a string, or a function that returns a string given the current props. ' +\n            'Instead, received %s. ' +\n            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', type);\n        getType = function () { return type; };\n    }\n    invariant(isPlainObject(spec), 'Expected \"spec\" provided as the second argument to DragSource to be ' +\n        'a plain object. Instead, received %s. ' +\n        'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', spec);\n    var createSource = createSourceFactory_1.default(spec);\n    invariant(typeof collect === 'function', 'Expected \"collect\" provided as the third argument to DragSource to be ' +\n        'a function that returns a plain object of props to inject. ' +\n        'Instead, received %s. ' +\n        'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);\n    invariant(isPlainObject(options), 'Expected \"options\" provided as the fourth argument to DragSource to be ' +\n        'a plain object when specified. ' +\n        'Instead, received %s. ' +\n        'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', collect);\n    return function decorateSource(DecoratedComponent) {\n        return decorateHandler_1.default({\n            containerDisplayName: 'DragSource',\n            createHandler: createSource,\n            registerHandler: registerSource_1.default,\n            createMonitor: function (manager) {\n                return new DragSourceMonitorImpl_1.default(manager);\n            },\n            createConnector: createSourceConnector_1.default,\n            DecoratedComponent: DecoratedComponent,\n            getType: getType,\n            collect: collect,\n            options: options,\n        });\n    };\n}\nexports.default = DragSource;\n\n\n//# sourceURL=webpack://ReactDnD/./src/DragSource.ts?");

/***/ }),

/***/ "./src/DragSourceMonitorImpl.ts":
/*!**************************************!*\
  !*** ./src/DragSourceMonitorImpl.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\nvar isCallingCanDrag = false;\nvar isCallingIsDragging = false;\nvar DragSourceMonitorImpl = /** @class */ (function () {\n    function DragSourceMonitorImpl(manager) {\n        this.sourceId = null;\n        this.internalMonitor = manager.getMonitor();\n    }\n    DragSourceMonitorImpl.prototype.receiveHandlerId = function (sourceId) {\n        this.sourceId = sourceId;\n    };\n    DragSourceMonitorImpl.prototype.getHandlerId = function () {\n        return this.sourceId;\n    };\n    DragSourceMonitorImpl.prototype.canDrag = function () {\n        invariant(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' +\n            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');\n        try {\n            isCallingCanDrag = true;\n            return this.internalMonitor.canDragSource(this.sourceId);\n        }\n        finally {\n            isCallingCanDrag = false;\n        }\n    };\n    DragSourceMonitorImpl.prototype.isDragging = function () {\n        invariant(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' +\n            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source-monitor.html');\n        try {\n            isCallingIsDragging = true;\n            return this.internalMonitor.isDraggingSource(this.sourceId);\n        }\n        finally {\n            isCallingIsDragging = false;\n        }\n    };\n    DragSourceMonitorImpl.prototype.subscribeToStateChange = function (listener, options) {\n        return this.internalMonitor.subscribeToStateChange(listener, options);\n    };\n    DragSourceMonitorImpl.prototype.isDraggingSource = function (sourceId) {\n        return this.internalMonitor.isDraggingSource(sourceId);\n    };\n    DragSourceMonitorImpl.prototype.isOverTarget = function (targetId, options) {\n        return this.internalMonitor.isOverTarget(targetId, options);\n    };\n    DragSourceMonitorImpl.prototype.getTargetIds = function () {\n        return this.internalMonitor.getTargetIds();\n    };\n    DragSourceMonitorImpl.prototype.isSourcePublic = function () {\n        return this.internalMonitor.isSourcePublic();\n    };\n    DragSourceMonitorImpl.prototype.getSourceId = function () {\n        return this.internalMonitor.getSourceId();\n    };\n    DragSourceMonitorImpl.prototype.subscribeToOffsetChange = function (listener) {\n        return this.internalMonitor.subscribeToOffsetChange(listener);\n    };\n    DragSourceMonitorImpl.prototype.canDragSource = function (sourceId) {\n        return this.internalMonitor.canDragSource(sourceId);\n    };\n    DragSourceMonitorImpl.prototype.canDropOnTarget = function (targetId) {\n        return this.internalMonitor.canDropOnTarget(targetId);\n    };\n    DragSourceMonitorImpl.prototype.getItemType = function () {\n        return this.internalMonitor.getItemType();\n    };\n    DragSourceMonitorImpl.prototype.getItem = function () {\n        return this.internalMonitor.getItem();\n    };\n    DragSourceMonitorImpl.prototype.getDropResult = function () {\n        return this.internalMonitor.getDropResult();\n    };\n    DragSourceMonitorImpl.prototype.didDrop = function () {\n        return this.internalMonitor.didDrop();\n    };\n    DragSourceMonitorImpl.prototype.getInitialClientOffset = function () {\n        return this.internalMonitor.getInitialClientOffset();\n    };\n    DragSourceMonitorImpl.prototype.getInitialSourceClientOffset = function () {\n        return this.internalMonitor.getInitialSourceClientOffset();\n    };\n    DragSourceMonitorImpl.prototype.getSourceClientOffset = function () {\n        return this.internalMonitor.getSourceClientOffset();\n    };\n    DragSourceMonitorImpl.prototype.getClientOffset = function () {\n        return this.internalMonitor.getClientOffset();\n    };\n    DragSourceMonitorImpl.prototype.getDifferenceFromInitialOffset = function () {\n        return this.internalMonitor.getDifferenceFromInitialOffset();\n    };\n    return DragSourceMonitorImpl;\n}());\nexports.default = DragSourceMonitorImpl;\n\n\n//# sourceURL=webpack://ReactDnD/./src/DragSourceMonitorImpl.ts?");

/***/ }),

/***/ "./src/DropTarget.ts":
/*!***************************!*\
  !*** ./src/DropTarget.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar checkDecoratorArguments_1 = __webpack_require__(/*! ./utils/checkDecoratorArguments */ \"./src/utils/checkDecoratorArguments.ts\");\nvar decorateHandler_1 = __webpack_require__(/*! ./decorateHandler */ \"./src/decorateHandler.tsx\");\nvar registerTarget_1 = __webpack_require__(/*! ./registerTarget */ \"./src/registerTarget.ts\");\nvar createTargetFactory_1 = __webpack_require__(/*! ./createTargetFactory */ \"./src/createTargetFactory.ts\");\nvar createTargetConnector_1 = __webpack_require__(/*! ./createTargetConnector */ \"./src/createTargetConnector.ts\");\nvar isValidType_1 = __webpack_require__(/*! ./utils/isValidType */ \"./src/utils/isValidType.ts\");\nvar DropTargetMonitorImpl_1 = __webpack_require__(/*! ./DropTargetMonitorImpl */ \"./src/DropTargetMonitorImpl.ts\");\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\nvar isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ \"./node_modules/lodash/isPlainObject.js\");\nfunction DropTarget(type, spec, collect, options) {\n    if (options === void 0) { options = {}; }\n    checkDecoratorArguments_1.default('DropTarget', 'type, spec, collect[, options]', type, spec, collect, options);\n    var getType = type;\n    if (typeof type !== 'function') {\n        invariant(isValidType_1.default(type, true), 'Expected \"type\" provided as the first argument to DropTarget to be ' +\n            'a string, an array of strings, or a function that returns either given ' +\n            'the current props. Instead, received %s. ' +\n            'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', type);\n        getType = function () { return type; };\n    }\n    invariant(isPlainObject(spec), 'Expected \"spec\" provided as the second argument to DropTarget to be ' +\n        'a plain object. Instead, received %s. ' +\n        'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', spec);\n    var createTarget = createTargetFactory_1.default(spec);\n    invariant(typeof collect === 'function', 'Expected \"collect\" provided as the third argument to DropTarget to be ' +\n        'a function that returns a plain object of props to inject. ' +\n        'Instead, received %s. ' +\n        'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);\n    invariant(isPlainObject(options), 'Expected \"options\" provided as the fourth argument to DropTarget to be ' +\n        'a plain object when specified. ' +\n        'Instead, received %s. ' +\n        'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', collect);\n    return function decorateTarget(DecoratedComponent) {\n        return decorateHandler_1.default({\n            containerDisplayName: 'DropTarget',\n            createHandler: createTarget,\n            registerHandler: registerTarget_1.default,\n            createMonitor: function (manager) {\n                return new DropTargetMonitorImpl_1.default(manager);\n            },\n            createConnector: createTargetConnector_1.default,\n            DecoratedComponent: DecoratedComponent,\n            getType: getType,\n            collect: collect,\n            options: options,\n        });\n    };\n}\nexports.default = DropTarget;\n\n\n//# sourceURL=webpack://ReactDnD/./src/DropTarget.ts?");

/***/ }),

/***/ "./src/DropTargetMonitorImpl.ts":
/*!**************************************!*\
  !*** ./src/DropTargetMonitorImpl.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\nvar isCallingCanDrop = false;\nvar DropTargetMonitorImpl = /** @class */ (function () {\n    function DropTargetMonitorImpl(manager) {\n        this.targetId = null;\n        this.internalMonitor = manager.getMonitor();\n    }\n    DropTargetMonitorImpl.prototype.receiveHandlerId = function (targetId) {\n        this.targetId = targetId;\n    };\n    DropTargetMonitorImpl.prototype.getHandlerId = function () {\n        return this.targetId;\n    };\n    DropTargetMonitorImpl.prototype.subscribeToStateChange = function (listener, options) {\n        return this.internalMonitor.subscribeToStateChange(listener, options);\n    };\n    DropTargetMonitorImpl.prototype.canDrop = function () {\n        invariant(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' +\n            'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target-monitor.html');\n        try {\n            isCallingCanDrop = true;\n            return this.internalMonitor.canDropOnTarget(this.targetId);\n        }\n        finally {\n            isCallingCanDrop = false;\n        }\n    };\n    DropTargetMonitorImpl.prototype.isOver = function (options) {\n        return this.internalMonitor.isOverTarget(this.targetId, options);\n    };\n    DropTargetMonitorImpl.prototype.getItemType = function () {\n        return this.internalMonitor.getItemType();\n    };\n    DropTargetMonitorImpl.prototype.getItem = function () {\n        return this.internalMonitor.getItem();\n    };\n    DropTargetMonitorImpl.prototype.getDropResult = function () {\n        return this.internalMonitor.getDropResult();\n    };\n    DropTargetMonitorImpl.prototype.didDrop = function () {\n        return this.internalMonitor.didDrop();\n    };\n    DropTargetMonitorImpl.prototype.getInitialClientOffset = function () {\n        return this.internalMonitor.getInitialClientOffset();\n    };\n    DropTargetMonitorImpl.prototype.getInitialSourceClientOffset = function () {\n        return this.internalMonitor.getInitialSourceClientOffset();\n    };\n    DropTargetMonitorImpl.prototype.getSourceClientOffset = function () {\n        return this.internalMonitor.getSourceClientOffset();\n    };\n    DropTargetMonitorImpl.prototype.getClientOffset = function () {\n        return this.internalMonitor.getClientOffset();\n    };\n    DropTargetMonitorImpl.prototype.getDifferenceFromInitialOffset = function () {\n        return this.internalMonitor.getDifferenceFromInitialOffset();\n    };\n    return DropTargetMonitorImpl;\n}());\nexports.default = DropTargetMonitorImpl;\n\n\n//# sourceURL=webpack://ReactDnD/./src/DropTargetMonitorImpl.ts?");

/***/ }),

/***/ "./src/createSourceConnector.ts":
/*!**************************************!*\
  !*** ./src/createSourceConnector.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar wrapConnectorHooks_1 = __webpack_require__(/*! ./wrapConnectorHooks */ \"./src/wrapConnectorHooks.ts\");\nvar shallowEqual = __webpack_require__(/*! shallowequal */ \"./node_modules/shallowequal/index.js\");\nfunction createSourceConnector(backend) {\n    var currentHandlerId;\n    var currentDragSourceNode;\n    var currentDragSourceOptions;\n    var disconnectCurrentDragSource;\n    var currentDragPreviewNode;\n    var currentDragPreviewOptions;\n    var disconnectCurrentDragPreview;\n    function reconnectDragSource() {\n        if (disconnectCurrentDragSource) {\n            disconnectCurrentDragSource();\n            disconnectCurrentDragSource = undefined;\n        }\n        if (currentHandlerId && currentDragSourceNode) {\n            disconnectCurrentDragSource = backend.connectDragSource(currentHandlerId, currentDragSourceNode, currentDragSourceOptions);\n        }\n    }\n    function reconnectDragPreview() {\n        if (disconnectCurrentDragPreview) {\n            disconnectCurrentDragPreview();\n            disconnectCurrentDragPreview = undefined;\n        }\n        if (currentHandlerId && currentDragPreviewNode) {\n            disconnectCurrentDragPreview = backend.connectDragPreview(currentHandlerId, currentDragPreviewNode, currentDragPreviewOptions);\n        }\n    }\n    function receiveHandlerId(handlerId) {\n        if (handlerId === currentHandlerId) {\n            return;\n        }\n        currentHandlerId = handlerId;\n        reconnectDragSource();\n        reconnectDragPreview();\n    }\n    var hooks = wrapConnectorHooks_1.default({\n        dragSource: function connectDragSource(node, options) {\n            if (node === currentDragSourceNode &&\n                shallowEqual(options, currentDragSourceOptions)) {\n                return;\n            }\n            currentDragSourceNode = node;\n            currentDragSourceOptions = options;\n            reconnectDragSource();\n        },\n        dragPreview: function connectDragPreview(node, options) {\n            if (node === currentDragPreviewNode &&\n                shallowEqual(options, currentDragPreviewOptions)) {\n                return;\n            }\n            currentDragPreviewNode = node;\n            currentDragPreviewOptions = options;\n            reconnectDragPreview();\n        },\n    });\n    return {\n        receiveHandlerId: receiveHandlerId,\n        hooks: hooks,\n    };\n}\nexports.default = createSourceConnector;\n\n\n//# sourceURL=webpack://ReactDnD/./src/createSourceConnector.ts?");

/***/ }),

/***/ "./src/createSourceFactory.ts":
/*!************************************!*\
  !*** ./src/createSourceFactory.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\nvar isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ \"./node_modules/lodash/isPlainObject.js\");\nvar ALLOWED_SPEC_METHODS = ['canDrag', 'beginDrag', 'isDragging', 'endDrag'];\nvar REQUIRED_SPEC_METHODS = ['beginDrag'];\nfunction createSourceFactory(spec) {\n    Object.keys(spec).forEach(function (key) {\n        invariant(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drag source specification to only have ' +\n            'some of the following keys: %s. ' +\n            'Instead received a specification with an unexpected \"%s\" key. ' +\n            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', ALLOWED_SPEC_METHODS.join(', '), key);\n        invariant(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' +\n            'Instead received a specification with %s: %s. ' +\n            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);\n    });\n    REQUIRED_SPEC_METHODS.forEach(function (key) {\n        invariant(typeof spec[key] === 'function', 'Expected %s in the drag source specification to be a function. ' +\n            'Instead received a specification with %s: %s. ' +\n            'Read more: http://react-dnd.github.io/react-dnd/docs-drag-source.html', key, key, spec[key]);\n    });\n    var SourceImpl = /** @class */ (function () {\n        function SourceImpl(monitor) {\n            var _this = this;\n            this.monitor = monitor;\n            this.props = null;\n            this.ref = react_1.createRef();\n            this.beginDrag = function () {\n                if (!_this.props) {\n                    return;\n                }\n                var item = spec.beginDrag(_this.props, _this.monitor, _this.ref.current);\n                if (false) {}\n                return item;\n            };\n        }\n        SourceImpl.prototype.receiveProps = function (props) {\n            this.props = props;\n        };\n        SourceImpl.prototype.canDrag = function () {\n            if (!this.props) {\n                return false;\n            }\n            if (!spec.canDrag) {\n                return true;\n            }\n            return spec.canDrag(this.props, this.monitor);\n        };\n        SourceImpl.prototype.isDragging = function (globalMonitor, sourceId) {\n            if (!this.props) {\n                return false;\n            }\n            if (!spec.isDragging) {\n                return sourceId === globalMonitor.getSourceId();\n            }\n            return spec.isDragging(this.props, this.monitor);\n        };\n        SourceImpl.prototype.endDrag = function () {\n            if (!this.props) {\n                return;\n            }\n            if (!spec.endDrag) {\n                return;\n            }\n            spec.endDrag(this.props, this.monitor, this.ref.current);\n        };\n        return SourceImpl;\n    }());\n    return function createSource(monitor) {\n        return new SourceImpl(monitor);\n    };\n}\nexports.default = createSourceFactory;\n\n\n//# sourceURL=webpack://ReactDnD/./src/createSourceFactory.ts?");

/***/ }),

/***/ "./src/createTargetConnector.ts":
/*!**************************************!*\
  !*** ./src/createTargetConnector.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar wrapConnectorHooks_1 = __webpack_require__(/*! ./wrapConnectorHooks */ \"./src/wrapConnectorHooks.ts\");\nvar shallowEqual = __webpack_require__(/*! shallowequal */ \"./node_modules/shallowequal/index.js\");\nfunction createTargetConnector(backend) {\n    var currentHandlerId;\n    var currentDropTargetNode;\n    var currentDropTargetOptions;\n    var disconnectCurrentDropTarget;\n    function reconnectDropTarget() {\n        if (disconnectCurrentDropTarget) {\n            disconnectCurrentDropTarget();\n            disconnectCurrentDropTarget = undefined;\n        }\n        if (currentHandlerId && currentDropTargetNode) {\n            disconnectCurrentDropTarget = backend.connectDropTarget(currentHandlerId, currentDropTargetNode, currentDropTargetOptions);\n        }\n    }\n    function receiveHandlerId(handlerId) {\n        if (handlerId === currentHandlerId) {\n            return;\n        }\n        currentHandlerId = handlerId;\n        reconnectDropTarget();\n    }\n    var hooks = wrapConnectorHooks_1.default({\n        dropTarget: function connectDropTarget(node, options) {\n            if (node === currentDropTargetNode &&\n                shallowEqual(options, currentDropTargetOptions)) {\n                return;\n            }\n            currentDropTargetNode = node;\n            currentDropTargetOptions = options;\n            reconnectDropTarget();\n        },\n    });\n    return {\n        receiveHandlerId: receiveHandlerId,\n        hooks: hooks,\n    };\n}\nexports.default = createTargetConnector;\n\n\n//# sourceURL=webpack://ReactDnD/./src/createTargetConnector.ts?");

/***/ }),

/***/ "./src/createTargetFactory.ts":
/*!************************************!*\
  !*** ./src/createTargetFactory.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\nvar isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ \"./node_modules/lodash/isPlainObject.js\");\nvar ALLOWED_SPEC_METHODS = ['canDrop', 'hover', 'drop'];\nfunction createTargetFactory(spec) {\n    Object.keys(spec).forEach(function (key) {\n        invariant(ALLOWED_SPEC_METHODS.indexOf(key) > -1, 'Expected the drop target specification to only have ' +\n            'some of the following keys: %s. ' +\n            'Instead received a specification with an unexpected \"%s\" key. ' +\n            'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', ALLOWED_SPEC_METHODS.join(', '), key);\n        invariant(typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' +\n            'Instead received a specification with %s: %s. ' +\n            'Read more: http://react-dnd.github.io/react-dnd/docs-drop-target.html', key, key, spec[key]);\n    });\n    var TargetImpl = /** @class */ (function () {\n        function TargetImpl(monitor) {\n            this.monitor = monitor;\n            this.props = null;\n            this.ref = react_1.createRef();\n        }\n        TargetImpl.prototype.receiveProps = function (props) {\n            this.props = props;\n        };\n        TargetImpl.prototype.receiveMonitor = function (monitor) {\n            this.monitor = monitor;\n        };\n        TargetImpl.prototype.canDrop = function () {\n            if (!spec.canDrop) {\n                return true;\n            }\n            return spec.canDrop(this.props, this.monitor);\n        };\n        TargetImpl.prototype.hover = function () {\n            if (!spec.hover) {\n                return;\n            }\n            spec.hover(this.props, this.monitor, this.ref.current);\n        };\n        TargetImpl.prototype.drop = function () {\n            if (!spec.drop) {\n                return undefined;\n            }\n            var dropResult = spec.drop(this.props, this.monitor, this.ref.current);\n            if (false) {}\n            return dropResult;\n        };\n        return TargetImpl;\n    }());\n    return function createTarget(monitor) {\n        return new TargetImpl(monitor);\n    };\n}\nexports.default = createTargetFactory;\n\n\n//# sourceURL=webpack://ReactDnD/./src/createTargetFactory.ts?");

/***/ }),

/***/ "./src/decorateHandler.tsx":
/*!*********************************!*\
  !*** ./src/decorateHandler.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar DragDropContext_1 = __webpack_require__(/*! ./DragDropContext */ \"./src/DragDropContext.tsx\");\nvar disposables_1 = __webpack_require__(/*! ./utils/disposables */ \"./src/utils/disposables/index.ts\");\nvar isClassComponent = __webpack_require__(/*! recompose/isClassComponent */ \"./node_modules/recompose/isClassComponent.js\").default;\nvar isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ \"./node_modules/lodash/isPlainObject.js\");\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\nvar hoistStatics = __webpack_require__(/*! hoist-non-react-statics */ \"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\");\nvar shallowEqual = __webpack_require__(/*! shallowequal */ \"./node_modules/shallowequal/index.js\");\nfunction decorateHandler(_a) {\n    var DecoratedComponent = _a.DecoratedComponent, createHandler = _a.createHandler, createMonitor = _a.createMonitor, createConnector = _a.createConnector, registerHandler = _a.registerHandler, containerDisplayName = _a.containerDisplayName, getType = _a.getType, collect = _a.collect, options = _a.options;\n    var _b = options.arePropsEqual, arePropsEqual = _b === void 0 ? shallowEqual : _b;\n    var Decorated = DecoratedComponent;\n    var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';\n    var DragDropContainer = /** @class */ (function (_super) {\n        __extends(DragDropContainer, _super);\n        function DragDropContainer(props) {\n            var _this = _super.call(this, props) || this;\n            _this.handleChange = function () {\n                var nextState = _this.getCurrentState();\n                if (!shallowEqual(nextState, _this.state)) {\n                    _this.setState(nextState);\n                }\n            };\n            _this.disposable = new disposables_1.SerialDisposable();\n            _this.receiveProps(props);\n            _this.dispose();\n            return _this;\n        }\n        DragDropContainer.prototype.getHandlerId = function () {\n            return this.handlerId;\n        };\n        DragDropContainer.prototype.getDecoratedComponentInstance = function () {\n            if (!this.handler) {\n                return null;\n            }\n            return this.handler.ref.current;\n        };\n        DragDropContainer.prototype.shouldComponentUpdate = function (nextProps, nextState) {\n            return (!arePropsEqual(nextProps, this.props) ||\n                !shallowEqual(nextState, this.state));\n        };\n        DragDropContainer.prototype.componentDidMount = function () {\n            this.disposable = new disposables_1.SerialDisposable();\n            this.currentType = undefined;\n            this.receiveProps(this.props);\n            this.handleChange();\n        };\n        DragDropContainer.prototype.componentDidUpdate = function (prevProps) {\n            if (!arePropsEqual(this.props, prevProps)) {\n                this.receiveProps(this.props);\n                this.handleChange();\n            }\n        };\n        DragDropContainer.prototype.componentWillUnmount = function () {\n            this.dispose();\n        };\n        DragDropContainer.prototype.receiveProps = function (props) {\n            if (!this.handler) {\n                return;\n            }\n            this.handler.receiveProps(props);\n            this.receiveType(getType(props));\n        };\n        DragDropContainer.prototype.receiveType = function (type) {\n            if (!this.handlerMonitor || !this.manager || !this.handlerConnector) {\n                return;\n            }\n            if (type === this.currentType) {\n                return;\n            }\n            this.currentType = type;\n            var _a = registerHandler(type, this.handler, this.manager), handlerId = _a.handlerId, unregister = _a.unregister;\n            this.handlerId = handlerId;\n            this.handlerMonitor.receiveHandlerId(handlerId);\n            this.handlerConnector.receiveHandlerId(handlerId);\n            var globalMonitor = this.manager.getMonitor();\n            var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, { handlerIds: [handlerId] });\n            this.disposable.setDisposable(new disposables_1.CompositeDisposable(new disposables_1.Disposable(unsubscribe), new disposables_1.Disposable(unregister)));\n        };\n        DragDropContainer.prototype.dispose = function () {\n            this.disposable.dispose();\n            if (this.handlerConnector) {\n                this.handlerConnector.receiveHandlerId(null);\n            }\n        };\n        DragDropContainer.prototype.getCurrentState = function () {\n            if (!this.handlerConnector) {\n                return {};\n            }\n            var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor);\n            if (false) {}\n            return nextState;\n        };\n        DragDropContainer.prototype.render = function () {\n            var _this = this;\n            return (React.createElement(DragDropContext_1.Consumer, null, function (_a) {\n                var dragDropManager = _a.dragDropManager;\n                if (dragDropManager === undefined) {\n                    return null;\n                }\n                _this.receiveDragDropManager(dragDropManager);\n                return (React.createElement(Decorated, __assign({}, _this.props, _this.getCurrentState(), { ref: _this.handler && isClassComponent(Decorated)\n                        ? _this.handler.ref\n                        : undefined })));\n            }));\n        };\n        DragDropContainer.prototype.receiveDragDropManager = function (dragDropManager) {\n            if (this.manager !== undefined) {\n                return;\n            }\n            this.manager = dragDropManager;\n            invariant(typeof dragDropManager === 'object', 'Could not find the drag and drop manager in the context of %s. ' +\n                'Make sure to wrap the top-level component of your app with DragDropContext. ' +\n                'Read more: http://react-dnd.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);\n            this.handlerMonitor = createMonitor(dragDropManager);\n            this.handlerConnector = createConnector(dragDropManager.getBackend());\n            this.handler = createHandler(this.handlerMonitor);\n        };\n        DragDropContainer.DecoratedComponent = DecoratedComponent;\n        DragDropContainer.displayName = containerDisplayName + \"(\" + displayName + \")\";\n        return DragDropContainer;\n    }(React.Component));\n    return hoistStatics(DragDropContainer, DecoratedComponent);\n}\nexports.default = decorateHandler;\n\n\n//# sourceURL=webpack://ReactDnD/./src/decorateHandler.tsx?");

/***/ }),

/***/ "./src/hooks/index.ts":
/*!****************************!*\
  !*** ./src/hooks/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./useDrag */ \"./src/hooks/useDrag.ts\"));\n__export(__webpack_require__(/*! ./useDrop */ \"./src/hooks/useDrop.ts\"));\n__export(__webpack_require__(/*! ./useDragLayer */ \"./src/hooks/useDragLayer.ts\"));\n__export(__webpack_require__(/*! ./useDragPreview */ \"./src/hooks/useDragPreview.ts\"));\n\n\n//# sourceURL=webpack://ReactDnD/./src/hooks/index.ts?");

/***/ }),

/***/ "./src/hooks/internal/useCollector.ts":
/*!********************************************!*\
  !*** ./src/hooks/internal/useCollector.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar shallowEqual = __webpack_require__(/*! shallowequal */ \"./node_modules/shallowequal/index.js\");\nfunction useCollector(monitor, collect) {\n    var _a = react_1.useState(function () { return collect(monitor); }), collected = _a[0], setCollected = _a[1];\n    var updateCollected = function () {\n        var nextValue = collect(monitor);\n        if (!shallowEqual(collected, nextValue)) {\n            setCollected(nextValue);\n        }\n    };\n    return [collected, updateCollected];\n}\nexports.useCollector = useCollector;\n\n\n//# sourceURL=webpack://ReactDnD/./src/hooks/internal/useCollector.ts?");

/***/ }),

/***/ "./src/hooks/internal/useDragDropManager.ts":
/*!**************************************************!*\
  !*** ./src/hooks/internal/useDragDropManager.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar DragDropContext_1 = __webpack_require__(/*! ../../DragDropContext */ \"./src/DragDropContext.tsx\");\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n/**\n * A hook to retrieve the DragDropManager from Context\n */\nfunction useDragDropManager() {\n    var dragDropManager = react_1.useContext(DragDropContext_1.context).dragDropManager;\n    invariant(dragDropManager != null, 'Expected drag drop context');\n    return dragDropManager;\n}\nexports.useDragDropManager = useDragDropManager;\n\n\n//# sourceURL=webpack://ReactDnD/./src/hooks/internal/useDragDropManager.ts?");

/***/ }),

/***/ "./src/hooks/internal/useDragSourceMonitor.ts":
/*!****************************************************!*\
  !*** ./src/hooks/internal/useDragSourceMonitor.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar DragSourceMonitorImpl_1 = __webpack_require__(/*! ../../DragSourceMonitorImpl */ \"./src/DragSourceMonitorImpl.ts\");\nvar registerSource_1 = __webpack_require__(/*! ../../registerSource */ \"./src/registerSource.ts\");\nfunction useDragSourceMonitor(manager, sourceSpec) {\n    var sourceSpecRef = react_1.useRef(sourceSpec);\n    react_1.useEffect(function () {\n        sourceSpecRef.current = sourceSpec;\n    });\n    var monitor = react_1.useMemo(function () { return new DragSourceMonitorImpl_1.default(manager); }, [manager]);\n    react_1.useEffect(function registerSourceWithMonitor() {\n        var _a = registerSource_1.default(sourceSpec.item.type, handler, manager), handlerId = _a.handlerId, unregister = _a.unregister;\n        monitor.receiveHandlerId(handlerId);\n        return unregister;\n    }, [monitor]);\n    // Can't use createSourceFactory, as semantics are different\n    var handler = react_1.useMemo(function () {\n        return ({\n            beginDrag: function () {\n                var _a = sourceSpecRef.current, begin = _a.begin, item = _a.item;\n                if (begin) {\n                    begin(monitor);\n                }\n                return item || {};\n            },\n            canDrag: function () {\n                var canDrag = sourceSpecRef.current.canDrag;\n                return canDrag ? canDrag(monitor) : true;\n            },\n            isDragging: function (globalMonitor, target) {\n                var isDragging = sourceSpecRef.current.isDragging;\n                return isDragging\n                    ? isDragging(monitor)\n                    : target === globalMonitor.getSourceId();\n            },\n            endDrag: function () {\n                var end = sourceSpecRef.current.end;\n                if (end) {\n                    end(monitor.getItem(), monitor);\n                }\n            },\n        });\n    }, []);\n    return monitor;\n}\nexports.useDragSourceMonitor = useDragSourceMonitor;\n\n\n//# sourceURL=webpack://ReactDnD/./src/hooks/internal/useDragSourceMonitor.ts?");

/***/ }),

/***/ "./src/hooks/internal/useDropTargetMonitor.ts":
/*!****************************************************!*\
  !*** ./src/hooks/internal/useDropTargetMonitor.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar DropTargetMonitorImpl_1 = __webpack_require__(/*! ../../DropTargetMonitorImpl */ \"./src/DropTargetMonitorImpl.ts\");\nvar registerTarget_1 = __webpack_require__(/*! ../../registerTarget */ \"./src/registerTarget.ts\");\nfunction useDropTargetMonitor(manager, targetSpec) {\n    var targetSpecRef = React.useRef(targetSpec);\n    React.useEffect(function updateDropTargetSpec() {\n        targetSpecRef.current = targetSpec;\n    });\n    var monitor = React.useMemo(function () { return new DropTargetMonitorImpl_1.default(manager); }, [\n        manager,\n    ]);\n    React.useEffect(function registerTargetWithMonitor() {\n        var _a = registerTarget_1.default(targetSpec.accept, handler, manager), handlerId = _a.handlerId, unregister = _a.unregister;\n        monitor.receiveHandlerId(handlerId);\n        return unregister;\n    }, [monitor]);\n    // Can't use createSourceFactory, as semantics are different\n    var handler = React.useMemo(function () {\n        return ({\n            canDrop: function () {\n                var canDrop = targetSpecRef.current.canDrop;\n                return canDrop ? canDrop(monitor.getItem(), monitor) : true;\n            },\n            hover: function () {\n                var hover = targetSpecRef.current.hover;\n                if (hover) {\n                    hover(monitor.getItem(), monitor);\n                }\n            },\n            drop: function () {\n                var drop = targetSpecRef.current.drop;\n                if (drop) {\n                    return drop(monitor.getItem(), monitor);\n                }\n            },\n        });\n    }, []);\n    return monitor;\n}\nexports.useDropTargetMonitor = useDropTargetMonitor;\n\n\n//# sourceURL=webpack://ReactDnD/./src/hooks/internal/useDropTargetMonitor.ts?");

/***/ }),

/***/ "./src/hooks/internal/useMonitorOutput.ts":
/*!************************************************!*\
  !*** ./src/hooks/internal/useMonitorOutput.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar useCollector_1 = __webpack_require__(/*! ./useCollector */ \"./src/hooks/internal/useCollector.ts\");\nfunction useMonitorOutput(monitor, collect) {\n    var _a = useCollector_1.useCollector(monitor, collect), collected = _a[0], updateCollected = _a[1];\n    // This runs on every render. There will be ways to optimise this, but for\n    // now, this is the most correct thing to do.\n    react_1.useEffect(function subscribeToMonitorStateChange() {\n        var handlerId = monitor.getHandlerId();\n        if (handlerId == null) {\n            return undefined;\n        }\n        return monitor.subscribeToStateChange(updateCollected, {\n            handlerIds: [handlerId],\n        });\n    });\n    return collected;\n}\nexports.useMonitorOutput = useMonitorOutput;\n\n\n//# sourceURL=webpack://ReactDnD/./src/hooks/internal/useMonitorOutput.ts?");

/***/ }),

/***/ "./src/hooks/useDrag.ts":
/*!******************************!*\
  !*** ./src/hooks/useDrag.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar useDragSourceMonitor_1 = __webpack_require__(/*! ./internal/useDragSourceMonitor */ \"./src/hooks/internal/useDragSourceMonitor.ts\");\nvar useDragDropManager_1 = __webpack_require__(/*! ./internal/useDragDropManager */ \"./src/hooks/internal/useDragDropManager.ts\");\nvar util_1 = __webpack_require__(/*! ./util */ \"./src/hooks/util.ts\");\nvar useMonitorOutput_1 = __webpack_require__(/*! ./internal/useMonitorOutput */ \"./src/hooks/internal/useMonitorOutput.ts\");\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n/**\n * useDragSource hook (This API is experimental and subject to breaking changes in non-major versions)\n * @param sourceSpec The drag source specification *\n */\nfunction useDrag(spec) {\n    var item = spec.item, options = spec.options, preview = spec.preview, previewOptions = spec.previewOptions, collect = spec.collect;\n    var ref = spec.ref;\n    invariant(item != null, 'item must be defined');\n    invariant(item.type != null, 'item type must be defined');\n    var manager = useDragDropManager_1.useDragDropManager();\n    var backend = manager.getBackend();\n    var monitor = useDragSourceMonitor_1.useDragSourceMonitor(manager, spec);\n    if (!ref) {\n        ref = react_1.useRef(null);\n    }\n    /*\n     * Connect the Drag Source Element to the Backend\n     */\n    react_1.useEffect(function connectDragSource() {\n        var node = ref.current;\n        return backend.connectDragSource(monitor.getHandlerId(), node, options);\n    }, []);\n    /*\n     * Connect the Drag Preview Element to the Backend\n     */\n    react_1.useEffect(function connectDragPreview() {\n        if (preview) {\n            var previewNode = util_1.isRef(preview)\n                ? preview.current\n                : preview;\n            return backend.connectDragPreview(monitor.getHandlerId(), previewNode, previewOptions);\n        }\n    }, [preview && preview.current]);\n    var result = collect\n        ? useMonitorOutput_1.useMonitorOutput(monitor, collect)\n        : {};\n    return [result, ref];\n}\nexports.useDrag = useDrag;\n\n\n//# sourceURL=webpack://ReactDnD/./src/hooks/useDrag.ts?");

/***/ }),

/***/ "./src/hooks/useDragLayer.ts":
/*!***********************************!*\
  !*** ./src/hooks/useDragLayer.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar useDragDropManager_1 = __webpack_require__(/*! ./internal/useDragDropManager */ \"./src/hooks/internal/useDragDropManager.ts\");\nvar useCollector_1 = __webpack_require__(/*! ./internal/useCollector */ \"./src/hooks/internal/useCollector.ts\");\n/**\n * useDragLayer Hook  (This API is experimental and subject to breaking changes in non-breaking versions)\n * @param collector The property collector\n */\nfunction useDragLayer(collect) {\n    var dragDropManager = useDragDropManager_1.useDragDropManager();\n    var monitor = dragDropManager.getMonitor();\n    var _a = useCollector_1.useCollector(monitor, collect), collected = _a[0], updateCollected = _a[1];\n    react_1.useEffect(function () { return monitor.subscribeToOffsetChange(updateCollected); });\n    react_1.useEffect(function () { return monitor.subscribeToStateChange(updateCollected); });\n    return collected;\n}\nexports.useDragLayer = useDragLayer;\n\n\n//# sourceURL=webpack://ReactDnD/./src/hooks/useDragLayer.ts?");

/***/ }),

/***/ "./src/hooks/useDragPreview.ts":
/*!*************************************!*\
  !*** ./src/hooks/useDragPreview.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar React = __webpack_require__(/*! react */ \"react\");\nvar react_dom_1 = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/**\n * Hook for showing a dragPreview\n * @param DragPreview The drag preview component to render\n */\nfunction useDragPreview(DragPreview) {\n    // drag previews won't have layered functionality, so we can create the ref for them\n    // here\n    var ref = React.useRef(null);\n    // render the dragPreview into a detached element to prevent it from appearing too early\n    var dragPreviewRoot = document.createElement('div');\n    var portaledComponent = function (props) {\n        var sendProps = __assign({}, props, { ref: ref });\n        return react_dom_1.createPortal(React.createElement(DragPreview, sendProps), dragPreviewRoot);\n    };\n    return [portaledComponent, ref];\n}\nexports.useDragPreview = useDragPreview;\n\n\n//# sourceURL=webpack://ReactDnD/./src/hooks/useDragPreview.ts?");

/***/ }),

/***/ "./src/hooks/useDrop.ts":
/*!******************************!*\
  !*** ./src/hooks/useDrop.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar useDragDropManager_1 = __webpack_require__(/*! ./internal/useDragDropManager */ \"./src/hooks/internal/useDragDropManager.ts\");\nvar useDropTargetMonitor_1 = __webpack_require__(/*! ./internal/useDropTargetMonitor */ \"./src/hooks/internal/useDropTargetMonitor.ts\");\nvar useMonitorOutput_1 = __webpack_require__(/*! ./internal/useMonitorOutput */ \"./src/hooks/internal/useMonitorOutput.ts\");\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\n/**\n * useDropTarget Hook (This API is experimental and subject to breaking changes in non-breaking versions)\n * @param spec The drop target specification\n */\nfunction useDrop(spec) {\n    var accept = spec.accept, options = spec.options, collect = spec.collect;\n    invariant(accept != null, 'accept must be defined');\n    var ref = spec.ref;\n    if (!ref) {\n        ref = react_1.useRef(null);\n    }\n    var manager = useDragDropManager_1.useDragDropManager();\n    var backend = manager.getBackend();\n    var monitor = useDropTargetMonitor_1.useDropTargetMonitor(manager, spec);\n    /*\n     * Connect the Drop Target Element to the Backend\n     */\n    react_1.useEffect(function connectDropTarget() {\n        if (ref.current) {\n            var node = ref.current;\n            if (node) {\n                return backend.connectDropTarget(monitor.getHandlerId(), node, options);\n            }\n        }\n    });\n    var result = collect\n        ? useMonitorOutput_1.useMonitorOutput(monitor, collect)\n        : {};\n    return [result, ref];\n}\nexports.useDrop = useDrop;\n\n\n//# sourceURL=webpack://ReactDnD/./src/hooks/useDrop.ts?");

/***/ }),

/***/ "./src/hooks/util.ts":
/*!***************************!*\
  !*** ./src/hooks/util.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction isRef(obj) {\n    if (obj !== null && typeof obj === 'object') {\n        var keys = Object.keys(obj);\n        return keys.length === 1 && keys[0] === 'current';\n    }\n    return false;\n}\nexports.isRef = isRef;\n\n\n//# sourceURL=webpack://ReactDnD/./src/hooks/util.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DragDropContext_1 = __webpack_require__(/*! ./DragDropContext */ \"./src/DragDropContext.tsx\");\nexports.DragDropContext = DragDropContext_1.DragDropContext;\nexports.DragDropContextProvider = DragDropContext_1.DragDropContextProvider;\nexports.DragDropContextConsumer = DragDropContext_1.Consumer;\nexports.DragDropContextProviderProps = DragDropContext_1.DragDropContextProviderProps;\nvar DragLayer_1 = __webpack_require__(/*! ./DragLayer */ \"./src/DragLayer.tsx\");\nexports.DragLayer = DragLayer_1.default;\nvar DragSource_1 = __webpack_require__(/*! ./DragSource */ \"./src/DragSource.ts\");\nexports.DragSource = DragSource_1.default;\nvar DropTarget_1 = __webpack_require__(/*! ./DropTarget */ \"./src/DropTarget.ts\");\nexports.DropTarget = DropTarget_1.default;\n__export(__webpack_require__(/*! ./interfaces */ \"./src/interfaces/index.ts\"));\nvar hooks_1 = __webpack_require__(/*! ./hooks */ \"./src/hooks/index.ts\");\nexports.__EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ = {\n    useDrag: hooks_1.useDrag,\n    useDragLayer: hooks_1.useDragLayer,\n    useDrop: hooks_1.useDrop,\n    useDragPreview: hooks_1.useDragPreview,\n};\n\n\n//# sourceURL=webpack://ReactDnD/./src/index.ts?");

/***/ }),

/***/ "./src/interfaces/classApi.ts":
/*!************************************!*\
  !*** ./src/interfaces/classApi.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n\n\n//# sourceURL=webpack://ReactDnD/./src/interfaces/classApi.ts?");

/***/ }),

/***/ "./src/interfaces/hooksApi.ts":
/*!************************************!*\
  !*** ./src/interfaces/hooksApi.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n\n\n//# sourceURL=webpack://ReactDnD/./src/interfaces/hooksApi.ts?");

/***/ }),

/***/ "./src/interfaces/index.ts":
/*!*********************************!*\
  !*** ./src/interfaces/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar dnd_core_1 = __webpack_require__(/*! dnd-core */ \"../dnd-core/lib/cjs/index.js\");\nexports.XYCoord = dnd_core_1.XYCoord;\n__export(__webpack_require__(/*! ./classApi */ \"./src/interfaces/classApi.ts\"));\n__export(__webpack_require__(/*! ./monitors */ \"./src/interfaces/monitors.ts\"));\n__export(__webpack_require__(/*! ./hooksApi */ \"./src/interfaces/hooksApi.ts\"));\n__export(__webpack_require__(/*! ./options */ \"./src/interfaces/options.ts\"));\n\n\n//# sourceURL=webpack://ReactDnD/./src/interfaces/index.ts?");

/***/ }),

/***/ "./src/interfaces/monitors.ts":
/*!************************************!*\
  !*** ./src/interfaces/monitors.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n\n\n//# sourceURL=webpack://ReactDnD/./src/interfaces/monitors.ts?");

/***/ }),

/***/ "./src/interfaces/options.ts":
/*!***********************************!*\
  !*** ./src/interfaces/options.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n\n\n//# sourceURL=webpack://ReactDnD/./src/interfaces/options.ts?");

/***/ }),

/***/ "./src/registerSource.ts":
/*!*******************************!*\
  !*** ./src/registerSource.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction registerSource(type, source, manager) {\n    var registry = manager.getRegistry();\n    var sourceId = registry.addSource(type, source);\n    return {\n        handlerId: sourceId,\n        unregister: function () { return registry.removeSource(sourceId); },\n    };\n}\nexports.default = registerSource;\n\n\n//# sourceURL=webpack://ReactDnD/./src/registerSource.ts?");

/***/ }),

/***/ "./src/registerTarget.ts":
/*!*******************************!*\
  !*** ./src/registerTarget.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction registerTarget(type, target, manager) {\n    var registry = manager.getRegistry();\n    var targetId = registry.addTarget(type, target);\n    return {\n        handlerId: targetId,\n        unregister: function () { return registry.removeTarget(targetId); },\n    };\n}\nexports.default = registerTarget;\n\n\n//# sourceURL=webpack://ReactDnD/./src/registerTarget.ts?");

/***/ }),

/***/ "./src/utils/checkDecoratorArguments.ts":
/*!**********************************************!*\
  !*** ./src/utils/checkDecoratorArguments.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction checkDecoratorArguments(functionName, signature) {\n    var args = [];\n    for (var _i = 2; _i < arguments.length; _i++) {\n        args[_i - 2] = arguments[_i];\n    }\n    if (false) { var arg, _a, args_1; }\n}\nexports.default = checkDecoratorArguments;\n\n\n//# sourceURL=webpack://ReactDnD/./src/utils/checkDecoratorArguments.ts?");

/***/ }),

/***/ "./src/utils/cloneWithRef.ts":
/*!***********************************!*\
  !*** ./src/utils/cloneWithRef.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar invariant = __webpack_require__(/*! invariant */ \"./node_modules/invariant/browser.js\");\nfunction setRef(ref, node) {\n    if (typeof ref === 'function') {\n        ref(node);\n    }\n    else {\n        ref.current = node;\n    }\n}\nfunction cloneWithRef(element, newRef) {\n    var previousRef = element.ref;\n    invariant(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' +\n        'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' +\n        'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');\n    if (!previousRef) {\n        // When there is no ref on the element, use the new ref directly\n        return react_1.cloneElement(element, {\n            ref: newRef,\n        });\n    }\n    return react_1.cloneElement(element, {\n        ref: function (node) {\n            setRef(newRef, node);\n            if (previousRef) {\n                setRef(previousRef, node);\n            }\n        },\n    });\n}\nexports.default = cloneWithRef;\n\n\n//# sourceURL=webpack://ReactDnD/./src/utils/cloneWithRef.ts?");

/***/ }),

/***/ "./src/utils/disposables/CompositeDisposable.ts":
/*!******************************************************!*\
  !*** ./src/utils/disposables/CompositeDisposable.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * Represents a group of disposable resources that are disposed together.\n * @constructor\n */\nvar CompositeDisposable = /** @class */ (function () {\n    function CompositeDisposable() {\n        var disposables = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            disposables[_i] = arguments[_i];\n        }\n        this.isDisposed = false;\n        this.disposables = disposables;\n    }\n    /**\n     * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.\n     * @param {Any} item Disposable to add.\n     */\n    CompositeDisposable.prototype.add = function (item) {\n        if (this.isDisposed) {\n            item.dispose();\n        }\n        else {\n            this.disposables.push(item);\n        }\n    };\n    /**\n     * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.\n     * @param {Any} item Disposable to remove.\n     * @returns {Boolean} true if found; false otherwise.\n     */\n    CompositeDisposable.prototype.remove = function (item) {\n        var shouldDispose = false;\n        if (!this.isDisposed) {\n            var idx = this.disposables.indexOf(item);\n            if (idx !== -1) {\n                shouldDispose = true;\n                this.disposables.splice(idx, 1);\n                item.dispose();\n            }\n        }\n        return shouldDispose;\n    };\n    /**\n     *  Disposes all disposables in the group and removes them from the group but\n     *  does not dispose the CompositeDisposable.\n     */\n    CompositeDisposable.prototype.clear = function () {\n        if (!this.isDisposed) {\n            var len = this.disposables.length;\n            var currentDisposables = new Array(len);\n            for (var i = 0; i < len; i++) {\n                currentDisposables[i] = this.disposables[i];\n            }\n            this.disposables = [];\n            for (var i = 0; i < len; i++) {\n                currentDisposables[i].dispose();\n            }\n        }\n    };\n    /**\n     *  Disposes all disposables in the group and removes them from the group.\n     */\n    CompositeDisposable.prototype.dispose = function () {\n        if (!this.isDisposed) {\n            this.isDisposed = true;\n            var len = this.disposables.length;\n            var currentDisposables = new Array(len);\n            for (var i = 0; i < len; i++) {\n                currentDisposables[i] = this.disposables[i];\n            }\n            this.disposables = [];\n            for (var i = 0; i < len; i++) {\n                currentDisposables[i].dispose();\n            }\n        }\n    };\n    return CompositeDisposable;\n}());\nexports.CompositeDisposable = CompositeDisposable;\n\n\n//# sourceURL=webpack://ReactDnD/./src/utils/disposables/CompositeDisposable.ts?");

/***/ }),

/***/ "./src/utils/disposables/Disposable.ts":
/*!*********************************************!*\
  !*** ./src/utils/disposables/Disposable.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar isFunction = __webpack_require__(/*! lodash/isFunction */ \"./node_modules/lodash/isFunction.js\");\nvar noop = __webpack_require__(/*! lodash/noop */ \"./node_modules/lodash/noop.js\");\n/**\n * Provides a set of static methods for creating Disposables.\n * @param {Function} action Action to run during the first call to dispose.\n * The action is guaranteed to be run at most once.\n */\nvar Disposable = /** @class */ (function () {\n    function Disposable(action) {\n        this.isDisposed = false;\n        this.action = isFunction(action) ? action : noop;\n    }\n    /**\n     * Validates whether the given object is a disposable\n     * @param {Object} Object to test whether it has a dispose method\n     * @returns {Boolean} true if a disposable object, else false.\n     */\n    Disposable.isDisposable = function (d) {\n        return d && isFunction(d.dispose);\n    };\n    Disposable._fixup = function (result) {\n        return Disposable.isDisposable(result) ? result : Disposable.empty;\n    };\n    /**\n     * Creates a disposable object that invokes the specified action when disposed.\n     * @param {Function} dispose Action to run during the first call to dispose.\n     * The action is guaranteed to be run at most once.\n     * @return {Disposable} The disposable object that runs the given action upon disposal.\n     */\n    Disposable.create = function (action) {\n        return new Disposable(action);\n    };\n    /** Performs the task of cleaning up resources. */\n    Disposable.prototype.dispose = function () {\n        if (!this.isDisposed) {\n            this.action();\n            this.isDisposed = true;\n        }\n    };\n    /**\n     * Gets the disposable that does nothing when disposed.\n     */\n    Disposable.empty = { dispose: noop };\n    return Disposable;\n}());\nexports.Disposable = Disposable;\n\n\n//# sourceURL=webpack://ReactDnD/./src/utils/disposables/Disposable.ts?");

/***/ }),

/***/ "./src/utils/disposables/SerialDisposable.ts":
/*!***************************************************!*\
  !*** ./src/utils/disposables/SerialDisposable.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * Represents a disposable resource whose underlying disposable resource can\n * be replaced by another disposable resource, causing automatic disposal of\n * the previous underlying disposable resource.\n */\nvar SerialDisposable = /** @class */ (function () {\n    function SerialDisposable() {\n        this.isDisposed = false;\n    }\n    /**\n     * Gets the underlying disposable.\n     * @returns {Any} the underlying disposable.\n     */\n    SerialDisposable.prototype.getDisposable = function () {\n        return this.current;\n    };\n    SerialDisposable.prototype.setDisposable = function (value) {\n        var shouldDispose = this.isDisposed;\n        if (!shouldDispose) {\n            var old = this.current;\n            this.current = value;\n            if (old) {\n                old.dispose();\n            }\n        }\n        if (shouldDispose && value) {\n            value.dispose();\n        }\n    };\n    /** Performs the task of cleaning up resources. */\n    SerialDisposable.prototype.dispose = function () {\n        if (!this.isDisposed) {\n            this.isDisposed = true;\n            var old = this.current;\n            this.current = undefined;\n            if (old) {\n                old.dispose();\n            }\n        }\n    };\n    return SerialDisposable;\n}());\nexports.SerialDisposable = SerialDisposable;\n\n\n//# sourceURL=webpack://ReactDnD/./src/utils/disposables/SerialDisposable.ts?");

/***/ }),

/***/ "./src/utils/disposables/index.ts":
/*!****************************************!*\
  !*** ./src/utils/disposables/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./Disposable */ \"./src/utils/disposables/Disposable.ts\"));\n__export(__webpack_require__(/*! ./SerialDisposable */ \"./src/utils/disposables/SerialDisposable.ts\"));\n__export(__webpack_require__(/*! ./CompositeDisposable */ \"./src/utils/disposables/CompositeDisposable.ts\"));\n\n\n//# sourceURL=webpack://ReactDnD/./src/utils/disposables/index.ts?");

/***/ }),

/***/ "./src/utils/isValidType.ts":
/*!**********************************!*\
  !*** ./src/utils/isValidType.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction isValidType(type, allowArray) {\n    return (typeof type === 'string' ||\n        typeof type === 'symbol' ||\n        (!!allowArray &&\n            Array.isArray(type) &&\n            type.every(function (t) { return isValidType(t, false); })));\n}\nexports.default = isValidType;\n\n\n//# sourceURL=webpack://ReactDnD/./src/utils/isValidType.ts?");

/***/ }),

/***/ "./src/wrapConnectorHooks.ts":
/*!***********************************!*\
  !*** ./src/wrapConnectorHooks.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar cloneWithRef_1 = __webpack_require__(/*! ./utils/cloneWithRef */ \"./src/utils/cloneWithRef.ts\");\nfunction throwIfCompositeComponentElement(element) {\n    // Custom components can no longer be wrapped directly in React DnD 2.0\n    // so that we don't need to depend on findDOMNode() from react-dom.\n    if (typeof element.type === 'string') {\n        return;\n    }\n    var displayName = element.type.displayName || element.type.name || 'the component';\n    throw new Error('Only native element nodes can now be passed to React DnD connectors.' +\n        (\"You can either wrap \" + displayName + \" into a <div>, or turn it into a \") +\n        'drag source or a drop target itself.');\n}\nfunction wrapHookToRecognizeElement(hook) {\n    return function (elementOrNode, options) {\n        if (elementOrNode === void 0) { elementOrNode = null; }\n        if (options === void 0) { options = null; }\n        // When passed a node, call the hook straight away.\n        if (!react_1.isValidElement(elementOrNode)) {\n            var node = elementOrNode;\n            hook(node, options);\n            return undefined;\n        }\n        // If passed a ReactElement, clone it and attach this function as a ref.\n        // This helps us achieve a neat API where user doesn't even know that refs\n        // are being used under the hood.\n        var element = elementOrNode;\n        throwIfCompositeComponentElement(element);\n        // When no options are passed, use the hook directly\n        var ref = options ? function (node) { return hook(node, options); } : hook;\n        return cloneWithRef_1.default(element, ref);\n    };\n}\nfunction wrapConnectorHooks(hooks) {\n    var wrappedHooks = {};\n    Object.keys(hooks).forEach(function (key) {\n        var hook = hooks[key];\n        var wrappedHook = wrapHookToRecognizeElement(hook);\n        wrappedHooks[key] = function () { return wrappedHook; };\n    });\n    return wrappedHooks;\n}\nexports.default = wrapConnectorHooks;\n\n\n//# sourceURL=webpack://ReactDnD/./src/wrapConnectorHooks.ts?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://ReactDnD/external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ })

/******/ });
});