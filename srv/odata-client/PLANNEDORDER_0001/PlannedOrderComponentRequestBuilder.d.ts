import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PlannedOrderComponent } from './PlannedOrderComponent';
/**
 * Request builder class for operations supported on the [[PlannedOrderComponent]] entity.
 */
export declare class PlannedOrderComponentRequestBuilder extends RequestBuilder<PlannedOrderComponent> {
    /**
     * Returns a request builder for retrieving one `PlannedOrderComponent` entity based on its keys.
     * @param plannedOrder Key property. See [[PlannedOrderComponent.plannedOrder]].
     * @param reservation Key property. See [[PlannedOrderComponent.reservation]].
     * @param reservationItem Key property. See [[PlannedOrderComponent.reservationItem]].
     * @returns A request builder for creating requests to retrieve one `PlannedOrderComponent` entity based on its keys.
     */
    getByKey(plannedOrder: string, reservation: string, reservationItem: string): GetByKeyRequestBuilderV4<PlannedOrderComponent>;
    /**
     * Returns a request builder for querying all `PlannedOrderComponent` entities.
     * @returns A request builder for creating requests to retrieve all `PlannedOrderComponent` entities.
     */
    getAll(): GetAllRequestBuilderV4<PlannedOrderComponent>;
    /**
     * Returns a request builder for creating a `PlannedOrderComponent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PlannedOrderComponent`.
     */
    create(entity: PlannedOrderComponent): CreateRequestBuilderV4<PlannedOrderComponent>;
    /**
     * Returns a request builder for updating an entity of type `PlannedOrderComponent`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PlannedOrderComponent`.
     */
    update(entity: PlannedOrderComponent): UpdateRequestBuilderV4<PlannedOrderComponent>;
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
}
//# sourceMappingURL=PlannedOrderComponentRequestBuilder.d.ts.map