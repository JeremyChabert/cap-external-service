/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PlannedOrderComponent } from './PlannedOrderComponent';

/**
 * Request builder class for operations supported on the [[PlannedOrderComponent]] entity.
 */
export class PlannedOrderComponentRequestBuilder extends RequestBuilder<PlannedOrderComponent> {
  /**
   * Returns a request builder for retrieving one `PlannedOrderComponent` entity based on its keys.
   * @param plannedOrder Key property. See [[PlannedOrderComponent.plannedOrder]].
   * @param reservation Key property. See [[PlannedOrderComponent.reservation]].
   * @param reservationItem Key property. See [[PlannedOrderComponent.reservationItem]].
   * @returns A request builder for creating requests to retrieve one `PlannedOrderComponent` entity based on its keys.
   */
  getByKey(plannedOrder: string, reservation: string, reservationItem: string): GetByKeyRequestBuilderV4<PlannedOrderComponent> {
    return new GetByKeyRequestBuilderV4(PlannedOrderComponent, {
      PlannedOrder: plannedOrder,
      Reservation: reservation,
      ReservationItem: reservationItem
    });
  }

  /**
   * Returns a request builder for querying all `PlannedOrderComponent` entities.
   * @returns A request builder for creating requests to retrieve all `PlannedOrderComponent` entities.
   */
  getAll(): GetAllRequestBuilderV4<PlannedOrderComponent> {
    return new GetAllRequestBuilderV4(PlannedOrderComponent);
  }

  /**
   * Returns a request builder for creating a `PlannedOrderComponent` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PlannedOrderComponent`.
   */
  create(entity: PlannedOrderComponent): CreateRequestBuilderV4<PlannedOrderComponent> {
    return new CreateRequestBuilderV4(PlannedOrderComponent, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PlannedOrderComponent`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PlannedOrderComponent`.
   */
  update(entity: PlannedOrderComponent): UpdateRequestBuilderV4<PlannedOrderComponent> {
    return new UpdateRequestBuilderV4(PlannedOrderComponent, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PlannedOrderComponent`.
   * @param plannedOrder Key property. See [[PlannedOrderComponent.plannedOrder]].
   * @param reservation Key property. See [[PlannedOrderComponent.reservation]].
   * @param reservationItem Key property. See [[PlannedOrderComponent.reservationItem]].
   * @returns A request builder for creating requests that delete an entity of type `PlannedOrderComponent`.
   */
  delete(plannedOrder: string, reservation: string, reservationItem: string): DeleteRequestBuilderV4<PlannedOrderComponent>;
  /**
   * Returns a request builder for deleting an entity of type `PlannedOrderComponent`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PlannedOrderComponent` by taking the entity as a parameter.
   */
  delete(entity: PlannedOrderComponent): DeleteRequestBuilderV4<PlannedOrderComponent>;
  delete(plannedOrderOrEntity: any, reservation?: string, reservationItem?: string): DeleteRequestBuilderV4<PlannedOrderComponent> {
    return new DeleteRequestBuilderV4(PlannedOrderComponent, plannedOrderOrEntity instanceof PlannedOrderComponent ? plannedOrderOrEntity : {
      PlannedOrder: plannedOrderOrEntity!,
      Reservation: reservation!,
      ReservationItem: reservationItem!
    });
  }
}
