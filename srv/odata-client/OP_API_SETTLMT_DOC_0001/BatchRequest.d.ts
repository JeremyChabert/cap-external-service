import { CreateRequestBuilderV4, DeleteRequestBuilderV4, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, ODataBatchChangeSetV4, ODataBatchRequestBuilderV4, UpdateRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SetlDoc, SetlDocItm } from './index';
/**
 * Batch builder for operations supported on the Op_Api_Settlmt_Doc_0001.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch(...requests: Array<ReadOp_Api_Settlmt_Doc_0001RequestBuilder | ODataBatchChangeSetV4<WriteOp_Api_Settlmt_Doc_0001RequestBuilder>>): ODataBatchRequestBuilderV4;
export declare function batch(requests: Array<ReadOp_Api_Settlmt_Doc_0001RequestBuilder | ODataBatchChangeSetV4<WriteOp_Api_Settlmt_Doc_0001RequestBuilder>>): ODataBatchRequestBuilderV4;
/**
 * Change set constructor consists of write operations supported on the Op_Api_Settlmt_Doc_0001.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset(...requests: Array<WriteOp_Api_Settlmt_Doc_0001RequestBuilder>): ODataBatchChangeSetV4<WriteOp_Api_Settlmt_Doc_0001RequestBuilder>;
export declare function changeset(requests: Array<WriteOp_Api_Settlmt_Doc_0001RequestBuilder>): ODataBatchChangeSetV4<WriteOp_Api_Settlmt_Doc_0001RequestBuilder>;
export declare const defaultOp_Api_Settlmt_Doc_0001Path = "/odata/v4";
export declare type ReadOp_Api_Settlmt_Doc_0001RequestBuilder = GetAllRequestBuilderV4<SetlDoc> | GetAllRequestBuilderV4<SetlDocItm> | GetByKeyRequestBuilderV4<SetlDoc> | GetByKeyRequestBuilderV4<SetlDocItm>;
export declare type WriteOp_Api_Settlmt_Doc_0001RequestBuilder = CreateRequestBuilderV4<SetlDoc> | UpdateRequestBuilderV4<SetlDoc> | DeleteRequestBuilderV4<SetlDoc> | CreateRequestBuilderV4<SetlDocItm> | UpdateRequestBuilderV4<SetlDocItm> | DeleteRequestBuilderV4<SetlDocItm>;
//# sourceMappingURL=BatchRequest.d.ts.map