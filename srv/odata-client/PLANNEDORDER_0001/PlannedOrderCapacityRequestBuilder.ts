/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PlannedOrderCapacity } from './PlannedOrderCapacity';

/**
 * Request builder class for operations supported on the [[PlannedOrderCapacity]] entity.
 */
export class PlannedOrderCapacityRequestBuilder extends RequestBuilder<PlannedOrderCapacity> {
  /**
   * Returns a request builder for retrieving one `PlannedOrderCapacity` entity based on its keys.
   * @param plannedOrder Key property. See [[PlannedOrderCapacity.plannedOrder]].
   * @param capacityRequirement Key property. See [[PlannedOrderCapacity.capacityRequirement]].
   * @param capacityRequirementItem Key property. See [[PlannedOrderCapacity.capacityRequirementItem]].
   * @param capacityRqmtItemCapacity Key property. See [[PlannedOrderCapacity.capacityRqmtItemCapacity]].
   * @returns A request builder for creating requests to retrieve one `PlannedOrderCapacity` entity based on its keys.
   */
  getByKey(plannedOrder: string, capacityRequirement: string, capacityRequirementItem: string, capacityRqmtItemCapacity: string): GetByKeyRequestBuilderV4<PlannedOrderCapacity> {
    return new GetByKeyRequestBuilderV4(PlannedOrderCapacity, {
      PlannedOrder: plannedOrder,
      CapacityRequirement: capacityRequirement,
      CapacityRequirementItem: capacityRequirementItem,
      CapacityRqmtItemCapacity: capacityRqmtItemCapacity
    });
  }

  /**
   * Returns a request builder for querying all `PlannedOrderCapacity` entities.
   * @returns A request builder for creating requests to retrieve all `PlannedOrderCapacity` entities.
   */
  getAll(): GetAllRequestBuilderV4<PlannedOrderCapacity> {
    return new GetAllRequestBuilderV4(PlannedOrderCapacity);
  }

  /**
   * Returns a request builder for creating a `PlannedOrderCapacity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PlannedOrderCapacity`.
   */
  create(entity: PlannedOrderCapacity): CreateRequestBuilderV4<PlannedOrderCapacity> {
    return new CreateRequestBuilderV4(PlannedOrderCapacity, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PlannedOrderCapacity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PlannedOrderCapacity`.
   */
  update(entity: PlannedOrderCapacity): UpdateRequestBuilderV4<PlannedOrderCapacity> {
    return new UpdateRequestBuilderV4(PlannedOrderCapacity, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PlannedOrderCapacity`.
   * @param plannedOrder Key property. See [[PlannedOrderCapacity.plannedOrder]].
   * @param capacityRequirement Key property. See [[PlannedOrderCapacity.capacityRequirement]].
   * @param capacityRequirementItem Key property. See [[PlannedOrderCapacity.capacityRequirementItem]].
   * @param capacityRqmtItemCapacity Key property. See [[PlannedOrderCapacity.capacityRqmtItemCapacity]].
   * @returns A request builder for creating requests that delete an entity of type `PlannedOrderCapacity`.
   */
  delete(plannedOrder: string, capacityRequirement: string, capacityRequirementItem: string, capacityRqmtItemCapacity: string): DeleteRequestBuilderV4<PlannedOrderCapacity>;
  /**
   * Returns a request builder for deleting an entity of type `PlannedOrderCapacity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PlannedOrderCapacity` by taking the entity as a parameter.
   */
  delete(entity: PlannedOrderCapacity): DeleteRequestBuilderV4<PlannedOrderCapacity>;
  delete(plannedOrderOrEntity: any, capacityRequirement?: string, capacityRequirementItem?: string, capacityRqmtItemCapacity?: string): DeleteRequestBuilderV4<PlannedOrderCapacity> {
    return new DeleteRequestBuilderV4(PlannedOrderCapacity, plannedOrderOrEntity instanceof PlannedOrderCapacity ? plannedOrderOrEntity : {
      PlannedOrder: plannedOrderOrEntity!,
      CapacityRequirement: capacityRequirement!,
      CapacityRequirementItem: capacityRequirementItem!,
      CapacityRqmtItemCapacity: capacityRqmtItemCapacity!
    });
  }
}
