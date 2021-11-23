/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { SetlDocItm } from './SetlDocItm';

/**
 * Request builder class for operations supported on the [[SetlDocItm]] entity.
 */
export class SetlDocItmRequestBuilder extends RequestBuilder<SetlDocItm> {
  /**
   * Returns a request builder for retrieving one `SetlDocItm` entity based on its keys.
   * @param settlmtDoc Key property. See [[SetlDocItm.settlmtDoc]].
   * @param settlmtDocItem Key property. See [[SetlDocItm.settlmtDocItem]].
   * @returns A request builder for creating requests to retrieve one `SetlDocItm` entity based on its keys.
   */
  getByKey(settlmtDoc: string, settlmtDocItem: string): GetByKeyRequestBuilderV4<SetlDocItm> {
    return new GetByKeyRequestBuilderV4(SetlDocItm, {
      SettlmtDoc: settlmtDoc,
      SettlmtDocItem: settlmtDocItem
    });
  }

  /**
   * Returns a request builder for querying all `SetlDocItm` entities.
   * @returns A request builder for creating requests to retrieve all `SetlDocItm` entities.
   */
  getAll(): GetAllRequestBuilderV4<SetlDocItm> {
    return new GetAllRequestBuilderV4(SetlDocItm);
  }

  /**
   * Returns a request builder for creating a `SetlDocItm` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SetlDocItm`.
   */
  create(entity: SetlDocItm): CreateRequestBuilderV4<SetlDocItm> {
    return new CreateRequestBuilderV4(SetlDocItm, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SetlDocItm`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SetlDocItm`.
   */
  update(entity: SetlDocItm): UpdateRequestBuilderV4<SetlDocItm> {
    return new UpdateRequestBuilderV4(SetlDocItm, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SetlDocItm`.
   * @param settlmtDoc Key property. See [[SetlDocItm.settlmtDoc]].
   * @param settlmtDocItem Key property. See [[SetlDocItm.settlmtDocItem]].
   * @returns A request builder for creating requests that delete an entity of type `SetlDocItm`.
   */
  delete(settlmtDoc: string, settlmtDocItem: string): DeleteRequestBuilderV4<SetlDocItm>;
  /**
   * Returns a request builder for deleting an entity of type `SetlDocItm`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SetlDocItm` by taking the entity as a parameter.
   */
  delete(entity: SetlDocItm): DeleteRequestBuilderV4<SetlDocItm>;
  delete(settlmtDocOrEntity: any, settlmtDocItem?: string): DeleteRequestBuilderV4<SetlDocItm> {
    return new DeleteRequestBuilderV4(SetlDocItm, settlmtDocOrEntity instanceof SetlDocItm ? settlmtDocOrEntity : {
      SettlmtDoc: settlmtDocOrEntity!,
      SettlmtDocItem: settlmtDocItem!
    });
  }
}
