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
exports.SetlDocItm = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SetlDocItmRequestBuilder_1 = require("./SetlDocItmRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SetlDocItm" of service "com.sap.gateway.srvd_a2x.api_settlmt_doc.v0001".
 */
var SetlDocItm = /** @class */ (function (_super) {
    __extends(SetlDocItm, _super);
    function SetlDocItm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `SetlDocItm`.
     * @returns A builder that constructs instances of entity type `SetlDocItm`.
     */
    SetlDocItm.builder = function () {
        return core_1.EntityV4.entityBuilder(SetlDocItm);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SetlDocItm` entity type.
     * @returns A `SetlDocItm` request builder.
     */
    SetlDocItm.requestBuilder = function () {
        return new SetlDocItmRequestBuilder_1.SetlDocItmRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SetlDocItm`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SetlDocItm`.
     */
    SetlDocItm.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, SetlDocItm);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SetlDocItm.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SetlDocItm.
     */
    SetlDocItm._entityName = 'SetlDocItm';
    /**
     * Default url path for the according service.
     */
    SetlDocItm._defaultServicePath = '/odata/v4';
    return SetlDocItm;
}(core_1.EntityV4));
exports.SetlDocItm = SetlDocItm;
var SetlDoc_1 = require("./SetlDoc");
(function (SetlDocItm) {
    var _fieldBuilder = new core_1.FieldBuilder(SetlDocItm);
    /**
     * Static representation of the [[settlmtDoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_DOC = _fieldBuilder.buildEdmTypeField('SettlmtDoc', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtDocItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_DOC_ITEM = _fieldBuilder.buildEdmTypeField('SettlmtDocItem', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtDocCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_DOC_CURRENCY = _fieldBuilder.buildEdmTypeField('SettlmtDocCurrency', 'Edm.String', false);
    /**
     * Static representation of the [[product]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.PRODUCT = _fieldBuilder.buildEdmTypeField('Product', 'Edm.String', false);
    /**
     * Static representation of the [[productGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.PRODUCT_GROUP = _fieldBuilder.buildEdmTypeField('ProductGroup', 'Edm.String', false);
    /**
     * Static representation of the [[plant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.PLANT = _fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false);
    /**
     * Static representation of the [[supplierTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SUPPLIER_TAX_CODE = _fieldBuilder.buildEdmTypeField('SupplierTaxCode', 'Edm.String', false);
    /**
     * Static representation of the [[customerTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.CUSTOMER_TAX_CODE = _fieldBuilder.buildEdmTypeField('CustomerTaxCode', 'Edm.String', false);
    /**
     * Static representation of the [[pricingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.PRICING_DATE = _fieldBuilder.buildEdmTypeField('PricingDate', 'Edm.Date', true);
    /**
     * Static representation of the [[settlmtQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_QUANTITY = _fieldBuilder.buildEdmTypeField('SettlmtQuantity', 'Edm.Decimal', false);
    /**
     * Static representation of the [[settlmtQuantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_QUANTITY_UNIT = _fieldBuilder.buildEdmTypeField('SettlmtQuantityUnit', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtQuantityUnitIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_QUANTITY_UNIT_ISO_CODE = _fieldBuilder.buildEdmTypeField('SettlmtQuantityUnitISOCode', 'Edm.String', false);
    /**
     * Static representation of the [[netPriceAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.NET_PRICE_AMOUNT = _fieldBuilder.buildEdmTypeField('NetPriceAmount', 'Edm.Decimal', false);
    /**
     * Static representation of the [[netPriceQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.NET_PRICE_QUANTITY = _fieldBuilder.buildEdmTypeField('NetPriceQuantity', 'Edm.Decimal', false);
    /**
     * Static representation of the [[netPriceQuantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.NET_PRICE_QUANTITY_UNIT = _fieldBuilder.buildEdmTypeField('NetPriceQuantityUnit', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtToBaseQuantityNmrtr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_TO_BASE_QUANTITY_NMRTR = _fieldBuilder.buildEdmTypeField('SettlmtToBaseQuantityNmrtr', 'Edm.Decimal', false);
    /**
     * Static representation of the [[settlmtToBaseQuantityDnmntr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_TO_BASE_QUANTITY_DNMNTR = _fieldBuilder.buildEdmTypeField('SettlmtToBaseQuantityDnmntr', 'Edm.Decimal', false);
    /**
     * Static representation of the [[baseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.BASE_UNIT = _fieldBuilder.buildEdmTypeField('BaseUnit', 'Edm.String', false);
    /**
     * Static representation of the [[itemNetWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.ITEM_NET_WEIGHT = _fieldBuilder.buildEdmTypeField('ItemNetWeight', 'Edm.Decimal', false);
    /**
     * Static representation of the [[itemGrossWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.ITEM_GROSS_WEIGHT = _fieldBuilder.buildEdmTypeField('ItemGrossWeight', 'Edm.Decimal', false);
    /**
     * Static representation of the [[itemWeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.ITEM_WEIGHT_UNIT = _fieldBuilder.buildEdmTypeField('ItemWeightUnit', 'Edm.String', false);
    /**
     * Static representation of the [[itemWeightUnitIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.ITEM_WEIGHT_UNIT_ISO_CODE = _fieldBuilder.buildEdmTypeField('ItemWeightUnitISOCode', 'Edm.String', false);
    /**
     * Static representation of the [[itemVolume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.ITEM_VOLUME = _fieldBuilder.buildEdmTypeField('ItemVolume', 'Edm.Decimal', false);
    /**
     * Static representation of the [[itemVolumeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.ITEM_VOLUME_UNIT = _fieldBuilder.buildEdmTypeField('ItemVolumeUnit', 'Edm.String', false);
    /**
     * Static representation of the [[itemVolumeUnitIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.ITEM_VOLUME_UNIT_ISO_CODE = _fieldBuilder.buildEdmTypeField('ItemVolumeUnitISOCode', 'Edm.String', false);
    /**
     * Static representation of the [[supplierItemGrossAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SUPPLIER_ITEM_GROSS_AMOUNT = _fieldBuilder.buildEdmTypeField('SupplierItemGrossAmount', 'Edm.Decimal', false);
    /**
     * Static representation of the [[supplierItemNetAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SUPPLIER_ITEM_NET_AMOUNT = _fieldBuilder.buildEdmTypeField('SupplierItemNetAmount', 'Edm.Decimal', false);
    /**
     * Static representation of the [[supplierItemTaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SUPPLIER_ITEM_TAX_AMOUNT = _fieldBuilder.buildEdmTypeField('SupplierItemTaxAmount', 'Edm.Decimal', false);
    /**
     * Static representation of the [[customerItemGrossAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.CUSTOMER_ITEM_GROSS_AMOUNT = _fieldBuilder.buildEdmTypeField('CustomerItemGrossAmount', 'Edm.Decimal', false);
    /**
     * Static representation of the [[customerItemNetAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.CUSTOMER_ITEM_NET_AMOUNT = _fieldBuilder.buildEdmTypeField('CustomerItemNetAmount', 'Edm.Decimal', false);
    /**
     * Static representation of the [[customerItemTaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.CUSTOMER_ITEM_TAX_AMOUNT = _fieldBuilder.buildEdmTypeField('CustomerItemTaxAmount', 'Edm.Decimal', false);
    /**
     * Static representation of the [[cashDiscountIsDeductible]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.CASH_DISCOUNT_IS_DEDUCTIBLE = _fieldBuilder.buildEdmTypeField('CashDiscountIsDeductible', 'Edm.Boolean', false);
    /**
     * Static representation of the [[settlmtSourceDoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_SOURCE_DOC = _fieldBuilder.buildEdmTypeField('SettlmtSourceDoc', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtSourceDocItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_SOURCE_DOC_ITEM = _fieldBuilder.buildEdmTypeField('SettlmtSourceDocItem', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtSourceDocCat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_SOURCE_DOC_CAT = _fieldBuilder.buildEdmTypeField('SettlmtSourceDocCat', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtItemActivityReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_ITEM_ACTIVITY_REASON = _fieldBuilder.buildEdmTypeField('SettlmtItemActivityReason', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtDocItemText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_DOC_ITEM_TEXT = _fieldBuilder.buildEdmTypeField('SettlmtDocItemText', 'Edm.String', false);
    /**
     * Static representation of the [[supplierProductId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SUPPLIER_PRODUCT_ID = _fieldBuilder.buildEdmTypeField('SupplierProductID', 'Edm.String', false);
    /**
     * Static representation of the [[taxJurisdiction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.TAX_JURISDICTION = _fieldBuilder.buildEdmTypeField('TaxJurisdiction', 'Edm.String', false);
    /**
     * Static representation of the [[productPurchasePointsQtyUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.PRODUCT_PURCHASE_POINTS_QTY_UNIT = _fieldBuilder.buildEdmTypeField('ProductPurchasePointsQtyUnit', 'Edm.String', false);
    /**
     * Static representation of the [[prodPurPointsQtyUnitIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.PROD_PUR_POINTS_QTY_UNIT_ISO_CODE = _fieldBuilder.buildEdmTypeField('ProdPurPointsQtyUnitISOCode', 'Edm.String', false);
    /**
     * Static representation of the [[productPurchasePointsQty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.PRODUCT_PURCHASE_POINTS_QTY = _fieldBuilder.buildEdmTypeField('ProductPurchasePointsQty', 'Edm.Decimal', false);
    /**
     * Static representation of the [[suplrSettlmtBusinessArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SUPLR_SETTLMT_BUSINESS_AREA = _fieldBuilder.buildEdmTypeField('SuplrSettlmtBusinessArea', 'Edm.String', false);
    /**
     * Static representation of the [[custSettlmtBusinessArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.CUST_SETTLMT_BUSINESS_AREA = _fieldBuilder.buildEdmTypeField('CustSettlmtBusinessArea', 'Edm.String', false);
    /**
     * Static representation of the [[suplrSettlmtCostCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SUPLR_SETTLMT_COST_CENTER = _fieldBuilder.buildEdmTypeField('SuplrSettlmtCostCenter', 'Edm.String', false);
    /**
     * Static representation of the [[suplrSettlmtProfitCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SUPLR_SETTLMT_PROFIT_CENTER = _fieldBuilder.buildEdmTypeField('SuplrSettlmtProfitCenter', 'Edm.String', false);
    /**
     * Static representation of the [[incotermsVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.INCOTERMS_VERSION = _fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', false);
    /**
     * Static representation of the [[incotermsLocation1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.INCOTERMS_LOCATION_1 = _fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', false);
    /**
     * Static representation of the [[incotermsLocation2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.INCOTERMS_LOCATION_2 = _fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', false);
    /**
     * Static representation of the [[custSettlmtCostCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.CUST_SETTLMT_COST_CENTER = _fieldBuilder.buildEdmTypeField('CustSettlmtCostCenter', 'Edm.String', false);
    /**
     * Static representation of the [[custSettlmtProfitCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.CUST_SETTLMT_PROFIT_CENTER = _fieldBuilder.buildEdmTypeField('CustSettlmtProfitCenter', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtPrecdgDoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_PRECDG_DOC = _fieldBuilder.buildEdmTypeField('SettlmtPrecdgDoc', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtPrecdgDocItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_PRECDG_DOC_ITEM = _fieldBuilder.buildEdmTypeField('SettlmtPrecdgDocItem', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtPrecdgDocCat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_PRECDG_DOC_CAT = _fieldBuilder.buildEdmTypeField('SettlmtPrecdgDocCat', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtDocItemCat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_DOC_ITEM_CAT = _fieldBuilder.buildEdmTypeField('SettlmtDocItemCat', 'Edm.String', false);
    /**
     * Static representation of the [[supplierSettlementOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SUPPLIER_SETTLEMENT_ORDER = _fieldBuilder.buildEdmTypeField('SupplierSettlementOrder', 'Edm.String', false);
    /**
     * Static representation of the [[itemSettlmtRelevance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.ITEM_SETTLMT_RELEVANCE = _fieldBuilder.buildEdmTypeField('ItemSettlmtRelevance', 'Edm.String', false);
    /**
     * Static representation of the [[settlementFiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLEMENT_FISCAL_YEAR = _fieldBuilder.buildEdmTypeField('SettlementFiscalYear', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtRefDoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_REF_DOC = _fieldBuilder.buildEdmTypeField('SettlmtRefDoc', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtRefDocCompanyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_REF_DOC_COMPANY_CODE = _fieldBuilder.buildEdmTypeField('SettlmtRefDocCompanyCode', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtRefDocItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_REF_DOC_ITEM = _fieldBuilder.buildEdmTypeField('SettlmtRefDocItem', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtRefDocCat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_REF_DOC_CAT = _fieldBuilder.buildEdmTypeField('SettlmtRefDocCat', 'Edm.String', false);
    /**
     * Static representation of the [[supplierSubrange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SUPPLIER_SUBRANGE = _fieldBuilder.buildEdmTypeField('SupplierSubrange', 'Edm.String', false);
    /**
     * Static representation of the [[intercompanyTaxCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.INTERCOMPANY_TAX_COUNTRY = _fieldBuilder.buildEdmTypeField('IntercompanyTaxCountry', 'Edm.String', false);
    /**
     * Static representation of the [[taxCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.TAX_COUNTRY = _fieldBuilder.buildEdmTypeField('TaxCountry', 'Edm.String', false);
    /**
     * Static representation of the [[priorSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.PRIOR_SUPPLIER = _fieldBuilder.buildEdmTypeField('PriorSupplier', 'Edm.String', false);
    /**
     * Static representation of the one-to-one navigation property [[settlmtDoc_1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDocItm.SETTLMT_DOC_1 = new core_1.OneToOneLink('_SettlmtDoc', SetlDocItm, SetlDoc_1.SetlDoc);
    /**
     * All fields of the SetlDocItm entity.
     */
    SetlDocItm._allFields = [
        SetlDocItm.SETTLMT_DOC,
        SetlDocItm.SETTLMT_DOC_ITEM,
        SetlDocItm.SETTLMT_DOC_CURRENCY,
        SetlDocItm.PRODUCT,
        SetlDocItm.PRODUCT_GROUP,
        SetlDocItm.PLANT,
        SetlDocItm.SUPPLIER_TAX_CODE,
        SetlDocItm.CUSTOMER_TAX_CODE,
        SetlDocItm.PRICING_DATE,
        SetlDocItm.SETTLMT_QUANTITY,
        SetlDocItm.SETTLMT_QUANTITY_UNIT,
        SetlDocItm.SETTLMT_QUANTITY_UNIT_ISO_CODE,
        SetlDocItm.NET_PRICE_AMOUNT,
        SetlDocItm.NET_PRICE_QUANTITY,
        SetlDocItm.NET_PRICE_QUANTITY_UNIT,
        SetlDocItm.SETTLMT_TO_BASE_QUANTITY_NMRTR,
        SetlDocItm.SETTLMT_TO_BASE_QUANTITY_DNMNTR,
        SetlDocItm.BASE_UNIT,
        SetlDocItm.ITEM_NET_WEIGHT,
        SetlDocItm.ITEM_GROSS_WEIGHT,
        SetlDocItm.ITEM_WEIGHT_UNIT,
        SetlDocItm.ITEM_WEIGHT_UNIT_ISO_CODE,
        SetlDocItm.ITEM_VOLUME,
        SetlDocItm.ITEM_VOLUME_UNIT,
        SetlDocItm.ITEM_VOLUME_UNIT_ISO_CODE,
        SetlDocItm.SUPPLIER_ITEM_GROSS_AMOUNT,
        SetlDocItm.SUPPLIER_ITEM_NET_AMOUNT,
        SetlDocItm.SUPPLIER_ITEM_TAX_AMOUNT,
        SetlDocItm.CUSTOMER_ITEM_GROSS_AMOUNT,
        SetlDocItm.CUSTOMER_ITEM_NET_AMOUNT,
        SetlDocItm.CUSTOMER_ITEM_TAX_AMOUNT,
        SetlDocItm.CASH_DISCOUNT_IS_DEDUCTIBLE,
        SetlDocItm.SETTLMT_SOURCE_DOC,
        SetlDocItm.SETTLMT_SOURCE_DOC_ITEM,
        SetlDocItm.SETTLMT_SOURCE_DOC_CAT,
        SetlDocItm.SETTLMT_ITEM_ACTIVITY_REASON,
        SetlDocItm.SETTLMT_DOC_ITEM_TEXT,
        SetlDocItm.SUPPLIER_PRODUCT_ID,
        SetlDocItm.TAX_JURISDICTION,
        SetlDocItm.PRODUCT_PURCHASE_POINTS_QTY_UNIT,
        SetlDocItm.PROD_PUR_POINTS_QTY_UNIT_ISO_CODE,
        SetlDocItm.PRODUCT_PURCHASE_POINTS_QTY,
        SetlDocItm.SUPLR_SETTLMT_BUSINESS_AREA,
        SetlDocItm.CUST_SETTLMT_BUSINESS_AREA,
        SetlDocItm.SUPLR_SETTLMT_COST_CENTER,
        SetlDocItm.SUPLR_SETTLMT_PROFIT_CENTER,
        SetlDocItm.INCOTERMS_VERSION,
        SetlDocItm.INCOTERMS_LOCATION_1,
        SetlDocItm.INCOTERMS_LOCATION_2,
        SetlDocItm.CUST_SETTLMT_COST_CENTER,
        SetlDocItm.CUST_SETTLMT_PROFIT_CENTER,
        SetlDocItm.SETTLMT_PRECDG_DOC,
        SetlDocItm.SETTLMT_PRECDG_DOC_ITEM,
        SetlDocItm.SETTLMT_PRECDG_DOC_CAT,
        SetlDocItm.SETTLMT_DOC_ITEM_CAT,
        SetlDocItm.SUPPLIER_SETTLEMENT_ORDER,
        SetlDocItm.ITEM_SETTLMT_RELEVANCE,
        SetlDocItm.SETTLEMENT_FISCAL_YEAR,
        SetlDocItm.SETTLMT_REF_DOC,
        SetlDocItm.SETTLMT_REF_DOC_COMPANY_CODE,
        SetlDocItm.SETTLMT_REF_DOC_ITEM,
        SetlDocItm.SETTLMT_REF_DOC_CAT,
        SetlDocItm.SUPPLIER_SUBRANGE,
        SetlDocItm.INTERCOMPANY_TAX_COUNTRY,
        SetlDocItm.TAX_COUNTRY,
        SetlDocItm.PRIOR_SUPPLIER,
        SetlDocItm.SETTLMT_DOC_1
    ];
    /**
     * All fields selector.
     */
    SetlDocItm.ALL_FIELDS = new core_1.AllFields('*', SetlDocItm);
    /**
     * All key fields of the SetlDocItm entity.
     */
    SetlDocItm._keyFields = [SetlDocItm.SETTLMT_DOC, SetlDocItm.SETTLMT_DOC_ITEM];
    /**
     * Mapping of all key field names to the respective static field property SetlDocItm.
     */
    SetlDocItm._keys = SetlDocItm._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SetlDocItm = exports.SetlDocItm || (exports.SetlDocItm = {}));
exports.SetlDocItm = SetlDocItm;
//# sourceMappingURL=SetlDocItm.js.map