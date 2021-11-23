/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PlannedOrderCapacityRequestBuilder } from './PlannedOrderCapacityRequestBuilder';
import { Moment } from 'moment';
import { Sap_Message } from './Sap_Message';
import { AllFields, CollectionField, Constructable, CustomFieldV4, EdmTypeField, EntityBuilderType, EntityV4, Field, FieldBuilder, OneToOneLink, OrderableEdmTypeField, Time } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PlannedOrderCapacity" of service "com.sap.gateway.srvd_a2x.api_plannedorder.v0001".
 */
export class PlannedOrderCapacity extends EntityV4 implements PlannedOrderCapacityType {
  /**
   * Technical entity name for PlannedOrderCapacity.
   */
  static _entityName = 'PlannedOrderCapacity';
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
   * Capacity Requirement.
   * Maximum length: 12.
   */
  capacityRequirement!: string;
  /**
   * Capacity Requirement Item.
   * Maximum length: 8.
   */
  capacityRequirementItem!: string;
  /**
   * Capacity Rqmt Item Capacity.
   * Maximum length: 4.
   */
  capacityRqmtItemCapacity!: string;
  /**
   * Planned Order Type.
   * Maximum length: 4.
   */
  plannedOrderType!: string;
  /**
   * Sequence.
   * Maximum length: 6.
   */
  sequence!: string;
  /**
   * Operation.
   * Maximum length: 4.
   */
  operation!: string;
  /**
   * Sub Operation.
   * Maximum length: 4.
   */
  subOperation!: string;
  /**
   * Work Center.
   * Maximum length: 8.
   */
  workCenter!: string;
  /**
   * Capacity Category Code.
   * Maximum length: 3.
   */
  capacityCategoryCode!: string;
  /**
   * Capacity.
   * Maximum length: 8.
   */
  capacity!: string;
  /**
   * Mrp Controller.
   * Maximum length: 3.
   */
  mrpController!: string;
  /**
   * Mrp Plant.
   * Maximum length: 4.
   */
  mrpPlant!: string;
  /**
   * Operation Latest Start Date.
   * @nullable
   */
  operationLatestStartDate?: Moment;
  /**
   * Operation Latest Start Time.
   */
  operationLatestStartTime!: Time;
  /**
   * Operation Latest End Date.
   * @nullable
   */
  operationLatestEndDate?: Moment;
  /**
   * Operation Latest End Time.
   */
  operationLatestEndTime!: Time;
  /**
   * Operation Earliest Start Date.
   * @nullable
   */
  operationEarliestStartDate?: Moment;
  /**
   * Operation Earliest Start Time.
   */
  operationEarliestStartTime!: Time;
  /**
   * Operation Earliest End Date.
   * @nullable
   */
  operationEarliestEndDate?: Moment;
  /**
   * Operation Earliest End Time.
   */
  operationEarliestEndTime!: Time;
  /**
   * Op Ltst Schedld Procg Strt Dte.
   * @nullable
   */
  opLtstSchedldProcgStrtDte?: Moment;
  /**
   * Op Ltst Schedld Procg Strt Tme.
   */
  opLtstSchedldProcgStrtTme!: Time;
  /**
   * Op Ltst Schedld Trdwn Strt Dte.
   * @nullable
   */
  opLtstSchedldTrdwnStrtDte?: Moment;
  /**
   * Op Ltst Schedld Trdwn Strt Tme.
   */
  opLtstSchedldTrdwnStrtTme!: Time;
  /**
   * Scheduled Basic End Time.
   */
  scheduledBasicEndTime!: Time;
  /**
   * Scheduled Basic Start Time.
   */
  scheduledBasicStartTime!: Time;
  /**
   * Capacity Requirement Unit.
   * Maximum length: 3.
   */
  capacityRequirementUnit!: string;
  /**
   * Unit Of Measure Iso Code.
   * Maximum length: 3.
   */
  unitOfMeasureIsoCode!: string;
  /**
   * Scheduled Cap Req Op Seg Setup Durn.
   */
  scheduledCapReqOpSegSetupDurn!: number;
  /**
   * Remaining Cap Req Op Seg Setup Durn.
   */
  remainingCapReqOpSegSetupDurn!: number;
  /**
   * Scheduled Cap Req Op Seg Procg Durn.
   */
  scheduledCapReqOpSegProcgDurn!: number;
  /**
   * Remaining Cap Req Op Seg Procg Durn.
   */
  remainingCapReqOpSegProcgDurn!: number;
  /**
   * Scheduled Cap Req Op Seg Trdwn Durn.
   */
  scheduledCapReqOpSegTrdwnDurn!: number;
  /**
   * Remaining Cap Req Op Seg Trdwn Durn.
   */
  remainingCapReqOpSegTrdwnDurn!: number;
  /**
   * Wrk Ctr Has Leading Capacity.
   */
  wrkCtrHasLeadingCapacity!: boolean;
  /**
   * Operation Text.
   * Maximum length: 40.
   */
  operationText!: string;
  /**
   * Planned Order Last Change Date Time.
   * @nullable
   */
  plannedOrderLastChangeDateTime?: Moment;
  /**
   * Sap Messages.
   */
  sapMessages!: Sap_Message[];
  /**
   * One-to-one navigation property to the [[PlannedOrderHeader]] entity.
   */
  plannedOrder_1?: PlannedOrderHeader | null;

