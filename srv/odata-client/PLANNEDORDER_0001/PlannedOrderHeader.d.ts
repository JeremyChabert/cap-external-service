import { PlannedOrderHeaderRequestBuilder } from './PlannedOrderHeaderRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { Sap_Message } from './Sap_Message';
import { AllFields, CollectionField, CustomFieldV4, EdmTypeField, EntityBuilderType, EntityV4, Field, OneToManyLink, OrderableEdmTypeField, Time } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PlannedOrderHeader" of service "com.sap.gateway.srvd_a2x.api_plannedorder.v0001".
 */
export declare class PlannedOrderHeader extends EntityV4 implements PlannedOrderHeaderType {
    /**
     * Technical entity name for PlannedOrderHeader.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Planned Order.
     * Maximum length: 10.
     */
    plannedOrder: string;
    /**
     * Planned Order Type.
     * Maximum length: 4.
     */
    plannedOrderType: string;
    /**
     * Planned Order Profile.
     * Maximum length: 4.
     */
    plannedOrderProfile: string;
    /**
     * Material.
     * Maximum length: 18.
     */
    material: string;
    /**
     * Material Name.
     * Maximum length: 40.
     */
    materialName: string;
    /**
     * Production Plant.
     * Maximum length: 4.
     */
    productionPlant: string;
    /**
     * Mrp Plant.
     * Maximum length: 4.
     */
    mrpPlant: string;
    /**
     * Mrp Area.
     * Maximum length: 10.
     */
    mrpArea: string;
    /**
     * Production Version.
     * Maximum length: 4.
     */
    productionVersion: string;
    /**
     * Material Procurement Category.
     * Maximum length: 1.
     */
    materialProcurementCategory: string;
    /**
     * Material Procurement Type.
     * Maximum length: 1.
     */
    materialProcurementType: string;
    /**
     * Storage Location.
     * Maximum length: 4.
     */
    storageLocation: string;
    /**
     * Base Unit.
     * Maximum length: 3.
     */
    baseUnit: string;
    /**
     * Total Quantity.
     */
    totalQuantity: BigNumber;
    /**
     * Plnd Order Planned Scrap Qty.
     */
    plndOrderPlannedScrapQty: BigNumber;
    /**
     * Goods Receipt Qty.
     */
    goodsReceiptQty: BigNumber;
    /**
     * Issued Quantity.
     */
    issuedQuantity: BigNumber;
    /**
     * Plnd Order Planned Start Date.
     * @nullable
     */
    plndOrderPlannedStartDate?: Moment;
    /**
     * Plnd Order Planned Start Time.
     */
    plndOrderPlannedStartTime: Time;
    /**
     * Plnd Order Planned End Date.
     * @nullable
     */
    plndOrderPlannedEndDate?: Moment;
    /**
     * Plnd Order Planned End Time.
     */
    plndOrderPlannedEndTime: Time;
    /**
     * Planned Order Opening Date.
     * @nullable
     */
    plannedOrderOpeningDate?: Moment;
    /**
     * Planned Order Last Change Date Time.
     * @nullable
     */
    plannedOrderLastChangeDateTime?: Moment;
    /**
     * Production Start Date.
     * @nullable
     */
    productionStartDate?: Moment;
    /**
     * Production End Date.
     * @nullable
     */
    productionEndDate?: Moment;
    /**
     * Sales Order.
     * Maximum length: 10.
     */
    salesOrder: string;
    /**
     * Sales Order Item.
     * Maximum length: 6.
     */
    salesOrderItem: string;
    /**
     * Customer.
     * Maximum length: 10.
     */
    customer: string;
    /**
     * Wbs Element Internal Id.
     * Maximum length: 8.
     */
    wbsElementInternalId: string;
    /**
     * Wbs Element External Id.
     * Maximum length: 24.
     */
    wbsElementExternalId: string;
    /**
     * Wbs Description.
     * Maximum length: 40.
     */
    wbsDescription: string;
    /**
     * Account Assignment Category.
     * Maximum length: 1.
     */
    accountAssignmentCategory: string;
    /**
     * Reservation.
     * Maximum length: 10.
     */
    reservation: string;
    /**
     * Planned Order Long Text.
     * Maximum length: 255.
     */
    plannedOrderLongText: string;
    /**
     * Mrp Controller.
     * Maximum length: 3.
     */
    mrpController: string;
    /**
     * Production Supervisor.
     * Maximum length: 3.
     */
    productionSupervisor: string;
    /**
     * Purchasing Group.
     * Maximum length: 3.
     */
    purchasingGroup: string;
    /**
     * Purchasing Organization.
     * Maximum length: 4.
     */
    purchasingOrganization: string;
    /**
     * Fixed Supplier.
     * Maximum length: 10.
     */
    fixedSupplier: string;
    /**
     * Purchasing Document.
     * Maximum length: 10.
     */
    purchasingDocument: string;
    /**
     * Purchasing Document Item.
     * Maximum length: 5.
     */
    purchasingDocumentItem: string;
    /**
     * Quota Arrangement.
     * Maximum length: 10.
     */
    quotaArrangement: string;
    /**
     * Quota Arrangement Item.
     * Maximum length: 3.
     */
    quotaArrangementItem: string;
    /**
     * Supplier Name.
     * Maximum length: 80.
     */
    supplierName: string;
    /**
     * Planned Order Is Firm.
     */
    plannedOrderIsFirm: boolean;
    /**
     * Planned Order Is Convertible.
     */
    plannedOrderIsConvertible: boolean;
    /**
     * Planned Order Bom Is Fixed.
     */
    plannedOrderBomIsFixed: boolean;
    /**
     * Planned Order Capacity Is Dsptchd.
     */
    plannedOrderCapacityIsDsptchd: boolean;
    /**
     * Capacity Requirement.
     * Maximum length: 12.
     */
    capacityRequirement: string;
    /**
     * Bill Of Operations Variant.
     * Maximum length: 2.
     */
    billOfOperationsVariant: string;
    /**
     * Capacity Requirement Origin.
     * Maximum length: 1.
     */
    capacityRequirementOrigin: string;
    /**
     * Bill Of Operations Type.
     * Maximum length: 1.
     */
    billOfOperationsType: string;
    /**
     * Bill Of Operations Group.
     * Maximum length: 8.
     */
    billOfOperationsGroup: string;
    /**
     * Last Scheduled Date.
     * @nullable
     */
    lastScheduledDate?: Moment;
    /**
     * Scheduled Basic End Date.
     * @nullable
     */
    scheduledBasicEndDate?: Moment;
    /**
     * Scheduled Basic End Time.
     */
    scheduledBasicEndTime: Time;
    /**
     * Scheduled Basic Start Date.
     * @nullable
     */
    scheduledBasicStartDate?: Moment;
    /**
     * Scheduled Basic Start Time.
     */
    scheduledBasicStartTime: Time;
    /**
     * Scheduling Type.
     * Maximum length: 1.
     */
    schedulingType: string;
    /**
     * Sap Messages.
     */
    sapMessages: Sap_Message[];
    /**
     * One-to-many navigation property to the [[PlannedOrderCapacity]] entity.
     */
    plannedOrderCapacity: PlannedOrderCapacity[];
    /**
     * One-to-many navigation property to the [[PlannedOrderComponent]] entity.
     */
    plannedOrderComponent: PlannedOrderComponent[];
    /**
     * Returns an entity builder to construct instances of `PlannedOrderHeader`.
     * @returns A builder that constructs instances of entity type `PlannedOrderHeader`.
     */
    static builder(): EntityBuilderType<PlannedOrderHeader, PlannedOrderHeaderType>;
    /**
     * Returns a request builder to construct requests for operations on the `PlannedOrderHeader` entity type.
     * @returns A `PlannedOrderHeader` request builder.
     */
    static requestBuilder(): PlannedOrderHeaderRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PlannedOrderHeader`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PlannedOrderHeader`.
     */
    static customField(fieldName: string): CustomFieldV4<PlannedOrderHeader>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PlannedOrderCapacity, PlannedOrderCapacityType } from './PlannedOrderCapacity';
