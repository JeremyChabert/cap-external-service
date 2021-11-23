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
exports.PlannedOrderComponent = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PlannedOrderComponentRequestBuilder_1 = require("./PlannedOrderComponentRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PlannedOrderComponent" of service "com.sap.gateway.srvd_a2x.api_plannedorder.v0001".
 */
var PlannedOrderComponent = /** @class */ (function (_super) {
    __extends(PlannedOrderComponent, _super);
    function PlannedOrderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PlannedOrderComponent`.
     * @returns A builder that constructs instances of entity type `PlannedOrderComponent`.
     */
    PlannedOrderComponent.builder = function () {
        return core_1.EntityV4.entityBuilder(PlannedOrderComponent);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PlannedOrderComponent` entity type.
     * @returns A `PlannedOrderComponent` request builder.
     */
    PlannedOrderComponent.requestBuilder = function () {
        return new PlannedOrderComponentRequestBuilder_1.PlannedOrderComponentRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PlannedOrderComponent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PlannedOrderComponent`.
     */
    PlannedOrderComponent.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PlannedOrderComponent);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PlannedOrderComponent.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PlannedOrderComponent.
     */
    PlannedOrderComponent._entityName = 'PlannedOrderComponent';
    /**
     * Default url path for the according service.
     */
    PlannedOrderComponent._defaultServicePath = '/odata/v4';
    return PlannedOrderComponent;
}(core_1.EntityV4));
exports.PlannedOrderComponent = PlannedOrderComponent;
var PlannedOrderHeader_1 = require("./PlannedOrderHeader");
(function (PlannedOrderComponent) {
    var _fieldBuilder = new core_1.FieldBuilder(PlannedOrderComponent);
    /**
     * Static representation of the [[plannedOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.PLANNED_ORDER = _fieldBuilder.buildEdmTypeField('PlannedOrder', 'Edm.String', false);
    /**
     * Static representation of the [[reservation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.RESERVATION = _fieldBuilder.buildEdmTypeField('Reservation', 'Edm.String', false);
    /**
     * Static representation of the [[reservationItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.RESERVATION_ITEM = _fieldBuilder.buildEdmTypeField('ReservationItem', 'Edm.String', false);
    /**
     * Static representation of the [[bomItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.BOM_ITEM = _fieldBuilder.buildEdmTypeField('BOMItem', 'Edm.String', false);
    /**
     * Static representation of the [[bomItemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.BOM_ITEM_DESCRIPTION = _fieldBuilder.buildEdmTypeField('BOMItemDescription', 'Edm.String', false);
    /**
     * Static representation of the [[billOfMaterialCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.BILL_OF_MATERIAL_CATEGORY = _fieldBuilder.buildEdmTypeField('BillOfMaterialCategory', 'Edm.String', false);
    /**
     * Static representation of the [[bomItemSorter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.BOM_ITEM_SORTER = _fieldBuilder.buildEdmTypeField('BOMItemSorter', 'Edm.String', false);
    /**
     * Static representation of the [[billOfMaterialItemNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.BILL_OF_MATERIAL_ITEM_NUMBER = _fieldBuilder.buildEdmTypeField('BillOfMaterialItemNumber', 'Edm.String', false);
    /**
     * Static representation of the [[billOfMaterialInternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.BILL_OF_MATERIAL_INTERNAL_ID = _fieldBuilder.buildEdmTypeField('BillOfMaterialInternalID', 'Edm.String', false);
    /**
     * Static representation of the [[billOfMaterialVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.BILL_OF_MATERIAL_VARIANT = _fieldBuilder.buildEdmTypeField('BillOfMaterialVariant', 'Edm.String', false);
    /**
     * Static representation of the [[bomItemCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.BOM_ITEM_CATEGORY = _fieldBuilder.buildEdmTypeField('BOMItemCategory', 'Edm.String', false);
    /**
     * Static representation of the [[material]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.MATERIAL = _fieldBuilder.buildEdmTypeField('Material', 'Edm.String', false);
    /**
     * Static representation of the [[matlCompRequirementDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.MATL_COMP_REQUIREMENT_DATE = _fieldBuilder.buildEdmTypeField('MatlCompRequirementDate', 'Edm.Date', true);
    /**
     * Static representation of the [[goodsMovementEntryQty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.GOODS_MOVEMENT_ENTRY_QTY = _fieldBuilder.buildEdmTypeField('GoodsMovementEntryQty', 'Edm.Decimal', false);
    /**
     * Static representation of the [[entryUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.ENTRY_UNIT = _fieldBuilder.buildEdmTypeField('EntryUnit', 'Edm.String', false);
    /**
     * Static representation of the [[requiredQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.REQUIRED_QUANTITY = _fieldBuilder.buildEdmTypeField('RequiredQuantity', 'Edm.Decimal', false);
    /**
     * Static representation of the [[baseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.BASE_UNIT = _fieldBuilder.buildEdmTypeField('BaseUnit', 'Edm.String', false);
    /**
     * Static representation of the [[withdrawnQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.WITHDRAWN_QUANTITY = _fieldBuilder.buildEdmTypeField('WithdrawnQuantity', 'Edm.Decimal', false);
    /**
     * Static representation of the [[debitCreditCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.DEBIT_CREDIT_CODE = _fieldBuilder.buildEdmTypeField('DebitCreditCode', 'Edm.String', false);
    /**
     * Static representation of the [[componentScrapInPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.COMPONENT_SCRAP_IN_PERCENT = _fieldBuilder.buildEdmTypeField('ComponentScrapInPercent', 'Edm.Decimal', false);
    /**
     * Static representation of the [[quantityIsFixed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.QUANTITY_IS_FIXED = _fieldBuilder.buildEdmTypeField('QuantityIsFixed', 'Edm.Boolean', false);
    /**
     * Static representation of the [[materialComponentIsPhantomItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.MATERIAL_COMPONENT_IS_PHANTOM_ITEM = _fieldBuilder.buildEdmTypeField('MaterialComponentIsPhantomItem', 'Edm.Boolean', false);
    /**
     * Static representation of the [[plant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.PLANT = _fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false);
    /**
     * Static representation of the [[storageLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.STORAGE_LOCATION = _fieldBuilder.buildEdmTypeField('StorageLocation', 'Edm.String', false);
    /**
     * Static representation of the [[supplyArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.SUPPLY_AREA = _fieldBuilder.buildEdmTypeField('SupplyArea', 'Edm.String', false);
    /**
     * Static representation of the [[mrpController]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.MRP_CONTROLLER = _fieldBuilder.buildEdmTypeField('MRPController', 'Edm.String', false);
    /**
     * Static representation of the [[orderPathValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.ORDER_PATH_VALUE = _fieldBuilder.buildEdmTypeField('OrderPathValue', 'Edm.String', false);
    /**
     * Static representation of the [[orderLevelValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.ORDER_LEVEL_VALUE = _fieldBuilder.buildEdmTypeField('OrderLevelValue', 'Edm.String', false);
    /**
     * Static representation of the [[assembly]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.ASSEMBLY = _fieldBuilder.buildEdmTypeField('Assembly', 'Edm.String', false);
    /**
     * Static representation of the [[assemblyOrderPathValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.ASSEMBLY_ORDER_PATH_VALUE = _fieldBuilder.buildEdmTypeField('AssemblyOrderPathValue', 'Edm.String', false);
    /**
     * Static representation of the [[assemblyOrderLevelValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.ASSEMBLY_ORDER_LEVEL_VALUE = _fieldBuilder.buildEdmTypeField('AssemblyOrderLevelValue', 'Edm.String', false);
    /**
     * Static representation of the [[discontinuationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.DISCONTINUATION_GROUP = _fieldBuilder.buildEdmTypeField('DiscontinuationGroup', 'Edm.String', false);
    /**
     * Static representation of the [[matlCompDiscontinuationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.MATL_COMP_DISCONTINUATION_TYPE = _fieldBuilder.buildEdmTypeField('MatlCompDiscontinuationType', 'Edm.String', false);
    /**
     * Static representation of the [[matlCompIsFollowUpMaterial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.MATL_COMP_IS_FOLLOW_UP_MATERIAL = _fieldBuilder.buildEdmTypeField('MatlCompIsFollowUpMaterial', 'Edm.Boolean', false);
    /**
     * Static representation of the [[followUpGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.FOLLOW_UP_GROUP = _fieldBuilder.buildEdmTypeField('FollowUpGroup', 'Edm.String', false);
    /**
     * Static representation of the [[followUpMaterial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.FOLLOW_UP_MATERIAL = _fieldBuilder.buildEdmTypeField('FollowUpMaterial', 'Edm.String', false);
    /**
     * Static representation of the [[followUpMaterialIsNotActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.FOLLOW_UP_MATERIAL_IS_NOT_ACTIVE = _fieldBuilder.buildEdmTypeField('FollowUpMaterialIsNotActive', 'Edm.Boolean', false);
    /**
     * Static representation of the [[plannedOrderLastChangeDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.PLANNED_ORDER_LAST_CHANGE_DATE_TIME = _fieldBuilder.buildEdmTypeField('PlannedOrderLastChangeDateTime', 'Edm.DateTimeOffset', true);
    /**
     * Static representation of the one-to-one navigation property [[plannedOrder_1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PlannedOrderComponent.PLANNED_ORDER_1 = new core_1.OneToOneLink('_PlannedOrder', PlannedOrderComponent, PlannedOrderHeader_1.PlannedOrderHeader);
    /**
     * All fields of the PlannedOrderComponent entity.
     */
    PlannedOrderComponent._allFields = [
        PlannedOrderComponent.PLANNED_ORDER,
        PlannedOrderComponent.RESERVATION,
        PlannedOrderComponent.RESERVATION_ITEM,
        PlannedOrderComponent.BOM_ITEM,
        PlannedOrderComponent.BOM_ITEM_DESCRIPTION,
        PlannedOrderComponent.BILL_OF_MATERIAL_CATEGORY,
        PlannedOrderComponent.BOM_ITEM_SORTER,
        PlannedOrderComponent.BILL_OF_MATERIAL_ITEM_NUMBER,
        PlannedOrderComponent.BILL_OF_MATERIAL_INTERNAL_ID,
        PlannedOrderComponent.BILL_OF_MATERIAL_VARIANT,
        PlannedOrderComponent.BOM_ITEM_CATEGORY,
        PlannedOrderComponent.MATERIAL,
        PlannedOrderComponent.MATL_COMP_REQUIREMENT_DATE,
        PlannedOrderComponent.GOODS_MOVEMENT_ENTRY_QTY,
        PlannedOrderComponent.ENTRY_UNIT,
        PlannedOrderComponent.REQUIRED_QUANTITY,
        PlannedOrderComponent.BASE_UNIT,
        PlannedOrderComponent.WITHDRAWN_QUANTITY,
        PlannedOrderComponent.DEBIT_CREDIT_CODE,
        PlannedOrderComponent.COMPONENT_SCRAP_IN_PERCENT,
        PlannedOrderComponent.QUANTITY_IS_FIXED,
        PlannedOrderComponent.MATERIAL_COMPONENT_IS_PHANTOM_ITEM,
        PlannedOrderComponent.PLANT,
        PlannedOrderComponent.STORAGE_LOCATION,
        PlannedOrderComponent.SUPPLY_AREA,
        PlannedOrderComponent.MRP_CONTROLLER,
        PlannedOrderComponent.ORDER_PATH_VALUE,
        PlannedOrderComponent.ORDER_LEVEL_VALUE,
        PlannedOrderComponent.ASSEMBLY,
        PlannedOrderComponent.ASSEMBLY_ORDER_PATH_VALUE,
        PlannedOrderComponent.ASSEMBLY_ORDER_LEVEL_VALUE,
        PlannedOrderComponent.DISCONTINUATION_GROUP,
        PlannedOrderComponent.MATL_COMP_DISCONTINUATION_TYPE,
        PlannedOrderComponent.MATL_COMP_IS_FOLLOW_UP_MATERIAL,
        PlannedOrderComponent.FOLLOW_UP_GROUP,
        PlannedOrderComponent.FOLLOW_UP_MATERIAL,
        PlannedOrderComponent.FOLLOW_UP_MATERIAL_IS_NOT_ACTIVE,
        PlannedOrderComponent.PLANNED_ORDER_LAST_CHANGE_DATE_TIME,
        PlannedOrderComponent.PLANNED_ORDER_1
    ];
    /**
     * All fields selector.
     */
    PlannedOrderComponent.ALL_FIELDS = new core_1.AllFields('*', PlannedOrderComponent);
    /**
     * All key fields of the PlannedOrderComponent entity.
     */
    PlannedOrderComponent._keyFields = [PlannedOrderComponent.PLANNED_ORDER, PlannedOrderComponent.RESERVATION, PlannedOrderComponent.RESERVATION_ITEM];
    /**
     * Mapping of all key field names to the respective static field property PlannedOrderComponent.
     */
    PlannedOrderComponent._keys = PlannedOrderComponent._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PlannedOrderComponent = exports.PlannedOrderComponent || (exports.PlannedOrderComponent = {}));
exports.PlannedOrderComponent = PlannedOrderComponent;
//# sourceMappingURL=PlannedOrderComponent.js.map