"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultPlannedorder_0001Path = exports.changeset = exports.batch = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var util_1 = require("@sap-cloud-sdk/util");
var index_1 = require("./index");
function batch(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return new core_1.ODataBatchRequestBuilderV4(exports.defaultPlannedorder_0001Path, util_1.variadicArgumentToArray(first, rest), map);
}
exports.batch = batch;
function changeset(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return new core_1.ODataBatchChangeSetV4(util_1.variadicArgumentToArray(first, rest));
}
exports.changeset = changeset;
exports.defaultPlannedorder_0001Path = '/odata/v4';
var map = { 'PlannedOrderCapacity': index_1.PlannedOrderCapacity, 'PlannedOrderComponent': index_1.PlannedOrderComponent, 'PlannedOrderHeader': index_1.PlannedOrderHeader };
//# sourceMappingURL=BatchRequest.js.map