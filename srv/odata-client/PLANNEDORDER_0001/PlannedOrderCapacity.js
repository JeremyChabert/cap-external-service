"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlannedOrderCapacity = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PlannedOrderCapacityRequestBuilder_1 = require("./PlannedOrderCapacityRequestBuilder");
var Sap_Message_1 = require("./Sap_Message");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PlannedOrderCapacity" of service "com.sap.gateway.srvd_a2x.api_plannedorder.v0001".
 */
var PlannedOrderCapacity = /** @class */ (function (_super) {
    __extends(PlannedOrderCapacity, _super);
    function PlannedOrderCapacity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PlannedOrderCapacity`.
     * @returns A builder that constructs instances of entity type `PlannedOrderCapacity`.
     */
    PlannedOrderCapacity.builder = function () {
        return core_1.EntityV4.entityBuilder(PlannedOrderCapacity);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PlannedOrderCapacity` entity type.
     * @returns A `PlannedOrderCapacity` request builder.
     */
    PlannedOrderCapacity.requestBuilder = function () {
        return new PlannedOrderCapacityRequestBuilder_1.PlannedOrderCapacityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PlannedOrderCapacity`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PlannedOrderCapacity`.
     */
    PlannedOrderCapacity.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PlannedOrderCapacity);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PlannedOrderCapacity.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PlannedOrderCapacity.
     */
    PlannedOrderCapacity._entityName = 'PlannedOrderCapacity';
    /**
     * Default url path for the according service.
     */
    PlannedOrderCapacity._defaultServicePath = '/odata/v4';
    return PlannedOrderCapacity;
}(core_1.EntityV4));
exports.PlannedOrderCapacity = PlannedOrderCapacity;
var PlannedOrderHeader_1 = require("./PlannedOrderHeader");
(function (PlannedOrderCapacity) {
    var _fieldBuilder = new core_1.FieldBuilder(PlannedOrderCapacity);
    /**
     * Static representation of the [[plannedOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.PLANNED_ORDER = _fieldBuilder.buildEdmTypeField('PlannedOrder', 'Edm.String', false);
    /**
     * Static representation of the [[capacityRequirement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.CAPACITY_REQUIREMENT = _fieldBuilder.buildEdmTypeField('CapacityRequirement', 'Edm.String', false);
    /**
     * Static representation of the [[capacityRequirementItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.CAPACITY_REQUIREMENT_ITEM = _fieldBuilder.buildEdmTypeField('CapacityRequirementItem', 'Edm.String', false);
    /**
     * Static representation of the [[capacityRqmtItemCapacity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.CAPACITY_RQMT_ITEM_CAPACITY = _fieldBuilder.buildEdmTypeField('CapacityRqmtItemCapacity', 'Edm.String', false);
    /**
     * Static representation of the [[plannedOrderType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.PLANNED_ORDER_TYPE = _fieldBuilder.buildEdmTypeField('PlannedOrderType', 'Edm.String', false);
    /**
     * Static representation of the [[sequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.SEQUENCE = _fieldBuilder.buildEdmTypeField('Sequence', 'Edm.String', false);
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.OPERATION = _fieldBuilder.buildEdmTypeField('Operation', 'Edm.String', false);
    /**
     * Static representation of the [[subOperation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.SUB_OPERATION = _fieldBuilder.buildEdmTypeField('SubOperation', 'Edm.String', false);
    /**
     * Static representation of the [[workCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.WORK_CENTER = _fieldBuilder.buildEdmTypeField('WorkCenter', 'Edm.String', false);
    /**
     * Static representation of the [[capacityCategoryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.CAPACITY_CATEGORY_CODE = _fieldBuilder.buildEdmTypeField('CapacityCategoryCode', 'Edm.String', false);
    /**
     * Static representation of the [[capacity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.CAPACITY = _fieldBuilder.buildEdmTypeField('Capacity', 'Edm.String', false);
    /**
     * Static representation of the [[mrpController]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.MRP_CONTROLLER = _fieldBuilder.buildEdmTypeField('MRPController', 'Edm.String', false);
    /**
     * Static representation of the [[mrpPlant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.MRP_PLANT = _fieldBuilder.buildEdmTypeField('MRPPlant', 'Edm.String', false);
    /**
     * Static representation of the [[operationLatestStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.OPERATION_LATEST_START_DATE = _fieldBuilder.buildEdmTypeField('OperationLatestStartDate', 'Edm.Date', true);
    /**
     * Static representation of the [[operationLatestStartTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.OPERATION_LATEST_START_TIME = _fieldBuilder.buildEdmTypeField('OperationLatestStartTime', 'Edm.TimeOfDay', false);
    /**
     * Static representation of the [[operationLatestEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.OPERATION_LATEST_END_DATE = _fieldBuilder.buildEdmTypeField('OperationLatestEndDate', 'Edm.Date', true);
    /**
     * Static representation of the [[operationLatestEndTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.OPERATION_LATEST_END_TIME = _fieldBuilder.buildEdmTypeField('OperationLatestEndTime', 'Edm.TimeOfDay', false);
    /**
     * Static representation of the [[operationEarliestStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.OPERATION_EARLIEST_START_DATE = _fieldBuilder.buildEdmTypeField('OperationEarliestStartDate', 'Edm.Date', true);
    /**
     * Static representation of the [[operationEarliestStartTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.OPERATION_EARLIEST_START_TIME = _fieldBuilder.buildEdmTypeField('OperationEarliestStartTime', 'Edm.TimeOfDay', false);
    /**
     * Static representation of the [[operationEarliestEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.OPERATION_EARLIEST_END_DATE = _fieldBuilder.buildEdmTypeField('OperationEarliestEndDate', 'Edm.Date', true);
    /**
     * Static representation of the [[operationEarliestEndTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.OPERATION_EARLIEST_END_TIME = _fieldBuilder.buildEdmTypeField('OperationEarliestEndTime', 'Edm.TimeOfDay', false);
    /**
     * Static representation of the [[opLtstSchedldProcgStrtDte]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.OP_LTST_SCHEDLD_PROCG_STRT_DTE = _fieldBuilder.buildEdmTypeField('OpLtstSchedldProcgStrtDte', 'Edm.Date', true);
    /**
     * Static representation of the [[opLtstSchedldProcgStrtTme]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.OP_LTST_SCHEDLD_PROCG_STRT_TME = _fieldBuilder.buildEdmTypeField('OpLtstSchedldProcgStrtTme', 'Edm.TimeOfDay', false);
    /**
     * Static representation of the [[opLtstSchedldTrdwnStrtDte]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.OP_LTST_SCHEDLD_TRDWN_STRT_DTE = _fieldBuilder.buildEdmTypeField('OpLtstSchedldTrdwnStrtDte', 'Edm.Date', true);
    /**
     * Static representation of the [[opLtstSchedldTrdwnStrtTme]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.OP_LTST_SCHEDLD_TRDWN_STRT_TME = _fieldBuilder.buildEdmTypeField('OpLtstSchedldTrdwnStrtTme', 'Edm.TimeOfDay', false);
    /**
     * Static representation of the [[scheduledBasicEndTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.SCHEDULED_BASIC_END_TIME = _fieldBuilder.buildEdmTypeField('ScheduledBasicEndTime', 'Edm.TimeOfDay', false);
    /**
     * Static representation of the [[scheduledBasicStartTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.SCHEDULED_BASIC_START_TIME = _fieldBuilder.buildEdmTypeField('ScheduledBasicStartTime', 'Edm.TimeOfDay', false);
    /**
     * Static representation of the [[capacityRequirementUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.CAPACITY_REQUIREMENT_UNIT = _fieldBuilder.buildEdmTypeField('CapacityRequirementUnit', 'Edm.String', false);
    /**
     * Static representation of the [[unitOfMeasureIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.UNIT_OF_MEASURE_ISO_CODE = _fieldBuilder.buildEdmTypeField('UnitOfMeasureISOCode', 'Edm.String', false);
    /**
     * Static representation of the [[scheduledCapReqOpSegSetupDurn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.SCHEDULED_CAP_REQ_OP_SEG_SETUP_DURN = _fieldBuilder.buildEdmTypeField('ScheduledCapReqOpSegSetupDurn', 'Edm.Double', false);
    /**
     * Static representation of the [[remainingCapReqOpSegSetupDurn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.REMAINING_CAP_REQ_OP_SEG_SETUP_DURN = _fieldBuilder.buildEdmTypeField('RemainingCapReqOpSegSetupDurn', 'Edm.Double', false);
    /**
     * Static representation of the [[scheduledCapReqOpSegProcgDurn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.SCHEDULED_CAP_REQ_OP_SEG_PROCG_DURN = _fieldBuilder.buildEdmTypeField('ScheduledCapReqOpSegProcgDurn', 'Edm.Double', false);
    /**
     * Static representation of the [[remainingCapReqOpSegProcgDurn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.REMAINING_CAP_REQ_OP_SEG_PROCG_DURN = _fieldBuilder.buildEdmTypeField('RemainingCapReqOpSegProcgDurn', 'Edm.Double', false);
    /**
     * Static representation of the [[scheduledCapReqOpSegTrdwnDurn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.SCHEDULED_CAP_REQ_OP_SEG_TRDWN_DURN = _fieldBuilder.buildEdmTypeField('ScheduledCapReqOpSegTrdwnDurn', 'Edm.Double', false);
    /**
     * Static representation of the [[remainingCapReqOpSegTrdwnDurn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.REMAINING_CAP_REQ_OP_SEG_TRDWN_DURN = _fieldBuilder.buildEdmTypeField('RemainingCapReqOpSegTrdwnDurn', 'Edm.Double', false);
    /**
     * Static representation of the [[wrkCtrHasLeadingCapacity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.WRK_CTR_HAS_LEADING_CAPACITY = _fieldBuilder.buildEdmTypeField('WrkCtrHasLeadingCapacity', 'Edm.Boolean', false);
    /**
     * Static representation of the [[operationText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.OPERATION_TEXT = _fieldBuilder.buildEdmTypeField('OperationText', 'Edm.String', false);
    /**
     * Static representation of the [[plannedOrderLastChangeDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.PLANNED_ORDER_LAST_CHANGE_DATE_TIME = _fieldBuilder.buildEdmTypeField('PlannedOrderLastChangeDateTime', 'Edm.DateTimeOffset', true);
    /**
     * Static representation of the [[sapMessages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.SAP_MESSAGES = _fieldBuilder.buildCollectionField('SAP__Messages', Sap_Message_1.Sap_Message, false);
    /**
     * Static representation of the one-to-one navigation property [[plannedOrder_1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderCapacity.PLANNED_ORDER_1 = new core_1.OneToOneLink('_PlannedOrder', PlannedOrderCapacity, PlannedOrderHeader_1.PlannedOrderHeader);
    /**
     * All fields of the PlannedOrderCapacity entity.
     */
    PlannedOrderCapacity._allFields = [
        PlannedOrderCapacity.PLANNED_ORDER,
        PlannedOrderCapacity.CAPACITY_REQUIREMENT,
        PlannedOrderCapacity.CAPACITY_REQUIREMENT_ITEM,
        PlannedOrderCapacity.CAPACITY_RQMT_ITEM_CAPACITY,
        PlannedOrderCapacity.PLANNED_ORDER_TYPE,
        PlannedOrderCapacity.SEQUENCE,
        PlannedOrderCapacity.OPERATION,
        PlannedOrderCapacity.SUB_OPERATION,
        PlannedOrderCapacity.WORK_CENTER,
        PlannedOrderCapacity.CAPACITY_CATEGORY_CODE,
        PlannedOrderCapacity.CAPACITY,
        PlannedOrderCapacity.MRP_CONTROLLER,
        PlannedOrderCapacity.MRP_PLANT,
        PlannedOrderCapacity.OPERATION_LATEST_START_DATE,
        PlannedOrderCapacity.OPERATION_LATEST_START_TIME,
        PlannedOrderCapacity.OPERATION_LATEST_END_DATE,
        PlannedOrderCapacity.OPERATION_LATEST_END_TIME,
        PlannedOrderCapacity.OPERATION_EARLIEST_START_DATE,
        PlannedOrderCapacity.OPERATION_EARLIEST_START_TIME,
        PlannedOrderCapacity.OPERATION_EARLIEST_END_DATE,
        PlannedOrderCapacity.OPERATION_EARLIEST_END_TIME,
        PlannedOrderCapacity.OP_LTST_SCHEDLD_PROCG_STRT_DTE,
        PlannedOrderCapacity.OP_LTST_SCHEDLD_PROCG_STRT_TME,
        PlannedOrderCapacity.OP_LTST_SCHEDLD_TRDWN_STRT_DTE,
        PlannedOrderCapacity.OP_LTST_SCHEDLD_TRDWN_STRT_TME,
        PlannedOrderCapacity.SCHEDULED_BASIC_END_TIME,
        PlannedOrderCapacity.SCHEDULED_BASIC_START_TIME,
        PlannedOrderCapacity.CAPACITY_REQUIREMENT_UNIT,
        PlannedOrderCapacity.UNIT_OF_MEASURE_ISO_CODE,
        PlannedOrderCapacity.SCHEDULED_CAP_REQ_OP_SEG_SETUP_DURN,
        PlannedOrderCapacity.REMAINING_CAP_REQ_OP_SEG_SETUP_DURN,
        PlannedOrderCapacity.SCHEDULED_CAP_REQ_OP_SEG_PROCG_DURN,
        PlannedOrderCapacity.REMAINING_CAP_REQ_OP_SEG_PROCG_DURN,
        PlannedOrderCapacity.SCHEDULED_CAP_REQ_OP_SEG_TRDWN_DURN,
        PlannedOrderCapacity.REMAINING_CAP_REQ_OP_SEG_TRDWN_DURN,
        PlannedOrderCapacity.WRK_CTR_HAS_LEADING_CAPACITY,
        PlannedOrderCapacity.OPERATION_TEXT,
        PlannedOrderCapacity.PLANNED_ORDER_LAST_CHANGE_DATE_TIME,
        PlannedOrderCapacity.SAP_MESSAGES,
        PlannedOrderCapacity.PLANNED_ORDER_1
    ];
    /**
     * All fields selector.
     */
    PlannedOrderCapacity.ALL_FIELDS = new core_1.AllFields('*', PlannedOrderCapacity);
    /**
     * All key fields of the PlannedOrderCapacity entity.
     */
    PlannedOrderCapacity._keyFields = [PlannedOrderCapacity.PLANNED_ORDER, PlannedOrderCapacity.CAPACITY_REQUIREMENT, PlannedOrderCapacity.CAPACITY_REQUIREMENT_ITEM, PlannedOrderCapacity.CAPACITY_RQMT_ITEM_CAPACITY];
    /**
     * Mapping of all key field names to the respective static field property PlannedOrderCapacity.
     */
    PlannedOrderCapacity._keys = PlannedOrderCapacity._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PlannedOrderCapacity = exports.PlannedOrderCapacity || (exports.PlannedOrderCapacity = {}));
exports.PlannedOrderCapacity = PlannedOrderCapacity;
//# sourceMappingURL=PlannedOrderCapacity.js.map