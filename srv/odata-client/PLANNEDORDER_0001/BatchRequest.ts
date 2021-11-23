/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreateRequestBuilderV4, DeleteRequestBuilderV4, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, ODataBatchChangeSetV4, ODataBatchRequestBuilderV4, UpdateRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { variadicArgumentToArray } from '@sap-cloud-sdk/util';
import { PlannedOrderCapacity, PlannedOrderComponent, PlannedOrderHeader } from './index';

/**
 * Batch builder for operations supported on the Plannedorder_0001.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch(...requests: Array<ReadPlannedorder_0001RequestBuilder | ODataBatchChangeSetV4<WritePlannedorder_0001RequestBuilder>>): ODataBatchRequestBuilderV4;
export function batch(requests: Array<ReadPlannedorder_0001RequestBuilder | ODataBatchChangeSetV4<WritePlannedorder_0001RequestBuilder>>): ODataBatchRequestBuilderV4;
export function batch(first: undefined | ReadPlannedorder_0001RequestBuilder | ODataBatchChangeSetV4<WritePlannedorder_0001RequestBuilder> | Array<ReadPlannedorder_0001RequestBuilder | ODataBatchChangeSetV4<WritePlannedorder_0001RequestBuilder>>, ...rest: Array<ReadPlannedorder_0001RequestBuilder | ODataBatchChangeSetV4<WritePlannedorder_0001RequestBuilder>>): ODataBatchRequestBuilderV4 {
  return new ODataBatchRequestBuilderV4(defaultPlannedorder_0001Path, variadicArgumentToArray(first, rest), map);
}

/**
 * Change set constructor consists of write operations supported on the Plannedorder_0001.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset(...requests: Array<WritePlannedorder_0001RequestBuilder>): ODataBatchChangeSetV4<WritePlannedorder_0001RequestBuilder>;
export function changeset(requests: Array<WritePlannedorder_0001RequestBuilder>): ODataBatchChangeSetV4<WritePlannedorder_0001RequestBuilder>;
export function changeset(first: undefined | WritePlannedorder_0001RequestBuilder | Array<WritePlannedorder_0001RequestBuilder>, ...rest: Array<WritePlannedorder_0001RequestBuilder>): ODataBatchChangeSetV4<WritePlannedorder_0001RequestBuilder> {
  return new ODataBatchChangeSetV4(variadicArgumentToArray(first, rest));
}

export const defaultPlannedorder_0001Path = '/odata/v4';
const map = { 'PlannedOrderCapacity': PlannedOrderCapacity, 'PlannedOrderComponent': PlannedOrderComponent, 'PlannedOrderHeader': PlannedOrderHeader };
export type ReadPlannedorder_0001RequestBuilder = GetAllRequestBuilderV4<PlannedOrderCapacity> | GetAllRequestBuilderV4<PlannedOrderComponent> | GetAllRequestBuilderV4<PlannedOrderHeader> | GetByKeyRequestBuilderV4<PlannedOrderCapacity> | GetByKeyRequestBuilderV4<PlannedOrderComponent> | GetByKeyRequestBuilderV4<PlannedOrderHeader>;
export type WritePlannedorder_0001RequestBuilder = CreateRequestBuilderV4<PlannedOrderCapacity> | UpdateRequestBuilderV4<PlannedOrderCapacity> | DeleteRequestBuilderV4<PlannedOrderCapacity> | CreateRequestBuilderV4<PlannedOrderComponent> | UpdateRequestBuilderV4<PlannedOrderComponent> | DeleteRequestBuilderV4<PlannedOrderComponent> | CreateRequestBuilderV4<PlannedOrderHeader> | UpdateRequestBuilderV4<PlannedOrderHeader> | DeleteRequestBuilderV4<PlannedOrderHeader>;
