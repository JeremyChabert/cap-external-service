/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PlannedOrderComponentRequestBuilder } from './PlannedOrderComponentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, Constructable, CustomFieldV4, EdmTypeField, EntityBuilderType, EntityV4, Field, FieldBuilder, OneToOneLink, OrderableEdmTypeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PlannedOrderComponent" of service "com.sap.gateway.srvd_a2x.api_plannedorder.v0001".
 */
export class PlannedOrderComponent extends EntityV4 implements PlannedOrderComponentType {
  /**
   * Technical entity name for PlannedOrderComponent.
   */
  static _entityName = 'PlannedOrderComponent';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v4';
  /**
   * Planned Order.
   * Maximum length: 10.
   */
  plannedOrder!: string;
  /**
   * Reservation.
   * Maximum length: 10.
   */
  reservation!: string;
  /**
   * Reservation Item.
   * Maximum length: 4.
   */
  reservationItem!: string;
  /**
   * Bom Item.
   * Maximum length: 8.
   */
  bomItem!: string;
  /**
   * Bom Item Description.
   * Maximum length: 40.
   */
  bomItemDescription!: string;
  /**
   * Bill Of Material Category.
   * Maximum length: 1.
   */
  billOfMaterialCategory!: string;
  /**
   * Bom Item Sorter.
   * Maximum length: 10.
   */
  bomItemSorter!: string;
  /**
   * Bill Of Material Item Number.
   * Maximum length: 4.
   */
  billOfMaterialItemNumber!: string;
  /**
   * Bill Of Material Internal Id.
   * Maximum length: 8.
   */
  billOfMaterialInternalId!: string;
  /**
   * Bill Of Material Variant.
   * Maximum length: 2.
   */
  billOfMaterialVariant!: string;
  /**
   * Bom Item Category.
   * Maximum length: 1.
   */
  bomItemCategory!: string;
  /**
   * Material.
   * Maximum length: 18.
   */
  material!: string;
  /**
   * Matl Comp Requirement Date.
   * @nullable
   */
  matlCompRequirementDate?: Moment;
  /**
   * Goods Movement Entry Qty.
   */
  goodsMovementEntryQty!: BigNumber;
  /**
   * Entry Unit.
   * Maximum length: 3.
   */
  entryUnit!: string;
  /**
   * Required Quantity.
   */
  requiredQuantity!: BigNumber;
  /**
   * Base Unit.
   * Maximum length: 3.
   */
  baseUnit!: string;
  /**
   * Withdrawn Quantity.
   */
  withdrawnQuantity!: BigNumber;
  /**
   * Debit Credit Code.
   * Maximum length: 1.
   */
  debitCreditCode!: string;
  /**
   * Component Scrap In Percent.
   */
  componentScrapInPercent!: BigNumber;
  /**
   * Quantity Is Fixed.
   */
  quantityIsFixed!: boolean;
  /**
   * Material Component Is Phantom Item.
   */
  materialComponentIsPhantomItem!: boolean;
  /**
   * Plant.
   * Maximum length: 4.
   */
  plant!: string;
  /**
   * Storage Location.
   * Maximum length: 4.
   */
  storageLocation!: string;
  /**
   * Supply Area.
   * Maximum length: 10.
   */
  supplyArea!: string;
  /**
   * Mrp Controller.
   * Maximum length: 3.
   */
  mrpController!: string;
  /**
   * Order Path Value.
   * Maximum length: 2.
   */
  orderPathValue!: string;
  /**
   * Order Level Value.
   * Maximum length: 2.
   */
  orderLevelValue!: string;
  /**
   * Assembly.
   * Maximum length: 18.
   */
  assembly!: string;
  /**
   * Assembly Order Path Value.
   * Maximum length: 2.
   */
  assemblyOrderPathValue!: string;
  /**
   * Assembly Order Level Value.
   * Maximum length: 2.
   */
  assemblyOrderLevelValue!: string;
  /**
   * Discontinuation Group.
   * Maximum length: 2.
   */
  discontinuationGroup!: string;
  /**
   * Matl Comp Discontinuation Type.
   * Maximum length: 1.
   */
  matlCompDiscontinuationType!: string;
  /**
   * Matl Comp Is Follow Up Material.
   */
  matlCompIsFollowUpMaterial!: boolean;
  /**
   * Follow Up Group.
   * Maximum length: 2.
   */
  followUpGroup!: string;
  /**
   * Follow Up Material.
   * Maximum length: 18.
   */
  followUpMaterial!: string;
  /**
   * Follow Up Material Is Not Active.
   */
  followUpMaterialIsNotActive!: boolean;
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
  static builder(): EntityBuilderType<PlannedOrderComponent, PlannedOrderComponentType> {
    return EntityV4.entityBuilder(PlannedOrderComponent);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PlannedOrderComponent` entity type.
   * @returns A `PlannedOrderComponent` request builder.
   */
  static requestBuilder(): PlannedOrderComponentRequestBuilder {
    return new PlannedOrderComponentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PlannedOrderComponent`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PlannedOrderComponent`.
   */
  static customField(fieldName: string): CustomFieldV4<PlannedOrderComponent> {
    return EntityV4.customFieldSelector(fieldName, PlannedOrderComponent);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace PlannedOrderComponent {
  const _fieldBuilder: FieldBuilder<Constructable<PlannedOrderComponent>> = new FieldBuilder(PlannedOrderComponent);
  /**
   * Static representation of the [[plannedOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANNED_ORDER = _fieldBuilder.buildEdmTypeField('PlannedOrder', 'Edm.String', false);
  /**
   * Static representation of the [[reservation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESERVATION = _fieldBuilder.buildEdmTypeField('Reservation', 'Edm.String', false);
  /**
   * Static representation of the [[reservationItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESERVATION_ITEM = _fieldBuilder.buildEdmTypeField('ReservationItem', 'Edm.String', false);
  /**
   * Static representation of the [[bomItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOM_ITEM = _fieldBuilder.buildEdmTypeField('BOMItem', 'Edm.String', false);
  /**
   * Static representation of the [[bomItemDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOM_ITEM_DESCRIPTION = _fieldBuilder.buildEdmTypeField('BOMItemDescription', 'Edm.String', false);
  /**
   * Static representation of the [[billOfMaterialCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_MATERIAL_CATEGORY = _fieldBuilder.buildEdmTypeField('BillOfMaterialCategory', 'Edm.String', false);
  /**
   * Static representation of the [[bomItemSorter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOM_ITEM_SORTER = _fieldBuilder.buildEdmTypeField('BOMItemSorter', 'Edm.String', false);
  /**
   * Static representation of the [[billOfMaterialItemNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_MATERIAL_ITEM_NUMBER = _fieldBuilder.buildEdmTypeField('BillOfMaterialItemNumber', 'Edm.String', false);
  /**
   * Static representation of the [[billOfMaterialInternalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_MATERIAL_INTERNAL_ID = _fieldBuilder.buildEdmTypeField('BillOfMaterialInternalID', 'Edm.String', false);
  /**
   * Static representation of the [[billOfMaterialVariant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BILL_OF_MATERIAL_VARIANT = _fieldBuilder.buildEdmTypeField('BillOfMaterialVariant', 'Edm.String', false);
  /**
   * Static representation of the [[bomItemCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BOM_ITEM_CATEGORY = _fieldBuilder.buildEdmTypeField('BOMItemCategory', 'Edm.String', false);
  /**
   * Static representation of the [[material]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATERIAL = _fieldBuilder.buildEdmTypeField('Material', 'Edm.String', false);
  /**
   * Static representation of the [[matlCompRequirementDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATL_COMP_REQUIREMENT_DATE = _fieldBuilder.buildEdmTypeField('MatlCompRequirementDate', 'Edm.Date', true);
  /**
   * Static representation of the [[goodsMovementEntryQty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GOODS_MOVEMENT_ENTRY_QTY = _fieldBuilder.buildEdmTypeField('GoodsMovementEntryQty', 'Edm.Decimal', false);
  /**
   * Static representation of the [[entryUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTRY_UNIT = _fieldBuilder.buildEdmTypeField('EntryUnit', 'Edm.String', false);
  /**
   * Static representation of the [[requiredQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REQUIRED_QUANTITY = _fieldBuilder.buildEdmTypeField('RequiredQuantity', 'Edm.Decimal', false);
  /**
   * Static representation of the [[baseUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_UNIT = _fieldBuilder.buildEdmTypeField('BaseUnit', 'Edm.String', false);
  /**
   * Static representation of the [[withdrawnQuantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WITHDRAWN_QUANTITY = _fieldBuilder.buildEdmTypeField('WithdrawnQuantity', 'Edm.Decimal', false);
  /**
   * Static representation of the [[debitCreditCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEBIT_CREDIT_CODE = _fieldBuilder.buildEdmTypeField('DebitCreditCode', 'Edm.String', false);
  /**
   * Static representation of the [[componentScrapInPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPONENT_SCRAP_IN_PERCENT = _fieldBuilder.buildEdmTypeField('ComponentScrapInPercent', 'Edm.Decimal', false);
  /**
   * Static representation of the [[quantityIsFixed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_IS_FIXED = _fieldBuilder.buildEdmTypeField('QuantityIsFixed', 'Edm.Boolean', false);
  /**
   * Static representation of the [[materialComponentIsPhantomItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATERIAL_COMPONENT_IS_PHANTOM_ITEM = _fieldBuilder.buildEdmTypeField('MaterialComponentIsPhantomItem', 'Edm.Boolean', false);
  /**
   * Static representation of the [[plant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANT = _fieldBuilder.buildEdmTypeField('Plant', 'Edm.String', false);
  /**
   * Static representation of the [[storageLocation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STORAGE_LOCATION = _fieldBuilder.buildEdmTypeField('StorageLocation', 'Edm.String', false);
  /**
   * Static representation of the [[supplyArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLY_AREA = _fieldBuilder.buildEdmTypeField('SupplyArea', 'Edm.String', false);
  /**
   * Static representation of the [[mrpController]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MRP_CONTROLLER = _fieldBuilder.buildEdmTypeField('MRPController', 'Edm.String', false);
  /**
   * Static representation of the [[orderPathValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_PATH_VALUE = _fieldBuilder.buildEdmTypeField('OrderPathValue', 'Edm.String', false);
  /**
   * Static representation of the [[orderLevelValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_LEVEL_VALUE = _fieldBuilder.buildEdmTypeField('OrderLevelValue', 'Edm.String', false);
  /**
   * Static representation of the [[assembly]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSEMBLY = _fieldBuilder.buildEdmTypeField('Assembly', 'Edm.String', false);
  /**
   * Static representation of the [[assemblyOrderPathValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSEMBLY_ORDER_PATH_VALUE = _fieldBuilder.buildEdmTypeField('AssemblyOrderPathValue', 'Edm.String', false);
  /**
   * Static representation of the [[assemblyOrderLevelValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSEMBLY_ORDER_LEVEL_VALUE = _fieldBuilder.buildEdmTypeField('AssemblyOrderLevelValue', 'Edm.String', false);
  /**
   * Static representation of the [[discontinuationGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCONTINUATION_GROUP = _fieldBuilder.buildEdmTypeField('DiscontinuationGroup', 'Edm.String', false);
  /**
   * Static representation of the [[matlCompDiscontinuationType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATL_COMP_DISCONTINUATION_TYPE = _fieldBuilder.buildEdmTypeField('MatlCompDiscontinuationType', 'Edm.String', false);
  /**
   * Static representation of the [[matlCompIsFollowUpMaterial]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATL_COMP_IS_FOLLOW_UP_MATERIAL = _fieldBuilder.buildEdmTypeField('MatlCompIsFollowUpMaterial', 'Edm.Boolean', false);
  /**
   * Static representation of the [[followUpGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLLOW_UP_GROUP = _fieldBuilder.buildEdmTypeField('FollowUpGroup', 'Edm.String', false);
  /**
   * Static representation of the [[followUpMaterial]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLLOW_UP_MATERIAL = _fieldBuilder.buildEdmTypeField('FollowUpMaterial', 'Edm.String', false);
  /**
   * Static representation of the [[followUpMaterialIsNotActive]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FOLLOW_UP_MATERIAL_IS_NOT_ACTIVE = _fieldBuilder.buildEdmTypeField('FollowUpMaterialIsNotActive', 'Edm.Boolean', false);
  /**
   * Static representation of the [[plannedOrderLastChangeDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANNED_ORDER_LAST_CHANGE_DATE_TIME = _fieldBuilder.buildEdmTypeField('PlannedOrderLastChangeDateTime', 'Edm.DateTimeOffset', true);
  /**
   * Static representation of the one-to-one navigation property [[plannedOrder_1]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANNED_ORDER_1: OneToOneLink<PlannedOrderComponent, PlannedOrderHeader> = new OneToOneLink('_PlannedOrder', PlannedOrderComponent, PlannedOrderHeader);
  /**
   * All fields of the PlannedOrderComponent entity.
   */
  export const _allFields: Array<EdmTypeField<PlannedOrderComponent, 'Edm.String', false, true> | OrderableEdmTypeField<PlannedOrderComponent, 'Edm.Date', true, true> | OrderableEdmTypeField<PlannedOrderComponent, 'Edm.Decimal', false, true> | EdmTypeField<PlannedOrderComponent, 'Edm.Boolean', false, true> | OrderableEdmTypeField<PlannedOrderComponent, 'Edm.DateTimeOffset', true, true> | OneToOneLink<PlannedOrderComponent, PlannedOrderHeader>> = [
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
  export const ALL_FIELDS: AllFields<PlannedOrderComponent> = new AllFields('*', PlannedOrderComponent);
  /**
   * All key fields of the PlannedOrderComponent entity.
   */
  export const _keyFields: Array<Field<PlannedOrderComponent, boolean, boolean>> = [PlannedOrderComponent.PLANNED_ORDER, PlannedOrderComponent.RESERVATION, PlannedOrderComponent.RESERVATION_ITEM];
  /**
   * Mapping of all key field names to the respective static field property PlannedOrderComponent.
   */
  export const _keys: { [keys: string]: Field<PlannedOrderComponent, boolean, boolean> } = PlannedOrderComponent._keyFields.reduce((acc: { [keys: string]: Field<PlannedOrderComponent, boolean, boolean> }, field: Field<PlannedOrderComponent, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