  /**
   * Returns an entity builder to construct instances of `PlannedOrderCapacity`.
   * @returns A builder that constructs instances of entity type `PlannedOrderCapacity`.
   */
  static builder(): EntityBuilderType<PlannedOrderCapacity, PlannedOrderCapacityType> {
    return EntityV4.entityBuilder(PlannedOrderCapacity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PlannedOrderCapacity` entity type.
   * @returns A `PlannedOrderCapacity` request builder.
   */
  static requestBuilder(): PlannedOrderCapacityRequestBuilder {
    return new PlannedOrderCapacityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PlannedOrderCapacity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PlannedOrderCapacity`.
   */
  static customField(fieldName: string): CustomFieldV4<PlannedOrderCapacity> {
    return EntityV4.customFieldSelector(fieldName, PlannedOrderCapacity);
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

export interface PlannedOrderCapacityType {
  plannedOrder: string;
  capacityRequirement: string;
  capacityRequirementItem: string;
  capacityRqmtItemCapacity: string;
  plannedOrderType: string;
  sequence: string;
  operation: string;
  subOperation: string;
  workCenter: string;
  capacityCategoryCode: string;
  capacity: string;
  mrpController: string;
  mrpPlant: string;
  operationLatestStartDate?: Moment | null;
  operationLatestStartTime: Time;
  operationLatestEndDate?: Moment | null;
  operationLatestEndTime: Time;
  operationEarliestStartDate?: Moment | null;
  operationEarliestStartTime: Time;
  operationEarliestEndDate?: Moment | null;
  operationEarliestEndTime: Time;
  opLtstSchedldProcgStrtDte?: Moment | null;
  opLtstSchedldProcgStrtTme: Time;
  opLtstSchedldTrdwnStrtDte?: Moment | null;
  opLtstSchedldTrdwnStrtTme: Time;
  scheduledBasicEndTime: Time;
  scheduledBasicStartTime: Time;
  capacityRequirementUnit: string;
  unitOfMeasureIsoCode: string;
  scheduledCapReqOpSegSetupDurn: number;
  remainingCapReqOpSegSetupDurn: number;
  scheduledCapReqOpSegProcgDurn: number;
  remainingCapReqOpSegProcgDurn: number;
  scheduledCapReqOpSegTrdwnDurn: number;
  remainingCapReqOpSegTrdwnDurn: number;
  wrkCtrHasLeadingCapacity: boolean;
  operationText: string;
  plannedOrderLastChangeDateTime?: Moment | null;
  sapMessages: Sap_Message[];
  plannedOrder_1?: PlannedOrderHeaderType | null;
}

export namespace PlannedOrderCapacity {
  const _fieldBuilder: FieldBuilder<Constructable<PlannedOrderCapacity>> = new FieldBuilder(PlannedOrderCapacity);
  /**
   * Static representation of the [[plannedOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANNED_ORDER = _fieldBuilder.buildEdmTypeField('PlannedOrder', 'Edm.String', false);
  /**
   * Static representation of the [[capacityRequirement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAPACITY_REQUIREMENT = _fieldBuilder.buildEdmTypeField('CapacityRequirement', 'Edm.String', false);
  /**
   * Static representation of the [[capacityRequirementItem]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAPACITY_REQUIREMENT_ITEM = _fieldBuilder.buildEdmTypeField('CapacityRequirementItem', 'Edm.String', false);
  /**
   * Static representation of the [[capacityRqmtItemCapacity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAPACITY_RQMT_ITEM_CAPACITY = _fieldBuilder.buildEdmTypeField('CapacityRqmtItemCapacity', 'Edm.String', false);
  /**
   * Static representation of the [[plannedOrderType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANNED_ORDER_TYPE = _fieldBuilder.buildEdmTypeField('PlannedOrderType', 'Edm.String', false);
  /**
   * Static representation of the [[sequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE = _fieldBuilder.buildEdmTypeField('Sequence', 'Edm.String', false);
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION = _fieldBuilder.buildEdmTypeField('Operation', 'Edm.String', false);
  /**
   * Static representation of the [[subOperation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_OPERATION = _fieldBuilder.buildEdmTypeField('SubOperation', 'Edm.String', false);
  /**
   * Static representation of the [[workCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_CENTER = _fieldBuilder.buildEdmTypeField('WorkCenter', 'Edm.String', false);
  /**
   * Static representation of the [[capacityCategoryCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAPACITY_CATEGORY_CODE = _fieldBuilder.buildEdmTypeField('CapacityCategoryCode', 'Edm.String', false);
  /**
   * Static representation of the [[capacity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAPACITY = _fieldBuilder.buildEdmTypeField('Capacity', 'Edm.String', false);
  /**
   * Static representation of the [[mrpController]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MRP_CONTROLLER = _fieldBuilder.buildEdmTypeField('MRPController', 'Edm.String', false);
  /**
   * Static representation of the [[mrpPlant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MRP_PLANT = _fieldBuilder.buildEdmTypeField('MRPPlant', 'Edm.String', false);
  /**
   * Static representation of the [[operationLatestStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION_LATEST_START_DATE = _fieldBuilder.buildEdmTypeField('OperationLatestStartDate', 'Edm.Date', true);
  /**
   * Static representation of the [[operationLatestStartTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION_LATEST_START_TIME = _fieldBuilder.buildEdmTypeField('OperationLatestStartTime', 'Edm.TimeOfDay', false);
  /**
   * Static representation of the [[operationLatestEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION_LATEST_END_DATE = _fieldBuilder.buildEdmTypeField('OperationLatestEndDate', 'Edm.Date', true);
  /**
   * Static representation of the [[operationLatestEndTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION_LATEST_END_TIME = _fieldBuilder.buildEdmTypeField('OperationLatestEndTime', 'Edm.TimeOfDay', false);
  /**
   * Static representation of the [[operationEarliestStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION_EARLIEST_START_DATE = _fieldBuilder.buildEdmTypeField('OperationEarliestStartDate', 'Edm.Date', true);
  /**
   * Static representation of the [[operationEarliestStartTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION_EARLIEST_START_TIME = _fieldBuilder.buildEdmTypeField('OperationEarliestStartTime', 'Edm.TimeOfDay', false);
  /**
   * Static representation of the [[operationEarliestEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION_EARLIEST_END_DATE = _fieldBuilder.buildEdmTypeField('OperationEarliestEndDate', 'Edm.Date', true);
  /**
   * Static representation of the [[operationEarliestEndTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION_EARLIEST_END_TIME = _fieldBuilder.buildEdmTypeField('OperationEarliestEndTime', 'Edm.TimeOfDay', false);
  /**
   * Static representation of the [[opLtstSchedldProcgStrtDte]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OP_LTST_SCHEDLD_PROCG_STRT_DTE = _fieldBuilder.buildEdmTypeField('OpLtstSchedldProcgStrtDte', 'Edm.Date', true);
  /**
   * Static representation of the [[opLtstSchedldProcgStrtTme]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OP_LTST_SCHEDLD_PROCG_STRT_TME = _fieldBuilder.buildEdmTypeField('OpLtstSchedldProcgStrtTme', 'Edm.TimeOfDay', false);
  /**
   * Static representation of the [[opLtstSchedldTrdwnStrtDte]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OP_LTST_SCHEDLD_TRDWN_STRT_DTE = _fieldBuilder.buildEdmTypeField('OpLtstSchedldTrdwnStrtDte', 'Edm.Date', true);
  /**
   * Static representation of the [[opLtstSchedldTrdwnStrtTme]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OP_LTST_SCHEDLD_TRDWN_STRT_TME = _fieldBuilder.buildEdmTypeField('OpLtstSchedldTrdwnStrtTme', 'Edm.TimeOfDay', false);
  /**
   * Static representation of the [[scheduledBasicEndTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHEDULED_BASIC_END_TIME = _fieldBuilder.buildEdmTypeField('ScheduledBasicEndTime', 'Edm.TimeOfDay', false);
  /**
   * Static representation of the [[scheduledBasicStartTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHEDULED_BASIC_START_TIME = _fieldBuilder.buildEdmTypeField('ScheduledBasicStartTime', 'Edm.TimeOfDay', false);
  /**
   * Static representation of the [[capacityRequirementUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAPACITY_REQUIREMENT_UNIT = _fieldBuilder.buildEdmTypeField('CapacityRequirementUnit', 'Edm.String', false);
  /**
   * Static representation of the [[unitOfMeasureIsoCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASURE_ISO_CODE = _fieldBuilder.buildEdmTypeField('UnitOfMeasureISOCode', 'Edm.String', false);
  /**
   * Static representation of the [[scheduledCapReqOpSegSetupDurn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHEDULED_CAP_REQ_OP_SEG_SETUP_DURN = _fieldBuilder.buildEdmTypeField('ScheduledCapReqOpSegSetupDurn', 'Edm.Double', false);
  /**
   * Static representation of the [[remainingCapReqOpSegSetupDurn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMAINING_CAP_REQ_OP_SEG_SETUP_DURN = _fieldBuilder.buildEdmTypeField('RemainingCapReqOpSegSetupDurn', 'Edm.Double', false);
  /**
   * Static representation of the [[scheduledCapReqOpSegProcgDurn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHEDULED_CAP_REQ_OP_SEG_PROCG_DURN = _fieldBuilder.buildEdmTypeField('ScheduledCapReqOpSegProcgDurn', 'Edm.Double', false);
  /**
   * Static representation of the [[remainingCapReqOpSegProcgDurn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMAINING_CAP_REQ_OP_SEG_PROCG_DURN = _fieldBuilder.buildEdmTypeField('RemainingCapReqOpSegProcgDurn', 'Edm.Double', false);
  /**
   * Static representation of the [[scheduledCapReqOpSegTrdwnDurn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCHEDULED_CAP_REQ_OP_SEG_TRDWN_DURN = _fieldBuilder.buildEdmTypeField('ScheduledCapReqOpSegTrdwnDurn', 'Edm.Double', false);
  /**
   * Static representation of the [[remainingCapReqOpSegTrdwnDurn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REMAINING_CAP_REQ_OP_SEG_TRDWN_DURN = _fieldBuilder.buildEdmTypeField('RemainingCapReqOpSegTrdwnDurn', 'Edm.Double', false);
  /**
   * Static representation of the [[wrkCtrHasLeadingCapacity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WRK_CTR_HAS_LEADING_CAPACITY = _fieldBuilder.buildEdmTypeField('WrkCtrHasLeadingCapacity', 'Edm.Boolean', false);
  /**
   * Static representation of the [[operationText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION_TEXT = _fieldBuilder.buildEdmTypeField('OperationText', 'Edm.String', false);
  /**
   * Static representation of the [[plannedOrderLastChangeDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANNED_ORDER_LAST_CHANGE_DATE_TIME = _fieldBuilder.buildEdmTypeField('PlannedOrderLastChangeDateTime', 'Edm.DateTimeOffset', true);
  /**
   * Static representation of the [[sapMessages]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SAP_MESSAGES = _fieldBuilder.buildCollectionField('SAP__Messages', Sap_Message, false);
  /**
   * Static representation of the one-to-one navigation property [[plannedOrder_1]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANNED_ORDER_1: OneToOneLink<PlannedOrderCapacity, PlannedOrderHeader> = new OneToOneLink('_PlannedOrder', PlannedOrderCapacity, PlannedOrderHeader);
  /**
   * All fields of the PlannedOrderCapacity entity.
   */
  export const _allFields: Array<EdmTypeField<PlannedOrderCapacity, 'Edm.String', false, true> | OrderableEdmTypeField<PlannedOrderCapacity, 'Edm.Date', true, true> | OrderableEdmTypeField<PlannedOrderCapacity, 'Edm.TimeOfDay', false, true> | OrderableEdmTypeField<PlannedOrderCapacity, 'Edm.Double', false, true> | EdmTypeField<PlannedOrderCapacity, 'Edm.Boolean', false, true> | OrderableEdmTypeField<PlannedOrderCapacity, 'Edm.DateTimeOffset', true, true> | CollectionField<PlannedOrderCapacity, Sap_Message, false, true> | OneToOneLink<PlannedOrderCapacity, PlannedOrderHeader>> = [
    PlannedOrderCapacity.PLANNED_ORDER,
    PlannedOrderCapacity.CAPACITY_REQUIREMENT,
    PlannedOrderCapacity.CAPACITY_REQUIREMENT_ITEM,
    PlannedOrderCapacity.CAPACITY_RQMT_ITEM_CAPACITY,
    PlannedOrderCapacity.PLANNED_ORDER_TYPE,
    PlannedOrderCapacity.SEQUENCE,
    PlannedOrderCapacity.OPERATION,
    PlannedOrderCapacity.SUB_OPERATION,
    PlannedOrderCapacity.WORK_CENTER,
    PlannedOrderCapacity.CAPACITY_CATEGORY_CODE,
    PlannedOrderCapacity.CAPACITY,
    PlannedOrderCapacity.MRP_CONTROLLER,
    PlannedOrderCapacity.MRP_PLANT,
    PlannedOrderCapacity.OPERATION_LATEST_START_DATE,
    PlannedOrderCapacity.OPERATION_LATEST_START_TIME,
    PlannedOrderCapacity.OPERATION_LATEST_END_DATE,
    PlannedOrderCapacity.OPERATION_LATEST_END_TIME,
    PlannedOrderCapacity.OPERATION_EARLIEST_START_DATE,
    PlannedOrderCapacity.OPERATION_EARLIEST_START_TIME,
    PlannedOrderCapacity.OPERATION_EARLIEST_END_DATE,
    PlannedOrderCapacity.OPERATION_EARLIEST_END_TIME,
    PlannedOrderCapacity.OP_LTST_SCHEDLD_PROCG_STRT_DTE,
    PlannedOrderCapacity.OP_LTST_SCHEDLD_PROCG_STRT_TME,
    PlannedOrderCapacity.OP_LTST_SCHEDLD_TRDWN_STRT_DTE,
    PlannedOrderCapacity.OP_LTST_SCHEDLD_TRDWN_STRT_TME,
    PlannedOrderCapacity.SCHEDULED_BASIC_END_TIME,
    PlannedOrderCapacity.SCHEDULED_BASIC_START_TIME,
    PlannedOrderCapacity.CAPACITY_REQUIREMENT_UNIT,
    PlannedOrderCapacity.UNIT_OF_MEASURE_ISO_CODE,
    PlannedOrderCapacity.SCHEDULED_CAP_REQ_OP_SEG_SETUP_DURN,
    PlannedOrderCapacity.REMAINING_CAP_REQ_OP_SEG_SETUP_DURN,
    PlannedOrderCapacity.SCHEDULED_CAP_REQ_OP_SEG_PROCG_DURN,
    PlannedOrderCapacity.REMAINING_CAP_REQ_OP_SEG_PROCG_DURN,
    PlannedOrderCapacity.SCHEDULED_CAP_REQ_OP_SEG_TRDWN_DURN,
    PlannedOrderCapacity.REMAINING_CAP_REQ_OP_SEG_TRDWN_DURN,
    PlannedOrderCapacity.WRK_CTR_HAS_LEADING_CAPACITY,
    PlannedOrderCapacity.OPERATION_TEXT,
    PlannedOrderCapacity.PLANNED_ORDER_LAST_CHANGE_DATE_TIME,
    PlannedOrderCapacity.SAP_MESSAGES,
    PlannedOrderCapacity.PLANNED_ORDER_1
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PlannedOrderCapacity> = new AllFields('*', PlannedOrderCapacity);
  /**
   * All key fields of the PlannedOrderCapacity entity.
   */
  export const _keyFields: Array<Field<PlannedOrderCapacity, boolean, boolean>> = [PlannedOrderCapacity.PLANNED_ORDER, PlannedOrderCapacity.CAPACITY_REQUIREMENT, PlannedOrderCapacity.CAPACITY_REQUIREMENT_ITEM, PlannedOrderCapacity.CAPACITY_RQMT_ITEM_CAPACITY];
  /**
   * Mapping of all key field names to the respective static field property PlannedOrderCapacity.
   */
  export const _keys: { [keys: string]: Field<PlannedOrderCapacity, boolean, boolean> } = PlannedOrderCapacity._keyFields.reduce((acc: { [keys: string]: Field<PlannedOrderCapacity, boolean, boolean> }, field: Field<PlannedOrderCapacity, boolean, boolean>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
