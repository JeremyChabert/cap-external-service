/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SetlDocRequestBuilder } from './SetlDocRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, Constructable, CustomFieldV4, EdmTypeField, EntityBuilderType, EntityV4, Field, FieldBuilder, OneToManyLink, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SetlDoc" of service "com.sap.gateway.srvd_a2x.api_settlmt_doc.v0001".
 */
export class SetlDoc extends EntityV4 implements SetlDocType {
  /**
   * Technical entity name for SetlDoc.
   */
  static _entityName = 'SetlDoc';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v4';
  /**
   * Settlmt Doc.
   * Maximum length: 10.
   */
  settlmtDoc!: string;
  /**
   * Settlmt Doc Type.
   * Maximum length: 4.
   */
  settlmtDocType!: string;
  /**
   * Settlmt Process Type.
   * Maximum length: 4.
   */
  settlmtProcessType!: string;
  /**
   * Posting Date.
   * @nullable
   */
  postingDate?: Moment;
  /**
   * Invoicing Party.
   * Maximum length: 10.
   */
  invoicingParty!: string;
  /**
   * Payee Party.
   * Maximum length: 10.
   */
  payeeParty!: string;
  /**
   * Bill To Party.
   * Maximum length: 10.
   */
  billToParty!: string;
  /**
   * Payer Party.
   * Maximum length: 10.
   */
  payerParty!: string;
  /**
   * Purchasing Organization.
   * Maximum length: 4.
   */
  purchasingOrganization!: string;
  /**
   * Purchasing Group.
   * Maximum length: 3.
   */
  purchasingGroup!: string;
  /**
   * Sales Organization.
   * Maximum length: 4.
   */
  salesOrganization!: string;
  /**
   * Distribution Channel.
   * Maximum length: 2.
   */
  distributionChannel!: string;
  /**
   * Division.
   * Maximum length: 2.
   */
  division!: string;
  /**
   * Suplr Settlmt Company Code.
   * Maximum length: 4.
   */
  suplrSettlmtCompanyCode!: string;
  /**
   * Cust Settlmt Company Code.
   * Maximum length: 4.
   */
  custSettlmtCompanyCode!: string;
  /**
   * Document Date.
   * @nullable
   */
  documentDate?: Moment;
  /**
   * Document Reference Id.
   * Maximum length: 16.
   */
  documentReferenceId!: string;
  /**
   * Assignment Reference.
   * Maximum length: 18.
   */
  assignmentReference!: string;
  /**
   * Settlmt Doc Currency.
   * Maximum length: 5.
   */
  settlmtDocCurrency!: string;
  /**
   * Settlmt Doc Currency Iso Code.
   * Maximum length: 3.
   */
  settlmtDocCurrencyIsoCode!: string;
  /**
   * Exchange Rate.
   */
  exchangeRate!: BigNumber;
  /**
   * Exchange Rate Is Fixed.
   */
  exchangeRateIsFixed!: boolean;
  /**
   * Supplier Total Gross Amount.
   */
  supplierTotalGrossAmount!: BigNumber;
  /**
   * Supplier Total Net Amount.
   */
  supplierTotalNetAmount!: BigNumber;
  /**
   * Supplier Total Tax Amount.
   */
  supplierTotalTaxAmount!: BigNumber;
  /**
   * Customer Total Gross Amount.
   */
  customerTotalGrossAmount!: BigNumber;
  /**
   * Customer Total Net Amount.
   */
  customerTotalNetAmount!: BigNumber;
  /**
   * Customer Total Tax Amount.
   */
  customerTotalTaxAmount!: BigNumber;
  /**
   * Supplier Payment Terms.
   * Maximum length: 4.
   */
  supplierPaymentTerms!: string;
  /**
   * Supplier Cash Discount 1 Days.
   */
  supplierCashDiscount1Days!: BigNumber;
  /**
   * Supplier Cash Discount 2 Days.
   */
  supplierCashDiscount2Days!: BigNumber;
  /**
   * Supplier Net Payment Days.
   */
  supplierNetPaymentDays!: BigNumber;
  /**
   * Supplier Cash Discount 1 Percent.
   */
  supplierCashDiscount1Percent!: BigNumber;
  /**
   * Supplier Cash Discount 2 Percent.
   */
  supplierCashDiscount2Percent!: BigNumber;
  /**
   * Supplier Payment Method.
   * Maximum length: 1.
   */
  supplierPaymentMethod!: string;
  /**
   * Customer Payment Terms.
   * Maximum length: 4.
   */
  customerPaymentTerms!: string;
  /**
   * Customer Cash Discount 1 Days.
   */
  customerCashDiscount1Days!: BigNumber;
  /**
   * Customer Cash Discount 2 Days.
   */
  customerCashDiscount2Days!: BigNumber;
  /**
   * Customer Net Payment Days.
   */
  customerNetPaymentDays!: BigNumber;
  /**
   * Customer Cash Discount 1 Percent.
   */
  customerCashDiscount1Percent!: BigNumber;
  /**
   * Customer Cash Discount 2 Percent.
   */
  customerCashDiscount2Percent!: BigNumber;
  /**
   * Customer Payment Method.
   * Maximum length: 1.
   */
  customerPaymentMethod!: string;
  /**
   * Suplr Tot Eligible Amt For Csh Disc.
   */
  suplrTotEligibleAmtForCshDisc!: BigNumber;
  /**
   * Cust Tot Eligible Amt For Csh Disc.
   */
  custTotEligibleAmtForCshDisc!: BigNumber;
  /**
   * Settlmt Doc Is Canceled.
   */
  settlmtDocIsCanceled!: boolean;
  /**
   * Canceled Settlmt Doc.
   * Maximum length: 10.
   */
  canceledSettlmtDoc!: string;
  /**
   * Settlmt Doc Activity Reason.
   * Maximum length: 3.
   */
  settlmtDocActivityReason!: string;
  /**
   * Payment Reference.
   * Maximum length: 30.
   */
  paymentReference!: string;
  /**
   * Settlmt Appl Sts.
   * Maximum length: 4.
   */
  settlmtApplSts!: string;
  /**
   * Sales Office.
   * Maximum length: 4.
   */
  salesOffice!: string;
  /**
   * Sales Group.
   * Maximum length: 3.
   */
  salesGroup!: string;
  /**
   * Supplier Settlmt Blkg Reason.
   * Maximum length: 2.
   */
  supplierSettlmtBlkgReason!: string;
  /**
   * Customer Settlmt Blkg Reason.
   * Maximum length: 2.
   */
  customerSettlmtBlkgReason!: string;
  /**
   * Tax Departure Country.
   * Maximum length: 3.
   */
  taxDepartureCountry!: string;
  /**
   * Tax Destination Country.
   * Maximum length: 3.
   */
  taxDestinationCountry!: string;
  /**
   * Is Eu Triangular Deal.
   */
  isEuTriangularDeal!: boolean;
  /**
   * Supplier Vat Registration.
   * Maximum length: 20.
   */
  supplierVatRegistration!: string;
  /**
   * Customer Vat Registration.
   * Maximum length: 20.
   */
  customerVatRegistration!: string;
  /**
   * Total Gross Amount.
   */
  totalGrossAmount!: BigNumber;
  /**
   * One-to-many navigation property to the [[SetlDocItm]] entity.
   */
  settlmtDocItem!: SetlDocItm[];

