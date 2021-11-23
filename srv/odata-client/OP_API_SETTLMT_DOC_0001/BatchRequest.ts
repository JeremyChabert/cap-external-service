/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreateRequestBuilderV4, DeleteRequestBuilderV4, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, ODataBatchChangeSetV4, ODataBatchRequestBuilderV4, UpdateRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { variadicArgumentToArray } from '@sap-cloud-sdk/util';
import { SetlDoc, SetlDocItm } from './index';

/**
 * Batch builder for operations supported on the Op_Api_Settlmt_Doc_0001.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch(...requests: Array<ReadOp_Api_Settlmt_Doc_0001RequestBuilder | ODataBatchChangeSetV4<WriteOp_Api_Settlmt_Doc_0001RequestBuilder>>): ODataBatchRequestBuilderV4;
export function batch(requests: Array<ReadOp_Api_Settlmt_Doc_0001RequestBuilder | ODataBatchChangeSetV4<WriteOp_Api_Settlmt_Doc_0001RequestBuilder>>): ODataBatchRequestBuilderV4;
export function batch(first: undefined | ReadOp_Api_Settlmt_Doc_0001RequestBuilder | ODataBatchChangeSetV4<WriteOp_Api_Settlmt_Doc_0001RequestBuilder> | Array<ReadOp_Api_Settlmt_Doc_0001RequestBuilder | ODataBatchChangeSetV4<WriteOp_Api_Settlmt_Doc_0001RequestBuilder>>, ...rest: Array<ReadOp_Api_Settlmt_Doc_0001RequestBuilder | ODataBatchChangeSetV4<WriteOp_Api_Settlmt_Doc_0001RequestBuilder>>): ODataBatchRequestBuilderV4 {
  return new ODataBatchRequestBuilderV4(defaultOp_Api_Settlmt_Doc_0001Path, variadicArgumentToArray(first, rest), map);
}

/**
 * Change set constructor consists of write operations supported on the Op_Api_Settlmt_Doc_0001.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset(...requests: Array<WriteOp_Api_Settlmt_Doc_0001RequestBuilder>): ODataBatchChangeSetV4<WriteOp_Api_Settlmt_Doc_0001RequestBuilder>;
export function changeset(requests: Array<WriteOp_Api_Settlmt_Doc_0001RequestBuilder>): ODataBatchChangeSetV4<WriteOp_Api_Settlmt_Doc_0001RequestBuilder>;
export function changeset(first: undefined | WriteOp_Api_Settlmt_Doc_0001RequestBuilder | Array<WriteOp_Api_Settlmt_Doc_0001RequestBuilder>, ...rest: Array<WriteOp_Api_Settlmt_Doc_0001RequestBuilder>): ODataBatchChangeSetV4<WriteOp_Api_Settlmt_Doc_0001RequestBuilder> {
  return new ODataBatchChangeSetV4(variadicArgumentToArray(first, rest));
}

export const defaultOp_Api_Settlmt_Doc_0001Path = '/odata/v4';
const map = { 'SetlDoc': SetlDoc, 'SetlDocItm': SetlDocItm };
export type ReadOp_Api_Settlmt_Doc_0001RequestBuilder = GetAllRequestBuilderV4<SetlDoc> | GetAllRequestBuilderV4<SetlDocItm> | GetByKeyRequestBuilderV4<SetlDoc> | GetByKeyRequestBuilderV4<SetlDocItm>;
export type WriteOp_Api_Settlmt_Doc_0001RequestBuilder = CreateRequestBuilderV4<SetlDoc> | UpdateRequestBuilderV4<SetlDoc> | DeleteRequestBuilderV4<SetlDoc> | CreateRequestBuilderV4<SetlDocItm> | UpdateRequestBuilderV4<SetlDocItm> | DeleteRequestBuilderV4<SetlDocItm>;
