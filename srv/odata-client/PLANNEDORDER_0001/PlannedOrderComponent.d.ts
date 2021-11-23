import { PlannedOrderComponentRequestBuilder } from './PlannedOrderComponentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, CustomFieldV4, EdmTypeField, EntityBuilderType, EntityV4, Field, OneToOneLink, OrderableEdmTypeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PlannedOrderComponent" of service "com.sap.gateway.srvd_a2x.api_plannedorder.v0001".
 */
export declare class PlannedOrderComponent extends EntityV4 implements PlannedOrderComponentType {
    /**
     * Technical entity name for PlannedOrderComponent.
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
     * Reservation.
     * Maximum length: 10.
     */
    reservation: string;
    /**
     * Reservation Item.
     * Maximum length: 4.
     */
    reservationItem: string;
    /**
     * Bom Item.
     * Maximum length: 8.
     */
    bomItem: string;
    /**
     * Bom Item Description.
     * Maximum length: 40.
     */
    bomItemDescription: string;
    /**
     * Bill Of Material Category.
     * Maximum length: 1.
     */
    billOfMaterialCategory: string;
    /**
     * Bom Item Sorter.
     * Maximum length: 10.
     */
    bomItemSorter: string;
    /**
     * Bill Of Material Item Number.
     * Maximum length: 4.
     */
    billOfMaterialItemNumber: string;
    /**
     * Bill Of Material Internal Id.
     * Maximum length: 8.
     */
    billOfMaterialInternalId: string;
    /**
     * Bill Of Material Variant.
     * Maximum length: 2.
     */
    billOfMaterialVariant: string;
    /**
     * Bom Item Category.
     * Maximum length: 1.
     */
    bomItemCategory: string;
    /**
     * Material.
     * Maximum length: 18.
     */
    material: string;
    /**
     * Matl Comp Requirement Date.
     * @nullable
     */
    matlCompRequirementDate?: Moment;
    /**
     * Goods Movement Entry Qty.
     */
    goodsMovementEntryQty: BigNumber;
    /**
     * Entry Unit.
     * Maximum length: 3.
     */
    entryUnit: string;
    /**
     * Required Quantity.
     */
    requiredQuantity: BigNumber;
    /**
     * Base Unit.
     * Maximum length: 3.
     */
    baseUnit: string;
    /**
     * Withdrawn Quantity.
     */
    withdrawnQuantity: BigNumber;
    /**
     * Debit Credit Code.
     * Maximum length: 1.
     */
    debitCreditCode: string;
    /**
     * Component Scrap In Percent.
     */
    componentScrapInPercent: BigNumber;
    /**
     * Quantity Is Fixed.
     */
    quantityIsFixed: boolean;
    /**
     * Material Component Is Phantom Item.
     */
    materialComponentIsPhantomItem: boolean;
    /**
     * Plant.
     * Maximum length: 4.
     */
    plant: string;
    /**
     * Storage Location.
     * Maximum length: 4.
     */
    storageLocation: string;
    /**
     * Supply Area.
     * Maximum length: 10.
     */
    supplyArea: string;
    /**
     * Mrp Controller.
     * Maximum length: 3.
     */
    mrpController: string;
    /**
     * Order Path Value.
     * Maximum length: 2.
     */
    orderPathValue: string;
    /**
     * Order Level Value.
     * Maximum length: 2.
     */
    orderLevelValue: string;
    /**
     * Assembly.
     * Maximum length: 18.
     */
    assembly: string;
    /**
     * Assembly Order Path Value.
     * Maximum length: 2.
     */
    assemblyOrderPathValue: string;
    /**
     * Assembly Order Level Value.
     * Maximum length: 2.
     */
    assemblyOrderLevelValue: string;
    /**
     * Discontinuation Group.
     * Maximum length: 2.
     */
    discontinuationGroup: string;
    /**
     * Matl Comp Discontinuation Type.
     * Maximum length: 1.
     */
    matlCompDiscontinuationType: string;
    /**
     * Matl Comp Is Follow Up Material.
     */
    matlCompIsFollowUpMaterial: boolean;
    /**
     * Follow Up Group.
     * Maximum length: 2.
     */
    followUpGroup: string;
    /**
     * Follow Up Material.
     * Maximum length: 18.
     */
    followUpMaterial: string;
    /**
     * Follow Up Material Is Not Active.
     */
    followUpMaterialIsNotActive: boolean;
    /**
     * Planned Order Last Change Date Time.
     * @nullable
     */
    plannedOrderLastChangeDateTime?: Moment;
    /**
     * One-to-one navigation property to the [[PlannedOrderHeader]] entity.
     */
    plannedOrder_1?: PlannedOrderHeader | null;
    /**
     * Returns an entity builder to construct instances of `PlannedOrderComponent`.
     * @returns A builder that constructs instances of entity type `PlannedOrderComponent`.
     */
    static builder(): EntityBuilderType<PlannedOrderComponent, PlannedOrderComponentType>;
    /**
     * Returns a request builder to construct requests for operations on the `PlannedOrderComponent` entity type.
     * @returns A `PlannedOrderComponent` request builder.
     */
    static requestBuilder(): PlannedOrderComponentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PlannedOrderComponent`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PlannedOrderComponent`.
     */
    static customField(fieldName: string): CustomFieldV4<PlannedOrderComponent>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PlannedOrderHeader, PlannedOrderHeaderType } from './PlannedOrderHeader';
