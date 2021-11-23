import { CreateRequestBuilderV4, DeleteRequestBuilderV4, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, ODataBatchChangeSetV4, ODataBatchRequestBuilderV4, UpdateRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PlannedOrderCapacity, PlannedOrderComponent, PlannedOrderHeader } from './index';
/**
 * Batch builder for operations supported on the Plannedorder_0001.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch(...requests: Array<ReadPlannedorder_0001RequestBuilder | ODataBatchChangeSetV4<WritePlannedorder_0001RequestBuilder>>): ODataBatchRequestBuilderV4;
export declare function batch(requests: Array<ReadPlannedorder_0001RequestBuilder | ODataBatchChangeSetV4<WritePlannedorder_0001RequestBuilder>>): ODataBatchRequestBuilderV4;
/**
 * Change set constructor consists of write operations supported on the Plannedorder_0001.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset(...requests: Array<WritePlannedorder_0001RequestBuilder>): ODataBatchChangeSetV4<WritePlannedorder_0001RequestBuilder>;
export declare function changeset(requests: Array<WritePlannedorder_0001RequestBuilder>): ODataBatchChangeSetV4<WritePlannedorder_0001RequestBuilder>;
export declare const defaultPlannedorder_0001Path = "/odata/v4";
export declare type ReadPlannedorder_0001RequestBuilder = GetAllRequestBuilderV4<PlannedOrderCapacity> | GetAllRequestBuilderV4<PlannedOrderComponent> | GetAllRequestBuilderV4<PlannedOrderHeader> | GetByKeyRequestBuilderV4<PlannedOrderCapacity> | GetByKeyRequestBuilderV4<PlannedOrderComponent> | GetByKeyRequestBuilderV4<PlannedOrderHeader>;
export declare type WritePlannedorder_0001RequestBuilder = CreateRequestBuilderV4<PlannedOrderCapacity> | UpdateRequestBuilderV4<PlannedOrderCapacity> | DeleteRequestBuilderV4<PlannedOrderCapacity> | CreateRequestBuilderV4<PlannedOrderComponent> | UpdateRequestBuilderV4<PlannedOrderComponent> | DeleteRequestBuilderV4<PlannedOrderComponent> | CreateRequestBuilderV4<PlannedOrderHeader> | UpdateRequestBuilderV4<PlannedOrderHeader> | DeleteRequestBuilderV4<PlannedOrderHeader>;
//# sourceMappingURL=BatchRequest.d.ts.map