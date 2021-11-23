/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SetlDoc } from './SetlDoc';

/**
 * Request builder class for operations supported on the [[SetlDoc]] entity.
 */
export class SetlDocRequestBuilder extends RequestBuilder<SetlDoc> {
  /**
   * Returns a request builder for retrieving one `SetlDoc` entity based on its keys.
   * @param settlmtDoc Key property. See [[SetlDoc.settlmtDoc]].
   * @returns A request builder for creating requests to retrieve one `SetlDoc` entity based on its keys.
   */
  getByKey(settlmtDoc: string): GetByKeyRequestBuilderV4<SetlDoc> {
    return new GetByKeyRequestBuilderV4(SetlDoc, { SettlmtDoc: settlmtDoc });
  }

  /**
   * Returns a request builder for querying all `SetlDoc` entities.
   * @returns A request builder for creating requests to retrieve all `SetlDoc` entities.
   */
  getAll(): GetAllRequestBuilderV4<SetlDoc> {
    return new GetAllRequestBuilderV4(SetlDoc);
  }

  /**
   * Returns a request builder for creating a `SetlDoc` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SetlDoc`.
   */
  create(entity: SetlDoc): CreateRequestBuilderV4<SetlDoc> {
    return new CreateRequestBuilderV4(SetlDoc, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SetlDoc`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SetlDoc`.
   */
  update(entity: SetlDoc): UpdateRequestBuilderV4<SetlDoc> {
    return new UpdateRequestBuilderV4(SetlDoc, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SetlDoc`.
   * @param settlmtDoc Key property. See [[SetlDoc.settlmtDoc]].
   * @returns A request builder for creating requests that delete an entity of type `SetlDoc`.
   */
  delete(settlmtDoc: string): DeleteRequestBuilderV4<SetlDoc>;
  /**
   * Returns a request builder for deleting an entity of type `SetlDoc`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SetlDoc` by taking the entity as a parameter.
   */
  delete(entity: SetlDoc): DeleteRequestBuilderV4<SetlDoc>;
  delete(settlmtDocOrEntity: any): DeleteRequestBuilderV4<SetlDoc> {
    return new DeleteRequestBuilderV4(SetlDoc, settlmtDocOrEntity instanceof SetlDoc ? settlmtDocOrEntity : { SettlmtDoc: settlmtDocOrEntity! });
  }
}