import { PlannedOrderComponent, PlannedOrderComponentType } from './PlannedOrderComponent';
export interface PlannedOrderHeaderType {
    plannedOrder: string;
    plannedOrderType: string;
    plannedOrderProfile: string;
    material: string;
    materialName: string;
    productionPlant: string;
    mrpPlant: string;
    mrpArea: string;
    productionVersion: string;
    materialProcurementCategory: string;
    materialProcurementType: string;
    storageLocation: string;
    baseUnit: string;
    totalQuantity: BigNumber;
    plndOrderPlannedScrapQty: BigNumber;
    goodsReceiptQty: BigNumber;
    issuedQuantity: BigNumber;
    plndOrderPlannedStartDate?: Moment | null;
    plndOrderPlannedStartTime: Time;
    plndOrderPlannedEndDate?: Moment | null;
    plndOrderPlannedEndTime: Time;
    plannedOrderOpeningDate?: Moment | null;
    plannedOrderLastChangeDateTime?: Moment | null;
    productionStartDate?: Moment | null;
    productionEndDate?: Moment | null;
    salesOrder: string;
    salesOrderItem: string;
    customer: string;
    wbsElementInternalId: string;
    wbsElementExternalId: string;
    wbsDescription: string;
    accountAssignmentCategory: string;
    reservation: string;
    plannedOrderLongText: string;
    mrpController: string;
    productionSupervisor: string;
    purchasingGroup: string;
    purchasingOrganization: string;
    fixedSupplier: string;
    purchasingDocument: string;
    purchasingDocumentItem: string;
    quotaArrangement: string;
    quotaArrangementItem: string;
    supplierName: string;
    plannedOrderIsFirm: boolean;
    plannedOrderIsConvertible: boolean;
    plannedOrderBomIsFixed: boolean;
    plannedOrderCapacityIsDsptchd: boolean;
    capacityRequirement: string;
    billOfOperationsVariant: string;
    capacityRequirementOrigin: string;
    billOfOperationsType: string;
    billOfOperationsGroup: string;
    lastScheduledDate?: Moment | null;
    scheduledBasicEndDate?: Moment | null;
    scheduledBasicEndTime: Time;
    scheduledBasicStartDate?: Moment | null;
    scheduledBasicStartTime: Time;
    schedulingType: string;
    sapMessages: Sap_Message[];
    plannedOrderCapacity: PlannedOrderCapacityType[];
    plannedOrderComponent: PlannedOrderComponentType[];
}
export declare namespace PlannedOrderHeader {
    /**
     * Static representation of the [[plannedOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_ORDER: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[plannedOrderType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_ORDER_TYPE: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[plannedOrderProfile]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_ORDER_PROFILE: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[material]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATERIAL: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[materialName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATERIAL_NAME: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[productionPlant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_PLANT: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[mrpPlant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MRP_PLANT: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[mrpArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MRP_AREA: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[productionVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_VERSION: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[materialProcurementCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATERIAL_PROCUREMENT_CATEGORY: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[materialProcurementType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATERIAL_PROCUREMENT_TYPE: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[storageLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STORAGE_LOCATION: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[baseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_UNIT: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[totalQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_QUANTITY: OrderableEdmTypeField<PlannedOrderHeader, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[plndOrderPlannedScrapQty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLND_ORDER_PLANNED_SCRAP_QTY: OrderableEdmTypeField<PlannedOrderHeader, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[goodsReceiptQty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOODS_RECEIPT_QTY: OrderableEdmTypeField<PlannedOrderHeader, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[issuedQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ISSUED_QUANTITY: OrderableEdmTypeField<PlannedOrderHeader, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[plndOrderPlannedStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLND_ORDER_PLANNED_START_DATE: OrderableEdmTypeField<PlannedOrderHeader, "Edm.Date", true, true>;
    /**
     * Static representation of the [[plndOrderPlannedStartTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLND_ORDER_PLANNED_START_TIME: OrderableEdmTypeField<PlannedOrderHeader, "Edm.TimeOfDay", false, true>;
    /**
     * Static representation of the [[plndOrderPlannedEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLND_ORDER_PLANNED_END_DATE: OrderableEdmTypeField<PlannedOrderHeader, "Edm.Date", true, true>;
    /**
     * Static representation of the [[plndOrderPlannedEndTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLND_ORDER_PLANNED_END_TIME: OrderableEdmTypeField<PlannedOrderHeader, "Edm.TimeOfDay", false, true>;
    /**
     * Static representation of the [[plannedOrderOpeningDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_ORDER_OPENING_DATE: OrderableEdmTypeField<PlannedOrderHeader, "Edm.Date", true, true>;
    /**
     * Static representation of the [[plannedOrderLastChangeDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_ORDER_LAST_CHANGE_DATE_TIME: OrderableEdmTypeField<PlannedOrderHeader, "Edm.DateTimeOffset", true, true>;
    /**
     * Static representation of the [[productionStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_START_DATE: OrderableEdmTypeField<PlannedOrderHeader, "Edm.Date", true, true>;
    /**
     * Static representation of the [[productionEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_END_DATE: OrderableEdmTypeField<PlannedOrderHeader, "Edm.Date", true, true>;
    /**
     * Static representation of the [[salesOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORDER: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[salesOrderItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_ORDER_ITEM: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[customer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMER: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[wbsElementInternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WBS_ELEMENT_INTERNAL_ID: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[wbsElementExternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WBS_ELEMENT_EXTERNAL_ID: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[wbsDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WBS_DESCRIPTION: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[accountAssignmentCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ACCOUNT_ASSIGNMENT_CATEGORY: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[reservation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESERVATION: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[plannedOrderLongText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_ORDER_LONG_TEXT: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[mrpController]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MRP_CONTROLLER: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[productionSupervisor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCTION_SUPERVISOR: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[purchasingGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASING_GROUP: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[purchasingOrganization]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASING_ORGANIZATION: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[fixedSupplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIXED_SUPPLIER: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[purchasingDocument]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASING_DOCUMENT: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[purchasingDocumentItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASING_DOCUMENT_ITEM: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[quotaArrangement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUOTA_ARRANGEMENT: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[quotaArrangementItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUOTA_ARRANGEMENT_ITEM: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[supplierName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER_NAME: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[plannedOrderIsFirm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_ORDER_IS_FIRM: EdmTypeField<PlannedOrderHeader, "Edm.Boolean", false, true>;
    /**
     * Static representation of the [[plannedOrderIsConvertible]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_ORDER_IS_CONVERTIBLE: EdmTypeField<PlannedOrderHeader, "Edm.Boolean", false, true>;
    /**
     * Static representation of the [[plannedOrderBomIsFixed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_ORDER_BOM_IS_FIXED: EdmTypeField<PlannedOrderHeader, "Edm.Boolean", false, true>;
    /**
     * Static representation of the [[plannedOrderCapacityIsDsptchd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_ORDER_CAPACITY_IS_DSPTCHD: EdmTypeField<PlannedOrderHeader, "Edm.Boolean", false, true>;
    /**
     * Static representation of the [[capacityRequirement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAPACITY_REQUIREMENT: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[billOfOperationsVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_OPERATIONS_VARIANT: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[capacityRequirementOrigin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAPACITY_REQUIREMENT_ORIGIN: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[billOfOperationsType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_OPERATIONS_TYPE: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[billOfOperationsGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_OPERATIONS_GROUP: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[lastScheduledDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_SCHEDULED_DATE: OrderableEdmTypeField<PlannedOrderHeader, "Edm.Date", true, true>;
    /**
     * Static representation of the [[scheduledBasicEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCHEDULED_BASIC_END_DATE: OrderableEdmTypeField<PlannedOrderHeader, "Edm.Date", true, true>;
    /**
     * Static representation of the [[scheduledBasicEndTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCHEDULED_BASIC_END_TIME: OrderableEdmTypeField<PlannedOrderHeader, "Edm.TimeOfDay", false, true>;
    /**
     * Static representation of the [[scheduledBasicStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCHEDULED_BASIC_START_DATE: OrderableEdmTypeField<PlannedOrderHeader, "Edm.Date", true, true>;
    /**
     * Static representation of the [[scheduledBasicStartTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCHEDULED_BASIC_START_TIME: OrderableEdmTypeField<PlannedOrderHeader, "Edm.TimeOfDay", false, true>;
    /**
     * Static representation of the [[schedulingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCHEDULING_TYPE: EdmTypeField<PlannedOrderHeader, "Edm.String", false, true>;
    /**
     * Static representation of the [[sapMessages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SAP_MESSAGES: CollectionField<PlannedOrderHeader, Sap_Message, false, true>;
    /**
     * Static representation of the one-to-many navigation property [[plannedOrderCapacity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_ORDER_CAPACITY: OneToManyLink<PlannedOrderHeader, PlannedOrderCapacity>;
    /**
     * Static representation of the one-to-many navigation property [[plannedOrderComponent]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_ORDER_COMPONENT: OneToManyLink<PlannedOrderHeader, PlannedOrderComponent>;
    /**
     * All fields of the PlannedOrderHeader entity.
     */
    const _allFields: Array<EdmTypeField<PlannedOrderHeader, 'Edm.String', false, true> | OrderableEdmTypeField<PlannedOrderHeader, 'Edm.Decimal', false, true> | OrderableEdmTypeField<PlannedOrderHeader, 'Edm.Date', true, true> | OrderableEdmTypeField<PlannedOrderHeader, 'Edm.TimeOfDay', false, true> | OrderableEdmTypeField<PlannedOrderHeader, 'Edm.DateTimeOffset', true, true> | EdmTypeField<PlannedOrderHeader, 'Edm.Boolean', false, true> | CollectionField<PlannedOrderHeader, Sap_Message, false, true> | OneToManyLink<PlannedOrderHeader, PlannedOrderCapacity> | OneToManyLink<PlannedOrderHeader, PlannedOrderComponent>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PlannedOrderHeader>;
    /**
     * All key fields of the PlannedOrderHeader entity.
     */
    const _keyFields: Array<Field<PlannedOrderHeader, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property PlannedOrderHeader.
     */
    const _keys: {
        [keys: string]: Field<PlannedOrderHeader, boolean, boolean>;
    };
}
//# sourceMappingURL=PlannedOrderHeader.d.ts.map