  /**
   * Returns an entity builder to construct instances of `SetlDoc`.
   * @returns A builder that constructs instances of entity type `SetlDoc`.
   */
  static builder(): EntityBuilderType<SetlDoc, SetlDocType> {
    return EntityV4.entityBuilder(SetlDoc);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SetlDoc` entity type.
   * @returns A `SetlDoc` request builder.
   */
  static requestBuilder(): SetlDocRequestBuilder {
    return new SetlDocRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SetlDoc`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SetlDoc`.
   */
  static customField(fieldName: string): CustomFieldV4<SetlDoc> {
    return EntityV4.customFieldSelector(fieldName, SetlDoc);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace SetlDoc {
  const _fieldBuilder: FieldBuilder<Constructable<SetlDoc>> = new FieldBuilder(SetlDoc);
  /**
   * Static representation of the [[settlmtDoc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_DOC = _fieldBuilder.buildEdmTypeField('SettlmtDoc', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtDocType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_DOC_TYPE = _fieldBuilder.buildEdmTypeField('SettlmtDocType', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtProcessType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_PROCESS_TYPE = _fieldBuilder.buildEdmTypeField('SettlmtProcessType', 'Edm.String', false);
  /**
   * Static representation of the [[postingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTING_DATE = _fieldBuilder.buildEdmTypeField('PostingDate', 'Edm.Date', true);
  /**
   * Static representation of the [[invoicingParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INVOICING_PARTY = _fieldBuilder.buildEdmTypeField('InvoicingParty', 'Edm.String', false);
  /**
   * Static representation of the [[payeeParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYEE_PARTY = _fieldBuilder.buildEdmTypeField('PayeeParty', 'Edm.String', false);
  /**
   * Static representation of the [[billToParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_TO_PARTY = _fieldBuilder.buildEdmTypeField('BillToParty', 'Edm.String', false);
  /**
   * Static representation of the [[payerParty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYER_PARTY = _fieldBuilder.buildEdmTypeField('PayerParty', 'Edm.String', false);
  /**
   * Static representation of the [[purchasingOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASING_ORGANIZATION = _fieldBuilder.buildEdmTypeField('PurchasingOrganization', 'Edm.String', false);
  /**
   * Static representation of the [[purchasingGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PURCHASING_GROUP = _fieldBuilder.buildEdmTypeField('PurchasingGroup', 'Edm.String', false);
  /**
   * Static representation of the [[salesOrganization]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_ORGANIZATION = _fieldBuilder.buildEdmTypeField('SalesOrganization', 'Edm.String', false);
  /**
   * Static representation of the [[distributionChannel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISTRIBUTION_CHANNEL = _fieldBuilder.buildEdmTypeField('DistributionChannel', 'Edm.String', false);
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION = _fieldBuilder.buildEdmTypeField('Division', 'Edm.String', false);
  /**
   * Static representation of the [[suplrSettlmtCompanyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPLR_SETTLMT_COMPANY_CODE = _fieldBuilder.buildEdmTypeField('SuplrSettlmtCompanyCode', 'Edm.String', false);
  /**
   * Static representation of the [[custSettlmtCompanyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_SETTLMT_COMPANY_CODE = _fieldBuilder.buildEdmTypeField('CustSettlmtCompanyCode', 'Edm.String', false);
  /**
   * Static representation of the [[documentDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_DATE = _fieldBuilder.buildEdmTypeField('DocumentDate', 'Edm.Date', true);
  /**
   * Static representation of the [[documentReferenceId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DOCUMENT_REFERENCE_ID = _fieldBuilder.buildEdmTypeField('DocumentReferenceID', 'Edm.String', false);
  /**
   * Static representation of the [[assignmentReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSIGNMENT_REFERENCE = _fieldBuilder.buildEdmTypeField('AssignmentReference', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtDocCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_DOC_CURRENCY = _fieldBuilder.buildEdmTypeField('SettlmtDocCurrency', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtDocCurrencyIsoCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_DOC_CURRENCY_ISO_CODE = _fieldBuilder.buildEdmTypeField('SettlmtDocCurrencyISOCode', 'Edm.String', false);
  /**
   * Static representation of the [[exchangeRate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCHANGE_RATE = _fieldBuilder.buildEdmTypeField('ExchangeRate', 'Edm.Decimal', false);
  /**
   * Static representation of the [[exchangeRateIsFixed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCHANGE_RATE_IS_FIXED = _fieldBuilder.buildEdmTypeField('ExchangeRateIsFixed', 'Edm.Boolean', false);
  /**
   * Static representation of the [[supplierTotalGrossAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_TOTAL_GROSS_AMOUNT = _fieldBuilder.buildEdmTypeField('SupplierTotalGrossAmount', 'Edm.Decimal', false);
  /**
   * Static representation of the [[supplierTotalNetAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_TOTAL_NET_AMOUNT = _fieldBuilder.buildEdmTypeField('SupplierTotalNetAmount', 'Edm.Decimal', false);
  /**
   * Static representation of the [[supplierTotalTaxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_TOTAL_TAX_AMOUNT = _fieldBuilder.buildEdmTypeField('SupplierTotalTaxAmount', 'Edm.Decimal', false);
  /**
   * Static representation of the [[customerTotalGrossAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TOTAL_GROSS_AMOUNT = _fieldBuilder.buildEdmTypeField('CustomerTotalGrossAmount', 'Edm.Decimal', false);
  /**
   * Static representation of the [[customerTotalNetAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TOTAL_NET_AMOUNT = _fieldBuilder.buildEdmTypeField('CustomerTotalNetAmount', 'Edm.Decimal', false);
  /**
   * Static representation of the [[customerTotalTaxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TOTAL_TAX_AMOUNT = _fieldBuilder.buildEdmTypeField('CustomerTotalTaxAmount', 'Edm.Decimal', false);
  /**
   * Static representation of the [[supplierPaymentTerms]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_PAYMENT_TERMS = _fieldBuilder.buildEdmTypeField('SupplierPaymentTerms', 'Edm.String', false);
  /**
   * Static representation of the [[supplierCashDiscount1Days]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_CASH_DISCOUNT_1_DAYS = _fieldBuilder.buildEdmTypeField('SupplierCashDiscount1Days', 'Edm.Decimal', false);
  /**
   * Static representation of the [[supplierCashDiscount2Days]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_CASH_DISCOUNT_2_DAYS = _fieldBuilder.buildEdmTypeField('SupplierCashDiscount2Days', 'Edm.Decimal', false);
  /**
   * Static representation of the [[supplierNetPaymentDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_NET_PAYMENT_DAYS = _fieldBuilder.buildEdmTypeField('SupplierNetPaymentDays', 'Edm.Decimal', false);
  /**
   * Static representation of the [[supplierCashDiscount1Percent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_CASH_DISCOUNT_1_PERCENT = _fieldBuilder.buildEdmTypeField('SupplierCashDiscount1Percent', 'Edm.Decimal', false);
  /**
   * Static representation of the [[supplierCashDiscount2Percent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_CASH_DISCOUNT_2_PERCENT = _fieldBuilder.buildEdmTypeField('SupplierCashDiscount2Percent', 'Edm.Decimal', false);
  /**
   * Static representation of the [[supplierPaymentMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_PAYMENT_METHOD = _fieldBuilder.buildEdmTypeField('SupplierPaymentMethod', 'Edm.String', false);
  /**
   * Static representation of the [[customerPaymentTerms]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_PAYMENT_TERMS = _fieldBuilder.buildEdmTypeField('CustomerPaymentTerms', 'Edm.String', false);
  /**
   * Static representation of the [[customerCashDiscount1Days]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_CASH_DISCOUNT_1_DAYS = _fieldBuilder.buildEdmTypeField('CustomerCashDiscount1Days', 'Edm.Decimal', false);
  /**
   * Static representation of the [[customerCashDiscount2Days]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_CASH_DISCOUNT_2_DAYS = _fieldBuilder.buildEdmTypeField('CustomerCashDiscount2Days', 'Edm.Decimal', false);
  /**
   * Static representation of the [[customerNetPaymentDays]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_NET_PAYMENT_DAYS = _fieldBuilder.buildEdmTypeField('CustomerNetPaymentDays', 'Edm.Decimal', false);
  /**
   * Static representation of the [[customerCashDiscount1Percent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_CASH_DISCOUNT_1_PERCENT = _fieldBuilder.buildEdmTypeField('CustomerCashDiscount1Percent', 'Edm.Decimal', false);
  /**
   * Static representation of the [[customerCashDiscount2Percent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_CASH_DISCOUNT_2_PERCENT = _fieldBuilder.buildEdmTypeField('CustomerCashDiscount2Percent', 'Edm.Decimal', false);
  /**
   * Static representation of the [[customerPaymentMethod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_PAYMENT_METHOD = _fieldBuilder.buildEdmTypeField('CustomerPaymentMethod', 'Edm.String', false);
  /**
   * Static representation of the [[suplrTotEligibleAmtForCshDisc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPLR_TOT_ELIGIBLE_AMT_FOR_CSH_DISC = _fieldBuilder.buildEdmTypeField('SuplrTotEligibleAmtForCshDisc', 'Edm.Decimal', false);
  /**
   * Static representation of the [[custTotEligibleAmtForCshDisc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TOT_ELIGIBLE_AMT_FOR_CSH_DISC = _fieldBuilder.buildEdmTypeField('CustTotEligibleAmtForCshDisc', 'Edm.Decimal', false);
  /**
   * Static representation of the [[settlmtDocIsCanceled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_DOC_IS_CANCELED = _fieldBuilder.buildEdmTypeField('SettlmtDocIsCanceled', 'Edm.Boolean', false);
  /**
   * Static representation of the [[canceledSettlmtDoc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CANCELED_SETTLMT_DOC = _fieldBuilder.buildEdmTypeField('CanceledSettlmtDoc', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtDocActivityReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_DOC_ACTIVITY_REASON = _fieldBuilder.buildEdmTypeField('SettlmtDocActivityReason', 'Edm.String', false);
  /**
   * Static representation of the [[paymentReference]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYMENT_REFERENCE = _fieldBuilder.buildEdmTypeField('PaymentReference', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtApplSts]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_APPL_STS = _fieldBuilder.buildEdmTypeField('SettlmtApplSts', 'Edm.String', false);
  /**
   * Static representation of the [[salesOffice]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_OFFICE = _fieldBuilder.buildEdmTypeField('SalesOffice', 'Edm.String', false);
  /**
   * Static representation of the [[salesGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_GROUP = _fieldBuilder.buildEdmTypeField('SalesGroup', 'Edm.String', false);
  /**
   * Static representation of the [[supplierSettlmtBlkgReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_SETTLMT_BLKG_REASON = _fieldBuilder.buildEdmTypeField('SupplierSettlmtBlkgReason', 'Edm.String', false);
  /**
   * Static representation of the [[customerSettlmtBlkgReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_SETTLMT_BLKG_REASON = _fieldBuilder.buildEdmTypeField('CustomerSettlmtBlkgReason', 'Edm.String', false);
  /**
   * Static representation of the [[taxDepartureCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DEPARTURE_COUNTRY = _fieldBuilder.buildEdmTypeField('TaxDepartureCountry', 'Edm.String', false);
  /**
   * Static representation of the [[taxDestinationCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_DESTINATION_COUNTRY = _fieldBuilder.buildEdmTypeField('TaxDestinationCountry', 'Edm.String', false);
  /**
   * Static representation of the [[isEuTriangularDeal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_EU_TRIANGULAR_DEAL = _fieldBuilder.buildEdmTypeField('IsEUTriangularDeal', 'Edm.Boolean', false);
  /**
   * Static representation of the [[supplierVatRegistration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_VAT_REGISTRATION = _fieldBuilder.buildEdmTypeField('SupplierVATRegistration', 'Edm.String', false);
  /**
   * Static representation of the [[customerVatRegistration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_VAT_REGISTRATION = _fieldBuilder.buildEdmTypeField('CustomerVATRegistration', 'Edm.String', false);
  /**
   * Static representation of the [[totalGrossAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_GROSS_AMOUNT = _fieldBuilder.buildEdmTypeField('TotalGrossAmount', 'Edm.Decimal', false);
  /**
   * Static representation of the one-to-many navigation property [[settlmtDocItem]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_DOC_ITEM: OneToManyLink<SetlDoc, SetlDocItm> = new OneToManyLink('_SettlmtDocItem', SetlDoc, SetlDocItm);
  /**
   * All fields of the SetlDoc entity.
   */
  export const _allFields: Array<EdmTypeField<SetlDoc, 'Edm.String', false, true> | OrderableEdmTypeField<SetlDoc, 'Edm.Date', true, true> | OrderableEdmTypeField<SetlDoc, 'Edm.Decimal', false, true> | EdmTypeField<SetlDoc, 'Edm.Boolean', false, true> | OneToManyLink<SetlDoc, SetlDocItm>> = [
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
  export const ALL_FIELDS: AllFields<SetlDoc> = new AllFields('*', SetlDoc);
  /**
   * All key fields of the SetlDoc entity.
   */
  export const _keyFields: Array<Field<SetlDoc, boolean, boolean>> = [SetlDoc.SETTLMT_DOC];
  /**
   * Mapping of all key field names to the respective static field property SetlDoc.
   */
  export const _keys: { [keys: string]: Field<SetlDoc, boolean, boolean> } = SetlDoc._keyFields.reduce((acc: { [keys: string]: Field<SetlDoc, boolean, boolean> }, field: Field<SetlDoc, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
