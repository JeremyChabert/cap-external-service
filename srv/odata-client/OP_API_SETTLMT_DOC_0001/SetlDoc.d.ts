import { SetlDocRequestBuilder } from './SetlDocRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, CustomFieldV4, EdmTypeField, EntityBuilderType, EntityV4, Field, OneToManyLink, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SetlDoc" of service "com.sap.gateway.srvd_a2x.api_settlmt_doc.v0001".
 */
export declare class SetlDoc extends EntityV4 implements SetlDocType {
    /**
     * Technical entity name for SetlDoc.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Settlmt Doc.
     * Maximum length: 10.
     */
    settlmtDoc: string;
    /**
     * Settlmt Doc Type.
     * Maximum length: 4.
     */
    settlmtDocType: string;
    /**
     * Settlmt Process Type.
     * Maximum length: 4.
     */
    settlmtProcessType: string;
    /**
     * Posting Date.
     * @nullable
     */
    postingDate?: Moment;
    /**
     * Invoicing Party.
     * Maximum length: 10.
     */
    invoicingParty: string;
    /**
     * Payee Party.
     * Maximum length: 10.
     */
    payeeParty: string;
    /**
     * Bill To Party.
     * Maximum length: 10.
     */
    billToParty: string;
    /**
     * Payer Party.
     * Maximum length: 10.
     */
    payerParty: string;
    /**
     * Purchasing Organization.
     * Maximum length: 4.
     */
    purchasingOrganization: string;
    /**
     * Purchasing Group.
     * Maximum length: 3.
     */
    purchasingGroup: string;
    /**
     * Sales Organization.
     * Maximum length: 4.
     */
    salesOrganization: string;
    /**
     * Distribution Channel.
     * Maximum length: 2.
     */
    distributionChannel: string;
    /**
     * Division.
     * Maximum length: 2.
     */
    division: string;
    /**
     * Suplr Settlmt Company Code.
     * Maximum length: 4.
     */
    suplrSettlmtCompanyCode: string;
    /**
     * Cust Settlmt Company Code.
     * Maximum length: 4.
     */
    custSettlmtCompanyCode: string;
    /**
     * Document Date.
     * @nullable
     */
    documentDate?: Moment;
    /**
     * Document Reference Id.
     * Maximum length: 16.
     */
    documentReferenceId: string;
    /**
     * Assignment Reference.
     * Maximum length: 18.
     */
    assignmentReference: string;
    /**
     * Settlmt Doc Currency.
     * Maximum length: 5.
     */
    settlmtDocCurrency: string;
    /**
     * Settlmt Doc Currency Iso Code.
     * Maximum length: 3.
     */
    settlmtDocCurrencyIsoCode: string;
    /**
     * Exchange Rate.
     */
    exchangeRate: BigNumber;
    /**
     * Exchange Rate Is Fixed.
     */
    exchangeRateIsFixed: boolean;
    /**
     * Supplier Total Gross Amount.
     */
    supplierTotalGrossAmount: BigNumber;
    /**
     * Supplier Total Net Amount.
     */
    supplierTotalNetAmount: BigNumber;
    /**
     * Supplier Total Tax Amount.
     */
    supplierTotalTaxAmount: BigNumber;
    /**
     * Customer Total Gross Amount.
     */
    customerTotalGrossAmount: BigNumber;
    /**
     * Customer Total Net Amount.
     */
    customerTotalNetAmount: BigNumber;
    /**
     * Customer Total Tax Amount.
     */
    customerTotalTaxAmount: BigNumber;
    /**
     * Supplier Payment Terms.
     * Maximum length: 4.
     */
    supplierPaymentTerms: string;
    /**
     * Supplier Cash Discount 1 Days.
     */
    supplierCashDiscount1Days: BigNumber;
    /**
     * Supplier Cash Discount 2 Days.
     */
    supplierCashDiscount2Days: BigNumber;
    /**
     * Supplier Net Payment Days.
     */
    supplierNetPaymentDays: BigNumber;
    /**
     * Supplier Cash Discount 1 Percent.
     */
    supplierCashDiscount1Percent: BigNumber;
    /**
     * Supplier Cash Discount 2 Percent.
     */
    supplierCashDiscount2Percent: BigNumber;
    /**
     * Supplier Payment Method.
     * Maximum length: 1.
     */
    supplierPaymentMethod: string;
    /**
     * Customer Payment Terms.
     * Maximum length: 4.
     */
    customerPaymentTerms: string;
    /**
     * Customer Cash Discount 1 Days.
     */
    customerCashDiscount1Days: BigNumber;
    /**
     * Customer Cash Discount 2 Days.
     */
    customerCashDiscount2Days: BigNumber;
    /**
     * Customer Net Payment Days.
     */
    customerNetPaymentDays: BigNumber;
    /**
     * Customer Cash Discount 1 Percent.
     */
    customerCashDiscount1Percent: BigNumber;
    /**
     * Customer Cash Discount 2 Percent.
     */
    customerCashDiscount2Percent: BigNumber;
    /**
     * Customer Payment Method.
     * Maximum length: 1.
     */
    customerPaymentMethod: string;
    /**
     * Suplr Tot Eligible Amt For Csh Disc.
     */
    suplrTotEligibleAmtForCshDisc: BigNumber;
    /**
     * Cust Tot Eligible Amt For Csh Disc.
     */
    custTotEligibleAmtForCshDisc: BigNumber;
    /**
     * Settlmt Doc Is Canceled.
     */
    settlmtDocIsCanceled: boolean;
    /**
     * Canceled Settlmt Doc.
     * Maximum length: 10.
     */
    canceledSettlmtDoc: string;
    /**
     * Settlmt Doc Activity Reason.
     * Maximum length: 3.
     */
    settlmtDocActivityReason: string;
    /**
     * Payment Reference.
     * Maximum length: 30.
     */
    paymentReference: string;
    /**
     * Settlmt Appl Sts.
     * Maximum length: 4.
     */
    settlmtApplSts: string;
    /**
     * Sales Office.
     * Maximum length: 4.
     */
    salesOffice: string;
    /**
     * Sales Group.
     * Maximum length: 3.
     */
    salesGroup: string;
    /**
     * Supplier Settlmt Blkg Reason.
     * Maximum length: 2.
     */
    supplierSettlmtBlkgReason: string;
    /**
     * Customer Settlmt Blkg Reason.
     * Maximum length: 2.
     */
    customerSettlmtBlkgReason: string;
    /**
     * Tax Departure Country.
     * Maximum length: 3.
     */
    taxDepartureCountry: string;
    /**
     * Tax Destination Country.
     * Maximum length: 3.
     */
    taxDestinationCountry: string;
    /**
     * Is Eu Triangular Deal.
     */
    isEuTriangularDeal: boolean;
    /**
     * Supplier Vat Registration.
     * Maximum length: 20.
     */
    supplierVatRegistration: string;
    /**
     * Customer Vat Registration.
     * Maximum length: 20.
     */
    customerVatRegistration: string;
    /**
     * Total Gross Amount.
     */
    totalGrossAmount: BigNumber;
    /**
     * One-to-many navigation property to the [[SetlDocItm]] entity.
     */
    settlmtDocItem: SetlDocItm[];
    /**
     * Returns an entity builder to construct instances of `SetlDoc`.
     * @returns A builder that constructs instances of entity type `SetlDoc`.
     */
    static builder(): EntityBuilderType<SetlDoc, SetlDocType>;
    /**
     * Returns a request builder to construct requests for operations on the `SetlDoc` entity type.
     * @returns A `SetlDoc` request builder.
     */
    static requestBuilder(): SetlDocRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SetlDoc`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SetlDoc`.
     */
    static customField(fieldName: string): CustomFieldV4<SetlDoc>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SetlDocItm, SetlDocItmType } from './SetlDocItm';
