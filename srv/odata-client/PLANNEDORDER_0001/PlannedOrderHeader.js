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
exports.PlannedOrderHeader = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PlannedOrderHeaderRequestBuilder_1 = require("./PlannedOrderHeaderRequestBuilder");
var Sap_Message_1 = require("./Sap_Message");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PlannedOrderHeader" of service "com.sap.gateway.srvd_a2x.api_plannedorder.v0001".
 */
var PlannedOrderHeader = /** @class */ (function (_super) {
    __extends(PlannedOrderHeader, _super);
    function PlannedOrderHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PlannedOrderHeader`.
     * @returns A builder that constructs instances of entity type `PlannedOrderHeader`.
     */
    PlannedOrderHeader.builder = function () {
        return core_1.EntityV4.entityBuilder(PlannedOrderHeader);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PlannedOrderHeader` entity type.
     * @returns A `PlannedOrderHeader` request builder.
     */
    PlannedOrderHeader.requestBuilder = function () {
        return new PlannedOrderHeaderRequestBuilder_1.PlannedOrderHeaderRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PlannedOrderHeader`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PlannedOrderHeader`.
     */
    PlannedOrderHeader.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PlannedOrderHeader);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PlannedOrderHeader.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PlannedOrderHeader.
     */
    PlannedOrderHeader._entityName = 'PlannedOrderHeader';
    /**
     * Default url path for the according service.
     */
    PlannedOrderHeader._defaultServicePath = '/odata/v4';
    return PlannedOrderHeader;
}(core_1.EntityV4));
exports.PlannedOrderHeader = PlannedOrderHeader;
var PlannedOrderCapacity_1 = require("./PlannedOrderCapacity");
var PlannedOrderComponent_1 = require("./PlannedOrderComponent");
(function (PlannedOrderHeader) {
    var _fieldBuilder = new core_1.FieldBuilder(PlannedOrderHeader);
    /**
     * Static representation of the [[plannedOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLANNED_ORDER = _fieldBuilder.buildEdmTypeField('PlannedOrder', 'Edm.String', false);
    /**
     * Static representation of the [[plannedOrderType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLANNED_ORDER_TYPE = _fieldBuilder.buildEdmTypeField('PlannedOrderType', 'Edm.String', false);
    /**
     * Static representation of the [[plannedOrderProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLANNED_ORDER_PROFILE = _fieldBuilder.buildEdmTypeField('PlannedOrderProfile', 'Edm.String', false);
    /**
     * Static representation of the [[material]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.MATERIAL = _fieldBuilder.buildEdmTypeField('Material', 'Edm.String', false);
    /**
     * Static representation of the [[materialName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.MATERIAL_NAME = _fieldBuilder.buildEdmTypeField('MaterialName', 'Edm.String', false);
    /**
     * Static representation of the [[productionPlant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PRODUCTION_PLANT = _fieldBuilder.buildEdmTypeField('ProductionPlant', 'Edm.String', false);
    /**
     * Static representation of the [[mrpPlant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.MRP_PLANT = _fieldBuilder.buildEdmTypeField('MRPPlant', 'Edm.String', false);
    /**
     * Static representation of the [[mrpArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.MRP_AREA = _fieldBuilder.buildEdmTypeField('MRPArea', 'Edm.String', false);
    /**
     * Static representation of the [[productionVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PRODUCTION_VERSION = _fieldBuilder.buildEdmTypeField('ProductionVersion', 'Edm.String', false);
    /**
     * Static representation of the [[materialProcurementCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.MATERIAL_PROCUREMENT_CATEGORY = _fieldBuilder.buildEdmTypeField('MaterialProcurementCategory', 'Edm.String', false);
    /**
     * Static representation of the [[materialProcurementType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.MATERIAL_PROCUREMENT_TYPE = _fieldBuilder.buildEdmTypeField('MaterialProcurementType', 'Edm.String', false);
    /**
     * Static representation of the [[storageLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.STORAGE_LOCATION = _fieldBuilder.buildEdmTypeField('StorageLocation', 'Edm.String', false);
    /**
     * Static representation of the [[baseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.BASE_UNIT = _fieldBuilder.buildEdmTypeField('BaseUnit', 'Edm.String', false);
    /**
     * Static representation of the [[totalQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.TOTAL_QUANTITY = _fieldBuilder.buildEdmTypeField('TotalQuantity', 'Edm.Decimal', false);
    /**
     * Static representation of the [[plndOrderPlannedScrapQty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLND_ORDER_PLANNED_SCRAP_QTY = _fieldBuilder.buildEdmTypeField('PlndOrderPlannedScrapQty', 'Edm.Decimal', false);
    /**
     * Static representation of the [[goodsReceiptQty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.GOODS_RECEIPT_QTY = _fieldBuilder.buildEdmTypeField('GoodsReceiptQty', 'Edm.Decimal', false);
    /**
     * Static representation of the [[issuedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.ISSUED_QUANTITY = _fieldBuilder.buildEdmTypeField('IssuedQuantity', 'Edm.Decimal', false);
    /**
     * Static representation of the [[plndOrderPlannedStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLND_ORDER_PLANNED_START_DATE = _fieldBuilder.buildEdmTypeField('PlndOrderPlannedStartDate', 'Edm.Date', true);
    /**
     * Static representation of the [[plndOrderPlannedStartTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLND_ORDER_PLANNED_START_TIME = _fieldBuilder.buildEdmTypeField('PlndOrderPlannedStartTime', 'Edm.TimeOfDay', false);
    /**
     * Static representation of the [[plndOrderPlannedEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLND_ORDER_PLANNED_END_DATE = _fieldBuilder.buildEdmTypeField('PlndOrderPlannedEndDate', 'Edm.Date', true);
    /**
     * Static representation of the [[plndOrderPlannedEndTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLND_ORDER_PLANNED_END_TIME = _fieldBuilder.buildEdmTypeField('PlndOrderPlannedEndTime', 'Edm.TimeOfDay', false);
    /**
     * Static representation of the [[plannedOrderOpeningDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLANNED_ORDER_OPENING_DATE = _fieldBuilder.buildEdmTypeField('PlannedOrderOpeningDate', 'Edm.Date', true);
    /**
     * Static representation of the [[plannedOrderLastChangeDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLANNED_ORDER_LAST_CHANGE_DATE_TIME = _fieldBuilder.buildEdmTypeField('PlannedOrderLastChangeDateTime', 'Edm.DateTimeOffset', true);
    /**
     * Static representation of the [[productionStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PRODUCTION_START_DATE = _fieldBuilder.buildEdmTypeField('ProductionStartDate', 'Edm.Date', true);
    /**
     * Static representation of the [[productionEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PRODUCTION_END_DATE = _fieldBuilder.buildEdmTypeField('ProductionEndDate', 'Edm.Date', true);
    /**
     * Static representation of the [[salesOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.SALES_ORDER = _fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false);
    /**
     * Static representation of the [[salesOrderItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.SALES_ORDER_ITEM = _fieldBuilder.buildEdmTypeField('SalesOrderItem', 'Edm.String', false);
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.CUSTOMER = _fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false);
    /**
     * Static representation of the [[wbsElementInternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.WBS_ELEMENT_INTERNAL_ID = _fieldBuilder.buildEdmTypeField('WBSElementInternalID', 'Edm.String', false);
    /**
     * Static representation of the [[wbsElementExternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.WBS_ELEMENT_EXTERNAL_ID = _fieldBuilder.buildEdmTypeField('WBSElementExternalID', 'Edm.String', false);
    /**
     * Static representation of the [[wbsDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.WBS_DESCRIPTION = _fieldBuilder.buildEdmTypeField('WBSDescription', 'Edm.String', false);
    /**
     * Static representation of the [[accountAssignmentCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.ACCOUNT_ASSIGNMENT_CATEGORY = _fieldBuilder.buildEdmTypeField('AccountAssignmentCategory', 'Edm.String', false);
    /**
     * Static representation of the [[reservation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.RESERVATION = _fieldBuilder.buildEdmTypeField('Reservation', 'Edm.String', false);
    /**
     * Static representation of the [[plannedOrderLongText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLANNED_ORDER_LONG_TEXT = _fieldBuilder.buildEdmTypeField('PlannedOrderLongText', 'Edm.String', false);
    /**
     * Static representation of the [[mrpController]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.MRP_CONTROLLER = _fieldBuilder.buildEdmTypeField('MRPController', 'Edm.String', false);
    /**
     * Static representation of the [[productionSupervisor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PRODUCTION_SUPERVISOR = _fieldBuilder.buildEdmTypeField('ProductionSupervisor', 'Edm.String', false);
    /**
     * Static representation of the [[purchasingGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PURCHASING_GROUP = _fieldBuilder.buildEdmTypeField('PurchasingGroup', 'Edm.String', false);
    /**
     * Static representation of the [[purchasingOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PURCHASING_ORGANIZATION = _fieldBuilder.buildEdmTypeField('PurchasingOrganization', 'Edm.String', false);
    /**
     * Static representation of the [[fixedSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.FIXED_SUPPLIER = _fieldBuilder.buildEdmTypeField('FixedSupplier', 'Edm.String', false);
    /**
     * Static representation of the [[purchasingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PURCHASING_DOCUMENT = _fieldBuilder.buildEdmTypeField('PurchasingDocument', 'Edm.String', false);
    /**
     * Static representation of the [[purchasingDocumentItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PURCHASING_DOCUMENT_ITEM = _fieldBuilder.buildEdmTypeField('PurchasingDocumentItem', 'Edm.String', false);
    /**
     * Static representation of the [[quotaArrangement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.QUOTA_ARRANGEMENT = _fieldBuilder.buildEdmTypeField('QuotaArrangement', 'Edm.String', false);
    /**
     * Static representation of the [[quotaArrangementItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.QUOTA_ARRANGEMENT_ITEM = _fieldBuilder.buildEdmTypeField('QuotaArrangementItem', 'Edm.String', false);
    /**
     * Static representation of the [[supplierName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.SUPPLIER_NAME = _fieldBuilder.buildEdmTypeField('SupplierName', 'Edm.String', false);
    /**
     * Static representation of the [[plannedOrderIsFirm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLANNED_ORDER_IS_FIRM = _fieldBuilder.buildEdmTypeField('PlannedOrderIsFirm', 'Edm.Boolean', false);
    /**
     * Static representation of the [[plannedOrderIsConvertible]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLANNED_ORDER_IS_CONVERTIBLE = _fieldBuilder.buildEdmTypeField('PlannedOrderIsConvertible', 'Edm.Boolean', false);
    /**
     * Static representation of the [[plannedOrderBomIsFixed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLANNED_ORDER_BOM_IS_FIXED = _fieldBuilder.buildEdmTypeField('PlannedOrderBOMIsFixed', 'Edm.Boolean', false);
    /**
     * Static representation of the [[plannedOrderCapacityIsDsptchd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLANNED_ORDER_CAPACITY_IS_DSPTCHD = _fieldBuilder.buildEdmTypeField('PlannedOrderCapacityIsDsptchd', 'Edm.Boolean', false);
    /**
     * Static representation of the [[capacityRequirement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.CAPACITY_REQUIREMENT = _fieldBuilder.buildEdmTypeField('CapacityRequirement', 'Edm.String', false);
    /**
     * Static representation of the [[billOfOperationsVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.BILL_OF_OPERATIONS_VARIANT = _fieldBuilder.buildEdmTypeField('BillOfOperationsVariant', 'Edm.String', false);
    /**
     * Static representation of the [[capacityRequirementOrigin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.CAPACITY_REQUIREMENT_ORIGIN = _fieldBuilder.buildEdmTypeField('CapacityRequirementOrigin', 'Edm.String', false);
    /**
     * Static representation of the [[billOfOperationsType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.BILL_OF_OPERATIONS_TYPE = _fieldBuilder.buildEdmTypeField('BillOfOperationsType', 'Edm.String', false);
    /**
     * Static representation of the [[billOfOperationsGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.BILL_OF_OPERATIONS_GROUP = _fieldBuilder.buildEdmTypeField('BillOfOperationsGroup', 'Edm.String', false);
    /**
     * Static representation of the [[lastScheduledDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.LAST_SCHEDULED_DATE = _fieldBuilder.buildEdmTypeField('LastScheduledDate', 'Edm.Date', true);
    /**
     * Static representation of the [[scheduledBasicEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.SCHEDULED_BASIC_END_DATE = _fieldBuilder.buildEdmTypeField('ScheduledBasicEndDate', 'Edm.Date', true);
    /**
     * Static representation of the [[scheduledBasicEndTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.SCHEDULED_BASIC_END_TIME = _fieldBuilder.buildEdmTypeField('ScheduledBasicEndTime', 'Edm.TimeOfDay', false);
    /**
     * Static representation of the [[scheduledBasicStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.SCHEDULED_BASIC_START_DATE = _fieldBuilder.buildEdmTypeField('ScheduledBasicStartDate', 'Edm.Date', true);
    /**
     * Static representation of the [[scheduledBasicStartTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.SCHEDULED_BASIC_START_TIME = _fieldBuilder.buildEdmTypeField('ScheduledBasicStartTime', 'Edm.TimeOfDay', false);
    /**
     * Static representation of the [[schedulingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.SCHEDULING_TYPE = _fieldBuilder.buildEdmTypeField('SchedulingType', 'Edm.String', false);
    /**
     * Static representation of the [[sapMessages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.SAP_MESSAGES = _fieldBuilder.buildCollectionField('SAP__Messages', Sap_Message_1.Sap_Message, false);
    /**
     * Static representation of the one-to-many navigation property [[plannedOrderCapacity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLANNED_ORDER_CAPACITY = new core_1.OneToManyLink('_PlannedOrderCapacity', PlannedOrderHeader, PlannedOrderCapacity_1.PlannedOrderCapacity);
    /**
     * Static representation of the one-to-many navigation property [[plannedOrderComponent]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderHeader.PLANNED_ORDER_COMPONENT = new core_1.OneToManyLink('_PlannedOrderComponent', PlannedOrderHeader, PlannedOrderComponent_1.PlannedOrderComponent);
    /**
     * All fields of the PlannedOrderHeader entity.
     */
    PlannedOrderHeader._allFields = [
        PlannedOrderHeader.PLANNED_ORDER,
        PlannedOrderHeader.PLANNED_ORDER_TYPE,
        PlannedOrderHeader.PLANNED_ORDER_PROFILE,
        PlannedOrderHeader.MATERIAL,
        PlannedOrderHeader.MATERIAL_NAME,
        PlannedOrderHeader.PRODUCTION_PLANT,
        PlannedOrderHeader.MRP_PLANT,
        PlannedOrderHeader.MRP_AREA,
        PlannedOrderHeader.PRODUCTION_VERSION,
        PlannedOrderHeader.MATERIAL_PROCUREMENT_CATEGORY,
        PlannedOrderHeader.MATERIAL_PROCUREMENT_TYPE,
        PlannedOrderHeader.STORAGE_LOCATION,
        PlannedOrderHeader.BASE_UNIT,
        PlannedOrderHeader.TOTAL_QUANTITY,
        PlannedOrderHeader.PLND_ORDER_PLANNED_SCRAP_QTY,
        PlannedOrderHeader.GOODS_RECEIPT_QTY,
        PlannedOrderHeader.ISSUED_QUANTITY,
        PlannedOrderHeader.PLND_ORDER_PLANNED_START_DATE,
        PlannedOrderHeader.PLND_ORDER_PLANNED_START_TIME,
        PlannedOrderHeader.PLND_ORDER_PLANNED_END_DATE,
        PlannedOrderHeader.PLND_ORDER_PLANNED_END_TIME,
        PlannedOrderHeader.PLANNED_ORDER_OPENING_DATE,
        PlannedOrderHeader.PLANNED_ORDER_LAST_CHANGE_DATE_TIME,
        PlannedOrderHeader.PRODUCTION_START_DATE,
        PlannedOrderHeader.PRODUCTION_END_DATE,
        PlannedOrderHeader.SALES_ORDER,
        PlannedOrderHeader.SALES_ORDER_ITEM,
        PlannedOrderHeader.CUSTOMER,
        PlannedOrderHeader.WBS_ELEMENT_INTERNAL_ID,
        PlannedOrderHeader.WBS_ELEMENT_EXTERNAL_ID,
        PlannedOrderHeader.WBS_DESCRIPTION,
        PlannedOrderHeader.ACCOUNT_ASSIGNMENT_CATEGORY,
        PlannedOrderHeader.RESERVATION,
        PlannedOrderHeader.PLANNED_ORDER_LONG_TEXT,
        PlannedOrderHeader.MRP_CONTROLLER,
        PlannedOrderHeader.PRODUCTION_SUPERVISOR,
        PlannedOrderHeader.PURCHASING_GROUP,
        PlannedOrderHeader.PURCHASING_ORGANIZATION,
        PlannedOrderHeader.FIXED_SUPPLIER,
        PlannedOrderHeader.PURCHASING_DOCUMENT,
        PlannedOrderHeader.PURCHASING_DOCUMENT_ITEM,
        PlannedOrderHeader.QUOTA_ARRANGEMENT,
        PlannedOrderHeader.QUOTA_ARRANGEMENT_ITEM,
        PlannedOrderHeader.SUPPLIER_NAME,
        PlannedOrderHeader.PLANNED_ORDER_IS_FIRM,
        PlannedOrderHeader.PLANNED_ORDER_IS_CONVERTIBLE,
        PlannedOrderHeader.PLANNED_ORDER_BOM_IS_FIXED,
        PlannedOrderHeader.PLANNED_ORDER_CAPACITY_IS_DSPTCHD,
        PlannedOrderHeader.CAPACITY_REQUIREMENT,
        PlannedOrderHeader.BILL_OF_OPERATIONS_VARIANT,
        PlannedOrderHeader.CAPACITY_REQUIREMENT_ORIGIN,
        PlannedOrderHeader.BILL_OF_OPERATIONS_TYPE,
        PlannedOrderHeader.BILL_OF_OPERATIONS_GROUP,
        PlannedOrderHeader.LAST_SCHEDULED_DATE,
        PlannedOrderHeader.SCHEDULED_BASIC_END_DATE,
        PlannedOrderHeader.SCHEDULED_BASIC_END_TIME,
        PlannedOrderHeader.SCHEDULED_BASIC_START_DATE,
        PlannedOrderHeader.SCHEDULED_BASIC_START_TIME,
        PlannedOrderHeader.SCHEDULING_TYPE,
        PlannedOrderHeader.SAP_MESSAGES,
        PlannedOrderHeader.PLANNED_ORDER_CAPACITY,
        PlannedOrderHeader.PLANNED_ORDER_COMPONENT
    ];
    /**
     * All fields selector.
     */
    PlannedOrderHeader.ALL_FIELDS = new core_1.AllFields('*', PlannedOrderHeader);
    /**
     * All key fields of the PlannedOrderHeader entity.
     */
    PlannedOrderHeader._keyFields = [PlannedOrderHeader.PLANNED_ORDER];
    /**
     * Mapping of all key field names to the respective static field property PlannedOrderHeader.
     */
    PlannedOrderHeader._keys = PlannedOrderHeader._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PlannedOrderHeader = exports.PlannedOrderHeader || (exports.PlannedOrderHeader = {}));
exports.PlannedOrderHeader = PlannedOrderHeader;
//# sourceMappingURL=PlannedOrderHeader.js.map