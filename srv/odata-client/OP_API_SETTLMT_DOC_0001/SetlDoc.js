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
exports.SetlDoc = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SetlDocRequestBuilder_1 = require("./SetlDocRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SetlDoc" of service "com.sap.gateway.srvd_a2x.api_settlmt_doc.v0001".
 */
var SetlDoc = /** @class */ (function (_super) {
    __extends(SetlDoc, _super);
    function SetlDoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `SetlDoc`.
     * @returns A builder that constructs instances of entity type `SetlDoc`.
     */
    SetlDoc.builder = function () {
        return core_1.EntityV4.entityBuilder(SetlDoc);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SetlDoc` entity type.
     * @returns A `SetlDoc` request builder.
     */
    SetlDoc.requestBuilder = function () {
        return new SetlDocRequestBuilder_1.SetlDocRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SetlDoc`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SetlDoc`.
     */
    SetlDoc.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, SetlDoc);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SetlDoc.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SetlDoc.
     */
    SetlDoc._entityName = 'SetlDoc';
    /**
     * Default url path for the according service.
     */
    SetlDoc._defaultServicePath = '/odata/v4';
    return SetlDoc;
}(core_1.EntityV4));
exports.SetlDoc = SetlDoc;
var SetlDocItm_1 = require("./SetlDocItm");
(function (SetlDoc) {
    var _fieldBuilder = new core_1.FieldBuilder(SetlDoc);
    /**
     * Static representation of the [[settlmtDoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SETTLMT_DOC = _fieldBuilder.buildEdmTypeField('SettlmtDoc', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtDocType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SETTLMT_DOC_TYPE = _fieldBuilder.buildEdmTypeField('SettlmtDocType', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtProcessType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SETTLMT_PROCESS_TYPE = _fieldBuilder.buildEdmTypeField('SettlmtProcessType', 'Edm.String', false);
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.POSTING_DATE = _fieldBuilder.buildEdmTypeField('PostingDate', 'Edm.Date', true);
    /**
     * Static representation of the [[invoicingParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.INVOICING_PARTY = _fieldBuilder.buildEdmTypeField('InvoicingParty', 'Edm.String', false);
    /**
     * Static representation of the [[payeeParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.PAYEE_PARTY = _fieldBuilder.buildEdmTypeField('PayeeParty', 'Edm.String', false);
    /**
     * Static representation of the [[billToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.BILL_TO_PARTY = _fieldBuilder.buildEdmTypeField('BillToParty', 'Edm.String', false);
    /**
     * Static representation of the [[payerParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.PAYER_PARTY = _fieldBuilder.buildEdmTypeField('PayerParty', 'Edm.String', false);
    /**
     * Static representation of the [[purchasingOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.PURCHASING_ORGANIZATION = _fieldBuilder.buildEdmTypeField('PurchasingOrganization', 'Edm.String', false);
    /**
     * Static representation of the [[purchasingGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.PURCHASING_GROUP = _fieldBuilder.buildEdmTypeField('PurchasingGroup', 'Edm.String', false);
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SALES_ORGANIZATION = _fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', false);
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.DISTRIBUTION_CHANNEL = _fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', false);
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.DIVISION = _fieldBuilder.buildEdmTypeField('Division', 'Edm.String', false);
    /**
     * Static representation of the [[suplrSettlmtCompanyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SUPLR_SETTLMT_COMPANY_CODE = _fieldBuilder.buildEdmTypeField('SuplrSettlmtCompanyCode', 'Edm.String', false);
    /**
     * Static representation of the [[custSettlmtCompanyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.CUST_SETTLMT_COMPANY_CODE = _fieldBuilder.buildEdmTypeField('CustSettlmtCompanyCode', 'Edm.String', false);
    /**
     * Static representation of the [[documentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.DOCUMENT_DATE = _fieldBuilder.buildEdmTypeField('DocumentDate', 'Edm.Date', true);
    /**
     * Static representation of the [[documentReferenceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.DOCUMENT_REFERENCE_ID = _fieldBuilder.buildEdmTypeField('DocumentReferenceID', 'Edm.String', false);
    /**
     * Static representation of the [[assignmentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.ASSIGNMENT_REFERENCE = _fieldBuilder.buildEdmTypeField('AssignmentReference', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtDocCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SETTLMT_DOC_CURRENCY = _fieldBuilder.buildEdmTypeField('SettlmtDocCurrency', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtDocCurrencyIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SETTLMT_DOC_CURRENCY_ISO_CODE = _fieldBuilder.buildEdmTypeField('SettlmtDocCurrencyISOCode', 'Edm.String', false);
    /**
     * Static representation of the [[exchangeRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.EXCHANGE_RATE = _fieldBuilder.buildEdmTypeField('ExchangeRate', 'Edm.Decimal', false);
    /**
     * Static representation of the [[exchangeRateIsFixed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.EXCHANGE_RATE_IS_FIXED = _fieldBuilder.buildEdmTypeField('ExchangeRateIsFixed', 'Edm.Boolean', false);
    /**
     * Static representation of the [[supplierTotalGrossAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SUPPLIER_TOTAL_GROSS_AMOUNT = _fieldBuilder.buildEdmTypeField('SupplierTotalGrossAmount', 'Edm.Decimal', false);
    /**
     * Static representation of the [[supplierTotalNetAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SUPPLIER_TOTAL_NET_AMOUNT = _fieldBuilder.buildEdmTypeField('SupplierTotalNetAmount', 'Edm.Decimal', false);
    /**
     * Static representation of the [[supplierTotalTaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SUPPLIER_TOTAL_TAX_AMOUNT = _fieldBuilder.buildEdmTypeField('SupplierTotalTaxAmount', 'Edm.Decimal', false);
    /**
     * Static representation of the [[customerTotalGrossAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.CUSTOMER_TOTAL_GROSS_AMOUNT = _fieldBuilder.buildEdmTypeField('CustomerTotalGrossAmount', 'Edm.Decimal', false);
    /**
     * Static representation of the [[customerTotalNetAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.CUSTOMER_TOTAL_NET_AMOUNT = _fieldBuilder.buildEdmTypeField('CustomerTotalNetAmount', 'Edm.Decimal', false);
    /**
     * Static representation of the [[customerTotalTaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.CUSTOMER_TOTAL_TAX_AMOUNT = _fieldBuilder.buildEdmTypeField('CustomerTotalTaxAmount', 'Edm.Decimal', false);
    /**
     * Static representation of the [[supplierPaymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SUPPLIER_PAYMENT_TERMS = _fieldBuilder.buildEdmTypeField('SupplierPaymentTerms', 'Edm.String', false);
    /**
     * Static representation of the [[supplierCashDiscount1Days]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SUPPLIER_CASH_DISCOUNT_1_DAYS = _fieldBuilder.buildEdmTypeField('SupplierCashDiscount1Days', 'Edm.Decimal', false);
    /**
     * Static representation of the [[supplierCashDiscount2Days]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SUPPLIER_CASH_DISCOUNT_2_DAYS = _fieldBuilder.buildEdmTypeField('SupplierCashDiscount2Days', 'Edm.Decimal', false);
    /**
     * Static representation of the [[supplierNetPaymentDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SUPPLIER_NET_PAYMENT_DAYS = _fieldBuilder.buildEdmTypeField('SupplierNetPaymentDays', 'Edm.Decimal', false);
    /**
     * Static representation of the [[supplierCashDiscount1Percent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SUPPLIER_CASH_DISCOUNT_1_PERCENT = _fieldBuilder.buildEdmTypeField('SupplierCashDiscount1Percent', 'Edm.Decimal', false);
    /**
     * Static representation of the [[supplierCashDiscount2Percent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SUPPLIER_CASH_DISCOUNT_2_PERCENT = _fieldBuilder.buildEdmTypeField('SupplierCashDiscount2Percent', 'Edm.Decimal', false);
    /**
     * Static representation of the [[supplierPaymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SUPPLIER_PAYMENT_METHOD = _fieldBuilder.buildEdmTypeField('SupplierPaymentMethod', 'Edm.String', false);
    /**
     * Static representation of the [[customerPaymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.CUSTOMER_PAYMENT_TERMS = _fieldBuilder.buildEdmTypeField('CustomerPaymentTerms', 'Edm.String', false);
    /**
     * Static representation of the [[customerCashDiscount1Days]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.CUSTOMER_CASH_DISCOUNT_1_DAYS = _fieldBuilder.buildEdmTypeField('CustomerCashDiscount1Days', 'Edm.Decimal', false);
    /**
     * Static representation of the [[customerCashDiscount2Days]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.CUSTOMER_CASH_DISCOUNT_2_DAYS = _fieldBuilder.buildEdmTypeField('CustomerCashDiscount2Days', 'Edm.Decimal', false);
    /**
     * Static representation of the [[customerNetPaymentDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.CUSTOMER_NET_PAYMENT_DAYS = _fieldBuilder.buildEdmTypeField('CustomerNetPaymentDays', 'Edm.Decimal', false);
    /**
     * Static representation of the [[customerCashDiscount1Percent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.CUSTOMER_CASH_DISCOUNT_1_PERCENT = _fieldBuilder.buildEdmTypeField('CustomerCashDiscount1Percent', 'Edm.Decimal', false);
    /**
     * Static representation of the [[customerCashDiscount2Percent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.CUSTOMER_CASH_DISCOUNT_2_PERCENT = _fieldBuilder.buildEdmTypeField('CustomerCashDiscount2Percent', 'Edm.Decimal', false);
    /**
     * Static representation of the [[customerPaymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.CUSTOMER_PAYMENT_METHOD = _fieldBuilder.buildEdmTypeField('CustomerPaymentMethod', 'Edm.String', false);
    /**
     * Static representation of the [[suplrTotEligibleAmtForCshDisc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SUPLR_TOT_ELIGIBLE_AMT_FOR_CSH_DISC = _fieldBuilder.buildEdmTypeField('SuplrTotEligibleAmtForCshDisc', 'Edm.Decimal', false);
    /**
     * Static representation of the [[custTotEligibleAmtForCshDisc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.CUST_TOT_ELIGIBLE_AMT_FOR_CSH_DISC = _fieldBuilder.buildEdmTypeField('CustTotEligibleAmtForCshDisc', 'Edm.Decimal', false);
    /**
     * Static representation of the [[settlmtDocIsCanceled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SETTLMT_DOC_IS_CANCELED = _fieldBuilder.buildEdmTypeField('SettlmtDocIsCanceled', 'Edm.Boolean', false);
    /**
     * Static representation of the [[canceledSettlmtDoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.CANCELED_SETTLMT_DOC = _fieldBuilder.buildEdmTypeField('CanceledSettlmtDoc', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtDocActivityReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SETTLMT_DOC_ACTIVITY_REASON = _fieldBuilder.buildEdmTypeField('SettlmtDocActivityReason', 'Edm.String', false);
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.PAYMENT_REFERENCE = _fieldBuilder.buildEdmTypeField('PaymentReference', 'Edm.String', false);
    /**
     * Static representation of the [[settlmtApplSts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SETTLMT_APPL_STS = _fieldBuilder.buildEdmTypeField('SettlmtApplSts', 'Edm.String', false);
    /**
     * Static representation of the [[salesOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SALES_OFFICE = _fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', false);
    /**
     * Static representation of the [[salesGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SALES_GROUP = _fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', false);
    /**
     * Static representation of the [[supplierSettlmtBlkgReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SUPPLIER_SETTLMT_BLKG_REASON = _fieldBuilder.buildEdmTypeField('SupplierSettlmtBlkgReason', 'Edm.String', false);
    /**
     * Static representation of the [[customerSettlmtBlkgReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.CUSTOMER_SETTLMT_BLKG_REASON = _fieldBuilder.buildEdmTypeField('CustomerSettlmtBlkgReason', 'Edm.String', false);
    /**
     * Static representation of the [[taxDepartureCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.TAX_DEPARTURE_COUNTRY = _fieldBuilder.buildEdmTypeField('TaxDepartureCountry', 'Edm.String', false);
    /**
     * Static representation of the [[taxDestinationCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.TAX_DESTINATION_COUNTRY = _fieldBuilder.buildEdmTypeField('TaxDestinationCountry', 'Edm.String', false);
    /**
     * Static representation of the [[isEuTriangularDeal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.IS_EU_TRIANGULAR_DEAL = _fieldBuilder.buildEdmTypeField('IsEUTriangularDeal', 'Edm.Boolean', false);
    /**
     * Static representation of the [[supplierVatRegistration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SUPPLIER_VAT_REGISTRATION = _fieldBuilder.buildEdmTypeField('SupplierVATRegistration', 'Edm.String', false);
    /**
     * Static representation of the [[customerVatRegistration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.CUSTOMER_VAT_REGISTRATION = _fieldBuilder.buildEdmTypeField('CustomerVATRegistration', 'Edm.String', false);
    /**
     * Static representation of the [[totalGrossAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.TOTAL_GROSS_AMOUNT = _fieldBuilder.buildEdmTypeField('TotalGrossAmount', 'Edm.Decimal', false);
    /**
     * Static representation of the one-to-many navigation property [[settlmtDocItem]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SetlDoc.SETTLMT_DOC_ITEM = new core_1.OneToManyLink('_SettlmtDocItem', SetlDoc, SetlDocItm_1.SetlDocItm);
    /**
     * All fields of the SetlDoc entity.
     */
    SetlDoc._allFields = [
        SetlDoc.SETTLMT_DOC,
        SetlDoc.SETTLMT_DOC_TYPE,
        SetlDoc.SETTLMT_PROCESS_TYPE,
        SetlDoc.POSTING_DATE,
        SetlDoc.INVOICING_PARTY,
        SetlDoc.PAYEE_PARTY,
        SetlDoc.BILL_TO_PARTY,
        SetlDoc.PAYER_PARTY,
        SetlDoc.PURCHASING_ORGANIZATION,
        SetlDoc.PURCHASING_GROUP,
        SetlDoc.SALES_ORGANIZATION,
        SetlDoc.DISTRIBUTION_CHANNEL,
        SetlDoc.DIVISION,
        SetlDoc.SUPLR_SETTLMT_COMPANY_CODE,
        SetlDoc.CUST_SETTLMT_COMPANY_CODE,
        SetlDoc.DOCUMENT_DATE,
        SetlDoc.DOCUMENT_REFERENCE_ID,
        SetlDoc.ASSIGNMENT_REFERENCE,
        SetlDoc.SETTLMT_DOC_CURRENCY,
        SetlDoc.SETTLMT_DOC_CURRENCY_ISO_CODE,
        SetlDoc.EXCHANGE_RATE,
        SetlDoc.EXCHANGE_RATE_IS_FIXED,
        SetlDoc.SUPPLIER_TOTAL_GROSS_AMOUNT,
        SetlDoc.SUPPLIER_TOTAL_NET_AMOUNT,
        SetlDoc.SUPPLIER_TOTAL_TAX_AMOUNT,
        SetlDoc.CUSTOMER_TOTAL_GROSS_AMOUNT,
        SetlDoc.CUSTOMER_TOTAL_NET_AMOUNT,
        SetlDoc.CUSTOMER_TOTAL_TAX_AMOUNT,
        SetlDoc.SUPPLIER_PAYMENT_TERMS,
        SetlDoc.SUPPLIER_CASH_DISCOUNT_1_DAYS,
        SetlDoc.SUPPLIER_CASH_DISCOUNT_2_DAYS,
        SetlDoc.SUPPLIER_NET_PAYMENT_DAYS,
        SetlDoc.SUPPLIER_CASH_DISCOUNT_1_PERCENT,
        SetlDoc.SUPPLIER_CASH_DISCOUNT_2_PERCENT,
        SetlDoc.SUPPLIER_PAYMENT_METHOD,
        SetlDoc.CUSTOMER_PAYMENT_TERMS,
        SetlDoc.CUSTOMER_CASH_DISCOUNT_1_DAYS,
        SetlDoc.CUSTOMER_CASH_DISCOUNT_2_DAYS,
        SetlDoc.CUSTOMER_NET_PAYMENT_DAYS,
        SetlDoc.CUSTOMER_CASH_DISCOUNT_1_PERCENT,
        SetlDoc.CUSTOMER_CASH_DISCOUNT_2_PERCENT,
        SetlDoc.CUSTOMER_PAYMENT_METHOD,
        SetlDoc.SUPLR_TOT_ELIGIBLE_AMT_FOR_CSH_DISC,
        SetlDoc.CUST_TOT_ELIGIBLE_AMT_FOR_CSH_DISC,
        SetlDoc.SETTLMT_DOC_IS_CANCELED,
        SetlDoc.CANCELED_SETTLMT_DOC,
        SetlDoc.SETTLMT_DOC_ACTIVITY_REASON,
        SetlDoc.PAYMENT_REFERENCE,
        SetlDoc.SETTLMT_APPL_STS,
        SetlDoc.SALES_OFFICE,
        SetlDoc.SALES_GROUP,
        SetlDoc.SUPPLIER_SETTLMT_BLKG_REASON,
        SetlDoc.CUSTOMER_SETTLMT_BLKG_REASON,
        SetlDoc.TAX_DEPARTURE_COUNTRY,
        SetlDoc.TAX_DESTINATION_COUNTRY,
        SetlDoc.IS_EU_TRIANGULAR_DEAL,
        SetlDoc.SUPPLIER_VAT_REGISTRATION,
        SetlDoc.CUSTOMER_VAT_REGISTRATION,
        SetlDoc.TOTAL_GROSS_AMOUNT,
        SetlDoc.SETTLMT_DOC_ITEM
    ];
    /**
     * All fields selector.
     */
    SetlDoc.ALL_FIELDS = new core_1.AllFields('*', SetlDoc);
    /**
     * All key fields of the SetlDoc entity.
     */
    SetlDoc._keyFields = [SetlDoc.SETTLMT_DOC];
    /**
     * Mapping of all key field names to the respective static field property SetlDoc.
     */
    SetlDoc._keys = SetlDoc._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SetlDoc = exports.SetlDoc || (exports.SetlDoc = {}));
exports.SetlDoc = SetlDoc;
//# sourceMappingURL=SetlDoc.js.map