export interface SetlDocType {
    settlmtDoc: string;
    settlmtDocType: string;
    settlmtProcessType: string;
    postingDate?: Moment | null;
    invoicingParty: string;
    payeeParty: string;
    billToParty: string;
    payerParty: string;
    purchasingOrganization: string;
    purchasingGroup: string;
    salesOrganization: string;
    distributionChannel: string;
    division: string;
    suplrSettlmtCompanyCode: string;
    custSettlmtCompanyCode: string;
    documentDate?: Moment | null;
    documentReferenceId: string;
    assignmentReference: string;
    settlmtDocCurrency: string;
    settlmtDocCurrencyIsoCode: string;
    exchangeRate: BigNumber;
    exchangeRateIsFixed: boolean;
    supplierTotalGrossAmount: BigNumber;
    supplierTotalNetAmount: BigNumber;
    supplierTotalTaxAmount: BigNumber;
    customerTotalGrossAmount: BigNumber;
    customerTotalNetAmount: BigNumber;
    customerTotalTaxAmount: BigNumber;
    supplierPaymentTerms: string;
    supplierCashDiscount1Days: BigNumber;
    supplierCashDiscount2Days: BigNumber;
    supplierNetPaymentDays: BigNumber;
    supplierCashDiscount1Percent: BigNumber;
    supplierCashDiscount2Percent: BigNumber;
    supplierPaymentMethod: string;
    customerPaymentTerms: string;
    customerCashDiscount1Days: BigNumber;
    customerCashDiscount2Days: BigNumber;
    customerNetPaymentDays: BigNumber;
    customerCashDiscount1Percent: BigNumber;
    customerCashDiscount2Percent: BigNumber;
    customerPaymentMethod: string;
    suplrTotEligibleAmtForCshDisc: BigNumber;
    custTotEligibleAmtForCshDisc: BigNumber;
    settlmtDocIsCanceled: boolean;
    canceledSettlmtDoc: string;
    settlmtDocActivityReason: string;
    paymentReference: string;
    settlmtApplSts: string;
    salesOffice: string;
    salesGroup: string;
    supplierSettlmtBlkgReason: string;
    customerSettlmtBlkgReason: string;
    taxDepartureCountry: string;
    taxDestinationCountry: string;
    isEuTriangularDeal: boolean;
    supplierVatRegistration: string;
    customerVatRegistration: string;
    totalGrossAmount: BigNumber;
    settlmtDocItem: SetlDocItmType[];
}
export declare namespace SetlDoc {
    /**
     * Static representation of the [[settlmtDoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_DOC: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtDocType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_DOC_TYPE: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtProcessType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_PROCESS_TYPE: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_DATE: OrderableEdmTypeField<SetlDoc, "Edm.Date", true, true>;
    /**
     * Static representation of the [[invoicingParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INVOICING_PARTY: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[payeeParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYEE_PARTY: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[billToParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_TO_PARTY: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[payerParty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYER_PARTY: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[purchasingOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASING_ORGANIZATION: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[purchasingGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASING_GROUP: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[salesOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORGANIZATION: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[distributionChannel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISTRIBUTION_CHANNEL: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[suplrSettlmtCompanyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPLR_SETTLMT_COMPANY_CODE: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[custSettlmtCompanyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_SETTLMT_COMPANY_CODE: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[documentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_DATE: OrderableEdmTypeField<SetlDoc, "Edm.Date", true, true>;
    /**
     * Static representation of the [[documentReferenceId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_REFERENCE_ID: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[assignmentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSIGNMENT_REFERENCE: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtDocCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_DOC_CURRENCY: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtDocCurrencyIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_DOC_CURRENCY_ISO_CODE: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[exchangeRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXCHANGE_RATE: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[exchangeRateIsFixed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXCHANGE_RATE_IS_FIXED: EdmTypeField<SetlDoc, "Edm.Boolean", false, true>;
    /**
     * Static representation of the [[supplierTotalGrossAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_TOTAL_GROSS_AMOUNT: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[supplierTotalNetAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_TOTAL_NET_AMOUNT: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[supplierTotalTaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_TOTAL_TAX_AMOUNT: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[customerTotalGrossAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_TOTAL_GROSS_AMOUNT: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[customerTotalNetAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_TOTAL_NET_AMOUNT: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[customerTotalTaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_TOTAL_TAX_AMOUNT: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[supplierPaymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_PAYMENT_TERMS: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[supplierCashDiscount1Days]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_CASH_DISCOUNT_1_DAYS: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[supplierCashDiscount2Days]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_CASH_DISCOUNT_2_DAYS: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[supplierNetPaymentDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_NET_PAYMENT_DAYS: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[supplierCashDiscount1Percent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_CASH_DISCOUNT_1_PERCENT: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[supplierCashDiscount2Percent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_CASH_DISCOUNT_2_PERCENT: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[supplierPaymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_PAYMENT_METHOD: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[customerPaymentTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_PAYMENT_TERMS: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[customerCashDiscount1Days]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_CASH_DISCOUNT_1_DAYS: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[customerCashDiscount2Days]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_CASH_DISCOUNT_2_DAYS: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[customerNetPaymentDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_NET_PAYMENT_DAYS: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[customerCashDiscount1Percent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_CASH_DISCOUNT_1_PERCENT: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[customerCashDiscount2Percent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_CASH_DISCOUNT_2_PERCENT: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[customerPaymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_PAYMENT_METHOD: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[suplrTotEligibleAmtForCshDisc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPLR_TOT_ELIGIBLE_AMT_FOR_CSH_DISC: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[custTotEligibleAmtForCshDisc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TOT_ELIGIBLE_AMT_FOR_CSH_DISC: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[settlmtDocIsCanceled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_DOC_IS_CANCELED: EdmTypeField<SetlDoc, "Edm.Boolean", false, true>;
    /**
     * Static representation of the [[canceledSettlmtDoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANCELED_SETTLMT_DOC: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtDocActivityReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_DOC_ACTIVITY_REASON: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[paymentReference]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYMENT_REFERENCE: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtApplSts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_APPL_STS: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[salesOffice]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_OFFICE: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[salesGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_GROUP: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[supplierSettlmtBlkgReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_SETTLMT_BLKG_REASON: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[customerSettlmtBlkgReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_SETTLMT_BLKG_REASON: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[taxDepartureCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_DEPARTURE_COUNTRY: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[taxDestinationCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_DESTINATION_COUNTRY: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[isEuTriangularDeal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_EU_TRIANGULAR_DEAL: EdmTypeField<SetlDoc, "Edm.Boolean", false, true>;
    /**
     * Static representation of the [[supplierVatRegistration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_VAT_REGISTRATION: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[customerVatRegistration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_VAT_REGISTRATION: EdmTypeField<SetlDoc, "Edm.String", false, true>;
    /**
     * Static representation of the [[totalGrossAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_GROSS_AMOUNT: OrderableEdmTypeField<SetlDoc, "Edm.Decimal", false, true>;
    /**
     * Static representation of the one-to-many navigation property [[settlmtDocItem]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_DOC_ITEM: OneToManyLink<SetlDoc, SetlDocItm>;
    /**
     * All fields of the SetlDoc entity.
     */
    const _allFields: Array<EdmTypeField<SetlDoc, 'Edm.String', false, true> | OrderableEdmTypeField<SetlDoc, 'Edm.Date', true, true> | OrderableEdmTypeField<SetlDoc, 'Edm.Decimal', false, true> | EdmTypeField<SetlDoc, 'Edm.Boolean', false, true> | OneToManyLink<SetlDoc, SetlDocItm>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SetlDoc>;
    /**
     * All key fields of the SetlDoc entity.
     */
    const _keyFields: Array<Field<SetlDoc, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property SetlDoc.
     */
    const _keys: {
        [keys: string]: Field<SetlDoc, boolean, boolean>;
    };
}
//# sourceMappingURL=SetlDoc.d.ts.map