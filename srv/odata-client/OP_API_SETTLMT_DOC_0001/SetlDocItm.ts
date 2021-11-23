/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SetlDocItmRequestBuilder } from './SetlDocItmRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, Constructable, CustomFieldV4, EdmTypeField, EntityBuilderType, EntityV4, Field, FieldBuilder, OneToOneLink, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SetlDocItm" of service "com.sap.gateway.srvd_a2x.api_settlmt_doc.v0001".
 */
export class SetlDocItm extends EntityV4 implements SetlDocItmType {
  /**
   * Technical entity name for SetlDocItm.
   */
  static _entityName = 'SetlDocItm';
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
   * Settlmt Doc Item.
   * Maximum length: 6.
   */
  settlmtDocItem!: string;
  /**
   * Settlmt Doc Currency.
   * Maximum length: 5.
   */
  settlmtDocCurrency!: string;
  /**
   * Product.
   * Maximum length: 40.
   */
  product!: string;
  /**
   * Product Group.
   * Maximum length: 9.
   */
  productGroup!: string;
  /**
   * Plant.
   * Maximum length: 4.
   */
  plant!: string;
  /**
   * Supplier Tax Code.
   * Maximum length: 2.
   */
  supplierTaxCode!: string;
  /**
   * Customer Tax Code.
   * Maximum length: 2.
   */
  customerTaxCode!: string;
  /**
   * Pricing Date.
   * @nullable
   */
  pricingDate?: Moment;
  /**
   * Settlmt Quantity.
   */
  settlmtQuantity!: BigNumber;
  /**
   * Settlmt Quantity Unit.
   * Maximum length: 3.
   */
  settlmtQuantityUnit!: string;
  /**
   * Settlmt Quantity Unit Iso Code.
   * Maximum length: 3.
   */
  settlmtQuantityUnitIsoCode!: string;
  /**
   * Net Price Amount.
   */
  netPriceAmount!: BigNumber;
  /**
   * Net Price Quantity.
   */
  netPriceQuantity!: BigNumber;
  /**
   * Net Price Quantity Unit.
   * Maximum length: 3.
   */
  netPriceQuantityUnit!: string;
  /**
   * Settlmt To Base Quantity Nmrtr.
   */
  settlmtToBaseQuantityNmrtr!: BigNumber;
  /**
   * Settlmt To Base Quantity Dnmntr.
   */
  settlmtToBaseQuantityDnmntr!: BigNumber;
  /**
   * Base Unit.
   * Maximum length: 3.
   */
  baseUnit!: string;
  /**
   * Item Net Weight.
   */
  itemNetWeight!: BigNumber;
  /**
   * Item Gross Weight.
   */
  itemGrossWeight!: BigNumber;
  /**
   * Item Weight Unit.
   * Maximum length: 3.
   */
  itemWeightUnit!: string;
  /**
   * Item Weight Unit Iso Code.
   * Maximum length: 3.
   */
  itemWeightUnitIsoCode!: string;
  /**
   * Item Volume.
   */
  itemVolume!: BigNumber;
  /**
   * Item Volume Unit.
   * Maximum length: 3.
   */
  itemVolumeUnit!: string;
  /**
   * Item Volume Unit Iso Code.
   * Maximum length: 3.
   */
  itemVolumeUnitIsoCode!: string;
  /**
   * Supplier Item Gross Amount.
   */
  supplierItemGrossAmount!: BigNumber;
  /**
   * Supplier Item Net Amount.
   */
  supplierItemNetAmount!: BigNumber;
  /**
   * Supplier Item Tax Amount.
   */
  supplierItemTaxAmount!: BigNumber;
  /**
   * Customer Item Gross Amount.
   */
  customerItemGrossAmount!: BigNumber;
  /**
   * Customer Item Net Amount.
   */
  customerItemNetAmount!: BigNumber;
  /**
   * Customer Item Tax Amount.
   */
  customerItemTaxAmount!: BigNumber;
  /**
   * Cash Discount Is Deductible.
   */
  cashDiscountIsDeductible!: boolean;
  /**
   * Settlmt Source Doc.
   * Maximum length: 10.
   */
  settlmtSourceDoc!: string;
  /**
   * Settlmt Source Doc Item.
   * Maximum length: 6.
   */
  settlmtSourceDocItem!: string;
  /**
   * Settlmt Source Doc Cat.
   * Maximum length: 2.
   */
  settlmtSourceDocCat!: string;
  /**
   * Settlmt Item Activity Reason.
   * Maximum length: 3.
   */
  settlmtItemActivityReason!: string;
  /**
   * Settlmt Doc Item Text.
   * Maximum length: 40.
   */
  settlmtDocItemText!: string;
  /**
   * Supplier Product Id.
   * Maximum length: 35.
   */
  supplierProductId!: string;
  /**
   * Tax Jurisdiction.
   * Maximum length: 15.
   */
  taxJurisdiction!: string;
  /**
   * Product Purchase Points Qty Unit.
   * Maximum length: 3.
   */
  productPurchasePointsQtyUnit!: string;
  /**
   * Prod Pur Points Qty Unit Iso Code.
   * Maximum length: 3.
   */
  prodPurPointsQtyUnitIsoCode!: string;
  /**
   * Product Purchase Points Qty.
   */
  productPurchasePointsQty!: BigNumber;
  /**
   * Suplr Settlmt Business Area.
   * Maximum length: 4.
   */
  suplrSettlmtBusinessArea!: string;
  /**
   * Cust Settlmt Business Area.
   * Maximum length: 4.
   */
  custSettlmtBusinessArea!: string;
  /**
   * Suplr Settlmt Cost Center.
   * Maximum length: 10.
   */
  suplrSettlmtCostCenter!: string;
  /**
   * Suplr Settlmt Profit Center.
   * Maximum length: 10.
   */
  suplrSettlmtProfitCenter!: string;
  /**
   * Incoterms Version.
   * Maximum length: 4.
   */
  incotermsVersion!: string;
  /**
   * Incoterms Location 1.
   * Maximum length: 70.
   */
  incotermsLocation1!: string;
  /**
   * Incoterms Location 2.
   * Maximum length: 70.
   */
  incotermsLocation2!: string;
  /**
   * Cust Settlmt Cost Center.
   * Maximum length: 10.
   */
  custSettlmtCostCenter!: string;
  /**
   * Cust Settlmt Profit Center.
   * Maximum length: 10.
   */
  custSettlmtProfitCenter!: string;
  /**
   * Settlmt Precdg Doc.
   * Maximum length: 10.
   */
  settlmtPrecdgDoc!: string;
  /**
   * Settlmt Precdg Doc Item.
   * Maximum length: 6.
   */
  settlmtPrecdgDocItem!: string;
  /**
   * Settlmt Precdg Doc Cat.
   * Maximum length: 2.
   */
  settlmtPrecdgDocCat!: string;
  /**
   * Settlmt Doc Item Cat.
   * Maximum length: 1.
   */
  settlmtDocItemCat!: string;
  /**
   * Supplier Settlement Order.
   * Maximum length: 12.
   */
  supplierSettlementOrder!: string;
  /**
   * Item Settlmt Relevance.
   * Maximum length: 1.
   */
  itemSettlmtRelevance!: string;
  /**
   * Settlement Fiscal Year.
   * Maximum length: 4.
   */
  settlementFiscalYear!: string;
  /**
   * Settlmt Ref Doc.
   * Maximum length: 20.
   */
  settlmtRefDoc!: string;
  /**
   * Settlmt Ref Doc Company Code.
   * Maximum length: 4.
   */
  settlmtRefDocCompanyCode!: string;
  /**
   * Settlmt Ref Doc Item.
   * Maximum length: 10.
   */
  settlmtRefDocItem!: string;
  /**
   * Settlmt Ref Doc Cat.
   * Maximum length: 2.
   */
  settlmtRefDocCat!: string;
  /**
   * Supplier Subrange.
   * Maximum length: 6.
   */
  supplierSubrange!: string;
  /**
   * Intercompany Tax Country.
   * Maximum length: 3.
   */
  intercompanyTaxCountry!: string;
  /**
   * Tax Country.
   * Maximum length: 3.
   */
  taxCountry!: string;
  /**
   * Prior Supplier.
   * Maximum length: 10.
   */
  priorSupplier!: string;
  /**
   * One-to-one navigation property to the [[SetlDoc]] entity.
   */
  settlmtDoc_1?: SetlDoc | null;

