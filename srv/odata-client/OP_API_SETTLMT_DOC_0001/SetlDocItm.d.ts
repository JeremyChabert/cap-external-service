import { SetlDocItmRequestBuilder } from './SetlDocItmRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, CustomFieldV4, EdmTypeField, EntityBuilderType, EntityV4, Field, OneToOneLink, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SetlDocItm" of service "com.sap.gateway.srvd_a2x.api_settlmt_doc.v0001".
 */
export declare class SetlDocItm extends EntityV4 implements SetlDocItmType {
    /**
     * Technical entity name for SetlDocItm.
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
     * Settlmt Doc Item.
     * Maximum length: 6.
     */
    settlmtDocItem: string;
    /**
     * Settlmt Doc Currency.
     * Maximum length: 5.
     */
    settlmtDocCurrency: string;
    /**
     * Product.
     * Maximum length: 40.
     */
    product: string;
    /**
     * Product Group.
     * Maximum length: 9.
     */
    productGroup: string;
    /**
     * Plant.
     * Maximum length: 4.
     */
    plant: string;
    /**
     * Supplier Tax Code.
     * Maximum length: 2.
     */
    supplierTaxCode: string;
    /**
     * Customer Tax Code.
     * Maximum length: 2.
     */
    customerTaxCode: string;
    /**
     * Pricing Date.
     * @nullable
     */
    pricingDate?: Moment;
    /**
     * Settlmt Quantity.
     */
    settlmtQuantity: BigNumber;
    /**
     * Settlmt Quantity Unit.
     * Maximum length: 3.
     */
    settlmtQuantityUnit: string;
    /**
     * Settlmt Quantity Unit Iso Code.
     * Maximum length: 3.
     */
    settlmtQuantityUnitIsoCode: string;
    /**
     * Net Price Amount.
     */
    netPriceAmount: BigNumber;
    /**
     * Net Price Quantity.
     */
    netPriceQuantity: BigNumber;
    /**
     * Net Price Quantity Unit.
     * Maximum length: 3.
     */
    netPriceQuantityUnit: string;
    /**
     * Settlmt To Base Quantity Nmrtr.
     */
    settlmtToBaseQuantityNmrtr: BigNumber;
    /**
     * Settlmt To Base Quantity Dnmntr.
     */
    settlmtToBaseQuantityDnmntr: BigNumber;
    /**
     * Base Unit.
     * Maximum length: 3.
     */
    baseUnit: string;
    /**
     * Item Net Weight.
     */
    itemNetWeight: BigNumber;
    /**
     * Item Gross Weight.
     */
    itemGrossWeight: BigNumber;
    /**
     * Item Weight Unit.
     * Maximum length: 3.
     */
    itemWeightUnit: string;
    /**
     * Item Weight Unit Iso Code.
     * Maximum length: 3.
     */
    itemWeightUnitIsoCode: string;
    /**
     * Item Volume.
     */
    itemVolume: BigNumber;
    /**
     * Item Volume Unit.
     * Maximum length: 3.
     */
    itemVolumeUnit: string;
    /**
     * Item Volume Unit Iso Code.
     * Maximum length: 3.
     */
    itemVolumeUnitIsoCode: string;
    /**
     * Supplier Item Gross Amount.
     */
    supplierItemGrossAmount: BigNumber;
    /**
     * Supplier Item Net Amount.
     */
    supplierItemNetAmount: BigNumber;
    /**
     * Supplier Item Tax Amount.
     */
    supplierItemTaxAmount: BigNumber;
    /**
     * Customer Item Gross Amount.
     */
    customerItemGrossAmount: BigNumber;
    /**
     * Customer Item Net Amount.
     */
    customerItemNetAmount: BigNumber;
    /**
     * Customer Item Tax Amount.
     */
    customerItemTaxAmount: BigNumber;
    /**
     * Cash Discount Is Deductible.
     */
    cashDiscountIsDeductible: boolean;
    /**
     * Settlmt Source Doc.
     * Maximum length: 10.
     */
    settlmtSourceDoc: string;
    /**
     * Settlmt Source Doc Item.
     * Maximum length: 6.
     */
    settlmtSourceDocItem: string;
    /**
     * Settlmt Source Doc Cat.
     * Maximum length: 2.
     */
    settlmtSourceDocCat: string;
    /**
     * Settlmt Item Activity Reason.
     * Maximum length: 3.
     */
    settlmtItemActivityReason: string;
    /**
     * Settlmt Doc Item Text.
     * Maximum length: 40.
     */
    settlmtDocItemText: string;
    /**
     * Supplier Product Id.
     * Maximum length: 35.
     */
    supplierProductId: string;
    /**
     * Tax Jurisdiction.
     * Maximum length: 15.
     */
    taxJurisdiction: string;
    /**
     * Product Purchase Points Qty Unit.
     * Maximum length: 3.
     */
    productPurchasePointsQtyUnit: string;
    /**
     * Prod Pur Points Qty Unit Iso Code.
     * Maximum length: 3.
     */
    prodPurPointsQtyUnitIsoCode: string;
    /**
     * Product Purchase Points Qty.
     */
    productPurchasePointsQty: BigNumber;
    /**
     * Suplr Settlmt Business Area.
     * Maximum length: 4.
     */
    suplrSettlmtBusinessArea: string;
    /**
     * Cust Settlmt Business Area.
     * Maximum length: 4.
     */
    custSettlmtBusinessArea: string;
    /**
     * Suplr Settlmt Cost Center.
     * Maximum length: 10.
     */
    suplrSettlmtCostCenter: string;
    /**
     * Suplr Settlmt Profit Center.
     * Maximum length: 10.
     */
    suplrSettlmtProfitCenter: string;
    /**
     * Incoterms Version.
     * Maximum length: 4.
     */
    incotermsVersion: string;
    /**
     * Incoterms Location 1.
     * Maximum length: 70.
     */
    incotermsLocation1: string;
    /**
     * Incoterms Location 2.
     * Maximum length: 70.
     */
    incotermsLocation2: string;
    /**
     * Cust Settlmt Cost Center.
     * Maximum length: 10.
     */
    custSettlmtCostCenter: string;
    /**
     * Cust Settlmt Profit Center.
     * Maximum length: 10.
     */
    custSettlmtProfitCenter: string;
    /**
     * Settlmt Precdg Doc.
     * Maximum length: 10.
     */
    settlmtPrecdgDoc: string;
    /**
     * Settlmt Precdg Doc Item.
     * Maximum length: 6.
     */
    settlmtPrecdgDocItem: string;
    /**
     * Settlmt Precdg Doc Cat.
     * Maximum length: 2.
     */
    settlmtPrecdgDocCat: string;
    /**
     * Settlmt Doc Item Cat.
     * Maximum length: 1.
     */
    settlmtDocItemCat: string;
    /**
     * Supplier Settlement Order.
     * Maximum length: 12.
     */
    supplierSettlementOrder: string;
    /**
     * Item Settlmt Relevance.
     * Maximum length: 1.
     */
    itemSettlmtRelevance: string;
    /**
     * Settlement Fiscal Year.
     * Maximum length: 4.
     */
    settlementFiscalYear: string;
    /**
     * Settlmt Ref Doc.
     * Maximum length: 20.
     */
    settlmtRefDoc: string;
    /**
     * Settlmt Ref Doc Company Code.
     * Maximum length: 4.
     */
    settlmtRefDocCompanyCode: string;
    /**
     * Settlmt Ref Doc Item.
     * Maximum length: 10.
     */
    settlmtRefDocItem: string;
    /**
     * Settlmt Ref Doc Cat.
     * Maximum length: 2.
     */
    settlmtRefDocCat: string;
    /**
     * Supplier Subrange.
     * Maximum length: 6.
     */
    supplierSubrange: string;
    /**
     * Intercompany Tax Country.
     * Maximum length: 3.
     */
    intercompanyTaxCountry: string;
    /**
     * Tax Country.
     * Maximum length: 3.
     */
    taxCountry: string;
    /**
     * Prior Supplier.
     * Maximum length: 10.
     */
    priorSupplier: string;
    /**
     * One-to-one navigation property to the [[SetlDoc]] entity.
     */
    settlmtDoc_1?: SetlDoc | null;
    /**
     * Returns an entity builder to construct instances of `SetlDocItm`.
     * @returns A builder that constructs instances of entity type `SetlDocItm`.
     */
    static builder(): EntityBuilderType<SetlDocItm, SetlDocItmType>;
    /**
     * Returns a request builder to construct requests for operations on the `SetlDocItm` entity type.
     * @returns A `SetlDocItm` request builder.
     */
    static requestBuilder(): SetlDocItmRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SetlDocItm`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SetlDocItm`.
     */
    static customField(fieldName: string): CustomFieldV4<SetlDocItm>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace SetlDocItm {
    /**
     * Static representation of the [[settlmtDoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_DOC: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtDocItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_DOC_ITEM: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtDocCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_DOC_CURRENCY: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[product]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[productGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_GROUP: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[plant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANT: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[supplierTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_TAX_CODE: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[customerTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_TAX_CODE: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[pricingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICING_DATE: OrderableEdmTypeField<SetlDocItm, "Edm.Date", true, true>;
    /**
     * Static representation of the [[settlmtQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_QUANTITY: OrderableEdmTypeField<SetlDocItm, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[settlmtQuantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_QUANTITY_UNIT: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtQuantityUnitIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_QUANTITY_UNIT_ISO_CODE: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[netPriceAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NET_PRICE_AMOUNT: OrderableEdmTypeField<SetlDocItm, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[netPriceQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NET_PRICE_QUANTITY: OrderableEdmTypeField<SetlDocItm, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[netPriceQuantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NET_PRICE_QUANTITY_UNIT: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtToBaseQuantityNmrtr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_TO_BASE_QUANTITY_NMRTR: OrderableEdmTypeField<SetlDocItm, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[settlmtToBaseQuantityDnmntr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_TO_BASE_QUANTITY_DNMNTR: OrderableEdmTypeField<SetlDocItm, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[baseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_UNIT: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[itemNetWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_NET_WEIGHT: OrderableEdmTypeField<SetlDocItm, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[itemGrossWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_GROSS_WEIGHT: OrderableEdmTypeField<SetlDocItm, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[itemWeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_WEIGHT_UNIT: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[itemWeightUnitIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_WEIGHT_UNIT_ISO_CODE: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[itemVolume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_VOLUME: OrderableEdmTypeField<SetlDocItm, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[itemVolumeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_VOLUME_UNIT: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[itemVolumeUnitIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_VOLUME_UNIT_ISO_CODE: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[supplierItemGrossAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_ITEM_GROSS_AMOUNT: OrderableEdmTypeField<SetlDocItm, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[supplierItemNetAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_ITEM_NET_AMOUNT: OrderableEdmTypeField<SetlDocItm, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[supplierItemTaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_ITEM_TAX_AMOUNT: OrderableEdmTypeField<SetlDocItm, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[customerItemGrossAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ITEM_GROSS_AMOUNT: OrderableEdmTypeField<SetlDocItm, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[customerItemNetAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ITEM_NET_AMOUNT: OrderableEdmTypeField<SetlDocItm, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[customerItemTaxAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER_ITEM_TAX_AMOUNT: OrderableEdmTypeField<SetlDocItm, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[cashDiscountIsDeductible]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CASH_DISCOUNT_IS_DEDUCTIBLE: EdmTypeField<SetlDocItm, "Edm.Boolean", false, true>;
    /**
     * Static representation of the [[settlmtSourceDoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_SOURCE_DOC: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtSourceDocItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_SOURCE_DOC_ITEM: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtSourceDocCat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_SOURCE_DOC_CAT: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtItemActivityReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_ITEM_ACTIVITY_REASON: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtDocItemText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_DOC_ITEM_TEXT: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[supplierProductId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_PRODUCT_ID: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[taxJurisdiction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_JURISDICTION: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[productPurchasePointsQtyUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_PURCHASE_POINTS_QTY_UNIT: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[prodPurPointsQtyUnitIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROD_PUR_POINTS_QTY_UNIT_ISO_CODE: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[productPurchasePointsQty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_PURCHASE_POINTS_QTY: OrderableEdmTypeField<SetlDocItm, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[suplrSettlmtBusinessArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPLR_SETTLMT_BUSINESS_AREA: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[custSettlmtBusinessArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_SETTLMT_BUSINESS_AREA: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[suplrSettlmtCostCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPLR_SETTLMT_COST_CENTER: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[suplrSettlmtProfitCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPLR_SETTLMT_PROFIT_CENTER: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[incotermsVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_VERSION: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[incotermsLocation1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_LOCATION_1: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[incotermsLocation2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCOTERMS_LOCATION_2: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[custSettlmtCostCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_SETTLMT_COST_CENTER: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[custSettlmtProfitCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_SETTLMT_PROFIT_CENTER: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtPrecdgDoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_PRECDG_DOC: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtPrecdgDocItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_PRECDG_DOC_ITEM: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtPrecdgDocCat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_PRECDG_DOC_CAT: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtDocItemCat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_DOC_ITEM_CAT: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[supplierSettlementOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_SETTLEMENT_ORDER: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[itemSettlmtRelevance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_SETTLMT_RELEVANCE: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlementFiscalYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLEMENT_FISCAL_YEAR: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtRefDoc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_REF_DOC: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtRefDocCompanyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_REF_DOC_COMPANY_CODE: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtRefDocItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_REF_DOC_ITEM: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[settlmtRefDocCat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_REF_DOC_CAT: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[supplierSubrange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_SUBRANGE: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[intercompanyTaxCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERCOMPANY_TAX_COUNTRY: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[taxCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_COUNTRY: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the [[priorSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIOR_SUPPLIER: EdmTypeField<SetlDocItm, "Edm.String", false, true>;
    /**
     * Static representation of the one-to-one navigation property [[settlmtDoc_1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SETTLMT_DOC_1: OneToOneLink<SetlDocItm, SetlDoc>;
    /**
     * All fields of the SetlDocItm entity.
     */
    const _allFields: Array<EdmTypeField<SetlDocItm, 'Edm.String', false, true> | OrderableEdmTypeField<SetlDocItm, 'Edm.Date', true, true> | OrderableEdmTypeField<SetlDocItm, 'Edm.Decimal', false, true> | EdmTypeField<SetlDocItm, 'Edm.Boolean', false, true> | OneToOneLink<SetlDocItm, SetlDoc>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SetlDocItm>;
    /**
     * All key fields of the SetlDocItm entity.
     */
    const _keyFields: Array<Field<SetlDocItm, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property SetlDocItm.
     */
    const _keys: {
        [keys: string]: Field<SetlDocItm, boolean, boolean>;
    };
}
//# sourceMappingURL=SetlDocItm.d.ts.map