export interface PlannedOrderComponentType {
    plannedOrder: string;
    reservation: string;
    reservationItem: string;
    bomItem: string;
    bomItemDescription: string;
    billOfMaterialCategory: string;
    bomItemSorter: string;
    billOfMaterialItemNumber: string;
    billOfMaterialInternalId: string;
    billOfMaterialVariant: string;
    bomItemCategory: string;
    material: string;
    matlCompRequirementDate?: Moment | null;
    goodsMovementEntryQty: BigNumber;
    entryUnit: string;
    requiredQuantity: BigNumber;
    baseUnit: string;
    withdrawnQuantity: BigNumber;
    debitCreditCode: string;
    componentScrapInPercent: BigNumber;
    quantityIsFixed: boolean;
    materialComponentIsPhantomItem: boolean;
    plant: string;
    storageLocation: string;
    supplyArea: string;
    mrpController: string;
    orderPathValue: string;
    orderLevelValue: string;
    assembly: string;
    assemblyOrderPathValue: string;
    assemblyOrderLevelValue: string;
    discontinuationGroup: string;
    matlCompDiscontinuationType: string;
    matlCompIsFollowUpMaterial: boolean;
    followUpGroup: string;
    followUpMaterial: string;
    followUpMaterialIsNotActive: boolean;
    plannedOrderLastChangeDateTime?: Moment | null;
    plannedOrder_1?: PlannedOrderHeaderType | null;
}
export declare namespace PlannedOrderComponent {
    /**
     * Static representation of the [[plannedOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_ORDER: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[reservation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESERVATION: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[reservationItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESERVATION_ITEM: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[bomItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOM_ITEM: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[bomItemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOM_ITEM_DESCRIPTION: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[billOfMaterialCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_MATERIAL_CATEGORY: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[bomItemSorter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOM_ITEM_SORTER: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[billOfMaterialItemNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_MATERIAL_ITEM_NUMBER: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[billOfMaterialInternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_MATERIAL_INTERNAL_ID: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[billOfMaterialVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILL_OF_MATERIAL_VARIANT: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[bomItemCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOM_ITEM_CATEGORY: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[material]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATERIAL: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[matlCompRequirementDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATL_COMP_REQUIREMENT_DATE: OrderableEdmTypeField<PlannedOrderComponent, "Edm.Date", true, true>;
    /**
     * Static representation of the [[goodsMovementEntryQty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GOODS_MOVEMENT_ENTRY_QTY: OrderableEdmTypeField<PlannedOrderComponent, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[entryUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ENTRY_UNIT: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[requiredQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REQUIRED_QUANTITY: OrderableEdmTypeField<PlannedOrderComponent, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[baseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BASE_UNIT: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[withdrawnQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHDRAWN_QUANTITY: OrderableEdmTypeField<PlannedOrderComponent, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[debitCreditCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEBIT_CREDIT_CODE: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[componentScrapInPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPONENT_SCRAP_IN_PERCENT: OrderableEdmTypeField<PlannedOrderComponent, "Edm.Decimal", false, true>;
    /**
     * Static representation of the [[quantityIsFixed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_IS_FIXED: EdmTypeField<PlannedOrderComponent, "Edm.Boolean", false, true>;
    /**
     * Static representation of the [[materialComponentIsPhantomItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATERIAL_COMPONENT_IS_PHANTOM_ITEM: EdmTypeField<PlannedOrderComponent, "Edm.Boolean", false, true>;
    /**
     * Static representation of the [[plant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANT: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[storageLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STORAGE_LOCATION: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[supplyArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLY_AREA: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[mrpController]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MRP_CONTROLLER: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[orderPathValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_PATH_VALUE: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[orderLevelValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORDER_LEVEL_VALUE: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[assembly]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSEMBLY: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[assemblyOrderPathValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSEMBLY_ORDER_PATH_VALUE: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[assemblyOrderLevelValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSEMBLY_ORDER_LEVEL_VALUE: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[discontinuationGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISCONTINUATION_GROUP: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[matlCompDiscontinuationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATL_COMP_DISCONTINUATION_TYPE: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[matlCompIsFollowUpMaterial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATL_COMP_IS_FOLLOW_UP_MATERIAL: EdmTypeField<PlannedOrderComponent, "Edm.Boolean", false, true>;
    /**
     * Static representation of the [[followUpGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLLOW_UP_GROUP: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[followUpMaterial]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLLOW_UP_MATERIAL: EdmTypeField<PlannedOrderComponent, "Edm.String", false, true>;
    /**
     * Static representation of the [[followUpMaterialIsNotActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOLLOW_UP_MATERIAL_IS_NOT_ACTIVE: EdmTypeField<PlannedOrderComponent, "Edm.Boolean", false, true>;
    /**
     * Static representation of the [[plannedOrderLastChangeDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_ORDER_LAST_CHANGE_DATE_TIME: OrderableEdmTypeField<PlannedOrderComponent, "Edm.DateTimeOffset", true, true>;
    /**
     * Static representation of the one-to-one navigation property [[plannedOrder_1]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_ORDER_1: OneToOneLink<PlannedOrderComponent, PlannedOrderHeader>;
    /**
     * All fields of the PlannedOrderComponent entity.
     */
    const _allFields: Array<EdmTypeField<PlannedOrderComponent, 'Edm.String', false, true> | OrderableEdmTypeField<PlannedOrderComponent, 'Edm.Date', true, true> | OrderableEdmTypeField<PlannedOrderComponent, 'Edm.Decimal', false, true> | EdmTypeField<PlannedOrderComponent, 'Edm.Boolean', false, true> | OrderableEdmTypeField<PlannedOrderComponent, 'Edm.DateTimeOffset', true, true> | OneToOneLink<PlannedOrderComponent, PlannedOrderHeader>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PlannedOrderComponent>;
    /**
     * All key fields of the PlannedOrderComponent entity.
     */
    const _keyFields: Array<Field<PlannedOrderComponent, boolean, boolean>>;
    /**
     * Mapping of all key field names to the respective static field property PlannedOrderComponent.
     */
    const _keys: {
        [keys: string]: Field<PlannedOrderComponent, boolean, boolean>;
    };
}
//# sourceMappingURL=PlannedOrderComponent.d.ts.map