  /**
   * Returns an entity builder to construct instances of `SetlDocItm`.
   * @returns A builder that constructs instances of entity type `SetlDocItm`.
   */
  static builder(): EntityBuilderType<SetlDocItm, SetlDocItmType> {
    return EntityV4.entityBuilder(SetlDocItm);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SetlDocItm` entity type.
   * @returns A `SetlDocItm` request builder.
   */
  static requestBuilder(): SetlDocItmRequestBuilder {
    return new SetlDocItmRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SetlDocItm`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SetlDocItm`.
   */
  static customField(fieldName: string): CustomFieldV4<SetlDocItm> {
    return EntityV4.customFieldSelector(fieldName, SetlDocItm);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SetlDoc, SetlDocType } from './SetlDoc';

export interface SetlDocItmType {
  settlmtDoc: string;
  settlmtDocItem: string;
  settlmtDocCurrency: string;
  product: string;
  productGroup: string;
  plant: string;
  supplierTaxCode: string;
  customerTaxCode: string;
  pricingDate?: Moment | null;
  settlmtQuantity: BigNumber;
  settlmtQuantityUnit: string;
  settlmtQuantityUnitIsoCode: string;
  netPriceAmount: BigNumber;
  netPriceQuantity: BigNumber;
  netPriceQuantityUnit: string;
  settlmtToBaseQuantityNmrtr: BigNumber;
  settlmtToBaseQuantityDnmntr: BigNumber;
  baseUnit: string;
  itemNetWeight: BigNumber;
  itemGrossWeight: BigNumber;
  itemWeightUnit: string;
  itemWeightUnitIsoCode: string;
  itemVolume: BigNumber;
  itemVolumeUnit: string;
  itemVolumeUnitIsoCode: string;
  supplierItemGrossAmount: BigNumber;
  supplierItemNetAmount: BigNumber;
  supplierItemTaxAmount: BigNumber;
  customerItemGrossAmount: BigNumber;
  customerItemNetAmount: BigNumber;
  customerItemTaxAmount: BigNumber;
  cashDiscountIsDeductible: boolean;
  settlmtSourceDoc: string;
  settlmtSourceDocItem: string;
  settlmtSourceDocCat: string;
  settlmtItemActivityReason: string;
  settlmtDocItemText: string;
  supplierProductId: string;
  taxJurisdiction: string;
  productPurchasePointsQtyUnit: string;
  prodPurPointsQtyUnitIsoCode: string;
  productPurchasePointsQty: BigNumber;
  suplrSettlmtBusinessArea: string;
  custSettlmtBusinessArea: string;
  suplrSettlmtCostCenter: string;
  suplrSettlmtProfitCenter: string;
  incotermsVersion: string;
  incotermsLocation1: string;
  incotermsLocation2: string;
  custSettlmtCostCenter: string;
  custSettlmtProfitCenter: string;
  settlmtPrecdgDoc: string;
  settlmtPrecdgDocItem: string;
  settlmtPrecdgDocCat: string;
  settlmtDocItemCat: string;
  supplierSettlementOrder: string;
  itemSettlmtRelevance: string;
  settlementFiscalYear: string;
  settlmtRefDoc: string;
  settlmtRefDocCompanyCode: string;
  settlmtRefDocItem: string;
  settlmtRefDocCat: string;
  supplierSubrange: string;
  intercompanyTaxCountry: string;
  taxCountry: string;
  priorSupplier: string;
  settlmtDoc_1?: SetlDocType | null;
}

export namespace SetlDocItm {
  const _fieldBuilder: FieldBuilder<Constructable<SetlDocItm>> = new FieldBuilder(SetlDocItm);
  /**
   * Static representation of the [[settlmtDoc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_DOC = _fieldBuilder.buildEdmTypeField('SettlmtDoc', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtDocItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_DOC_ITEM = _fieldBuilder.buildEdmTypeField('SettlmtDocItem', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtDocCurrency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_DOC_CURRENCY = _fieldBuilder.buildEdmTypeField('SettlmtDocCurrency', 'Edm.String', false);
  /**
   * Static representation of the [[product]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT = _fieldBuilder.buildEdmTypeField('Product', 'Edm.String', false);
  /**
   * Static representation of the [[productGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_GROUP = _fieldBuilder.buildEdmTypeField('ProductGroup', 'Edm.String', false);
  /**
   * Static representation of the [[plant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANT = _fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false);
  /**
   * Static representation of the [[supplierTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_TAX_CODE = _fieldBuilder.buildEdmTypeField('SupplierTaxCode', 'Edm.String', false);
  /**
   * Static representation of the [[customerTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_TAX_CODE = _fieldBuilder.buildEdmTypeField('CustomerTaxCode', 'Edm.String', false);
  /**
   * Static representation of the [[pricingDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICING_DATE = _fieldBuilder.buildEdmTypeField('PricingDate', 'Edm.Date', true);
  /**
   * Static representation of the [[settlmtQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_QUANTITY = _fieldBuilder.buildEdmTypeField('SettlmtQuantity', 'Edm.Decimal', false);
  /**
   * Static representation of the [[settlmtQuantityUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_QUANTITY_UNIT = _fieldBuilder.buildEdmTypeField('SettlmtQuantityUnit', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtQuantityUnitIsoCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_QUANTITY_UNIT_ISO_CODE = _fieldBuilder.buildEdmTypeField('SettlmtQuantityUnitISOCode', 'Edm.String', false);
  /**
   * Static representation of the [[netPriceAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NET_PRICE_AMOUNT = _fieldBuilder.buildEdmTypeField('NetPriceAmount', 'Edm.Decimal', false);
  /**
   * Static representation of the [[netPriceQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NET_PRICE_QUANTITY = _fieldBuilder.buildEdmTypeField('NetPriceQuantity', 'Edm.Decimal', false);
  /**
   * Static representation of the [[netPriceQuantityUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NET_PRICE_QUANTITY_UNIT = _fieldBuilder.buildEdmTypeField('NetPriceQuantityUnit', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtToBaseQuantityNmrtr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_TO_BASE_QUANTITY_NMRTR = _fieldBuilder.buildEdmTypeField('SettlmtToBaseQuantityNmrtr', 'Edm.Decimal', false);
  /**
   * Static representation of the [[settlmtToBaseQuantityDnmntr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_TO_BASE_QUANTITY_DNMNTR = _fieldBuilder.buildEdmTypeField('SettlmtToBaseQuantityDnmntr', 'Edm.Decimal', false);
  /**
   * Static representation of the [[baseUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_UNIT = _fieldBuilder.buildEdmTypeField('BaseUnit', 'Edm.String', false);
  /**
   * Static representation of the [[itemNetWeight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_NET_WEIGHT = _fieldBuilder.buildEdmTypeField('ItemNetWeight', 'Edm.Decimal', false);
  /**
   * Static representation of the [[itemGrossWeight]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_GROSS_WEIGHT = _fieldBuilder.buildEdmTypeField('ItemGrossWeight', 'Edm.Decimal', false);
  /**
   * Static representation of the [[itemWeightUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_WEIGHT_UNIT = _fieldBuilder.buildEdmTypeField('ItemWeightUnit', 'Edm.String', false);
  /**
   * Static representation of the [[itemWeightUnitIsoCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_WEIGHT_UNIT_ISO_CODE = _fieldBuilder.buildEdmTypeField('ItemWeightUnitISOCode', 'Edm.String', false);
  /**
   * Static representation of the [[itemVolume]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_VOLUME = _fieldBuilder.buildEdmTypeField('ItemVolume', 'Edm.Decimal', false);
  /**
   * Static representation of the [[itemVolumeUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_VOLUME_UNIT = _fieldBuilder.buildEdmTypeField('ItemVolumeUnit', 'Edm.String', false);
  /**
   * Static representation of the [[itemVolumeUnitIsoCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_VOLUME_UNIT_ISO_CODE = _fieldBuilder.buildEdmTypeField('ItemVolumeUnitISOCode', 'Edm.String', false);
  /**
   * Static representation of the [[supplierItemGrossAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_ITEM_GROSS_AMOUNT = _fieldBuilder.buildEdmTypeField('SupplierItemGrossAmount', 'Edm.Decimal', false);
  /**
   * Static representation of the [[supplierItemNetAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_ITEM_NET_AMOUNT = _fieldBuilder.buildEdmTypeField('SupplierItemNetAmount', 'Edm.Decimal', false);
  /**
   * Static representation of the [[supplierItemTaxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_ITEM_TAX_AMOUNT = _fieldBuilder.buildEdmTypeField('SupplierItemTaxAmount', 'Edm.Decimal', false);
  /**
   * Static representation of the [[customerItemGrossAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_ITEM_GROSS_AMOUNT = _fieldBuilder.buildEdmTypeField('CustomerItemGrossAmount', 'Edm.Decimal', false);
  /**
   * Static representation of the [[customerItemNetAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_ITEM_NET_AMOUNT = _fieldBuilder.buildEdmTypeField('CustomerItemNetAmount', 'Edm.Decimal', false);
  /**
   * Static representation of the [[customerItemTaxAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOMER_ITEM_TAX_AMOUNT = _fieldBuilder.buildEdmTypeField('CustomerItemTaxAmount', 'Edm.Decimal', false);
  /**
   * Static representation of the [[cashDiscountIsDeductible]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_DISCOUNT_IS_DEDUCTIBLE = _fieldBuilder.buildEdmTypeField('CashDiscountIsDeductible', 'Edm.Boolean', false);
  /**
   * Static representation of the [[settlmtSourceDoc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_SOURCE_DOC = _fieldBuilder.buildEdmTypeField('SettlmtSourceDoc', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtSourceDocItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_SOURCE_DOC_ITEM = _fieldBuilder.buildEdmTypeField('SettlmtSourceDocItem', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtSourceDocCat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_SOURCE_DOC_CAT = _fieldBuilder.buildEdmTypeField('SettlmtSourceDocCat', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtItemActivityReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_ITEM_ACTIVITY_REASON = _fieldBuilder.buildEdmTypeField('SettlmtItemActivityReason', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtDocItemText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_DOC_ITEM_TEXT = _fieldBuilder.buildEdmTypeField('SettlmtDocItemText', 'Edm.String', false);
  /**
   * Static representation of the [[supplierProductId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_PRODUCT_ID = _fieldBuilder.buildEdmTypeField('SupplierProductID', 'Edm.String', false);
  /**
   * Static representation of the [[taxJurisdiction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_JURISDICTION = _fieldBuilder.buildEdmTypeField('TaxJurisdiction', 'Edm.String', false);
  /**
   * Static representation of the [[productPurchasePointsQtyUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_PURCHASE_POINTS_QTY_UNIT = _fieldBuilder.buildEdmTypeField('ProductPurchasePointsQtyUnit', 'Edm.String', false);
  /**
   * Static representation of the [[prodPurPointsQtyUnitIsoCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROD_PUR_POINTS_QTY_UNIT_ISO_CODE = _fieldBuilder.buildEdmTypeField('ProdPurPointsQtyUnitISOCode', 'Edm.String', false);
  /**
   * Static representation of the [[productPurchasePointsQty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_PURCHASE_POINTS_QTY = _fieldBuilder.buildEdmTypeField('ProductPurchasePointsQty', 'Edm.Decimal', false);
  /**
   * Static representation of the [[suplrSettlmtBusinessArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPLR_SETTLMT_BUSINESS_AREA = _fieldBuilder.buildEdmTypeField('SuplrSettlmtBusinessArea', 'Edm.String', false);
  /**
   * Static representation of the [[custSettlmtBusinessArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_SETTLMT_BUSINESS_AREA = _fieldBuilder.buildEdmTypeField('CustSettlmtBusinessArea', 'Edm.String', false);
  /**
   * Static representation of the [[suplrSettlmtCostCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPLR_SETTLMT_COST_CENTER = _fieldBuilder.buildEdmTypeField('SuplrSettlmtCostCenter', 'Edm.String', false);
  /**
   * Static representation of the [[suplrSettlmtProfitCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPLR_SETTLMT_PROFIT_CENTER = _fieldBuilder.buildEdmTypeField('SuplrSettlmtProfitCenter', 'Edm.String', false);
  /**
   * Static representation of the [[incotermsVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_VERSION = _fieldBuilder.buildEdmTypeField('IncotermsVersion', 'Edm.String', false);
  /**
   * Static representation of the [[incotermsLocation1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_LOCATION_1 = _fieldBuilder.buildEdmTypeField('IncotermsLocation1', 'Edm.String', false);
  /**
   * Static representation of the [[incotermsLocation2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCOTERMS_LOCATION_2 = _fieldBuilder.buildEdmTypeField('IncotermsLocation2', 'Edm.String', false);
  /**
   * Static representation of the [[custSettlmtCostCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_SETTLMT_COST_CENTER = _fieldBuilder.buildEdmTypeField('CustSettlmtCostCenter', 'Edm.String', false);
  /**
   * Static representation of the [[custSettlmtProfitCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_SETTLMT_PROFIT_CENTER = _fieldBuilder.buildEdmTypeField('CustSettlmtProfitCenter', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtPrecdgDoc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_PRECDG_DOC = _fieldBuilder.buildEdmTypeField('SettlmtPrecdgDoc', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtPrecdgDocItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_PRECDG_DOC_ITEM = _fieldBuilder.buildEdmTypeField('SettlmtPrecdgDocItem', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtPrecdgDocCat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_PRECDG_DOC_CAT = _fieldBuilder.buildEdmTypeField('SettlmtPrecdgDocCat', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtDocItemCat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_DOC_ITEM_CAT = _fieldBuilder.buildEdmTypeField('SettlmtDocItemCat', 'Edm.String', false);
  /**
   * Static representation of the [[supplierSettlementOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_SETTLEMENT_ORDER = _fieldBuilder.buildEdmTypeField('SupplierSettlementOrder', 'Edm.String', false);
  /**
   * Static representation of the [[itemSettlmtRelevance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_SETTLMT_RELEVANCE = _fieldBuilder.buildEdmTypeField('ItemSettlmtRelevance', 'Edm.String', false);
  /**
   * Static representation of the [[settlementFiscalYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLEMENT_FISCAL_YEAR = _fieldBuilder.buildEdmTypeField('SettlementFiscalYear', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtRefDoc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_REF_DOC = _fieldBuilder.buildEdmTypeField('SettlmtRefDoc', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtRefDocCompanyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_REF_DOC_COMPANY_CODE = _fieldBuilder.buildEdmTypeField('SettlmtRefDocCompanyCode', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtRefDocItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_REF_DOC_ITEM = _fieldBuilder.buildEdmTypeField('SettlmtRefDocItem', 'Edm.String', false);
  /**
   * Static representation of the [[settlmtRefDocCat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_REF_DOC_CAT = _fieldBuilder.buildEdmTypeField('SettlmtRefDocCat', 'Edm.String', false);
  /**
   * Static representation of the [[supplierSubrange]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER_SUBRANGE = _fieldBuilder.buildEdmTypeField('SupplierSubrange', 'Edm.String', false);
  /**
   * Static representation of the [[intercompanyTaxCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERCOMPANY_TAX_COUNTRY = _fieldBuilder.buildEdmTypeField('IntercompanyTaxCountry', 'Edm.String', false);
  /**
   * Static representation of the [[taxCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_COUNTRY = _fieldBuilder.buildEdmTypeField('TaxCountry', 'Edm.String', false);
  /**
   * Static representation of the [[priorSupplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIOR_SUPPLIER = _fieldBuilder.buildEdmTypeField('PriorSupplier', 'Edm.String', false);
  /**
   * Static representation of the one-to-one navigation property [[settlmtDoc_1]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SETTLMT_DOC_1: OneToOneLink<SetlDocItm, SetlDoc> = new OneToOneLink('_SettlmtDoc', SetlDocItm, SetlDoc);
  /**
   * All fields of the SetlDocItm entity.
   */
  export const _allFields: Array<EdmTypeField<SetlDocItm, 'Edm.String', false, true> | OrderableEdmTypeField<SetlDocItm, 'Edm.Date', true, true> | OrderableEdmTypeField<SetlDocItm, 'Edm.Decimal', false, true> | EdmTypeField<SetlDocItm, 'Edm.Boolean', false, true> | OneToOneLink<SetlDocItm, SetlDoc>> = [
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
  export const ALL_FIELDS: AllFields<SetlDocItm> = new AllFields('*', SetlDocItm);
  /**
   * All key fields of the SetlDocItm entity.
   */
  export const _keyFields: Array<Field<SetlDocItm, boolean, boolean>> = [SetlDocItm.SETTLMT_DOC, SetlDocItm.SETTLMT_DOC_ITEM];
  /**
   * Mapping of all key field names to the respective static field property SetlDocItm.
   */
  export const _keys: { [keys: string]: Field<SetlDocItm, boolean, boolean> } = SetlDocItm._keyFields.reduce((acc: { [keys: string]: Field<SetlDocItm, boolean, boolean> }, field: Field<SetlDocItm, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
